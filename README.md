# mustache-dictionary
Do you have your [mustache](https://github.com/janl/mustache.js) templates in a subdirectory tree of your project like so?
```
templates
├── more
│   └── def.mustache
├── some
│   ├── others
│   │   └── klm.mustache
│   └── xyz.txt
├── abc.mustache
└── uvw.js
```
Do you want to reference them in an easy way in your code like so?
```js
mustache.render(templates.some.others.klm, view);
```
Just require `mustache-dictionary` and call it on your target directory.
```js
var mustacheDictionary = require('mustache-dictionary');
var dictionary = mustacheDictionary('target/path');
```
This will load your templates and return an object of the following form
```js
{
    more: {
        def: '<content of def.mustache>'
    },
    some: {
        others: {
            klm: '<content of klm.mustache>'
        }
    },
    abc: '<content of abc.mustache>'
}
```

## Install
`npm install mustache-dictionary --save`

## Contribute
If you need to extend the functionality of `mustache-dictionary` please feel free to contribute!

### Get the code

`git clone https://github.com/mkretz/mustache-dictionary.git
`

### Run the tests
`npm test`
