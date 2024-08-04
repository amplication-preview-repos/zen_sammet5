import { Module } from "@nestjs/common";
import { UploadModuleBase } from "./base/upload.module.base";
import { UploadService } from "./upload.service";
import { UploadController } from "./upload.controller";
import { UploadResolver } from "./upload.resolver";

@Module({
  imports: [UploadModuleBase],
  controllers: [UploadController],
  providers: [UploadService, UploadResolver],
  exports: [UploadService],
})
export class UploadModule {}
