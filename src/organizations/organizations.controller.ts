import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common';
import { OrganizationsService } from './organizations.service';
import { Organization } from './domain';
import {
  CreateOrganizationDto,
  GetOrganizationResponse,
  ListOrganizationsDto,
} from './dto/create-organization.dto';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ZodValidationPipe } from '@anatine/zod-nestjs';

@ApiTags('organizations')
@Controller({
  path: 'organizations',
})
@UsePipes(ZodValidationPipe)
export class OrganizationsController {
  constructor(private readonly organizationsService: OrganizationsService) {}

  @Get()
  @ApiOkResponse({
    description: 'List of organizations',
    type: GetOrganizationResponse,
    isArray: true,
  })
  async findAll() {
    // return this.organizationsService.findAll();
    // 極論、何も返してないのに open api schema 的には返り値があったりする可能性はあるし、
    // DTO class と array response の相性が悪い...
    // async findAll(): Promise<GetOrganizationResponse[]>
    // として運用できないことはないが、 class が使いづらい...

    /**
    organizations.map((o) => {
      const dto = new GetOrganizationResponse();
      dto.id = o.id;
      dto.name = o.name;
      return dto;
    });
     */
    // って感じにやらなきゃいけない...
    const organizations = await this.organizationsService.findAll();
  }

  @Post()
  @ApiBody({
    description: 'Create an organization',
    type: CreateOrganizationDto,
  })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: ListOrganizationsDto,
  })
  create(@Body() { name }: CreateOrganizationDto) {
    return this.organizationsService.create({ name });
  }
}
