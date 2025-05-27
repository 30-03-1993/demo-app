# ---------- Etapa 1 : build Maven ----------
FROM maven:3.9-eclipse-temurin-17 AS builder
WORKDIR /app

# Copiar solo el pom.xml para cachear dependencias
COPY backend/pom.xml ./backend/
RUN mvn -f backend/pom.xml dependency:go-offline

# Copiar todo el código fuente
COPY backend ./backend
RUN mvn -f backend/pom.xml clean package -DskipTests

# ---------- Etapa 2 : runtime ----------
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app

# Copiar el jar generado desde la etapa de build
COPY --from=builder /app/backend/target/demo-0.0.1-SNAPSHOT.jar app.jar

# Puerto para Render
ENV PORT=10000
EXPOSE 10000

# Ejecutar Spring Boot
CMD ["sh", "-c", "java -jar app.jar --server.port=$PORT"]
