/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, TamperedStatus as PrismaTamperedStatus } from "@prisma/client";

export class TamperedStatusServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.TamperedStatusCountArgs, "select">
  ): Promise<number> {
    return this.prisma.tamperedStatus.count(args);
  }

  async tamperedStatuses(
    args: Prisma.TamperedStatusFindManyArgs
  ): Promise<PrismaTamperedStatus[]> {
    return this.prisma.tamperedStatus.findMany(args);
  }
  async tamperedStatus(
    args: Prisma.TamperedStatusFindUniqueArgs
  ): Promise<PrismaTamperedStatus | null> {
    return this.prisma.tamperedStatus.findUnique(args);
  }
  async createTamperedStatus(
    args: Prisma.TamperedStatusCreateArgs
  ): Promise<PrismaTamperedStatus> {
    return this.prisma.tamperedStatus.create(args);
  }
  async updateTamperedStatus(
    args: Prisma.TamperedStatusUpdateArgs
  ): Promise<PrismaTamperedStatus> {
    return this.prisma.tamperedStatus.update(args);
  }
  async deleteTamperedStatus(
    args: Prisma.TamperedStatusDeleteArgs
  ): Promise<PrismaTamperedStatus> {
    return this.prisma.tamperedStatus.delete(args);
  }
}
