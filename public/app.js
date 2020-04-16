'use strict';
var learnjs = {};

learnjs.problemView = function(problemNumber) {
    let title = 'Problem #' + problemNumber + ' Coming soon!';
    console.log(title);
    return $('<div class="problem-view">').text(title);
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

learnjs.appOnReady = function() {
    learnjs.showView(window.location.hash);
}