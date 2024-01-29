package no.teithetsskalaen

import io.ktor.server.application.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*
import kotlinx.coroutines.runBlocking
import no.teithetsskalaen.plugins.*

fun main() {
    runBlocking {
        val mainConfig = JdbcConnectionConfig.loadFromEnv()
        RunMigrations.migrateNamespace("main", mainConfig)
    }
    embeddedServer(Netty, port = 8080, host = "0.0.0.0", module = Application::module)
        .start(wait = true)
}

fun Application.module() {
    configureRouting()
}
