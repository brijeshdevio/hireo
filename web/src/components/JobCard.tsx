import type { JobCardProps } from "@/types";
import { Link } from "react-router-dom";

export function JobCard({ _id, title, company, location, type }: JobCardProps) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title fw-bold">{title}</h5>
        <div className="mb-1">
          <strong>Company Name: </strong>
          <span>{company}</span>
        </div>
        <div className="mb-1">
          <strong>Location: </strong>
          <span>{location}</span>
        </div>
        <div className="mb-1">
          <strong>Job Type: </strong>
          <span>{type}</span>
        </div>
        <div className="mt-3 d-flex justify-content-start gap-2">
          <Link
            to={`/job-postings/${_id}`}
            className="btn btn-primary rounded-3 px-4"
          >
            See Details
          </Link>
          <button className="btn btn-danger rounded-3 px-4">Delete</button>
        </div>
      </div>
    </div>
  );
}
