import { transports, format } from 'winston';
import * as DailyRotateFile from 'winston-daily-rotate-file';

// Định nghĩa transport cho file log (xoay vòng hàng ngày)
const fileTransport = new DailyRotateFile({
  filename: 'logs/application-%DATE%.log', // Tên file log
  datePattern: 'YYYY-MM-DD',
  zippedArchive: true, // Nén file log cũ
  maxSize: '20m', // Kích thước file tối đa
  maxFiles: '14d', // Giữ log trong 14 ngày
  level: 'warn', // Chỉ ghi log từ level 'warn' trở lên (warn, error)
  format: format.combine(
    format.timestamp(),
    format.json(), // Ghi log dưới dạng JSON
  ),
});

// Định nghĩa transport cho file log lỗi (chỉ ghi lỗi)
const errorTransport = new DailyRotateFile({
  filename: 'logs/errors-%DATE%.log',
  datePattern: 'YYYY-MM-DD',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '30d',
  level: 'error', // Chỉ ghi log 'error'
  format: format.combine(
    format.timestamp(),
    format.json(),
  ),
});

// Định nghĩa transport cho console (để vẫn thấy log khi dev)
const consoleTransport = new transports.Console({
  level: 'info', // Hiển thị 'info', 'warn', 'error'
  format: format.combine(
    format.timestamp({ format: 'HH:mm:ss' }),
    format.colorize(), // Thêm màu mè cho đẹp
    format.printf(({ timestamp, level, message, context, trace }) => {
      return `${timestamp} [${level}] ${context ? '[' + context + ']' : ''}: ${message} ${
        trace ? '\n' + trace : ''
      }`;
    }),
  ),
});

export const winstonConfig = {
  transports: [
    consoleTransport,
    fileTransport,
    errorTransport,
  ],
};