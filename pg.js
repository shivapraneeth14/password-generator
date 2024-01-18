let nav=document.querySelector(".mid input");
let gen=document.querySelector(".end button");
let length=10;
let up="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lo="abcdefghijklmnopqrstuvwxyz";
let sy="!@#%^&*()_+{}|?><|}{[]\,./}";
let nu="123456789";
let cp=document.querySelector(".mid img");
const alchar=up+lo+sy+nu;
console.log(alchar);

cp.addEventListener("click",()=>{
    copycomd();

})
    gen.addEventListener("click",()=>{
        passwordgen();
});

let passwordgen=()=>{
    let password = "";
    password += up[Math.floor(Math.random()*up.length)];
    password += lo[Math.floor(Math.random()*lo.length)];
    password += sy[Math.floor(Math.random()*sy.length)];
    password += nu[Math.floor(Math.random()*nu.length)];
    while(length>password.length){
        password += alchar[Math.floor(Math.random()*alchar.length)];
        
    }
    nav.value=password;
   
};
function copycomd(){
    nav.select();
    document.execCommand("copy");
}