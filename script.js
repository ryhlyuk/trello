;(function() {

    

    var group = document.getElementsByClassName('group')[0];

    window.addCard =  function () {
        var defaultCard = document.createElement('div');
        defaultCard.className = 'card';
        var lastChild = group.children[group.children.length - 1];
        group.insertBefore(defaultCard, lastChild);
    }
})();