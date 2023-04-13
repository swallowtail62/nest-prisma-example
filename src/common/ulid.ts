import { decodeTime, ulid } from 'ulid';

export class ULID {
  private readonly value: string;

  private constructor(id: string) {
    this.value = id;
  }

  toString(): string {
    return this.value;
  }

  /**
   * ulid factory method
   */
  static new() {
    return new ULID(ulid());
  }

  static isValid(id: string): boolean {
    try {
      decodeTime(id);
      return true;
    } catch (e) {
      return false;
    }
  }

  static parse(id: string): ULID {
    if (!ULID.isValid(id)) {
      throw new Error(`Invalid ULID: ${id}`);
    }
    return new ULID(id);
  }
}
