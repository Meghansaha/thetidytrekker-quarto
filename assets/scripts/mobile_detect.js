var mobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
if (mobile) {
    alert("FYI: The Tidy Trekker is best viewed on a desktop computer");              
} 

var viewMode = getCookie("view-mode");

if (viewMode == "mobile"){
    viewport.setAttribute('content', 'width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no');
}

