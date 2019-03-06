import { makeTemplate, convertDate } from '../src/make-template.js';

const test = QUnit.test;

QUnit.module('make template literal');

test('create html template', assert => {
    // Arrange
    const expected = /*html*/`
    <li>
        <p>An 'extremely credible source' has called my office and told me that Barack Obama's birth certificate is a fraud.</p>
        <h2>August 6, 2012</h2>
    </li>
    `;
    const quote = {
        "appeared_at": "2012-08-06T00:00:00",
        "created_at": "2016-11-14T02:07:54.408994",
        "quote_id": "5i2eEJzdS9a0daHLzQheqw",
        "tags": [
            "Barack Obama"
        ],
        "updated_at": "2016-11-14T02:07:54.408994",
        "value": "An 'extremely credible source' has called my office and told me that Barack Obama's birth certificate is a fraud.",
        "_links": {
            "self": {
                "href": "/quote/5i2eEJzdS9a0daHLzQheqw"
            }
        },
        "_embedded": {
            "author": [{
                "created_at": "2016-11-14T01:14:02.096776",
                "bio": null,
                "author_id": "wVE8Y7BoRKCBkxs1JkqAvw",
                "name": "Donald Trump",
                "slug": "donald-trump",
                "updated_at": "2016-11-14T01:14:02.096776"
            }],
            "source": [{
                "created_at": "2016-11-14T02:07:54.331382",
                "filename": null,
                "quote_source_id": "DusNnKwsQWu-osffgzgO_A",
                "remarks": null,
                "updated_at": "2016-11-14T02:07:54.331382",
                "url": "https://twitter.com/realdonaldtrump/status/232572505238433794"
            }]
        }
    };
    // Act
    const result = makeTemplate(quote);

    // Assert
    assert.htmlEqual(result, expected);
});

test('convert date to nicer form', assert => {
    // Arrange
    const expected = 'August 6, 2012';
    // Act
    const result = convertDate("2012-08-06T00:00:00");
    // Assert
    assert.equal(result, expected);
});