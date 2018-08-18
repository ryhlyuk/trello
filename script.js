(function () {
	var group = document.getElementsByClassName('group')[0];
	
	function removeCard(group, event) {
		var card = event.target.parentNode.parentNode;
		group.removeChild(card);
	}
	
	window.addCard = function () {
		var defaultCard = document.createElement('div');
		defaultCard.className = 'card';
		var lastChild = group.children[group.children.length - 1];

		var html = '<div>' +
						'<progress value="33" max="100"></progress>' + 
						'<i class="material-icons remove-card">clear</i>' + 
					'</div>' + 
					'<div> Title ' + (group.children.length - 1) + '</div>' + 
					'<div class="additional-options">' +
						'<icon class="material-icons">more_horiz</icon>' + 
						'<div>' + 
							'<icon class="material-icons">access_time</icon> ' + 
							new Date().toDateString() +
						'</div>' +

						'<img src="https://pbs.twimg.com/profile_images/609783819/Dethklok_Avatar_by_argantes_400x400.jpg" class="avatar-mini">' + 
					'</div>';
		defaultCard.innerHTML = html;
		var removeIcon = defaultCard.children[0].children[1];
		removeIcon.addEventListener('click', removeCard.bind(this, group));
		group.insertBefore(defaultCard, lastChild);
	};
}());
