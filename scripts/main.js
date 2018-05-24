function submitAlert() {
    alert("Your form has been submitted");
}

function copyrightYearUpdate(){
    var currentYear = document.write(new Date().getFullYear());
    document.getElementById("autoYear").innerHTML = currentYear.toString();
}
