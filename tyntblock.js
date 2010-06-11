document.addEventListener('beforeload', handleBeforeLoadEvent, true);

function allowedToLoad(url, nodeName) {
	if (nodeName === 'SCRIPT' && url.indexOf('tynt.com') !== -1) {
		return false;
	}
	return true;
}

function handleBeforeLoadEvent(event) {
	const element = event.target;
	
	// Return now if the content is allowed
	if (allowedToLoad(event.url, element.nodeName)) {
		return;
	}
	
	// Block the fuckers
	event.preventDefault();
}