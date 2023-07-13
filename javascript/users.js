function fetchUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            const usersContainer = document.getElementById('lista-de-users');
            const mainUser = document.getElementById('main-users');
            mainUser.textContent = `Total de Usuarios: ${users.length}`;

            users.forEach(user => {
                const userElement = document.createElement('div');
                userElement.classList.add('name');
                userElement.innerHTML = `
            <h2>Nome: ${user.name}</h2>
          `;
                usersContainer.appendChild(userElement);
            });
        })
        .catch(error => console.log(error));
}

fetchUsers();
