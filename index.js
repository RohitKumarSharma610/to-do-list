let myfun = () =>{
    let value = input1.value;
 if(value==""){
    //  alert("please enter the  value")
    value = '';
 }else{
    console.log(value);
    let newli  = document.createElement("li");
    console.log(newli)
    newli.innerHTML = value ;
    console.log(newli)
    ul1.appendChild(newli);
    input1.value = "";
 }

}