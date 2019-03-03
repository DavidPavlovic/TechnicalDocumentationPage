const menu = document.querySelector('#menu');
const main = document.querySelector('main');
const drawer = document.querySelector('#navbar');
const links = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

function scrollIt(destination, duration = 200, easing = 'linear', callback) {
   const easings = {
    easeOutQuad(t) {
      return t * (2 - t);
    }
  };

  const start = window.pageYOffset;
  const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();
  const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
  const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
  const destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
  const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

  if ('requestAnimationFrame' in window === false) {
    window.scroll(0, destinationOffsetToScroll);
    if (callback) {
      callback();
    }
    return;
  }

  function scroll() {
    const now = 'now' in window.performance ? performance.now() : new Date().getTime();
    const time = Math.min(1, ((now - startTime) / duration));
    const timeFunction = easings[easing](time);
    window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));

    if (window.pageYOffset === destinationOffsetToScroll) {
      if (callback) {
        callback();
      }
      return;
    }

    requestAnimationFrame(scroll);
  }
  scroll();
  drawer.classList.remove('open');
}

function changeLinkState() {
  let index = sections.length;

  while(--index && window.scrollY + 50 < sections[index].offsetTop) {}

  links.forEach((link) => link.classList.remove('active'));
  links[index].classList.add('active');
}

changeLinkState();

menu.addEventListener('click', (e) => {
    drawer.classList.toggle('open');
    e.stopPropagation();
});

main.addEventListener('click', () => {
    drawer.classList.remove('open');
});

document.querySelector('.Introduction').addEventListener('click', (e) => {
  scrollIt(
    document.querySelector('#top'),
    300,
    'easeOutQuad',
    () => console.log(`Just finished scrolling to ${window.pageYOffset}px`)
  );
});

document.querySelector('.What_you_should_already_know').addEventListener('click', (e) => {
  scrollIt(
    document.querySelector('#What_you_should_already_know'),
    300,
    'easeOutQuad',
    () => console.log(`Just finished scrolling to ${window.pageYOffset}px`)
  );
});

document.querySelector('.JavaScript_and_Java').addEventListener('click', (e) => {
  scrollIt(
    document.querySelector('#JavaScript_and_Java'),
    300,
    'easeOutQuad',
    () => console.log(`Just finished scrolling to ${window.pageYOffset}px`)
  );
});

document.querySelector('.Hello_world').addEventListener('click', (e) => {
  scrollIt(
    document.querySelector('#Hello_world'),
    300,
    'easeOutQuad',
    () => console.log(`Just finished scrolling to ${window.pageYOffset}px`)
  );
});

document.querySelector('.Variables').addEventListener('click', (e) => {
  scrollIt(
    document.querySelector('#Variables'),
    300,
    'easeOutQuad',
    () => console.log(`Just finished scrolling to ${window.pageYOffset}px`)
  );
});

document.querySelector('.Declaring_variables').addEventListener('click', (e) => {
  scrollIt(
    document.querySelector('#Declaring_variables'),
    300,
    'easeOutQuad',
    () => console.log(`Just finished scrolling to ${window.pageYOffset}px`)
  );
});

document.querySelector('.Variable_scope').addEventListener('click', (e) => {
  scrollIt(
    document.querySelector('#Variable_scope'),
    300,
    'easeOutQuad',
    () => console.log(`Just finished scrolling to ${window.pageYOffset}px`)
  );
});

document.querySelector('.Global_variables').addEventListener('click', (e) => {
  scrollIt(
    document.querySelector('#Global_variables'),
    300,
    'easeOutQuad',
    () => console.log(`Just finished scrolling to ${window.pageYOffset}px`)
  );
});

document.querySelector('.Constants').addEventListener('click', (e) => {
  scrollIt(
    document.querySelector('#Constants'),
    300,
    'easeOutQuad',
    () => console.log(`Just finished scrolling to ${window.pageYOffset}px`)
  );
});

document.querySelector('.Data_types').addEventListener('click', (e) => {
  scrollIt(
    document.querySelector('#Data_types'),
    300,
    'easeOutQuad',
    () => console.log(`Just finished scrolling to ${window.pageYOffset}px`)
  );
});

document.querySelector('.If_else_statement').addEventListener('click', (e) => {
  scrollIt(
    document.querySelector('#If_else_statement'),
    300,
    'easeOutQuad',
    () => console.log(`Just finished scrolling to ${window.pageYOffset}px`)
  );
});

document.querySelector('.While_statement').addEventListener('click', (e) => {
  scrollIt(
    document.querySelector('#While_statement'),
    300,
    'easeOutQuad',
    () => console.log(`Just finished scrolling to ${window.pageYOffset}px`)
  );
});

document.querySelector('.Function_declarations').addEventListener('click', (e) => {
  scrollIt(
    document.querySelector('#Function_declarations'),
    300,
    'easeOutQuad',
    () => console.log(`Just finished scrolling to ${window.pageYOffset}px`)
  );
});

document.querySelector('.Reference').addEventListener('click', (e) => {
  scrollIt(
    document.querySelector('#Reference'),
    300,
    'easeOutQuad',
    () => console.log(`Just finished scrolling to ${window.pageYOffset}px`)
  );
});

window.addEventListener('scroll', changeLinkState);