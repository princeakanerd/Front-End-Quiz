// first
$("#Q1O4").on("click",function(){
    $("#Q1O4").addClass("sahi-jawab");

})

$(".que1").on("click",function(){
    var uskiID=$(this).attr("id");
    $("#Q1O4").addClass("sahi-jawab");
    $("#"+uskiID).addClass("galat-jawab");
})

//second
$("#Q2O3").on("click",function(){
    $("#Q2O3").addClass("sahi-jawab");
})

$(".que2").on("click",function(){
    var uskiID=$(this).attr("id");
    $("#Q2O3").addClass("sahi-jawab");
    $("#"+uskiID).addClass("galat-jawab");
})

// Third
$("#Q3O2").on("click",function(){
    $("#Q3O2").addClass("sahi-jawab");
})

$(".que3").on("click",function(){
    var uskiID=$(this).attr("id");
    $("#Q3O2").addClass("sahi-jawab");
    $("#"+uskiID).addClass("galat-jawab");
})

//Fourth
$("#Q4O4").on("click",function(){
    $("#Q4O4").addClass("sahi-jawab");
})

$(".que4").on("click",function(){
    
    $("#Q4O4").addClass("sahi-jawab");
    $("#Q4O1").addClass("sahi-jawab");
    $("#Q4O2").addClass("sahi-jawab");
    $("#Q4O3").addClass("sahi-jawab");
   
})