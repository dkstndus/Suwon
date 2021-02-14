$(function(){
  // section01 main_banner_popup
  $(".main_banner .btn").click(function(){
    $(".main_banner.main_banner_popup").css('display','block');
    $(".main_banner.main_banner_popup .close_btn").click(function(){
      $(".main_banner.main_banner_popup").css('display','none');
    })
  });
  // text보여주기
  var elem = $(".more_text");
  var showText = 20;

  elem.each(function(){
    var content = $(this).html();
    var contentLeng = content.length;
    // console.log(contentLeng);
    var lessText = content.substr(0,showText);
    var changeHtml = '';
    if( showText < contentLeng ){
      changeHtml = lessText + "<span>...</span>"
      $(this).html(changeHtml);
    }
  });
  // text보여주기(section03)
  var elem01 = $(".moretext");
  var showText = 38;

  elem01.each(function(){
    var content = $(this).html();
    var contentLeng = content.length;
    // console.log(contentLeng);
    var lessText = content.substr(0,showText);
    var changeHtml = '';
    if( showText < contentLeng ){
      changeHtml = lessText + "<span class='inline_span'>...</span>"
      $(this).html(changeHtml);
    }
  });

  // 1번째 mainlist
  $(".main_nav li:nth-child(1) > a").mouseover(function(){
    $(this).addClass('active');
    $(".main_nav li:nth-child(1) > a").css('color','#0080a4');
    if($(this).hasClass('active') == true){
      $(".sub_menu.bg01").css('display','block');
      $(".sub_menu.bg01").mouseover(function(){
        $(".sub_menu.bg01").css('display','block');
        $(".main_nav li:nth-child(1) > a").css('color','#0080a4');
      }).mouseout(function(){
        $(".sub_menu.bg01").css('display','none');
        $(".main_nav li:nth-child(1) > a").css('color','#000');
      });
    }else{
      $(this).removeClass('active');
    }
  }).mouseout(function(){
    $(".main_nav li:nth-child(1) > a").css('color','#000');
    $(".sub_menu").css('display','none');
  });

  // 2번째 mainlist
  $(".main_nav li:nth-child(2) > a").mouseover(function(){
    $(this).addClass('active');
    $(".main_nav li:nth-child(2) > a").css('color','#0080a4');
    if($(this).hasClass('active') == true){
      $(".sub_menu.bg02").css('display','block');
      $(".sub_menu.bg02").mouseover(function(){
        $(".sub_menu.bg02").css('display','block');
        $(".main_nav li:nth-child(2) > a").css('color','#0080a4');
      }).mouseout(function(){
        $(".sub_menu.bg02").css('display','none');
        $(".main_nav li:nth-child(2) > a").css('color','#000');
      });
    }else{
      $(this).removeClass('active');
    }
  }).mouseout(function(){
    $(".main_nav li:nth-child(2) > a").css('color','#000');
    $(".sub_menu").css('display','none');
  });

  // 3번째 mainlist
  $(".main_nav li:nth-child(3) > a").mouseover(function(){
    $(this).addClass('active');
    $(".main_nav li:nth-child(3) > a").css('color','#0080a4');
    if($(this).hasClass('active') == true){
      $(".sub_menu.bg03").css('display','block');
      $(".sub_menu.bg03").mouseover(function(){
        $(".sub_menu.bg03").css('display','block');
        $(".main_nav li:nth-child(3) > a").css('color','#0080a4');
      }).mouseout(function(){
        $(".sub_menu.bg03").css('display','none');
        $(".main_nav li:nth-child(3) > a").css('color','#000');
      });
    }else{
      $(this).removeClass('active');
    }
  }).mouseout(function(){
    $(".main_nav li:nth-child(3) > a").css('color','#000');
    $(".sub_menu").css('display','none');
  });

  // 4번째 mainlist
  $(".main_nav li:nth-child(4) > a").mouseover(function(){
    $(this).addClass('active');
    $(".main_nav li:nth-child(4) > a").css('color','#0080a4');
    if($(this).hasClass('active') == true){
      $(".sub_menu.bg04").css('display','block');
      $(".sub_menu.bg04").mouseover(function(){
        $(".sub_menu.bg04").css('display','block');
        $(".main_nav li:nth-child(4) > a").css('color','#0080a4');
      }).mouseout(function(){
        $(".sub_menu.bg04").css('display','none');
        $(".main_nav li:nth-child(4) > a").css('color','#000');
      });
    }else{
      $(this).removeClass('active');
    }
  }).mouseout(function(){
    $(".main_nav li:nth-child(4) > a").css('color','#000');
    $(".sub_menu").css('display','none');
  });

  // 5번째 mainlist
  $(".main_nav li:nth-child(5) > a").mouseover(function(){
    $(this).addClass('active');
    $(".main_nav li:nth-child(5) > a").css('color','#0080a4');
    if($(this).hasClass('active') == true){
      $(".sub_menu.bg05").css('display','block');
      $(".sub_menu.bg05").mouseover(function(){
        $(".sub_menu.bg05").css('display','block');
        $(".main_nav li:nth-child(5) > a").css('color','#0080a4');
      }).mouseout(function(){
        $(".sub_menu.bg05").css('display','none');
        $(".main_nav li:nth-child(5) > a").css('color','#000');
      });
    }else{
      $(this).removeClass('active');
    }
  }).mouseout(function(){
    $(".main_nav li:nth-child(5) > a").css('color','#000');
    $(".sub_menu").css('display','none');
  });

  // 6번째 mainlist
  $(".main_nav li:nth-child(6) > a").mouseover(function(){
    $(this).addClass('active');
    $(".main_nav li:nth-child(6) > a").css('color','#0080a4');
    if($(this).hasClass('active') == true){
      $(".sub_menu.bg06").css('display','block');
      $(".sub_menu.bg06").mouseover(function(){
        $(".sub_menu.bg06").css('display','block');
        $(".main_nav li:nth-child(6) > a").css('color','#0080a4');
      }).mouseout(function(){
        $(".sub_menu.bg06").css('display','none');
        $(".main_nav li:nth-child(6) > a").css('color','#000');
      });
    }else{
      $(this).removeClass('active');
    }
  }).mouseout(function(){
    $(".main_nav li:nth-child(6) > a").css('color','#000');
    $(".sub_menu").css('display','none');
  });


});
