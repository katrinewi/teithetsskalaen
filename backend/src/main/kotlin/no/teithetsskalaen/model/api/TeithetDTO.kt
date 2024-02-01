package no.teithetsskalaen.model.api

import java.time.LocalDateTime
import kotlinx.serialization.*

@Serializable
data class TeithetDTO(
    val id: Int,
    val title: String,
    val description: String,
    @Contextual val createdAt: LocalDateTime
) {
    companion object {
        fun fromTeithet(teithet: no.teithetsskalaen.model.domain.Teithet) =
            TeithetDTO(
                id = teithet.id,
                title = teithet.title,
                description = teithet.description,
                createdAt = teithet.createdAt
            )
    }
}
