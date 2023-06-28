import { ResumeData } from '@/features/resume/types/resume';

export type ResumeParams = {
  patch: { resumeId: number; payload: { title: string } };
  delete: { resumeId: number };
};

export interface ResumeResponse {
  get: ResumeData[];
}
