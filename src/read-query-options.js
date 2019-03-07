export default function readQueryAsOptions(query) {
    const searchParams = new URLSearchParams(query);
    const searchTerm = searchParams.get('query');
    const page = parseInt(searchParams.get('page'));

    const queryOptions = {
        search: { query: searchTerm || '' },
        paging: { page: page || 1 }
    };

    return queryOptions;
}