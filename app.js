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

 let gambar= document.querySelectorAll('img')
      
      gambar.forEach(function(e){
       // e.classList.toggle('lazy')
        e.setAttribute('loading','lazy')
     
        
      })
