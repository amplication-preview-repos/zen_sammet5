import * as graphql from "@nestjs/graphql";
import { UploadResolverBase } from "./base/upload.resolver.base";
import { Upload } from "./base/Upload";
import { UploadService } from "./upload.service";

@graphql.Resolver(() => Upload)
export class UploadResolver extends UploadResolverBase {
  constructor(protected readonly service: UploadService) {
    super(service);
  }
}
