const billamount=document.querySelector("#billamount")
const noofpeople=document.querySelector("#no-of-people")
const service=document.querySelector("#service")
const btn= document.querySelector("#submitbtn")

const output=document.querySelector("#output");
function calculatetip(){
    const billvalue=billamount.value;
    console.log(billvalue)
    const servicevalue=service.value;
    console.log(servicevalue);
    const noofpeoplevalue=noofpeople.value;
    console.log(noofpeoplevalue)


    let result= (billvalue*servicevalue)/(noofpeoplevalue*100);
    console.log(result)
    output.innerText= result;
}
btn.addEventListener("click",calculatetip)