
(function ($) {
  'use strict'


  // Sticky menu
  var $window = $(window)
  $window.on('scroll', function () {
    var scroll = $window.scrollTop()
    if (scroll < 300) {
      $('.sticky').removeClass('is-sticky')
    } else {
      $('.sticky').addClass('is-sticky')
    }
  })

  // Off Canvas Open close
  $('.mobile-menu-btn').on('click', function () {
    $('body').addClass('fix')
    $('.off-canvas-wrapper').addClass('open')
  })

  $('.btn-close-off-canvas,.off-canvas-overlay').on('click', function () {
    $('body').removeClass('fix')
    $('.off-canvas-wrapper').removeClass('open')
  })

  // offcanvas mobile menu
  var $offCanvasNav = $('.mobile-menu')

  var $offCanvasNavSubMenu = $offCanvasNav.find('.dropdown')

  /* Add Toggle Button With Off Canvas Sub Menu */
  $offCanvasNavSubMenu
    .parent()
    .prepend('<span class="menu-expand"><i></i></span>')

  /* Close Off Canvas Sub Menu */
  $offCanvasNavSubMenu.slideUp()

  /* Category Sub Menu Toggle */
    $offCanvasNav.on('click', 'li a, li .menu-expand', function (e) {
        var $this = $(this)
        if (
        $this
        .parent()
        .attr('class')
        .match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/) &&
        ($this.attr('href') === '#' || $this.hasClass('menu-expand'))
        ) {
            e.preventDefault()
            if ($this.siblings('ul:visible').length) {
                $this.parent('li').removeClass('active')
                $this.siblings('ul').slideUp()
            } else {
                $this.parent('li').addClass('active')
                $this
                .closest('li')
                .siblings('li')
                .removeClass('active')
                .find('li')
                .removeClass('active')
                $this
                .closest('li')
                .siblings('li')
                .find('ul:visible')
                .slideUp()
                $this.siblings('ul').slideDown()
            }
        }
    })


  // Background Image JS start
  var bgSelector = $('.bg-img')
  bgSelector.each(function (index, elem) {
    var element = $(elem)

    var bgSource = element.data('bg')
    element.css('background-image', 'url(' + bgSource + ')')
  })


  //AOS
  AOS.init();

  
  // Scroll to top active js
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 600) {
      $('.scroll-top').removeClass('not-visible')
    } else {
      $('.scroll-top').addClass('not-visible')
    }
  })
  $('.scroll-top').on('click', function (event) {
    $('html,body').animate({
        scrollTop: 0
      },
      1000
    )
  })



})(jQuery)