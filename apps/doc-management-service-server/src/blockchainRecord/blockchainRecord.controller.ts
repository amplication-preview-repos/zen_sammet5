import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BlockchainRecordService } from "./blockchainRecord.service";
import { BlockchainRecordControllerBase } from "./base/blockchainRecord.controller.base";

@swagger.ApiTags("blockchainRecords")
@common.Controller("blockchainRecords")
export class BlockchainRecordController extends BlockchainRecordControllerBase {
  constructor(protected readonly service: BlockchainRecordService) {
    super(service);
  }
}
