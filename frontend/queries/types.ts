export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** かに */
export type Crab = {
  __typename?: "Crab";
  id: Scalars["ID"];
  /** かにの名前 */
  name: Scalars["String"];
  /** かにの説明 */
  description?: Maybe<Scalars["String"]>;
  /** かにの説明 */
  price: Scalars["Int"];
  /** かにの失った脚 */
  lostLegs?: Maybe<Array<Scalars["String"]>>;
};

export type Query = {
  __typename?: "Query";
  /** かにの長男を呼ぶ */
  getKani: Crab;
  /** かにの一族を呼ぶ */
  getKanis: Array<Crab>;
  /** あいさつは大事 */
  sayHello: Scalars["String"];
  /** かにもあいさつする */
  sayKani: Scalars["String"];
};
export type GetHelloQueryVariables = {};

export type GetHelloQuery = { __typename?: "Query" } & Pick<Query, "sayHello">;

export type GetHelloKaniQueryVariables = {};

export type GetHelloKaniQuery = { __typename?: "Query" } & Pick<
  Query,
  "sayHello" | "sayKani"
>;

export type GetKaniSayQueryVariables = {};

export type GetKaniSayQuery = { __typename?: "Query" } & Pick<Query, "sayKani">;

export type GetKaniQueryVariables = {};

export type GetKaniQuery = { __typename?: "Query" } & {
  getKani: { __typename?: "Crab" } & Pick<Crab, "name">;
};
