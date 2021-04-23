function myFunction() {
    var element = document.body;
    element.classList.toggle("light-mode");
}

function changeImage(){
    if(document.getElementById('retroButton').checked){
        var img1 = document.getElementById("rate1");
        img1.src="../images/rates1.png"//image it switches to in dark mode
        return false;
    }
    else{
        var img1 = document.getElementById("rate1");
        img1.src="../images/rates1-1.png"//current
        return false;
    }
}

function changeImage2(){
    if(document.getElementById('retroButton').checked){
        var img2 = document.getElementById("rate2");
        img2.src="../images/rates2.png"//image it switches to in dark mode
        return false;
    }
    else{
        var img2 = document.getElementById("rate2");
        img2.src="../images/rates2-2.png"//current
        return false;
    }
}

function changeImage3(){
    if(document.getElementById('retroButton').checked){
        var img3 = document.getElementById("rate3");
        img3.src="../images/rates3.png"//image it switches to in dark mode
        return false;
    }
    else{
        var img3 = document.getElementById("rate3");
        img3.src="../images/rates3-3.png"//current
        return false;
    }
}