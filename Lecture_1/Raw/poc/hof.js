function getfirstname(name){
    return name.split(" ")[0];
}

function lastname(name){
    return name.split(" ")[1];
}
//  hof that accept a function and call internally
function greeter(name,cb){
    let cb1 = cb(name);
    console.log( "Hi" + cb1);

}
greeter("Manish Tiwari" ,getfirstname);
greeter("Manish Tiwari" ,lastname);

