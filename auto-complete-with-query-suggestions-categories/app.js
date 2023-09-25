const { autocomplete, getAlgoliaResults } = window["@algolia/autocomplete-js"];
const { createQuerySuggestionsPlugin } = window["@algolia/autocomplete-plugin-query-suggestions"];


const appId = 'latency';
const apiKey = '6be0576ff61c053d5f9a3225e2a90f76';
const searchClient = algoliasearch(appId, apiKey);

const querySuggestionsPlugin = createQuerySuggestionsPlugin({
  searchClient,
  indexName: 'instant_search_demo_query_suggestions',
  getSearchParams() {
    return {
      hitsPerPage: 10,
    };
  },
  categoryAttribute: [
    'instant_search',
    'facets',
    'exact_matches',
    'categories',
  ],
  transformSource({ source, onTapAhead }) {
    debugger
    return {
      ...source,
      getItemUrl({ item }) {
        return `https://google.com?q=${item.query}`;
      },
      templates: {
        ...source.templates,
        item(params) {
          debugger;
          const { item, html } = params;          
          return html`<a
            class="aa-ItemLink"
            href="https://google.com?q=${item.query}"
          >
            ${item.query}  ${item.__autocomplete_qsCategory ? " - "+ item.__autocomplete_qsCategory:""}
          </a>`;
        },
      },
    };
  },
  itemsWithCategories: 1,
  categoriesPerItem: 2,
});
  
  autocomplete({
    container: '#autocomplete',
    placeholder: 'Search',
    openOnFocus: true,
    insights: true,
    plugins: [querySuggestionsPlugin],
  });
  