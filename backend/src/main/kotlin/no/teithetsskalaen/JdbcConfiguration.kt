package no.teithetsskalaen

import io.github.cdimascio.dotenv.dotenv

val dotenv = dotenv { ignoreIfMissing = true }

class MissingVariableException(name: String) :
    Exception(
        "Missing environment variable '$name'. Either set it as a environment variables or add it to the .env file."
    )

data class Config(
    val url: String,
    val driver: String,
    val username: String,
    val schema: String,
    val password: String,
    val migrationsTable: String,
    val migrationsLocations: List<String>,
    val migrationsPlaceholders: Map<String, String> = emptyMap(),
    val port: Int,
) {
    companion object {
        private fun unsafeLoadVariable(name: String): String {
            return dotenv[name] ?: throw MissingVariableException(name)
        }

        fun loadFromEnv(): Config {
            val url = unsafeLoadVariable("DB_URL")
            val username = unsafeLoadVariable("DB_USERNAME")
            val password = unsafeLoadVariable("DB_PASSWORD")
            val schema = dotenv["DB_SCHEMA"] ?: "teithetsskalaen"
            val port = (dotenv["PORT"] ?: "6969").toInt()
            return Config(
                url = url,
                driver = "org.postgresql.Driver",
                username = username,
                password = password,
                migrationsTable = "migrations",
                migrationsLocations = listOf("classpath:db/migrations"),
                migrationsPlaceholders = mapOf(),
                schema = schema,
                port = port
            )
        }
    }
}
