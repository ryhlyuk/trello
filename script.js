var applicationFunctions = {};
(function () {

	function getFile(cb) {
		var xhr = new XMLHttpRequest();

		xhr.open('GET', 'data.json', true);
		xhr.send();

		xhr.onreadystatechange = function() {
			if(xhr.readyState !== 4) {
				return;
			}
			if(xhr.status === 0) {
				cb(false, JSON.parse(xhr.response));
			} else {
				cb(true);
			}
		};
	}

	function init() {
		getFile(function(error, response) {
			if (error) {
				return;
			}
			buildDefaultTree(response);
		});
	}

	function buildDefaultTree(tree) {
		
		tree.forEach(function(group) {
			applicationFunctions.addGroup(group);
			group.childrens.forEach(function(card) {
				applicationFunctions.addCard(group.id, card);
			});
			console.log(group);
		});
	}

	function removeCard(group, event) {
		var card = event.target.parentNode.parentNode;
		group.removeChild(card);
	}

	var draggableCard = {};

	applicationFunctions.addGroup = function (group) {
		var contentBlock = document.getElementsByClassName('content')[0];
		var title = contentBlock.children.length;
		
		var defaultGroup = document.createElement('div');
		defaultGroup.className = 'group';
		defaultGroup.id = contentBlock.children.length;
		if (group) {
			defaultGroup.id = group.id;
			title = group.title;
		}
		defaultGroup.innerHTML = '<div class="header">' + title + '</div>' +
								'<div class="footer" onclick="applicationFunctions.addCard(' + defaultGroup.id + ')">Add card...</div>';
		contentBlock.appendChild(defaultGroup);
	};

	var cardDrop = function(event) {
		event.preventDefault();
		var previousCard = event.path.find(function(node) {
			return node.className === 'card';
		});
		var droppedGroup = previousCard.parentNode;
		droppedGroup.insertBefore(draggableCard, previousCard);
	};
	
	applicationFunctions.addCard = function (groupID, card) {
		var group = document.getElementById(groupID);
		var title = 'Title ' + (group.children.length - 1);
		var progressValue = 0;
		var date = new Date().toDateString();
		var avatar = 'https://pbs.twimg.com/profile_images/609783819/Dethklok_Avatar_by_argantes_400x400.jpg';
		
		if (card) {
			title = card.title;
			progressValue = card.progress * 100;
			date = card.expirationDate;
			avatar = card.avatar ? card.avatar : avatar;
		}
		var defaultCard = document.createElement('div');
		defaultCard.className = 'card';
		var lastChild = group.children[group.children.length - 1];
		
		// D'n'D events
		defaultCard.draggable = true;
		defaultCard.ondragstart = function() {
			draggableCard = defaultCard;
		};
		defaultCard.ondragover = onDragOver;
		defaultCard.ondrop = cardDrop;
		var html = '<div>' +
						'<progress value="' + progressValue + '" max="100"></progress>' + 
						'<i class="material-icons remove-card">clear</i>' + 
					'</div>' + 
					'<div>' + title + '</div>' + 
					'<div class="additional-options">' +
						'<icon class="material-icons">more_horiz</icon>' + 
						'<div class="date-time-group">' + 
							'<icon class="material-icons">access_time</icon> ' + 
							'<span>' + date + '</span>' +
						'</div>' +


						'<img src="' + avatar + '" class="avatar-mini">' + 
					'</div>';
		defaultCard.innerHTML = html;
		var removeIcon = defaultCard.children[0].children[1];
		removeIcon.addEventListener('click', removeCard.bind(this, group));
		group.insertBefore(defaultCard, lastChild);
	};

	init();
}());
