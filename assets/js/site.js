(function(){
  // nav scroll border
  var nav=document.getElementById('nav');
  if(nav){ var onS=function(){ nav.classList.toggle('scrolled', window.scrollY>20); }; addEventListener('scroll',onS); onS(); }
  // mobile menu
  var toggle=document.getElementById('navToggle'), links=document.getElementById('navLinks');
  if(toggle&&links){
    toggle.addEventListener('click',function(){ var o=links.classList.toggle('open'); toggle.setAttribute('aria-expanded',o); });
    links.querySelectorAll('a').forEach(function(a){ a.addEventListener('click',function(){ links.classList.remove('open'); toggle.setAttribute('aria-expanded',false); }); });
  }
  // active nav (match current file name)
  var here=location.pathname.split('/').pop(); if(here==='') here='index.html';
  document.querySelectorAll('.nav-links a[href]').forEach(function(a){
    var t=a.getAttribute('href').split('/').pop();
    if(t===here) a.setAttribute('aria-current','page');
  });
  // year
  document.querySelectorAll('[data-year]').forEach(function(el){ el.textContent=new Date().getFullYear(); });
  // contact form graceful degrade (Formspree-ready)
  var form=document.getElementById('contactForm');
  if(form){ form.addEventListener('submit', function(e){
    var endpoint=form.getAttribute('action')||'';
    var configured = endpoint && endpoint.indexOf('PASTE_YOUR')===-1;
    var s=form.querySelector('.form-status'), b=form.querySelector('button[type="submit"]'), bt=b?b.textContent:'';
    if(!configured){
      e.preventDefault();
      if(s){ s.textContent='Form not connected yet. Paste your Formspree endpoint into the form action to go live.'; s.classList.add('show'); }
      if(b){ b.textContent='Message prepared'; }
      setTimeout(function(){ if(b) b.textContent=bt; if(s) s.classList.remove('show'); form.reset(); }, 4500);
      return;
    }
    e.preventDefault();
    if(b) b.textContent='Sending…';
    fetch(endpoint,{method:'POST',body:new FormData(form),headers:{'Accept':'application/json'}}).then(function(r){
      if(r.ok){ form.reset(); if(s){ s.textContent='Thank you. It is through, and we will be in touch directly.'; s.classList.add('show'); } if(b) b.textContent='Sent'; }
      else { throw new Error('bad'); }
    }).catch(function(){ if(s){ s.textContent='Something went wrong. Please email info@azarelsa.com directly.'; s.classList.add('show'); } if(b) b.textContent=bt; });
  }); }
})();
