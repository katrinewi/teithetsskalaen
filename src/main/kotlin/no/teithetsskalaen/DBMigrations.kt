package no.teithetsskalaen

import org.flywaydb.core.Flyway
import org.flywaydb.core.api.configuration.FluentConfiguration
import org.flywaydb.core.api.output.MigrateResult
import org.slf4j.LoggerFactory
import kotlin.system.exitProcess

fun dbMigrate(config: Config): MigrateResult {
    val m: FluentConfiguration = Flyway.configure()
        .dataSource(config.url, config.username, config.password)
        .group(true)
        .outOfOrder(false)
        .defaultSchema(config.schema)
        .table(config.migrationsTable)
        .locations(*config.migrationsLocations.toTypedArray())
        .baselineOnMigrate(true)
        .loggers("slf4j")
        .placeholders(
            config.migrationsPlaceholders + mapOf(
                "dbUsername" to config.username,
                "dbPassword" to config.password
            )
        )

    val validated = m
        .ignoreMigrationPatterns("*:pending")
        .load()
        .validateWithResult()

    if (!validated.validationSuccessful) {
        val logger = LoggerFactory.getLogger("RunMigrations")
        for (error in validated.invalidMigrations) {
            logger.warn(
                """
                        |Failed to validate migration:
                        |  - version: ${error.version}
                        |  - path: ${error.filepath}
                        |  - description: ${error.description}
                        |  - error code: ${error.errorDetails.errorCode}
                        |  - error message: ${error.errorDetails.errorMessage}
                    """.trimMargin("|").trim()
            )
        }
    }
    return m.load().migrate()
}

object RunMigrations {
    fun migrateNamespace(label: String, config: Config): Unit {
        val result = dbMigrate(config)
        println("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")
        println("Migrating: $label")
        println("------------------------------------")
        println("Initial schema version: ${result.initialSchemaVersion}")
        println("Target schema version: ${result.targetSchemaVersion}")
        if (result.migrations.isNotEmpty()) {
            println("------------------------------------")
            println("Executed migrations:")
            for (migration in result.migrations) {
                println(" - ${migration.version} ${migration.type} ${migration.description}")
            }
        }
        if (result.warnings.isNotEmpty()) {
            println("------------------------------------")
            System.err.println("WARNINGS:")
            for (warning in result.warnings) {
                System.err.println(" - $warning")
            }
        }
        println("------------------------------------")
        if (result.success) {
            println("Successfully migrated: $label!")
        } else {
            System.err.println("ERROR: Failed to migrate $label!")
            exitProcess(1)
        }
    }
}
