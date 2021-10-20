$('.animatedEx').addClass('animatedEx');

$(window).scroll(function () {
    var scrollVal = $(this).scrollTop();
    console.log(scrollVal);

    if (scrollVal >= 500) {
        $('.animatedEx').addClass('myFadeinX');
        setTimeout(function () {
            $('.animatedExfif').addClass('myFadeinX');
        }, 1000);
        // console.log('ok');
    }
    if (scrollVal >= 1300) {
        $('#ninRone').addClass('myFadein');
        // console.log('ok');
    }
    if (scrollVal >= 1600) {
        $('#ninRtwo').addClass('myFadein');
        // console.log('ok');
    }
    if (scrollVal >= 1900) {
        $('#ninRthree').addClass('myFadein');
        // console.log('ok');
    }
    if (scrollVal >= 2300) {
        $('#viewGeological').addClass('myFadeinX');
        setTimeout(function () {
            $('#viewAnimalsExp').addClass('myFadeinX');
        }, 700);
        setTimeout(function () {
            $('#viewAnimalsBtn').addClass('myFadeinX');
        }, 1000);
        // console.log('ok');
    }
    if (scrollVal >= 2700) {
        $('#viewAnimals').addClass('myFadeinX');
        setTimeout(function () {
            $('#viewAnimalsExpt').addClass('myFadeinX');
        }, 700);
        setTimeout(function () {
            $('#viewAnimalsBtntwo').addClass('myFadeinX');
        }, 1000);
        // console.log('ok');
    }
})

$('#travelBtn').click(function() {
    $('html,body').animate({ scrollTop: $(".mainEx").offset().top - 40 }, 650)
});
$('#trafficBtn').click(function() {
    $('html,body').animate({ scrollTop: $("#ninRone").offset().top - 40 }, 650)
});
$('#livingBtn').click(function() {
    $('html,body').animate({ scrollTop: $("#trafficEx").offset().top - 8 }, 650)
});
$('.fontShow').click(function() {
    $('html,body').animate({ scrollTop: $(".mainEx").offset().top - 40 }, 650)
});