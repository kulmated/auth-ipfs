import { Strategy } from "passport-local";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthService } from "../auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, "basicAuth") {
    constructor(private authService: AuthService) {
        super();
    }

    async validate(email: string, password: string): Promise<any> {
        const authInfo = await this.authService.validateUser(email, password);
        if (!authInfo) {
            throw new UnauthorizedException();
        }
        return authInfo;
    }
}
