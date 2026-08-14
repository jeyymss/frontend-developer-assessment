"use client";

import { useMemo, useState } from "react";

import {
  CheckCircle2,
  Clock3,
  FolderKanban,
  Loader2,
  Plus,
  SearchX,
} from "lucide-react";

import initialProjects from "@/data/test_data.json";

import type {
  Project,
  ProjectFormValues,
} from "@/types/task";

import { TaskForm } from "@/components/tasks/task-form";
import { TaskList } from "@/components/tasks/task-list";
import { TaskFilters } from "@/components/tasks/task-filters";
import { DeleteTaskDialog } from "@/components/tasks/delete-task-dialog";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "@/components/ui/toast";

export function TaskManager() {
  const [tasks, setTasks] = useState<Project[]>(
    initialProjects as Project[],
  );

  const [loading] = useState(false);

  const [error, setError] = useState<string | null>(
    null,
  );

  /*
   * Filters
   */
  const [search, setSearch] = useState("");

  const [status, setStatus] = useState("all");

  const [priority, setPriority] = useState("all");

  /*
   * Default sorting
   *
   * Recently added projects appear first.
   */
  const [sort, setSort] = useState("recent");

  /*
   * Create / Edit dialog
   */
  const [formOpen, setFormOpen] = useState(false);

  const [editingTask, setEditingTask] =
    useState<Project | null>(null);

  /*
   * Delete dialog
   */
  const [deleteTask, setDeleteTask] =
    useState<Project | null>(null);

  /*
   * Dashboard statistics
   */
  const stats = useMemo(() => {
    return {
      total: tasks.length,

      pending: tasks.filter(
        (task) => task.status === "Pending",
      ).length,

      inProgress: tasks.filter(
        (task) => task.status === "In Progress",
      ).length,

      completed: tasks.filter(
        (task) => task.status === "Completed",
      ).length,
    };
  }, [tasks]);

  /*
   * Search + Filter + Sort
   */
  const filteredTasks = useMemo(() => {
    const searchValue = search
      .toLowerCase()
      .trim();

    const result = tasks.filter((task) => {
      const matchesSearch =
        !searchValue ||
        task.projectName
          .toLowerCase()
          .includes(searchValue) ||
        task.clientName
          .toLowerCase()
          .includes(searchValue) ||
        task.description
          .toLowerCase()
          .includes(searchValue);

      const matchesStatus =
        status === "all" ||
        task.status === status;

      const matchesPriority =
        priority === "all" ||
        task.priority === priority;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesPriority
      );
    });

    return [...result].sort((a, b) => {
      switch (sort) {
        case "recent":
          return b.id - a.id;

        case "due-asc":
          return a.dueDate.localeCompare(
            b.dueDate,
          );

        case "due-desc":
          return b.dueDate.localeCompare(
            a.dueDate,
          );

        case "name-asc":
          return a.projectName.localeCompare(
            b.projectName,
          );

        case "name-desc":
          return b.projectName.localeCompare(
            a.projectName,
          );

        default:
          return b.id - a.id;
      }
    });
  }, [
    tasks,
    search,
    status,
    priority,
    sort,
  ]);

  /*
   * Open create dialog
   */
  const openCreateDialog = () => {
    setEditingTask(null);
    setFormOpen(true);
  };

  /*
   * Open edit dialog
   */
  const openEditDialog = (task: Project) => {
    setEditingTask(task);
    setFormOpen(true);
  };

  /*
   * Create / Update project
   */
  const handleSubmit = (
    values: ProjectFormValues,
  ) => {
    try {
      setError(null);

      /*
       * UPDATE
       */
      if (editingTask) {
        setTasks((current) =>
          current.map((task) =>
            task.id === editingTask.id
              ? {
                  ...task,
                  ...values,
                }
              : task,
          ),
        );

        toast.add({
          title: "Project updated",
          description: `${values.projectName} has been updated successfully.`,
          type: "success",
        });
      }

      /*
       * CREATE
       */
      else {
        const newTask: Project = {
          id: Date.now(),
          ...values,
        };

        /*
         * Add to the beginning of the array.
         *
         * Because the default sort is "recent",
         * this project will also appear first.
         */
        setTasks((current) => [
          newTask,
          ...current,
        ]);

        toast.add({
          title: "Project created",
          description: `${values.projectName} has been added successfully.`,
          type: "success",
        });
      }

      /*
       * Close dialog
       */
      setFormOpen(false);
      setEditingTask(null);
    } catch {
      setError(
        "Something went wrong while saving the project.",
      );

      toast.add({
        title: "Unable to save project",
        description:
          "Something went wrong while saving the project. Please try again.",
        type: "error",
      });
    }
  };

  /*
   * Delete project
   */
  const handleDelete = () => {
    if (!deleteTask) {
      return;
    }

    try {
      setError(null);

      const deletedProjectName =
        deleteTask.projectName;

      setTasks((current) =>
        current.filter(
          (task) =>
            task.id !== deleteTask.id,
        ),
      );

      setDeleteTask(null);

      toast.add({
        title: "Project deleted",
        description: `${deletedProjectName} has been removed successfully.`,
        type: "success",
      });
    } catch {
      setError(
        "Something went wrong while deleting the project.",
      );

      toast.add({
        title: "Unable to delete project",
        description:
          "Something went wrong while deleting the project. Please try again.",
        type: "error",
      });
    }
  };

  return (
    <main className="min-h-screen bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

        {/* =========================
            HEADER
        ========================== */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Badge variant="secondary">
              Client Project Tracker
            </Badge>

            <h1 className="mt-3 text-3xl font-bold tracking-tight">
              Projects
            </h1>

            <p className="mt-1 text-muted-foreground">
              Manage and track your client projects.
            </p>
          </div>

          <Button
            onClick={openCreateDialog}
            className="w-full sm:w-auto"
          >
            <Plus className="mr-2 size-4" />
            New Project
          </Button>

          {/* =========================
              CREATE / EDIT DIALOG
          ========================== */}
          <Dialog
            open={formOpen}
            onOpenChange={setFormOpen}
          >
            <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>
                  {editingTask
                    ? "Edit Project"
                    : "Create Project"}
                </DialogTitle>

                <DialogDescription>
                  {editingTask
                    ? "Update the project details."
                    : "Add a new client project."}
                </DialogDescription>
              </DialogHeader>

              <TaskForm
                project={editingTask}
                onSubmit={handleSubmit}
                onCancel={() => {
                  setFormOpen(false);
                  setEditingTask(null);
                }}
              />
            </DialogContent>
          </Dialog>
        </div>

        {/* =========================
            ERROR
        ========================== */}
        {error && (
          <Card className="mt-6 border-destructive/50">
            <CardContent className="flex items-center gap-3 p-4">
              <p className="text-sm text-destructive">
                {error}
              </p>

              <Button
                variant="ghost"
                size="sm"
                className="ml-auto"
                onClick={() => setError(null)}
              >
                Dismiss
              </Button>
            </CardContent>
          </Card>
        )}

        {/* =========================
            STATISTICS
        ========================== */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Projects"
            value={stats.total}
            icon={
              <FolderKanban className="size-4" />
            }
          />

          <StatCard
            title="Pending"
            value={stats.pending}
            icon={
              <Clock3 className="size-4" />
            }
          />

          <StatCard
            title="In Progress"
            value={stats.inProgress}
            icon={
              <Loader2 className="size-4" />
            }
          />

          <StatCard
            title="Completed"
            value={stats.completed}
            icon={
              <CheckCircle2 className="size-4" />
            }
          />
        </div>

        {/* =========================
            PROJECT LIST
        ========================== */}
        <Card className="mt-8">
          <CardContent className="p-4 sm:p-6">

            {/* List header */}
            <div className="mb-6">
              <h2 className="font-semibold">
                All Projects
              </h2>

              <p className="mt-1 text-sm text-muted-foreground">
                {filteredTasks.length}{" "}
                {filteredTasks.length === 1
                  ? "project"
                  : "projects"}{" "}
                found
              </p>
            </div>

            {/* =========================
                FILTERS
            ========================== */}
            <TaskFilters
              search={search}
              status={status}
              priority={priority}
              sort={sort}
              onSearchChange={setSearch}
              onStatusChange={setStatus}
              onPriorityChange={setPriority}
              onSortChange={setSort}
            />

            {/* =========================
                PROJECT CONTENT
            ========================== */}
            {loading ? (
              <LoadingState />
            ) : tasks.length === 0 ? (
              <EmptyState
                onCreate={openCreateDialog}
              />
            ) : filteredTasks.length === 0 ? (
              <NoResultsState />
            ) : (
              <div className="mt-6">
                <TaskList
                  tasks={filteredTasks}
                  onEdit={openEditDialog}
                  onDelete={setDeleteTask}
                />
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* =========================
          DELETE DIALOG
      ========================== */}
      <DeleteTaskDialog
        open={Boolean(deleteTask)}
        taskTitle={deleteTask?.projectName}
        onOpenChange={(open) => {
          if (!open) {
            setDeleteTask(null);
          }
        }}
        onConfirm={handleDelete}
      />
    </main>
  );
}

/* =========================================
   STAT CARD
========================================= */

function StatCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: number;
  icon: React.ReactNode;
}) {
  return (
    <Card>
      <CardContent className="p-5">
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            {title}
          </p>

          <div className="rounded-md border bg-muted p-2">
            {icon}
          </div>
        </div>

        <p className="mt-3 text-2xl font-bold">
          {value}
        </p>
      </CardContent>
    </Card>
  );
}

/* =========================================
   LOADING STATE
========================================= */

function LoadingState() {
  return (
    <div className="mt-6 space-y-3">
      {Array.from({ length: 5 }).map(
        (_, index) => (
          <Skeleton
            key={index}
            className="h-16 w-full"
          />
        ),
      )}
    </div>
  );
}

/* =========================================
   EMPTY STATE
========================================= */

function EmptyState({
  onCreate,
}: {
  onCreate: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="rounded-full bg-muted p-4">
        <FolderKanban className="size-6 text-muted-foreground" />
      </div>

      <h3 className="mt-4 font-semibold">
        No projects yet
      </h3>

      <p className="mt-1 max-w-sm text-sm text-muted-foreground">
        Create your first project to get started.
      </p>

      <Button
        className="mt-5"
        onClick={onCreate}
      >
        <Plus className="mr-2 size-4" />
        Create Project
      </Button>
    </div>
  );
}

/* =========================================
   NO RESULTS STATE
========================================= */

function NoResultsState() {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <SearchX className="size-8 text-muted-foreground" />

      <h3 className="mt-4 font-semibold">
        No projects found
      </h3>

      <p className="mt-1 text-sm text-muted-foreground">
        Try changing your search or filters.
      </p>
    </div>
  );
}