document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;
  
    const storedPassword = localStorage.getItem(loginUsername);
    
    if (storedPassword && storedPassword === loginPassword) {
        document.getElementById('message').innerText = "Login bem-sucedido!";
        location.href = "(1) home.html";
    } else {
        document.getElementById('message').innerText = "Usuário ou senha incorretos.";
    }
  
    document.getElementById('loginForm').reset();
});