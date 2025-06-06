
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Obra
 * 
 */
export type Obra = $Result.DefaultSelection<Prisma.$ObraPayload>
/**
 * Model Etapa
 * 
 */
export type Etapa = $Result.DefaultSelection<Prisma.$EtapaPayload>
/**
 * Model Documento
 * 
 */
export type Documento = $Result.DefaultSelection<Prisma.$DocumentoPayload>
/**
 * Model Interacao
 * 
 */
export type Interacao = $Result.DefaultSelection<Prisma.$InteracaoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TipoUsuario: {
  cidadao: 'cidadao',
  servidor: 'servidor'
};

export type TipoUsuario = (typeof TipoUsuario)[keyof typeof TipoUsuario]


export const StatusObra: {
  planejamento: 'planejamento',
  execucao: 'execucao',
  finalizada: 'finalizada'
};

export type StatusObra = (typeof StatusObra)[keyof typeof StatusObra]


export const StatusEtapa: {
  pendente: 'pendente',
  em_andamento: 'em_andamento',
  concluida: 'concluida'
};

export type StatusEtapa = (typeof StatusEtapa)[keyof typeof StatusEtapa]


export const TipoInteracao: {
  sugestao: 'sugestao',
  denuncia: 'denuncia',
  elogio: 'elogio',
  reclamacao: 'reclamacao',
  solicitacao: 'solicitacao'
};

export type TipoInteracao = (typeof TipoInteracao)[keyof typeof TipoInteracao]

}

export type TipoUsuario = $Enums.TipoUsuario

export const TipoUsuario: typeof $Enums.TipoUsuario

export type StatusObra = $Enums.StatusObra

export const StatusObra: typeof $Enums.StatusObra

export type StatusEtapa = $Enums.StatusEtapa

export const StatusEtapa: typeof $Enums.StatusEtapa

export type TipoInteracao = $Enums.TipoInteracao

export const TipoInteracao: typeof $Enums.TipoInteracao

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.obra`: Exposes CRUD operations for the **Obra** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Obras
    * const obras = await prisma.obra.findMany()
    * ```
    */
  get obra(): Prisma.ObraDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.etapa`: Exposes CRUD operations for the **Etapa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Etapas
    * const etapas = await prisma.etapa.findMany()
    * ```
    */
  get etapa(): Prisma.EtapaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.documento`: Exposes CRUD operations for the **Documento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Documentos
    * const documentos = await prisma.documento.findMany()
    * ```
    */
  get documento(): Prisma.DocumentoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.interacao`: Exposes CRUD operations for the **Interacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Interacaos
    * const interacaos = await prisma.interacao.findMany()
    * ```
    */
  get interacao(): Prisma.InteracaoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Obra: 'Obra',
    Etapa: 'Etapa',
    Documento: 'Documento',
    Interacao: 'Interacao'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "obra" | "etapa" | "documento" | "interacao"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Obra: {
        payload: Prisma.$ObraPayload<ExtArgs>
        fields: Prisma.ObraFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ObraFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObraPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ObraFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObraPayload>
          }
          findFirst: {
            args: Prisma.ObraFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObraPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ObraFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObraPayload>
          }
          findMany: {
            args: Prisma.ObraFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObraPayload>[]
          }
          create: {
            args: Prisma.ObraCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObraPayload>
          }
          createMany: {
            args: Prisma.ObraCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ObraCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObraPayload>[]
          }
          delete: {
            args: Prisma.ObraDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObraPayload>
          }
          update: {
            args: Prisma.ObraUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObraPayload>
          }
          deleteMany: {
            args: Prisma.ObraDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ObraUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ObraUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObraPayload>[]
          }
          upsert: {
            args: Prisma.ObraUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObraPayload>
          }
          aggregate: {
            args: Prisma.ObraAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateObra>
          }
          groupBy: {
            args: Prisma.ObraGroupByArgs<ExtArgs>
            result: $Utils.Optional<ObraGroupByOutputType>[]
          }
          count: {
            args: Prisma.ObraCountArgs<ExtArgs>
            result: $Utils.Optional<ObraCountAggregateOutputType> | number
          }
        }
      }
      Etapa: {
        payload: Prisma.$EtapaPayload<ExtArgs>
        fields: Prisma.EtapaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EtapaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtapaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EtapaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtapaPayload>
          }
          findFirst: {
            args: Prisma.EtapaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtapaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EtapaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtapaPayload>
          }
          findMany: {
            args: Prisma.EtapaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtapaPayload>[]
          }
          create: {
            args: Prisma.EtapaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtapaPayload>
          }
          createMany: {
            args: Prisma.EtapaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EtapaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtapaPayload>[]
          }
          delete: {
            args: Prisma.EtapaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtapaPayload>
          }
          update: {
            args: Prisma.EtapaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtapaPayload>
          }
          deleteMany: {
            args: Prisma.EtapaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EtapaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EtapaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtapaPayload>[]
          }
          upsert: {
            args: Prisma.EtapaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtapaPayload>
          }
          aggregate: {
            args: Prisma.EtapaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEtapa>
          }
          groupBy: {
            args: Prisma.EtapaGroupByArgs<ExtArgs>
            result: $Utils.Optional<EtapaGroupByOutputType>[]
          }
          count: {
            args: Prisma.EtapaCountArgs<ExtArgs>
            result: $Utils.Optional<EtapaCountAggregateOutputType> | number
          }
        }
      }
      Documento: {
        payload: Prisma.$DocumentoPayload<ExtArgs>
        fields: Prisma.DocumentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoPayload>
          }
          findFirst: {
            args: Prisma.DocumentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoPayload>
          }
          findMany: {
            args: Prisma.DocumentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoPayload>[]
          }
          create: {
            args: Prisma.DocumentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoPayload>
          }
          createMany: {
            args: Prisma.DocumentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoPayload>[]
          }
          delete: {
            args: Prisma.DocumentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoPayload>
          }
          update: {
            args: Prisma.DocumentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoPayload>
          }
          deleteMany: {
            args: Prisma.DocumentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoPayload>[]
          }
          upsert: {
            args: Prisma.DocumentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoPayload>
          }
          aggregate: {
            args: Prisma.DocumentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocumento>
          }
          groupBy: {
            args: Prisma.DocumentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentoCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentoCountAggregateOutputType> | number
          }
        }
      }
      Interacao: {
        payload: Prisma.$InteracaoPayload<ExtArgs>
        fields: Prisma.InteracaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InteracaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteracaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InteracaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteracaoPayload>
          }
          findFirst: {
            args: Prisma.InteracaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteracaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InteracaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteracaoPayload>
          }
          findMany: {
            args: Prisma.InteracaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteracaoPayload>[]
          }
          create: {
            args: Prisma.InteracaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteracaoPayload>
          }
          createMany: {
            args: Prisma.InteracaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InteracaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteracaoPayload>[]
          }
          delete: {
            args: Prisma.InteracaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteracaoPayload>
          }
          update: {
            args: Prisma.InteracaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteracaoPayload>
          }
          deleteMany: {
            args: Prisma.InteracaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InteracaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InteracaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteracaoPayload>[]
          }
          upsert: {
            args: Prisma.InteracaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteracaoPayload>
          }
          aggregate: {
            args: Prisma.InteracaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInteracao>
          }
          groupBy: {
            args: Prisma.InteracaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<InteracaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.InteracaoCountArgs<ExtArgs>
            result: $Utils.Optional<InteracaoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    obra?: ObraOmit
    etapa?: EtapaOmit
    documento?: DocumentoOmit
    interacao?: InteracaoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    obras: number
    interacoes: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    obras?: boolean | UserCountOutputTypeCountObrasArgs
    interacoes?: boolean | UserCountOutputTypeCountInteracoesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountObrasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ObraWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInteracoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InteracaoWhereInput
  }


  /**
   * Count Type ObraCountOutputType
   */

  export type ObraCountOutputType = {
    etapas: number
    documentos: number
    interacoes: number
  }

  export type ObraCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    etapas?: boolean | ObraCountOutputTypeCountEtapasArgs
    documentos?: boolean | ObraCountOutputTypeCountDocumentosArgs
    interacoes?: boolean | ObraCountOutputTypeCountInteracoesArgs
  }

  // Custom InputTypes
  /**
   * ObraCountOutputType without action
   */
  export type ObraCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObraCountOutputType
     */
    select?: ObraCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ObraCountOutputType without action
   */
  export type ObraCountOutputTypeCountEtapasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EtapaWhereInput
  }

  /**
   * ObraCountOutputType without action
   */
  export type ObraCountOutputTypeCountDocumentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentoWhereInput
  }

  /**
   * ObraCountOutputType without action
   */
  export type ObraCountOutputTypeCountInteracoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InteracaoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    username: string | null
    senha: string | null
    tipo: $Enums.TipoUsuario | null
    criadoUser: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    username: string | null
    senha: string | null
    tipo: $Enums.TipoUsuario | null
    criadoUser: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    username: number
    senha: number
    tipo: number
    criadoUser: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    username?: true
    senha?: true
    tipo?: true
    criadoUser?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    username?: true
    senha?: true
    tipo?: true
    criadoUser?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    username?: true
    senha?: true
    tipo?: true
    criadoUser?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    nome: string
    email: string
    username: string
    senha: string
    tipo: $Enums.TipoUsuario
    criadoUser: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    username?: boolean
    senha?: boolean
    tipo?: boolean
    criadoUser?: boolean
    obras?: boolean | User$obrasArgs<ExtArgs>
    interacoes?: boolean | User$interacoesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    username?: boolean
    senha?: boolean
    tipo?: boolean
    criadoUser?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    username?: boolean
    senha?: boolean
    tipo?: boolean
    criadoUser?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    username?: boolean
    senha?: boolean
    tipo?: boolean
    criadoUser?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "username" | "senha" | "tipo" | "criadoUser", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    obras?: boolean | User$obrasArgs<ExtArgs>
    interacoes?: boolean | User$interacoesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      obras: Prisma.$ObraPayload<ExtArgs>[]
      interacoes: Prisma.$InteracaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      email: string
      username: string
      senha: string
      tipo: $Enums.TipoUsuario
      criadoUser: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    obras<T extends User$obrasArgs<ExtArgs> = {}>(args?: Subset<T, User$obrasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    interacoes<T extends User$interacoesArgs<ExtArgs> = {}>(args?: Subset<T, User$interacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InteracaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly nome: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly senha: FieldRef<"User", 'String'>
    readonly tipo: FieldRef<"User", 'TipoUsuario'>
    readonly criadoUser: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.obras
   */
  export type User$obrasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obra
     */
    select?: ObraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obra
     */
    omit?: ObraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraInclude<ExtArgs> | null
    where?: ObraWhereInput
    orderBy?: ObraOrderByWithRelationInput | ObraOrderByWithRelationInput[]
    cursor?: ObraWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ObraScalarFieldEnum | ObraScalarFieldEnum[]
  }

  /**
   * User.interacoes
   */
  export type User$interacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interacao
     */
    select?: InteracaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interacao
     */
    omit?: InteracaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteracaoInclude<ExtArgs> | null
    where?: InteracaoWhereInput
    orderBy?: InteracaoOrderByWithRelationInput | InteracaoOrderByWithRelationInput[]
    cursor?: InteracaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InteracaoScalarFieldEnum | InteracaoScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Obra
   */

  export type AggregateObra = {
    _count: ObraCountAggregateOutputType | null
    _avg: ObraAvgAggregateOutputType | null
    _sum: ObraSumAggregateOutputType | null
    _min: ObraMinAggregateOutputType | null
    _max: ObraMaxAggregateOutputType | null
  }

  export type ObraAvgAggregateOutputType = {
    id: number | null
    orcamento: number | null
    servidorId: number | null
  }

  export type ObraSumAggregateOutputType = {
    id: number | null
    orcamento: number | null
    servidorId: number | null
  }

  export type ObraMinAggregateOutputType = {
    id: number | null
    nome: string | null
    localizacao: string | null
    empresa: string | null
    cronogramaInicio: Date | null
    cronogramaFim: Date | null
    orcamento: number | null
    status: $Enums.StatusObra | null
    servidorId: number | null
    createdAt: Date | null
  }

  export type ObraMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    localizacao: string | null
    empresa: string | null
    cronogramaInicio: Date | null
    cronogramaFim: Date | null
    orcamento: number | null
    status: $Enums.StatusObra | null
    servidorId: number | null
    createdAt: Date | null
  }

  export type ObraCountAggregateOutputType = {
    id: number
    nome: number
    localizacao: number
    empresa: number
    cronogramaInicio: number
    cronogramaFim: number
    orcamento: number
    status: number
    servidorId: number
    createdAt: number
    _all: number
  }


  export type ObraAvgAggregateInputType = {
    id?: true
    orcamento?: true
    servidorId?: true
  }

  export type ObraSumAggregateInputType = {
    id?: true
    orcamento?: true
    servidorId?: true
  }

  export type ObraMinAggregateInputType = {
    id?: true
    nome?: true
    localizacao?: true
    empresa?: true
    cronogramaInicio?: true
    cronogramaFim?: true
    orcamento?: true
    status?: true
    servidorId?: true
    createdAt?: true
  }

  export type ObraMaxAggregateInputType = {
    id?: true
    nome?: true
    localizacao?: true
    empresa?: true
    cronogramaInicio?: true
    cronogramaFim?: true
    orcamento?: true
    status?: true
    servidorId?: true
    createdAt?: true
  }

  export type ObraCountAggregateInputType = {
    id?: true
    nome?: true
    localizacao?: true
    empresa?: true
    cronogramaInicio?: true
    cronogramaFim?: true
    orcamento?: true
    status?: true
    servidorId?: true
    createdAt?: true
    _all?: true
  }

  export type ObraAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Obra to aggregate.
     */
    where?: ObraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Obras to fetch.
     */
    orderBy?: ObraOrderByWithRelationInput | ObraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ObraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Obras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Obras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Obras
    **/
    _count?: true | ObraCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ObraAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ObraSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ObraMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ObraMaxAggregateInputType
  }

  export type GetObraAggregateType<T extends ObraAggregateArgs> = {
        [P in keyof T & keyof AggregateObra]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateObra[P]>
      : GetScalarType<T[P], AggregateObra[P]>
  }




  export type ObraGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ObraWhereInput
    orderBy?: ObraOrderByWithAggregationInput | ObraOrderByWithAggregationInput[]
    by: ObraScalarFieldEnum[] | ObraScalarFieldEnum
    having?: ObraScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ObraCountAggregateInputType | true
    _avg?: ObraAvgAggregateInputType
    _sum?: ObraSumAggregateInputType
    _min?: ObraMinAggregateInputType
    _max?: ObraMaxAggregateInputType
  }

  export type ObraGroupByOutputType = {
    id: number
    nome: string
    localizacao: string
    empresa: string
    cronogramaInicio: Date
    cronogramaFim: Date
    orcamento: number
    status: $Enums.StatusObra
    servidorId: number
    createdAt: Date
    _count: ObraCountAggregateOutputType | null
    _avg: ObraAvgAggregateOutputType | null
    _sum: ObraSumAggregateOutputType | null
    _min: ObraMinAggregateOutputType | null
    _max: ObraMaxAggregateOutputType | null
  }

  type GetObraGroupByPayload<T extends ObraGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ObraGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ObraGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ObraGroupByOutputType[P]>
            : GetScalarType<T[P], ObraGroupByOutputType[P]>
        }
      >
    >


  export type ObraSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    localizacao?: boolean
    empresa?: boolean
    cronogramaInicio?: boolean
    cronogramaFim?: boolean
    orcamento?: boolean
    status?: boolean
    servidorId?: boolean
    createdAt?: boolean
    servidor?: boolean | UserDefaultArgs<ExtArgs>
    etapas?: boolean | Obra$etapasArgs<ExtArgs>
    documentos?: boolean | Obra$documentosArgs<ExtArgs>
    interacoes?: boolean | Obra$interacoesArgs<ExtArgs>
    _count?: boolean | ObraCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["obra"]>

  export type ObraSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    localizacao?: boolean
    empresa?: boolean
    cronogramaInicio?: boolean
    cronogramaFim?: boolean
    orcamento?: boolean
    status?: boolean
    servidorId?: boolean
    createdAt?: boolean
    servidor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["obra"]>

  export type ObraSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    localizacao?: boolean
    empresa?: boolean
    cronogramaInicio?: boolean
    cronogramaFim?: boolean
    orcamento?: boolean
    status?: boolean
    servidorId?: boolean
    createdAt?: boolean
    servidor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["obra"]>

  export type ObraSelectScalar = {
    id?: boolean
    nome?: boolean
    localizacao?: boolean
    empresa?: boolean
    cronogramaInicio?: boolean
    cronogramaFim?: boolean
    orcamento?: boolean
    status?: boolean
    servidorId?: boolean
    createdAt?: boolean
  }

  export type ObraOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "localizacao" | "empresa" | "cronogramaInicio" | "cronogramaFim" | "orcamento" | "status" | "servidorId" | "createdAt", ExtArgs["result"]["obra"]>
  export type ObraInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servidor?: boolean | UserDefaultArgs<ExtArgs>
    etapas?: boolean | Obra$etapasArgs<ExtArgs>
    documentos?: boolean | Obra$documentosArgs<ExtArgs>
    interacoes?: boolean | Obra$interacoesArgs<ExtArgs>
    _count?: boolean | ObraCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ObraIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servidor?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ObraIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servidor?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ObraPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Obra"
    objects: {
      servidor: Prisma.$UserPayload<ExtArgs>
      etapas: Prisma.$EtapaPayload<ExtArgs>[]
      documentos: Prisma.$DocumentoPayload<ExtArgs>[]
      interacoes: Prisma.$InteracaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      localizacao: string
      empresa: string
      cronogramaInicio: Date
      cronogramaFim: Date
      orcamento: number
      status: $Enums.StatusObra
      servidorId: number
      createdAt: Date
    }, ExtArgs["result"]["obra"]>
    composites: {}
  }

  type ObraGetPayload<S extends boolean | null | undefined | ObraDefaultArgs> = $Result.GetResult<Prisma.$ObraPayload, S>

  type ObraCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ObraFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ObraCountAggregateInputType | true
    }

  export interface ObraDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Obra'], meta: { name: 'Obra' } }
    /**
     * Find zero or one Obra that matches the filter.
     * @param {ObraFindUniqueArgs} args - Arguments to find a Obra
     * @example
     * // Get one Obra
     * const obra = await prisma.obra.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ObraFindUniqueArgs>(args: SelectSubset<T, ObraFindUniqueArgs<ExtArgs>>): Prisma__ObraClient<$Result.GetResult<Prisma.$ObraPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Obra that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ObraFindUniqueOrThrowArgs} args - Arguments to find a Obra
     * @example
     * // Get one Obra
     * const obra = await prisma.obra.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ObraFindUniqueOrThrowArgs>(args: SelectSubset<T, ObraFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ObraClient<$Result.GetResult<Prisma.$ObraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Obra that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObraFindFirstArgs} args - Arguments to find a Obra
     * @example
     * // Get one Obra
     * const obra = await prisma.obra.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ObraFindFirstArgs>(args?: SelectSubset<T, ObraFindFirstArgs<ExtArgs>>): Prisma__ObraClient<$Result.GetResult<Prisma.$ObraPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Obra that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObraFindFirstOrThrowArgs} args - Arguments to find a Obra
     * @example
     * // Get one Obra
     * const obra = await prisma.obra.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ObraFindFirstOrThrowArgs>(args?: SelectSubset<T, ObraFindFirstOrThrowArgs<ExtArgs>>): Prisma__ObraClient<$Result.GetResult<Prisma.$ObraPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Obras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObraFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Obras
     * const obras = await prisma.obra.findMany()
     * 
     * // Get first 10 Obras
     * const obras = await prisma.obra.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const obraWithIdOnly = await prisma.obra.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ObraFindManyArgs>(args?: SelectSubset<T, ObraFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Obra.
     * @param {ObraCreateArgs} args - Arguments to create a Obra.
     * @example
     * // Create one Obra
     * const Obra = await prisma.obra.create({
     *   data: {
     *     // ... data to create a Obra
     *   }
     * })
     * 
     */
    create<T extends ObraCreateArgs>(args: SelectSubset<T, ObraCreateArgs<ExtArgs>>): Prisma__ObraClient<$Result.GetResult<Prisma.$ObraPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Obras.
     * @param {ObraCreateManyArgs} args - Arguments to create many Obras.
     * @example
     * // Create many Obras
     * const obra = await prisma.obra.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ObraCreateManyArgs>(args?: SelectSubset<T, ObraCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Obras and returns the data saved in the database.
     * @param {ObraCreateManyAndReturnArgs} args - Arguments to create many Obras.
     * @example
     * // Create many Obras
     * const obra = await prisma.obra.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Obras and only return the `id`
     * const obraWithIdOnly = await prisma.obra.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ObraCreateManyAndReturnArgs>(args?: SelectSubset<T, ObraCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObraPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Obra.
     * @param {ObraDeleteArgs} args - Arguments to delete one Obra.
     * @example
     * // Delete one Obra
     * const Obra = await prisma.obra.delete({
     *   where: {
     *     // ... filter to delete one Obra
     *   }
     * })
     * 
     */
    delete<T extends ObraDeleteArgs>(args: SelectSubset<T, ObraDeleteArgs<ExtArgs>>): Prisma__ObraClient<$Result.GetResult<Prisma.$ObraPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Obra.
     * @param {ObraUpdateArgs} args - Arguments to update one Obra.
     * @example
     * // Update one Obra
     * const obra = await prisma.obra.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ObraUpdateArgs>(args: SelectSubset<T, ObraUpdateArgs<ExtArgs>>): Prisma__ObraClient<$Result.GetResult<Prisma.$ObraPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Obras.
     * @param {ObraDeleteManyArgs} args - Arguments to filter Obras to delete.
     * @example
     * // Delete a few Obras
     * const { count } = await prisma.obra.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ObraDeleteManyArgs>(args?: SelectSubset<T, ObraDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Obras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObraUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Obras
     * const obra = await prisma.obra.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ObraUpdateManyArgs>(args: SelectSubset<T, ObraUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Obras and returns the data updated in the database.
     * @param {ObraUpdateManyAndReturnArgs} args - Arguments to update many Obras.
     * @example
     * // Update many Obras
     * const obra = await prisma.obra.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Obras and only return the `id`
     * const obraWithIdOnly = await prisma.obra.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ObraUpdateManyAndReturnArgs>(args: SelectSubset<T, ObraUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObraPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Obra.
     * @param {ObraUpsertArgs} args - Arguments to update or create a Obra.
     * @example
     * // Update or create a Obra
     * const obra = await prisma.obra.upsert({
     *   create: {
     *     // ... data to create a Obra
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Obra we want to update
     *   }
     * })
     */
    upsert<T extends ObraUpsertArgs>(args: SelectSubset<T, ObraUpsertArgs<ExtArgs>>): Prisma__ObraClient<$Result.GetResult<Prisma.$ObraPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Obras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObraCountArgs} args - Arguments to filter Obras to count.
     * @example
     * // Count the number of Obras
     * const count = await prisma.obra.count({
     *   where: {
     *     // ... the filter for the Obras we want to count
     *   }
     * })
    **/
    count<T extends ObraCountArgs>(
      args?: Subset<T, ObraCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ObraCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Obra.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObraAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ObraAggregateArgs>(args: Subset<T, ObraAggregateArgs>): Prisma.PrismaPromise<GetObraAggregateType<T>>

    /**
     * Group by Obra.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObraGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ObraGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ObraGroupByArgs['orderBy'] }
        : { orderBy?: ObraGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ObraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetObraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Obra model
   */
  readonly fields: ObraFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Obra.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ObraClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    servidor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    etapas<T extends Obra$etapasArgs<ExtArgs> = {}>(args?: Subset<T, Obra$etapasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EtapaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    documentos<T extends Obra$documentosArgs<ExtArgs> = {}>(args?: Subset<T, Obra$documentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    interacoes<T extends Obra$interacoesArgs<ExtArgs> = {}>(args?: Subset<T, Obra$interacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InteracaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Obra model
   */
  interface ObraFieldRefs {
    readonly id: FieldRef<"Obra", 'Int'>
    readonly nome: FieldRef<"Obra", 'String'>
    readonly localizacao: FieldRef<"Obra", 'String'>
    readonly empresa: FieldRef<"Obra", 'String'>
    readonly cronogramaInicio: FieldRef<"Obra", 'DateTime'>
    readonly cronogramaFim: FieldRef<"Obra", 'DateTime'>
    readonly orcamento: FieldRef<"Obra", 'Float'>
    readonly status: FieldRef<"Obra", 'StatusObra'>
    readonly servidorId: FieldRef<"Obra", 'Int'>
    readonly createdAt: FieldRef<"Obra", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Obra findUnique
   */
  export type ObraFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obra
     */
    select?: ObraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obra
     */
    omit?: ObraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraInclude<ExtArgs> | null
    /**
     * Filter, which Obra to fetch.
     */
    where: ObraWhereUniqueInput
  }

  /**
   * Obra findUniqueOrThrow
   */
  export type ObraFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obra
     */
    select?: ObraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obra
     */
    omit?: ObraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraInclude<ExtArgs> | null
    /**
     * Filter, which Obra to fetch.
     */
    where: ObraWhereUniqueInput
  }

  /**
   * Obra findFirst
   */
  export type ObraFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obra
     */
    select?: ObraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obra
     */
    omit?: ObraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraInclude<ExtArgs> | null
    /**
     * Filter, which Obra to fetch.
     */
    where?: ObraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Obras to fetch.
     */
    orderBy?: ObraOrderByWithRelationInput | ObraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Obras.
     */
    cursor?: ObraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Obras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Obras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Obras.
     */
    distinct?: ObraScalarFieldEnum | ObraScalarFieldEnum[]
  }

  /**
   * Obra findFirstOrThrow
   */
  export type ObraFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obra
     */
    select?: ObraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obra
     */
    omit?: ObraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraInclude<ExtArgs> | null
    /**
     * Filter, which Obra to fetch.
     */
    where?: ObraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Obras to fetch.
     */
    orderBy?: ObraOrderByWithRelationInput | ObraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Obras.
     */
    cursor?: ObraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Obras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Obras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Obras.
     */
    distinct?: ObraScalarFieldEnum | ObraScalarFieldEnum[]
  }

  /**
   * Obra findMany
   */
  export type ObraFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obra
     */
    select?: ObraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obra
     */
    omit?: ObraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraInclude<ExtArgs> | null
    /**
     * Filter, which Obras to fetch.
     */
    where?: ObraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Obras to fetch.
     */
    orderBy?: ObraOrderByWithRelationInput | ObraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Obras.
     */
    cursor?: ObraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Obras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Obras.
     */
    skip?: number
    distinct?: ObraScalarFieldEnum | ObraScalarFieldEnum[]
  }

  /**
   * Obra create
   */
  export type ObraCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obra
     */
    select?: ObraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obra
     */
    omit?: ObraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraInclude<ExtArgs> | null
    /**
     * The data needed to create a Obra.
     */
    data: XOR<ObraCreateInput, ObraUncheckedCreateInput>
  }

  /**
   * Obra createMany
   */
  export type ObraCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Obras.
     */
    data: ObraCreateManyInput | ObraCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Obra createManyAndReturn
   */
  export type ObraCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obra
     */
    select?: ObraSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Obra
     */
    omit?: ObraOmit<ExtArgs> | null
    /**
     * The data used to create many Obras.
     */
    data: ObraCreateManyInput | ObraCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Obra update
   */
  export type ObraUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obra
     */
    select?: ObraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obra
     */
    omit?: ObraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraInclude<ExtArgs> | null
    /**
     * The data needed to update a Obra.
     */
    data: XOR<ObraUpdateInput, ObraUncheckedUpdateInput>
    /**
     * Choose, which Obra to update.
     */
    where: ObraWhereUniqueInput
  }

  /**
   * Obra updateMany
   */
  export type ObraUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Obras.
     */
    data: XOR<ObraUpdateManyMutationInput, ObraUncheckedUpdateManyInput>
    /**
     * Filter which Obras to update
     */
    where?: ObraWhereInput
    /**
     * Limit how many Obras to update.
     */
    limit?: number
  }

  /**
   * Obra updateManyAndReturn
   */
  export type ObraUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obra
     */
    select?: ObraSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Obra
     */
    omit?: ObraOmit<ExtArgs> | null
    /**
     * The data used to update Obras.
     */
    data: XOR<ObraUpdateManyMutationInput, ObraUncheckedUpdateManyInput>
    /**
     * Filter which Obras to update
     */
    where?: ObraWhereInput
    /**
     * Limit how many Obras to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Obra upsert
   */
  export type ObraUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obra
     */
    select?: ObraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obra
     */
    omit?: ObraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraInclude<ExtArgs> | null
    /**
     * The filter to search for the Obra to update in case it exists.
     */
    where: ObraWhereUniqueInput
    /**
     * In case the Obra found by the `where` argument doesn't exist, create a new Obra with this data.
     */
    create: XOR<ObraCreateInput, ObraUncheckedCreateInput>
    /**
     * In case the Obra was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ObraUpdateInput, ObraUncheckedUpdateInput>
  }

  /**
   * Obra delete
   */
  export type ObraDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obra
     */
    select?: ObraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obra
     */
    omit?: ObraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraInclude<ExtArgs> | null
    /**
     * Filter which Obra to delete.
     */
    where: ObraWhereUniqueInput
  }

  /**
   * Obra deleteMany
   */
  export type ObraDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Obras to delete
     */
    where?: ObraWhereInput
    /**
     * Limit how many Obras to delete.
     */
    limit?: number
  }

  /**
   * Obra.etapas
   */
  export type Obra$etapasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etapa
     */
    select?: EtapaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etapa
     */
    omit?: EtapaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtapaInclude<ExtArgs> | null
    where?: EtapaWhereInput
    orderBy?: EtapaOrderByWithRelationInput | EtapaOrderByWithRelationInput[]
    cursor?: EtapaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EtapaScalarFieldEnum | EtapaScalarFieldEnum[]
  }

  /**
   * Obra.documentos
   */
  export type Obra$documentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento
     */
    select?: DocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documento
     */
    omit?: DocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoInclude<ExtArgs> | null
    where?: DocumentoWhereInput
    orderBy?: DocumentoOrderByWithRelationInput | DocumentoOrderByWithRelationInput[]
    cursor?: DocumentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentoScalarFieldEnum | DocumentoScalarFieldEnum[]
  }

  /**
   * Obra.interacoes
   */
  export type Obra$interacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interacao
     */
    select?: InteracaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interacao
     */
    omit?: InteracaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteracaoInclude<ExtArgs> | null
    where?: InteracaoWhereInput
    orderBy?: InteracaoOrderByWithRelationInput | InteracaoOrderByWithRelationInput[]
    cursor?: InteracaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InteracaoScalarFieldEnum | InteracaoScalarFieldEnum[]
  }

  /**
   * Obra without action
   */
  export type ObraDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obra
     */
    select?: ObraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obra
     */
    omit?: ObraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraInclude<ExtArgs> | null
  }


  /**
   * Model Etapa
   */

  export type AggregateEtapa = {
    _count: EtapaCountAggregateOutputType | null
    _avg: EtapaAvgAggregateOutputType | null
    _sum: EtapaSumAggregateOutputType | null
    _min: EtapaMinAggregateOutputType | null
    _max: EtapaMaxAggregateOutputType | null
  }

  export type EtapaAvgAggregateOutputType = {
    id: number | null
    obraId: number | null
  }

  export type EtapaSumAggregateOutputType = {
    id: number | null
    obraId: number | null
  }

  export type EtapaMinAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    dataInicio: Date | null
    dataFim: Date | null
    status: $Enums.StatusEtapa | null
    obraId: number | null
  }

  export type EtapaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    dataInicio: Date | null
    dataFim: Date | null
    status: $Enums.StatusEtapa | null
    obraId: number | null
  }

  export type EtapaCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    dataInicio: number
    dataFim: number
    status: number
    obraId: number
    _all: number
  }


  export type EtapaAvgAggregateInputType = {
    id?: true
    obraId?: true
  }

  export type EtapaSumAggregateInputType = {
    id?: true
    obraId?: true
  }

  export type EtapaMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    dataInicio?: true
    dataFim?: true
    status?: true
    obraId?: true
  }

  export type EtapaMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    dataInicio?: true
    dataFim?: true
    status?: true
    obraId?: true
  }

  export type EtapaCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    dataInicio?: true
    dataFim?: true
    status?: true
    obraId?: true
    _all?: true
  }

  export type EtapaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Etapa to aggregate.
     */
    where?: EtapaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Etapas to fetch.
     */
    orderBy?: EtapaOrderByWithRelationInput | EtapaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EtapaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Etapas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Etapas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Etapas
    **/
    _count?: true | EtapaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EtapaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EtapaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EtapaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EtapaMaxAggregateInputType
  }

  export type GetEtapaAggregateType<T extends EtapaAggregateArgs> = {
        [P in keyof T & keyof AggregateEtapa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEtapa[P]>
      : GetScalarType<T[P], AggregateEtapa[P]>
  }




  export type EtapaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EtapaWhereInput
    orderBy?: EtapaOrderByWithAggregationInput | EtapaOrderByWithAggregationInput[]
    by: EtapaScalarFieldEnum[] | EtapaScalarFieldEnum
    having?: EtapaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EtapaCountAggregateInputType | true
    _avg?: EtapaAvgAggregateInputType
    _sum?: EtapaSumAggregateInputType
    _min?: EtapaMinAggregateInputType
    _max?: EtapaMaxAggregateInputType
  }

  export type EtapaGroupByOutputType = {
    id: number
    nome: string
    descricao: string
    dataInicio: Date
    dataFim: Date
    status: $Enums.StatusEtapa
    obraId: number
    _count: EtapaCountAggregateOutputType | null
    _avg: EtapaAvgAggregateOutputType | null
    _sum: EtapaSumAggregateOutputType | null
    _min: EtapaMinAggregateOutputType | null
    _max: EtapaMaxAggregateOutputType | null
  }

  type GetEtapaGroupByPayload<T extends EtapaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EtapaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EtapaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EtapaGroupByOutputType[P]>
            : GetScalarType<T[P], EtapaGroupByOutputType[P]>
        }
      >
    >


  export type EtapaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    status?: boolean
    obraId?: boolean
    obra?: boolean | ObraDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["etapa"]>

  export type EtapaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    status?: boolean
    obraId?: boolean
    obra?: boolean | ObraDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["etapa"]>

  export type EtapaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    status?: boolean
    obraId?: boolean
    obra?: boolean | ObraDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["etapa"]>

  export type EtapaSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    status?: boolean
    obraId?: boolean
  }

  export type EtapaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "descricao" | "dataInicio" | "dataFim" | "status" | "obraId", ExtArgs["result"]["etapa"]>
  export type EtapaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    obra?: boolean | ObraDefaultArgs<ExtArgs>
  }
  export type EtapaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    obra?: boolean | ObraDefaultArgs<ExtArgs>
  }
  export type EtapaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    obra?: boolean | ObraDefaultArgs<ExtArgs>
  }

  export type $EtapaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Etapa"
    objects: {
      obra: Prisma.$ObraPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      descricao: string
      dataInicio: Date
      dataFim: Date
      status: $Enums.StatusEtapa
      obraId: number
    }, ExtArgs["result"]["etapa"]>
    composites: {}
  }

  type EtapaGetPayload<S extends boolean | null | undefined | EtapaDefaultArgs> = $Result.GetResult<Prisma.$EtapaPayload, S>

  type EtapaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EtapaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EtapaCountAggregateInputType | true
    }

  export interface EtapaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Etapa'], meta: { name: 'Etapa' } }
    /**
     * Find zero or one Etapa that matches the filter.
     * @param {EtapaFindUniqueArgs} args - Arguments to find a Etapa
     * @example
     * // Get one Etapa
     * const etapa = await prisma.etapa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EtapaFindUniqueArgs>(args: SelectSubset<T, EtapaFindUniqueArgs<ExtArgs>>): Prisma__EtapaClient<$Result.GetResult<Prisma.$EtapaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Etapa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EtapaFindUniqueOrThrowArgs} args - Arguments to find a Etapa
     * @example
     * // Get one Etapa
     * const etapa = await prisma.etapa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EtapaFindUniqueOrThrowArgs>(args: SelectSubset<T, EtapaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EtapaClient<$Result.GetResult<Prisma.$EtapaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Etapa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtapaFindFirstArgs} args - Arguments to find a Etapa
     * @example
     * // Get one Etapa
     * const etapa = await prisma.etapa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EtapaFindFirstArgs>(args?: SelectSubset<T, EtapaFindFirstArgs<ExtArgs>>): Prisma__EtapaClient<$Result.GetResult<Prisma.$EtapaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Etapa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtapaFindFirstOrThrowArgs} args - Arguments to find a Etapa
     * @example
     * // Get one Etapa
     * const etapa = await prisma.etapa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EtapaFindFirstOrThrowArgs>(args?: SelectSubset<T, EtapaFindFirstOrThrowArgs<ExtArgs>>): Prisma__EtapaClient<$Result.GetResult<Prisma.$EtapaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Etapas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtapaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Etapas
     * const etapas = await prisma.etapa.findMany()
     * 
     * // Get first 10 Etapas
     * const etapas = await prisma.etapa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const etapaWithIdOnly = await prisma.etapa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EtapaFindManyArgs>(args?: SelectSubset<T, EtapaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EtapaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Etapa.
     * @param {EtapaCreateArgs} args - Arguments to create a Etapa.
     * @example
     * // Create one Etapa
     * const Etapa = await prisma.etapa.create({
     *   data: {
     *     // ... data to create a Etapa
     *   }
     * })
     * 
     */
    create<T extends EtapaCreateArgs>(args: SelectSubset<T, EtapaCreateArgs<ExtArgs>>): Prisma__EtapaClient<$Result.GetResult<Prisma.$EtapaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Etapas.
     * @param {EtapaCreateManyArgs} args - Arguments to create many Etapas.
     * @example
     * // Create many Etapas
     * const etapa = await prisma.etapa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EtapaCreateManyArgs>(args?: SelectSubset<T, EtapaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Etapas and returns the data saved in the database.
     * @param {EtapaCreateManyAndReturnArgs} args - Arguments to create many Etapas.
     * @example
     * // Create many Etapas
     * const etapa = await prisma.etapa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Etapas and only return the `id`
     * const etapaWithIdOnly = await prisma.etapa.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EtapaCreateManyAndReturnArgs>(args?: SelectSubset<T, EtapaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EtapaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Etapa.
     * @param {EtapaDeleteArgs} args - Arguments to delete one Etapa.
     * @example
     * // Delete one Etapa
     * const Etapa = await prisma.etapa.delete({
     *   where: {
     *     // ... filter to delete one Etapa
     *   }
     * })
     * 
     */
    delete<T extends EtapaDeleteArgs>(args: SelectSubset<T, EtapaDeleteArgs<ExtArgs>>): Prisma__EtapaClient<$Result.GetResult<Prisma.$EtapaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Etapa.
     * @param {EtapaUpdateArgs} args - Arguments to update one Etapa.
     * @example
     * // Update one Etapa
     * const etapa = await prisma.etapa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EtapaUpdateArgs>(args: SelectSubset<T, EtapaUpdateArgs<ExtArgs>>): Prisma__EtapaClient<$Result.GetResult<Prisma.$EtapaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Etapas.
     * @param {EtapaDeleteManyArgs} args - Arguments to filter Etapas to delete.
     * @example
     * // Delete a few Etapas
     * const { count } = await prisma.etapa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EtapaDeleteManyArgs>(args?: SelectSubset<T, EtapaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Etapas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtapaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Etapas
     * const etapa = await prisma.etapa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EtapaUpdateManyArgs>(args: SelectSubset<T, EtapaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Etapas and returns the data updated in the database.
     * @param {EtapaUpdateManyAndReturnArgs} args - Arguments to update many Etapas.
     * @example
     * // Update many Etapas
     * const etapa = await prisma.etapa.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Etapas and only return the `id`
     * const etapaWithIdOnly = await prisma.etapa.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EtapaUpdateManyAndReturnArgs>(args: SelectSubset<T, EtapaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EtapaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Etapa.
     * @param {EtapaUpsertArgs} args - Arguments to update or create a Etapa.
     * @example
     * // Update or create a Etapa
     * const etapa = await prisma.etapa.upsert({
     *   create: {
     *     // ... data to create a Etapa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Etapa we want to update
     *   }
     * })
     */
    upsert<T extends EtapaUpsertArgs>(args: SelectSubset<T, EtapaUpsertArgs<ExtArgs>>): Prisma__EtapaClient<$Result.GetResult<Prisma.$EtapaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Etapas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtapaCountArgs} args - Arguments to filter Etapas to count.
     * @example
     * // Count the number of Etapas
     * const count = await prisma.etapa.count({
     *   where: {
     *     // ... the filter for the Etapas we want to count
     *   }
     * })
    **/
    count<T extends EtapaCountArgs>(
      args?: Subset<T, EtapaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EtapaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Etapa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtapaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EtapaAggregateArgs>(args: Subset<T, EtapaAggregateArgs>): Prisma.PrismaPromise<GetEtapaAggregateType<T>>

    /**
     * Group by Etapa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtapaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EtapaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EtapaGroupByArgs['orderBy'] }
        : { orderBy?: EtapaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EtapaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEtapaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Etapa model
   */
  readonly fields: EtapaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Etapa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EtapaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    obra<T extends ObraDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ObraDefaultArgs<ExtArgs>>): Prisma__ObraClient<$Result.GetResult<Prisma.$ObraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Etapa model
   */
  interface EtapaFieldRefs {
    readonly id: FieldRef<"Etapa", 'Int'>
    readonly nome: FieldRef<"Etapa", 'String'>
    readonly descricao: FieldRef<"Etapa", 'String'>
    readonly dataInicio: FieldRef<"Etapa", 'DateTime'>
    readonly dataFim: FieldRef<"Etapa", 'DateTime'>
    readonly status: FieldRef<"Etapa", 'StatusEtapa'>
    readonly obraId: FieldRef<"Etapa", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Etapa findUnique
   */
  export type EtapaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etapa
     */
    select?: EtapaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etapa
     */
    omit?: EtapaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtapaInclude<ExtArgs> | null
    /**
     * Filter, which Etapa to fetch.
     */
    where: EtapaWhereUniqueInput
  }

  /**
   * Etapa findUniqueOrThrow
   */
  export type EtapaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etapa
     */
    select?: EtapaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etapa
     */
    omit?: EtapaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtapaInclude<ExtArgs> | null
    /**
     * Filter, which Etapa to fetch.
     */
    where: EtapaWhereUniqueInput
  }

  /**
   * Etapa findFirst
   */
  export type EtapaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etapa
     */
    select?: EtapaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etapa
     */
    omit?: EtapaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtapaInclude<ExtArgs> | null
    /**
     * Filter, which Etapa to fetch.
     */
    where?: EtapaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Etapas to fetch.
     */
    orderBy?: EtapaOrderByWithRelationInput | EtapaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Etapas.
     */
    cursor?: EtapaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Etapas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Etapas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Etapas.
     */
    distinct?: EtapaScalarFieldEnum | EtapaScalarFieldEnum[]
  }

  /**
   * Etapa findFirstOrThrow
   */
  export type EtapaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etapa
     */
    select?: EtapaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etapa
     */
    omit?: EtapaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtapaInclude<ExtArgs> | null
    /**
     * Filter, which Etapa to fetch.
     */
    where?: EtapaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Etapas to fetch.
     */
    orderBy?: EtapaOrderByWithRelationInput | EtapaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Etapas.
     */
    cursor?: EtapaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Etapas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Etapas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Etapas.
     */
    distinct?: EtapaScalarFieldEnum | EtapaScalarFieldEnum[]
  }

  /**
   * Etapa findMany
   */
  export type EtapaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etapa
     */
    select?: EtapaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etapa
     */
    omit?: EtapaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtapaInclude<ExtArgs> | null
    /**
     * Filter, which Etapas to fetch.
     */
    where?: EtapaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Etapas to fetch.
     */
    orderBy?: EtapaOrderByWithRelationInput | EtapaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Etapas.
     */
    cursor?: EtapaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Etapas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Etapas.
     */
    skip?: number
    distinct?: EtapaScalarFieldEnum | EtapaScalarFieldEnum[]
  }

  /**
   * Etapa create
   */
  export type EtapaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etapa
     */
    select?: EtapaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etapa
     */
    omit?: EtapaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtapaInclude<ExtArgs> | null
    /**
     * The data needed to create a Etapa.
     */
    data: XOR<EtapaCreateInput, EtapaUncheckedCreateInput>
  }

  /**
   * Etapa createMany
   */
  export type EtapaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Etapas.
     */
    data: EtapaCreateManyInput | EtapaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Etapa createManyAndReturn
   */
  export type EtapaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etapa
     */
    select?: EtapaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Etapa
     */
    omit?: EtapaOmit<ExtArgs> | null
    /**
     * The data used to create many Etapas.
     */
    data: EtapaCreateManyInput | EtapaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtapaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Etapa update
   */
  export type EtapaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etapa
     */
    select?: EtapaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etapa
     */
    omit?: EtapaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtapaInclude<ExtArgs> | null
    /**
     * The data needed to update a Etapa.
     */
    data: XOR<EtapaUpdateInput, EtapaUncheckedUpdateInput>
    /**
     * Choose, which Etapa to update.
     */
    where: EtapaWhereUniqueInput
  }

  /**
   * Etapa updateMany
   */
  export type EtapaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Etapas.
     */
    data: XOR<EtapaUpdateManyMutationInput, EtapaUncheckedUpdateManyInput>
    /**
     * Filter which Etapas to update
     */
    where?: EtapaWhereInput
    /**
     * Limit how many Etapas to update.
     */
    limit?: number
  }

  /**
   * Etapa updateManyAndReturn
   */
  export type EtapaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etapa
     */
    select?: EtapaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Etapa
     */
    omit?: EtapaOmit<ExtArgs> | null
    /**
     * The data used to update Etapas.
     */
    data: XOR<EtapaUpdateManyMutationInput, EtapaUncheckedUpdateManyInput>
    /**
     * Filter which Etapas to update
     */
    where?: EtapaWhereInput
    /**
     * Limit how many Etapas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtapaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Etapa upsert
   */
  export type EtapaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etapa
     */
    select?: EtapaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etapa
     */
    omit?: EtapaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtapaInclude<ExtArgs> | null
    /**
     * The filter to search for the Etapa to update in case it exists.
     */
    where: EtapaWhereUniqueInput
    /**
     * In case the Etapa found by the `where` argument doesn't exist, create a new Etapa with this data.
     */
    create: XOR<EtapaCreateInput, EtapaUncheckedCreateInput>
    /**
     * In case the Etapa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EtapaUpdateInput, EtapaUncheckedUpdateInput>
  }

  /**
   * Etapa delete
   */
  export type EtapaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etapa
     */
    select?: EtapaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etapa
     */
    omit?: EtapaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtapaInclude<ExtArgs> | null
    /**
     * Filter which Etapa to delete.
     */
    where: EtapaWhereUniqueInput
  }

  /**
   * Etapa deleteMany
   */
  export type EtapaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Etapas to delete
     */
    where?: EtapaWhereInput
    /**
     * Limit how many Etapas to delete.
     */
    limit?: number
  }

  /**
   * Etapa without action
   */
  export type EtapaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etapa
     */
    select?: EtapaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etapa
     */
    omit?: EtapaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtapaInclude<ExtArgs> | null
  }


  /**
   * Model Documento
   */

  export type AggregateDocumento = {
    _count: DocumentoCountAggregateOutputType | null
    _avg: DocumentoAvgAggregateOutputType | null
    _sum: DocumentoSumAggregateOutputType | null
    _min: DocumentoMinAggregateOutputType | null
    _max: DocumentoMaxAggregateOutputType | null
  }

  export type DocumentoAvgAggregateOutputType = {
    id: number | null
    obraId: number | null
  }

  export type DocumentoSumAggregateOutputType = {
    id: number | null
    obraId: number | null
  }

  export type DocumentoMinAggregateOutputType = {
    id: number | null
    titulo: string | null
    url: string | null
    tipo: string | null
    obraId: number | null
  }

  export type DocumentoMaxAggregateOutputType = {
    id: number | null
    titulo: string | null
    url: string | null
    tipo: string | null
    obraId: number | null
  }

  export type DocumentoCountAggregateOutputType = {
    id: number
    titulo: number
    url: number
    tipo: number
    obraId: number
    _all: number
  }


  export type DocumentoAvgAggregateInputType = {
    id?: true
    obraId?: true
  }

  export type DocumentoSumAggregateInputType = {
    id?: true
    obraId?: true
  }

  export type DocumentoMinAggregateInputType = {
    id?: true
    titulo?: true
    url?: true
    tipo?: true
    obraId?: true
  }

  export type DocumentoMaxAggregateInputType = {
    id?: true
    titulo?: true
    url?: true
    tipo?: true
    obraId?: true
  }

  export type DocumentoCountAggregateInputType = {
    id?: true
    titulo?: true
    url?: true
    tipo?: true
    obraId?: true
    _all?: true
  }

  export type DocumentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Documento to aggregate.
     */
    where?: DocumentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documentos to fetch.
     */
    orderBy?: DocumentoOrderByWithRelationInput | DocumentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Documentos
    **/
    _count?: true | DocumentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocumentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocumentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentoMaxAggregateInputType
  }

  export type GetDocumentoAggregateType<T extends DocumentoAggregateArgs> = {
        [P in keyof T & keyof AggregateDocumento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocumento[P]>
      : GetScalarType<T[P], AggregateDocumento[P]>
  }




  export type DocumentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentoWhereInput
    orderBy?: DocumentoOrderByWithAggregationInput | DocumentoOrderByWithAggregationInput[]
    by: DocumentoScalarFieldEnum[] | DocumentoScalarFieldEnum
    having?: DocumentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentoCountAggregateInputType | true
    _avg?: DocumentoAvgAggregateInputType
    _sum?: DocumentoSumAggregateInputType
    _min?: DocumentoMinAggregateInputType
    _max?: DocumentoMaxAggregateInputType
  }

  export type DocumentoGroupByOutputType = {
    id: number
    titulo: string
    url: string
    tipo: string
    obraId: number
    _count: DocumentoCountAggregateOutputType | null
    _avg: DocumentoAvgAggregateOutputType | null
    _sum: DocumentoSumAggregateOutputType | null
    _min: DocumentoMinAggregateOutputType | null
    _max: DocumentoMaxAggregateOutputType | null
  }

  type GetDocumentoGroupByPayload<T extends DocumentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentoGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentoGroupByOutputType[P]>
        }
      >
    >


  export type DocumentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    url?: boolean
    tipo?: boolean
    obraId?: boolean
    obra?: boolean | ObraDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documento"]>

  export type DocumentoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    url?: boolean
    tipo?: boolean
    obraId?: boolean
    obra?: boolean | ObraDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documento"]>

  export type DocumentoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    url?: boolean
    tipo?: boolean
    obraId?: boolean
    obra?: boolean | ObraDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documento"]>

  export type DocumentoSelectScalar = {
    id?: boolean
    titulo?: boolean
    url?: boolean
    tipo?: boolean
    obraId?: boolean
  }

  export type DocumentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "url" | "tipo" | "obraId", ExtArgs["result"]["documento"]>
  export type DocumentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    obra?: boolean | ObraDefaultArgs<ExtArgs>
  }
  export type DocumentoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    obra?: boolean | ObraDefaultArgs<ExtArgs>
  }
  export type DocumentoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    obra?: boolean | ObraDefaultArgs<ExtArgs>
  }

  export type $DocumentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Documento"
    objects: {
      obra: Prisma.$ObraPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titulo: string
      url: string
      tipo: string
      obraId: number
    }, ExtArgs["result"]["documento"]>
    composites: {}
  }

  type DocumentoGetPayload<S extends boolean | null | undefined | DocumentoDefaultArgs> = $Result.GetResult<Prisma.$DocumentoPayload, S>

  type DocumentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentoCountAggregateInputType | true
    }

  export interface DocumentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Documento'], meta: { name: 'Documento' } }
    /**
     * Find zero or one Documento that matches the filter.
     * @param {DocumentoFindUniqueArgs} args - Arguments to find a Documento
     * @example
     * // Get one Documento
     * const documento = await prisma.documento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentoFindUniqueArgs>(args: SelectSubset<T, DocumentoFindUniqueArgs<ExtArgs>>): Prisma__DocumentoClient<$Result.GetResult<Prisma.$DocumentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Documento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentoFindUniqueOrThrowArgs} args - Arguments to find a Documento
     * @example
     * // Get one Documento
     * const documento = await prisma.documento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentoFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentoClient<$Result.GetResult<Prisma.$DocumentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Documento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentoFindFirstArgs} args - Arguments to find a Documento
     * @example
     * // Get one Documento
     * const documento = await prisma.documento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentoFindFirstArgs>(args?: SelectSubset<T, DocumentoFindFirstArgs<ExtArgs>>): Prisma__DocumentoClient<$Result.GetResult<Prisma.$DocumentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Documento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentoFindFirstOrThrowArgs} args - Arguments to find a Documento
     * @example
     * // Get one Documento
     * const documento = await prisma.documento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentoFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentoClient<$Result.GetResult<Prisma.$DocumentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Documentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documentos
     * const documentos = await prisma.documento.findMany()
     * 
     * // Get first 10 Documentos
     * const documentos = await prisma.documento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentoWithIdOnly = await prisma.documento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentoFindManyArgs>(args?: SelectSubset<T, DocumentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Documento.
     * @param {DocumentoCreateArgs} args - Arguments to create a Documento.
     * @example
     * // Create one Documento
     * const Documento = await prisma.documento.create({
     *   data: {
     *     // ... data to create a Documento
     *   }
     * })
     * 
     */
    create<T extends DocumentoCreateArgs>(args: SelectSubset<T, DocumentoCreateArgs<ExtArgs>>): Prisma__DocumentoClient<$Result.GetResult<Prisma.$DocumentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Documentos.
     * @param {DocumentoCreateManyArgs} args - Arguments to create many Documentos.
     * @example
     * // Create many Documentos
     * const documento = await prisma.documento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentoCreateManyArgs>(args?: SelectSubset<T, DocumentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Documentos and returns the data saved in the database.
     * @param {DocumentoCreateManyAndReturnArgs} args - Arguments to create many Documentos.
     * @example
     * // Create many Documentos
     * const documento = await prisma.documento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Documentos and only return the `id`
     * const documentoWithIdOnly = await prisma.documento.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentoCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Documento.
     * @param {DocumentoDeleteArgs} args - Arguments to delete one Documento.
     * @example
     * // Delete one Documento
     * const Documento = await prisma.documento.delete({
     *   where: {
     *     // ... filter to delete one Documento
     *   }
     * })
     * 
     */
    delete<T extends DocumentoDeleteArgs>(args: SelectSubset<T, DocumentoDeleteArgs<ExtArgs>>): Prisma__DocumentoClient<$Result.GetResult<Prisma.$DocumentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Documento.
     * @param {DocumentoUpdateArgs} args - Arguments to update one Documento.
     * @example
     * // Update one Documento
     * const documento = await prisma.documento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentoUpdateArgs>(args: SelectSubset<T, DocumentoUpdateArgs<ExtArgs>>): Prisma__DocumentoClient<$Result.GetResult<Prisma.$DocumentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Documentos.
     * @param {DocumentoDeleteManyArgs} args - Arguments to filter Documentos to delete.
     * @example
     * // Delete a few Documentos
     * const { count } = await prisma.documento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentoDeleteManyArgs>(args?: SelectSubset<T, DocumentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documentos
     * const documento = await prisma.documento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentoUpdateManyArgs>(args: SelectSubset<T, DocumentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documentos and returns the data updated in the database.
     * @param {DocumentoUpdateManyAndReturnArgs} args - Arguments to update many Documentos.
     * @example
     * // Update many Documentos
     * const documento = await prisma.documento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Documentos and only return the `id`
     * const documentoWithIdOnly = await prisma.documento.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DocumentoUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Documento.
     * @param {DocumentoUpsertArgs} args - Arguments to update or create a Documento.
     * @example
     * // Update or create a Documento
     * const documento = await prisma.documento.upsert({
     *   create: {
     *     // ... data to create a Documento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Documento we want to update
     *   }
     * })
     */
    upsert<T extends DocumentoUpsertArgs>(args: SelectSubset<T, DocumentoUpsertArgs<ExtArgs>>): Prisma__DocumentoClient<$Result.GetResult<Prisma.$DocumentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Documentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentoCountArgs} args - Arguments to filter Documentos to count.
     * @example
     * // Count the number of Documentos
     * const count = await prisma.documento.count({
     *   where: {
     *     // ... the filter for the Documentos we want to count
     *   }
     * })
    **/
    count<T extends DocumentoCountArgs>(
      args?: Subset<T, DocumentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Documento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DocumentoAggregateArgs>(args: Subset<T, DocumentoAggregateArgs>): Prisma.PrismaPromise<GetDocumentoAggregateType<T>>

    /**
     * Group by Documento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DocumentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentoGroupByArgs['orderBy'] }
        : { orderBy?: DocumentoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DocumentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Documento model
   */
  readonly fields: DocumentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Documento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    obra<T extends ObraDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ObraDefaultArgs<ExtArgs>>): Prisma__ObraClient<$Result.GetResult<Prisma.$ObraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Documento model
   */
  interface DocumentoFieldRefs {
    readonly id: FieldRef<"Documento", 'Int'>
    readonly titulo: FieldRef<"Documento", 'String'>
    readonly url: FieldRef<"Documento", 'String'>
    readonly tipo: FieldRef<"Documento", 'String'>
    readonly obraId: FieldRef<"Documento", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Documento findUnique
   */
  export type DocumentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento
     */
    select?: DocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documento
     */
    omit?: DocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoInclude<ExtArgs> | null
    /**
     * Filter, which Documento to fetch.
     */
    where: DocumentoWhereUniqueInput
  }

  /**
   * Documento findUniqueOrThrow
   */
  export type DocumentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento
     */
    select?: DocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documento
     */
    omit?: DocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoInclude<ExtArgs> | null
    /**
     * Filter, which Documento to fetch.
     */
    where: DocumentoWhereUniqueInput
  }

  /**
   * Documento findFirst
   */
  export type DocumentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento
     */
    select?: DocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documento
     */
    omit?: DocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoInclude<ExtArgs> | null
    /**
     * Filter, which Documento to fetch.
     */
    where?: DocumentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documentos to fetch.
     */
    orderBy?: DocumentoOrderByWithRelationInput | DocumentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documentos.
     */
    cursor?: DocumentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documentos.
     */
    distinct?: DocumentoScalarFieldEnum | DocumentoScalarFieldEnum[]
  }

  /**
   * Documento findFirstOrThrow
   */
  export type DocumentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento
     */
    select?: DocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documento
     */
    omit?: DocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoInclude<ExtArgs> | null
    /**
     * Filter, which Documento to fetch.
     */
    where?: DocumentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documentos to fetch.
     */
    orderBy?: DocumentoOrderByWithRelationInput | DocumentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documentos.
     */
    cursor?: DocumentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documentos.
     */
    distinct?: DocumentoScalarFieldEnum | DocumentoScalarFieldEnum[]
  }

  /**
   * Documento findMany
   */
  export type DocumentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento
     */
    select?: DocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documento
     */
    omit?: DocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoInclude<ExtArgs> | null
    /**
     * Filter, which Documentos to fetch.
     */
    where?: DocumentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documentos to fetch.
     */
    orderBy?: DocumentoOrderByWithRelationInput | DocumentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Documentos.
     */
    cursor?: DocumentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documentos.
     */
    skip?: number
    distinct?: DocumentoScalarFieldEnum | DocumentoScalarFieldEnum[]
  }

  /**
   * Documento create
   */
  export type DocumentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento
     */
    select?: DocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documento
     */
    omit?: DocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoInclude<ExtArgs> | null
    /**
     * The data needed to create a Documento.
     */
    data: XOR<DocumentoCreateInput, DocumentoUncheckedCreateInput>
  }

  /**
   * Documento createMany
   */
  export type DocumentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Documentos.
     */
    data: DocumentoCreateManyInput | DocumentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Documento createManyAndReturn
   */
  export type DocumentoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento
     */
    select?: DocumentoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Documento
     */
    omit?: DocumentoOmit<ExtArgs> | null
    /**
     * The data used to create many Documentos.
     */
    data: DocumentoCreateManyInput | DocumentoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Documento update
   */
  export type DocumentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento
     */
    select?: DocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documento
     */
    omit?: DocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoInclude<ExtArgs> | null
    /**
     * The data needed to update a Documento.
     */
    data: XOR<DocumentoUpdateInput, DocumentoUncheckedUpdateInput>
    /**
     * Choose, which Documento to update.
     */
    where: DocumentoWhereUniqueInput
  }

  /**
   * Documento updateMany
   */
  export type DocumentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Documentos.
     */
    data: XOR<DocumentoUpdateManyMutationInput, DocumentoUncheckedUpdateManyInput>
    /**
     * Filter which Documentos to update
     */
    where?: DocumentoWhereInput
    /**
     * Limit how many Documentos to update.
     */
    limit?: number
  }

  /**
   * Documento updateManyAndReturn
   */
  export type DocumentoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento
     */
    select?: DocumentoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Documento
     */
    omit?: DocumentoOmit<ExtArgs> | null
    /**
     * The data used to update Documentos.
     */
    data: XOR<DocumentoUpdateManyMutationInput, DocumentoUncheckedUpdateManyInput>
    /**
     * Filter which Documentos to update
     */
    where?: DocumentoWhereInput
    /**
     * Limit how many Documentos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Documento upsert
   */
  export type DocumentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento
     */
    select?: DocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documento
     */
    omit?: DocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoInclude<ExtArgs> | null
    /**
     * The filter to search for the Documento to update in case it exists.
     */
    where: DocumentoWhereUniqueInput
    /**
     * In case the Documento found by the `where` argument doesn't exist, create a new Documento with this data.
     */
    create: XOR<DocumentoCreateInput, DocumentoUncheckedCreateInput>
    /**
     * In case the Documento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentoUpdateInput, DocumentoUncheckedUpdateInput>
  }

  /**
   * Documento delete
   */
  export type DocumentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento
     */
    select?: DocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documento
     */
    omit?: DocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoInclude<ExtArgs> | null
    /**
     * Filter which Documento to delete.
     */
    where: DocumentoWhereUniqueInput
  }

  /**
   * Documento deleteMany
   */
  export type DocumentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Documentos to delete
     */
    where?: DocumentoWhereInput
    /**
     * Limit how many Documentos to delete.
     */
    limit?: number
  }

  /**
   * Documento without action
   */
  export type DocumentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento
     */
    select?: DocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documento
     */
    omit?: DocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoInclude<ExtArgs> | null
  }


  /**
   * Model Interacao
   */

  export type AggregateInteracao = {
    _count: InteracaoCountAggregateOutputType | null
    _avg: InteracaoAvgAggregateOutputType | null
    _sum: InteracaoSumAggregateOutputType | null
    _min: InteracaoMinAggregateOutputType | null
    _max: InteracaoMaxAggregateOutputType | null
  }

  export type InteracaoAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    obraId: number | null
  }

  export type InteracaoSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    obraId: number | null
  }

  export type InteracaoMinAggregateOutputType = {
    id: number | null
    tipo: $Enums.TipoInteracao | null
    mensagem: string | null
    usuarioId: number | null
    obraId: number | null
    createdAt: Date | null
  }

  export type InteracaoMaxAggregateOutputType = {
    id: number | null
    tipo: $Enums.TipoInteracao | null
    mensagem: string | null
    usuarioId: number | null
    obraId: number | null
    createdAt: Date | null
  }

  export type InteracaoCountAggregateOutputType = {
    id: number
    tipo: number
    mensagem: number
    usuarioId: number
    obraId: number
    createdAt: number
    _all: number
  }


  export type InteracaoAvgAggregateInputType = {
    id?: true
    usuarioId?: true
    obraId?: true
  }

  export type InteracaoSumAggregateInputType = {
    id?: true
    usuarioId?: true
    obraId?: true
  }

  export type InteracaoMinAggregateInputType = {
    id?: true
    tipo?: true
    mensagem?: true
    usuarioId?: true
    obraId?: true
    createdAt?: true
  }

  export type InteracaoMaxAggregateInputType = {
    id?: true
    tipo?: true
    mensagem?: true
    usuarioId?: true
    obraId?: true
    createdAt?: true
  }

  export type InteracaoCountAggregateInputType = {
    id?: true
    tipo?: true
    mensagem?: true
    usuarioId?: true
    obraId?: true
    createdAt?: true
    _all?: true
  }

  export type InteracaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Interacao to aggregate.
     */
    where?: InteracaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interacaos to fetch.
     */
    orderBy?: InteracaoOrderByWithRelationInput | InteracaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InteracaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Interacaos
    **/
    _count?: true | InteracaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InteracaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InteracaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InteracaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InteracaoMaxAggregateInputType
  }

  export type GetInteracaoAggregateType<T extends InteracaoAggregateArgs> = {
        [P in keyof T & keyof AggregateInteracao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInteracao[P]>
      : GetScalarType<T[P], AggregateInteracao[P]>
  }




  export type InteracaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InteracaoWhereInput
    orderBy?: InteracaoOrderByWithAggregationInput | InteracaoOrderByWithAggregationInput[]
    by: InteracaoScalarFieldEnum[] | InteracaoScalarFieldEnum
    having?: InteracaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InteracaoCountAggregateInputType | true
    _avg?: InteracaoAvgAggregateInputType
    _sum?: InteracaoSumAggregateInputType
    _min?: InteracaoMinAggregateInputType
    _max?: InteracaoMaxAggregateInputType
  }

  export type InteracaoGroupByOutputType = {
    id: number
    tipo: $Enums.TipoInteracao
    mensagem: string
    usuarioId: number
    obraId: number
    createdAt: Date
    _count: InteracaoCountAggregateOutputType | null
    _avg: InteracaoAvgAggregateOutputType | null
    _sum: InteracaoSumAggregateOutputType | null
    _min: InteracaoMinAggregateOutputType | null
    _max: InteracaoMaxAggregateOutputType | null
  }

  type GetInteracaoGroupByPayload<T extends InteracaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InteracaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InteracaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InteracaoGroupByOutputType[P]>
            : GetScalarType<T[P], InteracaoGroupByOutputType[P]>
        }
      >
    >


  export type InteracaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    mensagem?: boolean
    usuarioId?: boolean
    obraId?: boolean
    createdAt?: boolean
    usuario?: boolean | UserDefaultArgs<ExtArgs>
    obra?: boolean | ObraDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interacao"]>

  export type InteracaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    mensagem?: boolean
    usuarioId?: boolean
    obraId?: boolean
    createdAt?: boolean
    usuario?: boolean | UserDefaultArgs<ExtArgs>
    obra?: boolean | ObraDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interacao"]>

  export type InteracaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    mensagem?: boolean
    usuarioId?: boolean
    obraId?: boolean
    createdAt?: boolean
    usuario?: boolean | UserDefaultArgs<ExtArgs>
    obra?: boolean | ObraDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interacao"]>

  export type InteracaoSelectScalar = {
    id?: boolean
    tipo?: boolean
    mensagem?: boolean
    usuarioId?: boolean
    obraId?: boolean
    createdAt?: boolean
  }

  export type InteracaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tipo" | "mensagem" | "usuarioId" | "obraId" | "createdAt", ExtArgs["result"]["interacao"]>
  export type InteracaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UserDefaultArgs<ExtArgs>
    obra?: boolean | ObraDefaultArgs<ExtArgs>
  }
  export type InteracaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UserDefaultArgs<ExtArgs>
    obra?: boolean | ObraDefaultArgs<ExtArgs>
  }
  export type InteracaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UserDefaultArgs<ExtArgs>
    obra?: boolean | ObraDefaultArgs<ExtArgs>
  }

  export type $InteracaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Interacao"
    objects: {
      usuario: Prisma.$UserPayload<ExtArgs>
      obra: Prisma.$ObraPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tipo: $Enums.TipoInteracao
      mensagem: string
      usuarioId: number
      obraId: number
      createdAt: Date
    }, ExtArgs["result"]["interacao"]>
    composites: {}
  }

  type InteracaoGetPayload<S extends boolean | null | undefined | InteracaoDefaultArgs> = $Result.GetResult<Prisma.$InteracaoPayload, S>

  type InteracaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InteracaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InteracaoCountAggregateInputType | true
    }

  export interface InteracaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Interacao'], meta: { name: 'Interacao' } }
    /**
     * Find zero or one Interacao that matches the filter.
     * @param {InteracaoFindUniqueArgs} args - Arguments to find a Interacao
     * @example
     * // Get one Interacao
     * const interacao = await prisma.interacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InteracaoFindUniqueArgs>(args: SelectSubset<T, InteracaoFindUniqueArgs<ExtArgs>>): Prisma__InteracaoClient<$Result.GetResult<Prisma.$InteracaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Interacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InteracaoFindUniqueOrThrowArgs} args - Arguments to find a Interacao
     * @example
     * // Get one Interacao
     * const interacao = await prisma.interacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InteracaoFindUniqueOrThrowArgs>(args: SelectSubset<T, InteracaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InteracaoClient<$Result.GetResult<Prisma.$InteracaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Interacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteracaoFindFirstArgs} args - Arguments to find a Interacao
     * @example
     * // Get one Interacao
     * const interacao = await prisma.interacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InteracaoFindFirstArgs>(args?: SelectSubset<T, InteracaoFindFirstArgs<ExtArgs>>): Prisma__InteracaoClient<$Result.GetResult<Prisma.$InteracaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Interacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteracaoFindFirstOrThrowArgs} args - Arguments to find a Interacao
     * @example
     * // Get one Interacao
     * const interacao = await prisma.interacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InteracaoFindFirstOrThrowArgs>(args?: SelectSubset<T, InteracaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__InteracaoClient<$Result.GetResult<Prisma.$InteracaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Interacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteracaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Interacaos
     * const interacaos = await prisma.interacao.findMany()
     * 
     * // Get first 10 Interacaos
     * const interacaos = await prisma.interacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const interacaoWithIdOnly = await prisma.interacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InteracaoFindManyArgs>(args?: SelectSubset<T, InteracaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InteracaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Interacao.
     * @param {InteracaoCreateArgs} args - Arguments to create a Interacao.
     * @example
     * // Create one Interacao
     * const Interacao = await prisma.interacao.create({
     *   data: {
     *     // ... data to create a Interacao
     *   }
     * })
     * 
     */
    create<T extends InteracaoCreateArgs>(args: SelectSubset<T, InteracaoCreateArgs<ExtArgs>>): Prisma__InteracaoClient<$Result.GetResult<Prisma.$InteracaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Interacaos.
     * @param {InteracaoCreateManyArgs} args - Arguments to create many Interacaos.
     * @example
     * // Create many Interacaos
     * const interacao = await prisma.interacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InteracaoCreateManyArgs>(args?: SelectSubset<T, InteracaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Interacaos and returns the data saved in the database.
     * @param {InteracaoCreateManyAndReturnArgs} args - Arguments to create many Interacaos.
     * @example
     * // Create many Interacaos
     * const interacao = await prisma.interacao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Interacaos and only return the `id`
     * const interacaoWithIdOnly = await prisma.interacao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InteracaoCreateManyAndReturnArgs>(args?: SelectSubset<T, InteracaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InteracaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Interacao.
     * @param {InteracaoDeleteArgs} args - Arguments to delete one Interacao.
     * @example
     * // Delete one Interacao
     * const Interacao = await prisma.interacao.delete({
     *   where: {
     *     // ... filter to delete one Interacao
     *   }
     * })
     * 
     */
    delete<T extends InteracaoDeleteArgs>(args: SelectSubset<T, InteracaoDeleteArgs<ExtArgs>>): Prisma__InteracaoClient<$Result.GetResult<Prisma.$InteracaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Interacao.
     * @param {InteracaoUpdateArgs} args - Arguments to update one Interacao.
     * @example
     * // Update one Interacao
     * const interacao = await prisma.interacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InteracaoUpdateArgs>(args: SelectSubset<T, InteracaoUpdateArgs<ExtArgs>>): Prisma__InteracaoClient<$Result.GetResult<Prisma.$InteracaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Interacaos.
     * @param {InteracaoDeleteManyArgs} args - Arguments to filter Interacaos to delete.
     * @example
     * // Delete a few Interacaos
     * const { count } = await prisma.interacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InteracaoDeleteManyArgs>(args?: SelectSubset<T, InteracaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Interacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteracaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Interacaos
     * const interacao = await prisma.interacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InteracaoUpdateManyArgs>(args: SelectSubset<T, InteracaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Interacaos and returns the data updated in the database.
     * @param {InteracaoUpdateManyAndReturnArgs} args - Arguments to update many Interacaos.
     * @example
     * // Update many Interacaos
     * const interacao = await prisma.interacao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Interacaos and only return the `id`
     * const interacaoWithIdOnly = await prisma.interacao.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InteracaoUpdateManyAndReturnArgs>(args: SelectSubset<T, InteracaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InteracaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Interacao.
     * @param {InteracaoUpsertArgs} args - Arguments to update or create a Interacao.
     * @example
     * // Update or create a Interacao
     * const interacao = await prisma.interacao.upsert({
     *   create: {
     *     // ... data to create a Interacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Interacao we want to update
     *   }
     * })
     */
    upsert<T extends InteracaoUpsertArgs>(args: SelectSubset<T, InteracaoUpsertArgs<ExtArgs>>): Prisma__InteracaoClient<$Result.GetResult<Prisma.$InteracaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Interacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteracaoCountArgs} args - Arguments to filter Interacaos to count.
     * @example
     * // Count the number of Interacaos
     * const count = await prisma.interacao.count({
     *   where: {
     *     // ... the filter for the Interacaos we want to count
     *   }
     * })
    **/
    count<T extends InteracaoCountArgs>(
      args?: Subset<T, InteracaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InteracaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Interacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteracaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InteracaoAggregateArgs>(args: Subset<T, InteracaoAggregateArgs>): Prisma.PrismaPromise<GetInteracaoAggregateType<T>>

    /**
     * Group by Interacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteracaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InteracaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InteracaoGroupByArgs['orderBy'] }
        : { orderBy?: InteracaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InteracaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInteracaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Interacao model
   */
  readonly fields: InteracaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Interacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InteracaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    obra<T extends ObraDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ObraDefaultArgs<ExtArgs>>): Prisma__ObraClient<$Result.GetResult<Prisma.$ObraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Interacao model
   */
  interface InteracaoFieldRefs {
    readonly id: FieldRef<"Interacao", 'Int'>
    readonly tipo: FieldRef<"Interacao", 'TipoInteracao'>
    readonly mensagem: FieldRef<"Interacao", 'String'>
    readonly usuarioId: FieldRef<"Interacao", 'Int'>
    readonly obraId: FieldRef<"Interacao", 'Int'>
    readonly createdAt: FieldRef<"Interacao", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Interacao findUnique
   */
  export type InteracaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interacao
     */
    select?: InteracaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interacao
     */
    omit?: InteracaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteracaoInclude<ExtArgs> | null
    /**
     * Filter, which Interacao to fetch.
     */
    where: InteracaoWhereUniqueInput
  }

  /**
   * Interacao findUniqueOrThrow
   */
  export type InteracaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interacao
     */
    select?: InteracaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interacao
     */
    omit?: InteracaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteracaoInclude<ExtArgs> | null
    /**
     * Filter, which Interacao to fetch.
     */
    where: InteracaoWhereUniqueInput
  }

  /**
   * Interacao findFirst
   */
  export type InteracaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interacao
     */
    select?: InteracaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interacao
     */
    omit?: InteracaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteracaoInclude<ExtArgs> | null
    /**
     * Filter, which Interacao to fetch.
     */
    where?: InteracaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interacaos to fetch.
     */
    orderBy?: InteracaoOrderByWithRelationInput | InteracaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Interacaos.
     */
    cursor?: InteracaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Interacaos.
     */
    distinct?: InteracaoScalarFieldEnum | InteracaoScalarFieldEnum[]
  }

  /**
   * Interacao findFirstOrThrow
   */
  export type InteracaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interacao
     */
    select?: InteracaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interacao
     */
    omit?: InteracaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteracaoInclude<ExtArgs> | null
    /**
     * Filter, which Interacao to fetch.
     */
    where?: InteracaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interacaos to fetch.
     */
    orderBy?: InteracaoOrderByWithRelationInput | InteracaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Interacaos.
     */
    cursor?: InteracaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Interacaos.
     */
    distinct?: InteracaoScalarFieldEnum | InteracaoScalarFieldEnum[]
  }

  /**
   * Interacao findMany
   */
  export type InteracaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interacao
     */
    select?: InteracaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interacao
     */
    omit?: InteracaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteracaoInclude<ExtArgs> | null
    /**
     * Filter, which Interacaos to fetch.
     */
    where?: InteracaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interacaos to fetch.
     */
    orderBy?: InteracaoOrderByWithRelationInput | InteracaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Interacaos.
     */
    cursor?: InteracaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interacaos.
     */
    skip?: number
    distinct?: InteracaoScalarFieldEnum | InteracaoScalarFieldEnum[]
  }

  /**
   * Interacao create
   */
  export type InteracaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interacao
     */
    select?: InteracaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interacao
     */
    omit?: InteracaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteracaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Interacao.
     */
    data: XOR<InteracaoCreateInput, InteracaoUncheckedCreateInput>
  }

  /**
   * Interacao createMany
   */
  export type InteracaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Interacaos.
     */
    data: InteracaoCreateManyInput | InteracaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Interacao createManyAndReturn
   */
  export type InteracaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interacao
     */
    select?: InteracaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Interacao
     */
    omit?: InteracaoOmit<ExtArgs> | null
    /**
     * The data used to create many Interacaos.
     */
    data: InteracaoCreateManyInput | InteracaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteracaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Interacao update
   */
  export type InteracaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interacao
     */
    select?: InteracaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interacao
     */
    omit?: InteracaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteracaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Interacao.
     */
    data: XOR<InteracaoUpdateInput, InteracaoUncheckedUpdateInput>
    /**
     * Choose, which Interacao to update.
     */
    where: InteracaoWhereUniqueInput
  }

  /**
   * Interacao updateMany
   */
  export type InteracaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Interacaos.
     */
    data: XOR<InteracaoUpdateManyMutationInput, InteracaoUncheckedUpdateManyInput>
    /**
     * Filter which Interacaos to update
     */
    where?: InteracaoWhereInput
    /**
     * Limit how many Interacaos to update.
     */
    limit?: number
  }

  /**
   * Interacao updateManyAndReturn
   */
  export type InteracaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interacao
     */
    select?: InteracaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Interacao
     */
    omit?: InteracaoOmit<ExtArgs> | null
    /**
     * The data used to update Interacaos.
     */
    data: XOR<InteracaoUpdateManyMutationInput, InteracaoUncheckedUpdateManyInput>
    /**
     * Filter which Interacaos to update
     */
    where?: InteracaoWhereInput
    /**
     * Limit how many Interacaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteracaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Interacao upsert
   */
  export type InteracaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interacao
     */
    select?: InteracaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interacao
     */
    omit?: InteracaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteracaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Interacao to update in case it exists.
     */
    where: InteracaoWhereUniqueInput
    /**
     * In case the Interacao found by the `where` argument doesn't exist, create a new Interacao with this data.
     */
    create: XOR<InteracaoCreateInput, InteracaoUncheckedCreateInput>
    /**
     * In case the Interacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InteracaoUpdateInput, InteracaoUncheckedUpdateInput>
  }

  /**
   * Interacao delete
   */
  export type InteracaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interacao
     */
    select?: InteracaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interacao
     */
    omit?: InteracaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteracaoInclude<ExtArgs> | null
    /**
     * Filter which Interacao to delete.
     */
    where: InteracaoWhereUniqueInput
  }

  /**
   * Interacao deleteMany
   */
  export type InteracaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Interacaos to delete
     */
    where?: InteracaoWhereInput
    /**
     * Limit how many Interacaos to delete.
     */
    limit?: number
  }

  /**
   * Interacao without action
   */
  export type InteracaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interacao
     */
    select?: InteracaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interacao
     */
    omit?: InteracaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteracaoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    username: 'username',
    senha: 'senha',
    tipo: 'tipo',
    criadoUser: 'criadoUser'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ObraScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    localizacao: 'localizacao',
    empresa: 'empresa',
    cronogramaInicio: 'cronogramaInicio',
    cronogramaFim: 'cronogramaFim',
    orcamento: 'orcamento',
    status: 'status',
    servidorId: 'servidorId',
    createdAt: 'createdAt'
  };

  export type ObraScalarFieldEnum = (typeof ObraScalarFieldEnum)[keyof typeof ObraScalarFieldEnum]


  export const EtapaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao',
    dataInicio: 'dataInicio',
    dataFim: 'dataFim',
    status: 'status',
    obraId: 'obraId'
  };

  export type EtapaScalarFieldEnum = (typeof EtapaScalarFieldEnum)[keyof typeof EtapaScalarFieldEnum]


  export const DocumentoScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    url: 'url',
    tipo: 'tipo',
    obraId: 'obraId'
  };

  export type DocumentoScalarFieldEnum = (typeof DocumentoScalarFieldEnum)[keyof typeof DocumentoScalarFieldEnum]


  export const InteracaoScalarFieldEnum: {
    id: 'id',
    tipo: 'tipo',
    mensagem: 'mensagem',
    usuarioId: 'usuarioId',
    obraId: 'obraId',
    createdAt: 'createdAt'
  };

  export type InteracaoScalarFieldEnum = (typeof InteracaoScalarFieldEnum)[keyof typeof InteracaoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'TipoUsuario'
   */
  export type EnumTipoUsuarioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoUsuario'>
    


  /**
   * Reference to a field of type 'TipoUsuario[]'
   */
  export type ListEnumTipoUsuarioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoUsuario[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'StatusObra'
   */
  export type EnumStatusObraFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusObra'>
    


  /**
   * Reference to a field of type 'StatusObra[]'
   */
  export type ListEnumStatusObraFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusObra[]'>
    


  /**
   * Reference to a field of type 'StatusEtapa'
   */
  export type EnumStatusEtapaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusEtapa'>
    


  /**
   * Reference to a field of type 'StatusEtapa[]'
   */
  export type ListEnumStatusEtapaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusEtapa[]'>
    


  /**
   * Reference to a field of type 'TipoInteracao'
   */
  export type EnumTipoInteracaoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoInteracao'>
    


  /**
   * Reference to a field of type 'TipoInteracao[]'
   */
  export type ListEnumTipoInteracaoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoInteracao[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    nome?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    senha?: StringFilter<"User"> | string
    tipo?: EnumTipoUsuarioFilter<"User"> | $Enums.TipoUsuario
    criadoUser?: DateTimeFilter<"User"> | Date | string
    obras?: ObraListRelationFilter
    interacoes?: InteracaoListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    username?: SortOrder
    senha?: SortOrder
    tipo?: SortOrder
    criadoUser?: SortOrder
    obras?: ObraOrderByRelationAggregateInput
    interacoes?: InteracaoOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    nome?: StringFilter<"User"> | string
    senha?: StringFilter<"User"> | string
    tipo?: EnumTipoUsuarioFilter<"User"> | $Enums.TipoUsuario
    criadoUser?: DateTimeFilter<"User"> | Date | string
    obras?: ObraListRelationFilter
    interacoes?: InteracaoListRelationFilter
  }, "id" | "email" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    username?: SortOrder
    senha?: SortOrder
    tipo?: SortOrder
    criadoUser?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    nome?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    senha?: StringWithAggregatesFilter<"User"> | string
    tipo?: EnumTipoUsuarioWithAggregatesFilter<"User"> | $Enums.TipoUsuario
    criadoUser?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ObraWhereInput = {
    AND?: ObraWhereInput | ObraWhereInput[]
    OR?: ObraWhereInput[]
    NOT?: ObraWhereInput | ObraWhereInput[]
    id?: IntFilter<"Obra"> | number
    nome?: StringFilter<"Obra"> | string
    localizacao?: StringFilter<"Obra"> | string
    empresa?: StringFilter<"Obra"> | string
    cronogramaInicio?: DateTimeFilter<"Obra"> | Date | string
    cronogramaFim?: DateTimeFilter<"Obra"> | Date | string
    orcamento?: FloatFilter<"Obra"> | number
    status?: EnumStatusObraFilter<"Obra"> | $Enums.StatusObra
    servidorId?: IntFilter<"Obra"> | number
    createdAt?: DateTimeFilter<"Obra"> | Date | string
    servidor?: XOR<UserScalarRelationFilter, UserWhereInput>
    etapas?: EtapaListRelationFilter
    documentos?: DocumentoListRelationFilter
    interacoes?: InteracaoListRelationFilter
  }

  export type ObraOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    localizacao?: SortOrder
    empresa?: SortOrder
    cronogramaInicio?: SortOrder
    cronogramaFim?: SortOrder
    orcamento?: SortOrder
    status?: SortOrder
    servidorId?: SortOrder
    createdAt?: SortOrder
    servidor?: UserOrderByWithRelationInput
    etapas?: EtapaOrderByRelationAggregateInput
    documentos?: DocumentoOrderByRelationAggregateInput
    interacoes?: InteracaoOrderByRelationAggregateInput
  }

  export type ObraWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ObraWhereInput | ObraWhereInput[]
    OR?: ObraWhereInput[]
    NOT?: ObraWhereInput | ObraWhereInput[]
    nome?: StringFilter<"Obra"> | string
    localizacao?: StringFilter<"Obra"> | string
    empresa?: StringFilter<"Obra"> | string
    cronogramaInicio?: DateTimeFilter<"Obra"> | Date | string
    cronogramaFim?: DateTimeFilter<"Obra"> | Date | string
    orcamento?: FloatFilter<"Obra"> | number
    status?: EnumStatusObraFilter<"Obra"> | $Enums.StatusObra
    servidorId?: IntFilter<"Obra"> | number
    createdAt?: DateTimeFilter<"Obra"> | Date | string
    servidor?: XOR<UserScalarRelationFilter, UserWhereInput>
    etapas?: EtapaListRelationFilter
    documentos?: DocumentoListRelationFilter
    interacoes?: InteracaoListRelationFilter
  }, "id">

  export type ObraOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    localizacao?: SortOrder
    empresa?: SortOrder
    cronogramaInicio?: SortOrder
    cronogramaFim?: SortOrder
    orcamento?: SortOrder
    status?: SortOrder
    servidorId?: SortOrder
    createdAt?: SortOrder
    _count?: ObraCountOrderByAggregateInput
    _avg?: ObraAvgOrderByAggregateInput
    _max?: ObraMaxOrderByAggregateInput
    _min?: ObraMinOrderByAggregateInput
    _sum?: ObraSumOrderByAggregateInput
  }

  export type ObraScalarWhereWithAggregatesInput = {
    AND?: ObraScalarWhereWithAggregatesInput | ObraScalarWhereWithAggregatesInput[]
    OR?: ObraScalarWhereWithAggregatesInput[]
    NOT?: ObraScalarWhereWithAggregatesInput | ObraScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Obra"> | number
    nome?: StringWithAggregatesFilter<"Obra"> | string
    localizacao?: StringWithAggregatesFilter<"Obra"> | string
    empresa?: StringWithAggregatesFilter<"Obra"> | string
    cronogramaInicio?: DateTimeWithAggregatesFilter<"Obra"> | Date | string
    cronogramaFim?: DateTimeWithAggregatesFilter<"Obra"> | Date | string
    orcamento?: FloatWithAggregatesFilter<"Obra"> | number
    status?: EnumStatusObraWithAggregatesFilter<"Obra"> | $Enums.StatusObra
    servidorId?: IntWithAggregatesFilter<"Obra"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Obra"> | Date | string
  }

  export type EtapaWhereInput = {
    AND?: EtapaWhereInput | EtapaWhereInput[]
    OR?: EtapaWhereInput[]
    NOT?: EtapaWhereInput | EtapaWhereInput[]
    id?: IntFilter<"Etapa"> | number
    nome?: StringFilter<"Etapa"> | string
    descricao?: StringFilter<"Etapa"> | string
    dataInicio?: DateTimeFilter<"Etapa"> | Date | string
    dataFim?: DateTimeFilter<"Etapa"> | Date | string
    status?: EnumStatusEtapaFilter<"Etapa"> | $Enums.StatusEtapa
    obraId?: IntFilter<"Etapa"> | number
    obra?: XOR<ObraScalarRelationFilter, ObraWhereInput>
  }

  export type EtapaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    status?: SortOrder
    obraId?: SortOrder
    obra?: ObraOrderByWithRelationInput
  }

  export type EtapaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EtapaWhereInput | EtapaWhereInput[]
    OR?: EtapaWhereInput[]
    NOT?: EtapaWhereInput | EtapaWhereInput[]
    nome?: StringFilter<"Etapa"> | string
    descricao?: StringFilter<"Etapa"> | string
    dataInicio?: DateTimeFilter<"Etapa"> | Date | string
    dataFim?: DateTimeFilter<"Etapa"> | Date | string
    status?: EnumStatusEtapaFilter<"Etapa"> | $Enums.StatusEtapa
    obraId?: IntFilter<"Etapa"> | number
    obra?: XOR<ObraScalarRelationFilter, ObraWhereInput>
  }, "id">

  export type EtapaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    status?: SortOrder
    obraId?: SortOrder
    _count?: EtapaCountOrderByAggregateInput
    _avg?: EtapaAvgOrderByAggregateInput
    _max?: EtapaMaxOrderByAggregateInput
    _min?: EtapaMinOrderByAggregateInput
    _sum?: EtapaSumOrderByAggregateInput
  }

  export type EtapaScalarWhereWithAggregatesInput = {
    AND?: EtapaScalarWhereWithAggregatesInput | EtapaScalarWhereWithAggregatesInput[]
    OR?: EtapaScalarWhereWithAggregatesInput[]
    NOT?: EtapaScalarWhereWithAggregatesInput | EtapaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Etapa"> | number
    nome?: StringWithAggregatesFilter<"Etapa"> | string
    descricao?: StringWithAggregatesFilter<"Etapa"> | string
    dataInicio?: DateTimeWithAggregatesFilter<"Etapa"> | Date | string
    dataFim?: DateTimeWithAggregatesFilter<"Etapa"> | Date | string
    status?: EnumStatusEtapaWithAggregatesFilter<"Etapa"> | $Enums.StatusEtapa
    obraId?: IntWithAggregatesFilter<"Etapa"> | number
  }

  export type DocumentoWhereInput = {
    AND?: DocumentoWhereInput | DocumentoWhereInput[]
    OR?: DocumentoWhereInput[]
    NOT?: DocumentoWhereInput | DocumentoWhereInput[]
    id?: IntFilter<"Documento"> | number
    titulo?: StringFilter<"Documento"> | string
    url?: StringFilter<"Documento"> | string
    tipo?: StringFilter<"Documento"> | string
    obraId?: IntFilter<"Documento"> | number
    obra?: XOR<ObraScalarRelationFilter, ObraWhereInput>
  }

  export type DocumentoOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    url?: SortOrder
    tipo?: SortOrder
    obraId?: SortOrder
    obra?: ObraOrderByWithRelationInput
  }

  export type DocumentoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DocumentoWhereInput | DocumentoWhereInput[]
    OR?: DocumentoWhereInput[]
    NOT?: DocumentoWhereInput | DocumentoWhereInput[]
    titulo?: StringFilter<"Documento"> | string
    url?: StringFilter<"Documento"> | string
    tipo?: StringFilter<"Documento"> | string
    obraId?: IntFilter<"Documento"> | number
    obra?: XOR<ObraScalarRelationFilter, ObraWhereInput>
  }, "id">

  export type DocumentoOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    url?: SortOrder
    tipo?: SortOrder
    obraId?: SortOrder
    _count?: DocumentoCountOrderByAggregateInput
    _avg?: DocumentoAvgOrderByAggregateInput
    _max?: DocumentoMaxOrderByAggregateInput
    _min?: DocumentoMinOrderByAggregateInput
    _sum?: DocumentoSumOrderByAggregateInput
  }

  export type DocumentoScalarWhereWithAggregatesInput = {
    AND?: DocumentoScalarWhereWithAggregatesInput | DocumentoScalarWhereWithAggregatesInput[]
    OR?: DocumentoScalarWhereWithAggregatesInput[]
    NOT?: DocumentoScalarWhereWithAggregatesInput | DocumentoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Documento"> | number
    titulo?: StringWithAggregatesFilter<"Documento"> | string
    url?: StringWithAggregatesFilter<"Documento"> | string
    tipo?: StringWithAggregatesFilter<"Documento"> | string
    obraId?: IntWithAggregatesFilter<"Documento"> | number
  }

  export type InteracaoWhereInput = {
    AND?: InteracaoWhereInput | InteracaoWhereInput[]
    OR?: InteracaoWhereInput[]
    NOT?: InteracaoWhereInput | InteracaoWhereInput[]
    id?: IntFilter<"Interacao"> | number
    tipo?: EnumTipoInteracaoFilter<"Interacao"> | $Enums.TipoInteracao
    mensagem?: StringFilter<"Interacao"> | string
    usuarioId?: IntFilter<"Interacao"> | number
    obraId?: IntFilter<"Interacao"> | number
    createdAt?: DateTimeFilter<"Interacao"> | Date | string
    usuario?: XOR<UserScalarRelationFilter, UserWhereInput>
    obra?: XOR<ObraScalarRelationFilter, ObraWhereInput>
  }

  export type InteracaoOrderByWithRelationInput = {
    id?: SortOrder
    tipo?: SortOrder
    mensagem?: SortOrder
    usuarioId?: SortOrder
    obraId?: SortOrder
    createdAt?: SortOrder
    usuario?: UserOrderByWithRelationInput
    obra?: ObraOrderByWithRelationInput
  }

  export type InteracaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InteracaoWhereInput | InteracaoWhereInput[]
    OR?: InteracaoWhereInput[]
    NOT?: InteracaoWhereInput | InteracaoWhereInput[]
    tipo?: EnumTipoInteracaoFilter<"Interacao"> | $Enums.TipoInteracao
    mensagem?: StringFilter<"Interacao"> | string
    usuarioId?: IntFilter<"Interacao"> | number
    obraId?: IntFilter<"Interacao"> | number
    createdAt?: DateTimeFilter<"Interacao"> | Date | string
    usuario?: XOR<UserScalarRelationFilter, UserWhereInput>
    obra?: XOR<ObraScalarRelationFilter, ObraWhereInput>
  }, "id">

  export type InteracaoOrderByWithAggregationInput = {
    id?: SortOrder
    tipo?: SortOrder
    mensagem?: SortOrder
    usuarioId?: SortOrder
    obraId?: SortOrder
    createdAt?: SortOrder
    _count?: InteracaoCountOrderByAggregateInput
    _avg?: InteracaoAvgOrderByAggregateInput
    _max?: InteracaoMaxOrderByAggregateInput
    _min?: InteracaoMinOrderByAggregateInput
    _sum?: InteracaoSumOrderByAggregateInput
  }

  export type InteracaoScalarWhereWithAggregatesInput = {
    AND?: InteracaoScalarWhereWithAggregatesInput | InteracaoScalarWhereWithAggregatesInput[]
    OR?: InteracaoScalarWhereWithAggregatesInput[]
    NOT?: InteracaoScalarWhereWithAggregatesInput | InteracaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Interacao"> | number
    tipo?: EnumTipoInteracaoWithAggregatesFilter<"Interacao"> | $Enums.TipoInteracao
    mensagem?: StringWithAggregatesFilter<"Interacao"> | string
    usuarioId?: IntWithAggregatesFilter<"Interacao"> | number
    obraId?: IntWithAggregatesFilter<"Interacao"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Interacao"> | Date | string
  }

  export type UserCreateInput = {
    nome: string
    email: string
    username: string
    senha: string
    tipo: $Enums.TipoUsuario
    criadoUser?: Date | string
    obras?: ObraCreateNestedManyWithoutServidorInput
    interacoes?: InteracaoCreateNestedManyWithoutUsuarioInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    nome: string
    email: string
    username: string
    senha: string
    tipo: $Enums.TipoUsuario
    criadoUser?: Date | string
    obras?: ObraUncheckedCreateNestedManyWithoutServidorInput
    interacoes?: InteracaoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UserUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    criadoUser?: DateTimeFieldUpdateOperationsInput | Date | string
    obras?: ObraUpdateManyWithoutServidorNestedInput
    interacoes?: InteracaoUpdateManyWithoutUsuarioNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    criadoUser?: DateTimeFieldUpdateOperationsInput | Date | string
    obras?: ObraUncheckedUpdateManyWithoutServidorNestedInput
    interacoes?: InteracaoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    nome: string
    email: string
    username: string
    senha: string
    tipo: $Enums.TipoUsuario
    criadoUser?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    criadoUser?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    criadoUser?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ObraCreateInput = {
    nome: string
    localizacao: string
    empresa: string
    cronogramaInicio: Date | string
    cronogramaFim: Date | string
    orcamento: number
    status: $Enums.StatusObra
    createdAt?: Date | string
    servidor: UserCreateNestedOneWithoutObrasInput
    etapas?: EtapaCreateNestedManyWithoutObraInput
    documentos?: DocumentoCreateNestedManyWithoutObraInput
    interacoes?: InteracaoCreateNestedManyWithoutObraInput
  }

  export type ObraUncheckedCreateInput = {
    id?: number
    nome: string
    localizacao: string
    empresa: string
    cronogramaInicio: Date | string
    cronogramaFim: Date | string
    orcamento: number
    status: $Enums.StatusObra
    servidorId: number
    createdAt?: Date | string
    etapas?: EtapaUncheckedCreateNestedManyWithoutObraInput
    documentos?: DocumentoUncheckedCreateNestedManyWithoutObraInput
    interacoes?: InteracaoUncheckedCreateNestedManyWithoutObraInput
  }

  export type ObraUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    empresa?: StringFieldUpdateOperationsInput | string
    cronogramaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    cronogramaFim?: DateTimeFieldUpdateOperationsInput | Date | string
    orcamento?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusObraFieldUpdateOperationsInput | $Enums.StatusObra
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servidor?: UserUpdateOneRequiredWithoutObrasNestedInput
    etapas?: EtapaUpdateManyWithoutObraNestedInput
    documentos?: DocumentoUpdateManyWithoutObraNestedInput
    interacoes?: InteracaoUpdateManyWithoutObraNestedInput
  }

  export type ObraUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    empresa?: StringFieldUpdateOperationsInput | string
    cronogramaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    cronogramaFim?: DateTimeFieldUpdateOperationsInput | Date | string
    orcamento?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusObraFieldUpdateOperationsInput | $Enums.StatusObra
    servidorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    etapas?: EtapaUncheckedUpdateManyWithoutObraNestedInput
    documentos?: DocumentoUncheckedUpdateManyWithoutObraNestedInput
    interacoes?: InteracaoUncheckedUpdateManyWithoutObraNestedInput
  }

  export type ObraCreateManyInput = {
    id?: number
    nome: string
    localizacao: string
    empresa: string
    cronogramaInicio: Date | string
    cronogramaFim: Date | string
    orcamento: number
    status: $Enums.StatusObra
    servidorId: number
    createdAt?: Date | string
  }

  export type ObraUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    empresa?: StringFieldUpdateOperationsInput | string
    cronogramaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    cronogramaFim?: DateTimeFieldUpdateOperationsInput | Date | string
    orcamento?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusObraFieldUpdateOperationsInput | $Enums.StatusObra
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ObraUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    empresa?: StringFieldUpdateOperationsInput | string
    cronogramaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    cronogramaFim?: DateTimeFieldUpdateOperationsInput | Date | string
    orcamento?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusObraFieldUpdateOperationsInput | $Enums.StatusObra
    servidorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EtapaCreateInput = {
    nome: string
    descricao: string
    dataInicio: Date | string
    dataFim: Date | string
    status: $Enums.StatusEtapa
    obra: ObraCreateNestedOneWithoutEtapasInput
  }

  export type EtapaUncheckedCreateInput = {
    id?: number
    nome: string
    descricao: string
    dataInicio: Date | string
    dataFim: Date | string
    status: $Enums.StatusEtapa
    obraId: number
  }

  export type EtapaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusEtapaFieldUpdateOperationsInput | $Enums.StatusEtapa
    obra?: ObraUpdateOneRequiredWithoutEtapasNestedInput
  }

  export type EtapaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusEtapaFieldUpdateOperationsInput | $Enums.StatusEtapa
    obraId?: IntFieldUpdateOperationsInput | number
  }

  export type EtapaCreateManyInput = {
    id?: number
    nome: string
    descricao: string
    dataInicio: Date | string
    dataFim: Date | string
    status: $Enums.StatusEtapa
    obraId: number
  }

  export type EtapaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusEtapaFieldUpdateOperationsInput | $Enums.StatusEtapa
  }

  export type EtapaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusEtapaFieldUpdateOperationsInput | $Enums.StatusEtapa
    obraId?: IntFieldUpdateOperationsInput | number
  }

  export type DocumentoCreateInput = {
    titulo: string
    url: string
    tipo: string
    obra: ObraCreateNestedOneWithoutDocumentosInput
  }

  export type DocumentoUncheckedCreateInput = {
    id?: number
    titulo: string
    url: string
    tipo: string
    obraId: number
  }

  export type DocumentoUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    obra?: ObraUpdateOneRequiredWithoutDocumentosNestedInput
  }

  export type DocumentoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    obraId?: IntFieldUpdateOperationsInput | number
  }

  export type DocumentoCreateManyInput = {
    id?: number
    titulo: string
    url: string
    tipo: string
    obraId: number
  }

  export type DocumentoUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    obraId?: IntFieldUpdateOperationsInput | number
  }

  export type InteracaoCreateInput = {
    tipo: $Enums.TipoInteracao
    mensagem: string
    createdAt?: Date | string
    usuario: UserCreateNestedOneWithoutInteracoesInput
    obra: ObraCreateNestedOneWithoutInteracoesInput
  }

  export type InteracaoUncheckedCreateInput = {
    id?: number
    tipo: $Enums.TipoInteracao
    mensagem: string
    usuarioId: number
    obraId: number
    createdAt?: Date | string
  }

  export type InteracaoUpdateInput = {
    tipo?: EnumTipoInteracaoFieldUpdateOperationsInput | $Enums.TipoInteracao
    mensagem?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UserUpdateOneRequiredWithoutInteracoesNestedInput
    obra?: ObraUpdateOneRequiredWithoutInteracoesNestedInput
  }

  export type InteracaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: EnumTipoInteracaoFieldUpdateOperationsInput | $Enums.TipoInteracao
    mensagem?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    obraId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InteracaoCreateManyInput = {
    id?: number
    tipo: $Enums.TipoInteracao
    mensagem: string
    usuarioId: number
    obraId: number
    createdAt?: Date | string
  }

  export type InteracaoUpdateManyMutationInput = {
    tipo?: EnumTipoInteracaoFieldUpdateOperationsInput | $Enums.TipoInteracao
    mensagem?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InteracaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: EnumTipoInteracaoFieldUpdateOperationsInput | $Enums.TipoInteracao
    mensagem?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    obraId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumTipoUsuarioFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoUsuario | EnumTipoUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.TipoUsuario[] | ListEnumTipoUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoUsuario[] | ListEnumTipoUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoUsuarioFilter<$PrismaModel> | $Enums.TipoUsuario
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ObraListRelationFilter = {
    every?: ObraWhereInput
    some?: ObraWhereInput
    none?: ObraWhereInput
  }

  export type InteracaoListRelationFilter = {
    every?: InteracaoWhereInput
    some?: InteracaoWhereInput
    none?: InteracaoWhereInput
  }

  export type ObraOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InteracaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    username?: SortOrder
    senha?: SortOrder
    tipo?: SortOrder
    criadoUser?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    username?: SortOrder
    senha?: SortOrder
    tipo?: SortOrder
    criadoUser?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    username?: SortOrder
    senha?: SortOrder
    tipo?: SortOrder
    criadoUser?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumTipoUsuarioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoUsuario | EnumTipoUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.TipoUsuario[] | ListEnumTipoUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoUsuario[] | ListEnumTipoUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoUsuarioWithAggregatesFilter<$PrismaModel> | $Enums.TipoUsuario
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoUsuarioFilter<$PrismaModel>
    _max?: NestedEnumTipoUsuarioFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumStatusObraFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusObra | EnumStatusObraFieldRefInput<$PrismaModel>
    in?: $Enums.StatusObra[] | ListEnumStatusObraFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusObra[] | ListEnumStatusObraFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusObraFilter<$PrismaModel> | $Enums.StatusObra
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type EtapaListRelationFilter = {
    every?: EtapaWhereInput
    some?: EtapaWhereInput
    none?: EtapaWhereInput
  }

  export type DocumentoListRelationFilter = {
    every?: DocumentoWhereInput
    some?: DocumentoWhereInput
    none?: DocumentoWhereInput
  }

  export type EtapaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DocumentoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ObraCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    localizacao?: SortOrder
    empresa?: SortOrder
    cronogramaInicio?: SortOrder
    cronogramaFim?: SortOrder
    orcamento?: SortOrder
    status?: SortOrder
    servidorId?: SortOrder
    createdAt?: SortOrder
  }

  export type ObraAvgOrderByAggregateInput = {
    id?: SortOrder
    orcamento?: SortOrder
    servidorId?: SortOrder
  }

  export type ObraMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    localizacao?: SortOrder
    empresa?: SortOrder
    cronogramaInicio?: SortOrder
    cronogramaFim?: SortOrder
    orcamento?: SortOrder
    status?: SortOrder
    servidorId?: SortOrder
    createdAt?: SortOrder
  }

  export type ObraMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    localizacao?: SortOrder
    empresa?: SortOrder
    cronogramaInicio?: SortOrder
    cronogramaFim?: SortOrder
    orcamento?: SortOrder
    status?: SortOrder
    servidorId?: SortOrder
    createdAt?: SortOrder
  }

  export type ObraSumOrderByAggregateInput = {
    id?: SortOrder
    orcamento?: SortOrder
    servidorId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumStatusObraWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusObra | EnumStatusObraFieldRefInput<$PrismaModel>
    in?: $Enums.StatusObra[] | ListEnumStatusObraFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusObra[] | ListEnumStatusObraFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusObraWithAggregatesFilter<$PrismaModel> | $Enums.StatusObra
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusObraFilter<$PrismaModel>
    _max?: NestedEnumStatusObraFilter<$PrismaModel>
  }

  export type EnumStatusEtapaFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusEtapa | EnumStatusEtapaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusEtapa[] | ListEnumStatusEtapaFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusEtapa[] | ListEnumStatusEtapaFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusEtapaFilter<$PrismaModel> | $Enums.StatusEtapa
  }

  export type ObraScalarRelationFilter = {
    is?: ObraWhereInput
    isNot?: ObraWhereInput
  }

  export type EtapaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    status?: SortOrder
    obraId?: SortOrder
  }

  export type EtapaAvgOrderByAggregateInput = {
    id?: SortOrder
    obraId?: SortOrder
  }

  export type EtapaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    status?: SortOrder
    obraId?: SortOrder
  }

  export type EtapaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    status?: SortOrder
    obraId?: SortOrder
  }

  export type EtapaSumOrderByAggregateInput = {
    id?: SortOrder
    obraId?: SortOrder
  }

  export type EnumStatusEtapaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusEtapa | EnumStatusEtapaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusEtapa[] | ListEnumStatusEtapaFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusEtapa[] | ListEnumStatusEtapaFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusEtapaWithAggregatesFilter<$PrismaModel> | $Enums.StatusEtapa
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusEtapaFilter<$PrismaModel>
    _max?: NestedEnumStatusEtapaFilter<$PrismaModel>
  }

  export type DocumentoCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    url?: SortOrder
    tipo?: SortOrder
    obraId?: SortOrder
  }

  export type DocumentoAvgOrderByAggregateInput = {
    id?: SortOrder
    obraId?: SortOrder
  }

  export type DocumentoMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    url?: SortOrder
    tipo?: SortOrder
    obraId?: SortOrder
  }

  export type DocumentoMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    url?: SortOrder
    tipo?: SortOrder
    obraId?: SortOrder
  }

  export type DocumentoSumOrderByAggregateInput = {
    id?: SortOrder
    obraId?: SortOrder
  }

  export type EnumTipoInteracaoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoInteracao | EnumTipoInteracaoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoInteracao[] | ListEnumTipoInteracaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoInteracao[] | ListEnumTipoInteracaoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoInteracaoFilter<$PrismaModel> | $Enums.TipoInteracao
  }

  export type InteracaoCountOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    mensagem?: SortOrder
    usuarioId?: SortOrder
    obraId?: SortOrder
    createdAt?: SortOrder
  }

  export type InteracaoAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    obraId?: SortOrder
  }

  export type InteracaoMaxOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    mensagem?: SortOrder
    usuarioId?: SortOrder
    obraId?: SortOrder
    createdAt?: SortOrder
  }

  export type InteracaoMinOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    mensagem?: SortOrder
    usuarioId?: SortOrder
    obraId?: SortOrder
    createdAt?: SortOrder
  }

  export type InteracaoSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    obraId?: SortOrder
  }

  export type EnumTipoInteracaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoInteracao | EnumTipoInteracaoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoInteracao[] | ListEnumTipoInteracaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoInteracao[] | ListEnumTipoInteracaoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoInteracaoWithAggregatesFilter<$PrismaModel> | $Enums.TipoInteracao
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoInteracaoFilter<$PrismaModel>
    _max?: NestedEnumTipoInteracaoFilter<$PrismaModel>
  }

  export type ObraCreateNestedManyWithoutServidorInput = {
    create?: XOR<ObraCreateWithoutServidorInput, ObraUncheckedCreateWithoutServidorInput> | ObraCreateWithoutServidorInput[] | ObraUncheckedCreateWithoutServidorInput[]
    connectOrCreate?: ObraCreateOrConnectWithoutServidorInput | ObraCreateOrConnectWithoutServidorInput[]
    createMany?: ObraCreateManyServidorInputEnvelope
    connect?: ObraWhereUniqueInput | ObraWhereUniqueInput[]
  }

  export type InteracaoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<InteracaoCreateWithoutUsuarioInput, InteracaoUncheckedCreateWithoutUsuarioInput> | InteracaoCreateWithoutUsuarioInput[] | InteracaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: InteracaoCreateOrConnectWithoutUsuarioInput | InteracaoCreateOrConnectWithoutUsuarioInput[]
    createMany?: InteracaoCreateManyUsuarioInputEnvelope
    connect?: InteracaoWhereUniqueInput | InteracaoWhereUniqueInput[]
  }

  export type ObraUncheckedCreateNestedManyWithoutServidorInput = {
    create?: XOR<ObraCreateWithoutServidorInput, ObraUncheckedCreateWithoutServidorInput> | ObraCreateWithoutServidorInput[] | ObraUncheckedCreateWithoutServidorInput[]
    connectOrCreate?: ObraCreateOrConnectWithoutServidorInput | ObraCreateOrConnectWithoutServidorInput[]
    createMany?: ObraCreateManyServidorInputEnvelope
    connect?: ObraWhereUniqueInput | ObraWhereUniqueInput[]
  }

  export type InteracaoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<InteracaoCreateWithoutUsuarioInput, InteracaoUncheckedCreateWithoutUsuarioInput> | InteracaoCreateWithoutUsuarioInput[] | InteracaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: InteracaoCreateOrConnectWithoutUsuarioInput | InteracaoCreateOrConnectWithoutUsuarioInput[]
    createMany?: InteracaoCreateManyUsuarioInputEnvelope
    connect?: InteracaoWhereUniqueInput | InteracaoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumTipoUsuarioFieldUpdateOperationsInput = {
    set?: $Enums.TipoUsuario
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ObraUpdateManyWithoutServidorNestedInput = {
    create?: XOR<ObraCreateWithoutServidorInput, ObraUncheckedCreateWithoutServidorInput> | ObraCreateWithoutServidorInput[] | ObraUncheckedCreateWithoutServidorInput[]
    connectOrCreate?: ObraCreateOrConnectWithoutServidorInput | ObraCreateOrConnectWithoutServidorInput[]
    upsert?: ObraUpsertWithWhereUniqueWithoutServidorInput | ObraUpsertWithWhereUniqueWithoutServidorInput[]
    createMany?: ObraCreateManyServidorInputEnvelope
    set?: ObraWhereUniqueInput | ObraWhereUniqueInput[]
    disconnect?: ObraWhereUniqueInput | ObraWhereUniqueInput[]
    delete?: ObraWhereUniqueInput | ObraWhereUniqueInput[]
    connect?: ObraWhereUniqueInput | ObraWhereUniqueInput[]
    update?: ObraUpdateWithWhereUniqueWithoutServidorInput | ObraUpdateWithWhereUniqueWithoutServidorInput[]
    updateMany?: ObraUpdateManyWithWhereWithoutServidorInput | ObraUpdateManyWithWhereWithoutServidorInput[]
    deleteMany?: ObraScalarWhereInput | ObraScalarWhereInput[]
  }

  export type InteracaoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<InteracaoCreateWithoutUsuarioInput, InteracaoUncheckedCreateWithoutUsuarioInput> | InteracaoCreateWithoutUsuarioInput[] | InteracaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: InteracaoCreateOrConnectWithoutUsuarioInput | InteracaoCreateOrConnectWithoutUsuarioInput[]
    upsert?: InteracaoUpsertWithWhereUniqueWithoutUsuarioInput | InteracaoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: InteracaoCreateManyUsuarioInputEnvelope
    set?: InteracaoWhereUniqueInput | InteracaoWhereUniqueInput[]
    disconnect?: InteracaoWhereUniqueInput | InteracaoWhereUniqueInput[]
    delete?: InteracaoWhereUniqueInput | InteracaoWhereUniqueInput[]
    connect?: InteracaoWhereUniqueInput | InteracaoWhereUniqueInput[]
    update?: InteracaoUpdateWithWhereUniqueWithoutUsuarioInput | InteracaoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: InteracaoUpdateManyWithWhereWithoutUsuarioInput | InteracaoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: InteracaoScalarWhereInput | InteracaoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ObraUncheckedUpdateManyWithoutServidorNestedInput = {
    create?: XOR<ObraCreateWithoutServidorInput, ObraUncheckedCreateWithoutServidorInput> | ObraCreateWithoutServidorInput[] | ObraUncheckedCreateWithoutServidorInput[]
    connectOrCreate?: ObraCreateOrConnectWithoutServidorInput | ObraCreateOrConnectWithoutServidorInput[]
    upsert?: ObraUpsertWithWhereUniqueWithoutServidorInput | ObraUpsertWithWhereUniqueWithoutServidorInput[]
    createMany?: ObraCreateManyServidorInputEnvelope
    set?: ObraWhereUniqueInput | ObraWhereUniqueInput[]
    disconnect?: ObraWhereUniqueInput | ObraWhereUniqueInput[]
    delete?: ObraWhereUniqueInput | ObraWhereUniqueInput[]
    connect?: ObraWhereUniqueInput | ObraWhereUniqueInput[]
    update?: ObraUpdateWithWhereUniqueWithoutServidorInput | ObraUpdateWithWhereUniqueWithoutServidorInput[]
    updateMany?: ObraUpdateManyWithWhereWithoutServidorInput | ObraUpdateManyWithWhereWithoutServidorInput[]
    deleteMany?: ObraScalarWhereInput | ObraScalarWhereInput[]
  }

  export type InteracaoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<InteracaoCreateWithoutUsuarioInput, InteracaoUncheckedCreateWithoutUsuarioInput> | InteracaoCreateWithoutUsuarioInput[] | InteracaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: InteracaoCreateOrConnectWithoutUsuarioInput | InteracaoCreateOrConnectWithoutUsuarioInput[]
    upsert?: InteracaoUpsertWithWhereUniqueWithoutUsuarioInput | InteracaoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: InteracaoCreateManyUsuarioInputEnvelope
    set?: InteracaoWhereUniqueInput | InteracaoWhereUniqueInput[]
    disconnect?: InteracaoWhereUniqueInput | InteracaoWhereUniqueInput[]
    delete?: InteracaoWhereUniqueInput | InteracaoWhereUniqueInput[]
    connect?: InteracaoWhereUniqueInput | InteracaoWhereUniqueInput[]
    update?: InteracaoUpdateWithWhereUniqueWithoutUsuarioInput | InteracaoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: InteracaoUpdateManyWithWhereWithoutUsuarioInput | InteracaoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: InteracaoScalarWhereInput | InteracaoScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutObrasInput = {
    create?: XOR<UserCreateWithoutObrasInput, UserUncheckedCreateWithoutObrasInput>
    connectOrCreate?: UserCreateOrConnectWithoutObrasInput
    connect?: UserWhereUniqueInput
  }

  export type EtapaCreateNestedManyWithoutObraInput = {
    create?: XOR<EtapaCreateWithoutObraInput, EtapaUncheckedCreateWithoutObraInput> | EtapaCreateWithoutObraInput[] | EtapaUncheckedCreateWithoutObraInput[]
    connectOrCreate?: EtapaCreateOrConnectWithoutObraInput | EtapaCreateOrConnectWithoutObraInput[]
    createMany?: EtapaCreateManyObraInputEnvelope
    connect?: EtapaWhereUniqueInput | EtapaWhereUniqueInput[]
  }

  export type DocumentoCreateNestedManyWithoutObraInput = {
    create?: XOR<DocumentoCreateWithoutObraInput, DocumentoUncheckedCreateWithoutObraInput> | DocumentoCreateWithoutObraInput[] | DocumentoUncheckedCreateWithoutObraInput[]
    connectOrCreate?: DocumentoCreateOrConnectWithoutObraInput | DocumentoCreateOrConnectWithoutObraInput[]
    createMany?: DocumentoCreateManyObraInputEnvelope
    connect?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
  }

  export type InteracaoCreateNestedManyWithoutObraInput = {
    create?: XOR<InteracaoCreateWithoutObraInput, InteracaoUncheckedCreateWithoutObraInput> | InteracaoCreateWithoutObraInput[] | InteracaoUncheckedCreateWithoutObraInput[]
    connectOrCreate?: InteracaoCreateOrConnectWithoutObraInput | InteracaoCreateOrConnectWithoutObraInput[]
    createMany?: InteracaoCreateManyObraInputEnvelope
    connect?: InteracaoWhereUniqueInput | InteracaoWhereUniqueInput[]
  }

  export type EtapaUncheckedCreateNestedManyWithoutObraInput = {
    create?: XOR<EtapaCreateWithoutObraInput, EtapaUncheckedCreateWithoutObraInput> | EtapaCreateWithoutObraInput[] | EtapaUncheckedCreateWithoutObraInput[]
    connectOrCreate?: EtapaCreateOrConnectWithoutObraInput | EtapaCreateOrConnectWithoutObraInput[]
    createMany?: EtapaCreateManyObraInputEnvelope
    connect?: EtapaWhereUniqueInput | EtapaWhereUniqueInput[]
  }

  export type DocumentoUncheckedCreateNestedManyWithoutObraInput = {
    create?: XOR<DocumentoCreateWithoutObraInput, DocumentoUncheckedCreateWithoutObraInput> | DocumentoCreateWithoutObraInput[] | DocumentoUncheckedCreateWithoutObraInput[]
    connectOrCreate?: DocumentoCreateOrConnectWithoutObraInput | DocumentoCreateOrConnectWithoutObraInput[]
    createMany?: DocumentoCreateManyObraInputEnvelope
    connect?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
  }

  export type InteracaoUncheckedCreateNestedManyWithoutObraInput = {
    create?: XOR<InteracaoCreateWithoutObraInput, InteracaoUncheckedCreateWithoutObraInput> | InteracaoCreateWithoutObraInput[] | InteracaoUncheckedCreateWithoutObraInput[]
    connectOrCreate?: InteracaoCreateOrConnectWithoutObraInput | InteracaoCreateOrConnectWithoutObraInput[]
    createMany?: InteracaoCreateManyObraInputEnvelope
    connect?: InteracaoWhereUniqueInput | InteracaoWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumStatusObraFieldUpdateOperationsInput = {
    set?: $Enums.StatusObra
  }

  export type UserUpdateOneRequiredWithoutObrasNestedInput = {
    create?: XOR<UserCreateWithoutObrasInput, UserUncheckedCreateWithoutObrasInput>
    connectOrCreate?: UserCreateOrConnectWithoutObrasInput
    upsert?: UserUpsertWithoutObrasInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutObrasInput, UserUpdateWithoutObrasInput>, UserUncheckedUpdateWithoutObrasInput>
  }

  export type EtapaUpdateManyWithoutObraNestedInput = {
    create?: XOR<EtapaCreateWithoutObraInput, EtapaUncheckedCreateWithoutObraInput> | EtapaCreateWithoutObraInput[] | EtapaUncheckedCreateWithoutObraInput[]
    connectOrCreate?: EtapaCreateOrConnectWithoutObraInput | EtapaCreateOrConnectWithoutObraInput[]
    upsert?: EtapaUpsertWithWhereUniqueWithoutObraInput | EtapaUpsertWithWhereUniqueWithoutObraInput[]
    createMany?: EtapaCreateManyObraInputEnvelope
    set?: EtapaWhereUniqueInput | EtapaWhereUniqueInput[]
    disconnect?: EtapaWhereUniqueInput | EtapaWhereUniqueInput[]
    delete?: EtapaWhereUniqueInput | EtapaWhereUniqueInput[]
    connect?: EtapaWhereUniqueInput | EtapaWhereUniqueInput[]
    update?: EtapaUpdateWithWhereUniqueWithoutObraInput | EtapaUpdateWithWhereUniqueWithoutObraInput[]
    updateMany?: EtapaUpdateManyWithWhereWithoutObraInput | EtapaUpdateManyWithWhereWithoutObraInput[]
    deleteMany?: EtapaScalarWhereInput | EtapaScalarWhereInput[]
  }

  export type DocumentoUpdateManyWithoutObraNestedInput = {
    create?: XOR<DocumentoCreateWithoutObraInput, DocumentoUncheckedCreateWithoutObraInput> | DocumentoCreateWithoutObraInput[] | DocumentoUncheckedCreateWithoutObraInput[]
    connectOrCreate?: DocumentoCreateOrConnectWithoutObraInput | DocumentoCreateOrConnectWithoutObraInput[]
    upsert?: DocumentoUpsertWithWhereUniqueWithoutObraInput | DocumentoUpsertWithWhereUniqueWithoutObraInput[]
    createMany?: DocumentoCreateManyObraInputEnvelope
    set?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    disconnect?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    delete?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    connect?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    update?: DocumentoUpdateWithWhereUniqueWithoutObraInput | DocumentoUpdateWithWhereUniqueWithoutObraInput[]
    updateMany?: DocumentoUpdateManyWithWhereWithoutObraInput | DocumentoUpdateManyWithWhereWithoutObraInput[]
    deleteMany?: DocumentoScalarWhereInput | DocumentoScalarWhereInput[]
  }

  export type InteracaoUpdateManyWithoutObraNestedInput = {
    create?: XOR<InteracaoCreateWithoutObraInput, InteracaoUncheckedCreateWithoutObraInput> | InteracaoCreateWithoutObraInput[] | InteracaoUncheckedCreateWithoutObraInput[]
    connectOrCreate?: InteracaoCreateOrConnectWithoutObraInput | InteracaoCreateOrConnectWithoutObraInput[]
    upsert?: InteracaoUpsertWithWhereUniqueWithoutObraInput | InteracaoUpsertWithWhereUniqueWithoutObraInput[]
    createMany?: InteracaoCreateManyObraInputEnvelope
    set?: InteracaoWhereUniqueInput | InteracaoWhereUniqueInput[]
    disconnect?: InteracaoWhereUniqueInput | InteracaoWhereUniqueInput[]
    delete?: InteracaoWhereUniqueInput | InteracaoWhereUniqueInput[]
    connect?: InteracaoWhereUniqueInput | InteracaoWhereUniqueInput[]
    update?: InteracaoUpdateWithWhereUniqueWithoutObraInput | InteracaoUpdateWithWhereUniqueWithoutObraInput[]
    updateMany?: InteracaoUpdateManyWithWhereWithoutObraInput | InteracaoUpdateManyWithWhereWithoutObraInput[]
    deleteMany?: InteracaoScalarWhereInput | InteracaoScalarWhereInput[]
  }

  export type EtapaUncheckedUpdateManyWithoutObraNestedInput = {
    create?: XOR<EtapaCreateWithoutObraInput, EtapaUncheckedCreateWithoutObraInput> | EtapaCreateWithoutObraInput[] | EtapaUncheckedCreateWithoutObraInput[]
    connectOrCreate?: EtapaCreateOrConnectWithoutObraInput | EtapaCreateOrConnectWithoutObraInput[]
    upsert?: EtapaUpsertWithWhereUniqueWithoutObraInput | EtapaUpsertWithWhereUniqueWithoutObraInput[]
    createMany?: EtapaCreateManyObraInputEnvelope
    set?: EtapaWhereUniqueInput | EtapaWhereUniqueInput[]
    disconnect?: EtapaWhereUniqueInput | EtapaWhereUniqueInput[]
    delete?: EtapaWhereUniqueInput | EtapaWhereUniqueInput[]
    connect?: EtapaWhereUniqueInput | EtapaWhereUniqueInput[]
    update?: EtapaUpdateWithWhereUniqueWithoutObraInput | EtapaUpdateWithWhereUniqueWithoutObraInput[]
    updateMany?: EtapaUpdateManyWithWhereWithoutObraInput | EtapaUpdateManyWithWhereWithoutObraInput[]
    deleteMany?: EtapaScalarWhereInput | EtapaScalarWhereInput[]
  }

  export type DocumentoUncheckedUpdateManyWithoutObraNestedInput = {
    create?: XOR<DocumentoCreateWithoutObraInput, DocumentoUncheckedCreateWithoutObraInput> | DocumentoCreateWithoutObraInput[] | DocumentoUncheckedCreateWithoutObraInput[]
    connectOrCreate?: DocumentoCreateOrConnectWithoutObraInput | DocumentoCreateOrConnectWithoutObraInput[]
    upsert?: DocumentoUpsertWithWhereUniqueWithoutObraInput | DocumentoUpsertWithWhereUniqueWithoutObraInput[]
    createMany?: DocumentoCreateManyObraInputEnvelope
    set?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    disconnect?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    delete?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    connect?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    update?: DocumentoUpdateWithWhereUniqueWithoutObraInput | DocumentoUpdateWithWhereUniqueWithoutObraInput[]
    updateMany?: DocumentoUpdateManyWithWhereWithoutObraInput | DocumentoUpdateManyWithWhereWithoutObraInput[]
    deleteMany?: DocumentoScalarWhereInput | DocumentoScalarWhereInput[]
  }

  export type InteracaoUncheckedUpdateManyWithoutObraNestedInput = {
    create?: XOR<InteracaoCreateWithoutObraInput, InteracaoUncheckedCreateWithoutObraInput> | InteracaoCreateWithoutObraInput[] | InteracaoUncheckedCreateWithoutObraInput[]
    connectOrCreate?: InteracaoCreateOrConnectWithoutObraInput | InteracaoCreateOrConnectWithoutObraInput[]
    upsert?: InteracaoUpsertWithWhereUniqueWithoutObraInput | InteracaoUpsertWithWhereUniqueWithoutObraInput[]
    createMany?: InteracaoCreateManyObraInputEnvelope
    set?: InteracaoWhereUniqueInput | InteracaoWhereUniqueInput[]
    disconnect?: InteracaoWhereUniqueInput | InteracaoWhereUniqueInput[]
    delete?: InteracaoWhereUniqueInput | InteracaoWhereUniqueInput[]
    connect?: InteracaoWhereUniqueInput | InteracaoWhereUniqueInput[]
    update?: InteracaoUpdateWithWhereUniqueWithoutObraInput | InteracaoUpdateWithWhereUniqueWithoutObraInput[]
    updateMany?: InteracaoUpdateManyWithWhereWithoutObraInput | InteracaoUpdateManyWithWhereWithoutObraInput[]
    deleteMany?: InteracaoScalarWhereInput | InteracaoScalarWhereInput[]
  }

  export type ObraCreateNestedOneWithoutEtapasInput = {
    create?: XOR<ObraCreateWithoutEtapasInput, ObraUncheckedCreateWithoutEtapasInput>
    connectOrCreate?: ObraCreateOrConnectWithoutEtapasInput
    connect?: ObraWhereUniqueInput
  }

  export type EnumStatusEtapaFieldUpdateOperationsInput = {
    set?: $Enums.StatusEtapa
  }

  export type ObraUpdateOneRequiredWithoutEtapasNestedInput = {
    create?: XOR<ObraCreateWithoutEtapasInput, ObraUncheckedCreateWithoutEtapasInput>
    connectOrCreate?: ObraCreateOrConnectWithoutEtapasInput
    upsert?: ObraUpsertWithoutEtapasInput
    connect?: ObraWhereUniqueInput
    update?: XOR<XOR<ObraUpdateToOneWithWhereWithoutEtapasInput, ObraUpdateWithoutEtapasInput>, ObraUncheckedUpdateWithoutEtapasInput>
  }

  export type ObraCreateNestedOneWithoutDocumentosInput = {
    create?: XOR<ObraCreateWithoutDocumentosInput, ObraUncheckedCreateWithoutDocumentosInput>
    connectOrCreate?: ObraCreateOrConnectWithoutDocumentosInput
    connect?: ObraWhereUniqueInput
  }

  export type ObraUpdateOneRequiredWithoutDocumentosNestedInput = {
    create?: XOR<ObraCreateWithoutDocumentosInput, ObraUncheckedCreateWithoutDocumentosInput>
    connectOrCreate?: ObraCreateOrConnectWithoutDocumentosInput
    upsert?: ObraUpsertWithoutDocumentosInput
    connect?: ObraWhereUniqueInput
    update?: XOR<XOR<ObraUpdateToOneWithWhereWithoutDocumentosInput, ObraUpdateWithoutDocumentosInput>, ObraUncheckedUpdateWithoutDocumentosInput>
  }

  export type UserCreateNestedOneWithoutInteracoesInput = {
    create?: XOR<UserCreateWithoutInteracoesInput, UserUncheckedCreateWithoutInteracoesInput>
    connectOrCreate?: UserCreateOrConnectWithoutInteracoesInput
    connect?: UserWhereUniqueInput
  }

  export type ObraCreateNestedOneWithoutInteracoesInput = {
    create?: XOR<ObraCreateWithoutInteracoesInput, ObraUncheckedCreateWithoutInteracoesInput>
    connectOrCreate?: ObraCreateOrConnectWithoutInteracoesInput
    connect?: ObraWhereUniqueInput
  }

  export type EnumTipoInteracaoFieldUpdateOperationsInput = {
    set?: $Enums.TipoInteracao
  }

  export type UserUpdateOneRequiredWithoutInteracoesNestedInput = {
    create?: XOR<UserCreateWithoutInteracoesInput, UserUncheckedCreateWithoutInteracoesInput>
    connectOrCreate?: UserCreateOrConnectWithoutInteracoesInput
    upsert?: UserUpsertWithoutInteracoesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInteracoesInput, UserUpdateWithoutInteracoesInput>, UserUncheckedUpdateWithoutInteracoesInput>
  }

  export type ObraUpdateOneRequiredWithoutInteracoesNestedInput = {
    create?: XOR<ObraCreateWithoutInteracoesInput, ObraUncheckedCreateWithoutInteracoesInput>
    connectOrCreate?: ObraCreateOrConnectWithoutInteracoesInput
    upsert?: ObraUpsertWithoutInteracoesInput
    connect?: ObraWhereUniqueInput
    update?: XOR<XOR<ObraUpdateToOneWithWhereWithoutInteracoesInput, ObraUpdateWithoutInteracoesInput>, ObraUncheckedUpdateWithoutInteracoesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumTipoUsuarioFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoUsuario | EnumTipoUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.TipoUsuario[] | ListEnumTipoUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoUsuario[] | ListEnumTipoUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoUsuarioFilter<$PrismaModel> | $Enums.TipoUsuario
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumTipoUsuarioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoUsuario | EnumTipoUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.TipoUsuario[] | ListEnumTipoUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoUsuario[] | ListEnumTipoUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoUsuarioWithAggregatesFilter<$PrismaModel> | $Enums.TipoUsuario
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoUsuarioFilter<$PrismaModel>
    _max?: NestedEnumTipoUsuarioFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumStatusObraFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusObra | EnumStatusObraFieldRefInput<$PrismaModel>
    in?: $Enums.StatusObra[] | ListEnumStatusObraFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusObra[] | ListEnumStatusObraFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusObraFilter<$PrismaModel> | $Enums.StatusObra
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumStatusObraWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusObra | EnumStatusObraFieldRefInput<$PrismaModel>
    in?: $Enums.StatusObra[] | ListEnumStatusObraFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusObra[] | ListEnumStatusObraFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusObraWithAggregatesFilter<$PrismaModel> | $Enums.StatusObra
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusObraFilter<$PrismaModel>
    _max?: NestedEnumStatusObraFilter<$PrismaModel>
  }

  export type NestedEnumStatusEtapaFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusEtapa | EnumStatusEtapaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusEtapa[] | ListEnumStatusEtapaFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusEtapa[] | ListEnumStatusEtapaFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusEtapaFilter<$PrismaModel> | $Enums.StatusEtapa
  }

  export type NestedEnumStatusEtapaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusEtapa | EnumStatusEtapaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusEtapa[] | ListEnumStatusEtapaFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusEtapa[] | ListEnumStatusEtapaFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusEtapaWithAggregatesFilter<$PrismaModel> | $Enums.StatusEtapa
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusEtapaFilter<$PrismaModel>
    _max?: NestedEnumStatusEtapaFilter<$PrismaModel>
  }

  export type NestedEnumTipoInteracaoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoInteracao | EnumTipoInteracaoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoInteracao[] | ListEnumTipoInteracaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoInteracao[] | ListEnumTipoInteracaoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoInteracaoFilter<$PrismaModel> | $Enums.TipoInteracao
  }

  export type NestedEnumTipoInteracaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoInteracao | EnumTipoInteracaoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoInteracao[] | ListEnumTipoInteracaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoInteracao[] | ListEnumTipoInteracaoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoInteracaoWithAggregatesFilter<$PrismaModel> | $Enums.TipoInteracao
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoInteracaoFilter<$PrismaModel>
    _max?: NestedEnumTipoInteracaoFilter<$PrismaModel>
  }

  export type ObraCreateWithoutServidorInput = {
    nome: string
    localizacao: string
    empresa: string
    cronogramaInicio: Date | string
    cronogramaFim: Date | string
    orcamento: number
    status: $Enums.StatusObra
    createdAt?: Date | string
    etapas?: EtapaCreateNestedManyWithoutObraInput
    documentos?: DocumentoCreateNestedManyWithoutObraInput
    interacoes?: InteracaoCreateNestedManyWithoutObraInput
  }

  export type ObraUncheckedCreateWithoutServidorInput = {
    id?: number
    nome: string
    localizacao: string
    empresa: string
    cronogramaInicio: Date | string
    cronogramaFim: Date | string
    orcamento: number
    status: $Enums.StatusObra
    createdAt?: Date | string
    etapas?: EtapaUncheckedCreateNestedManyWithoutObraInput
    documentos?: DocumentoUncheckedCreateNestedManyWithoutObraInput
    interacoes?: InteracaoUncheckedCreateNestedManyWithoutObraInput
  }

  export type ObraCreateOrConnectWithoutServidorInput = {
    where: ObraWhereUniqueInput
    create: XOR<ObraCreateWithoutServidorInput, ObraUncheckedCreateWithoutServidorInput>
  }

  export type ObraCreateManyServidorInputEnvelope = {
    data: ObraCreateManyServidorInput | ObraCreateManyServidorInput[]
    skipDuplicates?: boolean
  }

  export type InteracaoCreateWithoutUsuarioInput = {
    tipo: $Enums.TipoInteracao
    mensagem: string
    createdAt?: Date | string
    obra: ObraCreateNestedOneWithoutInteracoesInput
  }

  export type InteracaoUncheckedCreateWithoutUsuarioInput = {
    id?: number
    tipo: $Enums.TipoInteracao
    mensagem: string
    obraId: number
    createdAt?: Date | string
  }

  export type InteracaoCreateOrConnectWithoutUsuarioInput = {
    where: InteracaoWhereUniqueInput
    create: XOR<InteracaoCreateWithoutUsuarioInput, InteracaoUncheckedCreateWithoutUsuarioInput>
  }

  export type InteracaoCreateManyUsuarioInputEnvelope = {
    data: InteracaoCreateManyUsuarioInput | InteracaoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type ObraUpsertWithWhereUniqueWithoutServidorInput = {
    where: ObraWhereUniqueInput
    update: XOR<ObraUpdateWithoutServidorInput, ObraUncheckedUpdateWithoutServidorInput>
    create: XOR<ObraCreateWithoutServidorInput, ObraUncheckedCreateWithoutServidorInput>
  }

  export type ObraUpdateWithWhereUniqueWithoutServidorInput = {
    where: ObraWhereUniqueInput
    data: XOR<ObraUpdateWithoutServidorInput, ObraUncheckedUpdateWithoutServidorInput>
  }

  export type ObraUpdateManyWithWhereWithoutServidorInput = {
    where: ObraScalarWhereInput
    data: XOR<ObraUpdateManyMutationInput, ObraUncheckedUpdateManyWithoutServidorInput>
  }

  export type ObraScalarWhereInput = {
    AND?: ObraScalarWhereInput | ObraScalarWhereInput[]
    OR?: ObraScalarWhereInput[]
    NOT?: ObraScalarWhereInput | ObraScalarWhereInput[]
    id?: IntFilter<"Obra"> | number
    nome?: StringFilter<"Obra"> | string
    localizacao?: StringFilter<"Obra"> | string
    empresa?: StringFilter<"Obra"> | string
    cronogramaInicio?: DateTimeFilter<"Obra"> | Date | string
    cronogramaFim?: DateTimeFilter<"Obra"> | Date | string
    orcamento?: FloatFilter<"Obra"> | number
    status?: EnumStatusObraFilter<"Obra"> | $Enums.StatusObra
    servidorId?: IntFilter<"Obra"> | number
    createdAt?: DateTimeFilter<"Obra"> | Date | string
  }

  export type InteracaoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: InteracaoWhereUniqueInput
    update: XOR<InteracaoUpdateWithoutUsuarioInput, InteracaoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<InteracaoCreateWithoutUsuarioInput, InteracaoUncheckedCreateWithoutUsuarioInput>
  }

  export type InteracaoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: InteracaoWhereUniqueInput
    data: XOR<InteracaoUpdateWithoutUsuarioInput, InteracaoUncheckedUpdateWithoutUsuarioInput>
  }

  export type InteracaoUpdateManyWithWhereWithoutUsuarioInput = {
    where: InteracaoScalarWhereInput
    data: XOR<InteracaoUpdateManyMutationInput, InteracaoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type InteracaoScalarWhereInput = {
    AND?: InteracaoScalarWhereInput | InteracaoScalarWhereInput[]
    OR?: InteracaoScalarWhereInput[]
    NOT?: InteracaoScalarWhereInput | InteracaoScalarWhereInput[]
    id?: IntFilter<"Interacao"> | number
    tipo?: EnumTipoInteracaoFilter<"Interacao"> | $Enums.TipoInteracao
    mensagem?: StringFilter<"Interacao"> | string
    usuarioId?: IntFilter<"Interacao"> | number
    obraId?: IntFilter<"Interacao"> | number
    createdAt?: DateTimeFilter<"Interacao"> | Date | string
  }

  export type UserCreateWithoutObrasInput = {
    nome: string
    email: string
    username: string
    senha: string
    tipo: $Enums.TipoUsuario
    criadoUser?: Date | string
    interacoes?: InteracaoCreateNestedManyWithoutUsuarioInput
  }

  export type UserUncheckedCreateWithoutObrasInput = {
    id?: number
    nome: string
    email: string
    username: string
    senha: string
    tipo: $Enums.TipoUsuario
    criadoUser?: Date | string
    interacoes?: InteracaoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UserCreateOrConnectWithoutObrasInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutObrasInput, UserUncheckedCreateWithoutObrasInput>
  }

  export type EtapaCreateWithoutObraInput = {
    nome: string
    descricao: string
    dataInicio: Date | string
    dataFim: Date | string
    status: $Enums.StatusEtapa
  }

  export type EtapaUncheckedCreateWithoutObraInput = {
    id?: number
    nome: string
    descricao: string
    dataInicio: Date | string
    dataFim: Date | string
    status: $Enums.StatusEtapa
  }

  export type EtapaCreateOrConnectWithoutObraInput = {
    where: EtapaWhereUniqueInput
    create: XOR<EtapaCreateWithoutObraInput, EtapaUncheckedCreateWithoutObraInput>
  }

  export type EtapaCreateManyObraInputEnvelope = {
    data: EtapaCreateManyObraInput | EtapaCreateManyObraInput[]
    skipDuplicates?: boolean
  }

  export type DocumentoCreateWithoutObraInput = {
    titulo: string
    url: string
    tipo: string
  }

  export type DocumentoUncheckedCreateWithoutObraInput = {
    id?: number
    titulo: string
    url: string
    tipo: string
  }

  export type DocumentoCreateOrConnectWithoutObraInput = {
    where: DocumentoWhereUniqueInput
    create: XOR<DocumentoCreateWithoutObraInput, DocumentoUncheckedCreateWithoutObraInput>
  }

  export type DocumentoCreateManyObraInputEnvelope = {
    data: DocumentoCreateManyObraInput | DocumentoCreateManyObraInput[]
    skipDuplicates?: boolean
  }

  export type InteracaoCreateWithoutObraInput = {
    tipo: $Enums.TipoInteracao
    mensagem: string
    createdAt?: Date | string
    usuario: UserCreateNestedOneWithoutInteracoesInput
  }

  export type InteracaoUncheckedCreateWithoutObraInput = {
    id?: number
    tipo: $Enums.TipoInteracao
    mensagem: string
    usuarioId: number
    createdAt?: Date | string
  }

  export type InteracaoCreateOrConnectWithoutObraInput = {
    where: InteracaoWhereUniqueInput
    create: XOR<InteracaoCreateWithoutObraInput, InteracaoUncheckedCreateWithoutObraInput>
  }

  export type InteracaoCreateManyObraInputEnvelope = {
    data: InteracaoCreateManyObraInput | InteracaoCreateManyObraInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutObrasInput = {
    update: XOR<UserUpdateWithoutObrasInput, UserUncheckedUpdateWithoutObrasInput>
    create: XOR<UserCreateWithoutObrasInput, UserUncheckedCreateWithoutObrasInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutObrasInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutObrasInput, UserUncheckedUpdateWithoutObrasInput>
  }

  export type UserUpdateWithoutObrasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    criadoUser?: DateTimeFieldUpdateOperationsInput | Date | string
    interacoes?: InteracaoUpdateManyWithoutUsuarioNestedInput
  }

  export type UserUncheckedUpdateWithoutObrasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    criadoUser?: DateTimeFieldUpdateOperationsInput | Date | string
    interacoes?: InteracaoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type EtapaUpsertWithWhereUniqueWithoutObraInput = {
    where: EtapaWhereUniqueInput
    update: XOR<EtapaUpdateWithoutObraInput, EtapaUncheckedUpdateWithoutObraInput>
    create: XOR<EtapaCreateWithoutObraInput, EtapaUncheckedCreateWithoutObraInput>
  }

  export type EtapaUpdateWithWhereUniqueWithoutObraInput = {
    where: EtapaWhereUniqueInput
    data: XOR<EtapaUpdateWithoutObraInput, EtapaUncheckedUpdateWithoutObraInput>
  }

  export type EtapaUpdateManyWithWhereWithoutObraInput = {
    where: EtapaScalarWhereInput
    data: XOR<EtapaUpdateManyMutationInput, EtapaUncheckedUpdateManyWithoutObraInput>
  }

  export type EtapaScalarWhereInput = {
    AND?: EtapaScalarWhereInput | EtapaScalarWhereInput[]
    OR?: EtapaScalarWhereInput[]
    NOT?: EtapaScalarWhereInput | EtapaScalarWhereInput[]
    id?: IntFilter<"Etapa"> | number
    nome?: StringFilter<"Etapa"> | string
    descricao?: StringFilter<"Etapa"> | string
    dataInicio?: DateTimeFilter<"Etapa"> | Date | string
    dataFim?: DateTimeFilter<"Etapa"> | Date | string
    status?: EnumStatusEtapaFilter<"Etapa"> | $Enums.StatusEtapa
    obraId?: IntFilter<"Etapa"> | number
  }

  export type DocumentoUpsertWithWhereUniqueWithoutObraInput = {
    where: DocumentoWhereUniqueInput
    update: XOR<DocumentoUpdateWithoutObraInput, DocumentoUncheckedUpdateWithoutObraInput>
    create: XOR<DocumentoCreateWithoutObraInput, DocumentoUncheckedCreateWithoutObraInput>
  }

  export type DocumentoUpdateWithWhereUniqueWithoutObraInput = {
    where: DocumentoWhereUniqueInput
    data: XOR<DocumentoUpdateWithoutObraInput, DocumentoUncheckedUpdateWithoutObraInput>
  }

  export type DocumentoUpdateManyWithWhereWithoutObraInput = {
    where: DocumentoScalarWhereInput
    data: XOR<DocumentoUpdateManyMutationInput, DocumentoUncheckedUpdateManyWithoutObraInput>
  }

  export type DocumentoScalarWhereInput = {
    AND?: DocumentoScalarWhereInput | DocumentoScalarWhereInput[]
    OR?: DocumentoScalarWhereInput[]
    NOT?: DocumentoScalarWhereInput | DocumentoScalarWhereInput[]
    id?: IntFilter<"Documento"> | number
    titulo?: StringFilter<"Documento"> | string
    url?: StringFilter<"Documento"> | string
    tipo?: StringFilter<"Documento"> | string
    obraId?: IntFilter<"Documento"> | number
  }

  export type InteracaoUpsertWithWhereUniqueWithoutObraInput = {
    where: InteracaoWhereUniqueInput
    update: XOR<InteracaoUpdateWithoutObraInput, InteracaoUncheckedUpdateWithoutObraInput>
    create: XOR<InteracaoCreateWithoutObraInput, InteracaoUncheckedCreateWithoutObraInput>
  }

  export type InteracaoUpdateWithWhereUniqueWithoutObraInput = {
    where: InteracaoWhereUniqueInput
    data: XOR<InteracaoUpdateWithoutObraInput, InteracaoUncheckedUpdateWithoutObraInput>
  }

  export type InteracaoUpdateManyWithWhereWithoutObraInput = {
    where: InteracaoScalarWhereInput
    data: XOR<InteracaoUpdateManyMutationInput, InteracaoUncheckedUpdateManyWithoutObraInput>
  }

  export type ObraCreateWithoutEtapasInput = {
    nome: string
    localizacao: string
    empresa: string
    cronogramaInicio: Date | string
    cronogramaFim: Date | string
    orcamento: number
    status: $Enums.StatusObra
    createdAt?: Date | string
    servidor: UserCreateNestedOneWithoutObrasInput
    documentos?: DocumentoCreateNestedManyWithoutObraInput
    interacoes?: InteracaoCreateNestedManyWithoutObraInput
  }

  export type ObraUncheckedCreateWithoutEtapasInput = {
    id?: number
    nome: string
    localizacao: string
    empresa: string
    cronogramaInicio: Date | string
    cronogramaFim: Date | string
    orcamento: number
    status: $Enums.StatusObra
    servidorId: number
    createdAt?: Date | string
    documentos?: DocumentoUncheckedCreateNestedManyWithoutObraInput
    interacoes?: InteracaoUncheckedCreateNestedManyWithoutObraInput
  }

  export type ObraCreateOrConnectWithoutEtapasInput = {
    where: ObraWhereUniqueInput
    create: XOR<ObraCreateWithoutEtapasInput, ObraUncheckedCreateWithoutEtapasInput>
  }

  export type ObraUpsertWithoutEtapasInput = {
    update: XOR<ObraUpdateWithoutEtapasInput, ObraUncheckedUpdateWithoutEtapasInput>
    create: XOR<ObraCreateWithoutEtapasInput, ObraUncheckedCreateWithoutEtapasInput>
    where?: ObraWhereInput
  }

  export type ObraUpdateToOneWithWhereWithoutEtapasInput = {
    where?: ObraWhereInput
    data: XOR<ObraUpdateWithoutEtapasInput, ObraUncheckedUpdateWithoutEtapasInput>
  }

  export type ObraUpdateWithoutEtapasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    empresa?: StringFieldUpdateOperationsInput | string
    cronogramaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    cronogramaFim?: DateTimeFieldUpdateOperationsInput | Date | string
    orcamento?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusObraFieldUpdateOperationsInput | $Enums.StatusObra
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servidor?: UserUpdateOneRequiredWithoutObrasNestedInput
    documentos?: DocumentoUpdateManyWithoutObraNestedInput
    interacoes?: InteracaoUpdateManyWithoutObraNestedInput
  }

  export type ObraUncheckedUpdateWithoutEtapasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    empresa?: StringFieldUpdateOperationsInput | string
    cronogramaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    cronogramaFim?: DateTimeFieldUpdateOperationsInput | Date | string
    orcamento?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusObraFieldUpdateOperationsInput | $Enums.StatusObra
    servidorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documentos?: DocumentoUncheckedUpdateManyWithoutObraNestedInput
    interacoes?: InteracaoUncheckedUpdateManyWithoutObraNestedInput
  }

  export type ObraCreateWithoutDocumentosInput = {
    nome: string
    localizacao: string
    empresa: string
    cronogramaInicio: Date | string
    cronogramaFim: Date | string
    orcamento: number
    status: $Enums.StatusObra
    createdAt?: Date | string
    servidor: UserCreateNestedOneWithoutObrasInput
    etapas?: EtapaCreateNestedManyWithoutObraInput
    interacoes?: InteracaoCreateNestedManyWithoutObraInput
  }

  export type ObraUncheckedCreateWithoutDocumentosInput = {
    id?: number
    nome: string
    localizacao: string
    empresa: string
    cronogramaInicio: Date | string
    cronogramaFim: Date | string
    orcamento: number
    status: $Enums.StatusObra
    servidorId: number
    createdAt?: Date | string
    etapas?: EtapaUncheckedCreateNestedManyWithoutObraInput
    interacoes?: InteracaoUncheckedCreateNestedManyWithoutObraInput
  }

  export type ObraCreateOrConnectWithoutDocumentosInput = {
    where: ObraWhereUniqueInput
    create: XOR<ObraCreateWithoutDocumentosInput, ObraUncheckedCreateWithoutDocumentosInput>
  }

  export type ObraUpsertWithoutDocumentosInput = {
    update: XOR<ObraUpdateWithoutDocumentosInput, ObraUncheckedUpdateWithoutDocumentosInput>
    create: XOR<ObraCreateWithoutDocumentosInput, ObraUncheckedCreateWithoutDocumentosInput>
    where?: ObraWhereInput
  }

  export type ObraUpdateToOneWithWhereWithoutDocumentosInput = {
    where?: ObraWhereInput
    data: XOR<ObraUpdateWithoutDocumentosInput, ObraUncheckedUpdateWithoutDocumentosInput>
  }

  export type ObraUpdateWithoutDocumentosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    empresa?: StringFieldUpdateOperationsInput | string
    cronogramaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    cronogramaFim?: DateTimeFieldUpdateOperationsInput | Date | string
    orcamento?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusObraFieldUpdateOperationsInput | $Enums.StatusObra
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servidor?: UserUpdateOneRequiredWithoutObrasNestedInput
    etapas?: EtapaUpdateManyWithoutObraNestedInput
    interacoes?: InteracaoUpdateManyWithoutObraNestedInput
  }

  export type ObraUncheckedUpdateWithoutDocumentosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    empresa?: StringFieldUpdateOperationsInput | string
    cronogramaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    cronogramaFim?: DateTimeFieldUpdateOperationsInput | Date | string
    orcamento?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusObraFieldUpdateOperationsInput | $Enums.StatusObra
    servidorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    etapas?: EtapaUncheckedUpdateManyWithoutObraNestedInput
    interacoes?: InteracaoUncheckedUpdateManyWithoutObraNestedInput
  }

  export type UserCreateWithoutInteracoesInput = {
    nome: string
    email: string
    username: string
    senha: string
    tipo: $Enums.TipoUsuario
    criadoUser?: Date | string
    obras?: ObraCreateNestedManyWithoutServidorInput
  }

  export type UserUncheckedCreateWithoutInteracoesInput = {
    id?: number
    nome: string
    email: string
    username: string
    senha: string
    tipo: $Enums.TipoUsuario
    criadoUser?: Date | string
    obras?: ObraUncheckedCreateNestedManyWithoutServidorInput
  }

  export type UserCreateOrConnectWithoutInteracoesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInteracoesInput, UserUncheckedCreateWithoutInteracoesInput>
  }

  export type ObraCreateWithoutInteracoesInput = {
    nome: string
    localizacao: string
    empresa: string
    cronogramaInicio: Date | string
    cronogramaFim: Date | string
    orcamento: number
    status: $Enums.StatusObra
    createdAt?: Date | string
    servidor: UserCreateNestedOneWithoutObrasInput
    etapas?: EtapaCreateNestedManyWithoutObraInput
    documentos?: DocumentoCreateNestedManyWithoutObraInput
  }

  export type ObraUncheckedCreateWithoutInteracoesInput = {
    id?: number
    nome: string
    localizacao: string
    empresa: string
    cronogramaInicio: Date | string
    cronogramaFim: Date | string
    orcamento: number
    status: $Enums.StatusObra
    servidorId: number
    createdAt?: Date | string
    etapas?: EtapaUncheckedCreateNestedManyWithoutObraInput
    documentos?: DocumentoUncheckedCreateNestedManyWithoutObraInput
  }

  export type ObraCreateOrConnectWithoutInteracoesInput = {
    where: ObraWhereUniqueInput
    create: XOR<ObraCreateWithoutInteracoesInput, ObraUncheckedCreateWithoutInteracoesInput>
  }

  export type UserUpsertWithoutInteracoesInput = {
    update: XOR<UserUpdateWithoutInteracoesInput, UserUncheckedUpdateWithoutInteracoesInput>
    create: XOR<UserCreateWithoutInteracoesInput, UserUncheckedCreateWithoutInteracoesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInteracoesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInteracoesInput, UserUncheckedUpdateWithoutInteracoesInput>
  }

  export type UserUpdateWithoutInteracoesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    criadoUser?: DateTimeFieldUpdateOperationsInput | Date | string
    obras?: ObraUpdateManyWithoutServidorNestedInput
  }

  export type UserUncheckedUpdateWithoutInteracoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    criadoUser?: DateTimeFieldUpdateOperationsInput | Date | string
    obras?: ObraUncheckedUpdateManyWithoutServidorNestedInput
  }

  export type ObraUpsertWithoutInteracoesInput = {
    update: XOR<ObraUpdateWithoutInteracoesInput, ObraUncheckedUpdateWithoutInteracoesInput>
    create: XOR<ObraCreateWithoutInteracoesInput, ObraUncheckedCreateWithoutInteracoesInput>
    where?: ObraWhereInput
  }

  export type ObraUpdateToOneWithWhereWithoutInteracoesInput = {
    where?: ObraWhereInput
    data: XOR<ObraUpdateWithoutInteracoesInput, ObraUncheckedUpdateWithoutInteracoesInput>
  }

  export type ObraUpdateWithoutInteracoesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    empresa?: StringFieldUpdateOperationsInput | string
    cronogramaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    cronogramaFim?: DateTimeFieldUpdateOperationsInput | Date | string
    orcamento?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusObraFieldUpdateOperationsInput | $Enums.StatusObra
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servidor?: UserUpdateOneRequiredWithoutObrasNestedInput
    etapas?: EtapaUpdateManyWithoutObraNestedInput
    documentos?: DocumentoUpdateManyWithoutObraNestedInput
  }

  export type ObraUncheckedUpdateWithoutInteracoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    empresa?: StringFieldUpdateOperationsInput | string
    cronogramaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    cronogramaFim?: DateTimeFieldUpdateOperationsInput | Date | string
    orcamento?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusObraFieldUpdateOperationsInput | $Enums.StatusObra
    servidorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    etapas?: EtapaUncheckedUpdateManyWithoutObraNestedInput
    documentos?: DocumentoUncheckedUpdateManyWithoutObraNestedInput
  }

  export type ObraCreateManyServidorInput = {
    id?: number
    nome: string
    localizacao: string
    empresa: string
    cronogramaInicio: Date | string
    cronogramaFim: Date | string
    orcamento: number
    status: $Enums.StatusObra
    createdAt?: Date | string
  }

  export type InteracaoCreateManyUsuarioInput = {
    id?: number
    tipo: $Enums.TipoInteracao
    mensagem: string
    obraId: number
    createdAt?: Date | string
  }

  export type ObraUpdateWithoutServidorInput = {
    nome?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    empresa?: StringFieldUpdateOperationsInput | string
    cronogramaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    cronogramaFim?: DateTimeFieldUpdateOperationsInput | Date | string
    orcamento?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusObraFieldUpdateOperationsInput | $Enums.StatusObra
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    etapas?: EtapaUpdateManyWithoutObraNestedInput
    documentos?: DocumentoUpdateManyWithoutObraNestedInput
    interacoes?: InteracaoUpdateManyWithoutObraNestedInput
  }

  export type ObraUncheckedUpdateWithoutServidorInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    empresa?: StringFieldUpdateOperationsInput | string
    cronogramaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    cronogramaFim?: DateTimeFieldUpdateOperationsInput | Date | string
    orcamento?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusObraFieldUpdateOperationsInput | $Enums.StatusObra
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    etapas?: EtapaUncheckedUpdateManyWithoutObraNestedInput
    documentos?: DocumentoUncheckedUpdateManyWithoutObraNestedInput
    interacoes?: InteracaoUncheckedUpdateManyWithoutObraNestedInput
  }

  export type ObraUncheckedUpdateManyWithoutServidorInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    empresa?: StringFieldUpdateOperationsInput | string
    cronogramaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    cronogramaFim?: DateTimeFieldUpdateOperationsInput | Date | string
    orcamento?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusObraFieldUpdateOperationsInput | $Enums.StatusObra
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InteracaoUpdateWithoutUsuarioInput = {
    tipo?: EnumTipoInteracaoFieldUpdateOperationsInput | $Enums.TipoInteracao
    mensagem?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    obra?: ObraUpdateOneRequiredWithoutInteracoesNestedInput
  }

  export type InteracaoUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: EnumTipoInteracaoFieldUpdateOperationsInput | $Enums.TipoInteracao
    mensagem?: StringFieldUpdateOperationsInput | string
    obraId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InteracaoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: EnumTipoInteracaoFieldUpdateOperationsInput | $Enums.TipoInteracao
    mensagem?: StringFieldUpdateOperationsInput | string
    obraId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EtapaCreateManyObraInput = {
    id?: number
    nome: string
    descricao: string
    dataInicio: Date | string
    dataFim: Date | string
    status: $Enums.StatusEtapa
  }

  export type DocumentoCreateManyObraInput = {
    id?: number
    titulo: string
    url: string
    tipo: string
  }

  export type InteracaoCreateManyObraInput = {
    id?: number
    tipo: $Enums.TipoInteracao
    mensagem: string
    usuarioId: number
    createdAt?: Date | string
  }

  export type EtapaUpdateWithoutObraInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusEtapaFieldUpdateOperationsInput | $Enums.StatusEtapa
  }

  export type EtapaUncheckedUpdateWithoutObraInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusEtapaFieldUpdateOperationsInput | $Enums.StatusEtapa
  }

  export type EtapaUncheckedUpdateManyWithoutObraInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusEtapaFieldUpdateOperationsInput | $Enums.StatusEtapa
  }

  export type DocumentoUpdateWithoutObraInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentoUncheckedUpdateWithoutObraInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentoUncheckedUpdateManyWithoutObraInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type InteracaoUpdateWithoutObraInput = {
    tipo?: EnumTipoInteracaoFieldUpdateOperationsInput | $Enums.TipoInteracao
    mensagem?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UserUpdateOneRequiredWithoutInteracoesNestedInput
  }

  export type InteracaoUncheckedUpdateWithoutObraInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: EnumTipoInteracaoFieldUpdateOperationsInput | $Enums.TipoInteracao
    mensagem?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InteracaoUncheckedUpdateManyWithoutObraInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: EnumTipoInteracaoFieldUpdateOperationsInput | $Enums.TipoInteracao
    mensagem?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}