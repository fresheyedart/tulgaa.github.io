gsap.registerPlugin(ScrollTrigger);



const scroller = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    getDirection: true,
    tablet: { smooth: false },
    smartphone: { smooth: false },
  });

scroller.on('scroll', ScrollTrigger.update)

ScrollTrigger.scrollerProxy(
  '.container', {
      scrollTop(value) {
          return arguments.length ?
          scroller.scrollTo(value, 0, 0) :
          scroller.scroll.instance.scroll.y
      },
      getBoundingClientRect() {
          return {
              left: 0, top: 0, 
              width: window.innerWidth,
              height: window.innerHeight
          }
  }})


  const tm = gsap.timeline({
    scrollTrigger: {
        trigger: "#section-4",
        // markers: true,
        scrub: 0,
        scroller: ".container",
        pin: "#content",
        start: "top 40%",
        end: "bottom bottom",
        ease: "slow(0.70.7, 0.70.7, false)", 
        y: -500 
    }
      });
      tm
          .to(".mask", {
              scaleY: 0,
              duration: 2,
              scrub: 0
          }, 0
          );

            tm
            .from(".year", {
              // skewY: 15
              scale: 0.5,
              opacity: 0
            },0.5);
            tm
            .from("#content p", {
              y: -500
            },0.5);
            tm
            .from(".my-button", {
              y: 100
            },1);
            
            tm
            .to("#content", {
              opacity: 0,
            },2);
            tm
           
            

       


  

gsap.from(".sign", {
    scrollTrigger: {
        trigger: ".section-6",
        scroller: '.container',
        toggleActions: "restart restart restart restart"
    },
    opacity: 0,
    ease: Linear.easeNone,
    duration: 2
  });

    ScrollTrigger.create({
        trigger: '.title',
        scroller: '.container',
        start: 'top 70%',
        end: 'bottom 70%',
      animation:  
        gsap.from('.title', {
          duration: '2',
          opacity: 0,
          y: 50, yoyo:true, 
          ease: Linear.easeNone}),
          pinSpaceing: false,
        scrub: 2,
      });
      
      ScrollTrigger.create({
          trigger: '.my-button',
          scroller: '.container',
          start: 'top+=100% 80%',
          end: 'bottom+=80% 80%',
        animation: 
          gsap.from('.my-button', {
            width: "300px",
            x: 50, 
            skewX:5,
            ease: Linear.easeNone,}),
            duration: 0.8,
            scrub: 2, 
        });
        

        ScrollTrigger.create({
          trigger: '.button ',
          scroller: '.container',
          start: 'top 70%',
          end: 'bottom center',
        animation: 
        gsap.to('.big-cover', {
          backgroundPositionY: -200,
          
        }),
          scrub: 2,
        })
        
        var ts = new TimelineMax({paused:true});
        ScrollTrigger.create({
          trigger: '.table ',
          scroller: '.container',
          start: 'top center',
          end: 'top top',
        animation: 
        ts.from('.table li', {
          opacity: 50,
          x: -20,
          stagger: 1,
          
        }),
          scrub: 2,
        })
        
        var ts = new TimelineMax({paused:true});
        ScrollTrigger.create({
          trigger: '.table ',
          scroller: '.container',
          start: 'top center',
          end: 'top top',
        animation: 
        ts.from('.section-2 p', {
          stagger: .8,
          
        }),
          scrub: -2,
        })
       
        ScrollTrigger.create({
          trigger: '.section-7 ',
          scroller: '.container',
          start: 'top 1000%',
          end: 'bottom -300%',
        animation: 
        gsap.to('.rotating-outer-container svg', {
          fill: "blue",
          rotate: "1000deg"
          
        }),
          scrub: true,
        })
        ScrollTrigger.create({
          trigger: '.section-7 ',
          scroller: '.container',
          start: 'top 1000%',
          end: 'bottom -300%',
        animation: 
        gsap.to('.cta-1 span:nth-child(1)', {
          fill: "blue",
          rotate: "-3000deg"
          
        }),
          scrub: true,
        })

       
        
    
        
        
      


        ScrollTrigger.create({
          trigger: '.section-1 ',
          scroller: '.container',
          start: 'top top',
          end: 'bottom center',
        animation: 
        gsap.to('.abs', {
          backgroundColor: "transparent"
          
        }),
          scrub: true,
        })

  
        
      ScrollTrigger.create({
        trigger: '.image-1 ',
        scroller: '.container',
        
        start: 'top 70%',
        end: 'bottom center',
      animation: 
      gsap.to('.image-1-mask', {
       backgroundPositionX: 50
      
      }),
        scrub: 1,
      })

    //   menu

    var toggleBtn = document.querySelector(".toggle");
    var tl = new TimelineMax({paused:true});
    window.onload = function() {}
    var timeline = new TimelineLite();

      tl.to(".container",  {
          overflow: "hidden"
      }, 0.2);
      
      tl.to("nav",  {
          left: "0",
          duration: 1.5,
          ease: "elastic.out(1, 1)"
      }, 0.1);

      tl.to(".cta-1 span:nth-child(1)",  {
          backgroundColor: "#fa000096",
          rotate: "900deg",
          ease: "elastic.out(1, 1)"
      }, 0);


      tl.from("nav ul li", {
          x: -300,
          opacity: 0,
          stagger: .1
      }, 0.5);

    tl.reverse();
    toggleBtn.onclick = function(){
        tl.reversed(!tl.reversed());
    };
    
    
    
    //  card hover 



gsap.utils.toArray(".box").forEach(box => {
  let title = box.querySelector(".box-title"),
      text = box.querySelector(".box-text"),
      background = box.querySelector(".box-content"),
      tl = gsap.timeline({ paused: true });
  
  tl.to(title, { 
    yPercent: -150 
  },0.3)
    .to(text, { yPercent: -100, 
       }, 0.4)

    .to(background, { 
      height: "100%",
      duration: 0.1,
      backgroundColor: "rgba(37, 37, 37, 0.5)"
     }, 0)
    .to(background, { 
      backgroundColor: "rgba(0, 0, 255, 0.8)"
     }, 0.2)
    .to(background, { 
      backgroundColor: "rgba(255, 0, 0, 0.8)"
     }, 2)
    .to(background, { 
      backdropFilter: "blur(3px)",
     }, 0.2);
  
  
  box.addEventListener("mouseenter", () => tl.play() );
  box.addEventListener("mouseleave", () => tl.reverse() );
});

gsap.utils.toArray(".gallery-box-overlay").forEach(overlay => {
  let main = overlay.querySelector(".gallery-box-overlay"),
      title = overlay.querySelector(".gallery-box-overlay h2"),
      text = overlay.querySelector(".gallery-box-overlay p"),
      back = overlay.querySelector(".dark-background"),
      date = overlay.querySelector(".gallery-date"),
      tl = gsap.timeline({ paused: true });
  
  tl.to(main, { 
   backgroundColor: "black"

  },0.3)
  .to(back, {
    height: "100%",
    backdropFilter: "blur(3px)"
  }, 0)
    .to(title, { yPercent: -40, opacity: 1
       }, 0.4)
    .to(text, { yPercent: -50, opacity: 1
       }, 0.4)
    .to(date, { yPercent: -30, opacity: .5, color: "white"
       }, 0.4)

 
  
  overlay.addEventListener("mouseenter", () => tl.play() );
  overlay.addEventListener("mouseleave", () => tl.reverse() );
});
    


