
    let fullName =document.getElementById("unName");
    // console.log(fullName);
    let email =document.getElementById("mail");
    // console.log(Email);
    let pass =document.getElementById("pwd");
    // console.log(pass);
    let birth =document.getElementById("birth");
    // console.log(birth);
    let num =document.getElementById("mob");
    // console.log(num);
    let regist =document.getElementById("regist");
    // console.log(reg);
    let reset =document.getElementById("form");
    // console.log(reset);

regist.addEventListener('click', ()=>{
    if(fullName.value===""){
    fullName.style.borderColor="red";
    email.style.borderColor="red";
}
})