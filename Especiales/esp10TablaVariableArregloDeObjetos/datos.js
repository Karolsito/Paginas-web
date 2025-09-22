const datosTbody = {
    "RecibosDeCobranza":[
        {"Cod_cli":"00123","Razon_social":"Distribuidora El Sol S.A.","NroDeRecibo":"RC-2025-0001","Fecha_cobranza":"2025-09-16","Importe_cobranza":125000.50,"MedioDePago":"Transferencia"},
        {"Cod_cli":"00124","Razon_social":"Ferretería El Tornillo","NroDeRecibo":"RC-2025-0002","Fecha_cobranza":"2025-09-17","Importe_cobranza":85000.00,"MedioDePago":"Efectivo"},
        {"Cod_cli":"00125","Razon_social":"Panadería La Espiga","NroDeRecibo":"RC-2025-0003","Fecha_cobranza":"2025-09-18","Importe_cobranza":45200.75,"MedioDePago":"Cheque"},
        {"Cod_cli":"00126","Razon_social":"Supermercado Don José","NroDeRecibo":"RC-2025-0004","Fecha_cobranza":"2025-09-19","Importe_cobranza":98000.00,"MedioDePago":"Tarjeta de débito"},
        {"Cod_cli":"00127","Razon_social":"Librería Central","NroDeRecibo":"RC-2025-0005","Fecha_cobranza":"2025-09-20","Importe_cobranza":31500.00,"MedioDePago":"Transferencia"},
        {"Cod_cli":"00128","Razon_social":"Carnicería El Buen Corte","NroDeRecibo":"RC-2025-0006","Fecha_cobranza":"2025-09-21","Importe_cobranza":67500.00,"MedioDePago":"Efectivo"},
        {"Cod_cli":"00129","Razon_social":"Farmacia Vida Sana","NroDeRecibo":"RC-2025-0007","Fecha_cobranza":"2025-09-22","Importe_cobranza":102300.00,"MedioDePago":"Tarjeta de crédito"},
        {"Cod_cli":"00130","Razon_social":"Papelería El Rincón","NroDeRecibo":"RC-2025-0008","Fecha_cobranza":"2025-09-23","Importe_cobranza":28750.00,"MedioDePago":"Cheque"},
        {"Cod_cli":"00131","Razon_social":"Electro Hogar S.R.L.","NroDeRecibo":"RC-2025-0009","Fecha_cobranza":"2025-09-24","Importe_cobranza":150000.00,"MedioDePago":"Transferencia"},
        {"Cod_cli":"00132","Razon_social":"Verdulería El Tomate","NroDeRecibo":"RC-2025-0010","Fecha_cobranza":"2025-09-25","Importe_cobranza":39500.00,"MedioDePago":"Tarjeta de débito"},
        {"Cod_cli":"00133","Razon_social":"Juguetería Mundo Feliz","NroDeRecibo":"RC-2025-0011","Fecha_cobranza":"2025-09-26","Importe_cobranza":76500.00,"MedioDePago":"Tarjeta de crédito"},
        {"Cod_cli":"00134","Razon_social":"Heladería La Nieve","NroDeRecibo":"RC-2025-0012","Fecha_cobranza":"2025-09-27","Importe_cobranza":58900.00,"MedioDePago":"Efectivo"},
        {"Cod_cli":"00135","Razon_social":"Tienda El Ropero","NroDeRecibo":"RC-2025-0013",  "Fecha_cobranza":"2025-09-28","Importe_cobranza":112750.00,"MedioDePago":"Tarjeta de débito"}
    ]
}
document.getElementById("cargar").onclick = function() {
    if (document.getElementById("datos").children.length === 0) {
    datosTbody.RecibosDeCobranza.forEach(function(argValor,argIndice) {
        var objTr= document.createElement("tr");
        var objTd=document.createElement("td");
        objTd.setAttribute("campo-dato","Cod_cli");
        objTd.innerHTML=argValor.Cod_cli;
        objTr.appendChild(objTd);
        var objTd=document.createElement("td");
        objTd.setAttribute("campo-dato","Razon_social");
        objTd.innerHTML=argValor.Razon_social;
        objTr.appendChild(objTd);
        var objTd=document.createElement("td");
        objTd.setAttribute("campo-dato","NroDeRecibo");
        objTd.innerHTML=argValor.NroDeRecibo;
        objTr.appendChild(objTd);
        var objTd=document.createElement("td");
        objTd.setAttribute("campo-dato","Fecha_cobranza");
        objTd.innerHTML=argValor.Fecha_cobranza;
        objTr.appendChild(objTd);
        var objTd=document.createElement("td");
        objTd.setAttribute("campo-dato","Importe_cobranza");
        objTd.innerHTML=argValor.Importe_cobranza.toLocaleString('es-AR', {minimumFractionDigits: 2,  maximumFractionDigits: 2});
        objTr.appendChild(objTd);
        var objTd=document.createElement("td");
        objTd.setAttribute("campo-dato","MedioDePago");
        objTd.innerHTML=argValor.MedioDePago;
        objTr.appendChild(objTd);
        document.getElementById("datos").appendChild(objTr);
    });
}
}
document.getElementById("vaciar").onclick = function() {
    document.getElementById("datos").innerHTML = "";
}
