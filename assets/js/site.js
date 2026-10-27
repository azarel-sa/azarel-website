(function(){
  var nav=document.getElementById('nav');
  if(nav){
    var onScroll=function(){nav.classList.toggle('scrolled',window.scrollY>20);};
    addEventListener('scroll',onScroll,{passive:true});
    onScroll();
  }
  var toggle=document.getElementById('navToggle'),links=document.getElementById('navLinks');
  var mobile=matchMedia('(max-width:900px)');
  if(toggle&&links){
    function setMenu(open){
      open=mobile.matches&&open;
      links.classList.toggle('open',open);
      toggle.setAttribute('aria-expanded',String(open));
      links.inert=mobile.matches&&!open;
      if(mobile.matches){links.setAttribute('aria-hidden',String(!open));}
      else{links.removeAttribute('aria-hidden');}
    }
    toggle.addEventListener('click',function(){setMenu(!links.classList.contains('open'));});
    links.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){setMenu(false);});});
    document.addEventListener('keydown',function(e){
      if(e.key==='Escape'&&links.classList.contains('open')){setMenu(false);toggle.focus();}
    });
    document.addEventListener('click',function(e){if(!links.contains(e.target)&&!toggle.contains(e.target)){setMenu(false);}});
    mobile.addEventListener('change',function(){setMenu(false);});
    setMenu(false);
  }
  function pagePath(url){return url.pathname.replace(/index\.html$/,'');}
  document.querySelectorAll('.nav-links a[href]').forEach(function(a){
    var target=new URL(a.href);
    if(!target.hash&&pagePath(target)===pagePath(location)){a.setAttribute('aria-current','page');}
  });
  document.querySelectorAll('[data-year]').forEach(function(el){el.textContent=new Date().getFullYear();});

  // Mobile, reduced-motion, and data-saving visitors get static images, without MP4 requests.
  var desktop=matchMedia('(min-width:901px)'),reduced=matchMedia('(prefers-reduced-motion:reduce)');
  var videos=Array.from(document.querySelectorAll('video[data-video]')),observer;
  function allowVideo(){return desktop.matches&&!reduced.matches&&!(navigator.connection&&navigator.connection.saveData);}
  function stopVideo(video){video.pause();video.parentElement.classList.remove('video-playing');}
  function startVideo(video){
    if(!allowVideo()){return;}
    if(!video.dataset.loaded){
      video.querySelectorAll('source[data-src]').forEach(function(source){source.src=source.dataset.src;});
      video.dataset.loaded='true';video.load();
    }
    var playing=video.play();
    if(playing){playing.catch(function(){stopVideo(video);});}
  }
  videos.forEach(function(video){
    video.addEventListener('playing',function(){video.parentElement.classList.add('video-playing');});
    video.addEventListener('error',function(){stopVideo(video);});
  });
  function observeVideos(){
    if(observer){observer.disconnect();}
    videos.forEach(stopVideo);
    if(!allowVideo()||!('IntersectionObserver' in window)){return;}
    observer=new IntersectionObserver(function(entries){
      entries.forEach(function(entry){if(entry.isIntersecting){startVideo(entry.target);}else{stopVideo(entry.target);}});
    },{rootMargin:'120px'});
    videos.forEach(function(video){observer.observe(video);});
  }
  if(document.readyState==='complete'){observeVideos();}
  else{addEventListener('load',observeVideos,{once:true});}
  desktop.addEventListener('change',observeVideos);
  reduced.addEventListener('change',observeVideos);
  document.addEventListener('visibilitychange',function(){if(document.hidden){videos.forEach(stopVideo);}else{observeVideos();}});
  // Native FormSubmit POST preserves CAPTCHA, automatic replies, and the AZAREL success return.
})();
