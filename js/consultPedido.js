//const db = firebase.firestore();

/*db.collection("pedido").get().set({
    cantidad,
    condicion,
    fecha_compra,
    fecha_entrega,
    id_cliente,
    id_producto,
    imagen,
    nombre,
    numero_tarjeta,
    precio_unitario,
    total_pagar
})

.then(function(docRef){
   console.log("Document written with ID: ", docRef.id);
})
.catch(function (error) {
    console.error("Error adding document: ", error);
})*/
//Leer documentos
const fecha = new Date();
const añoActual = fecha.getFullYear();
console.log(añoActual);
const hoy = fecha.getDate();
const mesActual = fecha.getMonth() + 1;
console.log(hoy);
console.log(mesActual);

var tabla = document.getElementById('compras2');
db.collection("pedido").get().then((querySnapshot) => {
    tabla.innerHTML = '';
    querySnapshot.forEach((doc) => {
        const infoD = doc.data()
        infoD.id = doc.id;
        //infoD.DatosPedido.forEach((datos) => {
            tabla.innerHTML += `
            <div class="col-md-15 product-info">
                <div>
                    <span>
                        ID de Compra:&nbsp;
                        <span class="value">
                            ${infoD.idPedido}
                        </span>
                    </span>
                </div>            
                <div>
                    <span>
                        Fecha de Compra:&nbsp;
                        <span class="value">
                            ${hoy}/${mesActual}/${añoActual}
                        </span>
                    </span>
                </div>
                <div>
                    <span>
                        Fecha de Llegada:&nbsp;
                        <span class="value">
                            Pendiente
                        </span>
                    </span>
                </div>
 
                <div class="product-specs">
                    <a href="#" class="product-name">
                        Direccion de Envio
                    </a>
                    <br>
                    <a href="#" class="product-name">
                        Metodo de Pago
                    </a>
                <div>
                <div>
                    <span>
                        Estado de la entrega:&nbsp;
                        <span class="value">
                            Pendiente
                        </span>
                    </span>
                </div>
                <div>
                    <span>
                        Total de la compra:&nbsp;
                        <span class="value">
                            ${infoD.pagoTotal}
                        </span>
                    </span>
                </div>
            </div>`;

        //})

    });
})
.catch((error) => {
        console.log("Error getting documents: ", error);
})


var tabla2 = document.getElementById('compras3');
db.collection("pedido").get().then((querySnapshot) => {
    tabla2.innerHTML = '';
    querySnapshot.forEach((doc) => {
        const infoD = doc.data()
        infoD.id = doc.id;
        //console.log(infoD);
        infoD.DatosPedido.forEach((datos) => {
            tabla2.innerHTML += `
                <div class="col-md-1">
                    <div class="product-image">
                        <img class="img-fluid d-block mx-auto image" src="${datos.imagen_producto}">
                    </div>
                </div>
                <div class="col-md-5 product-info">
                    <div class="product-specs">
                        <div>
                            <span>
                                Nombre:&nbsp;
                                <span class="value">
                                    ${datos.nombre_prod}
                                </span>
                            </span>
                        </div> 
                        <div>
                            <span>
                                Vendedor:&nbsp;
                            </span>
                        </div>
                        <div>
                            <span>
                                Precio por unidad:&nbsp;
                            </span>
                            <span class="value">
                                ${datos.costo_producto}
                            </span>
                        </div>
                    </div>
                </div>`;
            
        })

    });
})
.catch((error) => {
        console.log("Error getting documents: ", error);
})
