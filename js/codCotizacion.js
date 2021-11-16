
function ejecutar(){
    var nombre = document.getElementById("nombre").value;
    var documento = document.getElementById("documento").value;
    var material = document.getElementById("mat1").value;
    var cantidad = document.getElementById("cant").value;
    var precio = document.getElementById("precio").value;
    var descripcion = document.getElementById("desc").value;

    material = "Cable UTP";
    cantidad = "400mts";
    precio = " $400.000";
    descripcion = "Cable UTP Cat 6";

    
    document.getElementById("nombre").innerHTML = nombre;
    document.getElementById("documento").innerHTML = documento;
    document.getElementById("mat1").innerHTML = material;
    document.getElementById("cant").innerHTML = cantidad;
    document.getElementById("precio").innerHTML = precio;
}
