const authenticate=()=>{
    var isValid=true
    
    var ferr=document.getElementById("errfname")


    var fname=document.forms['signup'].fname.value
    

    try{
        if(fname==""){
            throw "First name shouldn't empty"
        }
        else if(!(/[A-Za-z]/).test(fname)){
            throw "First name invalid"
        }
    }
    catch(message){
        ferr.innerHTML=message
        isValid=false
    }


    return isValid

}