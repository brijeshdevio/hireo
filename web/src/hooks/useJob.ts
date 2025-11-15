import { getJobs } from "@/api/job.api";
import { useQuery } from "@tanstack/react-query";

export const useJob = () => {
  const findJobs = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => getJobs(),
  });

  return {
    getJobs: findJobs,
  };
};
