fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    const selectUsers = document.getElementById("select-users");

    users.forEach((user) => {
      const option = document.createElement("option");
      option.value = user.id;
      option.text = user.name;
      selectUsers.appendChild(option);
    });
  })
  .catch((error) => console.Log(error));
