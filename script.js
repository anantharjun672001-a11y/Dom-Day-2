//Example:- addEventListener

/* const res=document.getElementById("btn")
res.addEventListener('dblclick',()=>{
    const result=document.getElementById("email").value;
        if(result==='test@gmail.com'){
           alert( "you are valid user")
        }else{
            alert("you are not a valid user")
        }
})
 */

//Example:task1
/* const p = document.createElement("p");
const p1 = document.createElement("p");
const p2 = document.createElement("p");
const p3 = document.createElement("p");
const label = document.createElement("label")
label.setAttribute("for","username");
label.innerText = "Name";
const username = document.createElement("input")
username.setAttribute("name","username");
username.setAttribute("id","username");
username.setAttribute("type","text");
username.setAttribute("placeholder","Enter Your Name");
const label1 = document.createElement("label")
label1.setAttribute("for","email");
label1.innerText = "Email";
const email = document.createElement("input")
email.setAttribute("name","email");
email.setAttribute("id","email");
email.setAttribute("type", "email");
email.setAttribute("placeholder","Enter Your email");
const label2 = document.createElement("label")
label2.setAttribute("for","pwd");
label2.innerText = "Password";
const pwd = document.createElement("input")
pwd.setAttribute("name","pwd");
pwd.setAttribute("id","pwd");
pwd.setAttribute("type", "password");
pwd.setAttribute("placeholder","Enter Your pwd");
const label3 = document.createElement("label")
label3.setAttribute("for","pwd1");
label3.innerText = "Confirm Password";
const pwd1 = document.createElement("input")
pwd1.setAttribute("name","pwd1");
pwd1.setAttribute("id","pwd1");
pwd1.setAttribute("type", "password");
pwd1.setAttribute("placeholder","Enter Your pwd1");
const button = document.createElement("button")
button.setAttribute("type","submit")
button.innerText = "Register"
button.addEventListener("click",()=>{
    alert("Registered Successfully")
    const namevalue = document.getElementById("username").value;
    console.log(namevalue);
    const emailvalue = document.getElementById("email").value;
    console.log(emailvalue);
    const pwdvalue = document.getElementById("pwd").value;
    console.log(pwdvalue);
    const pwdvalue1 = document.getElementById("pwd1").value;
    console.log(pwdvalue1);
})
p.append(label,username)
p1.append(label1,email)
p2.append(label2,pwd)
p3.append(label3,pwd1)
document.body.append(p,p1,p2,p3,button) */

// Session task 2 color circle:

function elements(tagname,content,attrname,attrvalue){
    const res = document.createElement(tagname);
    res.innerHTML = content;
    res.setAttribute(attrname,attrvalue);
    return res;
}

const division = elements("div","","id","container");
const red = elements("button","red","type","button");
const circle = elements("div","","id","circle")
const green = elements("button","green","type","button");
const blue = elements("button","blue","type","button");
const reset = elements("button","reset","type","button");

red.addEventListener("click",()=>{
  circle.style.backgroundColor = "red";
})
green.addEventListener("click",()=>{
  circle.style.backgroundColor = "green";
})
blue.addEventListener("click",()=>{
  circle.style.backgroundColor = "blue";
})
reset.addEventListener("click",()=>{
  circle.style.backgroundColor = "white";
})

division.append(circle,red,green,blue,reset)
document.body.append(division)
