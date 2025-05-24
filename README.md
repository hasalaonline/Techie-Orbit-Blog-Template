# Techie Orbit Blog Template

## Description

A Next.js starter template for creating a modern, feature-rich tech blog.

**Key Features:**

*   Responsive design
*   Markdown support
*   Syntax highlighting
*   Author pages
*   Tag-based filtering
*   Search functionality
*   Dark mode support

## Tech Stack

*   Next.js
*   React
*   TypeScript
*   Tailwind CSS
*   Radix UI (for UI components)
*   TanStack React Query (for data fetching)

## Getting Started

### Prerequisites

*   Node.js (v18 or later recommended)
*   npm, yarn, or pnpm

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
    cd YOUR_REPOSITORY_NAME 
    ```
    *(Replace with your repository URL after cloning or forking.)*

2.  **Install dependencies:**

    Using npm:
    ```bash
    npm install
    ```

    Using yarn:
    ```bash
    yarn install
    ```

    Using pnpm:
    ```bash
    pnpm install
    ```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

*   `npm run dev`: Starts the development server.
*   `npm run build`: Creates a production build of the application.
*   `npm run start`: Starts the production server (requires a build first).
*   `npm run lint`: Runs Next.js's built-in ESLint checks to identify and fix code quality issues.
*   `npm run format`: Formats the codebase using Prettier to ensure consistent styling.

## Project Structure

*   `src/app`: Core application logic, routing, and pages. This is where your Next.js app routes (pages and layouts) reside.
*   `src/components`: Reusable UI components, often categorized into atoms (basic UI elements), molecules (combinations of atoms), and organisms (more complex UI sections).
*   `src/lib`: Utilities, API communication logic, custom React hooks, and TypeScript type definitions.
*   `public`: Static assets that are served directly, such as images, fonts, `robots.txt`, and `sitemap.xml`.
*   `src/app/api`: Backend API routes built with Next.js API Routes. These handle data operations, server-side logic, and can be accessed like regular API endpoints.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request or open an issue.

## License

This project is open-source and available under the [MIT License](LICENSE.md).
