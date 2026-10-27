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
  // The contact form posts directly to FormSubmit for its spam check and confirmation.
})();
