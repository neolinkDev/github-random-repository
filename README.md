# GitHub Repository Finder🔍

A web application that allows users to randomly search for GitHub repositories filtered by the selected programming language.
https://roadmap.sh/projects/github-random-repo

![Group 3](https://github.com/user-attachments/assets/cebc28aa-f909-4120-a5f5-5cbcd4ddba95)

---

## Features✨

- **Language Selection:** Users can select a programming language from a dropdown menu.
- **Random Search:** Utilizes the GitHub API to fetch and display a random repository that matches the selected language.
- **Repository Details:** Displays essential information including:
  - Repository Name
  - Description
  - Number of Stars
  - Number of Forks
  - Number of Open Issues
- **Dynamic Interaction:** Includes a "Refresh" button for fetching another random repository.
- **State Management:** Effectively handles loading, empty, and error states.

---

## Resources🌐

- [GitHub Repository Search API](https://docs.github.com/en/rest/search#search-repositories)
- Programming Language Data

---

## Technologies Used🛠️

- **HTML:** Structure of the application.
- **CSS:** Styling and visual design.
- **JavaScript:** Logic and interactivity.
- **Vite:** Development and bundling tool.

---

## Installation⬇️

Follow these steps to run the application locally.

### Using npm

1. **Clone the repository:**
   ```bash
   git clone git@github.com:neolinkDev/gitHub-random-repository.git

2. **Navigate to the project folder:**
   ```bash
   cd gitHub-random-repository

3. **Install dependencies:**
   ```bash
   npm i

4. **Start the development server:**
   ```bash
   npm run dev

5. **Open your browser and visit:**
   ```bash
   http://localhost:5173

---

## Usage📖
**Select a Programming Language:**
- Use the dropdown menu to choose your desired language.

**View the Repository:**
- The app will display a random repository matching the selected language along with its detailed information.

**Refresh the Search:**
- Click the "Refresh" button to fetch another random repository.