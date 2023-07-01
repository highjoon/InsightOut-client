import { AxiosResponse, AxiosError } from 'axios';
import { UseMutationOptions, useMutation, useQueryClient } from '@tanstack/react-query';

import { RESUME_KEY } from '@/shared/constants/querykeys';

import { ResumeParams } from '@/apis/resume/types/resume';
import resumeApi from '@/apis/resume/resume';

export const useCreateResume = (options?: UseMutationOptions<AxiosResponse, AxiosError>) => {
  const queryClient = useQueryClient();

  return useMutation(resumeApi.post, {
    ...options,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [RESUME_KEY.lists()] });
    },
  });
};

export const useUpdateResumeTitle = (
  resumeId: ResumeParams['patch']['resumeId'],
  options?: UseMutationOptions<AxiosResponse, AxiosError, ResumeParams['patch']['payload']['title']>
) => {
  const queryClient = useQueryClient();

  return useMutation((title) => resumeApi.patch({ resumeId, payload: { title } }), {
    ...options,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [RESUME_KEY.lists()] });
    },
  });
};

export const useDeleteResume = (options?: UseMutationOptions<AxiosResponse, AxiosError, ResumeParams['delete']>) => {
  const queryClient = useQueryClient();

  return useMutation((resumeId) => resumeApi.delete(resumeId), {
    ...options,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [RESUME_KEY.lists()] });
    },
  });
};