import { Link } from "react-router-dom";
import { useJob } from "@/hooks/useJob";
import type { JobCardProps } from "@/types";
import { useState } from "react";

export function JobCard({ _id, title, company, location, type }: JobCardProps) {
  const { deleteJob } = useJob();
  const [jobId, setJobId] = useState("");

  const handleDelete = () => {
    setJobId(_id);
    deleteJob.mutate(_id);
  };

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
          <Link to={`/jobs/${_id}`} className="btn btn-primary rounded-3 px-4">
            See Details
          </Link>
          <button
            className="btn btn-danger rounded-3 px-4"
            onClick={handleDelete}
            disabled={jobId === _id}
          >
            {deleteJob.isPending && jobId === _id ? (
              <span className="spinner-border spinner-border-sm"></span>
            ) : (
              "Delete"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
