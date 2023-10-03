// Get all the news articles
const articles = document.querySelectorAll('article');

// Add a click event listener to each article
articles.forEach(article => {
  article.addEventListener('click', (event) => {
    // Prevent the default link behavior
    event.preventDefault();

    // Get the URL of the news article
    const url = article.querySelector('a').href;

    // Open the news article in a new tab
    window.open(url, '_blank');
  });
});
