/**
 * List domains
 */

var unicorn = unicorn || {};

unicorn.listDomains = function (key, secret) {
    var url = generateSignedURL ('ListDomains', {elements: {}}, key, secret, 'https://sdb.amazonaws.com', '2009-04-15'),
        el = document.getElementById ('domains');
    el.innerHTML = url;
};
