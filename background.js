var toggle = 'inactive';
var stat;

chrome.extension.onMessage.addListener(function(message,sender,sendResponse){
  if(message.text == "getStatus")
    sendResponse(stat);
});

function toggleExtension() {
  
  if(toggle == 'inactive') {
	toggle = 'active';
	disableExtension(false);
  }
  else {
	  toggle = 'inactive';
	  disableExtension(true);
  }

    chrome.browserAction.setIcon({path:toggle + ".png"});
	
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.update(tabs[0].id, {url: tabs[0].url});
    });
}

function disableExtension(disabled)
{
	if (disabled)
		stat = 'disabled';
	else
		stat = 'enabled';
}

chrome.browserAction.onClicked.addListener(updateIcon);
updateIcon();


