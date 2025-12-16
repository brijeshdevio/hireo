import { useParams } from "react-router-dom";
import { Loading } from "@/components";
import { useJob } from "@/hooks/useJob";

export function JobDetails() {
  const { getJob } = useJob();
  const { id } = useParams();

  if (getJob.error) {
    return (
      <main className="container my-5">
        <section className="text-center">
          <p className="text-danger">
            Job with ID <strong>"{id}"</strong> not found.
          </p>
        </section>
      </main>
    );
  }

  if (getJob.isPending) {
    return <Loading isPending={getJob.isPending} />;
  }

  return (
    <main className="container my-3">
      <section>
        <h3 className="fw-bold">{getJob.data?.title}</h3>
        <div className="card mt-2">
          <div className="card-body">
            <div className="card-text mb-1">
              <strong>Company Name: </strong>
              <span>{getJob.data?.company}</span>
            </div>
            <div className="card-text mb-1">
              <strong>Location: </strong>
              <span>{getJob.data?.location}</span>
            </div>
            <div className="card-text mb-1">
              <strong>Salary: </strong>
              <span>{getJob.data?.salary}</span>
            </div>
            <div className="card-text mb-1">
              <strong>Job Type: </strong>
              <span>{getJob.data?.type}</span>
            </div>
            <div className="card-text mb-1">
              <strong>Description: </strong>
              <span>{getJob.data?.description}</span>
            </div>
            <div className="card-text mb-1">
              <strong>Qualifications: </strong>
              <ol>
                {getJob.data?.qualifications?.map(
                  (qualification: string, index: number) => (
                    <li key={index}>{qualification}</li>
                  )
                )}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
