import { Module } from "@nestjs/common";
import { BlockchainRecordModule } from "./blockchainRecord/blockchainRecord.module";
import { DocumentModule } from "./document/document.module";
import { UploadModule } from "./upload/upload.module";
import { UserModule } from "./user/user.module";
import { AccessControlModule } from "./accessControl/accessControl.module";
import { FolderModule } from "./folder/folder.module";
import { AuditLogModule } from "./auditLog/auditLog.module";
import { TagModule } from "./tag/tag.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { StorageModule } from "./storage/storage.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    StorageModule,
    BlockchainRecordModule,
    DocumentModule,
    UploadModule,
    UserModule,
    AccessControlModule,
    FolderModule,
    AuditLogModule,
    TagModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
