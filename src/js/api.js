

const LANGUAGES_API_URL = "https://raw.githubusercontent.com/kamranahmedse/githunt/master/src/components/filters/language-filter/languages.json";

const GITHUB_API_URL = "https://api.github.com/search/repositories";

/**
 * 
 * @returns {Promise<Language[]>}
 */
export async function fetchLanguages() {
  const response = await fetch(LANGUAGES_API_URL);
  if (!response.ok) throw new Error(`Failed to fetch languages. Status: ${response.status}`);
  return response.json();
}

/**
 * 
 * @param {string} language 
 * @returns {Promise<[]>}
 */
export async function fetchRepositories(language) {
  // &sort=stars: sort the results by number of stars
  // &order=desc: descending order 
  const response = await fetch(`${GITHUB_API_URL}?q=language:${language}&sort=stars&order=desc`);
  if (!response.ok) throw new Error("Failed to fetch repositories");
  const data = await response.json();
  return data.items;
}