import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BlockchainRecordServiceBase } from "./base/blockchainRecord.service.base";

@Injectable()
export class BlockchainRecordService extends BlockchainRecordServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
