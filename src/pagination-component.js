import { pageToURL } from './hash-query.js';

const previousButtonNode = document.getElementById('previous-button');
const nextButtonNode = document.getElementById('next-button');
const currentPageNode = document.getElementById('current-page');
const totalPagesNode = document.getElementById('total-pages');

export function updatePaging(page, totalResults) {
    const currentPage = page;
    const totalPages = Math.ceil(totalResults / 20);
    currentPageNode.textContent = currentPage;
    totalPagesNode.textContent = totalPages;
}

const existingQuery = window.location.hash.slice(1);
const searchParams = new URLSearchParams(existingQuery);
let currentPage = searchParams.get('page');
previousButtonNode.disabled = currentPage <= 1;

previousButtonNode.addEventListener('click', () => {
    const totalPages = totalPagesNode.textContent;
    const existingQuery = window.location.hash.slice(1);
    const searchParams = new URLSearchParams(existingQuery);
    let currentPage = searchParams.get('page');
    currentPage--;
    previousButtonNode.disabled = currentPage <= 1;
    nextButtonNode.disabled = currentPage >= totalPages;
    const newURL = pageToURL(existingQuery, currentPage);
    window.location.hash = newURL;   
});

nextButtonNode.addEventListener('click', () => {

    const totalPages = totalPagesNode.textContent;

    const existingQuery = window.location.hash.slice(1);
    const searchParams = new URLSearchParams(existingQuery);
    let currentPage = searchParams.get('page');
    currentPage++;
    previousButtonNode.disabled = currentPage <= 1;
    nextButtonNode.disabled = currentPage >= totalPages;
    const newURL = pageToURL(existingQuery, currentPage);
    window.location.hash = newURL;   
});