function fetchPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
            const postsContainer = document.getElementById('lista-de-posts');
            const mainTitle = document.getElementById('main-title');
            mainTitle.textContent = `Total de Posts: ${posts.length}`;

            posts.forEach((post, index) => {
                const postElement = document.createElement('div');
                postElement.classList.add('post');
                postElement.innerHTML = `
            <h2>Post ${index + 1}: ${post.title}</h2>
            <p>${post.body}</p>
          `;
                postsContainer.appendChild(postElement);
            });
        })
        .catch(error => console.log(error));
}

fetchPosts();
