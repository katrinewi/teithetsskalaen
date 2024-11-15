import com.github.jengelman.gradle.plugins.shadow.tasks.ShadowJar

val ktor_version: String by project
val kotlin_version: String by project
val logback_version: String by project
val exposed_version: String by project

plugins {
    kotlin("jvm") version "1.9.22"
    id("io.ktor.plugin") version "2.3.7"
    id("com.ncorti.ktfmt.gradle") version "0.17.0"
    kotlin("plugin.serialization") version "1.9.21"
    id("com.github.johnrengelman.shadow") version "4.0.4"
}

ktfmt {
    kotlinLangStyle()
}

tasks {
    named<ShadowJar>("shadowJar") {
        mergeServiceFiles()
    }
}

group = "no.teithetsskalaen"
version = "0.0.1"


application {
    mainClass.set("no.teithetsskalaen.ApplicationKt")

    val isDevelopment: Boolean = project.ext.has("development")
    applicationDefaultJvmArgs = listOf("-Dio.ktor.development=$isDevelopment")
}

repositories {
    mavenCentral()
}

dependencies {
    implementation("io.ktor:ktor-server-core-jvm")
    implementation("io.ktor:ktor-server-netty-jvm")

    implementation("io.ktor:ktor-server-content-negotiation:$ktor_version")
    implementation("io.ktor:ktor-serialization-kotlinx-json:$ktor_version")
    implementation("org.jetbrains.kotlinx:kotlinx-serialization-json:1.6.2")

    implementation("org.jetbrains.exposed:exposed-core:$exposed_version")
    implementation("org.jetbrains.exposed:exposed-crypt:$exposed_version")
    implementation("org.jetbrains.exposed:exposed-dao:$exposed_version")
    implementation("org.jetbrains.exposed:exposed-jdbc:$exposed_version")
    implementation("org.jetbrains.exposed:exposed-java-time:$exposed_version")

    implementation("ch.qos.logback:logback-classic:$logback_version")
    testImplementation("io.ktor:ktor-server-tests-jvm")
    testImplementation("org.jetbrains.kotlin:kotlin-test-junit:$kotlin_version")

    implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core:1.7.0-RC")

    implementation("org.postgresql:postgresql:42.7.1")
    implementation("org.flywaydb:flyway-core:10.4.1")
    implementation("org.flywaydb:flyway-database-postgresql:10.4.1")
    implementation("com.zaxxer:HikariCP:5.1.0")

    implementation("io.github.cdimascio:dotenv-kotlin:6.4.1")
}
