package no.teithetsskalaen.model.domain

import java.time.LocalDateTime
import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.javatime.datetime

data class Teithet(
    val id: Int,
    val title: String,
    val description: String,
    val createdAt: LocalDateTime,
)

object Teithets : Table() {
    val id = integer("id").autoIncrement()
    val title = text("title")
    val description = text("description")
    val createdAt = datetime("created_at")

    override val primaryKey = PrimaryKey(id)
}
