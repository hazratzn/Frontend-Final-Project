// $(function(){

//     $(document).ready(function(){
	
//         $('ul.tabs li').click(function(){
//             var tab_id = $(this).attr('data-tab');
    
//             $('ul.tabs li').removeClass('current');
//             $('.tab-content').removeClass('current');
    
//             $(this).addClass('current');
//             $("#"+tab_id).addClass('current');
//         })
    
//     })

    
// })

$('.first-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
var clock = $('.clock').FlipClock({
    clockFace: 'DailyCounter',
    autoStart: false,
    callbacks: {
      stop: function() {
        $('.message').html('The clock has stopped!')
      }
    }
    
});
// set time
clock.setTime(220880);

// countdown mode
clock.setCountdown(true);

// start the clock
clock.start();
//card-carousel
$('.last-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})




// function openCity(evt, cityName) {
//     var i,tabcontent,tablinks;
//     tabcontent =document.getElementsByClassName("tabcontent");
//     for (i=0; i<tabcontent.length; i++) {
//         tabcontent[i].style.display = "none";
//     }
//     tablinks = document.getElementsByClassName("tablinks");
//     for (let i = 0; i < tab-links.length; i++) {
//         tablinks[i].className=tablinks[i].className.replace(".active"," ") ;   
//         tablinks[i].style.color = "black";
//     }
//     document.getElementById(cityName).style.display="block";
//     evt.curreentTarget.className += "active";
    
// }
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

