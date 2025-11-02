import { Reflector } from '@nestjs/core';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Roles } from 'src/decorator/roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    // 1. Lấy các role "bắt buộc" từ decorator @Roles()
    const requiredRoles = this.reflector.getAllAndOverride<string[]>(Roles, [
      context.getHandler(),
      context.getClass(),
    ]);

    // 2. SỬA LỖI LOGIC:
    // Nếu route không yêu cầu role (@Roles), thì cho qua
    if (!requiredRoles) {
      return true;
    }
    // 3. Lấy thông tin user từ request (đã được xác thực bởi JwtAuthGuard)
    const { user } = context.switchToHttp().getRequest();

    // 4. Lấy 'role' từ user đã được xác thực, KHÔNG LẤY TỪ HEADER
    // (Giả sử payload JWT của bạn có chứa 'role' như 'admin' hoặc 'member')
    const userRoles = [user.role]; // (Nếu user.role là mảng, thì dùng: const userRoles = user.roles)

    // 5. Kiểm tra (hàm này của bạn đã đúng)
    return this.validateRoles(requiredRoles, userRoles);
  }

  validateRoles(roles: string[], userRoles: string[]) {
    return roles.some((role) => userRoles.includes(role));
  }
}