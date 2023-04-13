import { Module } from '@nestjs/common';
import { OrganizationsController } from './organizations.controller';
import { OrganizationsService } from './organizations.service';
import {
  InMemoryOrganizationsRepository,
  OrganizationsRepositoryToken,
} from './organizations.repository';

@Module({
  imports: [],
  controllers: [OrganizationsController],
  providers: [
    OrganizationsService,
    {
      provide: OrganizationsRepositoryToken,
      useClass: InMemoryOrganizationsRepository,
    },
  ],
  exports: [OrganizationsRepositoryToken],
})
export class OrganizationsModule {}
