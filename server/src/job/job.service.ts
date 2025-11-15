import {
  BadRequestException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Job } from 'src/schema/job.schema';
import { CreateJobDto } from './dto';

@Injectable()
export class JobService {
  constructor(@InjectModel(Job.name) private readonly jobModel: Model<Job>) {}

  private isValidId(id: string): boolean {
    if (Types.ObjectId.isValid(id)) {
      return true;
    }
    throw new BadRequestException(`Invalid job ID: ${id}`);
  }

  async createJob(data: CreateJobDto): Promise<Job> {
    const newJob = await this.jobModel.create(data);
    return newJob;
  }

  async findJobs(query?: string): Promise<Job[]> {
    const queries: Record<string, unknown> = {};

    if (query) {
      queries.title = { $regex: query, $options: 'i' };
    }

    const jobs = await this.jobModel
      .find(queries)
      .lean()
      .select('-__v -createdAt');
    return jobs;
  }

  async findJobById(jobId: string): Promise<Job> {
    this.isValidId(jobId);

    const job = await this.jobModel
      .findById(jobId)
      .lean()
      .select('-__v -createdAt');
    if (job) return job;
    throw new ForbiddenException('You do not have access to this Job.');
  }

  async deleteJobById(jobId: string): Promise<Job> {
    this.isValidId(jobId);

    const job = await this.jobModel
      .findByIdAndDelete(jobId)
      .lean()
      .select('-__v -createdAt');
    if (job) return job;
    throw new ForbiddenException('You do not have access to delete this Job.');
  }
}
