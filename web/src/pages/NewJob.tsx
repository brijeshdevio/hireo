import { useJob } from "@/hooks/useJob";
import type { CreateJobType } from "@/types";

const formFields = [
  {
    name: "title",
    type: "text",
    label: "Job Title",
    placeholder: "e.g. Senior Software Engineer",
  },
  {
    name: "company",
    type: "text",
    label: "Company Name",
    placeholder: "e.g. TechNova Solutions",
  },
  {
    name: "location",
    type: "text",
    label: "Location",
    placeholder: "e.g. San Francisco, CA or Remote",
  },
  {
    name: "salary",
    type: "text",
    label: "Salary",
    placeholder: "e.g. $80,000 – $120,000 per year",
  },
];

export function NewJob() {
  const { createJob } = useJob();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());
    data.qualifications = data.qualifications?.toString();
    data.qualifications = data.qualifications?.split(",") as unknown as string;
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
                placeholder={field.placeholder}
              />
            </div>
          ))}
          <div className="mb-3">
            <label htmlFor={"jobType"} className="form-label">
              Job Type
            </label>
            <select name="type" id="jobType" className="form-select">
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Internship">Internship</option>
              <option value="Contract">Contract</option>
              <option value="Temporary">Temporary</option>
            </select>
          </div>
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
              placeholder="Briefly describe the role, responsibilities, and expectations of the job."
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
              placeholder="e.g. Bachelor's degree, JavaScript, React, 3+ years experience"
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
