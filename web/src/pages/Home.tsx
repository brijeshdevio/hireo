import { JobCard, Searchbar } from "@/components";
import { jobs } from "../../data/jobs";
import type { JobCardProps } from "@/types";
import { useState } from "react";

export function Home() {
  const [query, setQuery] = useState("");

  console.log("Search Query:", query);

  return (
    <main className="container my-3">
      {/* Searchbar */}
      <section className="mb-2">
        <Searchbar setQuery={setQuery} />
      </section>

      {/* Job Cards */}
      <section>
        <h2 className="fw-bold">All Jobs</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
          {jobs.map((job: JobCardProps) => (
            <div key={job._id} className="col">
              <JobCard {...job} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
