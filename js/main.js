$(function(){
    $('.formens').on('click',function(){
        $('#formens-modal').fadeIn();
        $('.modal-bg').fadeIn();
        return false;
    });
    $('.always').on('click',function(){
        $('#always-modal').fadeIn();
        $('.modal-bg').fadeIn();
        return false;
    });
    $('.flower').on('click',function(){
        $('#flower-modal').fadeIn();
        $('.modal-bg').fadeIn();
        return false;
    });
    $('.list').on('click',function(){
        $('#list-modal').fadeIn();
        $('.modal-bg').fadeIn();
        return false;
    });
    $('.inter').on('click',function(){
        $('#inter-modal').fadeIn();
        $('.modal-bg').fadeIn();
        return false;
    });
});

$(function(){
    $('#formens-modal > a').on('click',function(){
        $('#formens-modal').fadeOut();
        $('.modal-bg').fadeOut();
        return false;
    });
    $('#always-modal > a ').on('click',function(){
        $('#always-modal').fadeOut();
        $('.modal-bg').fadeOut();
        return false;
    });
    $('#flower-modal > a ').on('click',function(){
        $('#flower-modal').fadeOut();
        $('.modal-bg').fadeOut();
        return false;
    });
    $('#list-modal > a ').on('click',function(){
        $('#list-modal').fadeOut();
        $('.modal-bg').fadeOut();
        return false;
    });
    $('#inter-modal > a ').on('click',function(){
        $('#inter-modal').fadeOut();
        $('.modal-bg').fadeOut();
        return false;
    });
});

$(function(){
    $(window).scroll(function (){
        $('.fadeIn').each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 200){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
            }
        });
    });
});

$(function(){
    $('.humbarger-btn').on('click',function(){
        $(this).toggleClass('open');
        $('.humbarger-menu').toggleClass('active');
        $('.humbarger-bg').fadeToggle();

        if($('button').hasClass('open')){
            $('.bar').css('background-color','rgb(151, 150, 150)');
            $('.close').css('color','rgb(151, 150, 150)');
        }else{
            $('.bar').css('background-color','#fff');
            $('.close').css('color','#fff');
        }
    })
})

$(function(){
    $(window).scroll(function(){
        var top = $(".profile-h2").offset().top; // ターゲットの位置取得
        var position = top - $(window).height();  // 発火させたい位置
        var position_bottom = top + $('.profile-h2').height();
        if($(window).scrollTop() > position && $(window).scrollTop() < position_bottom){
            $('.profile-h2').css('color','#8a0606');
            $('.nav-profile a').css('color','#8a0606');
        }else{
            $('.profile-h2').css('color','black');
            $('.nav-profile a').css('color','black');
        }
      })
})
$(function(){
    $(window).scroll(function(){
        var top = $(".works-h2").offset().top; // ターゲットの位置取得
        var position = top - $(window).height();  // 発火させたい位置
        var position_bottom = top + $('.works-h2').height();
        if($(window).scrollTop() > position && $(window).scrollTop() < position_bottom){
            $('.works-h2').css('color','#6d0606');
            $('.nav-works a').css('color','#8a0606');
        }else{
            $('.works-h2').css('color','black');
            $('.nav-works a').css('color','black');
        }
      })
})
$(function(){
    $(window).scroll(function(){
        var top = $(".skills-h2").offset().top; // ターゲットの位置取得
        var position = top - $(window).height();  // 発火させたい位置
        var position_bottom = top + $('.skills-h2').height();
        if($(window).scrollTop() > position && $(window).scrollTop() < position_bottom){
            $('.skills-h2').css('color','#8a0606');
            $('.nav-skills a').css('color','#8a0606');
        }else{
            $('.skills-h2').css('color','black');
            $('.nav-skills a').css('color','black');
        }
      })
})
$(function(){
    $(window).scroll(function(){
        var top = $(".cando-h2").offset().top; // ターゲットの位置取得
        var position = top - $(window).height();  // 発火させたい位置
        var position_bottom = top + $('.cando-h2').height();
        if($(window).scrollTop() > position && $(window).scrollTop() < position_bottom){
            $('.cando-h2').css('color','#8a0606');
            $('.nav-cando a').css('color','#8a0606');
        }else{
            $('.cando-h2').css('color','black');
            $('.nav-cando a').css('color','black');
        }
      })
})
$(function(){
    $(window).scroll(function(){
        var top = $(".contact-h2").offset().top; // ターゲットの位置取得
        var position = top - $(window).height();  // 発火させたい位置
        var position_bottom = top + $('.contact-h2').height();
        if($(window).scrollTop() > position && $(window).scrollTop() < position_bottom){
            $('.contact-h2').css('color','#8a0606');
            $('.nav-contact a').css('color','#8a0606');
        }else{
            $('.contact-h2').css('color','black');
            $('.nav-contact a').css('color','black');
        }
      })
})
