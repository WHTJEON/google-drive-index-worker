function getCookie(name) {
    var cookies = decodeURIComponent(document.cookie).split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0) == ' ' || cookie.charAt(0) == '=') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) == 0) {
            return cookie.substring(name.length + 1, cookie.length);
        }
    }
    return "";
}

function setCookie(name, value) {
    var d = new Date();
    d.setTime(d.getTime() + (30 * 24 * 60 * 60 * 1000));
    document.cookie = name + '=' + value + '; Expires=' + d.toUTCString() + "; Path=/; Secure; SameSite=Lax";
}
