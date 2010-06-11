document.addEventListener('beforeload', handleBeforeLoadEvent, true);

function handleBeforeLoadEvent(event) {
	const element = event.target;
	
	// Return now if the content is allowed
	if (safari.self.tab.canLoad(event, { url: event.url, nodeName: element.nodeName })) {
		return;
	}
	
	// Block the fuckers
	event.preventDefault();
}