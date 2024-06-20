


$('.scrollTo').click(function() {
    // this is a getter variable.
    // We're getting the current value of the href attribute of each element with a class "scrollTo".
    var getElem = $(this).attr('href');
    // This is a variable containing an integer value.
    var targetDistance = 10;
    // Checking If the element exists on the page or not.
    if ($(getElem).length) {
        // getting the top offset of the targetted element.
        var getOffset = $(getElem).offset().top;
        // Now We can animate to our desired section using the html element.
        $('html').animate({
            scrollTop:getOffset - targetDistance
        },500);
    }
    // returning false performs three tasks when called:
    // event.preventDefault();
    // event.stopPropagation();
    // Stops callback execution and returns immediately when called.
    return false;
});
// dynamically added the back to top button.
$('body').append('<a href="#" class="back-to-top">Back to Top</a>');
var amountScrolled = $(window).height();
$(window).scroll(function() {
    if ( $(window).scrollTop() > amountScrolled ) {
        $('a.back-to-top').fadeIn('slow');
    } else {
        $('a.back-to-top').fadeOut('slow');
    }
});
$('a.back-to-top').click(function(){
    $('html').animate({scrollTop:0},500);
    return false;
});

// sticky header

const header = document.querySelector(".page-header");
// const toggleClass = "is-sticky";

window.addEventListener("scroll", function() {
  const currentScroll = window.pageYOffset;
  const windiwInnerHeight = window.innerHeight;
  // console.log(currentScroll);
  if (currentScroll > windiwInnerHeight) {
    header.classList.add("is-sticky");
  } else {
    header.classList.remove("is-sticky");
  }
});


