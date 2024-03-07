import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePhraseArgs } from "./args/AggregatePhraseArgs";
import { Phrase } from "../../../models/Phrase";
import { AggregatePhrase } from "../../outputs/AggregatePhrase";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Phrase)
export class AggregatePhraseResolver {
  @TypeGraphQL.Query(_returns => AggregatePhrase, {
    nullable: false
  })
  async aggregatePhrase(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePhraseArgs): Promise<AggregatePhrase> {
    return getPrismaFromContext(ctx).phrase.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
