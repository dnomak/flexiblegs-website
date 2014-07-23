$(document).ready(function() {

  function getUrlVars(){
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
    hash = hashes[i].split('=');
    vars.push(hash[0]);
    vars[hash[0]] = hash[1];
    }
    return vars;
  }
  var url = getUrlVars()["url"];
  var col = getUrlVars()["col"];

  if(url == null) {
      url = "example.html"
  }
  else {
    $('.url input').val(url)
    $("html, body").delay(1000).animate({scrollTop: $('.color-circle').offset().top }, 2000);
  }

  if(col == null) {
      col = "xl"
  }
  else {
    $('.url input').val(url)
    $("html, body").delay(1000).animate({scrollTop: $('.color-circle').offset().top }, 2000);
  }

  iframe = "<div class='row text-center'><iframe src='"+ url +"' class='example' frameborder='0'></iframe></div>";
  $('.macbook-big').html(iframe);

  var xlcircle = function() {
    col = "xl"

    $('.xl-circle').addClass('active');
    $('.lg-circle').removeClass('active');
    $('.md-circle').removeClass('active');
    $('.sm-circle').removeClass('active');
    $('.xs-circle').removeClass('active');

    $('.macbook-big').addClass('animated tada');
    $('.macbook-big').css( "display", "block" );
    $('.macbook-big').html(iframe);

    $('.ipad-landscape-big').css( "display", "none" );
    $('.ipad-portrait-big').css( "display", "none" );
    $('.iphone-landscape-big').css( "display", "none" );
    $('.iphone-portrait-big').css( "display", "none" );
  };

  var lgcircle = function() {
    col = "lg"

    $('.xl-circle').removeClass('active');
    $('.lg-circle').addClass('active');
    $('.md-circle').removeClass('active');
    $('.sm-circle').removeClass('active');
    $('.xs-circle').removeClass('active');

    $('.ipad-landscape-big').addClass('animated tada');
    $('.ipad-landscape-big').css( "display", "block" );
    $('.ipad-landscape-big').html(iframe);

    $('.macbook-big').css( "display", "none" );
    $('.ipad-portrait-big').css( "display", "none" );
    $('.iphone-landscape-big').css( "display", "none" );
    $('.iphone-portrait-big').css( "display", "none" );
  };

  var mdcircle = function() {
    col = "md"

    $('.xl-circle').removeClass('active');
    $('.lg-circle').removeClass('active');
    $('.md-circle').addClass('active');
    $('.sm-circle').removeClass('active');
    $('.xs-circle').removeClass('active');

    $('.ipad-portrait-big').addClass('animated tada');
    $('.ipad-portrait-big').css( "display", "block" );
    $('.ipad-portrait-big').html(iframe);

    $('.macbook-big').css( "display", "none" );
    $('.ipad-landscape-big').css( "display", "none" );
    $('.iphone-landscape-big').css( "display", "none" );
    $('.iphone-portrait-big').css( "display", "none" );
  };

  var smcircle = function() {
    col = "sm"

    $('.xl-circle').removeClass('active');
    $('.lg-circle').removeClass('active');
    $('.md-circle').removeClass('active');
    $('.sm-circle').addClass('active');
    $('.xs-circle').removeClass('active');

    $('.iphone-landscape-big').addClass('animated tada');
    $('.iphone-landscape-big').css( "display", "block" );
    $('.iphone-landscape-big').html(iframe);

    $('.macbook-big').css( "display", "none" );
    $('.ipad-landscape-big').css( "display", "none" );
    $('.ipad-portrait-big').css( "display", "none" );
    $('.iphone-portrait-big').css( "display", "none" );
  };

  var xscircle = function() {
    col = "xs"

    $('.xl-circle').removeClass('active');
    $('.lg-circle').removeClass('active');
    $('.md-circle').removeClass('active');
    $('.sm-circle').removeClass('active');
    $('.xs-circle').addClass('active');

    $('.iphone-portrait-big').addClass('animated tada');
    $('.iphone-portrait-big').css( "display", "block" );
    $('.iphone-portrait-big').html(iframe);

    $('.macbook-big').css( "display", "none" );
    $('.ipad-landscape-big').css( "display", "none" );
    $('.ipad-portrait-big').css( "display", "none" );
    $('.iphone-landscape-big').css( "display", "none" );
  };

  if(col == "xl") {
    xlcircle()
  }
  if (col == "lg"){
    lgcircle()
  }
  if (col == "md"){
    mdcircle()
  }
  if (col == "sm"){
    smcircle()
  }
  if (col == "xs"){
    xscircle()
  }

  $(".url input").keyup(function(event){
    if(event.keyCode == 13){
      $(".refresh").click();
    }
  });

  $( ".home" ).click(function() {
    window.location="?url=example.html&col="+ col +"";
  });
  $( ".refresh" ).click(function() {
    url = $('.url input').val()
    window.location="?url="+ url +"&col="+ col +"";
  });

  $( ".xl-circle" ).click(function() {
    xlcircle()
    $("html, body").delay(0).animate({scrollTop: $('.color-circle').offset().top }, 500);
  });

  $( ".lg-circle" ).click(function() {
    lgcircle()
    $("html, body").delay(0).animate({scrollTop: $('.color-circle').offset().top }, 500);
  });

  $( ".md-circle" ).click(function() {
    mdcircle()
    $("html, body").delay(0).animate({scrollTop: $('.color-circle').offset().top }, 500);
  });

  $( ".sm-circle" ).click(function() {
    smcircle()
    $("html, body").delay(0).animate({scrollTop: $('.color-circle').offset().top }, 500);
  });

  $( ".xs-circle" ).click(function() {
    xscircle()
    $("html, body").delay(0).animate({scrollTop: $('.color-circle').offset().top }, 500);
  });

});