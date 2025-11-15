import { IsNotEmpty, IsArray } from 'class-validator';

export class CreateJobDto {
  @IsNotEmpty({ message: 'Title must not be empty' })
  title: string;

  @IsNotEmpty({ message: 'Company must not be empty' })
  company: string;

  @IsNotEmpty({ message: 'Location must not be empty' })
  location: string;

  @IsNotEmpty({ message: 'Job type must not be empty' })
  type: string;

  @IsNotEmpty({ message: 'Salary must not be empty' })
  salary: string;

  @IsNotEmpty({ message: 'Description must not be empty' })
  description: string;

  @IsArray({ message: 'Qualifications must be an array' })
  @IsNotEmpty({ message: 'Qualifications must not be empty' })
  qualifications: string[];
}
