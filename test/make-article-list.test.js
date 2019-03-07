import { makeArticleList } from '../src/make-article-list.js';

const test = QUnit.test;

const article = {
    'source': {
        'id': 'techcrunch',
        'name': 'TechCrunch'
    },
    'author': 'Romain Dillet',
    'title': 'Coinbase users can now withdraw Bitcoin SV following BCH fork',
    'description': 'If you’re a Coinbase user, you may have seen some new tokens on your account. The Bitcoin Cash chain split into two different chains back in November. It means that if you held Bitcoin Cash on November 15, you became the lucky owner of Bitcoin SV and Bitcoin …',
    'url': 'http://techcrunch.com/2019/02/15/coinbase-users-can-now-withdraw-bitcoin-sv-following-bch-fork/',
    'urlToImage': 'https://techcrunch.com/wp-content/uploads/2017/08/bitcoin-split-2017a.jpg?w=711',
    'publishedAt': '2019-02-15T14:53:40Z',
    'content': 'If youre a Coinbase user, you may have seen some new tokens on your account. The Bitcoin Cash chain split into two different chains back in November. It means that if you held Bitcoin Cash on November 15, you became the lucky owner of Bitcoin SV and Bitcoin A… [+1514 chars]'
};



test('make list of articles from template', assert => {
    
    const expected = `
    <li>
                <section class="article-img"><img src="${article.urlToImage}" onerror="this.onerror=null;this.src='https://ak6.picdn.net/shutterstock/videos/1418746/thumb/5.jpg';"></section>
                <section class="article-info"><h2 class="article-title">Coinbase users can now withdraw Bitcoin SV following BCH fork</h2>
                <p class="article-author">by Romain Dillet</p>
                <p class="article-description">If you’re a Coinbase user, you may have seen some new tokens on your account. The Bitcoin Cash chain split into two different chains back in November. It means that if you held Bitcoin Cash on November 15, you became the lucky owner of Bitcoin SV and Bitcoin …</p>
                <p class="article-source-link">Read more: <a target="blank" href="http://techcrunch.com/2019/02/15/coinbase-users-can-now-withdraw-bitcoin-sv-following-bch-fork/">TechCrunch</a> | <a href="mailto:?subject=FWD:${article.title}&amp;body=Thought%20you%20might%20enjoy%20this%20article:%20${article.url}">Email article</a></p></section>
            </li>`;

    const result = makeArticleList(article);


    assert.htmlEqual(result, expected);
});