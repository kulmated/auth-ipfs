import { Controller, Post, Request, UseGuards } from "@nestjs/common";
// import { AuthService } from "./auth.service";
import { BasicAuthGuard } from "./guards/basic-auth.guard";
import { LoginResponseDto } from "./dto/LoginResponseDto";
@Controller()
export class AuthController {
    // constructor(private readonly authService: AuthService) {}

    @UseGuards(BasicAuthGuard)
    @Post("auth/login")
    async login(@Request() { authToken }: LoginResponseDto) {
        return authToken;
    }
}
