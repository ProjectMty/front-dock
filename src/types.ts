import { type ReactNode } from 'react';

export type Question = {
  id: string;
  question: string;
  response: ReactNode;
};

export type ContactFormFields = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  subject: string;
};
