'use strict';
var learnjs = {};

learnjs.problemView = function() {
    return $('<div class="problem-view">').text('Coming soon!');
}

learnjs.showView = function(hash) {
    const routes = {
        '#problem': learnjs.problemView
    };
    const hashParts = hash.split('-');
    const viewFn = routes[hashParts[0]];
    if (viewFn) {
        $('.view-container').empty().append(viewFn(hashParts[1]));
    }
}