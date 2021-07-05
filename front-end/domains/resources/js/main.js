$(".carousel").owlCarousel({
    margin: 20,
    loop: false,
    autoplay: false,
    dots: false,
    nav: true, 
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    items: 5,
    responsive:{
        0:{
            items:1
        },
        700:{
            items:2
        },
        1000:{
            items:4
        }
    }
});

$('.owl-nav > div').on('click', function () {
    $('.owl-carousel').trigger('stop.owl.autoplay');
    var carousel = $('.owl-carousel').data('owl.carousel');
    carousel.settings.autoplay = false; //don't know if both are necessary
    carousel.options.autoplay = false;
    $('.owl-carousel').trigger('refresh.owl.carousel');
});

document.querySelector("#card1").addEventListener("click", function(){
    document.querySelector("#u1").style.display="block";
    document.getElementById("u1").style.background = "linear-gradient(88.77deg, #000000 30.58%, rgba(0, 0, 0, 0) 79.74%), url('resources/img/precuela.png')";
    document.getElementById("domain_head").innerHTML="Precuela";
    // document.getElementById("explore").innerHTML="Explore Workshops";
    document.getElementById("fac_name1").innerHTML="Shrawan Kumar";
    document.getElementById('vector').remove();
    document.getElementById('bg').remove();
}); 

document.querySelector("#explore").addEventListener("click", function(){
    document.querySelector("#v1").style.display="block";
    document.querySelector("#v1").scrollIntoView();
}); 

document.querySelector("#card2").addEventListener("click", function(){
    document.querySelector("#u1").style.display="block";
    document.getElementById("explore").innerHTML="Explore Workshops";
    document.getElementById("u1").style.background="linear-gradient(1.32deg, #000000 14.56%, rgba(0, 0, 0, 0) 61.42%), linear-gradient(89.68deg, #000000 8.75%, rgba(0, 0, 0, 0) 80.16%), url('resources/img/plexus.png')";
    document.getElementById("domain_head").innerHTML="Plexus";
    document.getElementById("fac_name1").innerHTML="Test Name";
    document.getElementById('vector').remove();
    document.getElementById('bg').remove();
});

document.querySelector("#card3").addEventListener("click", function(){
    document.querySelector("#u1").style.display="block";
    document.getElementById("u1").style.background="url('resources/img/kermis.png')";
    document.getElementById("domain_head").innerHTML="Kermis";
    document.getElementById("fac_name1").innerHTML="Test Name";
    document.getElementById('vector').remove();
    document.getElementById('bg').remove();
}); 

document.querySelector("#card4").addEventListener("click", function(){
    document.querySelector("#u1").style.display="block";
    document.getElementById("u1").style.background="linear-gradient(90deg, #000000 5.12%, rgba(0, 0, 0, 0) 48.1%), url('resources/img/robozar.png')";
    document.getElementById("domain_head").innerHTML="Robozar";
    document.getElementById("fac_name1").innerHTML="Shrawan Kumar";
    document.getElementById('vector').remove();
    document.getElementById('bg').remove();
}); 

document.querySelector("#card5").addEventListener("click", function(){
    document.querySelector("#u1").style.display="block";
    document.getElementById("u1").style.background="url('resources/img/chemfor.png')";
    document.getElementById("domain_head").innerHTML="Chemfor";
    document.getElementById("fac_name1").innerHTML="Test Name";
    document.getElementById('vector').remove();
    document.getElementById('bg').remove();
}); 

document.querySelector("#card6").addEventListener("click", function(){
    document.querySelector("#u1").style.display="block";
    document.getElementById("u1").style.background="linear-gradient(90deg, #000000 15.64%, rgba(0, 0, 0, 0) 61.49%), url('resources/img/electrica.png')";
    document.getElementById("domain_head").innerHTML="Electrica";
    document.getElementById("fac_name1").innerHTML="Test Name";
    document.getElementById('vector').remove();
    document.getElementById('bg').remove();
}); 

document.querySelector("#card7").addEventListener("click", function(){
    document.querySelector("#u1").style.display="block";
    document.getElementById("u1").style.background="linear-gradient(89.82deg, #000000 10.49%, rgba(0, 0, 0, 0) 47.72%), url('resources/img/Genesis.png')";
    document.getElementById("domain_head").innerHTML="Genesis";
    document.getElementById("fac_name1").innerHTML="Test Name";
    document.getElementById('vector').remove();
    document.getElementById('bg').remove();
}); 

document.querySelector("#card8").addEventListener("click", function(){
    document.querySelector("#u1").style.display="block";
    document.getElementById("u1").style.background="linear-gradient(90.46deg, #000000 2.47%, rgba(0, 0, 0, 0) 34.22%), url('resources/img/mechanica.png')";
    document.getElementById("domain_head").innerHTML="Mechanica";
    document.getElementById("fac_name1").innerHTML="Test Name";
    document.getElementById('vector').remove();
    document.getElementById('bg').remove();
}); 

document.querySelector("#card9").addEventListener("click", function(){
    document.querySelector("#u1").style.display="block";
    document.getElementById("u1").style.background="linear-gradient(78.32deg, #000000 28.63%, rgba(0, 0, 0, 0) 47.35%), url('resources/img/karyarachna.png')";
    document.getElementById("domain_head").innerHTML="Karyarachna";
    document.getElementById("fac_name1").innerHTML="Test Name";
    document.getElementById('vector').remove();
    document.getElementById('bg').remove();
}); 
