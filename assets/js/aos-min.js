const debounce=function(a,e,t){let o;return function(...i){const n=this,r=t&&!o;clearTimeout(o),o=setTimeout(function(){o=null,t||a.apply(n,i)},e),r&&a.apply(n,i)}},body=document.querySelector("body"),target=body.querySelectorAll("[data-anime]"),targetGraf=body.querySelector(".graficos");function animeScroll(){const a=window.pageYOffset+.85*window.innerHeight;target.forEach(function(e){a>e.offsetTop?e.classList.add("animate"):e.classList.remove("animate")})}function animeScrollGrafico(){if(window.pageYOffset+.85*window.innerHeight>targetGraf.offsetTop){const a=targetGraf.querySelectorAll("[data-grafico]");a[0].classList.add("anima"),a[1].classList.add("anima"),a[2].classList.add("anima")}else{const a=targetGraf.querySelectorAll("[data-grafico]");a[0].classList.remove("anima"),a[1].classList.remove("anima"),a[2].classList.remove("anima")}}animeScroll(),animeScrollGrafico(),window.addEventListener("scroll",debounce(function(){animeScroll(),animeScrollGrafico()},50));