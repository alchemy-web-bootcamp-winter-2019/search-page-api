const previousButton = document.getElementById('previous-button');
const nextButton = document.getElementById('next-button');



export function calculatePages(paginateObject) {
    const currentPage = Math.floor((paginateObject.offset / paginateObject.count)) + 1;
    const totalPages = Math.ceil(paginateObject.total_count / paginateObject.count);
    return {
        currentPage: currentPage,
        totalPages: totalPages
    };
}

export function updatePage(currentPage, totalPages) {
    const currentPageNode = document.getElementById('current-page');
    const totalPagesNode = document.getElementById('total-pages');
    currentPageNode.textContent = currentPage;
    totalPagesNode.textContent = totalPages;
    previousButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages;
}
export function updateOffset(pageObject, paginateObject) {
    const currentQuery = window.location.hash.slice(1);
    const searchParams = new URLSearchParams(currentQuery);
    const newOffset = (pageObject.currentPage - 1) * paginateObject.count;
    searchParams.set('offset', newOffset);
    window.location.hash = searchParams.toString();
}

export default function loadPagination(paginateObject) {
    const pageObject = calculatePages(paginateObject);
    updatePage(pageObject.currentPage, pageObject.totalPages);
    nextButton.addEventListener('click', event => {
        event.preventDefault();
        pageObject.currentPage++;
        updatePage(pageObject.currentPage, pageObject.totalPages);
        updateOffset(pageObject, paginateObject);
    });
    
    previousButton.addEventListener('click', event => {
        event.preventDefault();
        pageObject.currentPage--;
        updatePage(pageObject.currentPage, pageObject.totalPages);
        updateOffset(pageObject, paginateObject);
    });
} 


