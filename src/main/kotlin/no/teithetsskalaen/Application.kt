package no.teithetsskalaen

import io.ktor.server.application.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*
import kotlinx.coroutines.runBlocking
import no.teithetsskalaen.plugins.*

fun main() {
    val mainConfig = Config.loadFromEnv()
    runBlocking {
        RunMigrations.migrateNamespace("main", mainConfig)
    }
    val server = embeddedServer(
        Netty,
        port = mainConfig.port,
        host = "0.0.0.0",
        module = Application::module
    )

    server.start(wait = true)
}

fun Application.module() {
    configureRouting()
}
