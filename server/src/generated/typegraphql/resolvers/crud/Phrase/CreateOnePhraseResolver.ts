import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOnePhraseArgs } from "./args/CreateOnePhraseArgs";
import { Phrase } from "../../../models/Phrase";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Phrase)
export class CreateOnePhraseResolver {
  @TypeGraphQL.Mutation(_returns => Phrase, {
    nullable: false
  })
  async createOnePhrase(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOnePhraseArgs): Promise<Phrase> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).phrase.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
