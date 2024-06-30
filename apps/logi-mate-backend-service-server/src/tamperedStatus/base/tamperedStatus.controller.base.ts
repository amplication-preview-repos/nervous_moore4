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
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { TamperedStatusService } from "../tamperedStatus.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { TamperedStatusCreateInput } from "./TamperedStatusCreateInput";
import { TamperedStatus } from "./TamperedStatus";
import { TamperedStatusFindManyArgs } from "./TamperedStatusFindManyArgs";
import { TamperedStatusWhereUniqueInput } from "./TamperedStatusWhereUniqueInput";
import { TamperedStatusUpdateInput } from "./TamperedStatusUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class TamperedStatusControllerBase {
  constructor(
    protected readonly service: TamperedStatusService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: TamperedStatus })
  @nestAccessControl.UseRoles({
    resource: "TamperedStatus",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createTamperedStatus(
    @common.Body() data: TamperedStatusCreateInput
  ): Promise<TamperedStatus> {
    return await this.service.createTamperedStatus({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [TamperedStatus] })
  @ApiNestedQuery(TamperedStatusFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "TamperedStatus",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async tamperedStatuses(
    @common.Req() request: Request
  ): Promise<TamperedStatus[]> {
    const args = plainToClass(TamperedStatusFindManyArgs, request.query);
    return this.service.tamperedStatuses({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: TamperedStatus })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "TamperedStatus",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async tamperedStatus(
    @common.Param() params: TamperedStatusWhereUniqueInput
  ): Promise<TamperedStatus | null> {
    const result = await this.service.tamperedStatus({
      where: params,
      select: {
        createdAt: true,
        id: true,
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

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: TamperedStatus })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "TamperedStatus",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateTamperedStatus(
    @common.Param() params: TamperedStatusWhereUniqueInput,
    @common.Body() data: TamperedStatusUpdateInput
  ): Promise<TamperedStatus | null> {
    try {
      return await this.service.updateTamperedStatus({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
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
  @swagger.ApiOkResponse({ type: TamperedStatus })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "TamperedStatus",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteTamperedStatus(
    @common.Param() params: TamperedStatusWhereUniqueInput
  ): Promise<TamperedStatus | null> {
    try {
      return await this.service.deleteTamperedStatus({
        where: params,
        select: {
          createdAt: true,
          id: true,
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