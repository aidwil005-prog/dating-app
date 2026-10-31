'use strict';
// MatchSphere is a concept: no backend, no submitted personal information.
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('#mobile-menu');
function setMenu(open){
  menuToggle.setAttribute('aria-expanded',String(open));
  menuToggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');
  mobileMenu.hidden=!open;
  menuToggle.querySelector('use').setAttribute('href',open?'#i-close':'#i-menu');
}
menuToggle.addEventListener('click',()=>setMenu(menuToggle.getAttribute('aria-expanded')!=='true'));
mobileMenu.addEventListener('click',event=>{if(event.target.closest('a'))setMenu(false)});
window.addEventListener('keydown',event=>{if(event.key==='Escape'&&menuToggle.getAttribute('aria-expanded')==='true'){setMenu(false);menuToggle.focus()}});
window.matchMedia('(min-width:801px)').addEventListener('change',event=>{if(event.matches)setMenu(false)});
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if('IntersectionObserver' in window&&!reducedMotion){
  document.documentElement.classList.add('js-motion');
  const observer=new IntersectionObserver((entries)=>{
    for(const entry of entries)if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}
  },{threshold:.12});
  document.querySelectorAll('.reveal').forEach(element=>observer.observe(element));
}else document.querySelectorAll('.reveal').forEach(element=>element.classList.add('visible'));
// Complete the duplicate set so the testimonial loop is seamless at every width.
const marquee=document.querySelector('.marquee-track');
if(marquee){
  marquee.querySelectorAll('.quote-card[aria-hidden]').forEach(card=>card.remove());
  marquee.querySelectorAll('.quote-card').forEach(card=>{
    const copy=card.cloneNode(true);copy.setAttribute('aria-hidden','true');marquee.append(copy);
  });
  document.documentElement.classList.add('marquee-ready');
}
const carousel=document.querySelector('#article-carousel');
const previous=document.querySelector('#blog-prev');
const next=document.querySelector('#blog-next');
function scrollArticles(direction){
  const first=carousel.querySelector('.article-card');
  carousel.scrollBy({left:direction*(first.getBoundingClientRect().width+20),behavior:reducedMotion?'instant':'smooth'});
}
previous.addEventListener('click',()=>scrollArticles(-1));
next.addEventListener('click',()=>scrollArticles(1));
function updateCarouselButtons(){
  previous.disabled=carousel.scrollLeft<5;
  next.disabled=carousel.scrollLeft+carousel.clientWidth>=carousel.scrollWidth-5;
}
carousel.addEventListener('scroll',updateCarouselButtons,{passive:true});
window.addEventListener('resize',updateCarouselButtons);updateCarouselButtons();
const articles={
  shared:{category:'CONNECTION',title:'Why your favorite things make the best icebreakers',paras:[
    'A shared interest is more than a tag on a profile. It gives two people an easy, natural place to start talking. You already have a question to ask and a story to share.',
    'That could mean the feeling of hearing your favorite song live, why you never miss a race weekend, or which film you rewatch when you need comfort. Curiosity makes room for real personality.',
    'Of course, liking the same team does not guarantee romantic compatibility. Look for mutual respect, similar intentions and a willingness to listen as well as common interests.'
  ]},
  intentions:{category:'INTENTIONS',title:'The beauty of saying what you want',paras:[
    'Dating feels clearer when both people can state their intentions without guessing. Looking for something long-term, something casual, or consensual non-monogamy? Honesty protects everyone’s time and boundaries.',
    'Relationship status is just as important as relationship goals. Being open about existing commitments and preferences is part of respecting the people you meet.',
    'Your feelings and goals can change. A thoughtful platform should let you update them and make it easy to step back from conversations that no longer feel right.'
  ]},
  pace:{category:'WELLBEING',title:'Finding your pace in modern dating',paras:[
    'There is no single right speed for getting to know someone. Some people like a long conversation before meeting; others prefer a shorter exchange and a planned date. What matters is that both people feel comfortable.',
    'Notifications, match numbers and response pressure can create unnecessary stress. Taking breaks and setting limits are normal and healthy choices.',
    'Connection works best with curiosity and consent. You never owe someone a reply, and you can always decline a request or end a conversation respectfully.'
  ]},
  communities:{category:'COMMUNITIES',title:'Why niche communities help break the ice',paras:[
    'A community gives you a topic before you need an introduction. F1 debates, favorite Barcelona memories, gaming nights or film recommendations are all natural conversation starters.',
    'Being part of the same group does not mean that romance is expected. Friendliness, boundaries and explicit interest still matter.',
    'The aim is to create spaces where adults can explore what they enjoy and choose whether a new connection belongs in their world.'
  ]}
};
const dialog=document.querySelector('#article-dialog');
const articleTitle=document.querySelector('#dialog-title');
const articleCategory=document.querySelector('#dialog-category');
const articleBody=document.querySelector('#dialog-body');
let lastArticleButton=null;
document.querySelectorAll('[data-article]').forEach(button=>button.addEventListener('click',()=>{
  const a=articles[button.dataset.article];if(!a)return;
  lastArticleButton=button;
  articleCategory.textContent=a.category;
  articleTitle.textContent=a.title;
  articleBody.replaceChildren(...a.paras.map(paragraph=>{const node=document.createElement('p');node.textContent=paragraph;return node}));
  dialog.showModal();
}));
dialog.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close()});
dialog.addEventListener('close',()=>lastArticleButton?.focus());
