FROM eclipse-temurin:21-jdk AS BUILD

COPY . /src
WORKDIR /src
RUN ./gradlew --no-daemon shadowJar

FROM eclipse-temurin:21-jre

COPY --from=BUILD /src/build/libs/teithetsskalaen-kt-all.jar /bin/runner/run.jar
WORKDIR /bin/runner

CMD ["java", "-jar", "run.jar"]
