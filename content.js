var disabled = true;

chrome.extension.sendMessage({text:"getStatus"},function(response){
  if(response == "enabled") {
      disabled = false;
  } else {
	  disabled = true; 	if (cat) window.location.reload();
  }
   catify();
});

function catify()
{
	if (!disabled) {
		var images = document.getElementsByTagName('img');
		for (var i = 0, l = images.length; i < l; i++) {
		  images[i].src = 'https://placekitten.com/' + images[i].width + '/' + images[i].height;
		}
	}
}