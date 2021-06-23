import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService) {}

    async validateUser(email: string, password: string) {
        // TODO: auth here :D
        console.log(password);
        const payload = { email };
        return {
            accessToken: this.jwtService.sign(payload),
        };
    }
}
