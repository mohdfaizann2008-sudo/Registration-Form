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


regist.addEventListener('click', (event)=>{
    event.preventDefault();
    let isValid = true;

    if (fullName.value.trim().length < 3 || fullName.value.trim().length > 25) {
        fullName.style.borderColor = "red";
        paragraph1.textContent = fullName.value.trim() === ""
            ? "Username must be filled"
            : "Username must be 3 to 25 characters";
        paragraph1.style.color = "red";
        isValid = false;
    } else {
        fullName.style.borderColor = "black";
        paragraph1.textContent = "";
    }

    if (!email.value.trim()) {
        email.style.borderColor = "red";
        paragraph2.textContent = "Email must be filled";
        paragraph2.style.color = "red";
        isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        email.style.borderColor = "red";
        paragraph2.textContent = "Please enter a valid email address";
        paragraph2.style.color = "red";
        isValid = false;
    } else {
        email.style.borderColor = "black";
        paragraph2.textContent = "";
    }

    if (pass.value.length < 8) {
        pass.style.borderColor = "red";
        paragraph3.textContent = pass.value === ""
            ? "Password must be filled"
            : "Password must be at least 8 characters";
        paragraph3.style.color = "red";
        isValid = false;
    } else {
        pass.style.borderColor = "black";
        paragraph3.textContent = "";
    }

    if (cnfpass.value === "" || cnfpass.value !== pass.value) {
        cnfpass.style.borderColor = "red";
        paragraph4.textContent = cnfpass.value === ""
            ? "Confirm password must be filled"
            : "The passwords do not match";
        paragraph4.style.color = "red";
        isValid = false;
    } else {
        cnfpass.style.borderColor = "black";
        paragraph4.textContent = "";
    }

    if (!isValid) return;

    const userData = {
        name: fullName.value,
        email: email.value,
        password: pass.value,
        confirmPass: cnfpass.value,
    };

    window.localStorage.setItem("userData", JSON.stringify(userData));
    const storedData = JSON.parse(localStorage.getItem("userData"));
    console.log(storedData);
    console.log(storedData.name);
   
   
    alert("Signup Successfully");
});





