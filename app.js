document.addEventListener("DOMContentLoaded", function(){


//Muestra un mensaje de bienvenida en la consola
console.log("Sistema EBAC de registro de alumnos");

//Declaracion de variables para enlazarlas con HTML y su respectivo ID
var form = document.getElementById("registration-form");
var addButton = document.getElementById("add-button");
var consultButton = document.getElementById("consult-button");
var deleteButton = document.getElementById("delete-button");

//Evento al cual se le asignan parametros
form.addEventListener("submit", agregarAlumno);
//Para no mostrar el formulario
form.style.display = "none";

addButton.addEventListener("click", function(event){
    form.style.display = "flex";
})

consultButton.addEventListener("click", consultarRegistros);

deleteButton.addEventListener("click", eliminarAlumno);


// La variable guarda en un diccionario los alumnos
var registro = [

    //Lista de alumnos por medio de objetos
    {name: 'Nicolas Contreras', age: '24', recidenceZone: 'OAX', studyProgram: 'Data Science', email: 'nico@mail.com'},
    {name: 'Berenice Goytia', age: '23', recidenceZone: 'SON', studyProgram: 'Cloud Dev', email: 'bere@mail.com'},
    {name: 'Javier Kat', age: '75', recidenceZone: 'OAX', studyProgram: 'Architechture', email: 'javier@mail.com'},
    {name: 'Ruzani Contreras', age: '45', recidenceZone: 'MTY', studyProgram: 'Marketing', email: 'ruzani@mail.com'},
    {name: 'Miguel Servin', age: '49', recidenceZone: 'CDMX', studyProgram: 'Cibersecurity', email: 'miguel@mail.com'},
];

// Esta funcion agrega a los alumnos dentro del diccionario registro
function agregarAlumno(event){

    event.preventDefault();

    var name = document.getElementById("name-input").value;
    var recidenceZone = document.getElementById("locality-input").value;
    var age = document.getElementById("age-input").value;
    var studyProgram = document.getElementById("course-input").value;
    var email = document.getElementById("email-input").value;

    var nuevoAlumno = {name: name, age: age, recidenceZone: recidenceZone, studyProgram: studyProgram, email: email};
    // .push funciona para agregar datos dentro del arreglo
    registro.push(nuevoAlumno);

    //Para mostrar el campo vacio
    var name = document.getElementById("name-input").value = "";
    var recidenceZone = document.getElementById("locality-input").value = "";
    var age = document.getElementById("age-input").value = "";
    var studyProgram = document.getElementById("course-input").value = "";
    var email = document.getElementById("email-input").value = "";

    form.style.display = "none";
}

// Esta funcion muestra la cantidad de alumnos al principio y muestra los alumnos que hay
function consultarRegistros(){
   /* conteoAlumno();
    for(var i = 0; i < registro.length; i++){
        console.log("Alumno " + (i + 1));
        console.log("Nombre: " + registro[i].name);
        console.log("Edad: " + registro[i].age);
        console.log("Zona de residencia: " + registro[i].recidenceZone);
        console.log("Programa de estudio: " + registro[i].studyProgram);
        console.log("Correo electronico: " + registro[i].email);
        console.log("------------------------------------------------")
        */
       console.table(registro);
    //};
    //console.log(registro[2].age);
}

//Funcion para eliminar alumnos
function eliminarAlumno(){
    var nombreAeliminar = prompt('Ingresa el nombre del alumno a eliminar');

    //Utiliza el metodo filter para crear un nuevo arreglo sin el alumno a eliminar
    registro = registro.filter(alumno => alumno.name !== nombreAeliminar);
}

// Esta funcion capta el tamanho del diccionario registro, para tener el conteo de alumnos
function conteoAlumno(){
    console.log('La cantidad de alumnos es: ' + registro.length);
}


// El do-while evalua si aun quiero seguir haciendo consultas, mientras la respuesta sea "s"
//do{

// Se muestra un menu para seleccionar la opcion deseada
/*var opcion = prompt("Seleccione una opcion: \n1. Agregar registro \n2. Consultar registros de los alumnos \n3. Eliminar registro \n4. Salir")

if (opcion === "1"){
    agregarAlumno();
} else if(opcion === "2"){
    consultarRegistros();
} else if(opcion === "3"){
    eliminarAlumno();
} else if(opcion === "4"){
    alert("Saliste");
}else{
    alert("Selecciona una opcion correcta");
}

var continuar = prompt('Deseas hacer otra accion? (S/N)')

} while(continuar === "s");

*/
});