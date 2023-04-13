import { Controller, Get } from '@nestjs/common';
import { OrganizationsService } from './organizations.service';
import { Organization } from './organizations.entity';

@Controller({
  path: 'organizations',
})
export class OrganizationsController {
  constructor(private readonly organizationsService: OrganizationsService) {}

  @Get()
  findAll(): Promise<Organization[]> {
    return this.organizationsService.findAll();
  }
}
