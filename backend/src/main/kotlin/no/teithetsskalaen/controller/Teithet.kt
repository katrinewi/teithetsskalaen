package no.teithetsskalaen.controller

import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import no.teithetsskalaen.dao.teithetsService
import no.teithetsskalaen.model.api.NewTeithetDTO
import no.teithetsskalaen.model.api.TeithetDTO

fun Route.Teithet() {
    route("/teithet") {
        get {
            teithetsService.allTeithets().map(TeithetDTO::fromTeithet).let { teithets ->
                call.respond(teithets)
            }
        }
        get("/{id}") {
            val id = call.parameters["id"]
            val numericId = id?.toInt()
            if(numericId == null) {
                call.respond(HttpStatusCode.BadRequest)
                return@get
            }
            val teithet = teithetsService.getTeithet(numericId)
            if(teithet == null) {
                call.respond(HttpStatusCode.NotFound)
                return@get
            }
            call.respond(TeithetDTO.fromTeithet(teithet))
        }
        post {
            val input = call.receive<NewTeithetDTO>()
            val x = teithetsService.addNewTeithet(input.title, input.description)!!
            val y = TeithetDTO.fromTeithet(x)
            call.respond(y)
        }
    }
}
