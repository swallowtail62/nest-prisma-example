import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrganizationsService } from './organizations.service';
import { Organization } from './domain';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { ApiBody, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('organizations')
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
  @ApiBody({
    description: 'Create an organization',
    type: CreateOrganizationDto,
  })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: Organization,
  })
  create(@Body() { name }: CreateOrganizationDto) {
    return this.organizationsService.create({ name });
  }
}
