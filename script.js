;(function() {
    var cards = [
        '<div class="header">Title 1</div>',
        '<div class="footer" onclick="addCard()">Add card...</div>'
    ];

    var defaultCard = '<div class="card"></div>';

    var group = document.getElementsByClassName('group')[0];
    group.innerHTML = cards;

    window.addCard =  function () {
        cards.splice(cards.length - 1, 0, defaultCard);
        group.innerHTML = cards;
    }
})();