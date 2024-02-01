package no.teithetsskalaen.model.api

import kotlinx.serialization.Serializable

@Serializable
data class NewTeithetDTO(
    val title: String,
    val description: String,
)
