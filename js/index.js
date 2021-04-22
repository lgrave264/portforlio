function myFunction() {
    var element = document.body;
    element.classList.toggle("light-mode");
}

  function changeImage(){
    if(document.getElementById('retroButton').checked){
        var img1 = document.getElementById("logo");
        img1.src="images/logo.png"//image it switches to in dark mode
        return false;
    }
    else{
        var img1 = document.getElementById("logo");
        img1.src="images/logo2.png"//current
        return false;
    }
}