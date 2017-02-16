var mustacheDictionary = require('./index');
var assert = require('assert');

describe('a directory tree with template files', function() {
    it('should be loaded', function (done) {
        var expected = {
            more: {
                def: '{{#empty}}\n    <p>The list is empty.</p>\n{{/empty}}'
            },
            some: {
                others: {
                    klm: '{{#items}}\n    {{#first}}\n        <li><strong>{{name}}</strong></li>\n    {{/first}}\n{{/items}}'
                }
            },
            abc: '<h1>{{header}}</h1>\n{{#bug}}\n{{/bug}}'
        };
        var dictionary = mustacheDictionary('test/templates');
        assert.deepEqual(expected, dictionary, 'dictionary not loaded as expected');
        done();
    });
});

describe('a directory tree without template files', function() {
    it('should be loaded', function (done) {
        var expected = {
            more: {},
            some: {
                others: {}
            }
        };
        var dictionary = mustacheDictionary('test/no_templates');
        assert.deepEqual(expected, dictionary, 'dictionary not loaded as expected');
        done();
    });
});

describe('a directory subtree', function() {
    it('should be loaded', function (done) {
        var expected = {
            others: {
                klm: '{{#items}}\n    {{#first}}\n        <li><strong>{{name}}</strong></li>\n    {{/first}}\n{{/items}}'
            }
        };
        var dictionary = mustacheDictionary('test/templates/some');
        assert.deepEqual(expected, dictionary, 'dictionary not loaded as expected');
        done();
    });
});
