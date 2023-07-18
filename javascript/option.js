fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((posts) => {
    const selectPosts = document.getElementById("select-posts");

    posts.forEach((post) => {
      const option = document.createElement("option");
      option.value = post.id;
      option.text = post.title;
      selectPosts.appendChild(option);
    });
  })
  .catch((error) => console.log(error));
