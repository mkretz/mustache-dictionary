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
Do you want to load all your templates at once into a dictionary object like so?
```
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
Just require `mustache-dictionary` and call it on your target directory.
```
var mustacheDictionary = require('mustache-dictionary');
var dictionary = mustacheDictionary('target/path');
```
## Install
`npm install mustache-dictionary --save`

## Run tests
`npm test`
