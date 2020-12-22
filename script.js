var count=1;
setInterval(function(){
    document.getElementById("chButton-"+count).checked=true;
    count++;
    if(count>10){
        count=1;
    }
},3000);

$(".").magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery:{
        enabled: true
    }
});


