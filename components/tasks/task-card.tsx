"use client";

import {
  MoreHorizontal,
  Pencil,
  Trash2,
} from "lucide-react";

import type { Project } from "@/types/task";

import {
  formatDate,
  priorityStyles,
  statusStyles,
} from "@/lib/task-utils";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface TaskCardProps {
  task: Project;
  onEdit: (task: Project) => void;
  onDelete: (task: Project) => void;
}

export function TaskCard({
  task,
  onEdit,
  onDelete,
}: TaskCardProps) {
  return (
    <Card>
      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="text-sm text-muted-foreground">
              {task.clientName}
            </p>

            <h3 className="mt-1 truncate font-semibold">
              {task.projectName}
            </h3>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <MoreHorizontal className="size-4" />

              <span className="sr-only">
                Open project menu
              </span>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              <DropdownMenuItem
                onClick={() => onEdit(task)}
              >
                <Pencil className="mr-2 size-4" />
                Edit
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              <DropdownMenuItem
                variant="destructive"
                onClick={() => onDelete(task)}
              >
                <Trash2 className="mr-2 size-4" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <p className="mt-3 line-clamp-2 text-sm text-muted-foreground">
          {task.description || "No description"}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <Badge
            variant="outline"
            className={statusStyles[task.status]}
          >
            {task.status}
          </Badge>

          <Badge
            variant="outline"
            className={priorityStyles[task.priority]}
          >
            {task.priority}
          </Badge>
        </div>

        <div className="mt-5 grid grid-cols-2 border-t pt-4">
          <div>
            <p className="text-xs text-muted-foreground">
              Start date
            </p>

            <p className="mt-1 text-sm font-medium">
              {formatDate(task.startDate)}
            </p>
          </div>

          <div>
            <p className="text-xs text-muted-foreground">
              Due date
            </p>

            <p className="mt-1 text-sm font-medium">
              {formatDate(task.dueDate)}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}