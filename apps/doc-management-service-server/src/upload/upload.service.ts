import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UploadServiceBase } from "./base/upload.service.base";

@Injectable()
export class UploadService extends UploadServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
