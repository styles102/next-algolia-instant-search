import type { NextPage } from 'next'
import algoliasearch from 'algoliasearch/lite';
import { 
  InstantSearch, 
  SearchBox, 
  Hits, 
  Highlight,
  RefinementList,
  Pagination,
  Configure,
} from 'react-instantsearch-hooks-web';

const searchClient = algoliasearch(process.env.ALGOLIA_APPLICATION_ID || "", process.env.ALGOLIA_SEARCH_API_KEY || "");

function Hit({ hit }: any) {
  return (
    <article>
      <h1>
        <Highlight 
          attribute="post_title"
          hit={hit}  
        />
      </h1>
      <p>{hit.categories[0]}</p>
      <p>{hit.post_date_formatted}</p>
      <p>
        <Highlight
          attribute="content"
          hit={hit}
        />
      </p>
    </article>
  );
}

const Search: NextPage = () => {
  return (
    <>
      <InstantSearch searchClient={searchClient} indexName={process.env.ALGOLIA_SEARCH_INDEX || ""}>
        <Configure hitsPerPage={5} />
        <SearchBox />
        <RefinementList attribute="categories" operator="and" />
        <Hits hitComponent={Hit} />
        <Pagination />
      </InstantSearch>
    </>
  )
}

export default Search; 