import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrganizationsService } from './organizations.service';
import { Organization } from './domain';
import { CreateOrganizationDto } from './dto/create-organization.dto';

@Controller({
  path: 'organizations',
})
export class OrganizationsController {
  constructor(private readonly organizationsService: OrganizationsService) {}

  @Get()
  findAll(): Promise<Organization[]> {
    return this.organizationsService.findAll();
  }

  @Post()
  create(@Body() { name }: CreateOrganizationDto) {
    return this.organizationsService.create({ name });
  }
}
