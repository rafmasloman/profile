const main = () => {
  const aboutLink = document.querySelector('.about-link');
  const btn = document.querySelector('.btn');

  const scroll = (top) => {
    window.scrollTo({
      top,
      behavior: 'smooth',
    });
  };
  aboutLink.addEventListener('click', (e) => {
    e.preventDefault();
    scroll(400);
  });

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    scroll(400);
  });
};

main();
