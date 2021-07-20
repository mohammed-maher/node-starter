import {
  Strategy,
  ExtractJwt,
  StrategyOptions,
  VerifyCallback,
} from "passport-jwt";
import { SECRET_KEY } from "../secrets";

const options: StrategyOptions = {
  secretOrKey: SECRET_KEY,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

const verify =
  (strict = true): VerifyCallback =>
  async (payload, done) => {
    if (strict) {
      // Strict login
    } else {
      // Instruct login
    }

    done(null, null);
  };

const JWTStrategy = new Strategy(options, verify(false));
const JWTStrictStrategy = new Strategy(options, verify(true));

export { JWTStrategy, JWTStrictStrategy };
