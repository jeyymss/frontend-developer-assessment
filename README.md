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

# Getting Started

Follow the instructions below to set up and run the project locally.

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js 18.18 or later
- npm
- Git

You can verify your installed versions with:

```bash
node -v
npm -v
git --version
```

---

## Installation

### 1. Clone the Repository

Clone the GitHub repository:

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
```

Replace the URL above with the actual GitHub repository URL.

For example:

```bash
git clone https://github.com/username/task-management.git
```

---

### 2. Navigate to the Project Directory

After cloning the repository, navigate into the project folder:

```bash
cd task-management
```

---

### 3. Install Dependencies

Install all required project dependencies:

```bash
npm install
```

This will install the packages defined in `package.json`.

---

### 4. Start the Development Server

Start the Next.js development server:

```bash
npm run dev
```

After the server starts successfully, you should see output similar to:

```text
Local: http://localhost:3000
```

---

### 5. Open the Application

Open your browser and visit:

```text
http://localhost:3000
```

The Client Project Tracker should now be running locally.

---

## Quick Setup

If Node.js and Git are already installed, the complete setup can be done with:

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
cd task-management
npm install
npm run dev
```

Then open:

```text
http://localhost:3000
```

---

## Available Commands

### Start Development Server

```bash
npm run dev
```

Starts the Next.js development server.

The application will be available at:

```text
http://localhost:3000
```

---

### Run ESLint

```bash
npm run lint
```

Runs ESLint to check the project for code quality and linting issues.

---

### Create Production Build

```bash
npm run build
```

Creates an optimized production build of the application.

---

### Start Production Server

After creating the production build:

```bash
npm start
```

The production application will be available at:

```text
http://localhost:3000
```

---

# Tech Stack

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

## Why these technologies?

### Next.js

Used as the React framework because it provides a structured application architecture and is suitable for building scalable frontend applications.

### TypeScript

Used for type safety and to make project models, form values, component props, and state easier to maintain.

### Tailwind CSS

Used for styling because it allows consistent, responsive UI development directly within the component structure.

### shadcn/ui

Used for reusable UI components such as dialogs, buttons, cards, inputs, selects, and toast notifications.

### React Hook Form + Zod

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

# Data Management

No backend or database is used in this assessment.

The initial project data is provided by:

```text
data/test_data.json
```

The data is loaded when the application starts and stored in React state.

Because this is a frontend-only implementation:

- Creating a project updates the UI immediately.
- Editing a project updates the UI immediately.
- Deleting a project updates the UI immediately.
- Changes are not persisted to a database.
- Refreshing the browser resets the data to the original `test_data.json`.

This approach was chosen because the assessment explicitly states that **no backend implementation is required**.

---

# Architecture & Technical Decisions

The application follows a component-based architecture.

Responsibilities are separated into reusable components:

- `TaskManager` handles the main application state and project operations.
- `TaskForm` handles project creation and editing.
- `TaskList` handles the desktop project list.
- `TaskCard` provides the mobile project presentation.
- `TaskFilters` handles search, filtering, and sorting controls.
- `DeleteTaskDialog` handles delete confirmation.
- Reusable shadcn/ui components provide the base UI elements.

Project-specific types are centralized in:

```text
types/task.ts
```

Validation logic is separated from the UI and handled using Zod.

This structure makes the application easier to maintain and allows individual components to be modified without affecting unrelated functionality.

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
```

---

# Error Handling

The application includes error handling for project operations.

When an operation fails, the application provides:

- An inline error message
- A toast notification
- A dismiss option for the inline error

Form validation errors are also displayed next to the relevant form fields.

The application handles cases where:

- No projects exist.
- No projects match the current filters.
- Required fields are missing.
- Invalid status or priority values are provided.
- The due date occurs before the start date.

---

# Testing the Main User Flows

After starting the application locally, the following flows can be tested.

## Create a Project

1. Click **New Project**.
2. Enter a client name.
3. Enter a project name.
4. Add a description.
5. Select a status.
6. Select a priority.
7. Select a start date.
8. Select a due date.
9. Submit the form.
10. Verify that:
    - The dialog closes.
    - The project appears immediately.
    - The project appears at the top when using **Recently Added**.
    - A success toast appears.

---

## Edit a Project

1. Select an existing project.
2. Click **Edit**.
3. Change one or more fields.
4. Submit the form.
5. Verify that:
    - The project updates immediately.
    - The dialog closes.
    - A success toast appears.

---

## Delete a Project

1. Select an existing project.
2. Click **Delete**.
3. Confirm the deletion.
4. Verify that:
    - The project disappears from the list.
    - Dashboard statistics update.
    - A success toast appears.

---

## Test Validation

Try submitting the project form with:

- Empty Client Name
- Empty Project Name
- Empty Status
- Empty Priority
- Empty Start Date
- Empty Due Date
- A Due Date earlier than the Start Date

The form should prevent submission and display appropriate validation messages.

---

## Test Search and Filters

Try:

- Searching by project name.
- Searching by client name.
- Searching by description.
- Filtering by status.
- Filtering by priority.
- Combining search and filters.
- Changing the sorting option.

The displayed project list should update immediately.

---

# Assessment Requirements Checklist

The implementation covers the required assessment functionality:

| Requirement | Status |
|---|---|
| Project List | ✅ |
| Create Project | ✅ |
| Edit Project | ✅ |
| Delete Project | ✅ |
| Client Name Validation | ✅ |
| Project Name Validation | ✅ |
| Status Validation | ✅ |
| Priority Validation | ✅ |
| Start Date Validation | ✅ |
| Due Date Validation | ✅ |
| Due Date ≥ Start Date | ✅ |
| Loading State | ✅ |
| Empty State | ✅ |
| Error State | ✅ |
| Search | ✅ |
| Status Filter | ✅ |
| Priority Filter | ✅ |
| Sorting | ✅ |
| Dashboard Summary | ✅ |
| Responsive Mobile Design | ✅ |
| Toast Notifications | ✅ |

---

# AI Usage Disclosure

AI tools were used during development, as permitted by the assessment instructions.

**AI tool used:**

- ChatGPT

AI assistance was used for:

- Discussing component architecture
- Troubleshooting implementation issues
- Reviewing code
- Debugging TypeScript and React issues
- Improving UI/UX implementation
- Refining documentation

The generated suggestions and code were reviewed, adapted, and tested as part of the development process.

---

# Technical Reflection

## Why did you choose this architecture?

The application uses a component-based architecture with responsibilities separated into task-specific components and reusable UI components.

The main project state is managed by `TaskManager`, while forms, filters, lists, cards, and dialogs are separated into their own components.

This keeps individual components focused and makes the application easier to maintain and extend.

---

## How would you improve the application with a backend?

If a backend were introduced, project state would be moved from local React state to API-backed data.

Potential API endpoints could include:

```text
GET    /api/projects
POST   /api/projects
PUT    /api/projects/:id
DELETE /api/projects/:id
```

The frontend could then handle:

- API loading states
- API errors
- Persistent project data
- Server-side validation
- Optimistic updates where appropriate
- Authentication and authorization

For a larger application, a data-fetching solution such as TanStack Query could also be introduced to manage caching, synchronization, and server state.

---

## How would you make the application scalable?

Potential improvements include:

- Moving API calls into a dedicated service layer.
- Introducing server-side pagination.
- Adding authentication and authorization.
- Adding persistent database storage.
- Adding automated unit and integration tests.
- Introducing centralized server-state management.
- Adding reusable data-table components.
- Separating dashboard analytics from project management logic.
- Adding audit logs for project changes.

The current architecture provides a reasonable foundation for these improvements without requiring major UI restructuring.

---

# Future Improvements

If additional development time were available, possible improvements would include:

- Backend API integration
- Database persistence
- Authentication
- Role-based permissions
- Unit and integration tests
- Drag-and-drop project management
- Project detail pages
- Pagination for large datasets
- Advanced project analytics
- Accessibility testing
- Automated CI/CD checks

---

# Submission

The completed project should be submitted through the official assessment application form.

The submission requires:

- Public GitHub repository link
- Setup and run instructions
- Short technical reflection answers

Make sure the GitHub repository is publicly accessible before submitting.

---

# License

This project was created as part of a **Frontend Developer Technical Assessment**.