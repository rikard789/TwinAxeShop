FROM maven:3-openjdk-17 AS build
COPY . .
RUN mvn clean package -DskipTests

FROM openjdk:17-jdk-slim
COPY --from=build /target/twinaxeshop-0.0.1-SNAPSHOT.jar twinaxeshop.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "twinaxeshop.jar"]