package no.teithetsskalaen

import io.github.cdimascio.dotenv.dotenv

data class JdbcConnectionConfig(
    val url: String,
    val driver: String,
    val username: String,
    val schema: String,
    val password: String,
    val migrationsTable: String,
    val migrationsLocations: List<String>,
    val migrationsPlaceholders: Map<String, String> = emptyMap()
) {
    companion object {
        fun loadFromEnv(): JdbcConnectionConfig {
            val dotenv = dotenv()
            val url = dotenv["DB_URL"]
            val username = dotenv["DB_USERNAME"]
            val password = dotenv["DB_PASSWORD"]
            val schema = dotenv["DB_PASSWORD"] ?: "teithetsskalaen"
            return JdbcConnectionConfig(
                url = url,
                driver = "org.postgresql.Driver",
                username = username,
                password = password,
                migrationsTable = "migrations",
                migrationsLocations = listOf("classpath:db/migrations"),
                migrationsPlaceholders = mapOf(),
                schema = schema
            )
        }
    }
}
