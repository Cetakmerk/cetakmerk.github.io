 var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 20,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        },
        autoplay: {
          delay: 1000,
          disableOnInteraction: false,
        },
        loop: true,
        
      });

 let cari= document.querySelectorAll("img")
cari.forEach(function(e){
  let src = e.getAttribute("src")
  // console.log(src)
 e.setAttribute("data-srcset",`${src} 300w`)
 e.setAttribute("data-src",`${src}`)
 e.setAttribute("data-sizes",`auto`)
 e.setAttribute("class",`lazyload`)
 e.setAttribute("loading",`lazy`)
 
})
