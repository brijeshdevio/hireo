import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { JobService } from './job.service';
import { CreateJobDto } from './dto';

@Controller('jobs')
export class JobController {
  constructor(private readonly jobService: JobService) {}

  @Post()
  async handleCreateJob(@Body() body: CreateJobDto) {
    const newJob = await this.jobService.createJob(body);
    return newJob;
  }

  @Get()
  async handleFindJobs() {
    const jobs = await this.jobService.findJobs();
    return jobs;
  }

  @Get(':id')
  async handleFindJobById(@Param('id') jobId: string) {
    const job = await this.jobService.findJobById(jobId);
    return job;
  }

  @Delete(':id')
  async handleDeleteJobById(@Param('id') jobId: string) {
    await this.jobService.deleteJobById(jobId);
    return { message: 'Job deleted successfully' };
  }
}
