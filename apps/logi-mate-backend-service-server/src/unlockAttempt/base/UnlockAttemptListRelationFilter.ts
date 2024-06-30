/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { UnlockAttemptWhereInput } from "./UnlockAttemptWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class UnlockAttemptListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => UnlockAttemptWhereInput,
  })
  @ValidateNested()
  @Type(() => UnlockAttemptWhereInput)
  @IsOptional()
  @Field(() => UnlockAttemptWhereInput, {
    nullable: true,
  })
  every?: UnlockAttemptWhereInput;

  @ApiProperty({
    required: false,
    type: () => UnlockAttemptWhereInput,
  })
  @ValidateNested()
  @Type(() => UnlockAttemptWhereInput)
  @IsOptional()
  @Field(() => UnlockAttemptWhereInput, {
    nullable: true,
  })
  some?: UnlockAttemptWhereInput;

  @ApiProperty({
    required: false,
    type: () => UnlockAttemptWhereInput,
  })
  @ValidateNested()
  @Type(() => UnlockAttemptWhereInput)
  @IsOptional()
  @Field(() => UnlockAttemptWhereInput, {
    nullable: true,
  })
  none?: UnlockAttemptWhereInput;
}
export { UnlockAttemptListRelationFilter as UnlockAttemptListRelationFilter };