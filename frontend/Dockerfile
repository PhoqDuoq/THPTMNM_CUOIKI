# File: frontend/Dockerfile

# 1. Chọn môi trường: Nginx (Web server siêu nhẹ)
FROM nginx:alpine

# 2. Copy file html của bạn vào thư mục hiển thị web của Nginx
COPY index.html /usr/share/nginx/html/index.html

# 3. Nginx mặc định chạy cổng 80, nên không cần cấu hình thêm gì nhiều