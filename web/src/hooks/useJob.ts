import { deleteJob, getJob, getJobs } from "@/api/job.api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import { toast } from "sonner";

export const useJob = () => {
  const clientQuery = useQueryClient();

  const findJobs = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => getJobs(),
  });

  const findJob = useMutation({
    mutationFn: (id: string) => getJob(id),
    onSuccess: (data) => {
      clientQuery.setQueryData(["job", data?._id as string], data);
    },
    onError: (error: unknown) => {
      if (isAxiosError(error)) {
        const message = error?.response?.data?.message || error.message;
        toast.error(message);
      }
    },
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
    getJob: findJob,
    deleteJob: deleteJobById,
  };
};
