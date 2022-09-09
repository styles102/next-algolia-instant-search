import type { NextPage } from 'next'
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-hooks-web';

const searchClient = algoliasearch(process.env.ALGOLIA_APPLICATION_ID || "", process.env.ALGOLIA_SEARCH_API_KEY || "");

function Hit({ hit }: any) {
  return (
    <article>
      <h1>{hit.post_title}</h1>
      <p>{hit.categories[0]}</p>
      <p>{hit.post_date_formatted}</p>
      <p>{hit.content}</p>
    </article>
  );
}

const Search: NextPage = () => {
  return (
    <>
      <InstantSearch searchClient={searchClient} indexName={process.env.ALGOLIA_SEARCH_INDEX || ""}>
        <SearchBox />
        <Hits hitComponent={Hit} />
      </InstantSearch>
    </>
  )
}

export default Search; 