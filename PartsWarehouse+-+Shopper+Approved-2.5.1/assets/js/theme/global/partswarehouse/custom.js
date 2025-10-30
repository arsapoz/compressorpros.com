// WAIT FUNCTION FOR ELEMENT TO POPULATE
function waitForElement(elementPath, callBack){
  window.setTimeout(function(){
    if($(elementPath).length){
      callBack(elementPath, $(elementPath));
    }else{
      waitForElement(elementPath, callBack);
    }
  },250)
}

// <!-- GET CURRENT YEAR FOR COPYRIGHT -->
if ($("#copyright_year")[0]) {
document.getElementById("copyright_year").innerHTML = new Date().getFullYear();
}

// <!-- CUSTOM SIDECATEGORY MENU -->
$('.navPages-action.has-subMenu').each(function() {
$('<span class="down-arrow"><i class="fa fa-chevron-down" aria-hidden="true"><svg><use xlink:href="#icon-dropdown" /></svg></i></span></span>').insertAfter(this);
});

$( "span.down-arrow" ).on ('click', function() {
$(this).closest('li').toggleClass('active');
$(this).next('div.navPage-subMenu').toggleClass('sub-category-visible').slideToggle();
$('<div class="clear"></div>').insertAfter('.Left #SideCategoryList .sf-menu ul li ul');
var parentItem = $(this).closest('.navPages-item');
parentItem.find('.navPage-subMenu').removeClass('is-third-level');
parentItem.find('.navPage-subMenu').eq(1).addClass('is-third-level');
if ( $(this).closest('li.navPages-item').hasClass('active') ) {
    $(this).html('<i class="fa fa-chevron-up" aria-hidden="true"><svg><use xlink:href="#icon-dropdown" /></svg></i></span>');
} else ( $(this).html('<i class="fa fa-chevron-down" aria-hidden="true"><svg><use xlink:href="#icon-dropdown" /></svg></i></span>') );
});

$(document).ready(function($){
$("span.down-arrow").on ('click', function() {
$(this).prev('a').toggleClass('active');

if ( $(this).prev('a').hasClass('active') ) {
    $(this).html('<i class="fa fa-chevron-up" aria-hidden="true"><svg><use xlink:href="#icon-dropdown" /></svg></i></span>');
} else ( $(this).html('<i class="fa fa-chevron-down" aria-hidden="true"><svg><use xlink:href="#icon-dropdown" /></svg></i></span>') );
});
});

$('#menu .navPage-subMenu li a i').on ('click', function(event) {
event.preventDefault();
$(this).next('ul#navPages-').toggleClass('sub-category-visible').slideToggle();
});


$( ".navPage-subMenu span.down-arrow" ).on ('click', function() {
$(this).closest('li').toggleClass('active');
$(this).next('ul.navPage-childList').toggleClass('sub-category-visible').slideToggle();
$('<div class="clear"></div>').insertAfter('.Left #SideCategoryList .sf-menu ul li ul');

if ( $(this).next('ul.navPage-childList').hasClass('sub-category-visible') ) {
    $(this).html('<i class="fa fa-chevron-up" aria-hidden="true"><svg><use xlink:href="#icon-dropdown" /></svg></i></span>');
} else ( $(this).html('<i class="fa fa-chevron-down" aria-hidden="true"><svg><use xlink:href="#icon-dropdown" /></svg></i></span>') );

});


$(window).scroll(function() {
    if ($(this).scrollTop() > 100 ) {
        $('.backtoTop').addClass("visible");
    } else {
        $('.backtoTop').removeClass("visible");
    }
});

$('.backtoTop').click(function(){
$("html, body").animate({ scrollTop: 0 }, 600);
return false;
});



$(document).ready(function () {
  function handleResize() {
      var windowWidth = $(window).width();
      $('.custom-pages-nav li a.navPages-action.has-subMenu').off('mouseenter mouseleave');

      if (windowWidth > 800) {
          $('.custom-pages-nav li a.navPages-action.has-subMenu').hover(
              function () {
                  $(this).siblings('div#menu .navPage-subMenu').stop(true, true).show();
                  $(this).addClass('active');
              },
              function () {
                  $(this).siblings('div#menu .navPage-subMenu').stop(true, true).hide();
                  $(this).removeClass('active');
              }
          );
      }
  }
  $(window).on('resize', handleResize);
  $(window).trigger('resize');
});


$( document ).ready(function() {
$('.slider').hover(
    function() {
        $(this).addClass('active');
    },
    function() {
        $(this).removeClass('active');
    }
);
});

$('.navPages-quickSearch input').change(function() {
$('section.quickSearchResults').toggleClass("hide");
});

$(document).ready(function($){

$("main.page.blog .blog-post .excerpt").each(function(){
        if ($(this).text().length > 0) {
            $(this).text($(this).text().substr(0, 125));
            $(this).append('...');
            $(this).addClass('visible');
        }
    });
});

$(document).ready(function($){
$("main.page.blog h2.blog-title a").each(function(){
    $("main.page.blog h2.blog-title a").html().toLowerCase();
        if ($(this).text().length > 19) {
            $(this).text($(this).text().substr(0, 19));
            $(this).append('...');
        }
        $(this).addClass('visible');
    });
});

$(document).ready(function($){
    $('main.page.blog .blog-post-body').addClass('visible');
});

// <!-- LOGO / SEARCHBAR ALIGNMENT -->
$(document).ready(function($){
if($('.header-logo').hasClass('header-logo--left')) {
$('.right.searchbar').addClass('right');
$('.navPages-container.inside-header.left-logo').addClass('visible');
};

if($('.header-logo').hasClass('header-logo--center')) {
$('.right.searchbar').addClass('center');
$('.navPages-container.inside-header.center-logo').addClass('visible');
};


});

$(window).scroll(function(){
if($(window).innerWidth() <= 800) {
if($(this).scrollTop() > 25) $('div#menu.mobile-menu .currency-converter').addClass('scrolled-down');
if($(this).scrollTop() < 25) $('div#menu.mobile-menu .currency-converter').removeClass('scrolled-down');
}
});

$(document).ready(function() {
  function updateStickyHeader() {
      if($(window).innerWidth() > 800) {
          $(window).on('scroll', function() {
              if ($(this).scrollTop() > 50) {
                $('.header-container.sticky-header .dsk-search-bar.search-container').removeClass('not-sticky').addClass('sticky').insertBefore('.right-top-banner .account-links');
              } else {
                $('.header-container.sticky-header .dsk-search-bar.search-container').removeClass('sticky').addClass('not-sticky').insertAfter('.mbl-srch-icon');
              }
          });
      } else {
         $('.header-container.sticky-header .search-container').removeClass('sticky').addClass('not-sticky');
      }
  }
  updateStickyHeader();
  $(window).resize(function() {
      updateStickyHeader();
  });
});


$(window).scroll(function(){
var notStickyFigureWidth = $('.mbl-srchbar.center-logo.search-container.not-sticky section#quickSearch.quickSearchResults figure.card-figure').width();
var notStickyQuickSearchFigureWidth = '100%';
var stickyFigureWidth = $('.mbl-srchbar.center-logo.search-container.sticky section#quickSearch.quickSearchResults figure.card-figure').width();
var stickyQuickSearchArticleWidth = $('.mbl-srchbar.center-logo.search-container.sticky section#quickSearch.quickSearchResults article.card').width();
var stickyQuickSearchArticleHeight = $('.mbl-srchbar.center-logo.search-container.sticky section#quickSearch.quickSearchResults article.card').height();
var stickyQuickSearchFigureWidth = $('.mbl-srchbar.center-logo.search-container.sticky section#quickSearch .productGrid[data-list-name="Quick Search Results"] article.card .card-body').height();
var stickyQuickSearchFigureWidthcenter = $('.mbl-srchbar.center-logo.search-container.sticky section#quickSearch .productGrid[data-list-name="Quick Search Results"] article.card .card-body').height();

var searchFieldWidth = $('header.header').width();
searchFieldWidth = (searchFieldWidth * .6);

// CENTER SEARCH RESULTS FOR STICKY NAV
var quickSearchResultsWidth = $('.mbl-srchbar.search-container.sticky section.quickSearchResults').width();
var quickSearchInputWidth = $('.header-container.sticky-header .mbl-srchbar.search-container.sticky .right.searchbar').width();
var searchWidthDifference = (quickSearchResultsWidth - quickSearchInputWidth);
var searchOffset = (searchWidthDifference / 2);
var resetOffset = 0;
if($(this).scrollTop() > 50) $('.header-container.sticky-header .mbl-srchbar.search-container.sticky section.quickSearchResults').css('right', -Math.abs(searchOffset)+"px");
if($(this).scrollTop() > 50) $('.header-container.sticky-header .mbl-srchbar.search-container.sticky a.modal-close.custom-quick-search').css('right', -Math.abs(searchOffset)+"px");
if($(this).scrollTop() < 50) $('.header-container .mbl-srchbar.search-container section.quickSearchResults').css('right', -Math.abs(resetOffset)+"px");
if($(this).scrollTop() < 50) $('.header-container .mbl-srchbar.search-container a.modal-close.custom-quick-search').css('right', -Math.abs(resetOffset)+"px");


// STICKY NAV SEARCH - CENTERED LOGO
if($(this).scrollTop() < 50) $('.header-container.sticky-header .mbl-srchbar.center-logo.search-container.not-sticky section#quickSearch.quickSearchResults figure.card-figure img').attr('style', 'max-height:' +notStickyFigureWidth+ 'px');
if($(this).scrollTop() < 50) $('.header-container.sticky-header .mbl-srchbar.center-logo.search-container.not-sticky section#quickSearch.quickSearchResults figure.card-figure').css({
  'height': (notStickyFigureWidth) + 'px'
});
if($(this).scrollTop() < 50) $('.header-container.sticky-header .mbl-srchbar.center-logo.search-container.not-sticky section#quickSearch.quickSearchResults figure.card-figure').attr('style', 'width:' +notStickyQuickSearchFigureWidth+ '!important');
if($(this).scrollTop() < 50) $('.header-container.sticky-header .mbl-srchbar.center-logo.search-container.not-sticky section#quickSearch.quickSearchResults .productGrid .product').css("opacity", "1");
if($(this).scrollTop() > 50) $('.header-container.sticky-header .mbl-srchbar.center-logo.search-container.sticky section#quickSearch.quickSearchResults').css({
  'width': (searchFieldWidth) + 'px'
});
// CUSTOM - SET CARD WIDTH TO EQUAL ARTICLE WIDTH MINUS FIGURE WIDTH
if($(this).scrollTop() > 50) $('.header-container.sticky-header .mbl-srchbar.center-logo.search-container.sticky section#quickSearch .productGrid[data-list-name="Quick Search Results"] article.card .card-body').css({
  'width': (stickyQuickSearchArticleWidth-stickyQuickSearchFigureWidthcenter) + 'px'
});
if($(this).scrollTop() > 50) $('.header-container.sticky-header .mbl-srchbar.center-logo.search-container.sticky section#quickSearch.quickSearchResults figure.card-figure img').attr('style', 'max-height:' +stickyQuickSearchFigureWidthcenter+ 'px');
if($(this).scrollTop() > 50) $('.header-container.sticky-header .mbl-srchbar.center-logo.search-container.sticky section#quickSearch.quickSearchResults figure.card-figure').attr('style', 'width:' + stickyQuickSearchFigureWidthcenter + 'px !important');


// CUSTOM - SET CARD WIDTH TO EQUAL ARTICLE WIDTH MINUS FIGURE WIDTH

});

$(document).click(function(event) {
if ( !$(event.target).hasClass('div.currency-converter')) {
     $("div.currency-converter .navPage-subMenu").hide();
     event.stopPropagation();
}
});

$("div.currency-converter li a.navPages-action.has-subMenu").click(function(e){
e.preventDefault();
$('div.currency-converter .navPage-subMenu').toggle();
$('.navPages-action-moreIcon').toggleClass('dwn-arrow');
e.stopPropagation();
});

// <!-- HIDE SUBCATEGORY IMAGES IF CATEGORY IMAGE IS NOT SET-->
$(document).ready(function(){
if($('.subcategory-image.uploaded').length) {
$("li.subcategory-item .subcategory-image").fadeIn();
}
});

// <!-- HIDE COMPARE BUTTON IF PRODUCT COMPARISONS ARE DISABLED -->
$(document).ready(function(){
if (!$('article.card').hasClass('compare-disabled')) {
$('.compare').fadeIn();
}
if ($('main#product-listing-container:contains("There are no products listed under this category.")').length > 0) {
$('.compare').hide();
}
});
// <!-- HIDE COMPARE BUTTON IF ONE PRODUCT OR LESS -->
$(window).on("load", function(){
if ($('#product-listing-container ul.productGrid li.product').length <= 1) {
$('.compare').hide();
}
});
$(window).on("load", function(){
if ($('#product-listing-container ul.productList li.product').length <= 1) {
$('.compare').hide();
}
});

// ADD PRICES-HIDDEN CLASS IF LOGIN REQUIRED
$(document).ready(function(){
$("article.card .card-text .price-visibility.restricted").each(function(){
if ($(this).text().trim().length) {
    $(this).addClass("price-hidden");
    $(this).closest('div.card-body').addClass("prices-hidden");
}
});
});

$(window).on("load", function(){
$('.subcategory-grid').fadeIn();
$('.productGrid').fadeIn();
});

if($(window).innerWidth() <= 480) {
$(document).ready(function() {
$('.shop-by-price').appendTo('.sideCategoryList.mobile');
});
}

$(window).on("load", function(){
if ($('.subcategory-image').hasClass('uploaded')) {
$('li.subcategory-item').addClass('hasImage');
}
});

$( "a.navPage-subMenu-action.navPages-action.navPages-action-depth-max.has-subMenu" ).on ('click', function() {
window.location = this.href;
});
// <!-- HIDE PRELOADER AFTER FIRST SESSION, RESETS IN 24 HOURS -->

  $(document).ready(function($) {
      if ($.cookie('popupShownOnceAlready')) {
      }
      else {
        // and now we create 1 day cookie
          $.cookie('popupShownOnceAlready', true, {path: '/', expire: 1});
          var $myDiv = $('.home');
              if ( $myDiv.length){
                var id = '#dialog';
                var maskHeight = $(document).height();
                var maskWidth = $(window).width();
                $('#mask').css({'width':maskWidth,'height':maskHeight});
                $('#mask').fadeIn(500);
                $('#mask').fadeTo("slow",0.9);
                var winH = $(window).height();
                var winW = $(window).width();
                      $(id).css('top',  winH/2-$(id).height()/2);
                $(id).css('left', winW/2-$(id).width()/2-35);
                   $(id).fadeIn(2000);
                   $('.window .close').click(function (e) {
                e.preventDefault();
                $('#mask').hide();
                $('.window').hide();
                   });
                   $('#mask').click(function () {
                $(this).hide();
                $('.window').hide();
               });
              }
      }
      $(window).on("unload", function(e) {
        deleteCookie('popupShownOnceAlready');
      });
  });

// <!-- GRID/LIST VIEW TOGGLE -->
  jQuery( "a.toggle-link" ).click(function( event ) {
      event.preventDefault();
  });

$(document).ready(function(){
    jQuery('a.toggle-link').on("click", function(){
      jQuery('a.toggle-link').not(this).removeClass('active');
        jQuery(this).addClass('active');
          if ( jQuery("a.toggle-link.grid").hasClass("active") ) {
              jQuery("ul.productGrid").addClass('visible');
              jQuery(".list-default").addClass('hidden');
          } else {
            jQuery("ul.productGrid").removeClass('visible');
            jQuery(".list-default").removeClass('hidden');
          }
          if ( jQuery("a.toggle-link.list").hasClass("active") ) {
              jQuery("ul.productList").addClass('visible');
              jQuery(".grid-default").addClass('hidden');
          } else {
            jQuery("ul.productList").removeClass('visible');
            jQuery(".grid-default").removeClass('hidden');
          }
        });
      });

// <!-- HIDE GRID/LIST TOGGLE ONCLICK -->
$(document).ready(function($){
$("a.navBar-action").on ('click', function() {
$('.grid-list-view.toggle').hide();
$('form.actionBar').hide();
});

$("li.navBar-item.products a.navBar-action").on ('click', function() {
$('.grid-list-view.toggle').show();
$('form.actionBar').show();
});
});

// <!-- HIDE GRID/LIST IF NO PRODUCTS ON PAGE -->
if($('li.product').length === 0){
$('.grid-list-view.toggle').hide();
$('form.actionBar').hide();
}

// <!-- REPOSITION CART LINK IF HAS COUNTPILL -->
if ( $('.countPill').hasClass('countPill--positive') ){
$('.top-menu .right').addClass('shift-right');
}

$( "div#mobile-menu li a" ).hover(function() {
event.preventDefault();
});

// <!-- HIDE CAROUSEL NAV DOTS IF ONLY ONE SLIDE -->
$(window).on("load", function(){
if(!$('.slick-arrow').length){
$('.heroCarousel .slick-dots').hide();
}
});

// <!-- FIX FOR MOBILE ANDROID DROPDOWNS -->
$(document).ready(function(){
    $("select.form-select").addClass("needsclick");
});

// <!-- GET CURRENT CATEGORY AND ACTIVATE IN SIDENAV -->
$(document).ready( function() {
$('.container.main div#side-categories a.activePage').parents('.navPages-item').find('.topLevel').next('span.down-arrow').trigger("click");
$('.container.main div#side-categories a.activePage').next('span.down-arrow').trigger("click");
});


$(document).ready(function(){
$(".page.blog .blog-title a").text(function(index, currentText) {
var maxLength = $(this).attr('data-maxlength');
if(currentText.length >= maxLength) {
  return currentText.substr(0, maxLength) + "...";
} else {
  return currentText
}
});
});

$(document).ready(function(){
$(".page.blog .blog-date, .page.blog .blog-author").text(function(index, currentText) {
var maxLength = $(this).attr('data-maxlength');
if(currentText.length >= maxLength) {
  return currentText.substr(0, maxLength) + "...";
} else {
  return currentText
}
});
});

$(document).ready(function(){
waitForElement("#carousel-active img",function(){
$('#carousel-active .slick-slider').fadeIn();
});
});


// CUSTOM - SET FIGURE WIDTH TO EQUAL FIGURE HEIGHT TO KEEP FIGURE SQAURE
// HOME PAGE PRODUCTS
$(window).on("load", function(){
var homeFigureWidth = $('#showcase-products ul.productGrid figure.card-figure').width();
// SHOWCASE PRODUCTS
$('#showcase-products ul.productGrid figure.card-figure').attr('style', 'min-height:' +homeFigureWidth+ 'px !important');
$('#showcase-products ul.productGrid figure.card-figure a.image-link').attr('style', 'min-height:' +homeFigureWidth+ 'px !important');
$('#showcase-products ul.productGrid figure.card-figure img').attr('style', 'max-height:' +homeFigureWidth+ 'px !important');
$('#showcase-products ul.productGrid figure.card-figure img').css("max-width", +homeFigureWidth+"px");
});
// CATEGORY, BRAND, SEARCH PAGE PRODUCTS GRID VIEW
$(window).on("load", function(){
var baseFigureWidth = $('#body.base-layout main.page-content ul.productGrid figure.card-figure').width();
$('#body.base-layout main.page-content ul.productGrid figure.card-figure').attr('style', 'min-height:' +baseFigureWidth+ 'px !important');
$('#body.base-layout main.page-content ul.productGrid figure.card-figure a.image-link').attr('style', 'min-height:' +baseFigureWidth+ 'px !important');
$('#body.base-layout main.page-content ul.productGrid figure.card-figure img').attr('style', 'max-height:' +baseFigureWidth+ 'px !important');
$('#body.base-layout main.page-content ul.productGrid figure.card-figure img').css("max-width", +baseFigureWidth+"px");
});

// CATEGORY, BRAND, SEARCH PAGE PRODUCTS LIST VIEW
// CUSTOM - SET CARD WIDTH TO EQUAL ARTICLE WIDTH MINUS FIGURE WIDTH
$(window).on("load", function(){
$('#body.base-layout main.page-content form.both-grid-default ul.productList').css("opacity", "0");
$('#body.base-layout main.page-content form.both-list-default ul.productGrid').css("opacity", "0");
setTimeout(function(){
var listFigureWidth = $('#body.base-layout main.page-content ul.productList .listItem-body').height();
var articleWidth = $('#body.base-layout main.page-content ul.productList article.listItem').width();
var fit = '100%';
$('#body.base-layout main.page-content ul.productList article.listItem .listItem-body').attr('style', 'width:' +(fit)+ '!important');
// CUSTOM - SET FIGURE WIDTH TO EQUAL FIGURE HEIGHT TO KEEP FIGURE SQAURE
var figureWidth = $('#body.base-layout main.page-content ul.productList .listItem-body').height();
$('#body.base-layout main.page-content ul.productList figure.listItem-figure img').attr('style', 'max-height:' +figureWidth+ 'px !important');
$('#body.base-layout main.page-content ul.productList figure.listItem-figure a.image-link').attr('style', 'width:' +figureWidth+ 'px !important');
$('#body.base-layout main.page-content ul.productList figure.listItem-figure').attr('style', 'min-height:' +figureWidth+ 'px !important');
$('#body.base-layout main.page-content ul.productList figure.listItem-figure').css("min-width", +figureWidth+"px");
}, 200);
});

// ON TOGGLE RE-RUN SCRIPTS
// CATEGORY, BRAND, SEARCH PAGE PRODUCTS GRID VIEW
$( "a.toggle-link" ).on ('click', function() {
$('#body.base-layout main.page-content ul.productGrid').css("opacity", "0");
$('#body.base-layout main.page-content ul.productList').css("opacity", "0");
setTimeout(function(){
var baseFigureWidth = $('#body.base-layout main.page-content ul.productGrid figure.card-figure').width();
$('#body.base-layout main.page-content ul.productGrid figure.card-figure').attr('style', 'min-height:' +baseFigureWidth+ 'px !important');
$('#body.base-layout main.page-content ul.productGrid figure.card-figure a.image-link').attr('style', 'min-height:' +baseFigureWidth+ 'px !important');
max-he$('#body.base-layout main.page-content ul.productGrid figure.card-figure img').attr('style', 'ight:' +baseFigureWidth+ 'px !important');
$('#body.base-layout main.page-content ul.productGrid').css("opacity", "1");
$('#body.base-layout main.page-content ul.productList').css("opacity", "1");
}, 200);
// CATEGORY, BRAND, SEARCH PAGE PRODUCTS LIST VIEW
// CUSTOM - SET CARD WIDTH TO EQUAL ARTICLE WIDTH MINUS FIGURE WIDTH
setTimeout(function(){
var listFigureWidth = $('#body.base-layout main.page-content ul.productList .listItem-body').height();
var articleWidth = $('#body.base-layout main.page-content ul.productList article.listItem').width();
var fit = '100%';
$('#body.base-layout main.page-content ul.productList article.listItem .listItem-body').attr('style', 'width:' +(fit)+ '!important');
// CUSTOM - SET FIGURE WIDTH TO EQUAL FIGURE HEIGHT TO KEEP FIGURE SQAURE
var figureWidth = $('#body.base-layout main.page-content ul.productList .listItem-body').height();
$('#body.base-layout main.page-content ul.productList figure.listItem-figure img').attr('style', 'max-height:' +figureWidth+ 'px !important');
$('#body.base-layout main.page-content ul.productList figure.listItem-figure a.image-link').attr('style', 'width:' +figureWidth+ 'px !important');
$('#body.base-layout main.page-content ul.productList figure.listItem-figure').attr('style', 'min-height:' +figureWidth+ 'px !important');
$('#body.base-layout main.page-content ul.productList figure.listItem-figure').css("min-width", +figureWidth+"px");
$('#body.base-layout main.page-content ul.productGrid').css("opacity", "1");
$('#body.base-layout main.page-content ul.productList').css("opacity", "1");
}, 200);
});

// On mobile unset figure min-height because they are stacked vertically.
var windowsize = $(window).width();
if (windowsize < 551) {
$( "a.toggle-link" ).on ('click', function() {
  setTimeout(function(){
    var unset = 'unset';
    var fit = '100%';
    var squareFigure = $('#body.base-layout main.page-content figure.listItem-figure').width();
    $('#body.base-layout main.page-content ul.productList figure.listItem-figure').attr('style', 'min-height:' +squareFigure+ 'px !important');
    $('#body.base-layout main.page-content ul.productList figure.listItem-figure').css("min-width", +figureWidth+"px");
    $('#body.base-layout main.page-content ul.productList figure.listItem-figure img').attr('style', 'max-height:' +squareFigure+ 'px !important');
    $('#body.base-layout main.page-content ul.productList figure.listItem-figure img').css("max-width", +squareFigure+"px");
    $('#body.base-layout main.page-content ul.productList figure.listItem-figure a.image-link').attr('style', 'width:' +unset+ '!important');
  }, 200);
});
}

// PRODUCT PAGE PRODUCTS HAS TWO DIFFERENT SECTIONS
$(window).on("load", function(){
var mainProductImgWidth = $('#body.product-page-layout .main-image-container').width();
// MAIN PRODUCT IMAGE
$('#body.product-page-layout .main-image-container figure.productView-image').attr('style', 'min-height:' +mainProductImgWidth+ 'px !important');
$('#body.product-page-layout .main-image-container .slick-list.draggable').attr('style', 'max-height:' +mainProductImgWidth+ 'px !important');
$('#body.product-page-layout .main-image-container figure.productView-image img').attr('style', 'max-height:' +mainProductImgWidth+ 'px !important');
$('#body.product-page-layout .main-image-container figure.productView-image img').css("max-width", +mainProductImgWidth+"px");
});

$(".navPages-quickSearch input").click(function(e){
$('section#quickSearch.quickSearchResults .productGrid .product').css("opacity", "1");
// LEFT LOGO
// CUSTOM - SET CARD WIDTH TO EQUAL ARTICLE WIDTH MINUS FIGURE WIDTH
setInterval(function(){
var figureWidth = $('section#quickSearch.quickSearchResults figure.card-figure').height();
var articleWidth = $('section#quickSearch.quickSearchResults article.card').width();
$('.mbl-srchbar.left-logo section#quickSearch .productGrid[data-list-name="Quick Search Results"] article.card .card-body').css({
  'width': (articleWidth-figureWidth) + 'px'
});
// CUSTOM - SET FIGURE WIDTH TO EQUAL FIGURE HEIGHT TO KEEP FIGURE SQAURE
var figureWidth = $('section#quickSearch.quickSearchResults figure.card-figure').height();
$('.mbl-srchbar.left-logo section#quickSearch.quickSearchResults figure.card-figure img').attr('style', 'max-height:' +figureWidth+ 'px');
$('.mbl-srchbar.left-logo section#quickSearch.quickSearchResults figure.card-figure').css({
  'width': (figureWidth) + 'px'
});
$('section#quickSearch.quickSearchResults .productGrid .product').css("opacity", "1");
}, 200);

});

// FOR WINDOW DRAGGERS & THEME EDITOR RESPONSIVE BUTTONS
window.addEventListener("resize", function() {
// HOME PRODUCTS
setTimeout(function(){
var homeFigureWidth = $('#showcase-products ul.productGrid figure.card-figure').width();
// SHOWCASE PRODUCTS
$('#showcase-products ul.productGrid figure.card-figure').attr('style', 'min-height:' +homeFigureWidth+ 'px !important');
$('#showcase-products ul.productGrid figure.card-figure a.image-link').attr('style', 'min-height:' +homeFigureWidth+ 'px !important');
$('#showcase-products ul.productGrid figure.card-figure img').attr('style', 'max-height:' +homeFigureWidth+ 'px !important');
$('#showcase-products ul.productGrid figure.card-figure img').css("max-width", +homeFigureWidth+"px");
}, 200);

// CATEGORY, BRAND, SEARCH PAGE PRODUCTS
setTimeout(function(){
var baseFigureWidth = $('#body.base-layout main.page-content ul.productGrid figure.card-figure').width();
$('#body.base-layout main.page-content ul.productGrid figure.card-figure').attr('style', 'min-height:' +baseFigureWidth+ 'px !important');
$('#body.base-layout main.page-content ul.productGrid figure.card-figure a.image-link').attr('style', 'min-height:' +baseFigureWidth+ 'px !important');
$('#body.base-layout main.page-content ul.productGrid figure.card-figure img').attr('style', 'max-height:' +baseFigureWidth+ 'px !important');
$('#body.base-layout main.page-content ul.productGrid figure.card-figure img').css("max-width", +baseFigureWidth+"px");
}, 200);

// PRODUCT PAGE PRODUCTS
var mainProductImgWidth = $('#body.product-page-layout .main-image-container').width();
// MAIN PRODUCT IMAGE
$('#body.product-page-layout .main-image-container figure.productView-image').attr('style', 'min-height:' +mainProductImgWidth+ 'px !important');
$('#body.product-page-layout .main-image-container .slick-list.draggable').attr('style', 'max-height:' +mainProductImgWidth+ 'px !important');
$('#body.product-page-layout .main-image-container figure.productView-image img').attr('style', 'max-height:' +mainProductImgWidth+ 'px !important');
$('#body.product-page-layout .main-image-container figure.productView-image img').css("max-width", +mainProductImgWidth+"px");



var listFigureWidth = $('#body.base-layout main.page-content ul.productList .listItem-body').height();
var articleWidth = $('#body.base-layout main.page-content ul.productList article.listItem').width();
// CUSTOM - SET FIGURE WIDTH TO EQUAL FIGURE HEIGHT TO KEEP FIGURE SQAURE
var figureWidth = $('#body.base-layout main.page-content ul.productList .listItem-body').height();
$('#body.base-layout main.page-content ul.productList figure.listItem-figure img').attr('style', 'max-height:' +figureWidth+ 'px !important');
$('#body.base-layout main.page-content ul.productList figure.listItem-figure').css("min-width", +figureWidth+"px");
$('#body.base-layout main.page-content ul.productList figure.listItem-figure').css("min-height", +figureWidth+ "px");
$('#body.base-layout main.page-content ul.productList figure.listItem-figure a.image-link').attr('style', 'width:' +figureWidth+ 'px !important');

$('section#quickSearch.quickSearchResults .productGrid .product').css("opacity", "0");
var screenWidth = window.matchMedia("(min-width: 801px)");
var nineHundredScreenWidth = window.matchMedia("(max-width: 900px)");
var desktopScreenWidth = window.matchMedia("(min-width: 801px)");
var aboveMobileScreenWidth = window.matchMedia("(min-width: 551px)");
var listViewBreakScreenWidth = window.matchMedia("(max-width: 700px)");
var mobileScreenWidth = window.matchMedia("(max-width: 550px)");
myFunction(screenWidth) // Call listener function at run time
screenWidth.addListener(myFunction) // Attach listener function on state changes

function myFunction(screenWidth) {
if (mobileScreenWidth.matches) { // MOBILE
  var unset = 'unset';
  var fit = '100%';
  var squareFigure = $('#body.base-layout main.page-content figure.listItem-figure').width();
  $('#body.base-layout main.page-content ul.productList figure.listItem-figure').attr('style', 'min-height:' +squareFigure+ 'px !important');
  $('#body.base-layout main.page-content ul.productList figure.listItem-figure').css("min-width", +figureWidth+"px");
  $('#body.base-layout main.page-content ul.productList figure.listItem-figure img').attr('style', 'max-height:' +squareFigure+ 'px !important');
  $('#body.base-layout main.page-content ul.productList figure.listItem-figure a.image-link').attr('style', 'width:' +unset+ '!important');
  $('#body.base-layout main.page-content ul.productList figure.listItem-figure listItem-body').attr('style', 'width:' +fit+ '!important');

  $( "a.toggle-link" ).on ('click', function() {
    setTimeout(function(){
      var unset = 'unset';
      var fit = '100%';
      var squareFigure = $('#body.base-layout main.page-content figure.listItem-figure').width();
      $('#body.base-layout main.page-content ul.productList figure.listItem-figure').attr('style', 'min-height:' +squareFigure+ 'px !important');
      $('#body.base-layout main.page-content ul.productList figure.listItem-figure').css("min-width", +squareFigure+"px");
      $('#body.base-layout main.page-content ul.productList figure.listItem-figure img').attr('style', 'max-height:' +squareFigure+ 'px !important');
      $('#body.base-layout main.page-content ul.productList figure.listItem-figure a.image-link').attr('style', 'width:' +unset+ '!important');
      $('#body.base-layout main.page-content ul.productList figure.listItem-figure listItem-body').attr('style', 'width:' +fit+ '!important');
    }, 200);
  });

} else if (aboveMobileScreenWidth.matches) { // MOBILE
var listFigureWidth = $('#body.base-layout main.page-content ul.productList .listItem-body').height();
var articleWidth = $('#body.base-layout main.page-content ul.productList article.listItem').width();
var fit = '100%';

// ON TOGGLE RE-RUN SCRIPTS
// CATEGORY, BRAND, SEARCH PAGE PRODUCTS GRID VIEW
$( "a.toggle-link" ).on ('click', function() {
$('#body.base-layout main.page-content ul.productGrid').css("opacity", "0");
$('#body.base-layout main.page-content ul.productList').css("opacity", "0");
setTimeout(function(){
var baseFigureWidth = $('#body.base-layout main.page-content ul.productGrid figure.card-figure').width();
$('#body.base-layout main.page-content ul.productGrid figure.card-figure').attr('style', 'min-height:' +baseFigureWidth+ 'px !important');
$('#body.base-layout main.page-content ul.productGrid figure.card-figure a.image-link').attr('style', 'min-height:' +baseFigureWidth+ 'px !important');
$('#body.base-layout main.page-content ul.productGrid figure.card-figure img').attr('style', 'max-height:' +baseFigureWidth+ 'px !important');
$('#body.base-layout main.page-content ul.productGrid figure.card-figure img').css("max-width", +baseFigureWidth+"px");
$('#body.base-layout main.page-content ul.productGrid').css("opacity", "1");
$('#body.base-layout main.page-content ul.productList').css("opacity", "1");
}, 200);
// CATEGORY, BRAND, SEARCH PAGE PRODUCTS LIST VIEW
// CUSTOM - SET CARD WIDTH TO EQUAL ARTICLE WIDTH MINUS FIGURE WIDTH
setTimeout(function(){
var listFigureWidth = $('#body.base-layout main.page-content ul.productList .listItem-body').height();
var articleWidth = $('#body.base-layout main.page-content ul.productList article.listItem').width();
var fit = '100%';
$('#body.base-layout main.page-content ul.productList article.listItem .listItem-body').attr('style', 'width:' +(fit)+ '!important');
// CUSTOM - SET FIGURE WIDTH TO EQUAL FIGURE HEIGHT TO KEEP FIGURE SQAURE
var figureWidth = $('#body.base-layout main.page-content ul.productList .listItem-body').height();
$('#body.base-layout main.page-content ul.productList figure.listItem-figure img').attr('style', 'max-height:' +figureWidth+ 'px !important');
$('#body.base-layout main.page-content ul.productList figure.listItem-figure a.image-link').attr('style', 'width:' +figureWidth+ 'px !important');
$('#body.base-layout main.page-content ul.productList figure.listItem-figure').attr('style', 'min-height:' +figureWidth+ 'px !important');
$('#body.base-layout main.page-content ul.productList figure.listItem-figure').css("min-width", +figureWidth+"px");
$('#body.base-layout main.page-content ul.productGrid').css("opacity", "1");
$('#body.base-layout main.page-content ul.productList').css("opacity", "1");
}, 200);
});

// DESKTOP
} else if (nineHundredScreenWidth.matches) { // DESKTOP - If screen is 900px or MORE
  // CUSTOM - SET QUICKSEARCH DROPDOWN WIDTH EQUAL TO SEARCH FIELD
  var searchFieldWidth = $('header.header').width();
  searchFieldWidth = (searchFieldWidth * .6);
  $('.mbl-srchbar.left-logo section#quickSearch.quickSearchResults').css({
    'width': (searchFieldWidth) + 'px'
  });
  // LEFT LOGO
  // CUSTOM - SET CARD WIDTH TO EQUAL ARTICLE WIDTH MINUS FIGURE WIDTH
  setInterval(function(){
  var figureWidth = $('section#quickSearch.quickSearchResults figure.card-figure').height();
  var articleWidth = $('section#quickSearch.quickSearchResults article.card').width();
  $('.mbl-srchbar.left-logo section#quickSearch .productGrid[data-list-name="Quick Search Results"] article.card .card-body').css({
    'width': (articleWidth-figureWidth) + 'px'
  });
  // CUSTOM - SET FIGURE WIDTH TO EQUAL FIGURE HEIGHT TO KEEP FIGURE SQAURE
  var figureWidth = $('section#quickSearch.quickSearchResults figure.card-figure').height();
  $('.mbl-srchbar.left-logo section#quickSearch.quickSearchResults figure.card-figure img').attr('style', 'max-height:' +figureWidth+ 'px');
  $('.mbl-srchbar.left-logo section#quickSearch.quickSearchResults figure.card-figure').css({
    'width': (figureWidth) + 'px'
  });
  $('section#quickSearch.quickSearchResults .productGrid .product').css("opacity", "1");
}, 1000);

  // CENTERED LOGO
  // CUSTOM - SET FIGURE HEIGHT TO EQUAL FIGURE WIDTH TO KEEP FIGURE SQAURE
  setInterval(function(){
    var figureWidth = $('section#quickSearch.quickSearchResults figure.card-figure').width();
    $('.mbl-srchbar.center-logo section#quickSearch.quickSearchResults figure.card-figure img').attr('style', 'max-height:' +figureWidth+ 'px');
    $('.mbl-srchbar.center-logo section#quickSearch.quickSearchResults figure.card-figure').css({
      'height': (figureWidth) + 'px'
    });
    $('section#quickSearch.quickSearchResults .productGrid .product').css("opacity", "1");
  }, 200);

} else if (desktopScreenWidth.matches) { // DESKTOP - If screen is 800px or MORE
  // CUSTOM - SET QUICKSEARCH DROPDOWN WIDTH EQUAL TO SEARCH FIELD
  setInterval(function(){
  var searchFieldWidth = $('header.header').width();
  searchFieldWidth = (searchFieldWidth * .5);
  $('.mbl-srchbar.left-logo section#quickSearch.quickSearchResults').css({
    'width': (searchFieldWidth) + 'px'
  });
  $('section#quickSearch.quickSearchResults .productGrid .product').css("opacity", "1");
}, 200);
  // LEFT LOGO
  // CUSTOM - SET CARD WIDTH TO EQUAL ARTICLE WIDTH MINUS FIGURE WIDTH
  setInterval(function(){
  var figureWidth = $('section#quickSearch.quickSearchResults figure.card-figure').height();
  var articleWidth = $('section#quickSearch.quickSearchResults article.card').width();
  $('.mbl-srchbar.left-logo section#quickSearch .productGrid[data-list-name="Quick Search Results"] article.card .card-body').css({
    'width': (articleWidth-figureWidth) + 'px'
  });
  // CUSTOM - SET FIGURE WIDTH TO EQUAL FIGURE HEIGHT TO KEEP FIGURE SQAURE
  var figureWidth = $('section#quickSearch.quickSearchResults figure.card-figure').height();
  $('.mbl-srchbar.left-logo section#quickSearch.quickSearchResults figure.card-figure img').attr('style', 'max-height:' +figureWidth+ 'px');
  $('.mbl-srchbar.left-logo section#quickSearch.quickSearchResults figure.card-figure').css({
    'width': (figureWidth) + 'px'
  });
  $('section#quickSearch.quickSearchResults .productGrid .product').css("opacity", "1");
}, 200);

  // CENTERED LOGO
  // CUSTOM - SET FIGURE HEIGHT TO EQUAL FIGURE WIDTH TO KEEP FIGURE SQAURE
  setInterval(function(){
    var figureWidth = $('section#quickSearch.quickSearchResults figure.card-figure').width();
    $('.mbl-srchbar.center-logo section#quickSearch.quickSearchResults figure.card-figure img').attr('style', 'max-height:' +figureWidth+ 'px');
    $('.mbl-srchbar.center-logo section#quickSearch.quickSearchResults figure.card-figure').css({
      'height': (figureWidth) + 'px'
    });
    $('section#quickSearch.quickSearchResults .productGrid .product').css("opacity", "1");
  }, 200);

$('section#quickSearch.quickSearchResults .productGrid .product').css("opacity", "1");

$(".navPages-quickSearch input").click(function(e){
$('section#quickSearch.quickSearchResults .productGrid .product').css("opacity", "1");
// CUSTOM - SET QUICKSEARCH DROPDOWN WIDTH EQUAL TO SEARCH FIELD
var searchFieldWidth = $('header.header').width();
searchFieldWidth = (searchFieldWidth * .6);
$('.mbl-srchbar.left-logo section#quickSearch.quickSearchResults').css({
  'width': (searchFieldWidth) + 'px'
});
// LEFT LOGO
// CUSTOM - SET CARD WIDTH TO EQUAL ARTICLE WIDTH MINUS FIGURE WIDTH
setInterval(function(){
var figureWidth = $('section#quickSearch.quickSearchResults figure.card-figure').height();
var articleWidth = $('section#quickSearch.quickSearchResults article.card').width();
$('.mbl-srchbar.left-logo section#quickSearch .productGrid[data-list-name="Quick Search Results"] article.card .card-body').css({
  'width': (articleWidth-figureWidth) + 'px'
});
// CUSTOM - SET FIGURE WIDTH TO EQUAL FIGURE HEIGHT TO KEEP FIGURE SQAURE
var figureWidth = $('section#quickSearch.quickSearchResults figure.card-figure').height();
$('.mbl-srchbar.left-logo section#quickSearch.quickSearchResults figure.card-figure img').attr('style', 'max-height:' +figureWidth+ 'px');
$('.mbl-srchbar.left-logo section#quickSearch.quickSearchResults figure.card-figure').css({
  'width': (figureWidth) + 'px'
});
$('section#quickSearch.quickSearchResults .productGrid .product').css("opacity", "1");
}, 200);
});
}
}
}, false);

$( document ).ready(function() {
// MAKE COMPARE TEXT CLICKABLE IN LIST VIEW
$( ".listItem-body label.button.button--small.card-figcaption-button.compare" ).on ('click', function() {
var checkBox = $(this).find("input[type='checkbox']");
checkBox.prop("checked", !checkBox.prop("checked"));
});
});


/**
* Gets the browser name or returns an empty string if unknown.
* This function also caches the result to provide for any
* future calls this function has.
*
* @returns {string}
*/
var browser = function() {
  // Return cached result if avalible, else get result then cache it.
  if (browser.prototype._cachedResult)
      return browser.prototype._cachedResult;

  // Opera 8.0+
  var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

  // Firefox 1.0+
  var isFirefox = typeof InstallTrigger !== 'undefined';

  // Safari 3.0+ "[object HTMLElementConstructor]"
  var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);

  // Internet Explorer 6-11
  var isIE = /*@cc_on!@*/false || !!document.documentMode;
  if (isIE = /*@cc_on!@*/false || !!document.documentMode) {
    $('#body').addClass('internet-explorer');
  } else {
    $('#body').addClass('not-internet-explorer');
  }

  // Edge 20+
  var isEdge = !isIE && !!window.StyleMedia;

  // Chrome 1+
  var isChrome = !!window.chrome && !!window.chrome.webstore;

  // Blink engine detection
  var isBlink = (isChrome || isOpera) && !!window.CSS;

  return browser.prototype._cachedResult =
      isOpera ? 'Opera' :
      isFirefox ? 'Firefox' :
      isSafari ? 'Safari' :
      isChrome ? 'Chrome' :
      isIE ? 'IE' : 'NOT IE'
      isEdge ? 'Edge' :
      isBlink ? 'Blink' :
      "Don't know";
};

console.log(browser());

$(window).on("load", function(){
$(".category .page-content.both-grid-list-views").css("opacity", "1");
});

if (!$(".product-filtering-enabled")[0]) {
$('a.toggle-link.list').on("click", function(){
  if (history.pushState) {
      var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?list-active';
      window.history.pushState({path:newurl},'',newurl);
  }
});
}
if (!$(".product-filtering-enabled")[0]) {
$('a.toggle-link.grid').on("click", function(){
  if (history.pushState) {
      var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?grid-active';
      window.history.pushState({path:newurl},'',newurl);
  }
});
}

if (!$(".product-filtering-enabled")[0]) {
$('a.pagination-link').on("click", function(){
  var uri = window.location.toString();
  if ( (uri.indexOf("?list-active") > 0) || (uri.indexOf("?grid-active") > 0) ) {
    $(this).attr({
      href: $(this).attr("href") + window.location.search
    });
  }
});
}

if (!$(".product-filtering-enabled")[0]) {
$( document ).ready(function() {
var uri = window.location.toString();
if ( (uri.indexOf("?list-active") > 0) && (!$('a.toggle-link.list').hasClass('default')) ) {
  $('a.toggle-link.list').trigger("click");
} else if ( (uri.indexOf("?grid-active") > 0) && (!$('a.toggle-link.grid').hasClass('default')) ) {
    $('a.toggle-link.grid').trigger("click");
  }
});
}

$(window).on("load", function(){
$('ul.productList.visible').css("opacity", "1");
$('ul.productGrid.visible').css("opacity", "1");
});

$(document).ready(function(){
$(".add-to-cart-button").each(function() {
  if ($.trim($(this).html()).length <= 0 ) {
    var productLink = $(this).parents('.card-body').find('.card-title a').attr('href');
     $(this).append("<a href="+productLink+" class='button button--small card-figcaption-button false-stock-message' data-product-id='{{id}}'>View Details</a>");
   }
});
});
// COMPARE ENABLED
$(document).ready(function(){
$(".compare-enabled .card-text .price-visibility").each(function() {
   if ( ($.trim($(this).html()).length <= 0 ) && ($(".withTax")[0]) && ($(".withoutTax")[0]) ) {
     $(this).append("<div class='msrp-sale-regular-price-section'></div>");
     $(this).append("<div class='price-section-withTax current-price'></div>");
     $(this).append("<div class='price-section-withoutTax current-price'></div>");
   }
   });
});
$(document).ready(function(){
$(".compare-enabled .card-text .price-visibility").each(function() {
   if ( ($.trim($(this).html()).length <= 0 ) && ($(".withTax")[0]) && (!$(".withoutTax")[0]) ) {
     $(this).append("<div class='msrp-sale-regular-price-section'></div>");
     $(this).append("<div class='price-section-withTax current-price'></div>");
   }
   });
});
$(document).ready(function(){
$(".compare-enabled .card-text .price-visibility").each(function() {
   if ( ($.trim($(this).html()).length <= 0 ) && (!$(".withTax")[0]) && ($(".withoutTax")[0]) ) {
     $(this).append("<div class='msrp-sale-regular-price-section'></div>");
     $(this).append("<div class='price-section-withoutTax current-price'></div>");
   }
   });
});
// COMPARE DISABLED
$(document).ready(function(){
$(".compare-disabled .card-text .price-visibility").each(function() {
   if ( ($.trim($(this).html()).length <= 0 ) && ($(".withTax")[0]) && ($(".withoutTax")[0]) ) {
     $(this).append("<div class='msrp-sale-regular-price-section'></div>");
     $(this).append("<div class='price-section-withTax current-price'></div>");
     $(this).append("<div class='price-section-withoutTax current-price'></div>");
   }
   });
});
$(document).ready(function(){
$(".compare-disabled .card-text .price-visibility").each(function() {
   if ( ($.trim($(this).html()).length <= 0 ) && ($(".withTax")[0]) && (!$(".withoutTax")[0]) ) {
     $(this).append("<div class='msrp-sale-regular-price-section'></div>");
     $(this).append("<div class='price-section-withTax current-price'></div>");
   }
   });
});
$(document).ready(function(){
$(".compare-disabled .card-text .price-visibility").each(function() {
   if ( ($.trim($(this).html()).length <= 0 ) && (!$(".withTax")[0]) && ($(".withoutTax")[0]) ) {
     $(this).append("<div class='msrp-sale-regular-price-section'></div>");
     $(this).append("<div class='price-section-withoutTax current-price'></div>");
   }
   });
});

$(document).ready(function(){
if ($("a.button.button--small.card-figcaption-button.login-for-pricing")[0]) {
  $('.card-text .price-visibility.visible').hide();
}
});

$(document).ready(function(){
  $(".add-to-cart-button.call-for-price span.line-one").each(function() {
    if ($.trim($(this).html()).length <= 0 ) {
       $(this).parents('.add-to-cart-button.call-for-price').addClass('line-one-empty');
     }
  });
});

$(document).ready(function(){
  $(".add-to-cart-button.call-for-price span.line-two").each(function() {
    if ($.trim($(this).html()).length <= 0 ) {
       $(this).parents('.add-to-cart-button.call-for-price').addClass('line-two-empty');
     }
  });
});

$(window).on("load", function(){
  var maxHeight = -1;
  $('.body.content .card .current-price').each(function() {
    maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
  });
  $('.body.content .card .current-price').each(function() {
    $(this).attr('style', 'min-height:' +maxHeight+ 'px !important');
  });
});

// QUICKVIEW FOR MOBILE
$('a.image-link.mobile').on ('click', function(event) {
  event.preventDefault();
});
$('figure').on ('click', function(event) {
$('figure.active').not(this).removeClass('active');
  $(this).toggleClass('active');
});

// CHECK IF LESS FOUR SLIDES EXIST IN VERTICAL SLIDER & ADD CLASS
$(window).on("load", function(){
var numOfSlides = $('.sidebar.right .carousel-vertical .slick-slide').length;
if ( numOfSlides <= 3 ) {
    $('.sidebar.right .carousel-vertical').addClass('single-slide');
}
});


//Header account dropdown
$(document).mouseup(function(e){
var container = $(".anct-link");
if (!container.is(e.target) && container.has(e.target).length === 0)
{
    $(".acnt-popup").removeClass("drp-opn");
}
});
$(function() {                       
$(".anct-link").click(function() {  
  $(this).next('.acnt-popup').toggleClass("drp-opn");   
});
});

$(document).ready(function() {
  $('.mbl-srch-icon').on('click', function(event) {
    $('.mbl-srchbar').addClass("active");
    $('body').removeClass('has-activeNavPages');
    $('.header').removeClass('is-open');
    $('.mobileMenu-toggle').removeClass('is-open');
    $('.mobileMenu-toggle').attr('aria-expanded', false);
    $('#menu').attr('aria-hidden',true);
    $('#menu').removeClass('is-open');
  });
  $('.navPages .srch-close').on('click', function(event) {
    $(this).parents('.mbl-srchbar').removeClass("active");
    // $('.mbl-srchbar').attr('aria-hidden', false);
    $('.mbl-srchbar').removeClass('is-open');
  });
});

$(document).ready(function() {
  var stickTop = $('.header-container.sticky-header').length;
  var topMenuHeight = $('.top-menu').outerHeight(true);
  if (stickTop) {
    var newTopValue = topMenuHeight + 10;
    $('.stick-sidebar').css('top', newTopValue + 'px');
  }
  else {
    var newTopValue = 20;
    $('.stick-sidebar').css('top', newTopValue + 'px');
  }
  
});

$(document).ready(function(){
  $('.stick-sidebar').hover(function() {
      $(this).addClass('active-hover').off('mouseenter mouseleave');
  });
});

//Top menu height calculate and add top css to sticky sidebar
$(document).ready(function () {
  if($('.stick-sidebar .sidecat-sub').length) {
    function adjustSidebarHeight() {
        var $sidebar = $('.stick-sidebar .sidecat-sub'); 
        var viewportHeight = $(window).height(); 
        var scrollTop = $(window).scrollTop(); 
        var sidebarOffset = $('.stick-sidebar').offset().top - scrollTop; 
        var availableHeight = viewportHeight - sidebarOffset;
        if (sidebarOffset <= 0) {
        } else {
            $sidebar.css('height', availableHeight + 'px');
        }
        
    }
    adjustSidebarHeight();
    $(window).scroll(function () {
        adjustSidebarHeight();
    });
    $(window).resize(function () {
        adjustSidebarHeight();
    });
  }
});



