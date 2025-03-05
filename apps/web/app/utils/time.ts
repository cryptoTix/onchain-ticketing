export class Time {
  private constructor(private readonly date: Date) {}

  static get now() {
    return Time.fromDate(new Date());
  }

  static fromDate(date: Date): Time {
    return new Time(date);
  }

  static fromMs(ms: number): Time {
    return new Time(new Date(ms));
  }

  static fromSeconds(seconds: number): Time {
    return new Time(new Date(seconds * 1e3));
  }

  // TODO(drew): This is correct right? i.e. EVM timestamps are in seconds?
  static fromEvmTimestamp(evmTs: number): Time {
    return Time.fromSeconds(evmTs);
  }

  isAfter(other: Time): boolean {
    return this.date.getTime() > other.date.getTime();
  }

  isOnOrAfter(other: Time): boolean {
    return this.date.getTime() >= other.date.getTime();
  }

  isBefore(other: Time): boolean {
    return this.date.getTime() < other.date.getTime();
  }

  isOnOrBefore(other: Time): boolean {
    return this.date.getTime() <= other.date.getTime();
  }

  isEqual(other: Time): boolean {
    return this.date.getTime() === other.date.getTime();
  }

  toMilliseconds(): number {
    return this.date.getTime();
  }
}
