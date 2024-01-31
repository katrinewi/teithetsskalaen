package no.teithetsskalaen.dao

import no.teithetsskalaen.dao.DatabaseSingleton.dbQuery
import no.teithetsskalaen.model.domain.Teithet
import no.teithetsskalaen.model.domain.Teithets
import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.SqlExpressionBuilder.eq
import java.time.LocalDateTime

class TeithetsService {
    private fun resultRowToTeithet(row: ResultRow) = Teithet(
        id = row[Teithets.id],
        title = row[Teithets.title],
        description = row[Teithets.description],
        createdAt = row[Teithets.createdAt],
    )

    suspend fun allTeithets(): List<Teithet> = dbQuery {
        Teithets.selectAll().map(::resultRowToTeithet)
    }

    suspend fun getTeithet(id: Int): Teithet? = dbQuery {
        Teithets
            .select { Teithets.id eq id }
            .map(::resultRowToTeithet)
            .singleOrNull()
    }

    suspend fun addNewTeithet(title: String, description: String): Teithet? = dbQuery {
        val insertStatement = Teithets.insert {
            it[Teithets.title] = title
            it[Teithets.description] = description
            it[Teithets.createdAt] = LocalDateTime.now()
        }

        insertStatement.resultedValues?.single()?.let(::resultRowToTeithet)
    }

}

val teithetsService: TeithetsService = TeithetsService().apply { }
