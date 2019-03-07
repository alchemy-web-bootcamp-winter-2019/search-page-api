const searchForm = document.getElementById('search');

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