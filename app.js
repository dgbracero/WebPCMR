//Object Literal
/*
const cliente = {
    nombre : 'Juan',
    saldo : 501,
    tipocliente : function(){
        let tipo;

        if(this.saldo > 1000){
            tipo = 'Gold';
        }else if(this.saldo > 500) {
            tipo = 'platino';
        }else{
            tipo = 'Normal';
        }

        return tipo;
    }
}

console.log(cliente.tipo);
*/
//Método altenativo
function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
    this.tipoCliente = function(){
        let tipo;
        if(this.saldo > 1000){
            tipo = 'Gold';
        }else if(this.saldo > 500) {
            tipo = 'platino';
        }else{
            tipo = 'Normal';
        }

        return tipo;
    }

}

const persona = new Cliente('Pedro', 2000);
console.log(persona);