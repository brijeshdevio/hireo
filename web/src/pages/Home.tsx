import { JobCard, Loading, Searchbar } from "@/components";
import type { JobCardProps } from "@/types";
import { useJob } from "@/hooks/useJob";
import { useEffect } from "react";

export function Home() {
  const { jobs, setQuery, isFindJobPending, fetchJobs } = useJob();

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  return (
    <main className="container my-3">
      {/* Searchbar */}
      <section className="mb-2">
        <Searchbar setQuery={setQuery} />
      </section>

      {/* Job Cards */}
      <section>
        <h2 className="fw-bold">All Jobs</h2>
        <Loading isPending={isFindJobPending} />
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
          {jobs?.map((job: JobCardProps) => (
            <div key={job._id} className="col">
              <JobCard {...job} />
            </div>
          ))}
        </div>
        {jobs?.length === 0 && !isFindJobPending && (
          <div className="py-5 d-flex align-items-center justify-content-center">
            <p>No jobs found</p>
          </div>
        )}
      </section>
    </main>
  );
}
