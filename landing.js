'use strict';
// Marketing-only concept: no accounts, messaging, tracking or personal-data collection.
const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#site-nav');
function setMenu(open) {
  menu.classList.toggle('is-open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  menuButton.querySelector('use').setAttribute('href', open ? '#close' : '#menu');
}
menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
menu.addEventListener('click', (event) => { if (event.target.closest('a')) setMenu(false); });
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    menuButton.focus();
  }
});
window.matchMedia('(min-width: 801px)').addEventListener('change', e => { if (e.matches) setMenu(false); });

// A single button group controls the three illustrative phone states.
const previews = {
  discover: ['People, not profiles.', "Get to know someone's interests before breaking the ice."],
  communities: ['Your kind of people.', 'Find a corner of the universe for your favorite things.'],
  messages: ['Only when mutual.', 'A conversation should start with two people saying yes.']
};
const previewButtons = [...document.querySelectorAll('[data-preview]')];
const previewScreens = [...document.querySelectorAll('[data-screen]')];
const stageTitle = document.querySelector('#stage-title');
const stageDesc = document.querySelector('#stage-desc');
function selectPreview(name) {
  if (!Object.hasOwn(previews, name)) return;
  previewButtons.forEach(button => {
    const active = button.dataset.preview === name;
    button.setAttribute('aria-pressed', String(active));
    button.classList.toggle('active', active);
  });
  previewScreens.forEach(screen => { screen.hidden = screen.dataset.screen !== name; });
  stageTitle.textContent = previews[name][0];
  stageDesc.textContent = previews[name][1];
}
previewButtons.forEach(button => button.addEventListener('click', () => selectPreview(button.dataset.preview)));

const articles = {
  shared: {
    category: 'CONNECTION · THE MATCHSPHERE JOURNAL',
    title: 'Why your favorite things make the best icebreakers',
    paragraphs: [
      'A shared interest is more than a tag on a profile. It gives two people an easy, natural place to start talking. You already have a question to ask and a story to share.',
      'Maybe it is the feeling of hearing your favorite song live, why you never miss a race weekend, or which film you rewatch when you need comfort. Curiosity makes room for real personality.',
      'Of course, liking the same team does not guarantee romantic compatibility. Look for mutual respect, similar intentions, and the willingness to listen as well as common interests.'
    ]
  },
  intentions: {
    category: 'INTENTIONS · THE MATCHSPHERE JOURNAL',
    title: 'The beauty of saying what you want',
    paragraphs: [
      'Dating feels clearer when both people can state their intentions without guessing. Whether someone is looking for something long-term, something casual, or consensual non-monogamy, honesty protects everyone’s time and boundaries.',
      'Relationship status is just as important as relationship goals. Being open about existing commitments and preferences is part of respecting the people you meet.',
      'Your feelings and goals can change. A thoughtful platform should let you update them and make it easy to step back from conversations that no longer feel right.'
    ]
  },
  pace: {
    category: 'WELLBEING · THE MATCHSPHERE JOURNAL',
    title: 'Finding your pace in modern dating',
    paragraphs: [
      'There is no single right speed for getting to know someone. Some people like a long conversation before meeting; others prefer a shorter exchange. What matters is that both people feel comfortable.',
      'Notifications, match numbers, and response pressure can create unnecessary stress. Taking breaks and setting limits are normal and healthy choices.',
      'Connection works best with curiosity and consent. You never owe someone a reply, and you can always decline a request or end a conversation respectfully.'
    ]
  }
};
const dialog = document.querySelector('#article-dialog');
let returnFocus = null;
document.querySelectorAll('[data-article]').forEach(button => button.addEventListener('click', () => {
  const article = articles[button.dataset.article];
  if (!article) return;
  returnFocus = button;
  document.querySelector('#dialog-category').textContent = article.category;
  document.querySelector('#dialog-title').textContent = article.title;
  const paragraphs = article.paragraphs.map(text => {
    const p = document.createElement('p');
    p.textContent = text;
    return p;
  });
  document.querySelector('#dialog-body').replaceChildren(...paragraphs);
  dialog.showModal();
}));
dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
dialog.addEventListener('close', () => returnFocus?.focus());
document.querySelector('#year').textContent = new Date().getFullYear();

// No hidden content on browsers without JavaScript or IntersectionObserver.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reducedMotion && 'IntersectionObserver' in window && window.innerWidth > 1024) {
  document.documentElement.classList.add('js-motion');
  const targets = document.querySelectorAll('.principle,.interest-card,.journal-card');
  targets.forEach(element => element.classList.add('fade-in'));
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {threshold: 0.12});
  targets.forEach(element => observer.observe(element));
}
// Paper reveal: open automatically in view, then let touch, mouse and keyboard toggle it.
const paper = document.querySelector('.paper-reveal');
if (paper) {
  const paperMotion = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const setFolded = folded => {
    paper.classList.toggle('is-folded', folded);
    paper.setAttribute('aria-pressed', String(folded));
    paper.setAttribute('aria-label', folded ? 'Unfold the illustrated portrait' : 'Fold the illustrated portrait into a paper ball');
  };
  if (paperMotion && 'IntersectionObserver' in window) {
    setFolded(true);
    const observer = new IntersectionObserver((entries) => {
      if (entries.some(entry => entry.isIntersecting)) {
        observer.disconnect();
        setTimeout(() => setFolded(false), 420);
      }
    }, {threshold: 0.25});
    observer.observe(paper);
  }
  paper.addEventListener('click', () => setFolded(!paper.classList.contains('is-folded')));
}
