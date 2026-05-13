
/**
 * Client
**/

import * as runtime from './runtime/client.js';
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
 * Model PersonalTask
 * 
 */
export type PersonalTask = $Result.DefaultSelection<Prisma.$PersonalTaskPayload>
/**
 * Model GroupTask
 * 
 */
export type GroupTask = $Result.DefaultSelection<Prisma.$GroupTaskPayload>
/**
 * Model Assignment
 * 
 */
export type Assignment = $Result.DefaultSelection<Prisma.$AssignmentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  student: 'student',
  tutor: 'tutor',
  admin: 'admin'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

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
   * `prisma.personalTask`: Exposes CRUD operations for the **PersonalTask** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PersonalTasks
    * const personalTasks = await prisma.personalTask.findMany()
    * ```
    */
  get personalTask(): Prisma.PersonalTaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.groupTask`: Exposes CRUD operations for the **GroupTask** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GroupTasks
    * const groupTasks = await prisma.groupTask.findMany()
    * ```
    */
  get groupTask(): Prisma.GroupTaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.assignment`: Exposes CRUD operations for the **Assignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Assignments
    * const assignments = await prisma.assignment.findMany()
    * ```
    */
  get assignment(): Prisma.AssignmentDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    PersonalTask: 'PersonalTask',
    GroupTask: 'GroupTask',
    Assignment: 'Assignment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "personalTask" | "groupTask" | "assignment"
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
      PersonalTask: {
        payload: Prisma.$PersonalTaskPayload<ExtArgs>
        fields: Prisma.PersonalTaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PersonalTaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalTaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PersonalTaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalTaskPayload>
          }
          findFirst: {
            args: Prisma.PersonalTaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalTaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PersonalTaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalTaskPayload>
          }
          findMany: {
            args: Prisma.PersonalTaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalTaskPayload>[]
          }
          create: {
            args: Prisma.PersonalTaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalTaskPayload>
          }
          createMany: {
            args: Prisma.PersonalTaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PersonalTaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalTaskPayload>[]
          }
          delete: {
            args: Prisma.PersonalTaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalTaskPayload>
          }
          update: {
            args: Prisma.PersonalTaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalTaskPayload>
          }
          deleteMany: {
            args: Prisma.PersonalTaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PersonalTaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PersonalTaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalTaskPayload>[]
          }
          upsert: {
            args: Prisma.PersonalTaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalTaskPayload>
          }
          aggregate: {
            args: Prisma.PersonalTaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePersonalTask>
          }
          groupBy: {
            args: Prisma.PersonalTaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<PersonalTaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.PersonalTaskCountArgs<ExtArgs>
            result: $Utils.Optional<PersonalTaskCountAggregateOutputType> | number
          }
        }
      }
      GroupTask: {
        payload: Prisma.$GroupTaskPayload<ExtArgs>
        fields: Prisma.GroupTaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupTaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupTaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupTaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupTaskPayload>
          }
          findFirst: {
            args: Prisma.GroupTaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupTaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupTaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupTaskPayload>
          }
          findMany: {
            args: Prisma.GroupTaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupTaskPayload>[]
          }
          create: {
            args: Prisma.GroupTaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupTaskPayload>
          }
          createMany: {
            args: Prisma.GroupTaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupTaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupTaskPayload>[]
          }
          delete: {
            args: Prisma.GroupTaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupTaskPayload>
          }
          update: {
            args: Prisma.GroupTaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupTaskPayload>
          }
          deleteMany: {
            args: Prisma.GroupTaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupTaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupTaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupTaskPayload>[]
          }
          upsert: {
            args: Prisma.GroupTaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupTaskPayload>
          }
          aggregate: {
            args: Prisma.GroupTaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroupTask>
          }
          groupBy: {
            args: Prisma.GroupTaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupTaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupTaskCountArgs<ExtArgs>
            result: $Utils.Optional<GroupTaskCountAggregateOutputType> | number
          }
        }
      }
      Assignment: {
        payload: Prisma.$AssignmentPayload<ExtArgs>
        fields: Prisma.AssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          findFirst: {
            args: Prisma.AssignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          findMany: {
            args: Prisma.AssignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>[]
          }
          create: {
            args: Prisma.AssignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          createMany: {
            args: Prisma.AssignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssignmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>[]
          }
          delete: {
            args: Prisma.AssignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          update: {
            args: Prisma.AssignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          deleteMany: {
            args: Prisma.AssignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AssignmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>[]
          }
          upsert: {
            args: Prisma.AssignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          aggregate: {
            args: Prisma.AssignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssignment>
          }
          groupBy: {
            args: Prisma.AssignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssignmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssignmentCountArgs<ExtArgs>
            result: $Utils.Optional<AssignmentCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    personalTask?: PersonalTaskOmit
    groupTask?: GroupTaskOmit
    assignment?: AssignmentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    personalTasks: number
    groupTasks: number
    assignments: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    personalTasks?: boolean | UserCountOutputTypeCountPersonalTasksArgs
    groupTasks?: boolean | UserCountOutputTypeCountGroupTasksArgs
    assignments?: boolean | UserCountOutputTypeCountAssignmentsArgs
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
  export type UserCountOutputTypeCountPersonalTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonalTaskWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGroupTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupTaskWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentWhereInput
  }


  /**
   * Count Type GroupTaskCountOutputType
   */

  export type GroupTaskCountOutputType = {
    assignments: number
  }

  export type GroupTaskCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignments?: boolean | GroupTaskCountOutputTypeCountAssignmentsArgs
  }

  // Custom InputTypes
  /**
   * GroupTaskCountOutputType without action
   */
  export type GroupTaskCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupTaskCountOutputType
     */
    select?: GroupTaskCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GroupTaskCountOutputType without action
   */
  export type GroupTaskCountOutputTypeCountAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    status: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
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
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    personalTasks?: boolean | User$personalTasksArgs<ExtArgs>
    groupTasks?: boolean | User$groupTasksArgs<ExtArgs>
    assignments?: boolean | User$assignmentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    personalTasks?: boolean | User$personalTasksArgs<ExtArgs>
    groupTasks?: boolean | User$groupTasksArgs<ExtArgs>
    assignments?: boolean | User$assignmentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      personalTasks: Prisma.$PersonalTaskPayload<ExtArgs>[]
      groupTasks: Prisma.$GroupTaskPayload<ExtArgs>[]
      assignments: Prisma.$AssignmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      role: $Enums.Role
      status: string
      createdAt: Date
      updatedAt: Date
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
    personalTasks<T extends User$personalTasksArgs<ExtArgs> = {}>(args?: Subset<T, User$personalTasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonalTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    groupTasks<T extends User$groupTasksArgs<ExtArgs> = {}>(args?: Subset<T, User$groupTasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignments<T extends User$assignmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly status: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
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
   * User.personalTasks
   */
  export type User$personalTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalTask
     */
    select?: PersonalTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalTask
     */
    omit?: PersonalTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalTaskInclude<ExtArgs> | null
    where?: PersonalTaskWhereInput
    orderBy?: PersonalTaskOrderByWithRelationInput | PersonalTaskOrderByWithRelationInput[]
    cursor?: PersonalTaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PersonalTaskScalarFieldEnum | PersonalTaskScalarFieldEnum[]
  }

  /**
   * User.groupTasks
   */
  export type User$groupTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupTask
     */
    select?: GroupTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupTask
     */
    omit?: GroupTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupTaskInclude<ExtArgs> | null
    where?: GroupTaskWhereInput
    orderBy?: GroupTaskOrderByWithRelationInput | GroupTaskOrderByWithRelationInput[]
    cursor?: GroupTaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupTaskScalarFieldEnum | GroupTaskScalarFieldEnum[]
  }

  /**
   * User.assignments
   */
  export type User$assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    where?: AssignmentWhereInput
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    cursor?: AssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
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
   * Model PersonalTask
   */

  export type AggregatePersonalTask = {
    _count: PersonalTaskCountAggregateOutputType | null
    _min: PersonalTaskMinAggregateOutputType | null
    _max: PersonalTaskMaxAggregateOutputType | null
  }

  export type PersonalTaskMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    dueDate: Date | null
    dueTime: string | null
    priority: string | null
    completed: boolean | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PersonalTaskMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    dueDate: Date | null
    dueTime: string | null
    priority: string | null
    completed: boolean | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PersonalTaskCountAggregateOutputType = {
    id: number
    title: number
    description: number
    dueDate: number
    dueTime: number
    priority: number
    completed: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PersonalTaskMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    dueDate?: true
    dueTime?: true
    priority?: true
    completed?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PersonalTaskMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    dueDate?: true
    dueTime?: true
    priority?: true
    completed?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PersonalTaskCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    dueDate?: true
    dueTime?: true
    priority?: true
    completed?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PersonalTaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PersonalTask to aggregate.
     */
    where?: PersonalTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonalTasks to fetch.
     */
    orderBy?: PersonalTaskOrderByWithRelationInput | PersonalTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PersonalTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonalTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonalTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PersonalTasks
    **/
    _count?: true | PersonalTaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonalTaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonalTaskMaxAggregateInputType
  }

  export type GetPersonalTaskAggregateType<T extends PersonalTaskAggregateArgs> = {
        [P in keyof T & keyof AggregatePersonalTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePersonalTask[P]>
      : GetScalarType<T[P], AggregatePersonalTask[P]>
  }




  export type PersonalTaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonalTaskWhereInput
    orderBy?: PersonalTaskOrderByWithAggregationInput | PersonalTaskOrderByWithAggregationInput[]
    by: PersonalTaskScalarFieldEnum[] | PersonalTaskScalarFieldEnum
    having?: PersonalTaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonalTaskCountAggregateInputType | true
    _min?: PersonalTaskMinAggregateInputType
    _max?: PersonalTaskMaxAggregateInputType
  }

  export type PersonalTaskGroupByOutputType = {
    id: string
    title: string
    description: string
    dueDate: Date | null
    dueTime: string | null
    priority: string
    completed: boolean
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: PersonalTaskCountAggregateOutputType | null
    _min: PersonalTaskMinAggregateOutputType | null
    _max: PersonalTaskMaxAggregateOutputType | null
  }

  type GetPersonalTaskGroupByPayload<T extends PersonalTaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PersonalTaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonalTaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonalTaskGroupByOutputType[P]>
            : GetScalarType<T[P], PersonalTaskGroupByOutputType[P]>
        }
      >
    >


  export type PersonalTaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    dueDate?: boolean
    dueTime?: boolean
    priority?: boolean
    completed?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["personalTask"]>

  export type PersonalTaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    dueDate?: boolean
    dueTime?: boolean
    priority?: boolean
    completed?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["personalTask"]>

  export type PersonalTaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    dueDate?: boolean
    dueTime?: boolean
    priority?: boolean
    completed?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["personalTask"]>

  export type PersonalTaskSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    dueDate?: boolean
    dueTime?: boolean
    priority?: boolean
    completed?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PersonalTaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "dueDate" | "dueTime" | "priority" | "completed" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["personalTask"]>
  export type PersonalTaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PersonalTaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PersonalTaskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PersonalTaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PersonalTask"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      dueDate: Date | null
      dueTime: string | null
      priority: string
      completed: boolean
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["personalTask"]>
    composites: {}
  }

  type PersonalTaskGetPayload<S extends boolean | null | undefined | PersonalTaskDefaultArgs> = $Result.GetResult<Prisma.$PersonalTaskPayload, S>

  type PersonalTaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PersonalTaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PersonalTaskCountAggregateInputType | true
    }

  export interface PersonalTaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PersonalTask'], meta: { name: 'PersonalTask' } }
    /**
     * Find zero or one PersonalTask that matches the filter.
     * @param {PersonalTaskFindUniqueArgs} args - Arguments to find a PersonalTask
     * @example
     * // Get one PersonalTask
     * const personalTask = await prisma.personalTask.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PersonalTaskFindUniqueArgs>(args: SelectSubset<T, PersonalTaskFindUniqueArgs<ExtArgs>>): Prisma__PersonalTaskClient<$Result.GetResult<Prisma.$PersonalTaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PersonalTask that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PersonalTaskFindUniqueOrThrowArgs} args - Arguments to find a PersonalTask
     * @example
     * // Get one PersonalTask
     * const personalTask = await prisma.personalTask.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PersonalTaskFindUniqueOrThrowArgs>(args: SelectSubset<T, PersonalTaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PersonalTaskClient<$Result.GetResult<Prisma.$PersonalTaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PersonalTask that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalTaskFindFirstArgs} args - Arguments to find a PersonalTask
     * @example
     * // Get one PersonalTask
     * const personalTask = await prisma.personalTask.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PersonalTaskFindFirstArgs>(args?: SelectSubset<T, PersonalTaskFindFirstArgs<ExtArgs>>): Prisma__PersonalTaskClient<$Result.GetResult<Prisma.$PersonalTaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PersonalTask that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalTaskFindFirstOrThrowArgs} args - Arguments to find a PersonalTask
     * @example
     * // Get one PersonalTask
     * const personalTask = await prisma.personalTask.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PersonalTaskFindFirstOrThrowArgs>(args?: SelectSubset<T, PersonalTaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__PersonalTaskClient<$Result.GetResult<Prisma.$PersonalTaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PersonalTasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalTaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PersonalTasks
     * const personalTasks = await prisma.personalTask.findMany()
     * 
     * // Get first 10 PersonalTasks
     * const personalTasks = await prisma.personalTask.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const personalTaskWithIdOnly = await prisma.personalTask.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PersonalTaskFindManyArgs>(args?: SelectSubset<T, PersonalTaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonalTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PersonalTask.
     * @param {PersonalTaskCreateArgs} args - Arguments to create a PersonalTask.
     * @example
     * // Create one PersonalTask
     * const PersonalTask = await prisma.personalTask.create({
     *   data: {
     *     // ... data to create a PersonalTask
     *   }
     * })
     * 
     */
    create<T extends PersonalTaskCreateArgs>(args: SelectSubset<T, PersonalTaskCreateArgs<ExtArgs>>): Prisma__PersonalTaskClient<$Result.GetResult<Prisma.$PersonalTaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PersonalTasks.
     * @param {PersonalTaskCreateManyArgs} args - Arguments to create many PersonalTasks.
     * @example
     * // Create many PersonalTasks
     * const personalTask = await prisma.personalTask.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PersonalTaskCreateManyArgs>(args?: SelectSubset<T, PersonalTaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PersonalTasks and returns the data saved in the database.
     * @param {PersonalTaskCreateManyAndReturnArgs} args - Arguments to create many PersonalTasks.
     * @example
     * // Create many PersonalTasks
     * const personalTask = await prisma.personalTask.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PersonalTasks and only return the `id`
     * const personalTaskWithIdOnly = await prisma.personalTask.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PersonalTaskCreateManyAndReturnArgs>(args?: SelectSubset<T, PersonalTaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonalTaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PersonalTask.
     * @param {PersonalTaskDeleteArgs} args - Arguments to delete one PersonalTask.
     * @example
     * // Delete one PersonalTask
     * const PersonalTask = await prisma.personalTask.delete({
     *   where: {
     *     // ... filter to delete one PersonalTask
     *   }
     * })
     * 
     */
    delete<T extends PersonalTaskDeleteArgs>(args: SelectSubset<T, PersonalTaskDeleteArgs<ExtArgs>>): Prisma__PersonalTaskClient<$Result.GetResult<Prisma.$PersonalTaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PersonalTask.
     * @param {PersonalTaskUpdateArgs} args - Arguments to update one PersonalTask.
     * @example
     * // Update one PersonalTask
     * const personalTask = await prisma.personalTask.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PersonalTaskUpdateArgs>(args: SelectSubset<T, PersonalTaskUpdateArgs<ExtArgs>>): Prisma__PersonalTaskClient<$Result.GetResult<Prisma.$PersonalTaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PersonalTasks.
     * @param {PersonalTaskDeleteManyArgs} args - Arguments to filter PersonalTasks to delete.
     * @example
     * // Delete a few PersonalTasks
     * const { count } = await prisma.personalTask.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PersonalTaskDeleteManyArgs>(args?: SelectSubset<T, PersonalTaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PersonalTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalTaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PersonalTasks
     * const personalTask = await prisma.personalTask.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PersonalTaskUpdateManyArgs>(args: SelectSubset<T, PersonalTaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PersonalTasks and returns the data updated in the database.
     * @param {PersonalTaskUpdateManyAndReturnArgs} args - Arguments to update many PersonalTasks.
     * @example
     * // Update many PersonalTasks
     * const personalTask = await prisma.personalTask.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PersonalTasks and only return the `id`
     * const personalTaskWithIdOnly = await prisma.personalTask.updateManyAndReturn({
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
    updateManyAndReturn<T extends PersonalTaskUpdateManyAndReturnArgs>(args: SelectSubset<T, PersonalTaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonalTaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PersonalTask.
     * @param {PersonalTaskUpsertArgs} args - Arguments to update or create a PersonalTask.
     * @example
     * // Update or create a PersonalTask
     * const personalTask = await prisma.personalTask.upsert({
     *   create: {
     *     // ... data to create a PersonalTask
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PersonalTask we want to update
     *   }
     * })
     */
    upsert<T extends PersonalTaskUpsertArgs>(args: SelectSubset<T, PersonalTaskUpsertArgs<ExtArgs>>): Prisma__PersonalTaskClient<$Result.GetResult<Prisma.$PersonalTaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PersonalTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalTaskCountArgs} args - Arguments to filter PersonalTasks to count.
     * @example
     * // Count the number of PersonalTasks
     * const count = await prisma.personalTask.count({
     *   where: {
     *     // ... the filter for the PersonalTasks we want to count
     *   }
     * })
    **/
    count<T extends PersonalTaskCountArgs>(
      args?: Subset<T, PersonalTaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonalTaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PersonalTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalTaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PersonalTaskAggregateArgs>(args: Subset<T, PersonalTaskAggregateArgs>): Prisma.PrismaPromise<GetPersonalTaskAggregateType<T>>

    /**
     * Group by PersonalTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalTaskGroupByArgs} args - Group by arguments.
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
      T extends PersonalTaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PersonalTaskGroupByArgs['orderBy'] }
        : { orderBy?: PersonalTaskGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PersonalTaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonalTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PersonalTask model
   */
  readonly fields: PersonalTaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PersonalTask.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PersonalTaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PersonalTask model
   */
  interface PersonalTaskFieldRefs {
    readonly id: FieldRef<"PersonalTask", 'String'>
    readonly title: FieldRef<"PersonalTask", 'String'>
    readonly description: FieldRef<"PersonalTask", 'String'>
    readonly dueDate: FieldRef<"PersonalTask", 'DateTime'>
    readonly dueTime: FieldRef<"PersonalTask", 'String'>
    readonly priority: FieldRef<"PersonalTask", 'String'>
    readonly completed: FieldRef<"PersonalTask", 'Boolean'>
    readonly userId: FieldRef<"PersonalTask", 'String'>
    readonly createdAt: FieldRef<"PersonalTask", 'DateTime'>
    readonly updatedAt: FieldRef<"PersonalTask", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PersonalTask findUnique
   */
  export type PersonalTaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalTask
     */
    select?: PersonalTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalTask
     */
    omit?: PersonalTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalTaskInclude<ExtArgs> | null
    /**
     * Filter, which PersonalTask to fetch.
     */
    where: PersonalTaskWhereUniqueInput
  }

  /**
   * PersonalTask findUniqueOrThrow
   */
  export type PersonalTaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalTask
     */
    select?: PersonalTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalTask
     */
    omit?: PersonalTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalTaskInclude<ExtArgs> | null
    /**
     * Filter, which PersonalTask to fetch.
     */
    where: PersonalTaskWhereUniqueInput
  }

  /**
   * PersonalTask findFirst
   */
  export type PersonalTaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalTask
     */
    select?: PersonalTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalTask
     */
    omit?: PersonalTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalTaskInclude<ExtArgs> | null
    /**
     * Filter, which PersonalTask to fetch.
     */
    where?: PersonalTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonalTasks to fetch.
     */
    orderBy?: PersonalTaskOrderByWithRelationInput | PersonalTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PersonalTasks.
     */
    cursor?: PersonalTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonalTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonalTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PersonalTasks.
     */
    distinct?: PersonalTaskScalarFieldEnum | PersonalTaskScalarFieldEnum[]
  }

  /**
   * PersonalTask findFirstOrThrow
   */
  export type PersonalTaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalTask
     */
    select?: PersonalTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalTask
     */
    omit?: PersonalTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalTaskInclude<ExtArgs> | null
    /**
     * Filter, which PersonalTask to fetch.
     */
    where?: PersonalTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonalTasks to fetch.
     */
    orderBy?: PersonalTaskOrderByWithRelationInput | PersonalTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PersonalTasks.
     */
    cursor?: PersonalTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonalTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonalTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PersonalTasks.
     */
    distinct?: PersonalTaskScalarFieldEnum | PersonalTaskScalarFieldEnum[]
  }

  /**
   * PersonalTask findMany
   */
  export type PersonalTaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalTask
     */
    select?: PersonalTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalTask
     */
    omit?: PersonalTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalTaskInclude<ExtArgs> | null
    /**
     * Filter, which PersonalTasks to fetch.
     */
    where?: PersonalTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonalTasks to fetch.
     */
    orderBy?: PersonalTaskOrderByWithRelationInput | PersonalTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PersonalTasks.
     */
    cursor?: PersonalTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonalTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonalTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PersonalTasks.
     */
    distinct?: PersonalTaskScalarFieldEnum | PersonalTaskScalarFieldEnum[]
  }

  /**
   * PersonalTask create
   */
  export type PersonalTaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalTask
     */
    select?: PersonalTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalTask
     */
    omit?: PersonalTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalTaskInclude<ExtArgs> | null
    /**
     * The data needed to create a PersonalTask.
     */
    data: XOR<PersonalTaskCreateInput, PersonalTaskUncheckedCreateInput>
  }

  /**
   * PersonalTask createMany
   */
  export type PersonalTaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PersonalTasks.
     */
    data: PersonalTaskCreateManyInput | PersonalTaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PersonalTask createManyAndReturn
   */
  export type PersonalTaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalTask
     */
    select?: PersonalTaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalTask
     */
    omit?: PersonalTaskOmit<ExtArgs> | null
    /**
     * The data used to create many PersonalTasks.
     */
    data: PersonalTaskCreateManyInput | PersonalTaskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalTaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PersonalTask update
   */
  export type PersonalTaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalTask
     */
    select?: PersonalTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalTask
     */
    omit?: PersonalTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalTaskInclude<ExtArgs> | null
    /**
     * The data needed to update a PersonalTask.
     */
    data: XOR<PersonalTaskUpdateInput, PersonalTaskUncheckedUpdateInput>
    /**
     * Choose, which PersonalTask to update.
     */
    where: PersonalTaskWhereUniqueInput
  }

  /**
   * PersonalTask updateMany
   */
  export type PersonalTaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PersonalTasks.
     */
    data: XOR<PersonalTaskUpdateManyMutationInput, PersonalTaskUncheckedUpdateManyInput>
    /**
     * Filter which PersonalTasks to update
     */
    where?: PersonalTaskWhereInput
    /**
     * Limit how many PersonalTasks to update.
     */
    limit?: number
  }

  /**
   * PersonalTask updateManyAndReturn
   */
  export type PersonalTaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalTask
     */
    select?: PersonalTaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalTask
     */
    omit?: PersonalTaskOmit<ExtArgs> | null
    /**
     * The data used to update PersonalTasks.
     */
    data: XOR<PersonalTaskUpdateManyMutationInput, PersonalTaskUncheckedUpdateManyInput>
    /**
     * Filter which PersonalTasks to update
     */
    where?: PersonalTaskWhereInput
    /**
     * Limit how many PersonalTasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalTaskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PersonalTask upsert
   */
  export type PersonalTaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalTask
     */
    select?: PersonalTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalTask
     */
    omit?: PersonalTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalTaskInclude<ExtArgs> | null
    /**
     * The filter to search for the PersonalTask to update in case it exists.
     */
    where: PersonalTaskWhereUniqueInput
    /**
     * In case the PersonalTask found by the `where` argument doesn't exist, create a new PersonalTask with this data.
     */
    create: XOR<PersonalTaskCreateInput, PersonalTaskUncheckedCreateInput>
    /**
     * In case the PersonalTask was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PersonalTaskUpdateInput, PersonalTaskUncheckedUpdateInput>
  }

  /**
   * PersonalTask delete
   */
  export type PersonalTaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalTask
     */
    select?: PersonalTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalTask
     */
    omit?: PersonalTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalTaskInclude<ExtArgs> | null
    /**
     * Filter which PersonalTask to delete.
     */
    where: PersonalTaskWhereUniqueInput
  }

  /**
   * PersonalTask deleteMany
   */
  export type PersonalTaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PersonalTasks to delete
     */
    where?: PersonalTaskWhereInput
    /**
     * Limit how many PersonalTasks to delete.
     */
    limit?: number
  }

  /**
   * PersonalTask without action
   */
  export type PersonalTaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalTask
     */
    select?: PersonalTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalTask
     */
    omit?: PersonalTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalTaskInclude<ExtArgs> | null
  }


  /**
   * Model GroupTask
   */

  export type AggregateGroupTask = {
    _count: GroupTaskCountAggregateOutputType | null
    _min: GroupTaskMinAggregateOutputType | null
    _max: GroupTaskMaxAggregateOutputType | null
  }

  export type GroupTaskMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    dueDate: Date | null
    dueTime: string | null
    priority: string | null
    tutorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GroupTaskMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    dueDate: Date | null
    dueTime: string | null
    priority: string | null
    tutorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GroupTaskCountAggregateOutputType = {
    id: number
    title: number
    description: number
    dueDate: number
    dueTime: number
    priority: number
    tutorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GroupTaskMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    dueDate?: true
    dueTime?: true
    priority?: true
    tutorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GroupTaskMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    dueDate?: true
    dueTime?: true
    priority?: true
    tutorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GroupTaskCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    dueDate?: true
    dueTime?: true
    priority?: true
    tutorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GroupTaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupTask to aggregate.
     */
    where?: GroupTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupTasks to fetch.
     */
    orderBy?: GroupTaskOrderByWithRelationInput | GroupTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GroupTasks
    **/
    _count?: true | GroupTaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupTaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupTaskMaxAggregateInputType
  }

  export type GetGroupTaskAggregateType<T extends GroupTaskAggregateArgs> = {
        [P in keyof T & keyof AggregateGroupTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroupTask[P]>
      : GetScalarType<T[P], AggregateGroupTask[P]>
  }




  export type GroupTaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupTaskWhereInput
    orderBy?: GroupTaskOrderByWithAggregationInput | GroupTaskOrderByWithAggregationInput[]
    by: GroupTaskScalarFieldEnum[] | GroupTaskScalarFieldEnum
    having?: GroupTaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupTaskCountAggregateInputType | true
    _min?: GroupTaskMinAggregateInputType
    _max?: GroupTaskMaxAggregateInputType
  }

  export type GroupTaskGroupByOutputType = {
    id: string
    title: string
    description: string
    dueDate: Date | null
    dueTime: string | null
    priority: string
    tutorId: string
    createdAt: Date
    updatedAt: Date
    _count: GroupTaskCountAggregateOutputType | null
    _min: GroupTaskMinAggregateOutputType | null
    _max: GroupTaskMaxAggregateOutputType | null
  }

  type GetGroupTaskGroupByPayload<T extends GroupTaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupTaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupTaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupTaskGroupByOutputType[P]>
            : GetScalarType<T[P], GroupTaskGroupByOutputType[P]>
        }
      >
    >


  export type GroupTaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    dueDate?: boolean
    dueTime?: boolean
    priority?: boolean
    tutorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tutor?: boolean | UserDefaultArgs<ExtArgs>
    assignments?: boolean | GroupTask$assignmentsArgs<ExtArgs>
    _count?: boolean | GroupTaskCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupTask"]>

  export type GroupTaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    dueDate?: boolean
    dueTime?: boolean
    priority?: boolean
    tutorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tutor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupTask"]>

  export type GroupTaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    dueDate?: boolean
    dueTime?: boolean
    priority?: boolean
    tutorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tutor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupTask"]>

  export type GroupTaskSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    dueDate?: boolean
    dueTime?: boolean
    priority?: boolean
    tutorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GroupTaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "dueDate" | "dueTime" | "priority" | "tutorId" | "createdAt" | "updatedAt", ExtArgs["result"]["groupTask"]>
  export type GroupTaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutor?: boolean | UserDefaultArgs<ExtArgs>
    assignments?: boolean | GroupTask$assignmentsArgs<ExtArgs>
    _count?: boolean | GroupTaskCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GroupTaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutor?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GroupTaskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutor?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GroupTaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GroupTask"
    objects: {
      tutor: Prisma.$UserPayload<ExtArgs>
      assignments: Prisma.$AssignmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      dueDate: Date | null
      dueTime: string | null
      priority: string
      tutorId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["groupTask"]>
    composites: {}
  }

  type GroupTaskGetPayload<S extends boolean | null | undefined | GroupTaskDefaultArgs> = $Result.GetResult<Prisma.$GroupTaskPayload, S>

  type GroupTaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupTaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupTaskCountAggregateInputType | true
    }

  export interface GroupTaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GroupTask'], meta: { name: 'GroupTask' } }
    /**
     * Find zero or one GroupTask that matches the filter.
     * @param {GroupTaskFindUniqueArgs} args - Arguments to find a GroupTask
     * @example
     * // Get one GroupTask
     * const groupTask = await prisma.groupTask.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupTaskFindUniqueArgs>(args: SelectSubset<T, GroupTaskFindUniqueArgs<ExtArgs>>): Prisma__GroupTaskClient<$Result.GetResult<Prisma.$GroupTaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GroupTask that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupTaskFindUniqueOrThrowArgs} args - Arguments to find a GroupTask
     * @example
     * // Get one GroupTask
     * const groupTask = await prisma.groupTask.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupTaskFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupTaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupTaskClient<$Result.GetResult<Prisma.$GroupTaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupTask that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupTaskFindFirstArgs} args - Arguments to find a GroupTask
     * @example
     * // Get one GroupTask
     * const groupTask = await prisma.groupTask.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupTaskFindFirstArgs>(args?: SelectSubset<T, GroupTaskFindFirstArgs<ExtArgs>>): Prisma__GroupTaskClient<$Result.GetResult<Prisma.$GroupTaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupTask that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupTaskFindFirstOrThrowArgs} args - Arguments to find a GroupTask
     * @example
     * // Get one GroupTask
     * const groupTask = await prisma.groupTask.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupTaskFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupTaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupTaskClient<$Result.GetResult<Prisma.$GroupTaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GroupTasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupTaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GroupTasks
     * const groupTasks = await prisma.groupTask.findMany()
     * 
     * // Get first 10 GroupTasks
     * const groupTasks = await prisma.groupTask.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupTaskWithIdOnly = await prisma.groupTask.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupTaskFindManyArgs>(args?: SelectSubset<T, GroupTaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GroupTask.
     * @param {GroupTaskCreateArgs} args - Arguments to create a GroupTask.
     * @example
     * // Create one GroupTask
     * const GroupTask = await prisma.groupTask.create({
     *   data: {
     *     // ... data to create a GroupTask
     *   }
     * })
     * 
     */
    create<T extends GroupTaskCreateArgs>(args: SelectSubset<T, GroupTaskCreateArgs<ExtArgs>>): Prisma__GroupTaskClient<$Result.GetResult<Prisma.$GroupTaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GroupTasks.
     * @param {GroupTaskCreateManyArgs} args - Arguments to create many GroupTasks.
     * @example
     * // Create many GroupTasks
     * const groupTask = await prisma.groupTask.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupTaskCreateManyArgs>(args?: SelectSubset<T, GroupTaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GroupTasks and returns the data saved in the database.
     * @param {GroupTaskCreateManyAndReturnArgs} args - Arguments to create many GroupTasks.
     * @example
     * // Create many GroupTasks
     * const groupTask = await prisma.groupTask.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GroupTasks and only return the `id`
     * const groupTaskWithIdOnly = await prisma.groupTask.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupTaskCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupTaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupTaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GroupTask.
     * @param {GroupTaskDeleteArgs} args - Arguments to delete one GroupTask.
     * @example
     * // Delete one GroupTask
     * const GroupTask = await prisma.groupTask.delete({
     *   where: {
     *     // ... filter to delete one GroupTask
     *   }
     * })
     * 
     */
    delete<T extends GroupTaskDeleteArgs>(args: SelectSubset<T, GroupTaskDeleteArgs<ExtArgs>>): Prisma__GroupTaskClient<$Result.GetResult<Prisma.$GroupTaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GroupTask.
     * @param {GroupTaskUpdateArgs} args - Arguments to update one GroupTask.
     * @example
     * // Update one GroupTask
     * const groupTask = await prisma.groupTask.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupTaskUpdateArgs>(args: SelectSubset<T, GroupTaskUpdateArgs<ExtArgs>>): Prisma__GroupTaskClient<$Result.GetResult<Prisma.$GroupTaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GroupTasks.
     * @param {GroupTaskDeleteManyArgs} args - Arguments to filter GroupTasks to delete.
     * @example
     * // Delete a few GroupTasks
     * const { count } = await prisma.groupTask.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupTaskDeleteManyArgs>(args?: SelectSubset<T, GroupTaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupTaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GroupTasks
     * const groupTask = await prisma.groupTask.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupTaskUpdateManyArgs>(args: SelectSubset<T, GroupTaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupTasks and returns the data updated in the database.
     * @param {GroupTaskUpdateManyAndReturnArgs} args - Arguments to update many GroupTasks.
     * @example
     * // Update many GroupTasks
     * const groupTask = await prisma.groupTask.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GroupTasks and only return the `id`
     * const groupTaskWithIdOnly = await prisma.groupTask.updateManyAndReturn({
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
    updateManyAndReturn<T extends GroupTaskUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupTaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupTaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GroupTask.
     * @param {GroupTaskUpsertArgs} args - Arguments to update or create a GroupTask.
     * @example
     * // Update or create a GroupTask
     * const groupTask = await prisma.groupTask.upsert({
     *   create: {
     *     // ... data to create a GroupTask
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GroupTask we want to update
     *   }
     * })
     */
    upsert<T extends GroupTaskUpsertArgs>(args: SelectSubset<T, GroupTaskUpsertArgs<ExtArgs>>): Prisma__GroupTaskClient<$Result.GetResult<Prisma.$GroupTaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GroupTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupTaskCountArgs} args - Arguments to filter GroupTasks to count.
     * @example
     * // Count the number of GroupTasks
     * const count = await prisma.groupTask.count({
     *   where: {
     *     // ... the filter for the GroupTasks we want to count
     *   }
     * })
    **/
    count<T extends GroupTaskCountArgs>(
      args?: Subset<T, GroupTaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupTaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GroupTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupTaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GroupTaskAggregateArgs>(args: Subset<T, GroupTaskAggregateArgs>): Prisma.PrismaPromise<GetGroupTaskAggregateType<T>>

    /**
     * Group by GroupTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupTaskGroupByArgs} args - Group by arguments.
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
      T extends GroupTaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupTaskGroupByArgs['orderBy'] }
        : { orderBy?: GroupTaskGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GroupTaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GroupTask model
   */
  readonly fields: GroupTaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GroupTask.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupTaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tutor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    assignments<T extends GroupTask$assignmentsArgs<ExtArgs> = {}>(args?: Subset<T, GroupTask$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the GroupTask model
   */
  interface GroupTaskFieldRefs {
    readonly id: FieldRef<"GroupTask", 'String'>
    readonly title: FieldRef<"GroupTask", 'String'>
    readonly description: FieldRef<"GroupTask", 'String'>
    readonly dueDate: FieldRef<"GroupTask", 'DateTime'>
    readonly dueTime: FieldRef<"GroupTask", 'String'>
    readonly priority: FieldRef<"GroupTask", 'String'>
    readonly tutorId: FieldRef<"GroupTask", 'String'>
    readonly createdAt: FieldRef<"GroupTask", 'DateTime'>
    readonly updatedAt: FieldRef<"GroupTask", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GroupTask findUnique
   */
  export type GroupTaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupTask
     */
    select?: GroupTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupTask
     */
    omit?: GroupTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupTaskInclude<ExtArgs> | null
    /**
     * Filter, which GroupTask to fetch.
     */
    where: GroupTaskWhereUniqueInput
  }

  /**
   * GroupTask findUniqueOrThrow
   */
  export type GroupTaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupTask
     */
    select?: GroupTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupTask
     */
    omit?: GroupTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupTaskInclude<ExtArgs> | null
    /**
     * Filter, which GroupTask to fetch.
     */
    where: GroupTaskWhereUniqueInput
  }

  /**
   * GroupTask findFirst
   */
  export type GroupTaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupTask
     */
    select?: GroupTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupTask
     */
    omit?: GroupTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupTaskInclude<ExtArgs> | null
    /**
     * Filter, which GroupTask to fetch.
     */
    where?: GroupTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupTasks to fetch.
     */
    orderBy?: GroupTaskOrderByWithRelationInput | GroupTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupTasks.
     */
    cursor?: GroupTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupTasks.
     */
    distinct?: GroupTaskScalarFieldEnum | GroupTaskScalarFieldEnum[]
  }

  /**
   * GroupTask findFirstOrThrow
   */
  export type GroupTaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupTask
     */
    select?: GroupTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupTask
     */
    omit?: GroupTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupTaskInclude<ExtArgs> | null
    /**
     * Filter, which GroupTask to fetch.
     */
    where?: GroupTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupTasks to fetch.
     */
    orderBy?: GroupTaskOrderByWithRelationInput | GroupTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupTasks.
     */
    cursor?: GroupTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupTasks.
     */
    distinct?: GroupTaskScalarFieldEnum | GroupTaskScalarFieldEnum[]
  }

  /**
   * GroupTask findMany
   */
  export type GroupTaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupTask
     */
    select?: GroupTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupTask
     */
    omit?: GroupTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupTaskInclude<ExtArgs> | null
    /**
     * Filter, which GroupTasks to fetch.
     */
    where?: GroupTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupTasks to fetch.
     */
    orderBy?: GroupTaskOrderByWithRelationInput | GroupTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GroupTasks.
     */
    cursor?: GroupTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupTasks.
     */
    distinct?: GroupTaskScalarFieldEnum | GroupTaskScalarFieldEnum[]
  }

  /**
   * GroupTask create
   */
  export type GroupTaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupTask
     */
    select?: GroupTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupTask
     */
    omit?: GroupTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupTaskInclude<ExtArgs> | null
    /**
     * The data needed to create a GroupTask.
     */
    data: XOR<GroupTaskCreateInput, GroupTaskUncheckedCreateInput>
  }

  /**
   * GroupTask createMany
   */
  export type GroupTaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GroupTasks.
     */
    data: GroupTaskCreateManyInput | GroupTaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GroupTask createManyAndReturn
   */
  export type GroupTaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupTask
     */
    select?: GroupTaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroupTask
     */
    omit?: GroupTaskOmit<ExtArgs> | null
    /**
     * The data used to create many GroupTasks.
     */
    data: GroupTaskCreateManyInput | GroupTaskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupTaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroupTask update
   */
  export type GroupTaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupTask
     */
    select?: GroupTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupTask
     */
    omit?: GroupTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupTaskInclude<ExtArgs> | null
    /**
     * The data needed to update a GroupTask.
     */
    data: XOR<GroupTaskUpdateInput, GroupTaskUncheckedUpdateInput>
    /**
     * Choose, which GroupTask to update.
     */
    where: GroupTaskWhereUniqueInput
  }

  /**
   * GroupTask updateMany
   */
  export type GroupTaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GroupTasks.
     */
    data: XOR<GroupTaskUpdateManyMutationInput, GroupTaskUncheckedUpdateManyInput>
    /**
     * Filter which GroupTasks to update
     */
    where?: GroupTaskWhereInput
    /**
     * Limit how many GroupTasks to update.
     */
    limit?: number
  }

  /**
   * GroupTask updateManyAndReturn
   */
  export type GroupTaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupTask
     */
    select?: GroupTaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroupTask
     */
    omit?: GroupTaskOmit<ExtArgs> | null
    /**
     * The data used to update GroupTasks.
     */
    data: XOR<GroupTaskUpdateManyMutationInput, GroupTaskUncheckedUpdateManyInput>
    /**
     * Filter which GroupTasks to update
     */
    where?: GroupTaskWhereInput
    /**
     * Limit how many GroupTasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupTaskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroupTask upsert
   */
  export type GroupTaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupTask
     */
    select?: GroupTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupTask
     */
    omit?: GroupTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupTaskInclude<ExtArgs> | null
    /**
     * The filter to search for the GroupTask to update in case it exists.
     */
    where: GroupTaskWhereUniqueInput
    /**
     * In case the GroupTask found by the `where` argument doesn't exist, create a new GroupTask with this data.
     */
    create: XOR<GroupTaskCreateInput, GroupTaskUncheckedCreateInput>
    /**
     * In case the GroupTask was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupTaskUpdateInput, GroupTaskUncheckedUpdateInput>
  }

  /**
   * GroupTask delete
   */
  export type GroupTaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupTask
     */
    select?: GroupTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupTask
     */
    omit?: GroupTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupTaskInclude<ExtArgs> | null
    /**
     * Filter which GroupTask to delete.
     */
    where: GroupTaskWhereUniqueInput
  }

  /**
   * GroupTask deleteMany
   */
  export type GroupTaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupTasks to delete
     */
    where?: GroupTaskWhereInput
    /**
     * Limit how many GroupTasks to delete.
     */
    limit?: number
  }

  /**
   * GroupTask.assignments
   */
  export type GroupTask$assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    where?: AssignmentWhereInput
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    cursor?: AssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * GroupTask without action
   */
  export type GroupTaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupTask
     */
    select?: GroupTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupTask
     */
    omit?: GroupTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupTaskInclude<ExtArgs> | null
  }


  /**
   * Model Assignment
   */

  export type AggregateAssignment = {
    _count: AssignmentCountAggregateOutputType | null
    _min: AssignmentMinAggregateOutputType | null
    _max: AssignmentMaxAggregateOutputType | null
  }

  export type AssignmentMinAggregateOutputType = {
    id: string | null
    taskId: string | null
    userId: string | null
    submitted: boolean | null
    createdAt: Date | null
  }

  export type AssignmentMaxAggregateOutputType = {
    id: string | null
    taskId: string | null
    userId: string | null
    submitted: boolean | null
    createdAt: Date | null
  }

  export type AssignmentCountAggregateOutputType = {
    id: number
    taskId: number
    userId: number
    submitted: number
    createdAt: number
    _all: number
  }


  export type AssignmentMinAggregateInputType = {
    id?: true
    taskId?: true
    userId?: true
    submitted?: true
    createdAt?: true
  }

  export type AssignmentMaxAggregateInputType = {
    id?: true
    taskId?: true
    userId?: true
    submitted?: true
    createdAt?: true
  }

  export type AssignmentCountAggregateInputType = {
    id?: true
    taskId?: true
    userId?: true
    submitted?: true
    createdAt?: true
    _all?: true
  }

  export type AssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assignment to aggregate.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Assignments
    **/
    _count?: true | AssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssignmentMaxAggregateInputType
  }

  export type GetAssignmentAggregateType<T extends AssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssignment[P]>
      : GetScalarType<T[P], AggregateAssignment[P]>
  }




  export type AssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentWhereInput
    orderBy?: AssignmentOrderByWithAggregationInput | AssignmentOrderByWithAggregationInput[]
    by: AssignmentScalarFieldEnum[] | AssignmentScalarFieldEnum
    having?: AssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssignmentCountAggregateInputType | true
    _min?: AssignmentMinAggregateInputType
    _max?: AssignmentMaxAggregateInputType
  }

  export type AssignmentGroupByOutputType = {
    id: string
    taskId: string
    userId: string
    submitted: boolean
    createdAt: Date
    _count: AssignmentCountAggregateOutputType | null
    _min: AssignmentMinAggregateOutputType | null
    _max: AssignmentMaxAggregateOutputType | null
  }

  type GetAssignmentGroupByPayload<T extends AssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], AssignmentGroupByOutputType[P]>
        }
      >
    >


  export type AssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    userId?: boolean
    submitted?: boolean
    createdAt?: boolean
    task?: boolean | GroupTaskDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignment"]>

  export type AssignmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    userId?: boolean
    submitted?: boolean
    createdAt?: boolean
    task?: boolean | GroupTaskDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignment"]>

  export type AssignmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    userId?: boolean
    submitted?: boolean
    createdAt?: boolean
    task?: boolean | GroupTaskDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignment"]>

  export type AssignmentSelectScalar = {
    id?: boolean
    taskId?: boolean
    userId?: boolean
    submitted?: boolean
    createdAt?: boolean
  }

  export type AssignmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "taskId" | "userId" | "submitted" | "createdAt", ExtArgs["result"]["assignment"]>
  export type AssignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | GroupTaskDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AssignmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | GroupTaskDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AssignmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | GroupTaskDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Assignment"
    objects: {
      task: Prisma.$GroupTaskPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      taskId: string
      userId: string
      submitted: boolean
      createdAt: Date
    }, ExtArgs["result"]["assignment"]>
    composites: {}
  }

  type AssignmentGetPayload<S extends boolean | null | undefined | AssignmentDefaultArgs> = $Result.GetResult<Prisma.$AssignmentPayload, S>

  type AssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssignmentCountAggregateInputType | true
    }

  export interface AssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Assignment'], meta: { name: 'Assignment' } }
    /**
     * Find zero or one Assignment that matches the filter.
     * @param {AssignmentFindUniqueArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssignmentFindUniqueArgs>(args: SelectSubset<T, AssignmentFindUniqueArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Assignment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssignmentFindUniqueOrThrowArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentFindFirstArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssignmentFindFirstArgs>(args?: SelectSubset<T, AssignmentFindFirstArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentFindFirstOrThrowArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Assignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Assignments
     * const assignments = await prisma.assignment.findMany()
     * 
     * // Get first 10 Assignments
     * const assignments = await prisma.assignment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assignmentWithIdOnly = await prisma.assignment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssignmentFindManyArgs>(args?: SelectSubset<T, AssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Assignment.
     * @param {AssignmentCreateArgs} args - Arguments to create a Assignment.
     * @example
     * // Create one Assignment
     * const Assignment = await prisma.assignment.create({
     *   data: {
     *     // ... data to create a Assignment
     *   }
     * })
     * 
     */
    create<T extends AssignmentCreateArgs>(args: SelectSubset<T, AssignmentCreateArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Assignments.
     * @param {AssignmentCreateManyArgs} args - Arguments to create many Assignments.
     * @example
     * // Create many Assignments
     * const assignment = await prisma.assignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssignmentCreateManyArgs>(args?: SelectSubset<T, AssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Assignments and returns the data saved in the database.
     * @param {AssignmentCreateManyAndReturnArgs} args - Arguments to create many Assignments.
     * @example
     * // Create many Assignments
     * const assignment = await prisma.assignment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Assignments and only return the `id`
     * const assignmentWithIdOnly = await prisma.assignment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssignmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AssignmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Assignment.
     * @param {AssignmentDeleteArgs} args - Arguments to delete one Assignment.
     * @example
     * // Delete one Assignment
     * const Assignment = await prisma.assignment.delete({
     *   where: {
     *     // ... filter to delete one Assignment
     *   }
     * })
     * 
     */
    delete<T extends AssignmentDeleteArgs>(args: SelectSubset<T, AssignmentDeleteArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Assignment.
     * @param {AssignmentUpdateArgs} args - Arguments to update one Assignment.
     * @example
     * // Update one Assignment
     * const assignment = await prisma.assignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssignmentUpdateArgs>(args: SelectSubset<T, AssignmentUpdateArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Assignments.
     * @param {AssignmentDeleteManyArgs} args - Arguments to filter Assignments to delete.
     * @example
     * // Delete a few Assignments
     * const { count } = await prisma.assignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssignmentDeleteManyArgs>(args?: SelectSubset<T, AssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Assignments
     * const assignment = await prisma.assignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssignmentUpdateManyArgs>(args: SelectSubset<T, AssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assignments and returns the data updated in the database.
     * @param {AssignmentUpdateManyAndReturnArgs} args - Arguments to update many Assignments.
     * @example
     * // Update many Assignments
     * const assignment = await prisma.assignment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Assignments and only return the `id`
     * const assignmentWithIdOnly = await prisma.assignment.updateManyAndReturn({
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
    updateManyAndReturn<T extends AssignmentUpdateManyAndReturnArgs>(args: SelectSubset<T, AssignmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Assignment.
     * @param {AssignmentUpsertArgs} args - Arguments to update or create a Assignment.
     * @example
     * // Update or create a Assignment
     * const assignment = await prisma.assignment.upsert({
     *   create: {
     *     // ... data to create a Assignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Assignment we want to update
     *   }
     * })
     */
    upsert<T extends AssignmentUpsertArgs>(args: SelectSubset<T, AssignmentUpsertArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Assignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentCountArgs} args - Arguments to filter Assignments to count.
     * @example
     * // Count the number of Assignments
     * const count = await prisma.assignment.count({
     *   where: {
     *     // ... the filter for the Assignments we want to count
     *   }
     * })
    **/
    count<T extends AssignmentCountArgs>(
      args?: Subset<T, AssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Assignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AssignmentAggregateArgs>(args: Subset<T, AssignmentAggregateArgs>): Prisma.PrismaPromise<GetAssignmentAggregateType<T>>

    /**
     * Group by Assignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentGroupByArgs} args - Group by arguments.
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
      T extends AssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssignmentGroupByArgs['orderBy'] }
        : { orderBy?: AssignmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Assignment model
   */
  readonly fields: AssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Assignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends GroupTaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupTaskDefaultArgs<ExtArgs>>): Prisma__GroupTaskClient<$Result.GetResult<Prisma.$GroupTaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Assignment model
   */
  interface AssignmentFieldRefs {
    readonly id: FieldRef<"Assignment", 'String'>
    readonly taskId: FieldRef<"Assignment", 'String'>
    readonly userId: FieldRef<"Assignment", 'String'>
    readonly submitted: FieldRef<"Assignment", 'Boolean'>
    readonly createdAt: FieldRef<"Assignment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Assignment findUnique
   */
  export type AssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment findUniqueOrThrow
   */
  export type AssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment findFirst
   */
  export type AssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assignments.
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assignments.
     */
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Assignment findFirstOrThrow
   */
  export type AssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assignments.
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assignments.
     */
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Assignment findMany
   */
  export type AssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignments to fetch.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Assignments.
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assignments.
     */
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Assignment create
   */
  export type AssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Assignment.
     */
    data: XOR<AssignmentCreateInput, AssignmentUncheckedCreateInput>
  }

  /**
   * Assignment createMany
   */
  export type AssignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Assignments.
     */
    data: AssignmentCreateManyInput | AssignmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Assignment createManyAndReturn
   */
  export type AssignmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * The data used to create many Assignments.
     */
    data: AssignmentCreateManyInput | AssignmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Assignment update
   */
  export type AssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Assignment.
     */
    data: XOR<AssignmentUpdateInput, AssignmentUncheckedUpdateInput>
    /**
     * Choose, which Assignment to update.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment updateMany
   */
  export type AssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Assignments.
     */
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyInput>
    /**
     * Filter which Assignments to update
     */
    where?: AssignmentWhereInput
    /**
     * Limit how many Assignments to update.
     */
    limit?: number
  }

  /**
   * Assignment updateManyAndReturn
   */
  export type AssignmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * The data used to update Assignments.
     */
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyInput>
    /**
     * Filter which Assignments to update
     */
    where?: AssignmentWhereInput
    /**
     * Limit how many Assignments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Assignment upsert
   */
  export type AssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Assignment to update in case it exists.
     */
    where: AssignmentWhereUniqueInput
    /**
     * In case the Assignment found by the `where` argument doesn't exist, create a new Assignment with this data.
     */
    create: XOR<AssignmentCreateInput, AssignmentUncheckedCreateInput>
    /**
     * In case the Assignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssignmentUpdateInput, AssignmentUncheckedUpdateInput>
  }

  /**
   * Assignment delete
   */
  export type AssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter which Assignment to delete.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment deleteMany
   */
  export type AssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assignments to delete
     */
    where?: AssignmentWhereInput
    /**
     * Limit how many Assignments to delete.
     */
    limit?: number
  }

  /**
   * Assignment without action
   */
  export type AssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
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
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PersonalTaskScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    dueDate: 'dueDate',
    dueTime: 'dueTime',
    priority: 'priority',
    completed: 'completed',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PersonalTaskScalarFieldEnum = (typeof PersonalTaskScalarFieldEnum)[keyof typeof PersonalTaskScalarFieldEnum]


  export const GroupTaskScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    dueDate: 'dueDate',
    dueTime: 'dueTime',
    priority: 'priority',
    tutorId: 'tutorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GroupTaskScalarFieldEnum = (typeof GroupTaskScalarFieldEnum)[keyof typeof GroupTaskScalarFieldEnum]


  export const AssignmentScalarFieldEnum: {
    id: 'id',
    taskId: 'taskId',
    userId: 'userId',
    submitted: 'submitted',
    createdAt: 'createdAt'
  };

  export type AssignmentScalarFieldEnum = (typeof AssignmentScalarFieldEnum)[keyof typeof AssignmentScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    status?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    personalTasks?: PersonalTaskListRelationFilter
    groupTasks?: GroupTaskListRelationFilter
    assignments?: AssignmentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    personalTasks?: PersonalTaskOrderByRelationAggregateInput
    groupTasks?: GroupTaskOrderByRelationAggregateInput
    assignments?: AssignmentOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    status?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    personalTasks?: PersonalTaskListRelationFilter
    groupTasks?: GroupTaskListRelationFilter
    assignments?: AssignmentListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    status?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PersonalTaskWhereInput = {
    AND?: PersonalTaskWhereInput | PersonalTaskWhereInput[]
    OR?: PersonalTaskWhereInput[]
    NOT?: PersonalTaskWhereInput | PersonalTaskWhereInput[]
    id?: StringFilter<"PersonalTask"> | string
    title?: StringFilter<"PersonalTask"> | string
    description?: StringFilter<"PersonalTask"> | string
    dueDate?: DateTimeNullableFilter<"PersonalTask"> | Date | string | null
    dueTime?: StringNullableFilter<"PersonalTask"> | string | null
    priority?: StringFilter<"PersonalTask"> | string
    completed?: BoolFilter<"PersonalTask"> | boolean
    userId?: StringFilter<"PersonalTask"> | string
    createdAt?: DateTimeFilter<"PersonalTask"> | Date | string
    updatedAt?: DateTimeFilter<"PersonalTask"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PersonalTaskOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    dueDate?: SortOrderInput | SortOrder
    dueTime?: SortOrderInput | SortOrder
    priority?: SortOrder
    completed?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PersonalTaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PersonalTaskWhereInput | PersonalTaskWhereInput[]
    OR?: PersonalTaskWhereInput[]
    NOT?: PersonalTaskWhereInput | PersonalTaskWhereInput[]
    title?: StringFilter<"PersonalTask"> | string
    description?: StringFilter<"PersonalTask"> | string
    dueDate?: DateTimeNullableFilter<"PersonalTask"> | Date | string | null
    dueTime?: StringNullableFilter<"PersonalTask"> | string | null
    priority?: StringFilter<"PersonalTask"> | string
    completed?: BoolFilter<"PersonalTask"> | boolean
    userId?: StringFilter<"PersonalTask"> | string
    createdAt?: DateTimeFilter<"PersonalTask"> | Date | string
    updatedAt?: DateTimeFilter<"PersonalTask"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PersonalTaskOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    dueDate?: SortOrderInput | SortOrder
    dueTime?: SortOrderInput | SortOrder
    priority?: SortOrder
    completed?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PersonalTaskCountOrderByAggregateInput
    _max?: PersonalTaskMaxOrderByAggregateInput
    _min?: PersonalTaskMinOrderByAggregateInput
  }

  export type PersonalTaskScalarWhereWithAggregatesInput = {
    AND?: PersonalTaskScalarWhereWithAggregatesInput | PersonalTaskScalarWhereWithAggregatesInput[]
    OR?: PersonalTaskScalarWhereWithAggregatesInput[]
    NOT?: PersonalTaskScalarWhereWithAggregatesInput | PersonalTaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PersonalTask"> | string
    title?: StringWithAggregatesFilter<"PersonalTask"> | string
    description?: StringWithAggregatesFilter<"PersonalTask"> | string
    dueDate?: DateTimeNullableWithAggregatesFilter<"PersonalTask"> | Date | string | null
    dueTime?: StringNullableWithAggregatesFilter<"PersonalTask"> | string | null
    priority?: StringWithAggregatesFilter<"PersonalTask"> | string
    completed?: BoolWithAggregatesFilter<"PersonalTask"> | boolean
    userId?: StringWithAggregatesFilter<"PersonalTask"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PersonalTask"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PersonalTask"> | Date | string
  }

  export type GroupTaskWhereInput = {
    AND?: GroupTaskWhereInput | GroupTaskWhereInput[]
    OR?: GroupTaskWhereInput[]
    NOT?: GroupTaskWhereInput | GroupTaskWhereInput[]
    id?: StringFilter<"GroupTask"> | string
    title?: StringFilter<"GroupTask"> | string
    description?: StringFilter<"GroupTask"> | string
    dueDate?: DateTimeNullableFilter<"GroupTask"> | Date | string | null
    dueTime?: StringNullableFilter<"GroupTask"> | string | null
    priority?: StringFilter<"GroupTask"> | string
    tutorId?: StringFilter<"GroupTask"> | string
    createdAt?: DateTimeFilter<"GroupTask"> | Date | string
    updatedAt?: DateTimeFilter<"GroupTask"> | Date | string
    tutor?: XOR<UserScalarRelationFilter, UserWhereInput>
    assignments?: AssignmentListRelationFilter
  }

  export type GroupTaskOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    dueDate?: SortOrderInput | SortOrder
    dueTime?: SortOrderInput | SortOrder
    priority?: SortOrder
    tutorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tutor?: UserOrderByWithRelationInput
    assignments?: AssignmentOrderByRelationAggregateInput
  }

  export type GroupTaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GroupTaskWhereInput | GroupTaskWhereInput[]
    OR?: GroupTaskWhereInput[]
    NOT?: GroupTaskWhereInput | GroupTaskWhereInput[]
    title?: StringFilter<"GroupTask"> | string
    description?: StringFilter<"GroupTask"> | string
    dueDate?: DateTimeNullableFilter<"GroupTask"> | Date | string | null
    dueTime?: StringNullableFilter<"GroupTask"> | string | null
    priority?: StringFilter<"GroupTask"> | string
    tutorId?: StringFilter<"GroupTask"> | string
    createdAt?: DateTimeFilter<"GroupTask"> | Date | string
    updatedAt?: DateTimeFilter<"GroupTask"> | Date | string
    tutor?: XOR<UserScalarRelationFilter, UserWhereInput>
    assignments?: AssignmentListRelationFilter
  }, "id">

  export type GroupTaskOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    dueDate?: SortOrderInput | SortOrder
    dueTime?: SortOrderInput | SortOrder
    priority?: SortOrder
    tutorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GroupTaskCountOrderByAggregateInput
    _max?: GroupTaskMaxOrderByAggregateInput
    _min?: GroupTaskMinOrderByAggregateInput
  }

  export type GroupTaskScalarWhereWithAggregatesInput = {
    AND?: GroupTaskScalarWhereWithAggregatesInput | GroupTaskScalarWhereWithAggregatesInput[]
    OR?: GroupTaskScalarWhereWithAggregatesInput[]
    NOT?: GroupTaskScalarWhereWithAggregatesInput | GroupTaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GroupTask"> | string
    title?: StringWithAggregatesFilter<"GroupTask"> | string
    description?: StringWithAggregatesFilter<"GroupTask"> | string
    dueDate?: DateTimeNullableWithAggregatesFilter<"GroupTask"> | Date | string | null
    dueTime?: StringNullableWithAggregatesFilter<"GroupTask"> | string | null
    priority?: StringWithAggregatesFilter<"GroupTask"> | string
    tutorId?: StringWithAggregatesFilter<"GroupTask"> | string
    createdAt?: DateTimeWithAggregatesFilter<"GroupTask"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GroupTask"> | Date | string
  }

  export type AssignmentWhereInput = {
    AND?: AssignmentWhereInput | AssignmentWhereInput[]
    OR?: AssignmentWhereInput[]
    NOT?: AssignmentWhereInput | AssignmentWhereInput[]
    id?: StringFilter<"Assignment"> | string
    taskId?: StringFilter<"Assignment"> | string
    userId?: StringFilter<"Assignment"> | string
    submitted?: BoolFilter<"Assignment"> | boolean
    createdAt?: DateTimeFilter<"Assignment"> | Date | string
    task?: XOR<GroupTaskScalarRelationFilter, GroupTaskWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AssignmentOrderByWithRelationInput = {
    id?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    submitted?: SortOrder
    createdAt?: SortOrder
    task?: GroupTaskOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type AssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    taskId_userId?: AssignmentTaskIdUserIdCompoundUniqueInput
    AND?: AssignmentWhereInput | AssignmentWhereInput[]
    OR?: AssignmentWhereInput[]
    NOT?: AssignmentWhereInput | AssignmentWhereInput[]
    taskId?: StringFilter<"Assignment"> | string
    userId?: StringFilter<"Assignment"> | string
    submitted?: BoolFilter<"Assignment"> | boolean
    createdAt?: DateTimeFilter<"Assignment"> | Date | string
    task?: XOR<GroupTaskScalarRelationFilter, GroupTaskWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "taskId_userId">

  export type AssignmentOrderByWithAggregationInput = {
    id?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    submitted?: SortOrder
    createdAt?: SortOrder
    _count?: AssignmentCountOrderByAggregateInput
    _max?: AssignmentMaxOrderByAggregateInput
    _min?: AssignmentMinOrderByAggregateInput
  }

  export type AssignmentScalarWhereWithAggregatesInput = {
    AND?: AssignmentScalarWhereWithAggregatesInput | AssignmentScalarWhereWithAggregatesInput[]
    OR?: AssignmentScalarWhereWithAggregatesInput[]
    NOT?: AssignmentScalarWhereWithAggregatesInput | AssignmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Assignment"> | string
    taskId?: StringWithAggregatesFilter<"Assignment"> | string
    userId?: StringWithAggregatesFilter<"Assignment"> | string
    submitted?: BoolWithAggregatesFilter<"Assignment"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Assignment"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    personalTasks?: PersonalTaskCreateNestedManyWithoutUserInput
    groupTasks?: GroupTaskCreateNestedManyWithoutTutorInput
    assignments?: AssignmentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    personalTasks?: PersonalTaskUncheckedCreateNestedManyWithoutUserInput
    groupTasks?: GroupTaskUncheckedCreateNestedManyWithoutTutorInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    personalTasks?: PersonalTaskUpdateManyWithoutUserNestedInput
    groupTasks?: GroupTaskUpdateManyWithoutTutorNestedInput
    assignments?: AssignmentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    personalTasks?: PersonalTaskUncheckedUpdateManyWithoutUserNestedInput
    groupTasks?: GroupTaskUncheckedUpdateManyWithoutTutorNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonalTaskCreateInput = {
    id?: string
    title: string
    description: string
    dueDate?: Date | string | null
    dueTime?: string | null
    priority?: string
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPersonalTasksInput
  }

  export type PersonalTaskUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    dueDate?: Date | string | null
    dueTime?: string | null
    priority?: string
    completed?: boolean
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PersonalTaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueTime?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPersonalTasksNestedInput
  }

  export type PersonalTaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueTime?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonalTaskCreateManyInput = {
    id?: string
    title: string
    description: string
    dueDate?: Date | string | null
    dueTime?: string | null
    priority?: string
    completed?: boolean
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PersonalTaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueTime?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonalTaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueTime?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupTaskCreateInput = {
    id?: string
    title: string
    description: string
    dueDate?: Date | string | null
    dueTime?: string | null
    priority?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tutor: UserCreateNestedOneWithoutGroupTasksInput
    assignments?: AssignmentCreateNestedManyWithoutTaskInput
  }

  export type GroupTaskUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    dueDate?: Date | string | null
    dueTime?: string | null
    priority?: string
    tutorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    assignments?: AssignmentUncheckedCreateNestedManyWithoutTaskInput
  }

  export type GroupTaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueTime?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tutor?: UserUpdateOneRequiredWithoutGroupTasksNestedInput
    assignments?: AssignmentUpdateManyWithoutTaskNestedInput
  }

  export type GroupTaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueTime?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    tutorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: AssignmentUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type GroupTaskCreateManyInput = {
    id?: string
    title: string
    description: string
    dueDate?: Date | string | null
    dueTime?: string | null
    priority?: string
    tutorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupTaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueTime?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupTaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueTime?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    tutorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentCreateInput = {
    id?: string
    submitted?: boolean
    createdAt?: Date | string
    task: GroupTaskCreateNestedOneWithoutAssignmentsInput
    user: UserCreateNestedOneWithoutAssignmentsInput
  }

  export type AssignmentUncheckedCreateInput = {
    id?: string
    taskId: string
    userId: string
    submitted?: boolean
    createdAt?: Date | string
  }

  export type AssignmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    submitted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: GroupTaskUpdateOneRequiredWithoutAssignmentsNestedInput
    user?: UserUpdateOneRequiredWithoutAssignmentsNestedInput
  }

  export type AssignmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    submitted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentCreateManyInput = {
    id?: string
    taskId: string
    userId: string
    submitted?: boolean
    createdAt?: Date | string
  }

  export type AssignmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    submitted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    submitted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type PersonalTaskListRelationFilter = {
    every?: PersonalTaskWhereInput
    some?: PersonalTaskWhereInput
    none?: PersonalTaskWhereInput
  }

  export type GroupTaskListRelationFilter = {
    every?: GroupTaskWhereInput
    some?: GroupTaskWhereInput
    none?: GroupTaskWhereInput
  }

  export type AssignmentListRelationFilter = {
    every?: AssignmentWhereInput
    some?: AssignmentWhereInput
    none?: AssignmentWhereInput
  }

  export type PersonalTaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupTaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PersonalTaskCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    dueDate?: SortOrder
    dueTime?: SortOrder
    priority?: SortOrder
    completed?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PersonalTaskMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    dueDate?: SortOrder
    dueTime?: SortOrder
    priority?: SortOrder
    completed?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PersonalTaskMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    dueDate?: SortOrder
    dueTime?: SortOrder
    priority?: SortOrder
    completed?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type GroupTaskCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    dueDate?: SortOrder
    dueTime?: SortOrder
    priority?: SortOrder
    tutorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupTaskMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    dueDate?: SortOrder
    dueTime?: SortOrder
    priority?: SortOrder
    tutorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupTaskMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    dueDate?: SortOrder
    dueTime?: SortOrder
    priority?: SortOrder
    tutorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupTaskScalarRelationFilter = {
    is?: GroupTaskWhereInput
    isNot?: GroupTaskWhereInput
  }

  export type AssignmentTaskIdUserIdCompoundUniqueInput = {
    taskId: string
    userId: string
  }

  export type AssignmentCountOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    submitted?: SortOrder
    createdAt?: SortOrder
  }

  export type AssignmentMaxOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    submitted?: SortOrder
    createdAt?: SortOrder
  }

  export type AssignmentMinOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    submitted?: SortOrder
    createdAt?: SortOrder
  }

  export type PersonalTaskCreateNestedManyWithoutUserInput = {
    create?: XOR<PersonalTaskCreateWithoutUserInput, PersonalTaskUncheckedCreateWithoutUserInput> | PersonalTaskCreateWithoutUserInput[] | PersonalTaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PersonalTaskCreateOrConnectWithoutUserInput | PersonalTaskCreateOrConnectWithoutUserInput[]
    createMany?: PersonalTaskCreateManyUserInputEnvelope
    connect?: PersonalTaskWhereUniqueInput | PersonalTaskWhereUniqueInput[]
  }

  export type GroupTaskCreateNestedManyWithoutTutorInput = {
    create?: XOR<GroupTaskCreateWithoutTutorInput, GroupTaskUncheckedCreateWithoutTutorInput> | GroupTaskCreateWithoutTutorInput[] | GroupTaskUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: GroupTaskCreateOrConnectWithoutTutorInput | GroupTaskCreateOrConnectWithoutTutorInput[]
    createMany?: GroupTaskCreateManyTutorInputEnvelope
    connect?: GroupTaskWhereUniqueInput | GroupTaskWhereUniqueInput[]
  }

  export type AssignmentCreateNestedManyWithoutUserInput = {
    create?: XOR<AssignmentCreateWithoutUserInput, AssignmentUncheckedCreateWithoutUserInput> | AssignmentCreateWithoutUserInput[] | AssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutUserInput | AssignmentCreateOrConnectWithoutUserInput[]
    createMany?: AssignmentCreateManyUserInputEnvelope
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
  }

  export type PersonalTaskUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PersonalTaskCreateWithoutUserInput, PersonalTaskUncheckedCreateWithoutUserInput> | PersonalTaskCreateWithoutUserInput[] | PersonalTaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PersonalTaskCreateOrConnectWithoutUserInput | PersonalTaskCreateOrConnectWithoutUserInput[]
    createMany?: PersonalTaskCreateManyUserInputEnvelope
    connect?: PersonalTaskWhereUniqueInput | PersonalTaskWhereUniqueInput[]
  }

  export type GroupTaskUncheckedCreateNestedManyWithoutTutorInput = {
    create?: XOR<GroupTaskCreateWithoutTutorInput, GroupTaskUncheckedCreateWithoutTutorInput> | GroupTaskCreateWithoutTutorInput[] | GroupTaskUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: GroupTaskCreateOrConnectWithoutTutorInput | GroupTaskCreateOrConnectWithoutTutorInput[]
    createMany?: GroupTaskCreateManyTutorInputEnvelope
    connect?: GroupTaskWhereUniqueInput | GroupTaskWhereUniqueInput[]
  }

  export type AssignmentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AssignmentCreateWithoutUserInput, AssignmentUncheckedCreateWithoutUserInput> | AssignmentCreateWithoutUserInput[] | AssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutUserInput | AssignmentCreateOrConnectWithoutUserInput[]
    createMany?: AssignmentCreateManyUserInputEnvelope
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PersonalTaskUpdateManyWithoutUserNestedInput = {
    create?: XOR<PersonalTaskCreateWithoutUserInput, PersonalTaskUncheckedCreateWithoutUserInput> | PersonalTaskCreateWithoutUserInput[] | PersonalTaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PersonalTaskCreateOrConnectWithoutUserInput | PersonalTaskCreateOrConnectWithoutUserInput[]
    upsert?: PersonalTaskUpsertWithWhereUniqueWithoutUserInput | PersonalTaskUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PersonalTaskCreateManyUserInputEnvelope
    set?: PersonalTaskWhereUniqueInput | PersonalTaskWhereUniqueInput[]
    disconnect?: PersonalTaskWhereUniqueInput | PersonalTaskWhereUniqueInput[]
    delete?: PersonalTaskWhereUniqueInput | PersonalTaskWhereUniqueInput[]
    connect?: PersonalTaskWhereUniqueInput | PersonalTaskWhereUniqueInput[]
    update?: PersonalTaskUpdateWithWhereUniqueWithoutUserInput | PersonalTaskUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PersonalTaskUpdateManyWithWhereWithoutUserInput | PersonalTaskUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PersonalTaskScalarWhereInput | PersonalTaskScalarWhereInput[]
  }

  export type GroupTaskUpdateManyWithoutTutorNestedInput = {
    create?: XOR<GroupTaskCreateWithoutTutorInput, GroupTaskUncheckedCreateWithoutTutorInput> | GroupTaskCreateWithoutTutorInput[] | GroupTaskUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: GroupTaskCreateOrConnectWithoutTutorInput | GroupTaskCreateOrConnectWithoutTutorInput[]
    upsert?: GroupTaskUpsertWithWhereUniqueWithoutTutorInput | GroupTaskUpsertWithWhereUniqueWithoutTutorInput[]
    createMany?: GroupTaskCreateManyTutorInputEnvelope
    set?: GroupTaskWhereUniqueInput | GroupTaskWhereUniqueInput[]
    disconnect?: GroupTaskWhereUniqueInput | GroupTaskWhereUniqueInput[]
    delete?: GroupTaskWhereUniqueInput | GroupTaskWhereUniqueInput[]
    connect?: GroupTaskWhereUniqueInput | GroupTaskWhereUniqueInput[]
    update?: GroupTaskUpdateWithWhereUniqueWithoutTutorInput | GroupTaskUpdateWithWhereUniqueWithoutTutorInput[]
    updateMany?: GroupTaskUpdateManyWithWhereWithoutTutorInput | GroupTaskUpdateManyWithWhereWithoutTutorInput[]
    deleteMany?: GroupTaskScalarWhereInput | GroupTaskScalarWhereInput[]
  }

  export type AssignmentUpdateManyWithoutUserNestedInput = {
    create?: XOR<AssignmentCreateWithoutUserInput, AssignmentUncheckedCreateWithoutUserInput> | AssignmentCreateWithoutUserInput[] | AssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutUserInput | AssignmentCreateOrConnectWithoutUserInput[]
    upsert?: AssignmentUpsertWithWhereUniqueWithoutUserInput | AssignmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AssignmentCreateManyUserInputEnvelope
    set?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    disconnect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    delete?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    update?: AssignmentUpdateWithWhereUniqueWithoutUserInput | AssignmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AssignmentUpdateManyWithWhereWithoutUserInput | AssignmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
  }

  export type PersonalTaskUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PersonalTaskCreateWithoutUserInput, PersonalTaskUncheckedCreateWithoutUserInput> | PersonalTaskCreateWithoutUserInput[] | PersonalTaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PersonalTaskCreateOrConnectWithoutUserInput | PersonalTaskCreateOrConnectWithoutUserInput[]
    upsert?: PersonalTaskUpsertWithWhereUniqueWithoutUserInput | PersonalTaskUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PersonalTaskCreateManyUserInputEnvelope
    set?: PersonalTaskWhereUniqueInput | PersonalTaskWhereUniqueInput[]
    disconnect?: PersonalTaskWhereUniqueInput | PersonalTaskWhereUniqueInput[]
    delete?: PersonalTaskWhereUniqueInput | PersonalTaskWhereUniqueInput[]
    connect?: PersonalTaskWhereUniqueInput | PersonalTaskWhereUniqueInput[]
    update?: PersonalTaskUpdateWithWhereUniqueWithoutUserInput | PersonalTaskUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PersonalTaskUpdateManyWithWhereWithoutUserInput | PersonalTaskUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PersonalTaskScalarWhereInput | PersonalTaskScalarWhereInput[]
  }

  export type GroupTaskUncheckedUpdateManyWithoutTutorNestedInput = {
    create?: XOR<GroupTaskCreateWithoutTutorInput, GroupTaskUncheckedCreateWithoutTutorInput> | GroupTaskCreateWithoutTutorInput[] | GroupTaskUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: GroupTaskCreateOrConnectWithoutTutorInput | GroupTaskCreateOrConnectWithoutTutorInput[]
    upsert?: GroupTaskUpsertWithWhereUniqueWithoutTutorInput | GroupTaskUpsertWithWhereUniqueWithoutTutorInput[]
    createMany?: GroupTaskCreateManyTutorInputEnvelope
    set?: GroupTaskWhereUniqueInput | GroupTaskWhereUniqueInput[]
    disconnect?: GroupTaskWhereUniqueInput | GroupTaskWhereUniqueInput[]
    delete?: GroupTaskWhereUniqueInput | GroupTaskWhereUniqueInput[]
    connect?: GroupTaskWhereUniqueInput | GroupTaskWhereUniqueInput[]
    update?: GroupTaskUpdateWithWhereUniqueWithoutTutorInput | GroupTaskUpdateWithWhereUniqueWithoutTutorInput[]
    updateMany?: GroupTaskUpdateManyWithWhereWithoutTutorInput | GroupTaskUpdateManyWithWhereWithoutTutorInput[]
    deleteMany?: GroupTaskScalarWhereInput | GroupTaskScalarWhereInput[]
  }

  export type AssignmentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AssignmentCreateWithoutUserInput, AssignmentUncheckedCreateWithoutUserInput> | AssignmentCreateWithoutUserInput[] | AssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutUserInput | AssignmentCreateOrConnectWithoutUserInput[]
    upsert?: AssignmentUpsertWithWhereUniqueWithoutUserInput | AssignmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AssignmentCreateManyUserInputEnvelope
    set?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    disconnect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    delete?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    update?: AssignmentUpdateWithWhereUniqueWithoutUserInput | AssignmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AssignmentUpdateManyWithWhereWithoutUserInput | AssignmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPersonalTasksInput = {
    create?: XOR<UserCreateWithoutPersonalTasksInput, UserUncheckedCreateWithoutPersonalTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutPersonalTasksInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutPersonalTasksNestedInput = {
    create?: XOR<UserCreateWithoutPersonalTasksInput, UserUncheckedCreateWithoutPersonalTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutPersonalTasksInput
    upsert?: UserUpsertWithoutPersonalTasksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPersonalTasksInput, UserUpdateWithoutPersonalTasksInput>, UserUncheckedUpdateWithoutPersonalTasksInput>
  }

  export type UserCreateNestedOneWithoutGroupTasksInput = {
    create?: XOR<UserCreateWithoutGroupTasksInput, UserUncheckedCreateWithoutGroupTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutGroupTasksInput
    connect?: UserWhereUniqueInput
  }

  export type AssignmentCreateNestedManyWithoutTaskInput = {
    create?: XOR<AssignmentCreateWithoutTaskInput, AssignmentUncheckedCreateWithoutTaskInput> | AssignmentCreateWithoutTaskInput[] | AssignmentUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutTaskInput | AssignmentCreateOrConnectWithoutTaskInput[]
    createMany?: AssignmentCreateManyTaskInputEnvelope
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
  }

  export type AssignmentUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<AssignmentCreateWithoutTaskInput, AssignmentUncheckedCreateWithoutTaskInput> | AssignmentCreateWithoutTaskInput[] | AssignmentUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutTaskInput | AssignmentCreateOrConnectWithoutTaskInput[]
    createMany?: AssignmentCreateManyTaskInputEnvelope
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutGroupTasksNestedInput = {
    create?: XOR<UserCreateWithoutGroupTasksInput, UserUncheckedCreateWithoutGroupTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutGroupTasksInput
    upsert?: UserUpsertWithoutGroupTasksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGroupTasksInput, UserUpdateWithoutGroupTasksInput>, UserUncheckedUpdateWithoutGroupTasksInput>
  }

  export type AssignmentUpdateManyWithoutTaskNestedInput = {
    create?: XOR<AssignmentCreateWithoutTaskInput, AssignmentUncheckedCreateWithoutTaskInput> | AssignmentCreateWithoutTaskInput[] | AssignmentUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutTaskInput | AssignmentCreateOrConnectWithoutTaskInput[]
    upsert?: AssignmentUpsertWithWhereUniqueWithoutTaskInput | AssignmentUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: AssignmentCreateManyTaskInputEnvelope
    set?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    disconnect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    delete?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    update?: AssignmentUpdateWithWhereUniqueWithoutTaskInput | AssignmentUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: AssignmentUpdateManyWithWhereWithoutTaskInput | AssignmentUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
  }

  export type AssignmentUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<AssignmentCreateWithoutTaskInput, AssignmentUncheckedCreateWithoutTaskInput> | AssignmentCreateWithoutTaskInput[] | AssignmentUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutTaskInput | AssignmentCreateOrConnectWithoutTaskInput[]
    upsert?: AssignmentUpsertWithWhereUniqueWithoutTaskInput | AssignmentUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: AssignmentCreateManyTaskInputEnvelope
    set?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    disconnect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    delete?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    update?: AssignmentUpdateWithWhereUniqueWithoutTaskInput | AssignmentUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: AssignmentUpdateManyWithWhereWithoutTaskInput | AssignmentUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
  }

  export type GroupTaskCreateNestedOneWithoutAssignmentsInput = {
    create?: XOR<GroupTaskCreateWithoutAssignmentsInput, GroupTaskUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: GroupTaskCreateOrConnectWithoutAssignmentsInput
    connect?: GroupTaskWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAssignmentsInput = {
    create?: XOR<UserCreateWithoutAssignmentsInput, UserUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignmentsInput
    connect?: UserWhereUniqueInput
  }

  export type GroupTaskUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: XOR<GroupTaskCreateWithoutAssignmentsInput, GroupTaskUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: GroupTaskCreateOrConnectWithoutAssignmentsInput
    upsert?: GroupTaskUpsertWithoutAssignmentsInput
    connect?: GroupTaskWhereUniqueInput
    update?: XOR<XOR<GroupTaskUpdateToOneWithWhereWithoutAssignmentsInput, GroupTaskUpdateWithoutAssignmentsInput>, GroupTaskUncheckedUpdateWithoutAssignmentsInput>
  }

  export type UserUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: XOR<UserCreateWithoutAssignmentsInput, UserUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignmentsInput
    upsert?: UserUpsertWithoutAssignmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAssignmentsInput, UserUpdateWithoutAssignmentsInput>, UserUncheckedUpdateWithoutAssignmentsInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PersonalTaskCreateWithoutUserInput = {
    id?: string
    title: string
    description: string
    dueDate?: Date | string | null
    dueTime?: string | null
    priority?: string
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PersonalTaskUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description: string
    dueDate?: Date | string | null
    dueTime?: string | null
    priority?: string
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PersonalTaskCreateOrConnectWithoutUserInput = {
    where: PersonalTaskWhereUniqueInput
    create: XOR<PersonalTaskCreateWithoutUserInput, PersonalTaskUncheckedCreateWithoutUserInput>
  }

  export type PersonalTaskCreateManyUserInputEnvelope = {
    data: PersonalTaskCreateManyUserInput | PersonalTaskCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GroupTaskCreateWithoutTutorInput = {
    id?: string
    title: string
    description: string
    dueDate?: Date | string | null
    dueTime?: string | null
    priority?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    assignments?: AssignmentCreateNestedManyWithoutTaskInput
  }

  export type GroupTaskUncheckedCreateWithoutTutorInput = {
    id?: string
    title: string
    description: string
    dueDate?: Date | string | null
    dueTime?: string | null
    priority?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    assignments?: AssignmentUncheckedCreateNestedManyWithoutTaskInput
  }

  export type GroupTaskCreateOrConnectWithoutTutorInput = {
    where: GroupTaskWhereUniqueInput
    create: XOR<GroupTaskCreateWithoutTutorInput, GroupTaskUncheckedCreateWithoutTutorInput>
  }

  export type GroupTaskCreateManyTutorInputEnvelope = {
    data: GroupTaskCreateManyTutorInput | GroupTaskCreateManyTutorInput[]
    skipDuplicates?: boolean
  }

  export type AssignmentCreateWithoutUserInput = {
    id?: string
    submitted?: boolean
    createdAt?: Date | string
    task: GroupTaskCreateNestedOneWithoutAssignmentsInput
  }

  export type AssignmentUncheckedCreateWithoutUserInput = {
    id?: string
    taskId: string
    submitted?: boolean
    createdAt?: Date | string
  }

  export type AssignmentCreateOrConnectWithoutUserInput = {
    where: AssignmentWhereUniqueInput
    create: XOR<AssignmentCreateWithoutUserInput, AssignmentUncheckedCreateWithoutUserInput>
  }

  export type AssignmentCreateManyUserInputEnvelope = {
    data: AssignmentCreateManyUserInput | AssignmentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PersonalTaskUpsertWithWhereUniqueWithoutUserInput = {
    where: PersonalTaskWhereUniqueInput
    update: XOR<PersonalTaskUpdateWithoutUserInput, PersonalTaskUncheckedUpdateWithoutUserInput>
    create: XOR<PersonalTaskCreateWithoutUserInput, PersonalTaskUncheckedCreateWithoutUserInput>
  }

  export type PersonalTaskUpdateWithWhereUniqueWithoutUserInput = {
    where: PersonalTaskWhereUniqueInput
    data: XOR<PersonalTaskUpdateWithoutUserInput, PersonalTaskUncheckedUpdateWithoutUserInput>
  }

  export type PersonalTaskUpdateManyWithWhereWithoutUserInput = {
    where: PersonalTaskScalarWhereInput
    data: XOR<PersonalTaskUpdateManyMutationInput, PersonalTaskUncheckedUpdateManyWithoutUserInput>
  }

  export type PersonalTaskScalarWhereInput = {
    AND?: PersonalTaskScalarWhereInput | PersonalTaskScalarWhereInput[]
    OR?: PersonalTaskScalarWhereInput[]
    NOT?: PersonalTaskScalarWhereInput | PersonalTaskScalarWhereInput[]
    id?: StringFilter<"PersonalTask"> | string
    title?: StringFilter<"PersonalTask"> | string
    description?: StringFilter<"PersonalTask"> | string
    dueDate?: DateTimeNullableFilter<"PersonalTask"> | Date | string | null
    dueTime?: StringNullableFilter<"PersonalTask"> | string | null
    priority?: StringFilter<"PersonalTask"> | string
    completed?: BoolFilter<"PersonalTask"> | boolean
    userId?: StringFilter<"PersonalTask"> | string
    createdAt?: DateTimeFilter<"PersonalTask"> | Date | string
    updatedAt?: DateTimeFilter<"PersonalTask"> | Date | string
  }

  export type GroupTaskUpsertWithWhereUniqueWithoutTutorInput = {
    where: GroupTaskWhereUniqueInput
    update: XOR<GroupTaskUpdateWithoutTutorInput, GroupTaskUncheckedUpdateWithoutTutorInput>
    create: XOR<GroupTaskCreateWithoutTutorInput, GroupTaskUncheckedCreateWithoutTutorInput>
  }

  export type GroupTaskUpdateWithWhereUniqueWithoutTutorInput = {
    where: GroupTaskWhereUniqueInput
    data: XOR<GroupTaskUpdateWithoutTutorInput, GroupTaskUncheckedUpdateWithoutTutorInput>
  }

  export type GroupTaskUpdateManyWithWhereWithoutTutorInput = {
    where: GroupTaskScalarWhereInput
    data: XOR<GroupTaskUpdateManyMutationInput, GroupTaskUncheckedUpdateManyWithoutTutorInput>
  }

  export type GroupTaskScalarWhereInput = {
    AND?: GroupTaskScalarWhereInput | GroupTaskScalarWhereInput[]
    OR?: GroupTaskScalarWhereInput[]
    NOT?: GroupTaskScalarWhereInput | GroupTaskScalarWhereInput[]
    id?: StringFilter<"GroupTask"> | string
    title?: StringFilter<"GroupTask"> | string
    description?: StringFilter<"GroupTask"> | string
    dueDate?: DateTimeNullableFilter<"GroupTask"> | Date | string | null
    dueTime?: StringNullableFilter<"GroupTask"> | string | null
    priority?: StringFilter<"GroupTask"> | string
    tutorId?: StringFilter<"GroupTask"> | string
    createdAt?: DateTimeFilter<"GroupTask"> | Date | string
    updatedAt?: DateTimeFilter<"GroupTask"> | Date | string
  }

  export type AssignmentUpsertWithWhereUniqueWithoutUserInput = {
    where: AssignmentWhereUniqueInput
    update: XOR<AssignmentUpdateWithoutUserInput, AssignmentUncheckedUpdateWithoutUserInput>
    create: XOR<AssignmentCreateWithoutUserInput, AssignmentUncheckedCreateWithoutUserInput>
  }

  export type AssignmentUpdateWithWhereUniqueWithoutUserInput = {
    where: AssignmentWhereUniqueInput
    data: XOR<AssignmentUpdateWithoutUserInput, AssignmentUncheckedUpdateWithoutUserInput>
  }

  export type AssignmentUpdateManyWithWhereWithoutUserInput = {
    where: AssignmentScalarWhereInput
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyWithoutUserInput>
  }

  export type AssignmentScalarWhereInput = {
    AND?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
    OR?: AssignmentScalarWhereInput[]
    NOT?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
    id?: StringFilter<"Assignment"> | string
    taskId?: StringFilter<"Assignment"> | string
    userId?: StringFilter<"Assignment"> | string
    submitted?: BoolFilter<"Assignment"> | boolean
    createdAt?: DateTimeFilter<"Assignment"> | Date | string
  }

  export type UserCreateWithoutPersonalTasksInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    groupTasks?: GroupTaskCreateNestedManyWithoutTutorInput
    assignments?: AssignmentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPersonalTasksInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    groupTasks?: GroupTaskUncheckedCreateNestedManyWithoutTutorInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPersonalTasksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPersonalTasksInput, UserUncheckedCreateWithoutPersonalTasksInput>
  }

  export type UserUpsertWithoutPersonalTasksInput = {
    update: XOR<UserUpdateWithoutPersonalTasksInput, UserUncheckedUpdateWithoutPersonalTasksInput>
    create: XOR<UserCreateWithoutPersonalTasksInput, UserUncheckedCreateWithoutPersonalTasksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPersonalTasksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPersonalTasksInput, UserUncheckedUpdateWithoutPersonalTasksInput>
  }

  export type UserUpdateWithoutPersonalTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupTasks?: GroupTaskUpdateManyWithoutTutorNestedInput
    assignments?: AssignmentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPersonalTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupTasks?: GroupTaskUncheckedUpdateManyWithoutTutorNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutGroupTasksInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    personalTasks?: PersonalTaskCreateNestedManyWithoutUserInput
    assignments?: AssignmentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGroupTasksInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    personalTasks?: PersonalTaskUncheckedCreateNestedManyWithoutUserInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGroupTasksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGroupTasksInput, UserUncheckedCreateWithoutGroupTasksInput>
  }

  export type AssignmentCreateWithoutTaskInput = {
    id?: string
    submitted?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAssignmentsInput
  }

  export type AssignmentUncheckedCreateWithoutTaskInput = {
    id?: string
    userId: string
    submitted?: boolean
    createdAt?: Date | string
  }

  export type AssignmentCreateOrConnectWithoutTaskInput = {
    where: AssignmentWhereUniqueInput
    create: XOR<AssignmentCreateWithoutTaskInput, AssignmentUncheckedCreateWithoutTaskInput>
  }

  export type AssignmentCreateManyTaskInputEnvelope = {
    data: AssignmentCreateManyTaskInput | AssignmentCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutGroupTasksInput = {
    update: XOR<UserUpdateWithoutGroupTasksInput, UserUncheckedUpdateWithoutGroupTasksInput>
    create: XOR<UserCreateWithoutGroupTasksInput, UserUncheckedCreateWithoutGroupTasksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGroupTasksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGroupTasksInput, UserUncheckedUpdateWithoutGroupTasksInput>
  }

  export type UserUpdateWithoutGroupTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    personalTasks?: PersonalTaskUpdateManyWithoutUserNestedInput
    assignments?: AssignmentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGroupTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    personalTasks?: PersonalTaskUncheckedUpdateManyWithoutUserNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AssignmentUpsertWithWhereUniqueWithoutTaskInput = {
    where: AssignmentWhereUniqueInput
    update: XOR<AssignmentUpdateWithoutTaskInput, AssignmentUncheckedUpdateWithoutTaskInput>
    create: XOR<AssignmentCreateWithoutTaskInput, AssignmentUncheckedCreateWithoutTaskInput>
  }

  export type AssignmentUpdateWithWhereUniqueWithoutTaskInput = {
    where: AssignmentWhereUniqueInput
    data: XOR<AssignmentUpdateWithoutTaskInput, AssignmentUncheckedUpdateWithoutTaskInput>
  }

  export type AssignmentUpdateManyWithWhereWithoutTaskInput = {
    where: AssignmentScalarWhereInput
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyWithoutTaskInput>
  }

  export type GroupTaskCreateWithoutAssignmentsInput = {
    id?: string
    title: string
    description: string
    dueDate?: Date | string | null
    dueTime?: string | null
    priority?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tutor: UserCreateNestedOneWithoutGroupTasksInput
  }

  export type GroupTaskUncheckedCreateWithoutAssignmentsInput = {
    id?: string
    title: string
    description: string
    dueDate?: Date | string | null
    dueTime?: string | null
    priority?: string
    tutorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupTaskCreateOrConnectWithoutAssignmentsInput = {
    where: GroupTaskWhereUniqueInput
    create: XOR<GroupTaskCreateWithoutAssignmentsInput, GroupTaskUncheckedCreateWithoutAssignmentsInput>
  }

  export type UserCreateWithoutAssignmentsInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    personalTasks?: PersonalTaskCreateNestedManyWithoutUserInput
    groupTasks?: GroupTaskCreateNestedManyWithoutTutorInput
  }

  export type UserUncheckedCreateWithoutAssignmentsInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    personalTasks?: PersonalTaskUncheckedCreateNestedManyWithoutUserInput
    groupTasks?: GroupTaskUncheckedCreateNestedManyWithoutTutorInput
  }

  export type UserCreateOrConnectWithoutAssignmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssignmentsInput, UserUncheckedCreateWithoutAssignmentsInput>
  }

  export type GroupTaskUpsertWithoutAssignmentsInput = {
    update: XOR<GroupTaskUpdateWithoutAssignmentsInput, GroupTaskUncheckedUpdateWithoutAssignmentsInput>
    create: XOR<GroupTaskCreateWithoutAssignmentsInput, GroupTaskUncheckedCreateWithoutAssignmentsInput>
    where?: GroupTaskWhereInput
  }

  export type GroupTaskUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: GroupTaskWhereInput
    data: XOR<GroupTaskUpdateWithoutAssignmentsInput, GroupTaskUncheckedUpdateWithoutAssignmentsInput>
  }

  export type GroupTaskUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueTime?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tutor?: UserUpdateOneRequiredWithoutGroupTasksNestedInput
  }

  export type GroupTaskUncheckedUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueTime?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    tutorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutAssignmentsInput = {
    update: XOR<UserUpdateWithoutAssignmentsInput, UserUncheckedUpdateWithoutAssignmentsInput>
    create: XOR<UserCreateWithoutAssignmentsInput, UserUncheckedCreateWithoutAssignmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAssignmentsInput, UserUncheckedUpdateWithoutAssignmentsInput>
  }

  export type UserUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    personalTasks?: PersonalTaskUpdateManyWithoutUserNestedInput
    groupTasks?: GroupTaskUpdateManyWithoutTutorNestedInput
  }

  export type UserUncheckedUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    personalTasks?: PersonalTaskUncheckedUpdateManyWithoutUserNestedInput
    groupTasks?: GroupTaskUncheckedUpdateManyWithoutTutorNestedInput
  }

  export type PersonalTaskCreateManyUserInput = {
    id?: string
    title: string
    description: string
    dueDate?: Date | string | null
    dueTime?: string | null
    priority?: string
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupTaskCreateManyTutorInput = {
    id?: string
    title: string
    description: string
    dueDate?: Date | string | null
    dueTime?: string | null
    priority?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssignmentCreateManyUserInput = {
    id?: string
    taskId: string
    submitted?: boolean
    createdAt?: Date | string
  }

  export type PersonalTaskUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueTime?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonalTaskUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueTime?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonalTaskUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueTime?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupTaskUpdateWithoutTutorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueTime?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: AssignmentUpdateManyWithoutTaskNestedInput
  }

  export type GroupTaskUncheckedUpdateWithoutTutorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueTime?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: AssignmentUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type GroupTaskUncheckedUpdateManyWithoutTutorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueTime?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    submitted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: GroupTaskUpdateOneRequiredWithoutAssignmentsNestedInput
  }

  export type AssignmentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    submitted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    submitted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentCreateManyTaskInput = {
    id?: string
    userId: string
    submitted?: boolean
    createdAt?: Date | string
  }

  export type AssignmentUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    submitted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAssignmentsNestedInput
  }

  export type AssignmentUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    submitted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentUncheckedUpdateManyWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    submitted?: BoolFieldUpdateOperationsInput | boolean
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