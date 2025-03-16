
/**
 * 
 * @param {Language[]} languages 
 */
export function updateLanguageDropdown(languages) {
  const dropdown = document.getElementById('language-select');

  // clean the dropdown menu before to fill
  dropdown.innerHTML = '';

  // add default option
  const defaultOption = document.createElement('option');
  defaultOption.value = '';
  defaultOption.textContent = 'Select a Language';
  dropdown.appendChild(defaultOption);

  // fill the dropdown menu
  languages.forEach((language) => {
    const option = document.createElement('option');
    option.value = language.value; 
    option.textContent = language.title; 
    dropdown.appendChild(option);
  });
}

//

/**
 * 
 * @param {string} message 
 * @param {string} [backgroundColor] optional
 */
export function showStatusMessage(message, backgroundColor) {
  const status = document.getElementById("status-message");
  status.textContent = message;

  if (backgroundColor) {
    // apply the background color
    status.style.backgroundColor = backgroundColor; 
  } else {
    // reset to default color if no color is provided
    status.style.backgroundColor = '#e9ecef';
  }

  status.classList.remove("hidden");
}

/**
 * @typedef {Object} GitHubRepository
 * @param {GitHubRepository} repo
 */
export function showRepository(repo) {
  // console.log(repo)
  document.getElementById("repo-name").textContent = repo.name;
  document.getElementById("repo-description").textContent = repo.description || "No description available.";
  document.getElementById("stars").textContent = `⭐ ${repo.stargazers_count}`;
  document.getElementById("forks").textContent = `🍴 ${repo.forks_count}`;
  document.getElementById("issues").textContent = `🐛 ${repo.open_issues_count}`;
  document.getElementById("repository-info").classList.remove("hidden");
  document.getElementById("refresh-button").classList.remove("hidden");
  document.getElementById("status-message").classList.add("hidden");
}


/**
 * updates the text and background color of the refresh button.
 * @param {string} text - text for button
 * @param {string} backgroundColor - background color for button
 */
export function updateRefreshButton(text, backgroundColor) {

  const refreshBtn = document.getElementById('refresh-button');

  if (refreshBtn) {

    if (text) {
      refreshBtn.textContent = text;
    }

    if (backgroundColor) {
      refreshBtn.style.backgroundColor = backgroundColor;

      // show button
      refreshBtn.classList.remove("hidden"); 
    } else if (backgroundColor === null) {
      // hide button
      refreshBtn.classList.add("hidden"); 
    } else {
      // default values for the button (background color & "Refresh")
      refreshBtn.textContent = "Refresh";
      refreshBtn.style.backgroundColor = "#1a1a1a";
      refreshBtn.classList.remove("hidden");
    }
  }
}