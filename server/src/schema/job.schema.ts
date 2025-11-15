import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type JobDocument = HydratedDocument<Job>;

@Schema({ timestamps: true })
export class Job {
  @Prop({ required: true, type: String })
  title: string;

  @Prop({ required: true, type: String })
  company: string;

  @Prop({ required: true, type: String })
  location: string;

  @Prop({ type: String })
  salary: string;

  @Prop({ type: String })
  type: string;

  @Prop({ type: String })
  description: string;

  @Prop({ type: [String] })
  qualifications: string[];
}

export const JobSchema = SchemaFactory.createForClass(Job);
