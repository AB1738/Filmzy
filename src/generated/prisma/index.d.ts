
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
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model Reply
 * 
 */
export type Reply = $Result.DefaultSelection<Prisma.$ReplyPayload>
/**
 * Model Movie
 * 
 */
export type Movie = $Result.DefaultSelection<Prisma.$MoviePayload>
/**
 * Model LikedMovie
 * 
 */
export type LikedMovie = $Result.DefaultSelection<Prisma.$LikedMoviePayload>
/**
 * Model WatchList
 * 
 */
export type WatchList = $Result.DefaultSelection<Prisma.$WatchListPayload>

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
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reply`: Exposes CRUD operations for the **Reply** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Replies
    * const replies = await prisma.reply.findMany()
    * ```
    */
  get reply(): Prisma.ReplyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.movie`: Exposes CRUD operations for the **Movie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Movies
    * const movies = await prisma.movie.findMany()
    * ```
    */
  get movie(): Prisma.MovieDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.likedMovie`: Exposes CRUD operations for the **LikedMovie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LikedMovies
    * const likedMovies = await prisma.likedMovie.findMany()
    * ```
    */
  get likedMovie(): Prisma.LikedMovieDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.watchList`: Exposes CRUD operations for the **WatchList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WatchLists
    * const watchLists = await prisma.watchList.findMany()
    * ```
    */
  get watchList(): Prisma.WatchListDelegate<ExtArgs, ClientOptions>;
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
    Comment: 'Comment',
    Reply: 'Reply',
    Movie: 'Movie',
    LikedMovie: 'LikedMovie',
    WatchList: 'WatchList'
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
      modelProps: "user" | "comment" | "reply" | "movie" | "likedMovie" | "watchList"
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
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      Reply: {
        payload: Prisma.$ReplyPayload<ExtArgs>
        fields: Prisma.ReplyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReplyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReplyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplyPayload>
          }
          findFirst: {
            args: Prisma.ReplyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReplyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplyPayload>
          }
          findMany: {
            args: Prisma.ReplyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplyPayload>[]
          }
          create: {
            args: Prisma.ReplyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplyPayload>
          }
          createMany: {
            args: Prisma.ReplyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReplyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplyPayload>[]
          }
          delete: {
            args: Prisma.ReplyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplyPayload>
          }
          update: {
            args: Prisma.ReplyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplyPayload>
          }
          deleteMany: {
            args: Prisma.ReplyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReplyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReplyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplyPayload>[]
          }
          upsert: {
            args: Prisma.ReplyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplyPayload>
          }
          aggregate: {
            args: Prisma.ReplyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReply>
          }
          groupBy: {
            args: Prisma.ReplyGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReplyGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReplyCountArgs<ExtArgs>
            result: $Utils.Optional<ReplyCountAggregateOutputType> | number
          }
        }
      }
      Movie: {
        payload: Prisma.$MoviePayload<ExtArgs>
        fields: Prisma.MovieFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MovieFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MovieFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          findFirst: {
            args: Prisma.MovieFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MovieFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          findMany: {
            args: Prisma.MovieFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>[]
          }
          create: {
            args: Prisma.MovieCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          createMany: {
            args: Prisma.MovieCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MovieCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>[]
          }
          delete: {
            args: Prisma.MovieDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          update: {
            args: Prisma.MovieUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          deleteMany: {
            args: Prisma.MovieDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MovieUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MovieUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>[]
          }
          upsert: {
            args: Prisma.MovieUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          aggregate: {
            args: Prisma.MovieAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMovie>
          }
          groupBy: {
            args: Prisma.MovieGroupByArgs<ExtArgs>
            result: $Utils.Optional<MovieGroupByOutputType>[]
          }
          count: {
            args: Prisma.MovieCountArgs<ExtArgs>
            result: $Utils.Optional<MovieCountAggregateOutputType> | number
          }
        }
      }
      LikedMovie: {
        payload: Prisma.$LikedMoviePayload<ExtArgs>
        fields: Prisma.LikedMovieFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LikedMovieFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedMoviePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LikedMovieFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedMoviePayload>
          }
          findFirst: {
            args: Prisma.LikedMovieFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedMoviePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LikedMovieFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedMoviePayload>
          }
          findMany: {
            args: Prisma.LikedMovieFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedMoviePayload>[]
          }
          create: {
            args: Prisma.LikedMovieCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedMoviePayload>
          }
          createMany: {
            args: Prisma.LikedMovieCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LikedMovieCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedMoviePayload>[]
          }
          delete: {
            args: Prisma.LikedMovieDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedMoviePayload>
          }
          update: {
            args: Prisma.LikedMovieUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedMoviePayload>
          }
          deleteMany: {
            args: Prisma.LikedMovieDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LikedMovieUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LikedMovieUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedMoviePayload>[]
          }
          upsert: {
            args: Prisma.LikedMovieUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedMoviePayload>
          }
          aggregate: {
            args: Prisma.LikedMovieAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLikedMovie>
          }
          groupBy: {
            args: Prisma.LikedMovieGroupByArgs<ExtArgs>
            result: $Utils.Optional<LikedMovieGroupByOutputType>[]
          }
          count: {
            args: Prisma.LikedMovieCountArgs<ExtArgs>
            result: $Utils.Optional<LikedMovieCountAggregateOutputType> | number
          }
        }
      }
      WatchList: {
        payload: Prisma.$WatchListPayload<ExtArgs>
        fields: Prisma.WatchListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WatchListFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WatchListFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchListPayload>
          }
          findFirst: {
            args: Prisma.WatchListFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WatchListFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchListPayload>
          }
          findMany: {
            args: Prisma.WatchListFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchListPayload>[]
          }
          create: {
            args: Prisma.WatchListCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchListPayload>
          }
          createMany: {
            args: Prisma.WatchListCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WatchListCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchListPayload>[]
          }
          delete: {
            args: Prisma.WatchListDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchListPayload>
          }
          update: {
            args: Prisma.WatchListUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchListPayload>
          }
          deleteMany: {
            args: Prisma.WatchListDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WatchListUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WatchListUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchListPayload>[]
          }
          upsert: {
            args: Prisma.WatchListUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchListPayload>
          }
          aggregate: {
            args: Prisma.WatchListAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWatchList>
          }
          groupBy: {
            args: Prisma.WatchListGroupByArgs<ExtArgs>
            result: $Utils.Optional<WatchListGroupByOutputType>[]
          }
          count: {
            args: Prisma.WatchListCountArgs<ExtArgs>
            result: $Utils.Optional<WatchListCountAggregateOutputType> | number
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
    comment?: CommentOmit
    reply?: ReplyOmit
    movie?: MovieOmit
    likedMovie?: LikedMovieOmit
    watchList?: WatchListOmit
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
    comments: number
    likedMovies: number
    watchList: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | UserCountOutputTypeCountCommentsArgs
    likedMovies?: boolean | UserCountOutputTypeCountLikedMoviesArgs
    watchList?: boolean | UserCountOutputTypeCountWatchListArgs
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
  export type UserCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLikedMoviesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikedMovieWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWatchListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WatchListWhereInput
  }


  /**
   * Count Type CommentCountOutputType
   */

  export type CommentCountOutputType = {
    replies: number
  }

  export type CommentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    replies?: boolean | CommentCountOutputTypeCountRepliesArgs
  }

  // Custom InputTypes
  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentCountOutputType
     */
    select?: CommentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeCountRepliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReplyWhereInput
  }


  /**
   * Count Type MovieCountOutputType
   */

  export type MovieCountOutputType = {
    comments: number
    likes: number
    watchlists: number
  }

  export type MovieCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | MovieCountOutputTypeCountCommentsArgs
    likes?: boolean | MovieCountOutputTypeCountLikesArgs
    watchlists?: boolean | MovieCountOutputTypeCountWatchlistsArgs
  }

  // Custom InputTypes
  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieCountOutputType
     */
    select?: MovieCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikedMovieWhereInput
  }

  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeCountWatchlistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WatchListWhereInput
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
    userId: string | null
    firstName: string | null
    imageUrl: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    firstName: string | null
    imageUrl: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    userId: number
    firstName: number
    imageUrl: number
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
    userId?: true
    firstName?: true
    imageUrl?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    userId?: true
    firstName?: true
    imageUrl?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    userId?: true
    firstName?: true
    imageUrl?: true
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
    userId: string
    firstName: string
    imageUrl: string
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
    userId?: boolean
    firstName?: boolean
    imageUrl?: boolean
    comments?: boolean | User$commentsArgs<ExtArgs>
    likedMovies?: boolean | User$likedMoviesArgs<ExtArgs>
    watchList?: boolean | User$watchListArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    firstName?: boolean
    imageUrl?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    firstName?: boolean
    imageUrl?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    userId?: boolean
    firstName?: boolean
    imageUrl?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "firstName" | "imageUrl", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | User$commentsArgs<ExtArgs>
    likedMovies?: boolean | User$likedMoviesArgs<ExtArgs>
    watchList?: boolean | User$watchListArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      comments: Prisma.$CommentPayload<ExtArgs>[]
      likedMovies: Prisma.$LikedMoviePayload<ExtArgs>[]
      watchList: Prisma.$WatchListPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      firstName: string
      imageUrl: string
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
    comments<T extends User$commentsArgs<ExtArgs> = {}>(args?: Subset<T, User$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likedMovies<T extends User$likedMoviesArgs<ExtArgs> = {}>(args?: Subset<T, User$likedMoviesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikedMoviePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    watchList<T extends User$watchListArgs<ExtArgs> = {}>(args?: Subset<T, User$watchListArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly userId: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly imageUrl: FieldRef<"User", 'String'>
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
   * User.comments
   */
  export type User$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * User.likedMovies
   */
  export type User$likedMoviesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedMovie
     */
    select?: LikedMovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedMovie
     */
    omit?: LikedMovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedMovieInclude<ExtArgs> | null
    where?: LikedMovieWhereInput
    orderBy?: LikedMovieOrderByWithRelationInput | LikedMovieOrderByWithRelationInput[]
    cursor?: LikedMovieWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikedMovieScalarFieldEnum | LikedMovieScalarFieldEnum[]
  }

  /**
   * User.watchList
   */
  export type User$watchListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchList
     */
    select?: WatchListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchList
     */
    omit?: WatchListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchListInclude<ExtArgs> | null
    where?: WatchListWhereInput
    orderBy?: WatchListOrderByWithRelationInput | WatchListOrderByWithRelationInput[]
    cursor?: WatchListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WatchListScalarFieldEnum | WatchListScalarFieldEnum[]
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
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentAvgAggregateOutputType = {
    id: number | null
    movieId: number | null
  }

  export type CommentSumAggregateOutputType = {
    id: number | null
    movieId: number | null
  }

  export type CommentMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    text: string | null
    authorId: string | null
    movieId: number | null
  }

  export type CommentMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    text: string | null
    authorId: string | null
    movieId: number | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    text: number
    authorId: number
    movieId: number
    _all: number
  }


  export type CommentAvgAggregateInputType = {
    id?: true
    movieId?: true
  }

  export type CommentSumAggregateInputType = {
    id?: true
    movieId?: true
  }

  export type CommentMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    text?: true
    authorId?: true
    movieId?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    text?: true
    authorId?: true
    movieId?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    text?: true
    authorId?: true
    movieId?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _avg?: CommentAvgAggregateInputType
    _sum?: CommentSumAggregateInputType
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    text: string
    authorId: string
    movieId: number
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    text?: boolean
    authorId?: boolean
    movieId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    movie?: boolean | MovieDefaultArgs<ExtArgs>
    replies?: boolean | Comment$repliesArgs<ExtArgs>
    _count?: boolean | CommentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    text?: boolean
    authorId?: boolean
    movieId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    movie?: boolean | MovieDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    text?: boolean
    authorId?: boolean
    movieId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    movie?: boolean | MovieDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    text?: boolean
    authorId?: boolean
    movieId?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "text" | "authorId" | "movieId", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    movie?: boolean | MovieDefaultArgs<ExtArgs>
    replies?: boolean | Comment$repliesArgs<ExtArgs>
    _count?: boolean | CommentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    movie?: boolean | MovieDefaultArgs<ExtArgs>
  }
  export type CommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    movie?: boolean | MovieDefaultArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      movie: Prisma.$MoviePayload<ExtArgs>
      replies: Prisma.$ReplyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      text: string
      authorId: string
      movieId: number
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.updateManyAndReturn({
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
    updateManyAndReturn<T extends CommentUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
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
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    movie<T extends MovieDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MovieDefaultArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    replies<T extends Comment$repliesArgs<ExtArgs> = {}>(args?: Subset<T, Comment$repliesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'Int'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
    readonly updatedAt: FieldRef<"Comment", 'DateTime'>
    readonly text: FieldRef<"Comment", 'String'>
    readonly authorId: FieldRef<"Comment", 'String'>
    readonly movieId: FieldRef<"Comment", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment updateManyAndReturn
   */
  export type CommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment.replies
   */
  export type Comment$repliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reply
     */
    omit?: ReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplyInclude<ExtArgs> | null
    where?: ReplyWhereInput
    orderBy?: ReplyOrderByWithRelationInput | ReplyOrderByWithRelationInput[]
    cursor?: ReplyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReplyScalarFieldEnum | ReplyScalarFieldEnum[]
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model Reply
   */

  export type AggregateReply = {
    _count: ReplyCountAggregateOutputType | null
    _avg: ReplyAvgAggregateOutputType | null
    _sum: ReplySumAggregateOutputType | null
    _min: ReplyMinAggregateOutputType | null
    _max: ReplyMaxAggregateOutputType | null
  }

  export type ReplyAvgAggregateOutputType = {
    id: number | null
    commentId: number | null
  }

  export type ReplySumAggregateOutputType = {
    id: number | null
    commentId: number | null
  }

  export type ReplyMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    text: string | null
    commentId: number | null
  }

  export type ReplyMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    text: string | null
    commentId: number | null
  }

  export type ReplyCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    text: number
    commentId: number
    _all: number
  }


  export type ReplyAvgAggregateInputType = {
    id?: true
    commentId?: true
  }

  export type ReplySumAggregateInputType = {
    id?: true
    commentId?: true
  }

  export type ReplyMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    text?: true
    commentId?: true
  }

  export type ReplyMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    text?: true
    commentId?: true
  }

  export type ReplyCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    text?: true
    commentId?: true
    _all?: true
  }

  export type ReplyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reply to aggregate.
     */
    where?: ReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Replies to fetch.
     */
    orderBy?: ReplyOrderByWithRelationInput | ReplyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Replies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Replies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Replies
    **/
    _count?: true | ReplyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReplyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReplySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReplyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReplyMaxAggregateInputType
  }

  export type GetReplyAggregateType<T extends ReplyAggregateArgs> = {
        [P in keyof T & keyof AggregateReply]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReply[P]>
      : GetScalarType<T[P], AggregateReply[P]>
  }




  export type ReplyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReplyWhereInput
    orderBy?: ReplyOrderByWithAggregationInput | ReplyOrderByWithAggregationInput[]
    by: ReplyScalarFieldEnum[] | ReplyScalarFieldEnum
    having?: ReplyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReplyCountAggregateInputType | true
    _avg?: ReplyAvgAggregateInputType
    _sum?: ReplySumAggregateInputType
    _min?: ReplyMinAggregateInputType
    _max?: ReplyMaxAggregateInputType
  }

  export type ReplyGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    text: string
    commentId: number
    _count: ReplyCountAggregateOutputType | null
    _avg: ReplyAvgAggregateOutputType | null
    _sum: ReplySumAggregateOutputType | null
    _min: ReplyMinAggregateOutputType | null
    _max: ReplyMaxAggregateOutputType | null
  }

  type GetReplyGroupByPayload<T extends ReplyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReplyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReplyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReplyGroupByOutputType[P]>
            : GetScalarType<T[P], ReplyGroupByOutputType[P]>
        }
      >
    >


  export type ReplySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    text?: boolean
    commentId?: boolean
    replyTo?: boolean | CommentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reply"]>

  export type ReplySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    text?: boolean
    commentId?: boolean
    replyTo?: boolean | CommentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reply"]>

  export type ReplySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    text?: boolean
    commentId?: boolean
    replyTo?: boolean | CommentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reply"]>

  export type ReplySelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    text?: boolean
    commentId?: boolean
  }

  export type ReplyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "text" | "commentId", ExtArgs["result"]["reply"]>
  export type ReplyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    replyTo?: boolean | CommentDefaultArgs<ExtArgs>
  }
  export type ReplyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    replyTo?: boolean | CommentDefaultArgs<ExtArgs>
  }
  export type ReplyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    replyTo?: boolean | CommentDefaultArgs<ExtArgs>
  }

  export type $ReplyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reply"
    objects: {
      replyTo: Prisma.$CommentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      text: string
      commentId: number
    }, ExtArgs["result"]["reply"]>
    composites: {}
  }

  type ReplyGetPayload<S extends boolean | null | undefined | ReplyDefaultArgs> = $Result.GetResult<Prisma.$ReplyPayload, S>

  type ReplyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReplyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReplyCountAggregateInputType | true
    }

  export interface ReplyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reply'], meta: { name: 'Reply' } }
    /**
     * Find zero or one Reply that matches the filter.
     * @param {ReplyFindUniqueArgs} args - Arguments to find a Reply
     * @example
     * // Get one Reply
     * const reply = await prisma.reply.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReplyFindUniqueArgs>(args: SelectSubset<T, ReplyFindUniqueArgs<ExtArgs>>): Prisma__ReplyClient<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reply that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReplyFindUniqueOrThrowArgs} args - Arguments to find a Reply
     * @example
     * // Get one Reply
     * const reply = await prisma.reply.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReplyFindUniqueOrThrowArgs>(args: SelectSubset<T, ReplyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReplyClient<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reply that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReplyFindFirstArgs} args - Arguments to find a Reply
     * @example
     * // Get one Reply
     * const reply = await prisma.reply.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReplyFindFirstArgs>(args?: SelectSubset<T, ReplyFindFirstArgs<ExtArgs>>): Prisma__ReplyClient<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reply that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReplyFindFirstOrThrowArgs} args - Arguments to find a Reply
     * @example
     * // Get one Reply
     * const reply = await prisma.reply.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReplyFindFirstOrThrowArgs>(args?: SelectSubset<T, ReplyFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReplyClient<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Replies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReplyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Replies
     * const replies = await prisma.reply.findMany()
     * 
     * // Get first 10 Replies
     * const replies = await prisma.reply.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const replyWithIdOnly = await prisma.reply.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReplyFindManyArgs>(args?: SelectSubset<T, ReplyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reply.
     * @param {ReplyCreateArgs} args - Arguments to create a Reply.
     * @example
     * // Create one Reply
     * const Reply = await prisma.reply.create({
     *   data: {
     *     // ... data to create a Reply
     *   }
     * })
     * 
     */
    create<T extends ReplyCreateArgs>(args: SelectSubset<T, ReplyCreateArgs<ExtArgs>>): Prisma__ReplyClient<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Replies.
     * @param {ReplyCreateManyArgs} args - Arguments to create many Replies.
     * @example
     * // Create many Replies
     * const reply = await prisma.reply.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReplyCreateManyArgs>(args?: SelectSubset<T, ReplyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Replies and returns the data saved in the database.
     * @param {ReplyCreateManyAndReturnArgs} args - Arguments to create many Replies.
     * @example
     * // Create many Replies
     * const reply = await prisma.reply.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Replies and only return the `id`
     * const replyWithIdOnly = await prisma.reply.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReplyCreateManyAndReturnArgs>(args?: SelectSubset<T, ReplyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reply.
     * @param {ReplyDeleteArgs} args - Arguments to delete one Reply.
     * @example
     * // Delete one Reply
     * const Reply = await prisma.reply.delete({
     *   where: {
     *     // ... filter to delete one Reply
     *   }
     * })
     * 
     */
    delete<T extends ReplyDeleteArgs>(args: SelectSubset<T, ReplyDeleteArgs<ExtArgs>>): Prisma__ReplyClient<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reply.
     * @param {ReplyUpdateArgs} args - Arguments to update one Reply.
     * @example
     * // Update one Reply
     * const reply = await prisma.reply.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReplyUpdateArgs>(args: SelectSubset<T, ReplyUpdateArgs<ExtArgs>>): Prisma__ReplyClient<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Replies.
     * @param {ReplyDeleteManyArgs} args - Arguments to filter Replies to delete.
     * @example
     * // Delete a few Replies
     * const { count } = await prisma.reply.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReplyDeleteManyArgs>(args?: SelectSubset<T, ReplyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Replies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReplyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Replies
     * const reply = await prisma.reply.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReplyUpdateManyArgs>(args: SelectSubset<T, ReplyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Replies and returns the data updated in the database.
     * @param {ReplyUpdateManyAndReturnArgs} args - Arguments to update many Replies.
     * @example
     * // Update many Replies
     * const reply = await prisma.reply.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Replies and only return the `id`
     * const replyWithIdOnly = await prisma.reply.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReplyUpdateManyAndReturnArgs>(args: SelectSubset<T, ReplyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reply.
     * @param {ReplyUpsertArgs} args - Arguments to update or create a Reply.
     * @example
     * // Update or create a Reply
     * const reply = await prisma.reply.upsert({
     *   create: {
     *     // ... data to create a Reply
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reply we want to update
     *   }
     * })
     */
    upsert<T extends ReplyUpsertArgs>(args: SelectSubset<T, ReplyUpsertArgs<ExtArgs>>): Prisma__ReplyClient<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Replies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReplyCountArgs} args - Arguments to filter Replies to count.
     * @example
     * // Count the number of Replies
     * const count = await prisma.reply.count({
     *   where: {
     *     // ... the filter for the Replies we want to count
     *   }
     * })
    **/
    count<T extends ReplyCountArgs>(
      args?: Subset<T, ReplyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReplyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reply.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReplyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReplyAggregateArgs>(args: Subset<T, ReplyAggregateArgs>): Prisma.PrismaPromise<GetReplyAggregateType<T>>

    /**
     * Group by Reply.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReplyGroupByArgs} args - Group by arguments.
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
      T extends ReplyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReplyGroupByArgs['orderBy'] }
        : { orderBy?: ReplyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReplyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReplyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reply model
   */
  readonly fields: ReplyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reply.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReplyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    replyTo<T extends CommentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CommentDefaultArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Reply model
   */
  interface ReplyFieldRefs {
    readonly id: FieldRef<"Reply", 'Int'>
    readonly createdAt: FieldRef<"Reply", 'DateTime'>
    readonly updatedAt: FieldRef<"Reply", 'DateTime'>
    readonly text: FieldRef<"Reply", 'String'>
    readonly commentId: FieldRef<"Reply", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Reply findUnique
   */
  export type ReplyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reply
     */
    omit?: ReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplyInclude<ExtArgs> | null
    /**
     * Filter, which Reply to fetch.
     */
    where: ReplyWhereUniqueInput
  }

  /**
   * Reply findUniqueOrThrow
   */
  export type ReplyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reply
     */
    omit?: ReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplyInclude<ExtArgs> | null
    /**
     * Filter, which Reply to fetch.
     */
    where: ReplyWhereUniqueInput
  }

  /**
   * Reply findFirst
   */
  export type ReplyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reply
     */
    omit?: ReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplyInclude<ExtArgs> | null
    /**
     * Filter, which Reply to fetch.
     */
    where?: ReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Replies to fetch.
     */
    orderBy?: ReplyOrderByWithRelationInput | ReplyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Replies.
     */
    cursor?: ReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Replies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Replies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Replies.
     */
    distinct?: ReplyScalarFieldEnum | ReplyScalarFieldEnum[]
  }

  /**
   * Reply findFirstOrThrow
   */
  export type ReplyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reply
     */
    omit?: ReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplyInclude<ExtArgs> | null
    /**
     * Filter, which Reply to fetch.
     */
    where?: ReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Replies to fetch.
     */
    orderBy?: ReplyOrderByWithRelationInput | ReplyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Replies.
     */
    cursor?: ReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Replies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Replies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Replies.
     */
    distinct?: ReplyScalarFieldEnum | ReplyScalarFieldEnum[]
  }

  /**
   * Reply findMany
   */
  export type ReplyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reply
     */
    omit?: ReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplyInclude<ExtArgs> | null
    /**
     * Filter, which Replies to fetch.
     */
    where?: ReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Replies to fetch.
     */
    orderBy?: ReplyOrderByWithRelationInput | ReplyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Replies.
     */
    cursor?: ReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Replies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Replies.
     */
    skip?: number
    distinct?: ReplyScalarFieldEnum | ReplyScalarFieldEnum[]
  }

  /**
   * Reply create
   */
  export type ReplyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reply
     */
    omit?: ReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplyInclude<ExtArgs> | null
    /**
     * The data needed to create a Reply.
     */
    data: XOR<ReplyCreateInput, ReplyUncheckedCreateInput>
  }

  /**
   * Reply createMany
   */
  export type ReplyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Replies.
     */
    data: ReplyCreateManyInput | ReplyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reply createManyAndReturn
   */
  export type ReplyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reply
     */
    omit?: ReplyOmit<ExtArgs> | null
    /**
     * The data used to create many Replies.
     */
    data: ReplyCreateManyInput | ReplyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reply update
   */
  export type ReplyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reply
     */
    omit?: ReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplyInclude<ExtArgs> | null
    /**
     * The data needed to update a Reply.
     */
    data: XOR<ReplyUpdateInput, ReplyUncheckedUpdateInput>
    /**
     * Choose, which Reply to update.
     */
    where: ReplyWhereUniqueInput
  }

  /**
   * Reply updateMany
   */
  export type ReplyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Replies.
     */
    data: XOR<ReplyUpdateManyMutationInput, ReplyUncheckedUpdateManyInput>
    /**
     * Filter which Replies to update
     */
    where?: ReplyWhereInput
    /**
     * Limit how many Replies to update.
     */
    limit?: number
  }

  /**
   * Reply updateManyAndReturn
   */
  export type ReplyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reply
     */
    omit?: ReplyOmit<ExtArgs> | null
    /**
     * The data used to update Replies.
     */
    data: XOR<ReplyUpdateManyMutationInput, ReplyUncheckedUpdateManyInput>
    /**
     * Filter which Replies to update
     */
    where?: ReplyWhereInput
    /**
     * Limit how many Replies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reply upsert
   */
  export type ReplyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reply
     */
    omit?: ReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplyInclude<ExtArgs> | null
    /**
     * The filter to search for the Reply to update in case it exists.
     */
    where: ReplyWhereUniqueInput
    /**
     * In case the Reply found by the `where` argument doesn't exist, create a new Reply with this data.
     */
    create: XOR<ReplyCreateInput, ReplyUncheckedCreateInput>
    /**
     * In case the Reply was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReplyUpdateInput, ReplyUncheckedUpdateInput>
  }

  /**
   * Reply delete
   */
  export type ReplyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reply
     */
    omit?: ReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplyInclude<ExtArgs> | null
    /**
     * Filter which Reply to delete.
     */
    where: ReplyWhereUniqueInput
  }

  /**
   * Reply deleteMany
   */
  export type ReplyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Replies to delete
     */
    where?: ReplyWhereInput
    /**
     * Limit how many Replies to delete.
     */
    limit?: number
  }

  /**
   * Reply without action
   */
  export type ReplyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reply
     */
    omit?: ReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplyInclude<ExtArgs> | null
  }


  /**
   * Model Movie
   */

  export type AggregateMovie = {
    _count: MovieCountAggregateOutputType | null
    _avg: MovieAvgAggregateOutputType | null
    _sum: MovieSumAggregateOutputType | null
    _min: MovieMinAggregateOutputType | null
    _max: MovieMaxAggregateOutputType | null
  }

  export type MovieAvgAggregateOutputType = {
    id: number | null
    movieId: number | null
  }

  export type MovieSumAggregateOutputType = {
    id: number | null
    movieId: number | null
  }

  export type MovieMinAggregateOutputType = {
    id: number | null
    movieId: number | null
    title: string | null
    backdrop_path: string | null
    overview: string | null
    release_date: string | null
  }

  export type MovieMaxAggregateOutputType = {
    id: number | null
    movieId: number | null
    title: string | null
    backdrop_path: string | null
    overview: string | null
    release_date: string | null
  }

  export type MovieCountAggregateOutputType = {
    id: number
    movieId: number
    title: number
    backdrop_path: number
    overview: number
    release_date: number
    genres: number
    _all: number
  }


  export type MovieAvgAggregateInputType = {
    id?: true
    movieId?: true
  }

  export type MovieSumAggregateInputType = {
    id?: true
    movieId?: true
  }

  export type MovieMinAggregateInputType = {
    id?: true
    movieId?: true
    title?: true
    backdrop_path?: true
    overview?: true
    release_date?: true
  }

  export type MovieMaxAggregateInputType = {
    id?: true
    movieId?: true
    title?: true
    backdrop_path?: true
    overview?: true
    release_date?: true
  }

  export type MovieCountAggregateInputType = {
    id?: true
    movieId?: true
    title?: true
    backdrop_path?: true
    overview?: true
    release_date?: true
    genres?: true
    _all?: true
  }

  export type MovieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movie to aggregate.
     */
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Movies
    **/
    _count?: true | MovieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MovieAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MovieSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovieMaxAggregateInputType
  }

  export type GetMovieAggregateType<T extends MovieAggregateArgs> = {
        [P in keyof T & keyof AggregateMovie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovie[P]>
      : GetScalarType<T[P], AggregateMovie[P]>
  }




  export type MovieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovieWhereInput
    orderBy?: MovieOrderByWithAggregationInput | MovieOrderByWithAggregationInput[]
    by: MovieScalarFieldEnum[] | MovieScalarFieldEnum
    having?: MovieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovieCountAggregateInputType | true
    _avg?: MovieAvgAggregateInputType
    _sum?: MovieSumAggregateInputType
    _min?: MovieMinAggregateInputType
    _max?: MovieMaxAggregateInputType
  }

  export type MovieGroupByOutputType = {
    id: number
    movieId: number
    title: string
    backdrop_path: string
    overview: string
    release_date: string
    genres: string[]
    _count: MovieCountAggregateOutputType | null
    _avg: MovieAvgAggregateOutputType | null
    _sum: MovieSumAggregateOutputType | null
    _min: MovieMinAggregateOutputType | null
    _max: MovieMaxAggregateOutputType | null
  }

  type GetMovieGroupByPayload<T extends MovieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MovieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovieGroupByOutputType[P]>
            : GetScalarType<T[P], MovieGroupByOutputType[P]>
        }
      >
    >


  export type MovieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    movieId?: boolean
    title?: boolean
    backdrop_path?: boolean
    overview?: boolean
    release_date?: boolean
    genres?: boolean
    comments?: boolean | Movie$commentsArgs<ExtArgs>
    likes?: boolean | Movie$likesArgs<ExtArgs>
    watchlists?: boolean | Movie$watchlistsArgs<ExtArgs>
    _count?: boolean | MovieCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movie"]>

  export type MovieSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    movieId?: boolean
    title?: boolean
    backdrop_path?: boolean
    overview?: boolean
    release_date?: boolean
    genres?: boolean
  }, ExtArgs["result"]["movie"]>

  export type MovieSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    movieId?: boolean
    title?: boolean
    backdrop_path?: boolean
    overview?: boolean
    release_date?: boolean
    genres?: boolean
  }, ExtArgs["result"]["movie"]>

  export type MovieSelectScalar = {
    id?: boolean
    movieId?: boolean
    title?: boolean
    backdrop_path?: boolean
    overview?: boolean
    release_date?: boolean
    genres?: boolean
  }

  export type MovieOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "movieId" | "title" | "backdrop_path" | "overview" | "release_date" | "genres", ExtArgs["result"]["movie"]>
  export type MovieInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | Movie$commentsArgs<ExtArgs>
    likes?: boolean | Movie$likesArgs<ExtArgs>
    watchlists?: boolean | Movie$watchlistsArgs<ExtArgs>
    _count?: boolean | MovieCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MovieIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MovieIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MoviePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Movie"
    objects: {
      comments: Prisma.$CommentPayload<ExtArgs>[]
      likes: Prisma.$LikedMoviePayload<ExtArgs>[]
      watchlists: Prisma.$WatchListPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      movieId: number
      title: string
      backdrop_path: string
      overview: string
      release_date: string
      genres: string[]
    }, ExtArgs["result"]["movie"]>
    composites: {}
  }

  type MovieGetPayload<S extends boolean | null | undefined | MovieDefaultArgs> = $Result.GetResult<Prisma.$MoviePayload, S>

  type MovieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MovieFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MovieCountAggregateInputType | true
    }

  export interface MovieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Movie'], meta: { name: 'Movie' } }
    /**
     * Find zero or one Movie that matches the filter.
     * @param {MovieFindUniqueArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MovieFindUniqueArgs>(args: SelectSubset<T, MovieFindUniqueArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Movie that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MovieFindUniqueOrThrowArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MovieFindUniqueOrThrowArgs>(args: SelectSubset<T, MovieFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Movie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFindFirstArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MovieFindFirstArgs>(args?: SelectSubset<T, MovieFindFirstArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Movie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFindFirstOrThrowArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MovieFindFirstOrThrowArgs>(args?: SelectSubset<T, MovieFindFirstOrThrowArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Movies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Movies
     * const movies = await prisma.movie.findMany()
     * 
     * // Get first 10 Movies
     * const movies = await prisma.movie.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const movieWithIdOnly = await prisma.movie.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MovieFindManyArgs>(args?: SelectSubset<T, MovieFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Movie.
     * @param {MovieCreateArgs} args - Arguments to create a Movie.
     * @example
     * // Create one Movie
     * const Movie = await prisma.movie.create({
     *   data: {
     *     // ... data to create a Movie
     *   }
     * })
     * 
     */
    create<T extends MovieCreateArgs>(args: SelectSubset<T, MovieCreateArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Movies.
     * @param {MovieCreateManyArgs} args - Arguments to create many Movies.
     * @example
     * // Create many Movies
     * const movie = await prisma.movie.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MovieCreateManyArgs>(args?: SelectSubset<T, MovieCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Movies and returns the data saved in the database.
     * @param {MovieCreateManyAndReturnArgs} args - Arguments to create many Movies.
     * @example
     * // Create many Movies
     * const movie = await prisma.movie.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Movies and only return the `id`
     * const movieWithIdOnly = await prisma.movie.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MovieCreateManyAndReturnArgs>(args?: SelectSubset<T, MovieCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Movie.
     * @param {MovieDeleteArgs} args - Arguments to delete one Movie.
     * @example
     * // Delete one Movie
     * const Movie = await prisma.movie.delete({
     *   where: {
     *     // ... filter to delete one Movie
     *   }
     * })
     * 
     */
    delete<T extends MovieDeleteArgs>(args: SelectSubset<T, MovieDeleteArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Movie.
     * @param {MovieUpdateArgs} args - Arguments to update one Movie.
     * @example
     * // Update one Movie
     * const movie = await prisma.movie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MovieUpdateArgs>(args: SelectSubset<T, MovieUpdateArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Movies.
     * @param {MovieDeleteManyArgs} args - Arguments to filter Movies to delete.
     * @example
     * // Delete a few Movies
     * const { count } = await prisma.movie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MovieDeleteManyArgs>(args?: SelectSubset<T, MovieDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Movies
     * const movie = await prisma.movie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MovieUpdateManyArgs>(args: SelectSubset<T, MovieUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movies and returns the data updated in the database.
     * @param {MovieUpdateManyAndReturnArgs} args - Arguments to update many Movies.
     * @example
     * // Update many Movies
     * const movie = await prisma.movie.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Movies and only return the `id`
     * const movieWithIdOnly = await prisma.movie.updateManyAndReturn({
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
    updateManyAndReturn<T extends MovieUpdateManyAndReturnArgs>(args: SelectSubset<T, MovieUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Movie.
     * @param {MovieUpsertArgs} args - Arguments to update or create a Movie.
     * @example
     * // Update or create a Movie
     * const movie = await prisma.movie.upsert({
     *   create: {
     *     // ... data to create a Movie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Movie we want to update
     *   }
     * })
     */
    upsert<T extends MovieUpsertArgs>(args: SelectSubset<T, MovieUpsertArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieCountArgs} args - Arguments to filter Movies to count.
     * @example
     * // Count the number of Movies
     * const count = await prisma.movie.count({
     *   where: {
     *     // ... the filter for the Movies we want to count
     *   }
     * })
    **/
    count<T extends MovieCountArgs>(
      args?: Subset<T, MovieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Movie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MovieAggregateArgs>(args: Subset<T, MovieAggregateArgs>): Prisma.PrismaPromise<GetMovieAggregateType<T>>

    /**
     * Group by Movie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieGroupByArgs} args - Group by arguments.
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
      T extends MovieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MovieGroupByArgs['orderBy'] }
        : { orderBy?: MovieGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MovieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Movie model
   */
  readonly fields: MovieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Movie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MovieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    comments<T extends Movie$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Movie$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likes<T extends Movie$likesArgs<ExtArgs> = {}>(args?: Subset<T, Movie$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikedMoviePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    watchlists<T extends Movie$watchlistsArgs<ExtArgs> = {}>(args?: Subset<T, Movie$watchlistsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Movie model
   */
  interface MovieFieldRefs {
    readonly id: FieldRef<"Movie", 'Int'>
    readonly movieId: FieldRef<"Movie", 'Int'>
    readonly title: FieldRef<"Movie", 'String'>
    readonly backdrop_path: FieldRef<"Movie", 'String'>
    readonly overview: FieldRef<"Movie", 'String'>
    readonly release_date: FieldRef<"Movie", 'String'>
    readonly genres: FieldRef<"Movie", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * Movie findUnique
   */
  export type MovieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     */
    where: MovieWhereUniqueInput
  }

  /**
   * Movie findUniqueOrThrow
   */
  export type MovieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     */
    where: MovieWhereUniqueInput
  }

  /**
   * Movie findFirst
   */
  export type MovieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     */
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movies.
     */
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movies.
     */
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }

  /**
   * Movie findFirstOrThrow
   */
  export type MovieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     */
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movies.
     */
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movies.
     */
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }

  /**
   * Movie findMany
   */
  export type MovieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movies to fetch.
     */
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Movies.
     */
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }

  /**
   * Movie create
   */
  export type MovieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * The data needed to create a Movie.
     */
    data: XOR<MovieCreateInput, MovieUncheckedCreateInput>
  }

  /**
   * Movie createMany
   */
  export type MovieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Movies.
     */
    data: MovieCreateManyInput | MovieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Movie createManyAndReturn
   */
  export type MovieCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * The data used to create many Movies.
     */
    data: MovieCreateManyInput | MovieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Movie update
   */
  export type MovieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * The data needed to update a Movie.
     */
    data: XOR<MovieUpdateInput, MovieUncheckedUpdateInput>
    /**
     * Choose, which Movie to update.
     */
    where: MovieWhereUniqueInput
  }

  /**
   * Movie updateMany
   */
  export type MovieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Movies.
     */
    data: XOR<MovieUpdateManyMutationInput, MovieUncheckedUpdateManyInput>
    /**
     * Filter which Movies to update
     */
    where?: MovieWhereInput
    /**
     * Limit how many Movies to update.
     */
    limit?: number
  }

  /**
   * Movie updateManyAndReturn
   */
  export type MovieUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * The data used to update Movies.
     */
    data: XOR<MovieUpdateManyMutationInput, MovieUncheckedUpdateManyInput>
    /**
     * Filter which Movies to update
     */
    where?: MovieWhereInput
    /**
     * Limit how many Movies to update.
     */
    limit?: number
  }

  /**
   * Movie upsert
   */
  export type MovieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * The filter to search for the Movie to update in case it exists.
     */
    where: MovieWhereUniqueInput
    /**
     * In case the Movie found by the `where` argument doesn't exist, create a new Movie with this data.
     */
    create: XOR<MovieCreateInput, MovieUncheckedCreateInput>
    /**
     * In case the Movie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MovieUpdateInput, MovieUncheckedUpdateInput>
  }

  /**
   * Movie delete
   */
  export type MovieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter which Movie to delete.
     */
    where: MovieWhereUniqueInput
  }

  /**
   * Movie deleteMany
   */
  export type MovieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movies to delete
     */
    where?: MovieWhereInput
    /**
     * Limit how many Movies to delete.
     */
    limit?: number
  }

  /**
   * Movie.comments
   */
  export type Movie$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Movie.likes
   */
  export type Movie$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedMovie
     */
    select?: LikedMovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedMovie
     */
    omit?: LikedMovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedMovieInclude<ExtArgs> | null
    where?: LikedMovieWhereInput
    orderBy?: LikedMovieOrderByWithRelationInput | LikedMovieOrderByWithRelationInput[]
    cursor?: LikedMovieWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikedMovieScalarFieldEnum | LikedMovieScalarFieldEnum[]
  }

  /**
   * Movie.watchlists
   */
  export type Movie$watchlistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchList
     */
    select?: WatchListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchList
     */
    omit?: WatchListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchListInclude<ExtArgs> | null
    where?: WatchListWhereInput
    orderBy?: WatchListOrderByWithRelationInput | WatchListOrderByWithRelationInput[]
    cursor?: WatchListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WatchListScalarFieldEnum | WatchListScalarFieldEnum[]
  }

  /**
   * Movie without action
   */
  export type MovieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
  }


  /**
   * Model LikedMovie
   */

  export type AggregateLikedMovie = {
    _count: LikedMovieCountAggregateOutputType | null
    _avg: LikedMovieAvgAggregateOutputType | null
    _sum: LikedMovieSumAggregateOutputType | null
    _min: LikedMovieMinAggregateOutputType | null
    _max: LikedMovieMaxAggregateOutputType | null
  }

  export type LikedMovieAvgAggregateOutputType = {
    id: number | null
    movieId: number | null
  }

  export type LikedMovieSumAggregateOutputType = {
    id: number | null
    movieId: number | null
  }

  export type LikedMovieMinAggregateOutputType = {
    id: number | null
    userId: string | null
    movieId: number | null
    createdAt: Date | null
  }

  export type LikedMovieMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    movieId: number | null
    createdAt: Date | null
  }

  export type LikedMovieCountAggregateOutputType = {
    id: number
    userId: number
    movieId: number
    createdAt: number
    _all: number
  }


  export type LikedMovieAvgAggregateInputType = {
    id?: true
    movieId?: true
  }

  export type LikedMovieSumAggregateInputType = {
    id?: true
    movieId?: true
  }

  export type LikedMovieMinAggregateInputType = {
    id?: true
    userId?: true
    movieId?: true
    createdAt?: true
  }

  export type LikedMovieMaxAggregateInputType = {
    id?: true
    userId?: true
    movieId?: true
    createdAt?: true
  }

  export type LikedMovieCountAggregateInputType = {
    id?: true
    userId?: true
    movieId?: true
    createdAt?: true
    _all?: true
  }

  export type LikedMovieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LikedMovie to aggregate.
     */
    where?: LikedMovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikedMovies to fetch.
     */
    orderBy?: LikedMovieOrderByWithRelationInput | LikedMovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LikedMovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikedMovies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikedMovies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LikedMovies
    **/
    _count?: true | LikedMovieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LikedMovieAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LikedMovieSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LikedMovieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LikedMovieMaxAggregateInputType
  }

  export type GetLikedMovieAggregateType<T extends LikedMovieAggregateArgs> = {
        [P in keyof T & keyof AggregateLikedMovie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLikedMovie[P]>
      : GetScalarType<T[P], AggregateLikedMovie[P]>
  }




  export type LikedMovieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikedMovieWhereInput
    orderBy?: LikedMovieOrderByWithAggregationInput | LikedMovieOrderByWithAggregationInput[]
    by: LikedMovieScalarFieldEnum[] | LikedMovieScalarFieldEnum
    having?: LikedMovieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LikedMovieCountAggregateInputType | true
    _avg?: LikedMovieAvgAggregateInputType
    _sum?: LikedMovieSumAggregateInputType
    _min?: LikedMovieMinAggregateInputType
    _max?: LikedMovieMaxAggregateInputType
  }

  export type LikedMovieGroupByOutputType = {
    id: number
    userId: string
    movieId: number
    createdAt: Date
    _count: LikedMovieCountAggregateOutputType | null
    _avg: LikedMovieAvgAggregateOutputType | null
    _sum: LikedMovieSumAggregateOutputType | null
    _min: LikedMovieMinAggregateOutputType | null
    _max: LikedMovieMaxAggregateOutputType | null
  }

  type GetLikedMovieGroupByPayload<T extends LikedMovieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LikedMovieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LikedMovieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LikedMovieGroupByOutputType[P]>
            : GetScalarType<T[P], LikedMovieGroupByOutputType[P]>
        }
      >
    >


  export type LikedMovieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    movieId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    movie?: boolean | MovieDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["likedMovie"]>

  export type LikedMovieSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    movieId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    movie?: boolean | MovieDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["likedMovie"]>

  export type LikedMovieSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    movieId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    movie?: boolean | MovieDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["likedMovie"]>

  export type LikedMovieSelectScalar = {
    id?: boolean
    userId?: boolean
    movieId?: boolean
    createdAt?: boolean
  }

  export type LikedMovieOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "movieId" | "createdAt", ExtArgs["result"]["likedMovie"]>
  export type LikedMovieInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    movie?: boolean | MovieDefaultArgs<ExtArgs>
  }
  export type LikedMovieIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    movie?: boolean | MovieDefaultArgs<ExtArgs>
  }
  export type LikedMovieIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    movie?: boolean | MovieDefaultArgs<ExtArgs>
  }

  export type $LikedMoviePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LikedMovie"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      movie: Prisma.$MoviePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      movieId: number
      createdAt: Date
    }, ExtArgs["result"]["likedMovie"]>
    composites: {}
  }

  type LikedMovieGetPayload<S extends boolean | null | undefined | LikedMovieDefaultArgs> = $Result.GetResult<Prisma.$LikedMoviePayload, S>

  type LikedMovieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LikedMovieFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LikedMovieCountAggregateInputType | true
    }

  export interface LikedMovieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LikedMovie'], meta: { name: 'LikedMovie' } }
    /**
     * Find zero or one LikedMovie that matches the filter.
     * @param {LikedMovieFindUniqueArgs} args - Arguments to find a LikedMovie
     * @example
     * // Get one LikedMovie
     * const likedMovie = await prisma.likedMovie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LikedMovieFindUniqueArgs>(args: SelectSubset<T, LikedMovieFindUniqueArgs<ExtArgs>>): Prisma__LikedMovieClient<$Result.GetResult<Prisma.$LikedMoviePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LikedMovie that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LikedMovieFindUniqueOrThrowArgs} args - Arguments to find a LikedMovie
     * @example
     * // Get one LikedMovie
     * const likedMovie = await prisma.likedMovie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LikedMovieFindUniqueOrThrowArgs>(args: SelectSubset<T, LikedMovieFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LikedMovieClient<$Result.GetResult<Prisma.$LikedMoviePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LikedMovie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedMovieFindFirstArgs} args - Arguments to find a LikedMovie
     * @example
     * // Get one LikedMovie
     * const likedMovie = await prisma.likedMovie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LikedMovieFindFirstArgs>(args?: SelectSubset<T, LikedMovieFindFirstArgs<ExtArgs>>): Prisma__LikedMovieClient<$Result.GetResult<Prisma.$LikedMoviePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LikedMovie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedMovieFindFirstOrThrowArgs} args - Arguments to find a LikedMovie
     * @example
     * // Get one LikedMovie
     * const likedMovie = await prisma.likedMovie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LikedMovieFindFirstOrThrowArgs>(args?: SelectSubset<T, LikedMovieFindFirstOrThrowArgs<ExtArgs>>): Prisma__LikedMovieClient<$Result.GetResult<Prisma.$LikedMoviePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LikedMovies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedMovieFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LikedMovies
     * const likedMovies = await prisma.likedMovie.findMany()
     * 
     * // Get first 10 LikedMovies
     * const likedMovies = await prisma.likedMovie.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const likedMovieWithIdOnly = await prisma.likedMovie.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LikedMovieFindManyArgs>(args?: SelectSubset<T, LikedMovieFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikedMoviePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LikedMovie.
     * @param {LikedMovieCreateArgs} args - Arguments to create a LikedMovie.
     * @example
     * // Create one LikedMovie
     * const LikedMovie = await prisma.likedMovie.create({
     *   data: {
     *     // ... data to create a LikedMovie
     *   }
     * })
     * 
     */
    create<T extends LikedMovieCreateArgs>(args: SelectSubset<T, LikedMovieCreateArgs<ExtArgs>>): Prisma__LikedMovieClient<$Result.GetResult<Prisma.$LikedMoviePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LikedMovies.
     * @param {LikedMovieCreateManyArgs} args - Arguments to create many LikedMovies.
     * @example
     * // Create many LikedMovies
     * const likedMovie = await prisma.likedMovie.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LikedMovieCreateManyArgs>(args?: SelectSubset<T, LikedMovieCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LikedMovies and returns the data saved in the database.
     * @param {LikedMovieCreateManyAndReturnArgs} args - Arguments to create many LikedMovies.
     * @example
     * // Create many LikedMovies
     * const likedMovie = await prisma.likedMovie.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LikedMovies and only return the `id`
     * const likedMovieWithIdOnly = await prisma.likedMovie.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LikedMovieCreateManyAndReturnArgs>(args?: SelectSubset<T, LikedMovieCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikedMoviePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LikedMovie.
     * @param {LikedMovieDeleteArgs} args - Arguments to delete one LikedMovie.
     * @example
     * // Delete one LikedMovie
     * const LikedMovie = await prisma.likedMovie.delete({
     *   where: {
     *     // ... filter to delete one LikedMovie
     *   }
     * })
     * 
     */
    delete<T extends LikedMovieDeleteArgs>(args: SelectSubset<T, LikedMovieDeleteArgs<ExtArgs>>): Prisma__LikedMovieClient<$Result.GetResult<Prisma.$LikedMoviePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LikedMovie.
     * @param {LikedMovieUpdateArgs} args - Arguments to update one LikedMovie.
     * @example
     * // Update one LikedMovie
     * const likedMovie = await prisma.likedMovie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LikedMovieUpdateArgs>(args: SelectSubset<T, LikedMovieUpdateArgs<ExtArgs>>): Prisma__LikedMovieClient<$Result.GetResult<Prisma.$LikedMoviePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LikedMovies.
     * @param {LikedMovieDeleteManyArgs} args - Arguments to filter LikedMovies to delete.
     * @example
     * // Delete a few LikedMovies
     * const { count } = await prisma.likedMovie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LikedMovieDeleteManyArgs>(args?: SelectSubset<T, LikedMovieDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LikedMovies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedMovieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LikedMovies
     * const likedMovie = await prisma.likedMovie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LikedMovieUpdateManyArgs>(args: SelectSubset<T, LikedMovieUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LikedMovies and returns the data updated in the database.
     * @param {LikedMovieUpdateManyAndReturnArgs} args - Arguments to update many LikedMovies.
     * @example
     * // Update many LikedMovies
     * const likedMovie = await prisma.likedMovie.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LikedMovies and only return the `id`
     * const likedMovieWithIdOnly = await prisma.likedMovie.updateManyAndReturn({
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
    updateManyAndReturn<T extends LikedMovieUpdateManyAndReturnArgs>(args: SelectSubset<T, LikedMovieUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikedMoviePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LikedMovie.
     * @param {LikedMovieUpsertArgs} args - Arguments to update or create a LikedMovie.
     * @example
     * // Update or create a LikedMovie
     * const likedMovie = await prisma.likedMovie.upsert({
     *   create: {
     *     // ... data to create a LikedMovie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LikedMovie we want to update
     *   }
     * })
     */
    upsert<T extends LikedMovieUpsertArgs>(args: SelectSubset<T, LikedMovieUpsertArgs<ExtArgs>>): Prisma__LikedMovieClient<$Result.GetResult<Prisma.$LikedMoviePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LikedMovies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedMovieCountArgs} args - Arguments to filter LikedMovies to count.
     * @example
     * // Count the number of LikedMovies
     * const count = await prisma.likedMovie.count({
     *   where: {
     *     // ... the filter for the LikedMovies we want to count
     *   }
     * })
    **/
    count<T extends LikedMovieCountArgs>(
      args?: Subset<T, LikedMovieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LikedMovieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LikedMovie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedMovieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LikedMovieAggregateArgs>(args: Subset<T, LikedMovieAggregateArgs>): Prisma.PrismaPromise<GetLikedMovieAggregateType<T>>

    /**
     * Group by LikedMovie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedMovieGroupByArgs} args - Group by arguments.
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
      T extends LikedMovieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LikedMovieGroupByArgs['orderBy'] }
        : { orderBy?: LikedMovieGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LikedMovieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLikedMovieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LikedMovie model
   */
  readonly fields: LikedMovieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LikedMovie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LikedMovieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    movie<T extends MovieDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MovieDefaultArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LikedMovie model
   */
  interface LikedMovieFieldRefs {
    readonly id: FieldRef<"LikedMovie", 'Int'>
    readonly userId: FieldRef<"LikedMovie", 'String'>
    readonly movieId: FieldRef<"LikedMovie", 'Int'>
    readonly createdAt: FieldRef<"LikedMovie", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LikedMovie findUnique
   */
  export type LikedMovieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedMovie
     */
    select?: LikedMovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedMovie
     */
    omit?: LikedMovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedMovieInclude<ExtArgs> | null
    /**
     * Filter, which LikedMovie to fetch.
     */
    where: LikedMovieWhereUniqueInput
  }

  /**
   * LikedMovie findUniqueOrThrow
   */
  export type LikedMovieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedMovie
     */
    select?: LikedMovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedMovie
     */
    omit?: LikedMovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedMovieInclude<ExtArgs> | null
    /**
     * Filter, which LikedMovie to fetch.
     */
    where: LikedMovieWhereUniqueInput
  }

  /**
   * LikedMovie findFirst
   */
  export type LikedMovieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedMovie
     */
    select?: LikedMovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedMovie
     */
    omit?: LikedMovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedMovieInclude<ExtArgs> | null
    /**
     * Filter, which LikedMovie to fetch.
     */
    where?: LikedMovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikedMovies to fetch.
     */
    orderBy?: LikedMovieOrderByWithRelationInput | LikedMovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LikedMovies.
     */
    cursor?: LikedMovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikedMovies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikedMovies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LikedMovies.
     */
    distinct?: LikedMovieScalarFieldEnum | LikedMovieScalarFieldEnum[]
  }

  /**
   * LikedMovie findFirstOrThrow
   */
  export type LikedMovieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedMovie
     */
    select?: LikedMovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedMovie
     */
    omit?: LikedMovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedMovieInclude<ExtArgs> | null
    /**
     * Filter, which LikedMovie to fetch.
     */
    where?: LikedMovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikedMovies to fetch.
     */
    orderBy?: LikedMovieOrderByWithRelationInput | LikedMovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LikedMovies.
     */
    cursor?: LikedMovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikedMovies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikedMovies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LikedMovies.
     */
    distinct?: LikedMovieScalarFieldEnum | LikedMovieScalarFieldEnum[]
  }

  /**
   * LikedMovie findMany
   */
  export type LikedMovieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedMovie
     */
    select?: LikedMovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedMovie
     */
    omit?: LikedMovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedMovieInclude<ExtArgs> | null
    /**
     * Filter, which LikedMovies to fetch.
     */
    where?: LikedMovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikedMovies to fetch.
     */
    orderBy?: LikedMovieOrderByWithRelationInput | LikedMovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LikedMovies.
     */
    cursor?: LikedMovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikedMovies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikedMovies.
     */
    skip?: number
    distinct?: LikedMovieScalarFieldEnum | LikedMovieScalarFieldEnum[]
  }

  /**
   * LikedMovie create
   */
  export type LikedMovieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedMovie
     */
    select?: LikedMovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedMovie
     */
    omit?: LikedMovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedMovieInclude<ExtArgs> | null
    /**
     * The data needed to create a LikedMovie.
     */
    data: XOR<LikedMovieCreateInput, LikedMovieUncheckedCreateInput>
  }

  /**
   * LikedMovie createMany
   */
  export type LikedMovieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LikedMovies.
     */
    data: LikedMovieCreateManyInput | LikedMovieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LikedMovie createManyAndReturn
   */
  export type LikedMovieCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedMovie
     */
    select?: LikedMovieSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LikedMovie
     */
    omit?: LikedMovieOmit<ExtArgs> | null
    /**
     * The data used to create many LikedMovies.
     */
    data: LikedMovieCreateManyInput | LikedMovieCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedMovieIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LikedMovie update
   */
  export type LikedMovieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedMovie
     */
    select?: LikedMovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedMovie
     */
    omit?: LikedMovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedMovieInclude<ExtArgs> | null
    /**
     * The data needed to update a LikedMovie.
     */
    data: XOR<LikedMovieUpdateInput, LikedMovieUncheckedUpdateInput>
    /**
     * Choose, which LikedMovie to update.
     */
    where: LikedMovieWhereUniqueInput
  }

  /**
   * LikedMovie updateMany
   */
  export type LikedMovieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LikedMovies.
     */
    data: XOR<LikedMovieUpdateManyMutationInput, LikedMovieUncheckedUpdateManyInput>
    /**
     * Filter which LikedMovies to update
     */
    where?: LikedMovieWhereInput
    /**
     * Limit how many LikedMovies to update.
     */
    limit?: number
  }

  /**
   * LikedMovie updateManyAndReturn
   */
  export type LikedMovieUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedMovie
     */
    select?: LikedMovieSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LikedMovie
     */
    omit?: LikedMovieOmit<ExtArgs> | null
    /**
     * The data used to update LikedMovies.
     */
    data: XOR<LikedMovieUpdateManyMutationInput, LikedMovieUncheckedUpdateManyInput>
    /**
     * Filter which LikedMovies to update
     */
    where?: LikedMovieWhereInput
    /**
     * Limit how many LikedMovies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedMovieIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LikedMovie upsert
   */
  export type LikedMovieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedMovie
     */
    select?: LikedMovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedMovie
     */
    omit?: LikedMovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedMovieInclude<ExtArgs> | null
    /**
     * The filter to search for the LikedMovie to update in case it exists.
     */
    where: LikedMovieWhereUniqueInput
    /**
     * In case the LikedMovie found by the `where` argument doesn't exist, create a new LikedMovie with this data.
     */
    create: XOR<LikedMovieCreateInput, LikedMovieUncheckedCreateInput>
    /**
     * In case the LikedMovie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LikedMovieUpdateInput, LikedMovieUncheckedUpdateInput>
  }

  /**
   * LikedMovie delete
   */
  export type LikedMovieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedMovie
     */
    select?: LikedMovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedMovie
     */
    omit?: LikedMovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedMovieInclude<ExtArgs> | null
    /**
     * Filter which LikedMovie to delete.
     */
    where: LikedMovieWhereUniqueInput
  }

  /**
   * LikedMovie deleteMany
   */
  export type LikedMovieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LikedMovies to delete
     */
    where?: LikedMovieWhereInput
    /**
     * Limit how many LikedMovies to delete.
     */
    limit?: number
  }

  /**
   * LikedMovie without action
   */
  export type LikedMovieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedMovie
     */
    select?: LikedMovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedMovie
     */
    omit?: LikedMovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedMovieInclude<ExtArgs> | null
  }


  /**
   * Model WatchList
   */

  export type AggregateWatchList = {
    _count: WatchListCountAggregateOutputType | null
    _avg: WatchListAvgAggregateOutputType | null
    _sum: WatchListSumAggregateOutputType | null
    _min: WatchListMinAggregateOutputType | null
    _max: WatchListMaxAggregateOutputType | null
  }

  export type WatchListAvgAggregateOutputType = {
    id: number | null
    movieId: number | null
  }

  export type WatchListSumAggregateOutputType = {
    id: number | null
    movieId: number | null
  }

  export type WatchListMinAggregateOutputType = {
    id: number | null
    userId: string | null
    movieId: number | null
    createdAt: Date | null
  }

  export type WatchListMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    movieId: number | null
    createdAt: Date | null
  }

  export type WatchListCountAggregateOutputType = {
    id: number
    userId: number
    movieId: number
    createdAt: number
    _all: number
  }


  export type WatchListAvgAggregateInputType = {
    id?: true
    movieId?: true
  }

  export type WatchListSumAggregateInputType = {
    id?: true
    movieId?: true
  }

  export type WatchListMinAggregateInputType = {
    id?: true
    userId?: true
    movieId?: true
    createdAt?: true
  }

  export type WatchListMaxAggregateInputType = {
    id?: true
    userId?: true
    movieId?: true
    createdAt?: true
  }

  export type WatchListCountAggregateInputType = {
    id?: true
    userId?: true
    movieId?: true
    createdAt?: true
    _all?: true
  }

  export type WatchListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WatchList to aggregate.
     */
    where?: WatchListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WatchLists to fetch.
     */
    orderBy?: WatchListOrderByWithRelationInput | WatchListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WatchListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WatchLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WatchLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WatchLists
    **/
    _count?: true | WatchListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WatchListAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WatchListSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WatchListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WatchListMaxAggregateInputType
  }

  export type GetWatchListAggregateType<T extends WatchListAggregateArgs> = {
        [P in keyof T & keyof AggregateWatchList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWatchList[P]>
      : GetScalarType<T[P], AggregateWatchList[P]>
  }




  export type WatchListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WatchListWhereInput
    orderBy?: WatchListOrderByWithAggregationInput | WatchListOrderByWithAggregationInput[]
    by: WatchListScalarFieldEnum[] | WatchListScalarFieldEnum
    having?: WatchListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WatchListCountAggregateInputType | true
    _avg?: WatchListAvgAggregateInputType
    _sum?: WatchListSumAggregateInputType
    _min?: WatchListMinAggregateInputType
    _max?: WatchListMaxAggregateInputType
  }

  export type WatchListGroupByOutputType = {
    id: number
    userId: string
    movieId: number
    createdAt: Date
    _count: WatchListCountAggregateOutputType | null
    _avg: WatchListAvgAggregateOutputType | null
    _sum: WatchListSumAggregateOutputType | null
    _min: WatchListMinAggregateOutputType | null
    _max: WatchListMaxAggregateOutputType | null
  }

  type GetWatchListGroupByPayload<T extends WatchListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WatchListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WatchListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WatchListGroupByOutputType[P]>
            : GetScalarType<T[P], WatchListGroupByOutputType[P]>
        }
      >
    >


  export type WatchListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    movieId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    movie?: boolean | MovieDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watchList"]>

  export type WatchListSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    movieId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    movie?: boolean | MovieDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watchList"]>

  export type WatchListSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    movieId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    movie?: boolean | MovieDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watchList"]>

  export type WatchListSelectScalar = {
    id?: boolean
    userId?: boolean
    movieId?: boolean
    createdAt?: boolean
  }

  export type WatchListOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "movieId" | "createdAt", ExtArgs["result"]["watchList"]>
  export type WatchListInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    movie?: boolean | MovieDefaultArgs<ExtArgs>
  }
  export type WatchListIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    movie?: boolean | MovieDefaultArgs<ExtArgs>
  }
  export type WatchListIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    movie?: boolean | MovieDefaultArgs<ExtArgs>
  }

  export type $WatchListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WatchList"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      movie: Prisma.$MoviePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      movieId: number
      createdAt: Date
    }, ExtArgs["result"]["watchList"]>
    composites: {}
  }

  type WatchListGetPayload<S extends boolean | null | undefined | WatchListDefaultArgs> = $Result.GetResult<Prisma.$WatchListPayload, S>

  type WatchListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WatchListFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WatchListCountAggregateInputType | true
    }

  export interface WatchListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WatchList'], meta: { name: 'WatchList' } }
    /**
     * Find zero or one WatchList that matches the filter.
     * @param {WatchListFindUniqueArgs} args - Arguments to find a WatchList
     * @example
     * // Get one WatchList
     * const watchList = await prisma.watchList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WatchListFindUniqueArgs>(args: SelectSubset<T, WatchListFindUniqueArgs<ExtArgs>>): Prisma__WatchListClient<$Result.GetResult<Prisma.$WatchListPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WatchList that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WatchListFindUniqueOrThrowArgs} args - Arguments to find a WatchList
     * @example
     * // Get one WatchList
     * const watchList = await prisma.watchList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WatchListFindUniqueOrThrowArgs>(args: SelectSubset<T, WatchListFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WatchListClient<$Result.GetResult<Prisma.$WatchListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WatchList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchListFindFirstArgs} args - Arguments to find a WatchList
     * @example
     * // Get one WatchList
     * const watchList = await prisma.watchList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WatchListFindFirstArgs>(args?: SelectSubset<T, WatchListFindFirstArgs<ExtArgs>>): Prisma__WatchListClient<$Result.GetResult<Prisma.$WatchListPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WatchList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchListFindFirstOrThrowArgs} args - Arguments to find a WatchList
     * @example
     * // Get one WatchList
     * const watchList = await prisma.watchList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WatchListFindFirstOrThrowArgs>(args?: SelectSubset<T, WatchListFindFirstOrThrowArgs<ExtArgs>>): Prisma__WatchListClient<$Result.GetResult<Prisma.$WatchListPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WatchLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WatchLists
     * const watchLists = await prisma.watchList.findMany()
     * 
     * // Get first 10 WatchLists
     * const watchLists = await prisma.watchList.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const watchListWithIdOnly = await prisma.watchList.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WatchListFindManyArgs>(args?: SelectSubset<T, WatchListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WatchList.
     * @param {WatchListCreateArgs} args - Arguments to create a WatchList.
     * @example
     * // Create one WatchList
     * const WatchList = await prisma.watchList.create({
     *   data: {
     *     // ... data to create a WatchList
     *   }
     * })
     * 
     */
    create<T extends WatchListCreateArgs>(args: SelectSubset<T, WatchListCreateArgs<ExtArgs>>): Prisma__WatchListClient<$Result.GetResult<Prisma.$WatchListPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WatchLists.
     * @param {WatchListCreateManyArgs} args - Arguments to create many WatchLists.
     * @example
     * // Create many WatchLists
     * const watchList = await prisma.watchList.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WatchListCreateManyArgs>(args?: SelectSubset<T, WatchListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WatchLists and returns the data saved in the database.
     * @param {WatchListCreateManyAndReturnArgs} args - Arguments to create many WatchLists.
     * @example
     * // Create many WatchLists
     * const watchList = await prisma.watchList.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WatchLists and only return the `id`
     * const watchListWithIdOnly = await prisma.watchList.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WatchListCreateManyAndReturnArgs>(args?: SelectSubset<T, WatchListCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchListPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WatchList.
     * @param {WatchListDeleteArgs} args - Arguments to delete one WatchList.
     * @example
     * // Delete one WatchList
     * const WatchList = await prisma.watchList.delete({
     *   where: {
     *     // ... filter to delete one WatchList
     *   }
     * })
     * 
     */
    delete<T extends WatchListDeleteArgs>(args: SelectSubset<T, WatchListDeleteArgs<ExtArgs>>): Prisma__WatchListClient<$Result.GetResult<Prisma.$WatchListPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WatchList.
     * @param {WatchListUpdateArgs} args - Arguments to update one WatchList.
     * @example
     * // Update one WatchList
     * const watchList = await prisma.watchList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WatchListUpdateArgs>(args: SelectSubset<T, WatchListUpdateArgs<ExtArgs>>): Prisma__WatchListClient<$Result.GetResult<Prisma.$WatchListPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WatchLists.
     * @param {WatchListDeleteManyArgs} args - Arguments to filter WatchLists to delete.
     * @example
     * // Delete a few WatchLists
     * const { count } = await prisma.watchList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WatchListDeleteManyArgs>(args?: SelectSubset<T, WatchListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WatchLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WatchLists
     * const watchList = await prisma.watchList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WatchListUpdateManyArgs>(args: SelectSubset<T, WatchListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WatchLists and returns the data updated in the database.
     * @param {WatchListUpdateManyAndReturnArgs} args - Arguments to update many WatchLists.
     * @example
     * // Update many WatchLists
     * const watchList = await prisma.watchList.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WatchLists and only return the `id`
     * const watchListWithIdOnly = await prisma.watchList.updateManyAndReturn({
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
    updateManyAndReturn<T extends WatchListUpdateManyAndReturnArgs>(args: SelectSubset<T, WatchListUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchListPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WatchList.
     * @param {WatchListUpsertArgs} args - Arguments to update or create a WatchList.
     * @example
     * // Update or create a WatchList
     * const watchList = await prisma.watchList.upsert({
     *   create: {
     *     // ... data to create a WatchList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WatchList we want to update
     *   }
     * })
     */
    upsert<T extends WatchListUpsertArgs>(args: SelectSubset<T, WatchListUpsertArgs<ExtArgs>>): Prisma__WatchListClient<$Result.GetResult<Prisma.$WatchListPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WatchLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchListCountArgs} args - Arguments to filter WatchLists to count.
     * @example
     * // Count the number of WatchLists
     * const count = await prisma.watchList.count({
     *   where: {
     *     // ... the filter for the WatchLists we want to count
     *   }
     * })
    **/
    count<T extends WatchListCountArgs>(
      args?: Subset<T, WatchListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WatchListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WatchList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WatchListAggregateArgs>(args: Subset<T, WatchListAggregateArgs>): Prisma.PrismaPromise<GetWatchListAggregateType<T>>

    /**
     * Group by WatchList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchListGroupByArgs} args - Group by arguments.
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
      T extends WatchListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WatchListGroupByArgs['orderBy'] }
        : { orderBy?: WatchListGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WatchListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWatchListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WatchList model
   */
  readonly fields: WatchListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WatchList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WatchListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    movie<T extends MovieDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MovieDefaultArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the WatchList model
   */
  interface WatchListFieldRefs {
    readonly id: FieldRef<"WatchList", 'Int'>
    readonly userId: FieldRef<"WatchList", 'String'>
    readonly movieId: FieldRef<"WatchList", 'Int'>
    readonly createdAt: FieldRef<"WatchList", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WatchList findUnique
   */
  export type WatchListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchList
     */
    select?: WatchListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchList
     */
    omit?: WatchListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchListInclude<ExtArgs> | null
    /**
     * Filter, which WatchList to fetch.
     */
    where: WatchListWhereUniqueInput
  }

  /**
   * WatchList findUniqueOrThrow
   */
  export type WatchListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchList
     */
    select?: WatchListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchList
     */
    omit?: WatchListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchListInclude<ExtArgs> | null
    /**
     * Filter, which WatchList to fetch.
     */
    where: WatchListWhereUniqueInput
  }

  /**
   * WatchList findFirst
   */
  export type WatchListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchList
     */
    select?: WatchListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchList
     */
    omit?: WatchListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchListInclude<ExtArgs> | null
    /**
     * Filter, which WatchList to fetch.
     */
    where?: WatchListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WatchLists to fetch.
     */
    orderBy?: WatchListOrderByWithRelationInput | WatchListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WatchLists.
     */
    cursor?: WatchListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WatchLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WatchLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WatchLists.
     */
    distinct?: WatchListScalarFieldEnum | WatchListScalarFieldEnum[]
  }

  /**
   * WatchList findFirstOrThrow
   */
  export type WatchListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchList
     */
    select?: WatchListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchList
     */
    omit?: WatchListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchListInclude<ExtArgs> | null
    /**
     * Filter, which WatchList to fetch.
     */
    where?: WatchListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WatchLists to fetch.
     */
    orderBy?: WatchListOrderByWithRelationInput | WatchListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WatchLists.
     */
    cursor?: WatchListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WatchLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WatchLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WatchLists.
     */
    distinct?: WatchListScalarFieldEnum | WatchListScalarFieldEnum[]
  }

  /**
   * WatchList findMany
   */
  export type WatchListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchList
     */
    select?: WatchListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchList
     */
    omit?: WatchListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchListInclude<ExtArgs> | null
    /**
     * Filter, which WatchLists to fetch.
     */
    where?: WatchListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WatchLists to fetch.
     */
    orderBy?: WatchListOrderByWithRelationInput | WatchListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WatchLists.
     */
    cursor?: WatchListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WatchLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WatchLists.
     */
    skip?: number
    distinct?: WatchListScalarFieldEnum | WatchListScalarFieldEnum[]
  }

  /**
   * WatchList create
   */
  export type WatchListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchList
     */
    select?: WatchListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchList
     */
    omit?: WatchListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchListInclude<ExtArgs> | null
    /**
     * The data needed to create a WatchList.
     */
    data: XOR<WatchListCreateInput, WatchListUncheckedCreateInput>
  }

  /**
   * WatchList createMany
   */
  export type WatchListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WatchLists.
     */
    data: WatchListCreateManyInput | WatchListCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WatchList createManyAndReturn
   */
  export type WatchListCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchList
     */
    select?: WatchListSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WatchList
     */
    omit?: WatchListOmit<ExtArgs> | null
    /**
     * The data used to create many WatchLists.
     */
    data: WatchListCreateManyInput | WatchListCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchListIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WatchList update
   */
  export type WatchListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchList
     */
    select?: WatchListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchList
     */
    omit?: WatchListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchListInclude<ExtArgs> | null
    /**
     * The data needed to update a WatchList.
     */
    data: XOR<WatchListUpdateInput, WatchListUncheckedUpdateInput>
    /**
     * Choose, which WatchList to update.
     */
    where: WatchListWhereUniqueInput
  }

  /**
   * WatchList updateMany
   */
  export type WatchListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WatchLists.
     */
    data: XOR<WatchListUpdateManyMutationInput, WatchListUncheckedUpdateManyInput>
    /**
     * Filter which WatchLists to update
     */
    where?: WatchListWhereInput
    /**
     * Limit how many WatchLists to update.
     */
    limit?: number
  }

  /**
   * WatchList updateManyAndReturn
   */
  export type WatchListUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchList
     */
    select?: WatchListSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WatchList
     */
    omit?: WatchListOmit<ExtArgs> | null
    /**
     * The data used to update WatchLists.
     */
    data: XOR<WatchListUpdateManyMutationInput, WatchListUncheckedUpdateManyInput>
    /**
     * Filter which WatchLists to update
     */
    where?: WatchListWhereInput
    /**
     * Limit how many WatchLists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchListIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WatchList upsert
   */
  export type WatchListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchList
     */
    select?: WatchListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchList
     */
    omit?: WatchListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchListInclude<ExtArgs> | null
    /**
     * The filter to search for the WatchList to update in case it exists.
     */
    where: WatchListWhereUniqueInput
    /**
     * In case the WatchList found by the `where` argument doesn't exist, create a new WatchList with this data.
     */
    create: XOR<WatchListCreateInput, WatchListUncheckedCreateInput>
    /**
     * In case the WatchList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WatchListUpdateInput, WatchListUncheckedUpdateInput>
  }

  /**
   * WatchList delete
   */
  export type WatchListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchList
     */
    select?: WatchListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchList
     */
    omit?: WatchListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchListInclude<ExtArgs> | null
    /**
     * Filter which WatchList to delete.
     */
    where: WatchListWhereUniqueInput
  }

  /**
   * WatchList deleteMany
   */
  export type WatchListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WatchLists to delete
     */
    where?: WatchListWhereInput
    /**
     * Limit how many WatchLists to delete.
     */
    limit?: number
  }

  /**
   * WatchList without action
   */
  export type WatchListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchList
     */
    select?: WatchListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchList
     */
    omit?: WatchListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchListInclude<ExtArgs> | null
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
    userId: 'userId',
    firstName: 'firstName',
    imageUrl: 'imageUrl'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    text: 'text',
    authorId: 'authorId',
    movieId: 'movieId'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const ReplyScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    text: 'text',
    commentId: 'commentId'
  };

  export type ReplyScalarFieldEnum = (typeof ReplyScalarFieldEnum)[keyof typeof ReplyScalarFieldEnum]


  export const MovieScalarFieldEnum: {
    id: 'id',
    movieId: 'movieId',
    title: 'title',
    backdrop_path: 'backdrop_path',
    overview: 'overview',
    release_date: 'release_date',
    genres: 'genres'
  };

  export type MovieScalarFieldEnum = (typeof MovieScalarFieldEnum)[keyof typeof MovieScalarFieldEnum]


  export const LikedMovieScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    movieId: 'movieId',
    createdAt: 'createdAt'
  };

  export type LikedMovieScalarFieldEnum = (typeof LikedMovieScalarFieldEnum)[keyof typeof LikedMovieScalarFieldEnum]


  export const WatchListScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    movieId: 'movieId',
    createdAt: 'createdAt'
  };

  export type WatchListScalarFieldEnum = (typeof WatchListScalarFieldEnum)[keyof typeof WatchListScalarFieldEnum]


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
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    userId?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    imageUrl?: StringFilter<"User"> | string
    comments?: CommentListRelationFilter
    likedMovies?: LikedMovieListRelationFilter
    watchList?: WatchListListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    imageUrl?: SortOrder
    comments?: CommentOrderByRelationAggregateInput
    likedMovies?: LikedMovieOrderByRelationAggregateInput
    watchList?: WatchListOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    imageUrl?: StringFilter<"User"> | string
    comments?: CommentListRelationFilter
    likedMovies?: LikedMovieListRelationFilter
    watchList?: WatchListListRelationFilter
  }, "id" | "userId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    imageUrl?: SortOrder
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
    userId?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    imageUrl?: StringWithAggregatesFilter<"User"> | string
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: IntFilter<"Comment"> | number
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    text?: StringFilter<"Comment"> | string
    authorId?: StringFilter<"Comment"> | string
    movieId?: IntFilter<"Comment"> | number
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    movie?: XOR<MovieScalarRelationFilter, MovieWhereInput>
    replies?: ReplyListRelationFilter
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    text?: SortOrder
    authorId?: SortOrder
    movieId?: SortOrder
    author?: UserOrderByWithRelationInput
    movie?: MovieOrderByWithRelationInput
    replies?: ReplyOrderByRelationAggregateInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    text?: StringFilter<"Comment"> | string
    authorId?: StringFilter<"Comment"> | string
    movieId?: IntFilter<"Comment"> | number
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    movie?: XOR<MovieScalarRelationFilter, MovieWhereInput>
    replies?: ReplyListRelationFilter
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    text?: SortOrder
    authorId?: SortOrder
    movieId?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _avg?: CommentAvgOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
    _sum?: CommentSumOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Comment"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
    text?: StringWithAggregatesFilter<"Comment"> | string
    authorId?: StringWithAggregatesFilter<"Comment"> | string
    movieId?: IntWithAggregatesFilter<"Comment"> | number
  }

  export type ReplyWhereInput = {
    AND?: ReplyWhereInput | ReplyWhereInput[]
    OR?: ReplyWhereInput[]
    NOT?: ReplyWhereInput | ReplyWhereInput[]
    id?: IntFilter<"Reply"> | number
    createdAt?: DateTimeFilter<"Reply"> | Date | string
    updatedAt?: DateTimeFilter<"Reply"> | Date | string
    text?: StringFilter<"Reply"> | string
    commentId?: IntFilter<"Reply"> | number
    replyTo?: XOR<CommentScalarRelationFilter, CommentWhereInput>
  }

  export type ReplyOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    text?: SortOrder
    commentId?: SortOrder
    replyTo?: CommentOrderByWithRelationInput
  }

  export type ReplyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReplyWhereInput | ReplyWhereInput[]
    OR?: ReplyWhereInput[]
    NOT?: ReplyWhereInput | ReplyWhereInput[]
    createdAt?: DateTimeFilter<"Reply"> | Date | string
    updatedAt?: DateTimeFilter<"Reply"> | Date | string
    text?: StringFilter<"Reply"> | string
    commentId?: IntFilter<"Reply"> | number
    replyTo?: XOR<CommentScalarRelationFilter, CommentWhereInput>
  }, "id">

  export type ReplyOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    text?: SortOrder
    commentId?: SortOrder
    _count?: ReplyCountOrderByAggregateInput
    _avg?: ReplyAvgOrderByAggregateInput
    _max?: ReplyMaxOrderByAggregateInput
    _min?: ReplyMinOrderByAggregateInput
    _sum?: ReplySumOrderByAggregateInput
  }

  export type ReplyScalarWhereWithAggregatesInput = {
    AND?: ReplyScalarWhereWithAggregatesInput | ReplyScalarWhereWithAggregatesInput[]
    OR?: ReplyScalarWhereWithAggregatesInput[]
    NOT?: ReplyScalarWhereWithAggregatesInput | ReplyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Reply"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Reply"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Reply"> | Date | string
    text?: StringWithAggregatesFilter<"Reply"> | string
    commentId?: IntWithAggregatesFilter<"Reply"> | number
  }

  export type MovieWhereInput = {
    AND?: MovieWhereInput | MovieWhereInput[]
    OR?: MovieWhereInput[]
    NOT?: MovieWhereInput | MovieWhereInput[]
    id?: IntFilter<"Movie"> | number
    movieId?: IntFilter<"Movie"> | number
    title?: StringFilter<"Movie"> | string
    backdrop_path?: StringFilter<"Movie"> | string
    overview?: StringFilter<"Movie"> | string
    release_date?: StringFilter<"Movie"> | string
    genres?: StringNullableListFilter<"Movie">
    comments?: CommentListRelationFilter
    likes?: LikedMovieListRelationFilter
    watchlists?: WatchListListRelationFilter
  }

  export type MovieOrderByWithRelationInput = {
    id?: SortOrder
    movieId?: SortOrder
    title?: SortOrder
    backdrop_path?: SortOrder
    overview?: SortOrder
    release_date?: SortOrder
    genres?: SortOrder
    comments?: CommentOrderByRelationAggregateInput
    likes?: LikedMovieOrderByRelationAggregateInput
    watchlists?: WatchListOrderByRelationAggregateInput
  }

  export type MovieWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    movieId?: number
    AND?: MovieWhereInput | MovieWhereInput[]
    OR?: MovieWhereInput[]
    NOT?: MovieWhereInput | MovieWhereInput[]
    title?: StringFilter<"Movie"> | string
    backdrop_path?: StringFilter<"Movie"> | string
    overview?: StringFilter<"Movie"> | string
    release_date?: StringFilter<"Movie"> | string
    genres?: StringNullableListFilter<"Movie">
    comments?: CommentListRelationFilter
    likes?: LikedMovieListRelationFilter
    watchlists?: WatchListListRelationFilter
  }, "id" | "movieId">

  export type MovieOrderByWithAggregationInput = {
    id?: SortOrder
    movieId?: SortOrder
    title?: SortOrder
    backdrop_path?: SortOrder
    overview?: SortOrder
    release_date?: SortOrder
    genres?: SortOrder
    _count?: MovieCountOrderByAggregateInput
    _avg?: MovieAvgOrderByAggregateInput
    _max?: MovieMaxOrderByAggregateInput
    _min?: MovieMinOrderByAggregateInput
    _sum?: MovieSumOrderByAggregateInput
  }

  export type MovieScalarWhereWithAggregatesInput = {
    AND?: MovieScalarWhereWithAggregatesInput | MovieScalarWhereWithAggregatesInput[]
    OR?: MovieScalarWhereWithAggregatesInput[]
    NOT?: MovieScalarWhereWithAggregatesInput | MovieScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Movie"> | number
    movieId?: IntWithAggregatesFilter<"Movie"> | number
    title?: StringWithAggregatesFilter<"Movie"> | string
    backdrop_path?: StringWithAggregatesFilter<"Movie"> | string
    overview?: StringWithAggregatesFilter<"Movie"> | string
    release_date?: StringWithAggregatesFilter<"Movie"> | string
    genres?: StringNullableListFilter<"Movie">
  }

  export type LikedMovieWhereInput = {
    AND?: LikedMovieWhereInput | LikedMovieWhereInput[]
    OR?: LikedMovieWhereInput[]
    NOT?: LikedMovieWhereInput | LikedMovieWhereInput[]
    id?: IntFilter<"LikedMovie"> | number
    userId?: StringFilter<"LikedMovie"> | string
    movieId?: IntFilter<"LikedMovie"> | number
    createdAt?: DateTimeFilter<"LikedMovie"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    movie?: XOR<MovieScalarRelationFilter, MovieWhereInput>
  }

  export type LikedMovieOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    movie?: MovieOrderByWithRelationInput
  }

  export type LikedMovieWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    liked_user_movie_id?: LikedMovieLiked_user_movie_idCompoundUniqueInput
    AND?: LikedMovieWhereInput | LikedMovieWhereInput[]
    OR?: LikedMovieWhereInput[]
    NOT?: LikedMovieWhereInput | LikedMovieWhereInput[]
    userId?: StringFilter<"LikedMovie"> | string
    movieId?: IntFilter<"LikedMovie"> | number
    createdAt?: DateTimeFilter<"LikedMovie"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    movie?: XOR<MovieScalarRelationFilter, MovieWhereInput>
  }, "id" | "liked_user_movie_id">

  export type LikedMovieOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
    createdAt?: SortOrder
    _count?: LikedMovieCountOrderByAggregateInput
    _avg?: LikedMovieAvgOrderByAggregateInput
    _max?: LikedMovieMaxOrderByAggregateInput
    _min?: LikedMovieMinOrderByAggregateInput
    _sum?: LikedMovieSumOrderByAggregateInput
  }

  export type LikedMovieScalarWhereWithAggregatesInput = {
    AND?: LikedMovieScalarWhereWithAggregatesInput | LikedMovieScalarWhereWithAggregatesInput[]
    OR?: LikedMovieScalarWhereWithAggregatesInput[]
    NOT?: LikedMovieScalarWhereWithAggregatesInput | LikedMovieScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LikedMovie"> | number
    userId?: StringWithAggregatesFilter<"LikedMovie"> | string
    movieId?: IntWithAggregatesFilter<"LikedMovie"> | number
    createdAt?: DateTimeWithAggregatesFilter<"LikedMovie"> | Date | string
  }

  export type WatchListWhereInput = {
    AND?: WatchListWhereInput | WatchListWhereInput[]
    OR?: WatchListWhereInput[]
    NOT?: WatchListWhereInput | WatchListWhereInput[]
    id?: IntFilter<"WatchList"> | number
    userId?: StringFilter<"WatchList"> | string
    movieId?: IntFilter<"WatchList"> | number
    createdAt?: DateTimeFilter<"WatchList"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    movie?: XOR<MovieScalarRelationFilter, MovieWhereInput>
  }

  export type WatchListOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    movie?: MovieOrderByWithRelationInput
  }

  export type WatchListWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    watchlist_user_movie_id?: WatchListWatchlist_user_movie_idCompoundUniqueInput
    AND?: WatchListWhereInput | WatchListWhereInput[]
    OR?: WatchListWhereInput[]
    NOT?: WatchListWhereInput | WatchListWhereInput[]
    userId?: StringFilter<"WatchList"> | string
    movieId?: IntFilter<"WatchList"> | number
    createdAt?: DateTimeFilter<"WatchList"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    movie?: XOR<MovieScalarRelationFilter, MovieWhereInput>
  }, "id" | "watchlist_user_movie_id">

  export type WatchListOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
    createdAt?: SortOrder
    _count?: WatchListCountOrderByAggregateInput
    _avg?: WatchListAvgOrderByAggregateInput
    _max?: WatchListMaxOrderByAggregateInput
    _min?: WatchListMinOrderByAggregateInput
    _sum?: WatchListSumOrderByAggregateInput
  }

  export type WatchListScalarWhereWithAggregatesInput = {
    AND?: WatchListScalarWhereWithAggregatesInput | WatchListScalarWhereWithAggregatesInput[]
    OR?: WatchListScalarWhereWithAggregatesInput[]
    NOT?: WatchListScalarWhereWithAggregatesInput | WatchListScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WatchList"> | number
    userId?: StringWithAggregatesFilter<"WatchList"> | string
    movieId?: IntWithAggregatesFilter<"WatchList"> | number
    createdAt?: DateTimeWithAggregatesFilter<"WatchList"> | Date | string
  }

  export type UserCreateInput = {
    userId: string
    firstName: string
    imageUrl: string
    comments?: CommentCreateNestedManyWithoutAuthorInput
    likedMovies?: LikedMovieCreateNestedManyWithoutUserInput
    watchList?: WatchListCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    userId: string
    firstName: string
    imageUrl: string
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    likedMovies?: LikedMovieUncheckedCreateNestedManyWithoutUserInput
    watchList?: WatchListUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    likedMovies?: LikedMovieUpdateManyWithoutUserNestedInput
    watchList?: WatchListUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    likedMovies?: LikedMovieUncheckedUpdateManyWithoutUserNestedInput
    watchList?: WatchListUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    userId: string
    firstName: string
    imageUrl: string
  }

  export type UserUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type CommentCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    text: string
    author: UserCreateNestedOneWithoutCommentsInput
    movie: MovieCreateNestedOneWithoutCommentsInput
    replies?: ReplyCreateNestedManyWithoutReplyToInput
  }

  export type CommentUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    text: string
    authorId: string
    movieId: number
    replies?: ReplyUncheckedCreateNestedManyWithoutReplyToInput
  }

  export type CommentUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    author?: UserUpdateOneRequiredWithoutCommentsNestedInput
    movie?: MovieUpdateOneRequiredWithoutCommentsNestedInput
    replies?: ReplyUpdateManyWithoutReplyToNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    movieId?: IntFieldUpdateOperationsInput | number
    replies?: ReplyUncheckedUpdateManyWithoutReplyToNestedInput
  }

  export type CommentCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    text: string
    authorId: string
    movieId: number
  }

  export type CommentUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    movieId?: IntFieldUpdateOperationsInput | number
  }

  export type ReplyCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    text: string
    replyTo: CommentCreateNestedOneWithoutRepliesInput
  }

  export type ReplyUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    text: string
    commentId: number
  }

  export type ReplyUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    replyTo?: CommentUpdateOneRequiredWithoutRepliesNestedInput
  }

  export type ReplyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    commentId?: IntFieldUpdateOperationsInput | number
  }

  export type ReplyCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    text: string
    commentId: number
  }

  export type ReplyUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type ReplyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    commentId?: IntFieldUpdateOperationsInput | number
  }

  export type MovieCreateInput = {
    movieId: number
    title: string
    backdrop_path: string
    overview: string
    release_date: string
    genres?: MovieCreategenresInput | string[]
    comments?: CommentCreateNestedManyWithoutMovieInput
    likes?: LikedMovieCreateNestedManyWithoutMovieInput
    watchlists?: WatchListCreateNestedManyWithoutMovieInput
  }

  export type MovieUncheckedCreateInput = {
    id?: number
    movieId: number
    title: string
    backdrop_path: string
    overview: string
    release_date: string
    genres?: MovieCreategenresInput | string[]
    comments?: CommentUncheckedCreateNestedManyWithoutMovieInput
    likes?: LikedMovieUncheckedCreateNestedManyWithoutMovieInput
    watchlists?: WatchListUncheckedCreateNestedManyWithoutMovieInput
  }

  export type MovieUpdateInput = {
    movieId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    backdrop_path?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    release_date?: StringFieldUpdateOperationsInput | string
    genres?: MovieUpdategenresInput | string[]
    comments?: CommentUpdateManyWithoutMovieNestedInput
    likes?: LikedMovieUpdateManyWithoutMovieNestedInput
    watchlists?: WatchListUpdateManyWithoutMovieNestedInput
  }

  export type MovieUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    movieId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    backdrop_path?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    release_date?: StringFieldUpdateOperationsInput | string
    genres?: MovieUpdategenresInput | string[]
    comments?: CommentUncheckedUpdateManyWithoutMovieNestedInput
    likes?: LikedMovieUncheckedUpdateManyWithoutMovieNestedInput
    watchlists?: WatchListUncheckedUpdateManyWithoutMovieNestedInput
  }

  export type MovieCreateManyInput = {
    id?: number
    movieId: number
    title: string
    backdrop_path: string
    overview: string
    release_date: string
    genres?: MovieCreategenresInput | string[]
  }

  export type MovieUpdateManyMutationInput = {
    movieId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    backdrop_path?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    release_date?: StringFieldUpdateOperationsInput | string
    genres?: MovieUpdategenresInput | string[]
  }

  export type MovieUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    movieId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    backdrop_path?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    release_date?: StringFieldUpdateOperationsInput | string
    genres?: MovieUpdategenresInput | string[]
  }

  export type LikedMovieCreateInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutLikedMoviesInput
    movie: MovieCreateNestedOneWithoutLikesInput
  }

  export type LikedMovieUncheckedCreateInput = {
    id?: number
    userId: string
    movieId: number
    createdAt?: Date | string
  }

  export type LikedMovieUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLikedMoviesNestedInput
    movie?: MovieUpdateOneRequiredWithoutLikesNestedInput
  }

  export type LikedMovieUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    movieId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikedMovieCreateManyInput = {
    id?: number
    userId: string
    movieId: number
    createdAt?: Date | string
  }

  export type LikedMovieUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikedMovieUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    movieId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchListCreateInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutWatchListInput
    movie: MovieCreateNestedOneWithoutWatchlistsInput
  }

  export type WatchListUncheckedCreateInput = {
    id?: number
    userId: string
    movieId: number
    createdAt?: Date | string
  }

  export type WatchListUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWatchListNestedInput
    movie?: MovieUpdateOneRequiredWithoutWatchlistsNestedInput
  }

  export type WatchListUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    movieId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchListCreateManyInput = {
    id?: number
    userId: string
    movieId: number
    createdAt?: Date | string
  }

  export type WatchListUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchListUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    movieId?: IntFieldUpdateOperationsInput | number
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

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type LikedMovieListRelationFilter = {
    every?: LikedMovieWhereInput
    some?: LikedMovieWhereInput
    none?: LikedMovieWhereInput
  }

  export type WatchListListRelationFilter = {
    every?: WatchListWhereInput
    some?: WatchListWhereInput
    none?: WatchListWhereInput
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LikedMovieOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WatchListOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    imageUrl?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    imageUrl?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    imageUrl?: SortOrder
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type MovieScalarRelationFilter = {
    is?: MovieWhereInput
    isNot?: MovieWhereInput
  }

  export type ReplyListRelationFilter = {
    every?: ReplyWhereInput
    some?: ReplyWhereInput
    none?: ReplyWhereInput
  }

  export type ReplyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    text?: SortOrder
    authorId?: SortOrder
    movieId?: SortOrder
  }

  export type CommentAvgOrderByAggregateInput = {
    id?: SortOrder
    movieId?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    text?: SortOrder
    authorId?: SortOrder
    movieId?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    text?: SortOrder
    authorId?: SortOrder
    movieId?: SortOrder
  }

  export type CommentSumOrderByAggregateInput = {
    id?: SortOrder
    movieId?: SortOrder
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

  export type CommentScalarRelationFilter = {
    is?: CommentWhereInput
    isNot?: CommentWhereInput
  }

  export type ReplyCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    text?: SortOrder
    commentId?: SortOrder
  }

  export type ReplyAvgOrderByAggregateInput = {
    id?: SortOrder
    commentId?: SortOrder
  }

  export type ReplyMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    text?: SortOrder
    commentId?: SortOrder
  }

  export type ReplyMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    text?: SortOrder
    commentId?: SortOrder
  }

  export type ReplySumOrderByAggregateInput = {
    id?: SortOrder
    commentId?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type MovieCountOrderByAggregateInput = {
    id?: SortOrder
    movieId?: SortOrder
    title?: SortOrder
    backdrop_path?: SortOrder
    overview?: SortOrder
    release_date?: SortOrder
    genres?: SortOrder
  }

  export type MovieAvgOrderByAggregateInput = {
    id?: SortOrder
    movieId?: SortOrder
  }

  export type MovieMaxOrderByAggregateInput = {
    id?: SortOrder
    movieId?: SortOrder
    title?: SortOrder
    backdrop_path?: SortOrder
    overview?: SortOrder
    release_date?: SortOrder
  }

  export type MovieMinOrderByAggregateInput = {
    id?: SortOrder
    movieId?: SortOrder
    title?: SortOrder
    backdrop_path?: SortOrder
    overview?: SortOrder
    release_date?: SortOrder
  }

  export type MovieSumOrderByAggregateInput = {
    id?: SortOrder
    movieId?: SortOrder
  }

  export type LikedMovieLiked_user_movie_idCompoundUniqueInput = {
    userId: string
    movieId: number
  }

  export type LikedMovieCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
    createdAt?: SortOrder
  }

  export type LikedMovieAvgOrderByAggregateInput = {
    id?: SortOrder
    movieId?: SortOrder
  }

  export type LikedMovieMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
    createdAt?: SortOrder
  }

  export type LikedMovieMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
    createdAt?: SortOrder
  }

  export type LikedMovieSumOrderByAggregateInput = {
    id?: SortOrder
    movieId?: SortOrder
  }

  export type WatchListWatchlist_user_movie_idCompoundUniqueInput = {
    userId: string
    movieId: number
  }

  export type WatchListCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
    createdAt?: SortOrder
  }

  export type WatchListAvgOrderByAggregateInput = {
    id?: SortOrder
    movieId?: SortOrder
  }

  export type WatchListMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
    createdAt?: SortOrder
  }

  export type WatchListMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
    createdAt?: SortOrder
  }

  export type WatchListSumOrderByAggregateInput = {
    id?: SortOrder
    movieId?: SortOrder
  }

  export type CommentCreateNestedManyWithoutAuthorInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type LikedMovieCreateNestedManyWithoutUserInput = {
    create?: XOR<LikedMovieCreateWithoutUserInput, LikedMovieUncheckedCreateWithoutUserInput> | LikedMovieCreateWithoutUserInput[] | LikedMovieUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikedMovieCreateOrConnectWithoutUserInput | LikedMovieCreateOrConnectWithoutUserInput[]
    createMany?: LikedMovieCreateManyUserInputEnvelope
    connect?: LikedMovieWhereUniqueInput | LikedMovieWhereUniqueInput[]
  }

  export type WatchListCreateNestedManyWithoutUserInput = {
    create?: XOR<WatchListCreateWithoutUserInput, WatchListUncheckedCreateWithoutUserInput> | WatchListCreateWithoutUserInput[] | WatchListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchListCreateOrConnectWithoutUserInput | WatchListCreateOrConnectWithoutUserInput[]
    createMany?: WatchListCreateManyUserInputEnvelope
    connect?: WatchListWhereUniqueInput | WatchListWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type LikedMovieUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LikedMovieCreateWithoutUserInput, LikedMovieUncheckedCreateWithoutUserInput> | LikedMovieCreateWithoutUserInput[] | LikedMovieUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikedMovieCreateOrConnectWithoutUserInput | LikedMovieCreateOrConnectWithoutUserInput[]
    createMany?: LikedMovieCreateManyUserInputEnvelope
    connect?: LikedMovieWhereUniqueInput | LikedMovieWhereUniqueInput[]
  }

  export type WatchListUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WatchListCreateWithoutUserInput, WatchListUncheckedCreateWithoutUserInput> | WatchListCreateWithoutUserInput[] | WatchListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchListCreateOrConnectWithoutUserInput | WatchListCreateOrConnectWithoutUserInput[]
    createMany?: WatchListCreateManyUserInputEnvelope
    connect?: WatchListWhereUniqueInput | WatchListWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type CommentUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutAuthorInput | CommentUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutAuthorInput | CommentUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutAuthorInput | CommentUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type LikedMovieUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikedMovieCreateWithoutUserInput, LikedMovieUncheckedCreateWithoutUserInput> | LikedMovieCreateWithoutUserInput[] | LikedMovieUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikedMovieCreateOrConnectWithoutUserInput | LikedMovieCreateOrConnectWithoutUserInput[]
    upsert?: LikedMovieUpsertWithWhereUniqueWithoutUserInput | LikedMovieUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LikedMovieCreateManyUserInputEnvelope
    set?: LikedMovieWhereUniqueInput | LikedMovieWhereUniqueInput[]
    disconnect?: LikedMovieWhereUniqueInput | LikedMovieWhereUniqueInput[]
    delete?: LikedMovieWhereUniqueInput | LikedMovieWhereUniqueInput[]
    connect?: LikedMovieWhereUniqueInput | LikedMovieWhereUniqueInput[]
    update?: LikedMovieUpdateWithWhereUniqueWithoutUserInput | LikedMovieUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LikedMovieUpdateManyWithWhereWithoutUserInput | LikedMovieUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LikedMovieScalarWhereInput | LikedMovieScalarWhereInput[]
  }

  export type WatchListUpdateManyWithoutUserNestedInput = {
    create?: XOR<WatchListCreateWithoutUserInput, WatchListUncheckedCreateWithoutUserInput> | WatchListCreateWithoutUserInput[] | WatchListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchListCreateOrConnectWithoutUserInput | WatchListCreateOrConnectWithoutUserInput[]
    upsert?: WatchListUpsertWithWhereUniqueWithoutUserInput | WatchListUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WatchListCreateManyUserInputEnvelope
    set?: WatchListWhereUniqueInput | WatchListWhereUniqueInput[]
    disconnect?: WatchListWhereUniqueInput | WatchListWhereUniqueInput[]
    delete?: WatchListWhereUniqueInput | WatchListWhereUniqueInput[]
    connect?: WatchListWhereUniqueInput | WatchListWhereUniqueInput[]
    update?: WatchListUpdateWithWhereUniqueWithoutUserInput | WatchListUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WatchListUpdateManyWithWhereWithoutUserInput | WatchListUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WatchListScalarWhereInput | WatchListScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CommentUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutAuthorInput | CommentUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutAuthorInput | CommentUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutAuthorInput | CommentUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type LikedMovieUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikedMovieCreateWithoutUserInput, LikedMovieUncheckedCreateWithoutUserInput> | LikedMovieCreateWithoutUserInput[] | LikedMovieUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikedMovieCreateOrConnectWithoutUserInput | LikedMovieCreateOrConnectWithoutUserInput[]
    upsert?: LikedMovieUpsertWithWhereUniqueWithoutUserInput | LikedMovieUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LikedMovieCreateManyUserInputEnvelope
    set?: LikedMovieWhereUniqueInput | LikedMovieWhereUniqueInput[]
    disconnect?: LikedMovieWhereUniqueInput | LikedMovieWhereUniqueInput[]
    delete?: LikedMovieWhereUniqueInput | LikedMovieWhereUniqueInput[]
    connect?: LikedMovieWhereUniqueInput | LikedMovieWhereUniqueInput[]
    update?: LikedMovieUpdateWithWhereUniqueWithoutUserInput | LikedMovieUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LikedMovieUpdateManyWithWhereWithoutUserInput | LikedMovieUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LikedMovieScalarWhereInput | LikedMovieScalarWhereInput[]
  }

  export type WatchListUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WatchListCreateWithoutUserInput, WatchListUncheckedCreateWithoutUserInput> | WatchListCreateWithoutUserInput[] | WatchListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchListCreateOrConnectWithoutUserInput | WatchListCreateOrConnectWithoutUserInput[]
    upsert?: WatchListUpsertWithWhereUniqueWithoutUserInput | WatchListUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WatchListCreateManyUserInputEnvelope
    set?: WatchListWhereUniqueInput | WatchListWhereUniqueInput[]
    disconnect?: WatchListWhereUniqueInput | WatchListWhereUniqueInput[]
    delete?: WatchListWhereUniqueInput | WatchListWhereUniqueInput[]
    connect?: WatchListWhereUniqueInput | WatchListWhereUniqueInput[]
    update?: WatchListUpdateWithWhereUniqueWithoutUserInput | WatchListUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WatchListUpdateManyWithWhereWithoutUserInput | WatchListUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WatchListScalarWhereInput | WatchListScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type MovieCreateNestedOneWithoutCommentsInput = {
    create?: XOR<MovieCreateWithoutCommentsInput, MovieUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: MovieCreateOrConnectWithoutCommentsInput
    connect?: MovieWhereUniqueInput
  }

  export type ReplyCreateNestedManyWithoutReplyToInput = {
    create?: XOR<ReplyCreateWithoutReplyToInput, ReplyUncheckedCreateWithoutReplyToInput> | ReplyCreateWithoutReplyToInput[] | ReplyUncheckedCreateWithoutReplyToInput[]
    connectOrCreate?: ReplyCreateOrConnectWithoutReplyToInput | ReplyCreateOrConnectWithoutReplyToInput[]
    createMany?: ReplyCreateManyReplyToInputEnvelope
    connect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
  }

  export type ReplyUncheckedCreateNestedManyWithoutReplyToInput = {
    create?: XOR<ReplyCreateWithoutReplyToInput, ReplyUncheckedCreateWithoutReplyToInput> | ReplyCreateWithoutReplyToInput[] | ReplyUncheckedCreateWithoutReplyToInput[]
    connectOrCreate?: ReplyCreateOrConnectWithoutReplyToInput | ReplyCreateOrConnectWithoutReplyToInput[]
    createMany?: ReplyCreateManyReplyToInputEnvelope
    connect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    upsert?: UserUpsertWithoutCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentsInput, UserUpdateWithoutCommentsInput>, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type MovieUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<MovieCreateWithoutCommentsInput, MovieUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: MovieCreateOrConnectWithoutCommentsInput
    upsert?: MovieUpsertWithoutCommentsInput
    connect?: MovieWhereUniqueInput
    update?: XOR<XOR<MovieUpdateToOneWithWhereWithoutCommentsInput, MovieUpdateWithoutCommentsInput>, MovieUncheckedUpdateWithoutCommentsInput>
  }

  export type ReplyUpdateManyWithoutReplyToNestedInput = {
    create?: XOR<ReplyCreateWithoutReplyToInput, ReplyUncheckedCreateWithoutReplyToInput> | ReplyCreateWithoutReplyToInput[] | ReplyUncheckedCreateWithoutReplyToInput[]
    connectOrCreate?: ReplyCreateOrConnectWithoutReplyToInput | ReplyCreateOrConnectWithoutReplyToInput[]
    upsert?: ReplyUpsertWithWhereUniqueWithoutReplyToInput | ReplyUpsertWithWhereUniqueWithoutReplyToInput[]
    createMany?: ReplyCreateManyReplyToInputEnvelope
    set?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    disconnect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    delete?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    connect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    update?: ReplyUpdateWithWhereUniqueWithoutReplyToInput | ReplyUpdateWithWhereUniqueWithoutReplyToInput[]
    updateMany?: ReplyUpdateManyWithWhereWithoutReplyToInput | ReplyUpdateManyWithWhereWithoutReplyToInput[]
    deleteMany?: ReplyScalarWhereInput | ReplyScalarWhereInput[]
  }

  export type ReplyUncheckedUpdateManyWithoutReplyToNestedInput = {
    create?: XOR<ReplyCreateWithoutReplyToInput, ReplyUncheckedCreateWithoutReplyToInput> | ReplyCreateWithoutReplyToInput[] | ReplyUncheckedCreateWithoutReplyToInput[]
    connectOrCreate?: ReplyCreateOrConnectWithoutReplyToInput | ReplyCreateOrConnectWithoutReplyToInput[]
    upsert?: ReplyUpsertWithWhereUniqueWithoutReplyToInput | ReplyUpsertWithWhereUniqueWithoutReplyToInput[]
    createMany?: ReplyCreateManyReplyToInputEnvelope
    set?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    disconnect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    delete?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    connect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    update?: ReplyUpdateWithWhereUniqueWithoutReplyToInput | ReplyUpdateWithWhereUniqueWithoutReplyToInput[]
    updateMany?: ReplyUpdateManyWithWhereWithoutReplyToInput | ReplyUpdateManyWithWhereWithoutReplyToInput[]
    deleteMany?: ReplyScalarWhereInput | ReplyScalarWhereInput[]
  }

  export type CommentCreateNestedOneWithoutRepliesInput = {
    create?: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: CommentCreateOrConnectWithoutRepliesInput
    connect?: CommentWhereUniqueInput
  }

  export type CommentUpdateOneRequiredWithoutRepliesNestedInput = {
    create?: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: CommentCreateOrConnectWithoutRepliesInput
    upsert?: CommentUpsertWithoutRepliesInput
    connect?: CommentWhereUniqueInput
    update?: XOR<XOR<CommentUpdateToOneWithWhereWithoutRepliesInput, CommentUpdateWithoutRepliesInput>, CommentUncheckedUpdateWithoutRepliesInput>
  }

  export type MovieCreategenresInput = {
    set: string[]
  }

  export type CommentCreateNestedManyWithoutMovieInput = {
    create?: XOR<CommentCreateWithoutMovieInput, CommentUncheckedCreateWithoutMovieInput> | CommentCreateWithoutMovieInput[] | CommentUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutMovieInput | CommentCreateOrConnectWithoutMovieInput[]
    createMany?: CommentCreateManyMovieInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type LikedMovieCreateNestedManyWithoutMovieInput = {
    create?: XOR<LikedMovieCreateWithoutMovieInput, LikedMovieUncheckedCreateWithoutMovieInput> | LikedMovieCreateWithoutMovieInput[] | LikedMovieUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: LikedMovieCreateOrConnectWithoutMovieInput | LikedMovieCreateOrConnectWithoutMovieInput[]
    createMany?: LikedMovieCreateManyMovieInputEnvelope
    connect?: LikedMovieWhereUniqueInput | LikedMovieWhereUniqueInput[]
  }

  export type WatchListCreateNestedManyWithoutMovieInput = {
    create?: XOR<WatchListCreateWithoutMovieInput, WatchListUncheckedCreateWithoutMovieInput> | WatchListCreateWithoutMovieInput[] | WatchListUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: WatchListCreateOrConnectWithoutMovieInput | WatchListCreateOrConnectWithoutMovieInput[]
    createMany?: WatchListCreateManyMovieInputEnvelope
    connect?: WatchListWhereUniqueInput | WatchListWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutMovieInput = {
    create?: XOR<CommentCreateWithoutMovieInput, CommentUncheckedCreateWithoutMovieInput> | CommentCreateWithoutMovieInput[] | CommentUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutMovieInput | CommentCreateOrConnectWithoutMovieInput[]
    createMany?: CommentCreateManyMovieInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type LikedMovieUncheckedCreateNestedManyWithoutMovieInput = {
    create?: XOR<LikedMovieCreateWithoutMovieInput, LikedMovieUncheckedCreateWithoutMovieInput> | LikedMovieCreateWithoutMovieInput[] | LikedMovieUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: LikedMovieCreateOrConnectWithoutMovieInput | LikedMovieCreateOrConnectWithoutMovieInput[]
    createMany?: LikedMovieCreateManyMovieInputEnvelope
    connect?: LikedMovieWhereUniqueInput | LikedMovieWhereUniqueInput[]
  }

  export type WatchListUncheckedCreateNestedManyWithoutMovieInput = {
    create?: XOR<WatchListCreateWithoutMovieInput, WatchListUncheckedCreateWithoutMovieInput> | WatchListCreateWithoutMovieInput[] | WatchListUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: WatchListCreateOrConnectWithoutMovieInput | WatchListCreateOrConnectWithoutMovieInput[]
    createMany?: WatchListCreateManyMovieInputEnvelope
    connect?: WatchListWhereUniqueInput | WatchListWhereUniqueInput[]
  }

  export type MovieUpdategenresInput = {
    set?: string[]
    push?: string | string[]
  }

  export type CommentUpdateManyWithoutMovieNestedInput = {
    create?: XOR<CommentCreateWithoutMovieInput, CommentUncheckedCreateWithoutMovieInput> | CommentCreateWithoutMovieInput[] | CommentUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutMovieInput | CommentCreateOrConnectWithoutMovieInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutMovieInput | CommentUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: CommentCreateManyMovieInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutMovieInput | CommentUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutMovieInput | CommentUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type LikedMovieUpdateManyWithoutMovieNestedInput = {
    create?: XOR<LikedMovieCreateWithoutMovieInput, LikedMovieUncheckedCreateWithoutMovieInput> | LikedMovieCreateWithoutMovieInput[] | LikedMovieUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: LikedMovieCreateOrConnectWithoutMovieInput | LikedMovieCreateOrConnectWithoutMovieInput[]
    upsert?: LikedMovieUpsertWithWhereUniqueWithoutMovieInput | LikedMovieUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: LikedMovieCreateManyMovieInputEnvelope
    set?: LikedMovieWhereUniqueInput | LikedMovieWhereUniqueInput[]
    disconnect?: LikedMovieWhereUniqueInput | LikedMovieWhereUniqueInput[]
    delete?: LikedMovieWhereUniqueInput | LikedMovieWhereUniqueInput[]
    connect?: LikedMovieWhereUniqueInput | LikedMovieWhereUniqueInput[]
    update?: LikedMovieUpdateWithWhereUniqueWithoutMovieInput | LikedMovieUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: LikedMovieUpdateManyWithWhereWithoutMovieInput | LikedMovieUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: LikedMovieScalarWhereInput | LikedMovieScalarWhereInput[]
  }

  export type WatchListUpdateManyWithoutMovieNestedInput = {
    create?: XOR<WatchListCreateWithoutMovieInput, WatchListUncheckedCreateWithoutMovieInput> | WatchListCreateWithoutMovieInput[] | WatchListUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: WatchListCreateOrConnectWithoutMovieInput | WatchListCreateOrConnectWithoutMovieInput[]
    upsert?: WatchListUpsertWithWhereUniqueWithoutMovieInput | WatchListUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: WatchListCreateManyMovieInputEnvelope
    set?: WatchListWhereUniqueInput | WatchListWhereUniqueInput[]
    disconnect?: WatchListWhereUniqueInput | WatchListWhereUniqueInput[]
    delete?: WatchListWhereUniqueInput | WatchListWhereUniqueInput[]
    connect?: WatchListWhereUniqueInput | WatchListWhereUniqueInput[]
    update?: WatchListUpdateWithWhereUniqueWithoutMovieInput | WatchListUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: WatchListUpdateManyWithWhereWithoutMovieInput | WatchListUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: WatchListScalarWhereInput | WatchListScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutMovieNestedInput = {
    create?: XOR<CommentCreateWithoutMovieInput, CommentUncheckedCreateWithoutMovieInput> | CommentCreateWithoutMovieInput[] | CommentUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutMovieInput | CommentCreateOrConnectWithoutMovieInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutMovieInput | CommentUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: CommentCreateManyMovieInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutMovieInput | CommentUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutMovieInput | CommentUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type LikedMovieUncheckedUpdateManyWithoutMovieNestedInput = {
    create?: XOR<LikedMovieCreateWithoutMovieInput, LikedMovieUncheckedCreateWithoutMovieInput> | LikedMovieCreateWithoutMovieInput[] | LikedMovieUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: LikedMovieCreateOrConnectWithoutMovieInput | LikedMovieCreateOrConnectWithoutMovieInput[]
    upsert?: LikedMovieUpsertWithWhereUniqueWithoutMovieInput | LikedMovieUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: LikedMovieCreateManyMovieInputEnvelope
    set?: LikedMovieWhereUniqueInput | LikedMovieWhereUniqueInput[]
    disconnect?: LikedMovieWhereUniqueInput | LikedMovieWhereUniqueInput[]
    delete?: LikedMovieWhereUniqueInput | LikedMovieWhereUniqueInput[]
    connect?: LikedMovieWhereUniqueInput | LikedMovieWhereUniqueInput[]
    update?: LikedMovieUpdateWithWhereUniqueWithoutMovieInput | LikedMovieUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: LikedMovieUpdateManyWithWhereWithoutMovieInput | LikedMovieUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: LikedMovieScalarWhereInput | LikedMovieScalarWhereInput[]
  }

  export type WatchListUncheckedUpdateManyWithoutMovieNestedInput = {
    create?: XOR<WatchListCreateWithoutMovieInput, WatchListUncheckedCreateWithoutMovieInput> | WatchListCreateWithoutMovieInput[] | WatchListUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: WatchListCreateOrConnectWithoutMovieInput | WatchListCreateOrConnectWithoutMovieInput[]
    upsert?: WatchListUpsertWithWhereUniqueWithoutMovieInput | WatchListUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: WatchListCreateManyMovieInputEnvelope
    set?: WatchListWhereUniqueInput | WatchListWhereUniqueInput[]
    disconnect?: WatchListWhereUniqueInput | WatchListWhereUniqueInput[]
    delete?: WatchListWhereUniqueInput | WatchListWhereUniqueInput[]
    connect?: WatchListWhereUniqueInput | WatchListWhereUniqueInput[]
    update?: WatchListUpdateWithWhereUniqueWithoutMovieInput | WatchListUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: WatchListUpdateManyWithWhereWithoutMovieInput | WatchListUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: WatchListScalarWhereInput | WatchListScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutLikedMoviesInput = {
    create?: XOR<UserCreateWithoutLikedMoviesInput, UserUncheckedCreateWithoutLikedMoviesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikedMoviesInput
    connect?: UserWhereUniqueInput
  }

  export type MovieCreateNestedOneWithoutLikesInput = {
    create?: XOR<MovieCreateWithoutLikesInput, MovieUncheckedCreateWithoutLikesInput>
    connectOrCreate?: MovieCreateOrConnectWithoutLikesInput
    connect?: MovieWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLikedMoviesNestedInput = {
    create?: XOR<UserCreateWithoutLikedMoviesInput, UserUncheckedCreateWithoutLikedMoviesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikedMoviesInput
    upsert?: UserUpsertWithoutLikedMoviesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLikedMoviesInput, UserUpdateWithoutLikedMoviesInput>, UserUncheckedUpdateWithoutLikedMoviesInput>
  }

  export type MovieUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<MovieCreateWithoutLikesInput, MovieUncheckedCreateWithoutLikesInput>
    connectOrCreate?: MovieCreateOrConnectWithoutLikesInput
    upsert?: MovieUpsertWithoutLikesInput
    connect?: MovieWhereUniqueInput
    update?: XOR<XOR<MovieUpdateToOneWithWhereWithoutLikesInput, MovieUpdateWithoutLikesInput>, MovieUncheckedUpdateWithoutLikesInput>
  }

  export type UserCreateNestedOneWithoutWatchListInput = {
    create?: XOR<UserCreateWithoutWatchListInput, UserUncheckedCreateWithoutWatchListInput>
    connectOrCreate?: UserCreateOrConnectWithoutWatchListInput
    connect?: UserWhereUniqueInput
  }

  export type MovieCreateNestedOneWithoutWatchlistsInput = {
    create?: XOR<MovieCreateWithoutWatchlistsInput, MovieUncheckedCreateWithoutWatchlistsInput>
    connectOrCreate?: MovieCreateOrConnectWithoutWatchlistsInput
    connect?: MovieWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutWatchListNestedInput = {
    create?: XOR<UserCreateWithoutWatchListInput, UserUncheckedCreateWithoutWatchListInput>
    connectOrCreate?: UserCreateOrConnectWithoutWatchListInput
    upsert?: UserUpsertWithoutWatchListInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWatchListInput, UserUpdateWithoutWatchListInput>, UserUncheckedUpdateWithoutWatchListInput>
  }

  export type MovieUpdateOneRequiredWithoutWatchlistsNestedInput = {
    create?: XOR<MovieCreateWithoutWatchlistsInput, MovieUncheckedCreateWithoutWatchlistsInput>
    connectOrCreate?: MovieCreateOrConnectWithoutWatchlistsInput
    upsert?: MovieUpsertWithoutWatchlistsInput
    connect?: MovieWhereUniqueInput
    update?: XOR<XOR<MovieUpdateToOneWithWhereWithoutWatchlistsInput, MovieUpdateWithoutWatchlistsInput>, MovieUncheckedUpdateWithoutWatchlistsInput>
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

  export type CommentCreateWithoutAuthorInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    text: string
    movie: MovieCreateNestedOneWithoutCommentsInput
    replies?: ReplyCreateNestedManyWithoutReplyToInput
  }

  export type CommentUncheckedCreateWithoutAuthorInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    text: string
    movieId: number
    replies?: ReplyUncheckedCreateNestedManyWithoutReplyToInput
  }

  export type CommentCreateOrConnectWithoutAuthorInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput>
  }

  export type CommentCreateManyAuthorInputEnvelope = {
    data: CommentCreateManyAuthorInput | CommentCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type LikedMovieCreateWithoutUserInput = {
    createdAt?: Date | string
    movie: MovieCreateNestedOneWithoutLikesInput
  }

  export type LikedMovieUncheckedCreateWithoutUserInput = {
    id?: number
    movieId: number
    createdAt?: Date | string
  }

  export type LikedMovieCreateOrConnectWithoutUserInput = {
    where: LikedMovieWhereUniqueInput
    create: XOR<LikedMovieCreateWithoutUserInput, LikedMovieUncheckedCreateWithoutUserInput>
  }

  export type LikedMovieCreateManyUserInputEnvelope = {
    data: LikedMovieCreateManyUserInput | LikedMovieCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WatchListCreateWithoutUserInput = {
    createdAt?: Date | string
    movie: MovieCreateNestedOneWithoutWatchlistsInput
  }

  export type WatchListUncheckedCreateWithoutUserInput = {
    id?: number
    movieId: number
    createdAt?: Date | string
  }

  export type WatchListCreateOrConnectWithoutUserInput = {
    where: WatchListWhereUniqueInput
    create: XOR<WatchListCreateWithoutUserInput, WatchListUncheckedCreateWithoutUserInput>
  }

  export type WatchListCreateManyUserInputEnvelope = {
    data: WatchListCreateManyUserInput | WatchListCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CommentUpsertWithWhereUniqueWithoutAuthorInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutAuthorInput, CommentUncheckedUpdateWithoutAuthorInput>
    create: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutAuthorInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutAuthorInput, CommentUncheckedUpdateWithoutAuthorInput>
  }

  export type CommentUpdateManyWithWhereWithoutAuthorInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutAuthorInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: IntFilter<"Comment"> | number
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    text?: StringFilter<"Comment"> | string
    authorId?: StringFilter<"Comment"> | string
    movieId?: IntFilter<"Comment"> | number
  }

  export type LikedMovieUpsertWithWhereUniqueWithoutUserInput = {
    where: LikedMovieWhereUniqueInput
    update: XOR<LikedMovieUpdateWithoutUserInput, LikedMovieUncheckedUpdateWithoutUserInput>
    create: XOR<LikedMovieCreateWithoutUserInput, LikedMovieUncheckedCreateWithoutUserInput>
  }

  export type LikedMovieUpdateWithWhereUniqueWithoutUserInput = {
    where: LikedMovieWhereUniqueInput
    data: XOR<LikedMovieUpdateWithoutUserInput, LikedMovieUncheckedUpdateWithoutUserInput>
  }

  export type LikedMovieUpdateManyWithWhereWithoutUserInput = {
    where: LikedMovieScalarWhereInput
    data: XOR<LikedMovieUpdateManyMutationInput, LikedMovieUncheckedUpdateManyWithoutUserInput>
  }

  export type LikedMovieScalarWhereInput = {
    AND?: LikedMovieScalarWhereInput | LikedMovieScalarWhereInput[]
    OR?: LikedMovieScalarWhereInput[]
    NOT?: LikedMovieScalarWhereInput | LikedMovieScalarWhereInput[]
    id?: IntFilter<"LikedMovie"> | number
    userId?: StringFilter<"LikedMovie"> | string
    movieId?: IntFilter<"LikedMovie"> | number
    createdAt?: DateTimeFilter<"LikedMovie"> | Date | string
  }

  export type WatchListUpsertWithWhereUniqueWithoutUserInput = {
    where: WatchListWhereUniqueInput
    update: XOR<WatchListUpdateWithoutUserInput, WatchListUncheckedUpdateWithoutUserInput>
    create: XOR<WatchListCreateWithoutUserInput, WatchListUncheckedCreateWithoutUserInput>
  }

  export type WatchListUpdateWithWhereUniqueWithoutUserInput = {
    where: WatchListWhereUniqueInput
    data: XOR<WatchListUpdateWithoutUserInput, WatchListUncheckedUpdateWithoutUserInput>
  }

  export type WatchListUpdateManyWithWhereWithoutUserInput = {
    where: WatchListScalarWhereInput
    data: XOR<WatchListUpdateManyMutationInput, WatchListUncheckedUpdateManyWithoutUserInput>
  }

  export type WatchListScalarWhereInput = {
    AND?: WatchListScalarWhereInput | WatchListScalarWhereInput[]
    OR?: WatchListScalarWhereInput[]
    NOT?: WatchListScalarWhereInput | WatchListScalarWhereInput[]
    id?: IntFilter<"WatchList"> | number
    userId?: StringFilter<"WatchList"> | string
    movieId?: IntFilter<"WatchList"> | number
    createdAt?: DateTimeFilter<"WatchList"> | Date | string
  }

  export type UserCreateWithoutCommentsInput = {
    userId: string
    firstName: string
    imageUrl: string
    likedMovies?: LikedMovieCreateNestedManyWithoutUserInput
    watchList?: WatchListCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommentsInput = {
    id?: number
    userId: string
    firstName: string
    imageUrl: string
    likedMovies?: LikedMovieUncheckedCreateNestedManyWithoutUserInput
    watchList?: WatchListUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type MovieCreateWithoutCommentsInput = {
    movieId: number
    title: string
    backdrop_path: string
    overview: string
    release_date: string
    genres?: MovieCreategenresInput | string[]
    likes?: LikedMovieCreateNestedManyWithoutMovieInput
    watchlists?: WatchListCreateNestedManyWithoutMovieInput
  }

  export type MovieUncheckedCreateWithoutCommentsInput = {
    id?: number
    movieId: number
    title: string
    backdrop_path: string
    overview: string
    release_date: string
    genres?: MovieCreategenresInput | string[]
    likes?: LikedMovieUncheckedCreateNestedManyWithoutMovieInput
    watchlists?: WatchListUncheckedCreateNestedManyWithoutMovieInput
  }

  export type MovieCreateOrConnectWithoutCommentsInput = {
    where: MovieWhereUniqueInput
    create: XOR<MovieCreateWithoutCommentsInput, MovieUncheckedCreateWithoutCommentsInput>
  }

  export type ReplyCreateWithoutReplyToInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    text: string
  }

  export type ReplyUncheckedCreateWithoutReplyToInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    text: string
  }

  export type ReplyCreateOrConnectWithoutReplyToInput = {
    where: ReplyWhereUniqueInput
    create: XOR<ReplyCreateWithoutReplyToInput, ReplyUncheckedCreateWithoutReplyToInput>
  }

  export type ReplyCreateManyReplyToInputEnvelope = {
    data: ReplyCreateManyReplyToInput | ReplyCreateManyReplyToInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateWithoutCommentsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    likedMovies?: LikedMovieUpdateManyWithoutUserNestedInput
    watchList?: WatchListUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    likedMovies?: LikedMovieUncheckedUpdateManyWithoutUserNestedInput
    watchList?: WatchListUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MovieUpsertWithoutCommentsInput = {
    update: XOR<MovieUpdateWithoutCommentsInput, MovieUncheckedUpdateWithoutCommentsInput>
    create: XOR<MovieCreateWithoutCommentsInput, MovieUncheckedCreateWithoutCommentsInput>
    where?: MovieWhereInput
  }

  export type MovieUpdateToOneWithWhereWithoutCommentsInput = {
    where?: MovieWhereInput
    data: XOR<MovieUpdateWithoutCommentsInput, MovieUncheckedUpdateWithoutCommentsInput>
  }

  export type MovieUpdateWithoutCommentsInput = {
    movieId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    backdrop_path?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    release_date?: StringFieldUpdateOperationsInput | string
    genres?: MovieUpdategenresInput | string[]
    likes?: LikedMovieUpdateManyWithoutMovieNestedInput
    watchlists?: WatchListUpdateManyWithoutMovieNestedInput
  }

  export type MovieUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    movieId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    backdrop_path?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    release_date?: StringFieldUpdateOperationsInput | string
    genres?: MovieUpdategenresInput | string[]
    likes?: LikedMovieUncheckedUpdateManyWithoutMovieNestedInput
    watchlists?: WatchListUncheckedUpdateManyWithoutMovieNestedInput
  }

  export type ReplyUpsertWithWhereUniqueWithoutReplyToInput = {
    where: ReplyWhereUniqueInput
    update: XOR<ReplyUpdateWithoutReplyToInput, ReplyUncheckedUpdateWithoutReplyToInput>
    create: XOR<ReplyCreateWithoutReplyToInput, ReplyUncheckedCreateWithoutReplyToInput>
  }

  export type ReplyUpdateWithWhereUniqueWithoutReplyToInput = {
    where: ReplyWhereUniqueInput
    data: XOR<ReplyUpdateWithoutReplyToInput, ReplyUncheckedUpdateWithoutReplyToInput>
  }

  export type ReplyUpdateManyWithWhereWithoutReplyToInput = {
    where: ReplyScalarWhereInput
    data: XOR<ReplyUpdateManyMutationInput, ReplyUncheckedUpdateManyWithoutReplyToInput>
  }

  export type ReplyScalarWhereInput = {
    AND?: ReplyScalarWhereInput | ReplyScalarWhereInput[]
    OR?: ReplyScalarWhereInput[]
    NOT?: ReplyScalarWhereInput | ReplyScalarWhereInput[]
    id?: IntFilter<"Reply"> | number
    createdAt?: DateTimeFilter<"Reply"> | Date | string
    updatedAt?: DateTimeFilter<"Reply"> | Date | string
    text?: StringFilter<"Reply"> | string
    commentId?: IntFilter<"Reply"> | number
  }

  export type CommentCreateWithoutRepliesInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    text: string
    author: UserCreateNestedOneWithoutCommentsInput
    movie: MovieCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutRepliesInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    text: string
    authorId: string
    movieId: number
  }

  export type CommentCreateOrConnectWithoutRepliesInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
  }

  export type CommentUpsertWithoutRepliesInput = {
    update: XOR<CommentUpdateWithoutRepliesInput, CommentUncheckedUpdateWithoutRepliesInput>
    create: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
    where?: CommentWhereInput
  }

  export type CommentUpdateToOneWithWhereWithoutRepliesInput = {
    where?: CommentWhereInput
    data: XOR<CommentUpdateWithoutRepliesInput, CommentUncheckedUpdateWithoutRepliesInput>
  }

  export type CommentUpdateWithoutRepliesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    author?: UserUpdateOneRequiredWithoutCommentsNestedInput
    movie?: MovieUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutRepliesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    movieId?: IntFieldUpdateOperationsInput | number
  }

  export type CommentCreateWithoutMovieInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    text: string
    author: UserCreateNestedOneWithoutCommentsInput
    replies?: ReplyCreateNestedManyWithoutReplyToInput
  }

  export type CommentUncheckedCreateWithoutMovieInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    text: string
    authorId: string
    replies?: ReplyUncheckedCreateNestedManyWithoutReplyToInput
  }

  export type CommentCreateOrConnectWithoutMovieInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutMovieInput, CommentUncheckedCreateWithoutMovieInput>
  }

  export type CommentCreateManyMovieInputEnvelope = {
    data: CommentCreateManyMovieInput | CommentCreateManyMovieInput[]
    skipDuplicates?: boolean
  }

  export type LikedMovieCreateWithoutMovieInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutLikedMoviesInput
  }

  export type LikedMovieUncheckedCreateWithoutMovieInput = {
    id?: number
    userId: string
    createdAt?: Date | string
  }

  export type LikedMovieCreateOrConnectWithoutMovieInput = {
    where: LikedMovieWhereUniqueInput
    create: XOR<LikedMovieCreateWithoutMovieInput, LikedMovieUncheckedCreateWithoutMovieInput>
  }

  export type LikedMovieCreateManyMovieInputEnvelope = {
    data: LikedMovieCreateManyMovieInput | LikedMovieCreateManyMovieInput[]
    skipDuplicates?: boolean
  }

  export type WatchListCreateWithoutMovieInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutWatchListInput
  }

  export type WatchListUncheckedCreateWithoutMovieInput = {
    id?: number
    userId: string
    createdAt?: Date | string
  }

  export type WatchListCreateOrConnectWithoutMovieInput = {
    where: WatchListWhereUniqueInput
    create: XOR<WatchListCreateWithoutMovieInput, WatchListUncheckedCreateWithoutMovieInput>
  }

  export type WatchListCreateManyMovieInputEnvelope = {
    data: WatchListCreateManyMovieInput | WatchListCreateManyMovieInput[]
    skipDuplicates?: boolean
  }

  export type CommentUpsertWithWhereUniqueWithoutMovieInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutMovieInput, CommentUncheckedUpdateWithoutMovieInput>
    create: XOR<CommentCreateWithoutMovieInput, CommentUncheckedCreateWithoutMovieInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutMovieInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutMovieInput, CommentUncheckedUpdateWithoutMovieInput>
  }

  export type CommentUpdateManyWithWhereWithoutMovieInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutMovieInput>
  }

  export type LikedMovieUpsertWithWhereUniqueWithoutMovieInput = {
    where: LikedMovieWhereUniqueInput
    update: XOR<LikedMovieUpdateWithoutMovieInput, LikedMovieUncheckedUpdateWithoutMovieInput>
    create: XOR<LikedMovieCreateWithoutMovieInput, LikedMovieUncheckedCreateWithoutMovieInput>
  }

  export type LikedMovieUpdateWithWhereUniqueWithoutMovieInput = {
    where: LikedMovieWhereUniqueInput
    data: XOR<LikedMovieUpdateWithoutMovieInput, LikedMovieUncheckedUpdateWithoutMovieInput>
  }

  export type LikedMovieUpdateManyWithWhereWithoutMovieInput = {
    where: LikedMovieScalarWhereInput
    data: XOR<LikedMovieUpdateManyMutationInput, LikedMovieUncheckedUpdateManyWithoutMovieInput>
  }

  export type WatchListUpsertWithWhereUniqueWithoutMovieInput = {
    where: WatchListWhereUniqueInput
    update: XOR<WatchListUpdateWithoutMovieInput, WatchListUncheckedUpdateWithoutMovieInput>
    create: XOR<WatchListCreateWithoutMovieInput, WatchListUncheckedCreateWithoutMovieInput>
  }

  export type WatchListUpdateWithWhereUniqueWithoutMovieInput = {
    where: WatchListWhereUniqueInput
    data: XOR<WatchListUpdateWithoutMovieInput, WatchListUncheckedUpdateWithoutMovieInput>
  }

  export type WatchListUpdateManyWithWhereWithoutMovieInput = {
    where: WatchListScalarWhereInput
    data: XOR<WatchListUpdateManyMutationInput, WatchListUncheckedUpdateManyWithoutMovieInput>
  }

  export type UserCreateWithoutLikedMoviesInput = {
    userId: string
    firstName: string
    imageUrl: string
    comments?: CommentCreateNestedManyWithoutAuthorInput
    watchList?: WatchListCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLikedMoviesInput = {
    id?: number
    userId: string
    firstName: string
    imageUrl: string
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    watchList?: WatchListUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLikedMoviesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLikedMoviesInput, UserUncheckedCreateWithoutLikedMoviesInput>
  }

  export type MovieCreateWithoutLikesInput = {
    movieId: number
    title: string
    backdrop_path: string
    overview: string
    release_date: string
    genres?: MovieCreategenresInput | string[]
    comments?: CommentCreateNestedManyWithoutMovieInput
    watchlists?: WatchListCreateNestedManyWithoutMovieInput
  }

  export type MovieUncheckedCreateWithoutLikesInput = {
    id?: number
    movieId: number
    title: string
    backdrop_path: string
    overview: string
    release_date: string
    genres?: MovieCreategenresInput | string[]
    comments?: CommentUncheckedCreateNestedManyWithoutMovieInput
    watchlists?: WatchListUncheckedCreateNestedManyWithoutMovieInput
  }

  export type MovieCreateOrConnectWithoutLikesInput = {
    where: MovieWhereUniqueInput
    create: XOR<MovieCreateWithoutLikesInput, MovieUncheckedCreateWithoutLikesInput>
  }

  export type UserUpsertWithoutLikedMoviesInput = {
    update: XOR<UserUpdateWithoutLikedMoviesInput, UserUncheckedUpdateWithoutLikedMoviesInput>
    create: XOR<UserCreateWithoutLikedMoviesInput, UserUncheckedCreateWithoutLikedMoviesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLikedMoviesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLikedMoviesInput, UserUncheckedUpdateWithoutLikedMoviesInput>
  }

  export type UserUpdateWithoutLikedMoviesInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    watchList?: WatchListUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLikedMoviesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    watchList?: WatchListUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MovieUpsertWithoutLikesInput = {
    update: XOR<MovieUpdateWithoutLikesInput, MovieUncheckedUpdateWithoutLikesInput>
    create: XOR<MovieCreateWithoutLikesInput, MovieUncheckedCreateWithoutLikesInput>
    where?: MovieWhereInput
  }

  export type MovieUpdateToOneWithWhereWithoutLikesInput = {
    where?: MovieWhereInput
    data: XOR<MovieUpdateWithoutLikesInput, MovieUncheckedUpdateWithoutLikesInput>
  }

  export type MovieUpdateWithoutLikesInput = {
    movieId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    backdrop_path?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    release_date?: StringFieldUpdateOperationsInput | string
    genres?: MovieUpdategenresInput | string[]
    comments?: CommentUpdateManyWithoutMovieNestedInput
    watchlists?: WatchListUpdateManyWithoutMovieNestedInput
  }

  export type MovieUncheckedUpdateWithoutLikesInput = {
    id?: IntFieldUpdateOperationsInput | number
    movieId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    backdrop_path?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    release_date?: StringFieldUpdateOperationsInput | string
    genres?: MovieUpdategenresInput | string[]
    comments?: CommentUncheckedUpdateManyWithoutMovieNestedInput
    watchlists?: WatchListUncheckedUpdateManyWithoutMovieNestedInput
  }

  export type UserCreateWithoutWatchListInput = {
    userId: string
    firstName: string
    imageUrl: string
    comments?: CommentCreateNestedManyWithoutAuthorInput
    likedMovies?: LikedMovieCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWatchListInput = {
    id?: number
    userId: string
    firstName: string
    imageUrl: string
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    likedMovies?: LikedMovieUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWatchListInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWatchListInput, UserUncheckedCreateWithoutWatchListInput>
  }

  export type MovieCreateWithoutWatchlistsInput = {
    movieId: number
    title: string
    backdrop_path: string
    overview: string
    release_date: string
    genres?: MovieCreategenresInput | string[]
    comments?: CommentCreateNestedManyWithoutMovieInput
    likes?: LikedMovieCreateNestedManyWithoutMovieInput
  }

  export type MovieUncheckedCreateWithoutWatchlistsInput = {
    id?: number
    movieId: number
    title: string
    backdrop_path: string
    overview: string
    release_date: string
    genres?: MovieCreategenresInput | string[]
    comments?: CommentUncheckedCreateNestedManyWithoutMovieInput
    likes?: LikedMovieUncheckedCreateNestedManyWithoutMovieInput
  }

  export type MovieCreateOrConnectWithoutWatchlistsInput = {
    where: MovieWhereUniqueInput
    create: XOR<MovieCreateWithoutWatchlistsInput, MovieUncheckedCreateWithoutWatchlistsInput>
  }

  export type UserUpsertWithoutWatchListInput = {
    update: XOR<UserUpdateWithoutWatchListInput, UserUncheckedUpdateWithoutWatchListInput>
    create: XOR<UserCreateWithoutWatchListInput, UserUncheckedCreateWithoutWatchListInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWatchListInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWatchListInput, UserUncheckedUpdateWithoutWatchListInput>
  }

  export type UserUpdateWithoutWatchListInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    likedMovies?: LikedMovieUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWatchListInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    likedMovies?: LikedMovieUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MovieUpsertWithoutWatchlistsInput = {
    update: XOR<MovieUpdateWithoutWatchlistsInput, MovieUncheckedUpdateWithoutWatchlistsInput>
    create: XOR<MovieCreateWithoutWatchlistsInput, MovieUncheckedCreateWithoutWatchlistsInput>
    where?: MovieWhereInput
  }

  export type MovieUpdateToOneWithWhereWithoutWatchlistsInput = {
    where?: MovieWhereInput
    data: XOR<MovieUpdateWithoutWatchlistsInput, MovieUncheckedUpdateWithoutWatchlistsInput>
  }

  export type MovieUpdateWithoutWatchlistsInput = {
    movieId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    backdrop_path?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    release_date?: StringFieldUpdateOperationsInput | string
    genres?: MovieUpdategenresInput | string[]
    comments?: CommentUpdateManyWithoutMovieNestedInput
    likes?: LikedMovieUpdateManyWithoutMovieNestedInput
  }

  export type MovieUncheckedUpdateWithoutWatchlistsInput = {
    id?: IntFieldUpdateOperationsInput | number
    movieId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    backdrop_path?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    release_date?: StringFieldUpdateOperationsInput | string
    genres?: MovieUpdategenresInput | string[]
    comments?: CommentUncheckedUpdateManyWithoutMovieNestedInput
    likes?: LikedMovieUncheckedUpdateManyWithoutMovieNestedInput
  }

  export type CommentCreateManyAuthorInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    text: string
    movieId: number
  }

  export type LikedMovieCreateManyUserInput = {
    id?: number
    movieId: number
    createdAt?: Date | string
  }

  export type WatchListCreateManyUserInput = {
    id?: number
    movieId: number
    createdAt?: Date | string
  }

  export type CommentUpdateWithoutAuthorInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    movie?: MovieUpdateOneRequiredWithoutCommentsNestedInput
    replies?: ReplyUpdateManyWithoutReplyToNestedInput
  }

  export type CommentUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    movieId?: IntFieldUpdateOperationsInput | number
    replies?: ReplyUncheckedUpdateManyWithoutReplyToNestedInput
  }

  export type CommentUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    movieId?: IntFieldUpdateOperationsInput | number
  }

  export type LikedMovieUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movie?: MovieUpdateOneRequiredWithoutLikesNestedInput
  }

  export type LikedMovieUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    movieId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikedMovieUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    movieId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchListUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movie?: MovieUpdateOneRequiredWithoutWatchlistsNestedInput
  }

  export type WatchListUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    movieId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchListUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    movieId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReplyCreateManyReplyToInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    text: string
  }

  export type ReplyUpdateWithoutReplyToInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type ReplyUncheckedUpdateWithoutReplyToInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type ReplyUncheckedUpdateManyWithoutReplyToInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type CommentCreateManyMovieInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    text: string
    authorId: string
  }

  export type LikedMovieCreateManyMovieInput = {
    id?: number
    userId: string
    createdAt?: Date | string
  }

  export type WatchListCreateManyMovieInput = {
    id?: number
    userId: string
    createdAt?: Date | string
  }

  export type CommentUpdateWithoutMovieInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    author?: UserUpdateOneRequiredWithoutCommentsNestedInput
    replies?: ReplyUpdateManyWithoutReplyToNestedInput
  }

  export type CommentUncheckedUpdateWithoutMovieInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    replies?: ReplyUncheckedUpdateManyWithoutReplyToNestedInput
  }

  export type CommentUncheckedUpdateManyWithoutMovieInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type LikedMovieUpdateWithoutMovieInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLikedMoviesNestedInput
  }

  export type LikedMovieUncheckedUpdateWithoutMovieInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikedMovieUncheckedUpdateManyWithoutMovieInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchListUpdateWithoutMovieInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWatchListNestedInput
  }

  export type WatchListUncheckedUpdateWithoutMovieInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchListUncheckedUpdateManyWithoutMovieInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
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