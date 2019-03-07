const searchForm = document.getElementById('search');
const searchTermInput = searchForm.querySelector('input');

export default function loadSearch(callback) {
    searchForm.addEventListener('submit', event => {
        event.preventDefault();

        const formData = new FormData(searchForm);
        const searchTerm = formData.get('pattern-search');

        if(searchTerm.trim() === '') {
            return;
        }

        const searchOptions = {
            term: searchTerm
        };

        callback(searchOptions);
    });
}

export function updateSearchTerm(searchOptions) {
    searchTermInput.value = searchOptions.term;
}