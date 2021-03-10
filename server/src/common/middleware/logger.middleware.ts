import { Logger } from '@nestjs/common'

export function LoggerMiddleware( req, res, next ): any {
    Logger.log( req );
    next();
}
