/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, UnlockAttempt as PrismaUnlockAttempt } from "@prisma/client";

export class UnlockAttemptServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.UnlockAttemptCountArgs, "select">
  ): Promise<number> {
    return this.prisma.unlockAttempt.count(args);
  }

  async unlockAttempts(
    args: Prisma.UnlockAttemptFindManyArgs
  ): Promise<PrismaUnlockAttempt[]> {
    return this.prisma.unlockAttempt.findMany(args);
  }
  async unlockAttempt(
    args: Prisma.UnlockAttemptFindUniqueArgs
  ): Promise<PrismaUnlockAttempt | null> {
    return this.prisma.unlockAttempt.findUnique(args);
  }
  async createUnlockAttempt(
    args: Prisma.UnlockAttemptCreateArgs
  ): Promise<PrismaUnlockAttempt> {
    return this.prisma.unlockAttempt.create(args);
  }
  async updateUnlockAttempt(
    args: Prisma.UnlockAttemptUpdateArgs
  ): Promise<PrismaUnlockAttempt> {
    return this.prisma.unlockAttempt.update(args);
  }
  async deleteUnlockAttempt(
    args: Prisma.UnlockAttemptDeleteArgs
  ): Promise<PrismaUnlockAttempt> {
    return this.prisma.unlockAttempt.delete(args);
  }
}