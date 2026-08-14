export const PROJECT_STATUSES = [
  "Pending",
  "In Progress",
  "Completed",
  "On Hold"
] as const;

export const PROJECT_PRIORITIES = [
  "Low",
  "Medium",
  "High",
  "Urgent",
] as const;

export type ProjectStatus =
  (typeof PROJECT_STATUSES)[number];

export type ProjectPriority =
  (typeof PROJECT_PRIORITIES)[number];

export interface Project {
  id: number;
  clientName: string;
  projectName: string;
  description: string;
  status: ProjectStatus;
  priority: ProjectPriority;
  startDate: string;
  dueDate: string;
}

export interface ProjectFormValues {
  clientName: string;
  projectName: string;
  description: string;
  status: ProjectStatus;
  priority: ProjectPriority;
  startDate: string;
  dueDate: string;
}