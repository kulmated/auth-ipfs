import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import config from "config";
@Module({
    imports: [
        SequelizeModule.forRoot({
            ...config.get("database"),
            autoLoadModels: true,
            synchronize: true,
        }),
    ],
})
export class DatabaseModule {}
