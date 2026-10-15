# Tahap 1: Build aplikasi Vite
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Tahap 2: Jalankan dengan Nginx & Konfigurasi Routing SPA
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html

# Tambahkan konfigurasi agar routing halaman Vite tidak error/macet
RUN echo 'server { \
    listen 80; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html index.htm; \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]