const menuBtn=document.getElementById('menuBtn'), sidebar=document.getElementById('sidebar'), themeBtn=document.getElementById('themeBtn');
menuBtn?.addEventListener('click',()=>sidebar.classList.toggle('open'));
document.querySelectorAll('.nav-link').forEach(a=>a.addEventListener('click',()=>sidebar?.classList.remove('open')));
const saved=localStorage.getItem('mi-theme'); if(saved==='light') document.body.classList.add('light');
themeBtn?.addEventListener('click',()=>{document.body.classList.toggle('light');localStorage.setItem('mi-theme',document.body.classList.contains('light')?'light':'dark');});
const links=[...document.querySelectorAll('.nav-link')]; const sections=links.map(x=>document.querySelector(x.getAttribute('href'))).filter(Boolean);
const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){links.forEach(l=>l.classList.remove('active')); const a=links.find(l=>l.getAttribute('href')==='#'+e.target.id);a?.classList.add('active');}}),{rootMargin:'-35% 0px -55% 0px'}); sections.forEach(s=>obs.observe(s));
