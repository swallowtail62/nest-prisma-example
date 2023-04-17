import { createZodDto } from '@anatine/zod-nestjs';
import { extendApi } from '@anatine/zod-openapi';
import { z } from 'zod';

const organizationZ = extendApi(
  z.object({
    id: z.string(),
    name: z.string().min(1).max(30),
  }),
);

export class GetOrganizationResponse extends createZodDto(organizationZ) {}

export class CreateOrganizationDto extends createZodDto(
  organizationZ.omit({ id: true }),
) {}

export class ListOrganizationsDto extends createZodDto(
  z.object({
    organizations: z.array(organizationZ),
  }),
) {}
