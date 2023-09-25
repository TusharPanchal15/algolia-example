
const { autocomplete } = window["@algolia/autocomplete-js"];
const { createLocalStorageRecentSearchesPlugin } = window["@algolia/autocomplete-plugin-recent-searches"];
const recentSearchesPlugin = createLocalStorageRecentSearchesPlugin({
    key: 'RECENT_SEARCH',
    limit: 5,
  });
  
  autocomplete({
    container: '#autocomplete',
    plugins: [recentSearchesPlugin,recentSearchesPlugin],
    openOnFocus: true,
  });