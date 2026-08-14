# Client Project Tracker

A responsive frontend application for managing client projects in a digital agency environment.

The application allows users to create, view, edit, and delete projects while providing search, filtering, sorting, validation, dashboard statistics, and responsive layouts.

This project was developed as part of a Frontend Developer Technical Assessment.

---

## Overview

The Client Project Tracker provides a centralized interface for managing client projects.

Users can:

- View all projects
- Create new projects
- Edit existing projects
- Delete projects
- Search projects
- Filter projects by status
- Filter projects by priority
- Sort projects
- View project statistics
- Validate project information
- Receive success and error feedback through toast notifications
- Use the application on desktop and mobile devices

No backend implementation is required for this assessment. Project data is initially loaded from the provided `test_data.json` file and managed in client-side state during the session.

---

## Features

### Required Features

#### Project List

Displays project information including:

- Client Name
- Project Name
- Status
- Priority
- Due Date

Projects are presented in a responsive table/list layout.

#### Create Project

Users can create a new project through a modal form.

After successfully creating a project:

- The project is immediately added to the project list
- The project appears at the top when using the default "Recently Added" sorting
- A success toast notification is displayed
- The dialog closes automatically

#### Edit Project

Users can edit existing projects.

After updating a project:

- The project list updates immediately
- A success toast notification confirms the update

#### Delete Project

Users can delete projects through a confirmation dialog.

After deletion:

- The project is removed immediately from the list
- Dashboard statistics are updated
- A success toast notification is displayed

#### Form Validation

The project form validates:

- Client Name is required
- Project Name is required
- Status is required
- Status must be a valid project status
- Priority is required
- Priority must be a valid project priority
- Due Date cannot be earlier than Start Date

Validation errors are displayed directly within the form.

#### UI States

The application handles:

- Loading state
- Empty state
- No search/filter results state
- Error state
- Success notifications
- Delete confirmation

---

## Bonus Features

The following optional features were also implemented:

### Search

Projects can be searched by:

- Project Name
- Client Name
- Description

### Status Filtering

Projects can be filtered by:

- All
- Pending
- In Progress
- Completed
- On Hold

### Priority Filtering

Projects can be filtered by:

- All
- Low
- Medium
- High
- Urgent

### Sorting

Projects can be sorted by:

- Recently Added
- Due Date — Earliest
- Due Date — Latest
- Project Name — A-Z
- Project Name — Z-A

The default sorting is **Recently Added**, so newly created projects appear at the top of the list.

### Dashboard Summary

The dashboard displays project counts for:

- Total Projects
- Pending
- In Progress
- Completed

### Responsive Design

The interface is designed to work across:

- Desktop
- Tablet
- Mobile

### Toast Notifications

Success and error feedback is provided through the Shadcn toast system.

Examples include:

- Project created successfully
- Project updated successfully
- Project deleted successfully
- Unable to save project
- Unable to delete project

---

## Tech Stack

### Core

- [Next.js](https://nextjs.org/)
- React
- TypeScript

### UI

- [shadcn/ui](https://ui.shadcn.com/)
- Tailwind CSS
- Lucide React

### Forms & Validation

- React Hook Form
- Zod

### Data

- Local JSON data source
- React state management

---

## Project Structure

```text
task-management/
│
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── tasks/
│   │   ├── delete-task-dialog.tsx
│   │   ├── task-card.tsx
│   │   ├── task-filters.tsx
│   │   ├── task-form.tsx
│   │   ├── task-list.tsx
│   │   └── task-manager.tsx
│   │
│   └── ui/
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       ├── input.tsx
│       ├── select.tsx
│       ├── skeleton.tsx
│       ├── toast.tsx
│       └── ...
│
├── data/
│   └── test_data.json
│
├── lib/
│   ├── task-utils.ts
│   ├── utils.ts
│   └── validation.ts
│
├── types/
│   └── task.ts
│
├── public/
│
├── components.json
├── package.json
├── tsconfig.json
└── README.md