import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

import { ProjectController } from './project.controller';
import { ProjectService } from './project.service';

@Module({
  imports: [HttpModule],
  controllers: [ProjectController],
  providers: [ProjectService],
})
export class ProjectModule {}
