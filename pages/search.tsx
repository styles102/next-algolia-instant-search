import type { NextPage } from 'next'
import algoliasearch from 'algoliasearch/lite';
import Image from 'next/image';
import {
  InstantSearch, 
  SearchBox,
  HitsProps,
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
          attribute="name"
          hit={hit}  
        />
      </h1>
      <Image
        src={hit.image}
        width={81}
        height={160}
      />
      <p>{hit.categories[0]}</p>
      <p>&pound;{hit.price}</p>
      <p>{hit.description}</p>
    </article>
  );
}

const Search: NextPage = () => {
  return (
    <>
      <InstantSearch searchClient={searchClient} indexName={process.env.ALGOLIA_SEARCH_INDEX || ""}>
        <Configure hitsPerPage={5} />
        <SearchBox />
        <RefinementList attribute="brand" operator="or" sortBy={["name", "count:desc"]} />
        <RefinementList attribute="categories" operator="or" sortBy={["name", "count:desc"]} />
        <Hits 
          classNames={{ item: 'hit-item' }}
          hitComponent={Hit} 
        />
        <Pagination />
      </InstantSearch>
    </>
  )
}

export default Search; 