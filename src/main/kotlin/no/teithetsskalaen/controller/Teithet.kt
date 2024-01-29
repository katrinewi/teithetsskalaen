package no.teithetsskalaen.controller

import io.ktor.server.application.*
import io.ktor.server.response.*
import io.ktor.server.routing.*

fun Route.Teithet() {
    route("/teithet") {
        get {
            call.respondText("Hello World!")
        }
        get("/:id") {
            val id = call.parameters["id"]
            call.respondText("Hello World! $id")
        }
        post {
            call.respondText("Post World!")
        }
    }
}
