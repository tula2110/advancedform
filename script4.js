function validateForm() {
    // Get form values
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const gender = document.querySelector('input[name="gender"]:checked');

    // Clear previous error messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';
    document.getElementById('genderError').textContent = '';

    let isValid = true;

    // Validate name
    if (fullName.length < 3) {
        document.getElementById('nameError').textContent = 'There must be at least 3 characters in the name.';
        isValid = false;
    }

    // Validate email
    if (!email.includes('@')) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    // Validate password
    if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters long.';
        isValid = false;
    }

    // Validate confirm password
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
        isValid = false;
    }

    // Validate gender
    if (!gender) {
        document.getElementById('genderError').textContent = 'Please select your gender.';
        isValid = false;
    }

    if (isValid) {
        alert(`Registration Successful!\nName: ${fullName}\nEmail: ${email}\nGender: ${gender.value}`);
    }
}
