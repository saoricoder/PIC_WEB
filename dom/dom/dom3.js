function mostrarAnchors() {
    var anchors = document.anchors;
    var anchorsList = "Anchors encontrados:\n";
    for (var i = 0; i < anchors.length; i++) {
        anchorsList += anchors[i].href + "\n";
    }
    alert(anchorsList);
}

function mostrarBaseURI() {
    var baseURI = document.baseURI;
    alert("El Base URI del documento es: " + baseURI);
}

function mostrarBody() {
    var bodyContent = document.body.innerHTML;
    alert("El contenido del body es:\n" + bodyContent);
}

function mostrarCookie() {
    var cookies = document.cookie;
    alert("Las cookies actuales son: " + cookies);
}

function mostrarDoctype() {
    var doctype = document.doctype;
    var doctypeString = "<!DOCTYPE " + doctype.name +
        (doctype.publicId ? ' PUBLIC "' + doctype.publicId + '"' : '') +
        (doctype.systemId ? ' "' + doctype.systemId + '"' : '') + ">";
    alert("El Doctype del documento es: " + doctypeString);
}