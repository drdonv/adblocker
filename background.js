var date = new Date()
var timeHour = date.getHours()
var extensionIsOn = true
console.log("works")

function blockWebsites() {
	if (timeHour >= 9 && timeHour <= 17 && extensionIsOn){
		chrome.webRequest.onBeforeRequest.addListener(
			function(details) {return {cancel: true}},
		
			{urls: ["*://*.zedo.com/*", "*://*.doubleclick.net/*", "https://*.sonyied.queue-it.net/*", "https://*.direct-queue.playstation.com/*", "https://*.discord.com/*", "https://*.twitter.com/*", "https://*.youtube.com/*", "https://*.reddit.com/*", "https://*.instagram.com/*"]}, //"*://*www.youtube.com/api/stats/ads/*"]},
	
			["blocking"]
		)
	}
}
blockWebsites()
// document.getElementById('press').addEventListener('click', blockWebsites());
