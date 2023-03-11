function changeMe(){
    console.log(document.getElementById("p-2"));
    document.getElementById("p-2").innerHTML= "Changed with JavaScript";
}     

function changeContactUs(contact) {
    document.getElementById("contact-us").innerHTML=contact;
    console.log(contact)

}