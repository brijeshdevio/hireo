import { createJob, deleteJob, getJob, getJobs } from "@/api/job.api";
import {
  useMutation,
  useQueryClient,
  type InvalidateQueryFilters,
} from "@tanstack/react-query";
import { isAxiosError } from "axios";
import { toast } from "sonner";
import type { CreateJobType } from "@/types";

export const useJob = () => {
  const clientQuery = useQueryClient();

  const createNewJob = useMutation({
    mutationFn: (data: CreateJobType) => createJob(data),
    onSuccess: async () => {
      toast.success("Job created successfully!");
      await clientQuery.invalidateQueries(["jobs"] as InvalidateQueryFilters<
        readonly unknown[]
      >);
    },
    onError: (error: unknown) => {
      if (isAxiosError(error)) {
        const message = error?.response?.data?.message || error.message;
        toast.error(message);
      }
    },
  });

  const findJobs = useMutation({
    mutationKey: ["jobs"],
    mutationFn: async (query: string) => getJobs(query),
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
      await clientQuery.invalidateQueries(["jobs"] as InvalidateQueryFilters<
        readonly unknown[]
      >);
    },
    onError: (error: unknown) => {
      if (isAxiosError(error)) {
        const message = error?.response?.data?.message || error.message;
        toast.error(message);
      }
    },
  });

  return {
    createJob: createNewJob,
    getJobs: findJobs,
    getJob: findJob,
    deleteJob: deleteJobById,
  };
};
