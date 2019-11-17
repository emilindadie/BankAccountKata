import { RequestHandler } from 'express';
import * as passport from 'passport';

export class BaseRoute {
    protected protectedRoute() {
        const jwtAuth: RequestHandler = passport.authenticate('jwt', {
            session: false,
        });
        return jwtAuth;
    }
}
