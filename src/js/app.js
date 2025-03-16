import { fetchLanguages, fetchRepositories } from './api';
import {
  showRepository,
  showStatusMessage,
  updateLanguageDropdown,
  updateRefreshButton,
} from './ui';

export async function initApp() {

  try {
    const languages = await fetchLanguages();
    updateLanguageDropdown(languages);
  } catch (error) {
    showStatusMessage('Error loading languages');
    updateRefreshButton(null, null); 
  }

  document
    .getElementById('language-select')
    .addEventListener('change', async (e) => {
      const language = e.target.value;

      document.getElementById("repository-info").classList.add("hidden");

      // hide the button at the start of a new search
      updateRefreshButton(null, null);

      if (!language) return showStatusMessage('Please select a language');

      showStatusMessage('Loading, please wait...');

      try {
        const repos = await fetchRepositories(language);

        if (repos.length === 0)
          return showStatusMessage('No repositories found');

        /*
         * Access a random element from the 'repos' array
         * Round down to the nearest integer to get a valid array index
         * Generate a random number between 0 (inclusive) and 1 (exclusive)
         * Multiply by the number of elements in the array to scale the random numb
         */
        const randomRepo = repos[Math.floor(Math.random() * repos.length)];
        
        showRepository(randomRepo);

        // reset the button to its normal state after a successful search
        updateRefreshButton("Refresh", "#1a1a1a");
      } catch (error) {
        showStatusMessage('Error fetching repositories', "#ffc9c9");
        updateRefreshButton("Click to retry", "#e03131");
      }

    });

    // al hacer clic, se envía un evento 'change' al select de lenguajes para activar la búsqueda de repositorios existente.
    // on click, dispatches a 'change' event to the language select to trigger the existing repository search.
    document.getElementById("refresh-button").addEventListener("click", () => {
      const event = new Event("change");
      document.getElementById("language-select").dispatchEvent(event);
    });
  }
