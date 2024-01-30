package no.teithetsskalaen

import com.zaxxer.hikari.HikariConfig
import com.zaxxer.hikari.HikariDataSource
import io.ktor.server.application.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*
import io.ktor.server.application.*
import io.ktor.server.plugins.contentnegotiation.*
import kotlinx.coroutines.runBlocking
import no.teithetsskalaen.plugins.*
import io.ktor.serialization.kotlinx.json.*

fun main() {
    val config = Config.loadFromEnv()

    val dataSourceConfig = HikariConfig()
    dataSourceConfig.setUsername(config.username)
    dataSourceConfig.setPassword(config.password)
    dataSourceConfig.setJdbcUrl(config.url)
    dataSourceConfig.setDriverClassName("org.postgresql.Driver")
    dataSourceConfig.setSchema(config.schema)
    dataSourceConfig.setMaximumPoolSize(2)
    val dataSource = HikariDataSource(dataSourceConfig)

    runBlocking {
        RunMigrations.migrateNamespace("main", config, dataSource)
    }
    val server = embeddedServer(
        Netty,
        port = config.port,
        host = "0.0.0.0",
        module = Application::module
    )

    server.start(wait = true)
}

fun Application.module() {
    configureRouting()
    configureSerialization()
}
