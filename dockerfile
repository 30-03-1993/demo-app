# ---------- Etapa 1 : build Maven ----------
FROM maven:3.9-eclipse-temurin-17 AS builder
WORKDIR /workspace

# Copiamos sólo el pom.xml primero para aprovechar la caché
COPY backend/pom.xml backend/
RUN mvn -f backend/pom.xml -q dependency:go-offline

# Copiamos el código fuente y construimos el jar
COPY backend/src backend/src
RUN mvn -f backend/pom.xml -q clean package -DskipTests

# ---------- Etapa 2 : runtime ----------
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
# Copiamos el artefacto desde la etapa anterior
COPY --from=builder /workspace/backend/target/demo-0.0.1-SNAPSHOT.jar app.jar

# Render redirige el tráfico al puerto indicado por $PORT (por defecto 10000)
ENV PORT 10000
EXPOSE 10000

# Pasamos el puerto a Spring Boot
ENTRYPOINT ["sh","-c","java -jar app.jar --server.port=${PORT}"]
