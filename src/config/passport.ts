import * as passport from "passport";
import {
  Strategy as JWTStrategy, ExtractJwt,
  StrategyOptions
} from "passport-jwt";
import { Application } from "express";
import { UserEntity } from "src/entity/user";
import * as dotenv from 'dotenv';

export default (app: Application) => {

  dotenv.config();
  app.use(passport.initialize());

  const options: StrategyOptions = {
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWTSECRET
  };

  passport.use(
    new JWTStrategy(options, (payload, done) => {
        UserEntity.findOne({ where: { id: payload.id }}).then(user => {
            if (user) {
                done(null, user);
            } else {
                done(null, false);
            }
        }).catch(err => {
            if (err) {
                return done(err, false);
            }
        });
    })
  );
};