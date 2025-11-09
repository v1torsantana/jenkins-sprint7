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

ENV PORT=3002
EXPOSE 3002

CMD ["node", "dist/main.js"]
