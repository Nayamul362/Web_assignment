function validation(){
    let id=document.forms["registration"]["eID"].value;
    let fname= document.forms["registration"]["fname"].value;
    let mail=document.forms["registration"]["mail"].value;
    let dep= document.forms["registration"]["dep"].value;
    let date=document.forms["registration"]["date"].value;
    let gender=document.forms["registration"]["gender"].value;
    let type=document.forms["registration"]["type"].value;

    let iderr=document.getElementById("iderr");
    let nameerr= document.getElementById("nameerr");
    let mailerr=document.getElementById("mailerr");
    let deperr=document.getElementById("deperr");
    let dateerr=document.getElementById("dateerr");
    let gendererr=document.getElementById("gendererr");



    let idcheck=/^EMP\d{3}$/
    let namecheck=/^[A-Za-z\s]+$/
    let mailcheck=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    iderr.innerText="";
    nameerr.innerText="";
    mailerr.innerText="";
    deperr.innerText="";
    dateerr.innerText="";
    gendererr.innerText="";

    let flag=true;

    if(!idcheck.test(id)){
        iderr.innerText="Invalid Employee ID";
             return id=false;
        }
    if(!namecheck.test(fname)){
        nameerr.innerText="Invalid Name";
             return id=false;
        }
    if(!mailcheck.test(mail)){
        mailerr.innerText="Email is required";
             return id=false;
        }
    if(dep===""){
        deperr.innerText="Department is required"; 
            return id=false;
        }
    if(date===""){
        dateerr.innerText="Date is required";
         return id=false;
        }
    if(gender===""){
        gendererr.innerText="please select one"; 
        return id=false;
        }

    if(flag){
        document.getElementById("formoutput").innerText=id+"\n"+fname+"\n"+mail+"\n"+dep+"\n"+date+"\n"+gender+"\n"+type;
        }
    return flag;
    alert(flag);

}

document.getElementById("form").addEventListener("submit", function(event){
    event.preventDefault();
  });


 