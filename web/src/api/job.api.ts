import { axiosClient } from "./axiosClient";

export const createJob = async (data: any) => {
  const response = await axiosClient.post("/jobs", data);
  return response.data;
};

export const getJobs = async () => {
  const response = await axiosClient.get("/jobs");
  return response.data;
};

export const getJob = async (id: string) => {
  const response = await axiosClient.get(`/jobs/${id}`);
  return response.data;
};

export const deleteJob = async (id: string) => {
  const response = await axiosClient.delete(`/jobs/${id}`);
  return response.data;
};
