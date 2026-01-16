//on going on next day
// let fun = app();
// app() run hua

// Andar:

// a = 10

// meet() bana

// return meet; hua isse  app() ne meet() ko bahar de diya 
//fun() run hua to meet() run hua 
// 3️⃣ Closure ki wajah se kya hua?

// meet() ko a chahiye

// Isliye JS ne:

// a = 10 ko memory me safe rakh liya

// 👉 meet + a = closure


function greet(){
    let a =10 ;
    function meet(){
        console.log(a)
    }
    return meet ;
}
let fun = greet();
fun(); //10

