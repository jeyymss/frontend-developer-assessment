"use client";

import { useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import type { Project, ProjectFormValues, ProjectStatus, ProjectPriority } from "@/types/task";

import { projectSchema } from "@/lib/validations";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface TaskFormProps {
  project?: Project | null;
  onSubmit: (values: ProjectFormValues) => void;
  onCancel: () => void;
}

export function TaskForm({ project, onSubmit, onCancel }: TaskFormProps) {
  const form = useForm<ProjectFormValues>({
    resolver: zodResolver(projectSchema),

    defaultValues: {
      clientName: "",
      projectName: "",
      description: "",
      status: "Pending",
      priority: "Medium",
      startDate: "",
      dueDate: "",
    },
  });

  const selectedStatus = useWatch({
    control: form.control,
    name: "status",
  });

  const selectedPriority = useWatch({
    control: form.control,
    name: "priority",
  });

  useEffect(() => {
    if (project) {
      form.reset({
        clientName: project.clientName,
        projectName: project.projectName,
        description: project.description,
        status: project.status,
        priority: project.priority,
        startDate: project.startDate,
        dueDate: project.dueDate,
      });
    } else {
      form.reset({
        clientName: "",
        projectName: "",
        description: "",
        status: "Pending",
        priority: "Medium",
        startDate: "",
        dueDate: "",
      });
    }
  }, [project, form]);

  const handleSubmit = (values: ProjectFormValues) => {
    onSubmit(values);
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-5">
      {/* Client */}
      <div className="space-y-2">
        <Label htmlFor="clientName">
          Client Name
          <span className="text-destructive ml-1">*</span>
        </Label>

        <Input
          id="clientName"
          placeholder="e.g. Acme Corporation"
          {...form.register("clientName")}
        />

        {form.formState.errors.clientName && (
          <p className="text-sm text-destructive">
            {form.formState.errors.clientName.message}
          </p>
        )}
      </div>

      {/* Project */}
      <div className="space-y-2">
        <Label htmlFor="projectName">
          Project Name
          <span className="text-destructive ml-1">*</span>
        </Label>

        <Input
          id="projectName"
          placeholder="e.g. Website Redesign"
          {...form.register("projectName")}
        />

        {form.formState.errors.projectName && (
          <p className="text-sm text-destructive">
            {form.formState.errors.projectName.message}
          </p>
        )}
      </div>

      {/* Description */}
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>

        <Textarea
          id="description"
          placeholder="Describe the project..."
          className="min-h-[100px] resize-none"
          {...form.register("description")}
        />

        {form.formState.errors.description && (
          <p className="text-sm text-destructive">
            {form.formState.errors.description.message}
          </p>
        )}
      </div>

      {/* Status / Priority */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label>
            Status
            <span className="text-destructive ml-1">*</span>
          </Label>

          <Select
            value={selectedStatus}
            onValueChange={(value) => {
              form.setValue("status", value as ProjectStatus, {
                shouldValidate: true,
              });
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select status" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="Pending">Pending</SelectItem>

              <SelectItem value="In Progress">In Progress</SelectItem>

              <SelectItem value="Completed">Completed</SelectItem>

              <SelectItem value="On Hold">On Hold</SelectItem>
            </SelectContent>
          </Select>

          {form.formState.errors.status && (
            <p className="text-sm text-destructive">
              {form.formState.errors.status.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label>
            Priority
            <span className="text-destructive ml-1">*</span>
          </Label>

          <Select
            value={selectedPriority}
            onValueChange={(value) => {
              form.setValue("priority", value as ProjectPriority, {
                shouldValidate: true,
              });
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select priority" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="Low">Low</SelectItem>

              <SelectItem value="Medium">Medium</SelectItem>

              <SelectItem value="High">High</SelectItem>
            </SelectContent>
          </Select>

          {form.formState.errors.priority && (
            <p className="text-sm text-destructive">
              {form.formState.errors.priority.message}
            </p>
          )}
        </div>
      </div>

      {/* Dates */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="startDate">
            Start Date
            <span className="text-destructive ml-1">*</span>
          </Label>

          <Input id="startDate" type="date" {...form.register("startDate")} />

          {form.formState.errors.startDate && (
            <p className="text-sm text-destructive">
              {form.formState.errors.startDate.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="dueDate">
            Due Date
            <span className="text-destructive ml-1">*</span>
          </Label>

          <Input id="dueDate" type="date" {...form.register("dueDate")} />

          {form.formState.errors.dueDate && (
            <p className="text-sm text-destructive">
              {form.formState.errors.dueDate.message}
            </p>
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col-reverse gap-2 pt-2 sm:flex-row sm:justify-end">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>

        <Button type="submit">
          {project ? "Save Changes" : "Create Project"}
        </Button>
      </div>
    </form>
  );
}
