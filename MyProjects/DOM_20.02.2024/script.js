document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('registrationForm');
    const output = document.getElementById('output');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        
        const login = form.login.value.trim();
        const password = form.password.value.trim();
        const confirmPassword = form.confirmPassword.value.trim();
        const gender = form.gender.value;
        const specialization = form.specialization.value.trim();
        const position = form.position.value.trim();
        
        let errorMessage = '';

        if (!login || !password || !confirmPassword || !gender || !specialization || !position) {
            errorMessage = 'All fields must be filled.';
        } else if (password.length < 3 || password.length > 10) {
            errorMessage = 'Password length must be between 3 and 10 characters.';
        } else if (password !== confirmPassword) {
            errorMessage = 'Password and confirmation do not match.';
        }

        if (errorMessage) {
            alert(errorMessage);
        } else {
            const newWindow = window.open('./output.html', '_blank');
            newWindow.document.write('<html><head><title>Form Data</title></head><body>');
            newWindow.document.write('<table border="1"><tr><th>Field</th><th>Value</th></tr>');
            newWindow.document.write(`<tr><td>Login</td><td>${login}</td></tr>`);
            newWindow.document.write(`<tr><td>Password</td><td>${password}</td></tr>`);
            newWindow.document.write(`<tr><td>Gender</td><td>${gender}</td></tr>`);
            newWindow.document.write(`<tr><td>Specialization</td><td>${specialization}</td></tr>`);
            newWindow.document.write(`<tr><td>Position</td><td>${position}</td></tr>`);
            newWindow.document.write('</table></body></html>');
            newWindow.document.close();
        }
    });
});
