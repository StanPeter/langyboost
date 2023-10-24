/* eslint-disable */
import type { Prisma, Phrase, User } from "C:\\projekty\\langyboost\\server\\src\\src\\generated\\prisma";
export default interface PrismaTypes {
    Phrase: {
        Name: "Phrase";
        Shape: Phrase;
        Include: never;
        Select: Prisma.PhraseSelect;
        OrderBy: Prisma.PhraseOrderByWithRelationInput;
        WhereUnique: Prisma.PhraseWhereUniqueInput;
        Where: Prisma.PhraseWhereInput;
        Create: {};
        Update: {};
        RelationName: never;
        ListRelations: never;
        Relations: {};
    };
    User: {
        Name: "User";
        Shape: User;
        Include: never;
        Select: Prisma.UserSelect;
        OrderBy: Prisma.UserOrderByWithRelationInput;
        WhereUnique: Prisma.UserWhereUniqueInput;
        Where: Prisma.UserWhereInput;
        Create: {};
        Update: {};
        RelationName: never;
        ListRelations: never;
        Relations: {};
    };
}