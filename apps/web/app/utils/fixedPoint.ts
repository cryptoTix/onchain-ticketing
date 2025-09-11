import Decimal from "decimal.js";

export class FixedPointNumber {
  private constructor(
    readonly number: bigint,
    readonly decimals: number
  ) {}

  static fromRaw(number: bigint, decimals: number): FixedPointNumber {
    return new FixedPointNumber(number, decimals);
  }

  static fromDecimal(
    number: string | Decimal | number,
    decimals: number
  ): FixedPointNumber {
    const decStr = number.toString();
    const hasDecimalPoint = decStr.includes(".");

    const fracStr = hasDecimalPoint
      ? decStr
          .split("")
          .reduce((s, c) => (s === "" && c !== "." ? "" : s + c), "")
          .slice(1)
      : "";

    const intStr = hasDecimalPoint
      ? decStr
          .split("")
          .reduceRight((s, c) => (s === "" && c !== "." ? "" : c + s), "")
          .slice(0, -1)
      : decStr;

    const fracIsFull = fracStr.length >= decimals;
    const finalFracStr = fracIsFull
      ? fracStr.slice(0, decimals)
      : `${fracStr}${"0".repeat(decimals - fracStr.length)}`;

    return new FixedPointNumber(BigInt(`${intStr}${finalFracStr}`), decimals);
  }

  static get zero() {
    return new FixedPointNumber(BigInt(0), 0);
  }

  toRawString(): string {
    return this.number.toString();
  }

  toBigInt(): bigint {
    return this.number;
  }

  // Infinite precision fixed point rendering (not possible with Decimal JS or Numeral JS)
  // Not to be used for readonly display purposes,
  // this is used for read/write values such as max deposit value that's rendered as well as used
  toString() {
    const rawStr = this.number.toString();
    const rawLen = rawStr.length;

    const canFillFrac = rawLen >= this.decimals;
    const hasIntegerPart = rawLen > this.decimals;

    const baseFracStr = canFillFrac
      ? rawStr.slice(-this.decimals)
      : "0".repeat(this.decimals - rawLen) + rawStr.slice(-this.decimals);

    const baseIntStr = hasIntegerPart ? rawStr.slice(0, -this.decimals) : "0";

    const trailStrippedFracStr = baseFracStr // '12300'
      .split("") // ['1', '2', '3', '0', '0']
      .reverse() // ['0', '0', '3', '2', '1']
      .reduce(
        (s, c) => (s.length === 0 && c === "0" ? [] : [...s, c]),
        [] as string[]
      ) // ['3', '2', '1']
      .reverse() // ['1', '2', '3']
      .join(""); // '123'

    if (trailStrippedFracStr === "") {
      return baseIntStr;
    }

    return `${baseIntStr}.${trailStrippedFracStr}`;
  }
}
