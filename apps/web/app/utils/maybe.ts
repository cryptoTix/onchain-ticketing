/* eslint-disable max-len */

// TODO(jason): Consider using ramda + monet if we need more functional constructs

/**
 * The Maybe monad is a class that allows for handling values that may or may not exist (`undefined` values) in a more convenient and expressive way.
 * It provides methods for mapping, flattening and handling default values, as well as for requiring the presence of a value.
 * This can be useful for instance when working with optional values, or for avoiding `null` references.
 *
 * In functional programming, a monad is a design pattern that defines a way to structure and compose computation in a programming language.
 * It is typically used as a way to abstract away and manage side-effects, to make programs easier to write and reason about, and to avoid code duplication.
 * Monads provide a set of methods that allow for composing and transforming computations in a predictable and controlled way.
 *
 * Example usage:
 *
 * ```typescript
 * const userName = getUserName(); // returns a string or undefined
 *
 * // Using map() to transform the value:
 * const maybeUserName = Maybe.from(userName);
 * const upperCaseUserName = maybeUserName.map(name => name.toUpperCase());
 *
 * // Using flatMap() to flatten the value:
 * const maybeUser = getUserById(userId); // returns a User object or undefined
 * const maybeUserName = maybeUser.flatMap(user => user.name);
 *
 * // Using getOrElse() to provide a default value:
 * const userName = maybeUserName.getOrElse(() => 'Anonymous');
 *
 * // Using orElse() to provide a default value:
 * const maybeUser = maybeUser.orElse(() => Maybe.some(new User('John Doe')));
 *
 * // Using required() to require the presence of a value:
 * const userName = maybeUserName.required('Expected user name to be defined');
 * ```
 */
export class Maybe<T> {
  // Just to keep one instance of none
  private static noneSingleton = new Maybe(undefined);

  private value: T | undefined | null;

  private constructor(value: T | undefined | null) {
    this.value = value;
  }

  private static isSome<T>(v: T | undefined | null): v is T {
    return v !== null && v !== undefined;
  }

  /**
   * Constructs a Maybe instance from the provided value.
   * If the value is `undefined`, a `Maybe.none()` instance is returned.
   * @param maybeVal The value to be wrapped in a Maybe instance.
   * @returns A Maybe instance.
   */
  static from<T>(maybeVal: T | undefined | null): Maybe<T> {
    return new Maybe(maybeVal);
  }

  /**
   * Constructs a `Maybe.some(val)` instance.
   * @param val The value to be wrapped in a `Maybe.some()` instance.
   * @returns A `Maybe.some(val)` instance only if T is not null/undefined else `Maybe.none()`.
   */
  static some<T>(val: T): Maybe<T> {
    if (!Maybe.isSome(val)) {
      return Maybe.none();
    }

    return new Maybe(val);
  }

  /**
   * Returns a `Maybe.none()` instance.
   * @returns A `Maybe.none()` instance.
   */
  static none<T>(): Maybe<T> {
    return Maybe.noneSingleton as Maybe<T>;
  }

  /**
   * Maps the value in the current Maybe instance to a new value using the provided function.
   * If the current instance is `Maybe.none()`, a `Maybe.none()` instance is returned.
   * @param fn The mapping function.
   * @returns A new Maybe instance with the mapped value.
   */
  public map<R>(fn: (val: T) => R): Maybe<R> {
    if (!Maybe.isSome(this.value)) return new Maybe(undefined as R | undefined);
    return new Maybe(fn(this.value));
  }

  /**
   * Flattens the value in the current Maybe instance by calling the provided function and returning the result.
   * If the current instance is `Maybe.none()`, a `Maybe.none()` instance is returned.
   * @param fn The flattening function.
   * @returns A new Maybe instance with the flattened value.
   */
  public flatMap<R>(fn: (val: T) => Maybe<R>): Maybe<R> {
    if (!Maybe.isSome(this.value)) return new Maybe(undefined as R | undefined);
    return fn(this.value);
  }

  /**
   * Returns the value in the current Maybe instance if it is not `Maybe.none()`, or the result of calling the provided default function if it is `Maybe.none()`.
   * @param defaultFn The default function to call and return the result from if the current instance is `Maybe.none()`.
   * @returns The value in the current Maybe instance if it is not `Maybe.none()`, or the result of calling the provided default function if it is `Maybe.none()`.
   */
  public getOrElse(defaultFn: () => T): T {
    return Maybe.isSome(this.value) ? this.value : defaultFn();
  }

  /**
   * Returns the current Maybe instance if it is not `Maybe.none()`, or the result of calling the provided default function if it is `Maybe.none()`.
   * @param defaultFn The default function to call and return the result from if the current instance is `Maybe.none()`.
   * @returns The current Maybe instance if it is not `Maybe.none()`, or the result of calling the provided default function if it is `Maybe.none()`.
   */
  public orElse(defaultFn: () => Maybe<T>): Maybe<T> {
    return Maybe.isSome(this.value) ? this : defaultFn();
  }

  /**
   * Requires that the current Maybe instance is not `Maybe.none()`, and returns its value.
   * If the current instance is `Maybe.none()`, an error is thrown.
   * @param errorMessage The error message to throw if the current instance is `Maybe.none()`.
   * @returns The value in the current Maybe instance if it is not `Maybe.none()`.
   */
  public required(
    errorMessage = "Expected Maybe.none() to be Maybe.some()"
  ): T {
    if (!Maybe.isSome(this.value)) throw new Error(errorMessage);
    return this.value;
  }

  public isSome(): boolean {
    return Maybe.isSome(this.value);
  }

  public isNone(): boolean {
    return !this.isSome();
  }

  public zip<U>(other: Maybe<U>): Maybe<[T, U]> {
    if (!Maybe.isSome(this.value) || !Maybe.isSome(other.value))
      return Maybe.none();

    return Maybe.some([this.value, other.value]);
  }

  public or<U>(other: Maybe<U>): Maybe<T | U> {
    if (Maybe.isSome(this.value)) {
      return this;
    }

    if (Maybe.isSome(other.value)) {
      return other;
    }

    return Maybe.none();
  }

  public string(): string {
    return this.map(String).getOrElse(String);
  }

  public boolean(): boolean {
    return this.map(Boolean).getOrElse(Boolean);
  }
}
