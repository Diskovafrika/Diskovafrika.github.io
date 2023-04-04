var url = window.location.href;
url = url.split('.html')[0];
window.history.replaceState(null, null, url);