# Getting Started

Follow the instructions below to set up and run the project locally.

## Prerequisites

Before running the application, make sure you have the following installed:

- [Node.js](https://nodejs.org/) version 18.18 or later
- npm
- Git

You can check your installed versions with:

```bash
node -v
npm -v
git --version
```

---

# Client Project Tracker

A responsive frontend application for managing client projects for a digital agency.

This project was developed as part of a **Frontend Developer Technical Assessment**. The application allows users to create, view, update, and delete client projects while providing search, filtering, sorting, validation, dashboard statistics, and responsive layouts.


---

## Overview

The Client Project Tracker provides a simple interface for an agency to manage projects across different clients.

Users can:

- View all client projects
- Create new projects
- Edit existing projects
- Delete projects
- Search projects
- Filter projects by status
- Filter projects by priority
- Sort projects
- View project statistics
- Receive success and error notifications
- Use the application on desktop and mobile devices

No backend implementation is required for this assessment. Project data is initialized from the provided `test_data.json` file and managed in frontend state.

---


## Tech Stack

- **Next.js**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui**
- **Lucide React**
- **React Hook Form**
- **Zod**
- **Base UI**
- **ESLint**

### Why these technologies?

**Next.js**

Used as the React framework because it provides a structured application architecture and is suitable for building scalable frontend applications.

**TypeScript**

Used for type safety and to make project models, form values, component props, and state easier to maintain.

**Tailwind CSS**

Used for styling because it allows consistent, responsive UI development directly within the component structure.

**shadcn/ui**

Used for reusable UI components such as dialogs, buttons, cards, inputs, selects, and toast notifications.

**React Hook Form + Zod**

Used for form state management and validation. This keeps validation rules centralized and makes the project form easier to maintain.

---

# Features Implemented

## 1. Project List

All projects are displayed in an organized table/list layout.

Each project displays:

- Client Name
- Project Name
- Status
- Priority
- Due Date

The project list is responsive and provides a mobile-friendly presentation.

---

## 2. Create Project

Users can create a new project using the **New Project** button.

The form includes:

- Client Name
- Project Name
- Description
- Status
- Priority
- Start Date
- Due Date

After successfully creating a project:

- The project is immediately added to the project list.
- The new project appears at the top of the list when using the default **Recently Added** sorting.
- The dialog closes automatically.
- A success toast notification is displayed.

Example:

> Project created  
> Website Redesign has been added successfully.

---

## 3. Edit Project

Existing projects can be edited.

The current project information is loaded into the form and can be updated.

After successfully editing a project:

- The project list updates immediately.
- The dialog closes.
- A success toast notification is displayed.

---

## 4. Delete Project

Users can delete projects from the project list.

A confirmation dialog is displayed before deletion to prevent accidental removal.

After deletion:

- The project is removed immediately from the list.
- Dashboard statistics are updated.
- A success toast notification is displayed.

---

## 5. Form Validation

Project forms include validation for the required fields.

### Client Name

Required.

### Project Name

Required.

### Status

Required and must contain a valid project status.

Supported statuses include:

- Pending
- In Progress
- On Hold
- Completed

### Priority

Required and must contain a valid priority.

Supported priorities include:

- Low
- Medium
- High
- Urgent

### Start Date

Required.

### Due Date

Required.

The due date cannot be earlier than the start date.

Validation errors are displayed directly in the form to help the user correct invalid input.

---

# Bonus Features Implemented

The following optional features from the assessment were implemented.

## Search

Users can search projects by:

- Project Name
- Client Name
- Description

Search results update immediately as the user types.

---

## Status Filtering

Projects can be filtered by status:

- All
- Pending
- In Progress
- On Hold
- Completed

---

## Priority Filtering

Projects can be filtered by priority:

- All
- Low
- Medium
- High
- Urgent

---

## Sorting

Projects can be sorted using:

- Recently Added
- Due Date — Earliest First
- Due Date — Latest First
- Project Name — A to Z
- Project Name — Z to A

The default sorting option is **Recently Added**.

This ensures that newly created projects appear at the top of the list.

---

## Dashboard Summary

The dashboard provides project statistics for:

- Total Projects
- Pending
- In Progress
- Completed

The statistics update automatically when projects are created, edited, or deleted.

---

## Responsive Design

The application is designed to work across different screen sizes.

The interface adapts for:

- Desktop
- Tablet
- Mobile

The project management interface uses responsive layouts to keep the application usable on smaller screens.

---

## Toast Notifications

The application uses the shadcn toast component for user feedback.

Success notifications are displayed when:

- A project is created
- A project is updated
- A project is deleted

Error notifications are displayed when an operation fails.

---

# UI States

The application handles the following states.

## Loading State

A skeleton loading state is included for the project list.

This provides a visual placeholder while project data is being loaded.

---

## Empty State

When there are no projects, the application displays an empty state with an option to create a project.

Example:

> No projects yet  
> Create your first project to get started.

---

## No Results State

If projects exist but no projects match the current search or filters, the application displays a separate no-results state.

Example:

> No projects found  
> Try changing your search or filters.

---

## Error State

Errors are handled using both:

- An inline error message
- Toast notification feedback

This gives users immediate feedback while keeping the application state understandable.

---

# Project Structure

The project is organized by responsibility to keep the code maintainable.

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
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md