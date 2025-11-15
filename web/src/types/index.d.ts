export interface JobCardProps {
  _id: string;
  title: string;
  company: string;
  location: string;
  type: string;
}

export interface CreateJobType{
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  qualifications: string[];
}
