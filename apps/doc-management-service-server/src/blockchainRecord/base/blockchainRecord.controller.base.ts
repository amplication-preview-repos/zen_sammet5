/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { BlockchainRecordService } from "../blockchainRecord.service";
import { BlockchainRecordCreateInput } from "./BlockchainRecordCreateInput";
import { BlockchainRecord } from "./BlockchainRecord";
import { BlockchainRecordFindManyArgs } from "./BlockchainRecordFindManyArgs";
import { BlockchainRecordWhereUniqueInput } from "./BlockchainRecordWhereUniqueInput";
import { BlockchainRecordUpdateInput } from "./BlockchainRecordUpdateInput";

export class BlockchainRecordControllerBase {
  constructor(protected readonly service: BlockchainRecordService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: BlockchainRecord })
  async createBlockchainRecord(
    @common.Body() data: BlockchainRecordCreateInput
  ): Promise<BlockchainRecord> {
    return await this.service.createBlockchainRecord({
      data: {
        ...data,

        document: data.document
          ? {
              connect: data.document,
            }
          : undefined,
      },
      select: {
        blockchainHash: true,
        createdAt: true,

        document: {
          select: {
            id: true,
          },
        },

        id: true,
        timestamp: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [BlockchainRecord] })
  @ApiNestedQuery(BlockchainRecordFindManyArgs)
  async blockchainRecords(
    @common.Req() request: Request
  ): Promise<BlockchainRecord[]> {
    const args = plainToClass(BlockchainRecordFindManyArgs, request.query);
    return this.service.blockchainRecords({
      ...args,
      select: {
        blockchainHash: true,
        createdAt: true,

        document: {
          select: {
            id: true,
          },
        },

        id: true,
        timestamp: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: BlockchainRecord })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async blockchainRecord(
    @common.Param() params: BlockchainRecordWhereUniqueInput
  ): Promise<BlockchainRecord | null> {
    const result = await this.service.blockchainRecord({
      where: params,
      select: {
        blockchainHash: true,
        createdAt: true,

        document: {
          select: {
            id: true,
          },
        },

        id: true,
        timestamp: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: BlockchainRecord })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateBlockchainRecord(
    @common.Param() params: BlockchainRecordWhereUniqueInput,
    @common.Body() data: BlockchainRecordUpdateInput
  ): Promise<BlockchainRecord | null> {
    try {
      return await this.service.updateBlockchainRecord({
        where: params,
        data: {
          ...data,

          document: data.document
            ? {
                connect: data.document,
              }
            : undefined,
        },
        select: {
          blockchainHash: true,
          createdAt: true,

          document: {
            select: {
              id: true,
            },
          },

          id: true,
          timestamp: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: BlockchainRecord })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteBlockchainRecord(
    @common.Param() params: BlockchainRecordWhereUniqueInput
  ): Promise<BlockchainRecord | null> {
    try {
      return await this.service.deleteBlockchainRecord({
        where: params,
        select: {
          blockchainHash: true,
          createdAt: true,

          document: {
            select: {
              id: true,
            },
          },

          id: true,
          timestamp: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}