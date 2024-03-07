import * as TypeGraphQL from "type-graphql";

export enum PhraseScalarFieldEnum {
  id = "id",
  phrase = "phrase",
  translation = "translation",
  targetLang = "targetLang",
  streak = "streak",
  practisedAt = "practisedAt"
}
TypeGraphQL.registerEnumType(PhraseScalarFieldEnum, {
  name: "PhraseScalarFieldEnum",
  description: undefined,
});
