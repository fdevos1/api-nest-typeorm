import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { IdeaService } from './idea.service';
import { IdeaDTO } from './idea.dto';

@Controller('idea')
export class IdeaController {
  constructor(private ideaService: IdeaService) {}

  @Get()
  showAllIdeas() {
    return this.ideaService.showAll();
  }

  @Get(':id')
  readIdea(@Param('id') id: string) {
    return this.ideaService.read(id);
  }

  @Post()
  createIdea(@Body() data: IdeaDTO) {
    return this.ideaService.create(data);
  }

  @Put(':id')
  updateIdea(@Param('id') id: string, @Body() data: Partial<IdeaDTO>) {
    return this.ideaService.update(id, data);
  }

  @Delete(':id')
  deleteIdea(@Param('id') id: string) {
    return this.ideaService.delete(id);
  }
}
