chrome.extension.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log("前端/后端/Popup收到");
        console.log(request.message);
        sendResponse({message:"content to popup"});
    }
);