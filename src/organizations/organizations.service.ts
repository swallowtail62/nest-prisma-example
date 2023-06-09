import { Inject, Injectable } from '@nestjs/common';
import { Organization } from './domain';

import {
  OrganizationsRepository,
  OrganizationsRepositoryToken,
} from './organizations.repository';

@Injectable()
export class OrganizationsService {
  constructor(
    @Inject(OrganizationsRepositoryToken)
    private readonly organizationsRepository: OrganizationsRepository,
  ) {}

  async findAll(): Promise<Organization[]> {
    return this.organizationsRepository.findAll();
  }

  async create({ name }: { name: string }): Promise<Organization> {
    const org = new Organization(name);
    return this.organizationsRepository.create(org);
  }
}
