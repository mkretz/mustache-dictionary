function mustacheDictionary(path) {

    var dirTree = require('directory-tree');
    var fs = require('fs');
    var _ = require('lodash');

    function compactTree(result, directoryTree) {
        if (directoryTree.children) {
            _.forEach(directoryTree.children, function (child) {
                if (child.template) {
                    result[child.name.replace(child.extension, '')] = child.template;
                }
                else {
                    result[child.name] = {};
                }
                compactTree(result[child.name], child)
            });
        }
        return result;
    }

    var templateTree = dirTree(path, ['.mustache'], function (item, path) {
        item.template = fs.readFileSync(item.path).toString();
    });

    return compactTree({},templateTree);
}

module.exports = mustacheDictionary;