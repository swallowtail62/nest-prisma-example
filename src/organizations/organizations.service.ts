import { Inject, Injectable } from '@nestjs/common';
import { Organization } from './organizations.entity';
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
}
