FROM node:20-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:20-alpine
WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev

COPY --from=build /app/dist ./dist
COPY db.sqlite ./db.sqlite

# Cria um arquivo SQLite vazio durante o build
RUN touch db.sqlite


ENV PORT=3001
EXPOSE 3001

CMD ["node", "dist/main.js"]
