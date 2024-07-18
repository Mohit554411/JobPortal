const submit = document.querySelector('.submit')
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

submit.addEventListener('click', (e) => {
    e.preventDefault()
    if (password.value !== confirmPassword.value) {
        alert('Password does not match')
    }
    else {
        const formData = document.querySelector('.formCard');
        console.log(new FormData(formData))
        const data = Object.fromEntries(new FormData(formData).entries())
        fetch('./register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.result == 'success') {
                    alert('Successfully registered')
                    window.location.href = '/login';
                }
                else if (result.result == 'alreadyExist')
                    alert('User already exist')
            })
            .catch(error => {
                console.error('Error:', error);
                // Handle error, e.g., show an error message
            });
    }

})