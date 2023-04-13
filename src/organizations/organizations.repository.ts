import { Injectable } from '@nestjs/common';
import { Organization } from './organizations.entity';

export const OrganizationsRepositoryToken = Symbol('OrganizationsRepository');

export interface OrganizationsRepository {
  findAll(): Promise<Organization[]>;
}

@Injectable()
export class OrganizationsRepositoryImpl implements OrganizationsRepository {
  private organizations: Organization[] = [
    new Organization('001', 'Organization 1'),
  ];

  findAll(): Promise<Organization[]> {
    return Promise.resolve(this.organizations);
  }
}
