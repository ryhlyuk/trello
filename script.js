;(function() {
    var group = document.getElementsByClassName('group')[0];

    window.addCard =  function () {
        var defaultCard = document.createElement('div');
        defaultCard.className = 'card';
        var lastChild = group.children[group.children.length - 1];


        // progress adding
        var progress = document.createElement('progress');
        progress.setAttribute('value', '33');
        progress.setAttribute('max', '100');
        defaultCard.appendChild(document.createElement('div').appendChild(progress));


        // title adding
        var title = document.createElement('div');
        title.innerText = 'Title' + (group.children.length - 1);
        defaultCard.appendChild(title);

        //additional options adding
        var additionalOptionsDiv = document.createElement('div');
        additionalOptionsDiv.className = "additional-options";
        // icon adding
        var icon = document.createElement('icon');
        icon.className = "material-icons";
        icon.innerText = 'more_horiz';
        additionalOptionsDiv.appendChild(icon);
        // priority adding
        var priority = document.createElement('div');
        priority.className = "priority-very-low";
        additionalOptionsDiv.appendChild(priority);
        // date adding
        var dateWrapper = document.createElement('div');
        var dateIcon = document.createElement('icon');
        dateIcon.className = "material-icons";
        dateIcon.innerText = 'access_time';
        dateWrapper.appendChild(dateIcon);
        var now = new Date();
        var date = document.createTextNode(now.toDateString());
        dateWrapper.appendChild(date);
        additionalOptionsDiv.appendChild(dateWrapper);
        //avatar adding
        var avatar = document.createElement('img');
        avatar.setAttribute('src', "https://pbs.twimg.com/profile_images/609783819/Dethklok_Avatar_by_argantes_400x400.jpg");
        avatar.style.width = '50px';
        avatar.className = "avatar-mini";
        avatar.style.height = '50px';
        additionalOptionsDiv.appendChild(avatar);
        defaultCard.appendChild(additionalOptionsDiv);

        group.insertBefore(defaultCard, lastChild);
    }
})();