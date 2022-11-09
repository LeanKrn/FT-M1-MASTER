

//x = 1;
//var a = 5;
//var b = 10;
//var c = function (a, b, c) {
//    var x = 10;
//    console.log(x); //este da 1  //este dio 10 por que la var x esta de local
//    console.log(a); //este da 5  //este dio 8 razon se le dio el valor 8 al momento de la ejecucion de la funcion
//    var f = function (a, b, c) {
//        b = a;
//        console.log(b); //este da 5  // este dio 8 razon se le dio el valor de "a" a "b"
//        b = c;
//        var x = 5;
//    }
//    f(a, b, c);
//    console.log(b); //este da 5  // este dio 9 razon cuando se ejecuto la funcion a "b" se le dio el valor 9
//}
//c(8, 9, 10);
//console.log(b); //da 5  //dio 10 razon la variable global "b" tiene el valor 10
//console.log(x); //este da 1  //dio 1



//console.log(bar); //esto nos da 1  //nos da undefined
//console.log(baz); //esto nos da undefined  //nos devuelve un error de que no esta definido
//foo();   //esto llama a la funcion fuu y nos da "Hola!"  //nos devuelve "Hola!"
//function foo() { console.log('Hola!'); }
//var bar = 1;
//baz = 2;


//var instructor = "Tony";
//if(true) {
//    var instructor = "Franco";
//}
//console.log(instructor);  //nos da "Tony"  //nos dio Franco 


//var instructor = "Tony";
//console.log(instructor); //nos da "Tony"  //nos dio "Tony"
//(function() {
//   if(true) {
//      var instructor = "Franco";
//      console.log(instructor);  //nos da "Franco"  //nos dio "Franco"
//   }
//})();
//console.log(instructor); //nos da "Tony"  //nos dio "Tony"


//var instructor = "Tony";
//let pm = "Franco";
//if (true) {
//    var instructor = "The Flash";
//    let pm = "Reverse Flash";
//    console.log(instructor); //nos da "The Flash" //nos da "The Flash"
//    console.log(pm);//nos da "Reverse Flash" //nos da "Reverse Flash"
//}
//console.log(instructor); //nos da "The Flash" //nos da "The Flash"
//console.log(pm);//nos da "Reverse Flash" //nos dio "Franco" razon ¿por q es let?


//console.log(6 / "3")//2 //dio 2
//console.log("2" * "3") //6 //dio 6
//console.log(4 + 5 + "px") //"9px" //dio "9px"
//console.log("$" + 4 + 5) //$45 //dio $45
//console.log("4" - 2) //2 //dio 2
//console.log("4px" - 2) //NaN //dio NaN
//console.log(7 / 0) //infinity //dio infinity
//console.log({}[0]) //undefined //dio undefined
//console.log(parseInt("09")) //9 //dio 9
//console.log(5 && 2) //2 //dio 2
//console.log(2 && 5 )//2 //dio 5
//console.log(5 || 0) //5 //dio 5
//console.log(0 || 5 )//5 //dio 5
//console.log([3]+[3]-[10]) //da 23 //dio 23
//console.log(3>2>1) //da false //dio false
//    //[] == ![] //da true //dio true


//function test() {
//    console.log(a);  //puede ser que consologue 1 y termine la funcion aunque no estoy muy seguro de eso
//    console.log(foo()); //o puede que a su vez tambien consologue 2 por que se ejecuta esa funcion
// 
//    var a = 1;
//    function foo() {
//       return 2; 
//    }
// }
// 
// test();
// //puede tambien devolver 12 o 1 y 2 por un tema de que se ejecutan los 2 console.log
//
// //se termino consologueando undefined por que se definio despues la var a y tambien consologueo 2 por la funcion foo

//var snack = 'Meow Mix';
//
//function getFood(food) {
//    if (food) {
//        var snack = 'Friskies';
//        return snack;
//    }
//    return snack;
//}
//
//getFood(false);
//    //retorna snack aunque tambien puede llegar a retornar false por que es el valor que le estamos dando y podria hacerse un lio d circuitos kdjsjds
//    //no retorno nada por que la var snack solo existe adentro del if no por fuera


//var fullname = 'Juan Perez';
//var obj = {
//   fullname: 'Natalia Nerea',
//   prop: {
//      fullname: 'Aurelio De Rosa',
//      getFullname: function() {
//         return this.fullname;
//      }
//   }
//};
//
//console.log(obj.prop.getFullname()); //devuelve "Aurelio De Rosa" //dio "Aurelio De Rosa"
//
//var test = obj.prop.getFullname;
//
//console.log(test()); //devuelve "juan perez" //dio undefined

//  function printing() {
//      console.log(1);
//      setTimeout(function() { console.log(2); }, 1000);
//      setTimeout(function() { console.log(3); }, 0);
//      console.log(4);
//   }
//   
//   printing();//  

//   //creeria que primero muestra 1 despues del 2 al 1000, despues del 3 al 0 y por ultimo el numero 4//  

//   //solo dio del 1 al 4 por que los numeros 1000 y 0 no estaban en la funcion simplemente los ignoro


//setTimeout da el proceso para otra api para que lo resuelva por que se le da como consigna que es muy pesada
 //los numeros de atras son los segundos que va a tardar en procesarla la api

 //Es una funcion que retorna una funcion,donde la funcion retornada usa un parametro
 //de la funcion que la invoco