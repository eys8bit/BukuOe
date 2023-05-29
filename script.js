document.addEventListener('DOMContentLoaded', function() {
  const articleLinks = document.querySelectorAll('.article-link');
  const articleContent = document.querySelector('#articleContent');

  articleLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();

      const articleUrl = link.getAttribute('data-article');

      fetch(articleUrl)
        .then(response => response.text())
        .then(content => {
          articleContent.innerHTML = content;
        })
        .catch(error => {
          console.error('Error:', error);
        });
    });
  });
});
