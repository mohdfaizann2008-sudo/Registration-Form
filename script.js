//Getting all ID names of input
    let fullName =document.getElementById("unName");
    // console.log(fullName);
    let email =document.getElementById("mail");
    // console.log(Email);
    let pass =document.getElementById("pwd");
    // console.log(pass);
    let cnfpass =document.getElementById("cnfpass");
    
    let regist =document.getElementById("regist");
    // console.log(birth);
    // let num =document.getElementById("mob");
    // console.log(num);
    // console.log(reg);
    // let reset =document.getElementById("form")
    // console.log(reset);

    //Getting all ID names of <p>
let paragraph1=document.getElementById("para-1");

let paragraph2=document.getElementById("para-2");

let paragraph3=document.getElementById("para-3");

let paragraph4=document.getElementById("para-4");

let paragraph5=document.getElementById("para-5");

let emailValid="@";

regist.addEventListener('click', ()=>{
    if(fullName.value==="" ||email.value===""||pass.value===""||cnfpass.value===""||regist.value===""){

       
        if(fullName.value===""){
            fullName.style.borderColor="red";
            paragraph1.textContent="Username must be fill";
            paragraph1.style.color="red";

        } else if(fullName.value.length < 3){
            fullName.style.borderColor="red";
            paragraph1.textContent="Username must be 3 to 25 characters";
            paragraph1.style.color="red";

        
        } else {
            fullName.style.borderColor="black";
            paragraph1.textContent="";
        }
     
        if(email.value===""){
            email.style.borderColor="red";
            paragraph2.textContent="Email must be fill"
            paragraph2.style.color="red"
        }
        else if(email.value.match(emailValid)){
            email.style.borderColor="black";
            paragraph2.textContent="";
        }
        else{
            fullName.style.borderColor="red";
            paragraph2.textContent="In your email a letter was missed";
        }
        
        // if(email.value.match(emailValid)){
        //     email.style.borderColor="black";
        //     paragraph2.textContent="";
            
        // }else{
        //     paragraph2.textContent="In your email a letter was missed";
        //     paragraph2.style.color="red";
        // }
        if(pass.value===""){
            pass.style.borderColor="red";
            paragraph3.textContent="password must be fill"
            paragraph3.style.color="red"
        }
        else if(pass.value.length<8){
            pass.style.borderColor="red";
            paragraph3.textContent="Password must be 8 character"
            paragraph3.style.color="red"
        }
        else{
            pass.style.borderColor="black";
            paragraph3.textContent = ""
        }
        if(cnfpass.value===""){
            cnfpass.style.borderColor="red";
            paragraph4.textContent="confirm password must be fill"
            paragraph4.style.color="red"
        }
        else if(cnfpass.value != pass.value){
            cnfpass.style.borderColor="red";
            paragraph4.textContent = "The password did not matched";    
        }
        else{
            cnfpass.style.borderColor="black";
            paragraph4.textContent = ""
            // console.log("pass was correct");
        }
}else{
    alert('Signup Successfully');
};
});



// para-1.addEventListener('',()=>{
//     if(fullName.value===){

//     }
// })