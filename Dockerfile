# Sử dụng image chính thức của Node.js làm base image
FROM node:12.18-alpine

# Tạo thư mục làm việc trong container
WORKDIR /app

# Sao chép package.json và package-lock.json vào thư mục làm việc
COPY ["package.json", "package-lock.json*", "./"]

# Cài đặt các phụ thuộc của ứng dụng
RUN npm install

# Sao chép mã nguồn ứng dụng vào thư mục làm việc
COPY  . /app

# Mở cổng 8088 để truy cập ứng dụng
EXPOSE 8088

#Chạy ứng dụng khi container khởi động
CMD [ "node", "main.js" ]