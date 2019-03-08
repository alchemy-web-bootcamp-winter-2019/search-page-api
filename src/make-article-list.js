export function makeArticleList(article) {
    const html = `
    <li class="article-li">
                <section class="article-img"><img src="${article.urlToImage}" onerror="this.onerror=null;this.src='https://ak6.picdn.net/shutterstock/videos/1418746/thumb/5.jpg';"></section>
                <section class="article-info"><h2 class="article-title">${article.title}</h2>
                <p class="article-author">by ${article.author}</p>
                <p class="article-description">${article.description}</p>
                <p class="article-source-link">Read more: <a target="blank" href="${article.url}">${article.source.name}</a> | <a href="mailto:?subject=FWD:${article.title}&body=Thought%20you%20might%20enjoy%20this%20article:%20${article.url}">Email article</a></p></section>
            </li>`;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const articleListNode = document.getElementById('article-list');

export default function loadArticles(articles) {
    while(articleListNode.children.length > 0) {
        articleListNode.lastElementChild.remove();
    }
    articles.forEach(article => {
        const articleLI = makeArticleList(article);
        articleListNode.appendChild(articleLI);
    });

    const articleClass = document.getElementsByClassName('article-li');
    const articleClassArray = Array.from(articleClass);
    setTimeout(function() {
        articleClassArray.forEach(item => {
            item.classList.add('show');
        });
    }, 6);
}