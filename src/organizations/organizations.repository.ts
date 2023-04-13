import { Injectable } from '@nestjs/common';
import { Organization } from './domain';

export const OrganizationsRepositoryToken = Symbol('OrganizationsRepository');

export interface OrganizationsRepository {
  findAll(): Promise<Organization[]>;

  create(organization: Organization): Promise<Organization>;
}

@Injectable()
export class InMemoryOrganizationsRepository
  implements OrganizationsRepository
{
  private organizations: Organization[] = [
    new Organization('Organization 1'),
    new Organization('Organization 2'),
  ];

  findAll(): Promise<Organization[]> {
    return Promise.resolve(this.organizations);
  }

  create(organization: Organization): Promise<Organization> {
    this.organizations.push(organization);
    return Promise.resolve(organization);
  }
}
