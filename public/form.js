oooUrl = makeOooUrl()
var showOooUrl = document.getElementById("showOooUrl")
var showOooUrlLink = document.getElementById("showOooUrl-link")
var form = document.getElementById("form")

if (oooUrl) // There is an oooUrl encode 
{
    form.style = "display:none;"
    showOooUrl.style = "display:block;"
    showOooUrlLink.innerHTML = oooUrl;
    showOooUrlLink.href = oooUrl;
}

function renew() {
    form.style = "display:block;"
    showOooUrl.style = "display:none;"
    window.location.href = "/";
}

function copy() {
    var text = document.getElementById("showOooUrl-link").innerText;
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
}

function makeOooUrl() {
    var baseUrl = window.location.href.split('?')[0]
    var urlEncode = getEncodedUrl()

    if (!urlEncode)
        return false

    return baseUrl + urlEncode;
}

function getEncodedUrl() {
    var url = document.location.href.split("?");
    if (url.length > 1) {
        return params = decodeURI(url[1].split('&')[0].split('=')[1])
    }
    return false;
}