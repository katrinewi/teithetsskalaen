package no.teithetsskalaen.controller

import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import no.teithetsskalaen.model.api.TeithetDTO

fun Route.Teithet() {
    route("/teithet") {
        get {
            call.respondText("Hello World!")
        }
        get("/{id}") {
            val id = call.parameters["id"]
            println("hall bruder $id")
            val teithet = TeithetDTO(
                id = id!!.toInt(),
                title = "Teithet $id",
                description = "Teithet $id",
                createdAt = java.time.LocalDateTime.now()
            )
            call.respond(
                teithet
            )
        }
        post {
            call.respondText("Post World!")
        }
    }
}
