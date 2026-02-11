# Node.js Learning Examples

Welcome to this Node.js learning repository. This project contains practical examples and explanations for core Node.js concepts, including Modules, the HTTP server, and File System operations.

## Project Structure

The repository is organized into the following directories:

### 1. Module System (`/Module`)

This directory covers the fundamentals of Node.js modules, including how to create, export, and import code.

- **Key File**: `math.js` - Demonstrates function exports (`add`, `sub`).
- **Documentation**: Check out the Module Guide for a deep dive into `module.exports`, `exports`, caching, and circular dependencies.

### 2. HTTP Server (`/HTTP Module`)

Contains examples of creating a web server without external frameworks.

- **Key File**: `index.js`
- **Functionality**:
  - Starts a server on port `8000`.
  - Implements manual routing for `/`, `/about`, and `/ram`.
  - Logs request timestamps and URLs to a local file `req.txt`.

### 3. File System (`/File System`)

Demonstrates interaction with the operating system's file system.

- **Key File**: `file.js`
- **Functionality**:
  - Examples of Synchronous vs Asynchronous file operations.
  - Reading, writing, appending, and deleting files.
  - Using the `os` module to retrieve system information (e.g., CPU count).

## How to Run

Ensure you have Node.js installed. You can run any of the scripts using the `node` command from the terminal.

**Running the HTTP Server:**

```bash
cd "HTTP Module"
node index.js
```

**Running File System Examples:**

```bash
cd "File System"
node file.js
```
