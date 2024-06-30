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
import { SmartBoxDeviceService } from "../smartBoxDevice.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { SmartBoxDeviceCreateInput } from "./SmartBoxDeviceCreateInput";
import { SmartBoxDevice } from "./SmartBoxDevice";
import { SmartBoxDeviceFindManyArgs } from "./SmartBoxDeviceFindManyArgs";
import { SmartBoxDeviceWhereUniqueInput } from "./SmartBoxDeviceWhereUniqueInput";
import { SmartBoxDeviceUpdateInput } from "./SmartBoxDeviceUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class SmartBoxDeviceControllerBase {
  constructor(
    protected readonly service: SmartBoxDeviceService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: SmartBoxDevice })
  @nestAccessControl.UseRoles({
    resource: "SmartBoxDevice",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createSmartBoxDevice(
    @common.Body() data: SmartBoxDeviceCreateInput
  ): Promise<SmartBoxDevice> {
    return await this.service.createSmartBoxDevice({
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
  @swagger.ApiOkResponse({ type: [SmartBoxDevice] })
  @ApiNestedQuery(SmartBoxDeviceFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "SmartBoxDevice",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async smartBoxDevices(
    @common.Req() request: Request
  ): Promise<SmartBoxDevice[]> {
    const args = plainToClass(SmartBoxDeviceFindManyArgs, request.query);
    return this.service.smartBoxDevices({
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
  @swagger.ApiOkResponse({ type: SmartBoxDevice })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SmartBoxDevice",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async smartBoxDevice(
    @common.Param() params: SmartBoxDeviceWhereUniqueInput
  ): Promise<SmartBoxDevice | null> {
    const result = await this.service.smartBoxDevice({
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
  @swagger.ApiOkResponse({ type: SmartBoxDevice })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SmartBoxDevice",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateSmartBoxDevice(
    @common.Param() params: SmartBoxDeviceWhereUniqueInput,
    @common.Body() data: SmartBoxDeviceUpdateInput
  ): Promise<SmartBoxDevice | null> {
    try {
      return await this.service.updateSmartBoxDevice({
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
  @swagger.ApiOkResponse({ type: SmartBoxDevice })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SmartBoxDevice",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteSmartBoxDevice(
    @common.Param() params: SmartBoxDeviceWhereUniqueInput
  ): Promise<SmartBoxDevice | null> {
    try {
      return await this.service.deleteSmartBoxDevice({
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