$(document).ready(function() { 
    $(window).scroll(function() {
        let height = $(window).scrollTop();
        if(height > 50){
            $('.header__top').slideUp("slow");
            $('.header__body').css('height', '50px');
            $('.user-ul').addClass('deactive');
        } else{
            $('.user-ul').removeClass('deactive');
            $('.header__top').slideDown('slow');
            $('.header__body').css('height', '80px')    
        }  
    });
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__desktop').toggleClass('active');
        $('body').toggleClass('lock');
    })
})