import { deleteJob, getJobs } from "@/api/job.api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useJob = () => {
  const clientQuery = useQueryClient();

  const findJobs = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => getJobs(),
  });

  const deleteJobById = useMutation({
    mutationFn: (id: string) => deleteJob(id),
    onSuccess: () => {
      clientQuery.invalidateQueries(["jobs"]);
    },
  });

  return {
    getJobs: findJobs,
    deleteJob: deleteJobById,
  };
};
