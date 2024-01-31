package no.teithetsskalaen.dao

import com.zaxxer.hikari.HikariConfig
import com.zaxxer.hikari.HikariDataSource
import kotlinx.coroutines.*
import no.teithetsskalaen.Config
import no.teithetsskalaen.RunMigrations
import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.transactions.experimental.*

object DatabaseSingleton {
    fun init(config: Config) {
        val dataSourceConfig = HikariConfig()
        dataSourceConfig.setUsername(config.username)
        dataSourceConfig.setPassword(config.password)
        dataSourceConfig.setJdbcUrl(config.url)
        dataSourceConfig.setDriverClassName("org.postgresql.Driver")
        dataSourceConfig.setSchema(config.schema)
        dataSourceConfig.setMaximumPoolSize(2)
        val dataSource = HikariDataSource(dataSourceConfig)

        RunMigrations.migrateNamespace("main", config, dataSource)
        Database.connect(dataSource)
    }

    suspend fun <T> dbQuery(block: suspend () -> T): T =
        newSuspendedTransaction(Dispatchers.IO) { block() }
}
