package no.teithetsskalaen.model.api

import kotlinx.serialization.*
import java.time.LocalDateTime

@Serializable
data class TeithetDTO(
    val id: Int,
    val title: String,
    val description: String,
    @Contextual
    val createdAt: LocalDateTime
)
