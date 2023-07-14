const links = document.querySelectorAll('a');

links.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('ativa');
  } else {
    link.classList.remove('ativa');
  }
});
