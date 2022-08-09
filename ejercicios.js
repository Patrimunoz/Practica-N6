function crearUsuario() {
    // Crea una función constructor llamada "Usuario"
    // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
    // En el `contructor`, define el usuario, el nombre, el email y la contraseña
    // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
    // {{nombre}} debe ser el nombre definido en cada instancia
    // Devuelve la clase
    // Tu código:
}
function Usuario(usuario, nombre, email, password){

this.usuario = usuario || "patrimunoz";
this.nombre = nombre || "Patricia";
this.email = email || "patitoputelli@gmail.com";
this.password = password || "pp1234";
this.saludar = function() {

    return 'Hola, mi nombre es ' + this.nombre;}
}
const Patricia = new Usuario('Patricia');
console.log(Patricia.saludar());




  function creaObj() { 
    // Crea una función constructor llamada "datosPersona" y luego crea dos personas nuevas con datos de datosPersona
    // Los datos, son nombre, apellido y dni
    // Tu código:
  }
function datosPersona(nombre, apellido, dni){

    this.nombre = nombre || "Carlos";
    this.apellido = apellido || "Verona";
    this.dni = dni || 12444555;
  }
  const Mike = new datosPersona('Mike');
  const Brad = new datosPersona('Brad');
  console.log (Mike.nombre)
  console.log (Brad.nombre)
  
  function creaObj2() { 
    // Crea una función constructor llamada "Default" y luego crea dos personas nuevas con datos de datosPersona sin pasarle ningun campo
    // Los datos, son nombre, apellido y dni
    // Los datos que deberian mostrarse al acceder a uno de ellos deben ser por deafult, los que ustedes quieran
    // Tu código:
  }
  function Default(nombre, apellido, dni){

    this.nombre = nombre || "Max";
    this.apellido = apellido || "Putelli";
    this.dni = dni || 53222777;
  }
  const Ciro = new Default();
  const Mateo = new Default();
 
 console.log(Ciro)
 

  function Computador() { 
    // Deben crear una funcion constructora
    // Los datos son, id, marca, procesador, ram, ssd.
    // Deben simular el inicio de una pc en donde primero muestre el mensaje que esta iniciando y luego una funcion que me diga los datos de la computadora.
    // La funcion debe estar echa dentro de la funcion constructora.
    // Los datos de la computadora deben guardarse dentro de otra variable y mostrar esa persona para ver los datos.
    // Tu código:
  }
function Computador( id, marca, procesador, ram, ssd){

    this.id = id || "Acer 600";
    this.marca = marca || "Acer" ;
    this.procesador = procesador || "Intel" ;
    this.ram = ram || "8gb";
    this.ssd = ssd || "15gb";
    this.inicio = function (id, marca, procesador, ram, ssd) {

        return 'Pc iniciando ' + this.id + this.marca + this.procesador + this.ram + this.ssd  ;};
        
    }
    
    const computador = new Computador();
    console.log(computador.inicio());     


