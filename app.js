function add() { 
 	// almacenar los datos ingresados por el usuario, se toma un valor 
 	var comments=document.getElementById("comment").value; //.value 
    document.getElementById("comment").value= ""; // para limpiar el text area despues del comentario
    var newComments= document.createElement("div");// crear un contenedor para guardar los datos
    var cont=document.getElementById("cont");
    var check=document.createElement("input");// creando el cheklist, que es un imput de tipo chek
    check.type="checkbox";
    var paragraph=document.createElement('p');// creamos la etiqueta p
    paragraph.classList.add("color")

    var nodoText=document.createTextNode(comments)// creamos el texto de la p
    paragraph.appendChild(nodoText);

    var heart=document.createElement("i");// icono de corazon
    heart.classList.add("fa", "fa-heart", "heart");// se le da una clase al corazon

    var trash=document.createElement("i");          // icono de basura
    trash.classList.add("fa", "fa-trash", "trash");// se le da una clase a la basura

    newComments.appendChild(check);
    newComments.appendChild(heart);
    newComments.appendChild(trash);
    newComments.appendChild(paragraph);
    cont.appendChild(newComments);
    check.addEventListener("click",function(){
    paragraph.classList.toggle("strike-out");

    })
    trash.addEventListener("click", function(){
    	cont.removeChild(newComments);
    })
    
    heart.addEventListener("click", function(){
    	heart.classList.toggle("red");
 })
    
}



