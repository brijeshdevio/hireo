import { deleteJob, getJobs } from "@/api/job.api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useJob = () => {
  const clientQuery = useQueryClient();

  const findJobs = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => getJobs(),
  });

  const deleteJobById = useMutation({
    mutationFn: (id: string) => deleteJob(id),
    onSuccess: async () => {
      toast.success("Job deleted successfully!");
      await clientQuery.invalidateQueries(["jobs"]);
    },
  });

  return {
    getJobs: findJobs,
    deleteJob: deleteJobById,
  };
};
