import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Response } from 'express';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const res: Response = context.switchToHttp().getResponse<Response>();

    if (res.statusCode === 201) res.statusCode = 200;

    return next.handle().pipe(
      map((result: Record<string, unknown>) => ({
        success: true,
        result,
      })),
    );
  }
}
