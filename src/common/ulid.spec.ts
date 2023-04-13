import { ULID } from './ulid';

describe('ulid', () => {
  it('should generate new ulid', () => {
    const id = ULID.new();
    expect(id).toBeDefined();
  });

  it('should parse valid ulid', () => {
    const id = ULID.new();
    const parsed = ULID.parse(id.toString());
    expect(parsed).toBeDefined();
  });

  it('should throw error when parsing invalid ulid', () => {
    expect(() => ULID.parse('invalid')).toThrowError();
  });
});
