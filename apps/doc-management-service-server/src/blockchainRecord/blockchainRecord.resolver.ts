import * as graphql from "@nestjs/graphql";
import { BlockchainRecordResolverBase } from "./base/blockchainRecord.resolver.base";
import { BlockchainRecord } from "./base/BlockchainRecord";
import { BlockchainRecordService } from "./blockchainRecord.service";

@graphql.Resolver(() => BlockchainRecord)
export class BlockchainRecordResolver extends BlockchainRecordResolverBase {
  constructor(protected readonly service: BlockchainRecordService) {
    super(service);
  }
}
