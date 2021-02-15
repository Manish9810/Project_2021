

//let x = function f1(){
  //  console.log("manish");
//}
//x();// this is function variable;

// function hi(param){
    // console.log( "hey" + param);
// }
// hi("manish");

function hi(param){
    console.log(param());
}

//hi("manish");
///hi(10);
//hi([1,2,3,900]);
// pass a function as a parameter of hi() function.!!!
hi(function hi1(){
    let x =10;
    x++;
    console.log("heloo brother");
    return x;
});




