package no.teithetsskalaen

import io.ktor.server.application.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*
import no.teithetsskalaen.plugins.*
import no.teithetsskalaen.dao.DatabaseSingleton

val config = Config.loadFromEnv()

fun main() {
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
    DatabaseSingleton.init(config)
}
