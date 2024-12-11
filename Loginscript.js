const accounts = [
    { username: "Official_progmohamed", password: "zXv7*L(P3m" },
    { username: "runederune", password: "po2m#rKK0*"  },
    { username: "teunemansio" , password: "0K7h3g@t9" }
];

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const messageDiv = document.getElementById("message");

    // Controleer of de combinatie van gebruikersnaam en wachtwoord klopt
    const account = accounts.find(acc => acc.username === username && acc.password === password);

    if (account) {
        messageDiv.textContent = "Login Succesful!";
        messageDiv.style.color = "green";
        // Hier kun je de gebruiker doorsturen naar een andere pagina
       window.location.href= username +"MATCH.html" ; 
    }  else {
        messageDiv.textContent = "Inorrect password or username!";
        messageDiv.style.color = "red";
    }
});
