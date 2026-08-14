import { z } from "zod";

import {
  PROJECT_PRIORITIES,
  PROJECT_STATUSES,
} from "@/types/task";

export const projectSchema = z
  .object({
    clientName: z
      .string()
      .trim()
      .min(1, "Client name is required."),

    projectName: z
      .string()
      .trim()
      .min(1, "Project name is required."),

    description: z
      .string()
      .trim()
      .max(500, "Description must be 500 characters or less."),

    status: z.enum(PROJECT_STATUSES),

    priority: z.enum(PROJECT_PRIORITIES),

    startDate: z
      .string()
      .min(1, "Start date is required."),

    dueDate: z
      .string()
      .min(1, "Due date is required."),
  })
  .refine(
    (data) => data.dueDate >= data.startDate,
    {
      message:
        "Due date cannot be earlier than start date.",
      path: ["dueDate"],
    },
  );

export type ProjectFormSchema =
  z.infer<typeof projectSchema>;