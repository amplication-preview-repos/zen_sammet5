import { Module } from "@nestjs/common";
import { BlockchainRecordModuleBase } from "./base/blockchainRecord.module.base";
import { BlockchainRecordService } from "./blockchainRecord.service";
import { BlockchainRecordController } from "./blockchainRecord.controller";
import { BlockchainRecordResolver } from "./blockchainRecord.resolver";

@Module({
  imports: [BlockchainRecordModuleBase],
  controllers: [BlockchainRecordController],
  providers: [BlockchainRecordService, BlockchainRecordResolver],
  exports: [BlockchainRecordService],
})
export class BlockchainRecordModule {}
