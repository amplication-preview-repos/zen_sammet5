import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UploadService } from "./upload.service";
import { UploadControllerBase } from "./base/upload.controller.base";

@swagger.ApiTags("uploads")
@common.Controller("uploads")
export class UploadController extends UploadControllerBase {
  constructor(protected readonly service: UploadService) {
    super(service);
  }
}
