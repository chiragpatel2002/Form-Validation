function validateForm() {

    var name = document.forms["myForm"]["fname"].value;
    var gender = document.forms["myForm"]["gender"].value;
    var age = document.forms["myForm"]["age"].value;
    var a = parseInt(age);
    var email = document.forms["myForm"]["email"].value;
    var password = document.forms["myForm"]["password"].value;
    var url = document.forms["myForm"]["website"].value;
    var country = document.forms["myForm"]["country"].value;
    var submit =document.forms["myForm"]["country"].value; 
    var birthday =document.forms["myForm"]["birthday"].value; 
    var checkbox =document.getElementById('myCheck');
    var textarea =document.forms["myForm"]["textarea"].value;
    var string ="";

    if (name == "") {

        alert("Name Field is mandatory"); return false;
    } string +="Name : " + name;
    string +=("\n")

    if (gender != "male" && gender != "female" && gender != "Not Specified") {
        alert("Atleast one Gender has to be chosen"); return false;
    } string +="Gender : "+gender;
    string +=("\n")
    

    if (isNaN(a)) {

        alert("Age is compulsory and must be a number"); return false;
    } string +="Age : "+a;
    string +=("\n")


    if (email == "") {

        alert("Email address is required"); return false;
    } else if (/^\w+([\.-]?\w+)*\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        alert("Email address entered is invalid"); return false;
    }  string +="Email : "+email;
    string +=("\n")

    if (password == "") {
        alert("Password is required"); return false;
    } 

    if (url == "") {
        alert("Enter URl");

    } else if (/^(ftp|http|https):\/\/[^ "]+$/.test(url)) {

        alert("Website url entered is invalid"); return false;
    }  string +="Website : "+url;
    string +=("\n")
    if (country == "choose") {
        alert("Select country"); return false;
    }
    string +="Country : " + country;
    string +=("\n")
    if (birthday == "") {
        alert("Select birthday"); return false;
    }
    string += "Birth Date : "+birthday;
    string +=("\n");
    if(!checkbox.checked) {
        alert("Must agree to Terms and Conditions"); return false;
    }
    if(textarea != ""){
        
    }
    string += "Comments : "+textarea
    string  +=("\n")
    if(submit ==""){
        alert("fill up all data"); return false;
    }
    else {
    alert("Form fill successfully . See details below")
        string +=("\n")
        document.getElementById("details").innerHTML = string;
       string +=("\n")
    }
    
return false;
}