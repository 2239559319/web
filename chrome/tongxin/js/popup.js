function send() {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {message: "popup to content"}, function (response) {
            console.log(response.message);
        });
    });
}

document.getElementById('send').addEventListener('click',function () {
    send();
});