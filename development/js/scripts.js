$(document).ready(function() {
  var menuToggle = $('#js-centered-navigation-mobile-menu').unbind();
  $('#js-centered-navigation-menu').removeClass("show");

  var menuIcon = $("#menuIcon");

  function showMenuIcon() {
    menuIcon.removeClass("close").addClass("menu");
  };

  function showCloseIcon() {
    menuIcon.removeClass("menu").addClass("close");
  };

  function toggleMenuIcon() {

    if(menuIcon.hasClass("menu")) {
      showCloseIcon();
    }
    else if(menuIcon.hasClass("close")) {
      showMenuIcon();
    }
  }

  menuToggle.on('click', function(e) {
    e.preventDefault();

    toggleMenuIcon();
    $('.centered-navigation-menu').slideToggle();

    if($('#js-centered-navigation-menu').is(':hidden')) {
      $('#js-centered-navigation-menu').removeAttr('style');
    }

  });


  if ($(window).width() <= 977) {
   $('.nav-link.more').on('click', function(e) {
    $('#js-centered-navigation-menu .nav-link').hide();
    $(this).children('.submenu').show();
    $(this).children('a').hide();
    $(this).show();
    $('#menu-head .menu-title').text($(this).children('a').text());
    $('.svg-logo').hide();
    $('#menu-back').show();
  });

   $('#menu-back').on('click', function(e) {
    $('.submenu').hide();
    $('.svg-logo').show();
    $('#js-centered-navigation-menu .nav-link').show();
    $('#js-centered-navigation-menu .nav-link a').show();
    $('.menu-title').text('');
    $('#menu-back').hide();
  });


   $('.submenu ul li a').on('click', function(e) {
    $(this).css("display", "block");
  });
 }



});

var d = $(".search-form");
$("button", d).on("click", function(e) {
  d.hasClass("active") || (e.preventDefault(), d.addClass("active").find("input[name=q]").trigger("focus").val(""),
    $(document).on("click", function(e) {
      $(e.target).closest(d).length || (d.removeClass("active"))
    }));
});

