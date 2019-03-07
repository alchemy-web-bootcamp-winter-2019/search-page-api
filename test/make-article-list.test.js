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
                <img src="${article.urlToImage}" onerror="this.onerror=null;this.src='https://ak6.picdn.net/shutterstock/videos/1418746/thumb/5.jpg';">
                <h2>Coinbase users can now withdraw Bitcoin SV following BCH fork</h2>
                <p>by Romain Dillet</p>
                <p>If you’re a Coinbase user, you may have seen some new tokens on your account. The Bitcoin Cash chain split into two different chains back in November. It means that if you held Bitcoin Cash on November 15, you became the lucky owner of Bitcoin SV and Bitcoin …</p>
                <p>Read more on <a href="http://techcrunch.com/2019/02/15/coinbase-users-can-now-withdraw-bitcoin-sv-following-bch-fork/">TechCrunch</a>.</p>
            </li>`;

    const result = makeArticleList(article);


    assert.htmlEqual(result, expected);
});