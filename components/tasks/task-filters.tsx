"use client";

import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface TaskFiltersProps {
  search: string;
  status: string;
  priority: string;
  sort: string;

  onSearchChange: (value: string) => void;
  onStatusChange: (value: string) => void;
  onPriorityChange: (value: string) => void;
  onSortChange: (value: string) => void;
}

export function TaskFilters({
  search,
  status,
  priority,
  sort,
  onSearchChange,
  onStatusChange,
  onPriorityChange,
  onSortChange,
}: TaskFiltersProps) {
  return (
    <div className="space-y-4">
      {/* Search */}
      <div className="space-y-1.5">
        <label
          htmlFor="project-search"
          className="text-sm font-medium"
        >
          Search
        </label>

        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

          <Input
            id="project-search"
            value={search}
            onChange={(event) =>
              onSearchChange(event.target.value)
            }
            placeholder="Search projects..."
            className="h-10 pl-9"
          />
        </div>
      </div>

      {/* Filters */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {/* Status */}
        <div className="space-y-1.5">
          <label
            htmlFor="project-status"
            className="text-sm font-medium"
          >
            Status
          </label>

          <Select
            value={status}
            onValueChange={(value) => {
              if (value !== null) {
                onStatusChange(value);
              }
            }}
          >
            <SelectTrigger
              id="project-status"
              className="h-10 w-full"
            >
              <SelectValue placeholder="All statuses" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="all">
                All statuses
              </SelectItem>

              <SelectItem value="Pending">
                Pending
              </SelectItem>

              <SelectItem value="In Progress">
                In Progress
              </SelectItem>
              
              <SelectItem value="On Hold">
                On Hold
              </SelectItem>

              <SelectItem value="Completed">
                Completed
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Priority */}
        <div className="space-y-1.5">
          <label
            htmlFor="project-priority"
            className="text-sm font-medium"
          >
            Priority
          </label>

          <Select
            value={priority}
            onValueChange={(value) => {
              if (value !== null) {
                onPriorityChange(value);
              }
            }}
          >
            <SelectTrigger
              id="project-priority"
              className="h-10 w-full"
            >
              <SelectValue placeholder="All priorities" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="all">
                All priorities
              </SelectItem>

              <SelectItem value="Low">
                Low
              </SelectItem>

              <SelectItem value="Medium">
                Medium
              </SelectItem>

              <SelectItem value="High">
                High
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Sort */}
        <div className="space-y-1.5">
          <label
            htmlFor="project-sort"
            className="text-sm font-medium"
          >
            Sort by
          </label>

          <Select
            value={sort}
            onValueChange={(value) => {
              if (value !== null) {
                onSortChange(value);
              }
            }}
          >
            <SelectTrigger
              id="project-sort"
              className="h-10 w-full"
            >
              <SelectValue placeholder="Recently added" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="recent">
                Recently added
              </SelectItem>

              <SelectItem value="due-asc">
                Due date — earliest
              </SelectItem>

              <SelectItem value="due-desc">
                Due date — latest
              </SelectItem>

              <SelectItem value="name-asc">
                Project name — A to Z
              </SelectItem>

              <SelectItem value="name-desc">
                Project name — Z to A
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}