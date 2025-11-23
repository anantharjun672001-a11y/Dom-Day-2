//Example:- addEventListener

const res=document.getElementById("btn")
res.addEventListener('dblclick',()=>{
    const result=document.getElementById("email").value;
        if(result==='test@gmail.com'){
           alert( "you are valid user")
        }else{
            alert("you are not a valid user")
        }
})
