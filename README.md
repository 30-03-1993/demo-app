# Demo App - Auxilio Carretera

## Requisitos
- Java JDK 11+
- Maven
- PostgreSQL
- Node.js y npm

## Configurar base de datos
1. Instala PostgreSQL localmente.
2. Crea la base de datos y usuario:
   ```
   psql -U postgres
   CREATE DATABASE demo_app;
   CREATE USER demo WITH ENCRYPTED PASSWORD 'demo';
   GRANT ALL PRIVILEGES ON DATABASE demo_app TO demo;
   \q
   ```
3. El backend usará jdbc:postgresql://localhost:5432/demo_app con usuario/demo.

## Backend
```bash
cd backend
mvn spring-boot:run
```
- Escuchará en el puerto 8080.

## Frontend
```bash
cd frontend
npm install
npm install @mui/material @mui/icons-material @emotion/react @emotion/styled
npm start
```
- Abre http://localhost:3000

## Uso
1. En la página de login, introduce usuario \`operadora\` y cualquier contraseña.
2. Rellena DNI, Teléfono y Dirección de avería.
3. Pulsa Enviar y verás la ficha del cliente y empresas de grúas y taxis en Alicante.
