import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

export type MethodDecoratorOverrideFn = (decorators: MethodDecorator[]) => MethodDecorator[];

const crudResolversMap = {
  Phrase: crudResolvers.PhraseCrudResolver,
  User: crudResolvers.UserCrudResolver
};
const actionResolversMap = {
  Phrase: {
    aggregatePhrase: actionResolvers.AggregatePhraseResolver,
    createManyPhrase: actionResolvers.CreateManyPhraseResolver,
    createOnePhrase: actionResolvers.CreateOnePhraseResolver,
    deleteManyPhrase: actionResolvers.DeleteManyPhraseResolver,
    deleteOnePhrase: actionResolvers.DeleteOnePhraseResolver,
    findFirstPhrase: actionResolvers.FindFirstPhraseResolver,
    findFirstPhraseOrThrow: actionResolvers.FindFirstPhraseOrThrowResolver,
    phrases: actionResolvers.FindManyPhraseResolver,
    phrase: actionResolvers.FindUniquePhraseResolver,
    getPhrase: actionResolvers.FindUniquePhraseOrThrowResolver,
    groupByPhrase: actionResolvers.GroupByPhraseResolver,
    updateManyPhrase: actionResolvers.UpdateManyPhraseResolver,
    updateOnePhrase: actionResolvers.UpdateOnePhraseResolver,
    upsertOnePhrase: actionResolvers.UpsertOnePhraseResolver
  },
  User: {
    aggregateUser: actionResolvers.AggregateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    createOneUser: actionResolvers.CreateOneUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    deleteOneUser: actionResolvers.DeleteOneUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    findFirstUserOrThrow: actionResolvers.FindFirstUserOrThrowResolver,
    users: actionResolvers.FindManyUserResolver,
    user: actionResolvers.FindUniqueUserResolver,
    getUser: actionResolvers.FindUniqueUserOrThrowResolver,
    groupByUser: actionResolvers.GroupByUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    updateOneUser: actionResolvers.UpdateOneUserResolver,
    upsertOneUser: actionResolvers.UpsertOneUserResolver
  }
};
const crudResolversInfo = {
  Phrase: ["aggregatePhrase", "createManyPhrase", "createOnePhrase", "deleteManyPhrase", "deleteOnePhrase", "findFirstPhrase", "findFirstPhraseOrThrow", "phrases", "phrase", "getPhrase", "groupByPhrase", "updateManyPhrase", "updateOnePhrase", "upsertOnePhrase"],
  User: ["aggregateUser", "createManyUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "findFirstUserOrThrow", "users", "user", "getUser", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"]
};
const argsInfo = {
  AggregatePhraseArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyPhraseArgs: ["data", "skipDuplicates"],
  CreateOnePhraseArgs: ["data"],
  DeleteManyPhraseArgs: ["where"],
  DeleteOnePhraseArgs: ["where"],
  FindFirstPhraseArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstPhraseOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPhraseArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniquePhraseArgs: ["where"],
  FindUniquePhraseOrThrowArgs: ["where"],
  GroupByPhraseArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyPhraseArgs: ["data", "where"],
  UpdateOnePhraseArgs: ["data", "where"],
  UpsertOnePhraseArgs: ["where", "create", "update"],
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyUserArgs: ["data", "skipDuplicates"],
  CreateOneUserArgs: ["data"],
  DeleteManyUserArgs: ["where"],
  DeleteOneUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstUserOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueUserArgs: ["where"],
  FindUniqueUserOrThrowArgs: ["where"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyUserArgs: ["data", "where"],
  UpdateOneUserArgs: ["data", "where"],
  UpsertOneUserArgs: ["where", "create", "update"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
> = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
> = Partial<Record<ModelResolverActionNames<TModel>, MethodDecorator[] | MethodDecoratorOverrideFn>>
  & {
    _all?: MethodDecorator[];
    _query?: MethodDecorator[];
    _mutation?: MethodDecorator[];
  };

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  const mutationOperationPrefixes = [
    "createOne", "createMany", "deleteOne", "updateOne", "deleteMany", "updateMany", "upsertOne"
  ];
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    const allActionsDecorators = resolverActionsConfig._all;
    const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
    for (const resolverActionName of resolverActionNames) {
      const maybeDecoratorsOrFn = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[] | MethodDecoratorOverrideFn | undefined;
      const isWriteOperation = mutationOperationPrefixes.some(prefix => resolverActionName.startsWith(prefix));
      const operationKindDecorators = isWriteOperation ? resolverActionsConfig._mutation : resolverActionsConfig._query;
      const mainDecorators = [
        ...allActionsDecorators ?? [],
        ...operationKindDecorators ?? [],
      ]
      let decorators: MethodDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(mainDecorators);
      } else {
        decorators = [...mainDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
> = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

export type PropertyDecoratorOverrideFn = (decorators: PropertyDecorator[]) => PropertyDecorator[];

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys, PropertyDecorator[] | PropertyDecoratorOverrideFn>
> & { _all?: PropertyDecorator[] };

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    const allFieldsDecorators = enhanceConfig.fields._all ?? [];
    for (const typeFieldName of typeFieldNames) {
      const maybeDecoratorsOrFn = enhanceConfig.fields[
        typeFieldName
      ] as PropertyDecorator[] | PropertyDecoratorOverrideFn | undefined;
      let decorators: PropertyDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allFieldsDecorators);
      } else {
        decorators = [...allFieldsDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      tslib.__decorate(decorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  Phrase: ["id", "phrase", "translation", "streak", "practisedAt"],
  User: ["id", "email", "firstName", "lastName", "userName", "receivePromo", "passwordHash", "tokenVersion", "birthday", "phoneNumber", "address", "nationality", "membershipExpiration", "membershipType", "avatar", "accessToken"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregatePhrase: ["_count", "_avg", "_sum", "_min", "_max"],
  PhraseGroupBy: ["id", "phrase", "translation", "streak", "practisedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateUser: ["_count", "_avg", "_sum", "_min", "_max"],
  UserGroupBy: ["id", "email", "firstName", "lastName", "userName", "receivePromo", "passwordHash", "tokenVersion", "birthday", "phoneNumber", "address", "nationality", "membershipExpiration", "membershipType", "avatar", "accessToken", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  PhraseCountAggregate: ["id", "phrase", "translation", "streak", "practisedAt", "_all"],
  PhraseAvgAggregate: ["streak"],
  PhraseSumAggregate: ["streak"],
  PhraseMinAggregate: ["id", "phrase", "translation", "streak", "practisedAt"],
  PhraseMaxAggregate: ["id", "phrase", "translation", "streak", "practisedAt"],
  UserCountAggregate: ["id", "email", "firstName", "lastName", "userName", "receivePromo", "passwordHash", "tokenVersion", "birthday", "phoneNumber", "address", "nationality", "membershipExpiration", "membershipType", "avatar", "accessToken", "_all"],
  UserAvgAggregate: ["tokenVersion"],
  UserSumAggregate: ["tokenVersion"],
  UserMinAggregate: ["id", "email", "firstName", "lastName", "userName", "receivePromo", "passwordHash", "tokenVersion", "birthday", "phoneNumber", "address", "nationality", "membershipExpiration", "membershipType", "avatar", "accessToken"],
  UserMaxAggregate: ["id", "email", "firstName", "lastName", "userName", "receivePromo", "passwordHash", "tokenVersion", "birthday", "phoneNumber", "address", "nationality", "membershipExpiration", "membershipType", "avatar", "accessToken"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
> = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  PhraseWhereInput: ["AND", "OR", "NOT", "id", "phrase", "translation", "streak", "practisedAt"],
  PhraseOrderByWithRelationInput: ["id", "phrase", "translation", "streak", "practisedAt"],
  PhraseWhereUniqueInput: ["id", "AND", "OR", "NOT", "phrase", "translation", "streak", "practisedAt"],
  PhraseOrderByWithAggregationInput: ["id", "phrase", "translation", "streak", "practisedAt", "_count", "_avg", "_max", "_min", "_sum"],
  PhraseScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "phrase", "translation", "streak", "practisedAt"],
  UserWhereInput: ["AND", "OR", "NOT", "id", "email", "firstName", "lastName", "userName", "receivePromo", "passwordHash", "tokenVersion", "birthday", "phoneNumber", "address", "nationality", "membershipExpiration", "membershipType", "avatar", "accessToken"],
  UserOrderByWithRelationInput: ["id", "email", "firstName", "lastName", "userName", "receivePromo", "passwordHash", "tokenVersion", "birthday", "phoneNumber", "address", "nationality", "membershipExpiration", "membershipType", "avatar", "accessToken"],
  UserWhereUniqueInput: ["id", "AND", "OR", "NOT", "email", "firstName", "lastName", "userName", "receivePromo", "passwordHash", "tokenVersion", "birthday", "phoneNumber", "address", "nationality", "membershipExpiration", "membershipType", "avatar", "accessToken"],
  UserOrderByWithAggregationInput: ["id", "email", "firstName", "lastName", "userName", "receivePromo", "passwordHash", "tokenVersion", "birthday", "phoneNumber", "address", "nationality", "membershipExpiration", "membershipType", "avatar", "accessToken", "_count", "_avg", "_max", "_min", "_sum"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "email", "firstName", "lastName", "userName", "receivePromo", "passwordHash", "tokenVersion", "birthday", "phoneNumber", "address", "nationality", "membershipExpiration", "membershipType", "avatar", "accessToken"],
  PhraseCreateInput: ["id", "phrase", "translation", "streak", "practisedAt"],
  PhraseUpdateInput: ["id", "phrase", "translation", "streak", "practisedAt"],
  PhraseCreateManyInput: ["id", "phrase", "translation", "streak", "practisedAt"],
  PhraseUpdateManyMutationInput: ["id", "phrase", "translation", "streak", "practisedAt"],
  UserCreateInput: ["id", "email", "firstName", "lastName", "userName", "receivePromo", "passwordHash", "tokenVersion", "birthday", "phoneNumber", "address", "nationality", "membershipExpiration", "membershipType", "avatar", "accessToken"],
  UserUpdateInput: ["id", "email", "firstName", "lastName", "userName", "receivePromo", "passwordHash", "tokenVersion", "birthday", "phoneNumber", "address", "nationality", "membershipExpiration", "membershipType", "avatar", "accessToken"],
  UserCreateManyInput: ["id", "email", "firstName", "lastName", "userName", "receivePromo", "passwordHash", "tokenVersion", "birthday", "phoneNumber", "address", "nationality", "membershipExpiration", "membershipType", "avatar", "accessToken"],
  UserUpdateManyMutationInput: ["id", "email", "firstName", "lastName", "userName", "receivePromo", "passwordHash", "tokenVersion", "birthday", "phoneNumber", "address", "nationality", "membershipExpiration", "membershipType", "avatar", "accessToken"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  PhraseCountOrderByAggregateInput: ["id", "phrase", "translation", "streak", "practisedAt"],
  PhraseAvgOrderByAggregateInput: ["streak"],
  PhraseMaxOrderByAggregateInput: ["id", "phrase", "translation", "streak", "practisedAt"],
  PhraseMinOrderByAggregateInput: ["id", "phrase", "translation", "streak", "practisedAt"],
  PhraseSumOrderByAggregateInput: ["streak"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  BoolFilter: ["equals", "not"],
  EnumRoleFilter: ["equals", "in", "notIn", "not"],
  UserCountOrderByAggregateInput: ["id", "email", "firstName", "lastName", "userName", "receivePromo", "passwordHash", "tokenVersion", "birthday", "phoneNumber", "address", "nationality", "membershipExpiration", "membershipType", "avatar", "accessToken"],
  UserAvgOrderByAggregateInput: ["tokenVersion"],
  UserMaxOrderByAggregateInput: ["id", "email", "firstName", "lastName", "userName", "receivePromo", "passwordHash", "tokenVersion", "birthday", "phoneNumber", "address", "nationality", "membershipExpiration", "membershipType", "avatar", "accessToken"],
  UserMinOrderByAggregateInput: ["id", "email", "firstName", "lastName", "userName", "receivePromo", "passwordHash", "tokenVersion", "birthday", "phoneNumber", "address", "nationality", "membershipExpiration", "membershipType", "avatar", "accessToken"],
  UserSumOrderByAggregateInput: ["tokenVersion"],
  BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  EnumRoleWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  StringFieldUpdateOperationsInput: ["set"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  BoolFieldUpdateOperationsInput: ["set"],
  EnumRoleFieldUpdateOperationsInput: ["set"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedBoolFilter: ["equals", "not"],
  NestedEnumRoleFilter: ["equals", "in", "notIn", "not"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  NestedEnumRoleWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
> = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

