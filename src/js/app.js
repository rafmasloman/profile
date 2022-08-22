const main = () => {
  const aboutLink = document.querySelector('.about-link');

  aboutLink.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 400,
      behavior: 'smooth',
    });
  });
};

main();
