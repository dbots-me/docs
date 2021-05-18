window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', e => {
    changeFavicon(e.matches)
});

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    setInterval(function() {
        changeFavicon(true);
    }, 1000);
}

function changeFavicon(whiteMode) {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    if(whiteMode) {
        link.href = 'https://cdn.dbots.me/static/favicon-dark.svg';
    }else{
        link.href = 'https://cdn.dbots.me/static/favicon-white.svg';
    }
    document.getElementsByTagName('head')[0].appendChild(link);
}