async function encrypt(text, key) {
    try {
        let result = '';
        for (let i = 0; i < text.length; i++) {
            const keyChar = key.charCodeAt(i % key.length);
            const textChar = text.charCodeAt(i);
            const encryptedChar = keyChar ^ textChar;
            result += String.fromCharCode(encryptedChar);
        }
        return btoa(result);
    } catch (error) {
        throw console.error("Encryption error:", error);
    }
}

async function validateLogin(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const key = "it4med@education.ru";
    const encryptedUsername = await encrypt(username, key);
    const encryptedPassword = await encrypt(password, key);

    if (
        encryptedUsername === 'S1NCck1JSjg4a1l1ZGs=' &&
        encryptedPassword === 'TVM9MT0rclhfRl4='
    ) {
        window.location.href = "home.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
}

document.getElementById("loginForm").addEventListener("submit", validateLogin);
