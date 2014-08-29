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

var scrolltop = function() {
  $('.url input').val(url)
  $("html, body").delay(1000).animate({scrollTop: $('.color-circle').offset().top }, 2000);
};

if(url == null) {
    url = "example.html"
}
else {
  scrolltop()
}
if(col == null) {
    col = "xl"
}
else {
  scrolltop()
}

iframe = "<div class='row text-center'><iframe src='"+ url +"' class='example' frameborder='0'></iframe></div>";
$('.macbook-big').html(iframe);

var xlcircle = function() {
  col = "xl"

  $('.xlstyle-circle').addClass('active');
  $('.lgstyle-circle').removeClass('active');
  $('.mdstyle-circle').removeClass('active');
  $('.smstyle-circle').removeClass('active');
  $('.xsstyle-circle').removeClass('active');

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

  $('.xlstyle-circle').removeClass('active');
  $('.lgstyle-circle').addClass('active');
  $('.mdstyle-circle').removeClass('active');
  $('.smstyle-circle').removeClass('active');
  $('.xsstyle-circle').removeClass('active');

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

  $('.xlstyle-circle').removeClass('active');
  $('.lgstyle-circle').removeClass('active');
  $('.mdstyle-circle').addClass('active');
  $('.smstyle-circle').removeClass('active');
  $('.xsstyle-circle').removeClass('active');

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

  $('.xlstyle-circle').removeClass('active');
  $('.lgstyle-circle').removeClass('active');
  $('.mdstyle-circle').removeClass('active');
  $('.smstyle-circle').addClass('active');
  $('.xsstyle-circle').removeClass('active');

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

  $('.xlstyle-circle').removeClass('active');
  $('.lgstyle-circle').removeClass('active');
  $('.mdstyle-circle').removeClass('active');
  $('.smstyle-circle').removeClass('active');
  $('.xsstyle-circle').addClass('active');

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

$( ".xlstyle-circle" ).click(function() {
  xlcircle()
  $("html, body").delay(0).animate({scrollTop: $('.color-circle').offset().top }, 500);
});

$( ".lgstyle-circle" ).click(function() {
  lgcircle()
  $("html, body").delay(0).animate({scrollTop: $('.color-circle').offset().top }, 500);
});

$( ".mdstyle-circle" ).click(function() {
  mdcircle()
  $("html, body").delay(0).animate({scrollTop: $('.color-circle').offset().top }, 500);
});

$( ".smstyle-circle" ).click(function() {
  smcircle()
  $("html, body").delay(0).animate({scrollTop: $('.color-circle').offset().top }, 500);
});

$( ".xsstyle-circle" ).click(function() {
  xscircle()
  $("html, body").delay(0).animate({scrollTop: $('.color-circle').offset().top }, 500);
});

// $( ".navicon" ).click(function() {
  // $("#menu").css("display", "block");
// });