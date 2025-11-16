import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const token = req.headers['authorization']?.replace('Bearer ', '');

    if (!token) throw new UnauthorizedException('Token não enviado');

    try {
      jwt.verify(token, 'SEGREDO_MICROSSERVICOS');
      next();
    } catch (e) {
      throw new UnauthorizedException('Token inválido');
    }
  }
}
