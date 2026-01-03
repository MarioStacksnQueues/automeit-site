import { z } from 'zod';
import { insertContactSchema, insertChecklistSchema } from './schema';

export const api = {
  contact: {
    submit: {
      method: 'POST' as const,
      path: '/api/contact',
      input: insertContactSchema,
      responses: {
        200: z.object({ success: z.boolean(), message: z.string() }),
        400: z.object({ message: z.string() }),
      },
    },
  },
  checklist: {
    request: {
      method: 'POST' as const,
      path: '/api/checklist',
      input: insertChecklistSchema,
      responses: {
        200: z.object({ success: z.boolean(), message: z.string() }),
        400: z.object({ message: z.string() }),
      },
    },
  }
};
