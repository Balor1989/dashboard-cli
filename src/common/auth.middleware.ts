import { IMiddleware } from './middleware.interface';
import { NextFunction, Request, Response } from 'express';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const jwt = require('jsonwebtoken');

export class AuthMiddleware implements IMiddleware {
	constructor(private secret: string) {}
	execute(req: Request, res: Response, next: NextFunction): void {
		if (req.headers.authorization) {
			jwt.verify(
				req.headers.authorization.split(' ')[1],
				this.secret,
				(err: string, payload: { email: string }) => {
					if (err) {
						next();
					} else if (payload) {
						req.user = payload.email;
						next();
					}
				},
			);
		} else {
			next();
		}
	}
}
