document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (localStorage.getItem(username)) {
        alert("Usuário já cadastrado.");
    } else {
        localStorage.setItem(username, password);
        alert("Usuário cadastrado com sucesso!");
        location.href = "(1) home.html";
    }


    document.getElementById('userForm').reset();
  });
  


  function Login() {
    location.href = "(0) Login.html";
}

document.getElementById('Login').addEventListener('click', Login);
