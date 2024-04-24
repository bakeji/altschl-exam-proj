# GITHUB REPOSITORIES
This React application fetches a user's public repositories from GitHub and displays them in a user-friendly interface. Users can search and filter repositories by name and language. This Altschool africa second semester exam project.

## TABLE OF CONTENT
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)

# Features
- Fetches and displays a user's public repositories from GitHub.
- Search functionality to filter repositories by name.
- Filter functionality to filter repositories by language.
- Displays detailed information about each repository.
- Option to create new public repositories (requires a GitHub account).

# Technologies Used
- **React:** Frontend framework for building the user interface.
- **React Router:** Library for handling navigation and routing within the application.
- **GitHub API:** Used to fetch repository data and create new repositories.
- **Octokit:** JavaScript toolkit for interacting with the GitHub API.
- **CSS:** Stylesheets for styling the components and layout of the application.

# Getting Started

- Clone this repository.
- Install dependencies: npm install
- Create a .env.local file in the project root and add your GitHub API key:VITE_API_KEY=<your_api_key> (you can generate an API key from your GitHub settings).
- Run the development server: npm start


# Usage
- **Homepage:** View a list of GitHub repositories, search for repositories, and filter them by language.
- **Repository Details:** Click on a repository to view detailed information such as description, language, and clone URL.
- **Create Repository:** Use the "Create Repository" button in the header to create a new repository. Enter the name of the repository and click "Create" to create it.
- **Delete Repository:** To delete a repository, click on the "Delete Repository" button in the header. Confirm the action in the modal dialog to delete the repository.


