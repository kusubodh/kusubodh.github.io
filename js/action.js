function openPage(pageName, elmnt) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = 'black';
}

function myFunction() {
    var x = document.getElementById("myTextarea").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    x = "Message is Sent \n Name : " + name + "\nEmail : " + email + "\n Message :  " + x;

    //document.getElementById("demo").innerHTML = x;
    alert(x);
}

// Get the element with id="defaultOpen" and click on it
//document.getElementById("defaultOpen").click();