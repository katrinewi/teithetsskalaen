package no.teithetsskalaen.plugins

import io.ktor.server.application.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import no.teithetsskalaen.controller.Teithet

fun Application.configureRouting() {
    routing {
        Teithet()
    }
}
