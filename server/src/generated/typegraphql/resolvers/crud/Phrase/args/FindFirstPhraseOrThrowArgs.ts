import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PhraseOrderByWithRelationInput } from "../../../inputs/PhraseOrderByWithRelationInput";
import { PhraseWhereInput } from "../../../inputs/PhraseWhereInput";
import { PhraseWhereUniqueInput } from "../../../inputs/PhraseWhereUniqueInput";
import { PhraseScalarFieldEnum } from "../../../../enums/PhraseScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstPhraseOrThrowArgs {
  @TypeGraphQL.Field(_type => PhraseWhereInput, {
    nullable: true
  })
  where?: PhraseWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PhraseOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PhraseOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PhraseWhereUniqueInput, {
    nullable: true
  })
  cursor?: PhraseWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PhraseScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "phrase" | "translation" | "streak" | "practisedAt"> | undefined;
}
