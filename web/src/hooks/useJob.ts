import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createJob, deleteJob, getJob, getJobs } from "@/api/job.api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import { toast } from "sonner";
import type { CreateJobType } from "@/types";

export const useJob = () => {
  const [query, setQuery] = useState("");
  const queryClient = useQueryClient();
  const { id } = useParams();

  const createNewJob = useMutation({
    mutationFn: (data: CreateJobType) => createJob(data),
    onSuccess: async () => {
      toast.success("Job created successfully!");
      await queryClient.invalidateQueries({ queryKey: ["jobs", query] });
    },
    onError: (error: unknown) => {
      if (isAxiosError(error)) {
        const message = error?.response?.data?.message || error.message;
        toast.error(message);
      }
    },
  });

  const findJobs = useQuery({
    queryKey: ["jobs", query],
    queryFn: async () => getJobs(query),
    enabled: false,
  });

  const findJob = useQuery({
    queryKey: ["job", id],
    queryFn: async () => await getJob(id!),
    enabled: false,
    staleTime: Infinity,
  });

  const deleteJobById = useMutation({
    mutationFn: (id: string) => deleteJob(id),
    onSuccess: () => {
      console.log("Job deleted successfully");
      findJobs.refetch();
      toast.success("Job deleted successfully!");
    },
    onError: (error: unknown) => {
      if (isAxiosError(error)) {
        const message = error?.response?.data?.message || error.message;
        toast.error(message);
      }
    },
  });

  const jobs = findJobs.data || [];

  useEffect(() => {
    if (query) {
      findJobs.refetch();
    }
  }, [query]);

  useEffect(() => {
    if (id) {
      findJob.refetch();
    }
  }, [id]);

  return {
    fetchJobs: findJobs.refetch,
    setQuery,
    createJob: createNewJob,
    getJobs: findJobs,
    getJob: findJob,
    deleteJob: deleteJobById,
    jobs,
    isFindJobPending: findJobs.isPending,
  };
};
