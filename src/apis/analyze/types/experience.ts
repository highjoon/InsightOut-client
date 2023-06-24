import { ExperienceFormValues } from '@/feature/analyze/types';

export type ExperienceParams = {
  get: {
    id?: string;
    last?: boolean;
    capabilityId?: number;
    situation?: boolean;
    task?: boolean;
    action?: boolean;
    result?: boolean;
  };
  post: Partial<ExperienceFormValues>;
};

export type ExperienceResponse = {
  id: number;
  title: string;
  startDate: string;
  endDate: string;
  experienceStatus: string;
  situation: string;
  task: string;
  action: string;
  result: string;
  experienceInfo: {
    experienceInfoId: number;
    experienceId: number;
    motivation: string;
    experienceRole: string;
    analysis: string;
  };
};