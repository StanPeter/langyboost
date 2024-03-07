import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOnePhraseArgs } from "./args/UpsertOnePhraseArgs";
import { Phrase } from "../../../models/Phrase";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Phrase)
export class UpsertOnePhraseResolver {
  @TypeGraphQL.Mutation(_returns => Phrase, {
    nullable: false
  })
  async upsertOnePhrase(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOnePhraseArgs): Promise<Phrase> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).phrase.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
