no = 0
function one(){
random_number_r = Math.floor(Math.random() * 255) + 1;
random_number_g = Math.floor(Math.random() * 255) + 1;
random_number_b = Math.floor(Math.random() * 255) + 1;
value1 = document.getElementById("9766").value
if(value1 == 9766){
    document.getElementById("1").innerHTML = "A seat with four legs for one person";
    document.getElementById("1").style.color = "rgb("+random_number_r +","+ random_number_g +","+ random_number_b+")";
    no = no + 1
}
}
function two(){
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;
    value2 = document.getElementById("5637").value
    if(value2 == 5637){
        document.getElementById("2").innerHTML = "An opening in a wall, fitted with glass to allow light to pass in";
        document.getElementById("2").style.color = "rgb("+random_number_r +","+ random_number_g +","+ random_number_b+")";
        no = no + 1
    }
    }
    
function three(){
random_number_r = Math.floor(Math.random() * 255) + 1;
random_number_g = Math.floor(Math.random() * 255) + 1;
random_number_b = Math.floor(Math.random() * 255) + 1;
value3 = document.getElementById("9900").value
if(value3 == 9900){
    document.getElementById("3").innerHTML = "A barrier at the entrance of the room";
    document.getElementById("3").style.color = "rgb("+random_number_r +","+ random_number_g +","+ random_number_b+")";
    no = no + 1
}
    }
function four(){
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;
    value4 = document.getElementById("6448").value
    if(value4 == 6448){
        document.getElementById("4").innerHTML = "An electronic device for storing and processing data, typically in binary form, according to instructions given to it in a variable program";
        document.getElementById("4").style.color = "rgb("+random_number_r +","+ random_number_g +","+ random_number_b+")";
        no = no + 1
    }
}
function five(){
    value5 = document.getElementById("8841").value
    if(value5 == 8841){
    window.location = "surprise.html"
    }
}