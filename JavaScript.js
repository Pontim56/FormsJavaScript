function enviar(event){
    let diva = document.getElementById("textos");
    textos.style.display="flex";

    event.preventDefault();
    let lado1 = parseFloat(document.getElementById("lado1").value);
    let lado2 = parseFloat(document.getElementById("lado2").value);   
    let valorMetro = parseFloat(document.getElementById("prc").value);   
    let area = lado1*lado2;
    let precoTot = area*valorMetro;
    document.getElementById("p1").innerText="Área:"+area;
    document.getElementById("p2").innerText="Preço total:"+precoTot;

}