import { useJob } from "@/hooks/useJob";
import type { CreateJobType } from "@/types";

const formFields = [
  {
    name: "title",
    type: "text",
    label: "Job Title",
  },
  {
    name: "company",
    type: "text",
    label: "Company Name",
  },
  {
    name: "location",
    type: "text",
    label: "Location",
  },
  {
    name: "salary",
    type: "text",
    label: "Salary",
  },
  {
    name: "type",
    type: "text",
    label: "Job Type",
  },
];

export function NewJob() {
  const { createJob } = useJob();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());
    data.qualifications = data.qualifications?.toString();
    data.qualifications = data.qualifications?.split("\n") as unknown as string;
    createJob.mutate(data as unknown as CreateJobType);
    e.currentTarget.reset();
  };

  return (
    <main className="container my-3">
      <section>
        <h3 className="fw-bold">Post a Job</h3>
        <form onSubmit={handleSubmit}>
          {formFields.map((field) => (
            <div className="mb-2" key={field.name}>
              <label htmlFor={field.name} className="form-label">
                {field.label}
              </label>
              <input
                type={field.type}
                className="form-control"
                id={field.name}
                name={field.name}
                required
              />
            </div>
          ))}
          <div className="mb-3">
            <label htmlFor={"description"} className="form-label">
              Job Description
            </label>
            <textarea
              className="form-control"
              id={"description"}
              name={"description"}
              rows={2}
              required
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor={"qualifications"} className="form-label">
              Job Qualifications
            </label>
            <textarea
              className="form-control"
              id={"qualifications"}
              name={"qualifications"}
              rows={2}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={createJob.isPending}
          >
            {createJob.isPending ? (
              <span className="spinner-border spinner-border-sm"></span>
            ) : (
              "Post Job"
            )}
          </button>
        </form>
      </section>
    </main>
  );
}
