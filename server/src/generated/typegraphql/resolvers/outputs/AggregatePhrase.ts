import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { PhraseAvgAggregate } from "../outputs/PhraseAvgAggregate";
import { PhraseCountAggregate } from "../outputs/PhraseCountAggregate";
import { PhraseMaxAggregate } from "../outputs/PhraseMaxAggregate";
import { PhraseMinAggregate } from "../outputs/PhraseMinAggregate";
import { PhraseSumAggregate } from "../outputs/PhraseSumAggregate";

@TypeGraphQL.ObjectType("AggregatePhrase", {})
export class AggregatePhrase {
  @TypeGraphQL.Field(_type => PhraseCountAggregate, {
    nullable: true
  })
  _count!: PhraseCountAggregate | null;

  @TypeGraphQL.Field(_type => PhraseAvgAggregate, {
    nullable: true
  })
  _avg!: PhraseAvgAggregate | null;

  @TypeGraphQL.Field(_type => PhraseSumAggregate, {
    nullable: true
  })
  _sum!: PhraseSumAggregate | null;

  @TypeGraphQL.Field(_type => PhraseMinAggregate, {
    nullable: true
  })
  _min!: PhraseMinAggregate | null;

  @TypeGraphQL.Field(_type => PhraseMaxAggregate, {
    nullable: true
  })
  _max!: PhraseMaxAggregate | null;
}
