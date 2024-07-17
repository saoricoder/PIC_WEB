const nodos =[];

for (let i = 0; i < 80; i++) {
    const nodo = document.createElement('input');
    nodos.push(nodo);
}
document.body.append(...nodos);