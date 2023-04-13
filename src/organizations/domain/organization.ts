import { z } from 'zod';
import { ULID } from 'src/common/ulid';

const organizationIdSchema = z
  .string()
  .refine(
    (v) => {
      return ULID.isValid(v);
    },
    { message: 'Invalid ID' },
  )
  .brand<'OrganizationId'>();

export type OrganizationId = z.infer<typeof organizationIdSchema>;

function newOrganizationId() {
  return organizationIdSchema.parse(ULID.new().toString());
}

export class Organization {
  private readonly id: OrganizationId;

  constructor(private name: string) {
    this.id = newOrganizationId();
  }
}
