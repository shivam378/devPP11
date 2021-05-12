var txt="pot fly";
function print(txt){
    let arr=txt.split(" ");
    console.log(arr);
    var a= arr[0];
    var b=arr[1];
    var c= a.split("");
    var d= b.split("");
    console.log(d[0] + a.substring(1,a.length) + " " + c[0] + b.substring(1,b.length));
}
print(txt);