"use client";

import type { Project } from "@/types/task";

import { TaskCard } from "@/components/tasks/task-card";

interface TaskListProps {
  tasks: Project[];
  onEdit: (task: Project) => void;
  onDelete: (task: Project) => void;
}

export function TaskList({
  tasks,
  onEdit,
  onDelete,
}: TaskListProps) {
  if (tasks.length === 0) {
    return null;
  }

  return (
    <div className="divide-y">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}