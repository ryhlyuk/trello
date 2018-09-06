(function() {

	// var sendSyncRequest = function(method, url, cb) {
	// 	// Create request
	// 	var xhr = new XMLHttpRequest();
	// 	// Prepare Your request (method, URL, async/sync, user, password)
	// 	xhr.open(method, url, false);
	// 	// request sending method
	// 	xhr.send();
	// 	// if request is more than 160 msec - cancel it
	// 	setTimeout(function() {
	// 		xhr.abort();
	// 	}, 160);
        
	// 	if (xhr.status === 200) {
	// 		cb(null, JSON.parse(xhr.response));
	// 	} else {
	// 		cb(true, JSON.parse(xhr.response));
	// 		console.log('error', xhr);
	// 	}
	// };

	// sendSyncRequest('GET', 'http://httpbin.org/user-agent', function(error, response) {
	// 	if(error) {
	// 		//......
	// 		return;
	// 	}

	// 	console.log(response);
	// });
    

	// var sendAsyncRequest = function(method, url, cb) {
	// 	// Create request
	// 	var xhr = new XMLHttpRequest();
	// 	// Prepare Your request (method, URL, async/sync, user, password)
	// 	xhr.open(method, url, true);
	// 	// request sending method
	// 	xhr.send();
	// 	// if request is more than 160 msec - cancel it
        
	// 	/**
	//      * readyState
	//      * 0 - initial state
	//      * 1 - open is calling
	//      * 2 - headers loading
	//      * 3 - body loading
	//      * 4 - Done
	//      */

	// 	// pace example
	// 	xhr.onprogress = function(event) {
	// 		console.log(event.loaded, event.total);
	// 	};
	// 	xhr.onreadystatechange = function() {
	// 		console.log(xhr.status, xhr.response, xhr.readyState);
	// 		if (xhr.readyState !== 4) {
	// 			return;
	// 		}

	// 		xhr.timeout = 3000; 
	// 		xhr.ontimeout = function() {
	// 			alert('Sorry, Your request has reached timeout');
	// 		};

	// 		if (xhr.status === 200) {
	// 			cb(null, JSON.parse(xhr.response));
	// 		} else {
	// 			cb(true, JSON.parse(xhr.response));
	// 			console.log('error', xhr);
	// 		}
	// 	};
	// };

	// sendAsyncRequest('GET', 'http://httpbin.org/user-agent', function(error, response) {
	// 	if(error) {
	// 		//......
	// 		return;
	// 	}

	// 	console.log(response);
	// });

	// fetch('http://httpbin.org/user-agent', {
    //     method: 'GET',
    //     body: []
    // }).then(resp => {
    //     return resp.json();
    // })
    // .then(resp => {
    //     var user = resp.filter(user => {
    //         return user.status === 'LEAVE';
    //     });
    //     // return fetch('http://user-leave?' + user.id);
    // })
    // .catch(err => {
    //     console.info(err);
    // });
    
}());