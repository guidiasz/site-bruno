const debounce = function(func, wait, immediate) {
  let timeout;
  return function(...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};


const target = document.querySelectorAll('[data-anime]');

function animeScroll() {
  const windowTop = window.pageYOffset + (window.innerHeight * 0.75 );
    target.forEach(function(element) {
        if( windowTop > element.offsetTop) {
            element.classList.add('animate');
        }
        else {
            element.classList.remove('animate');
        }
    });
}

animeScroll();

window.addEventListener('scroll', debounce(function(){
    animeScroll();
}, 50) )