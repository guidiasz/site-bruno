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
const body = document.querySelector('body');

const target = body.querySelectorAll('[data-anime]');
const targetGraf = body.querySelector('.graficos');

function animeScroll() {
  const windowTop = window.pageYOffset + (window.innerHeight * 0.85 );
    target.forEach(function(element) {
        if( windowTop > element.offsetTop) {
            element.classList.add('animate');
        }
        else {
            element.classList.remove('animate');
        }
    });
}

function animeScrollGrafico() {
  const windowTop = window.pageYOffset + (window.innerHeight * 0.85 );
  if(windowTop > targetGraf.offsetTop) {
    const elements = targetGraf.querySelectorAll('[data-grafico]');
    elements[0].classList.add('anima');
    elements[1].classList.add('anima');
    elements[2].classList.add('anima');
  }
  else {
    const elements = targetGraf.querySelectorAll('[data-grafico]');
    elements[0].classList.remove('anima');
    elements[1].classList.remove('anima');
    elements[2].classList.remove('anima');
  }
  // targetGraf.forEach(function(element) {
  //   console.log(element.offsetTop)
  //       if( windowTop > element.offsetTop) {
  //           element.querySelector('[data-grafico]').classList.add('anima');
  //       }
  //       else {
  //         console.log('entrou')
  //           element.querySelector('[data-grafico]').classList.remove('anima');
  //       }
  //   });
}

animeScroll();
animeScrollGrafico();

window.addEventListener('scroll', debounce(function(){
    animeScroll();
    animeScrollGrafico();
}, 50) );