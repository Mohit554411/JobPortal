if (window.location.pathname === '/register') {
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
                    if (result.success) {
                        alert(result.success);
                        window.location.href = '/login';
                    }
                    else if (result.error)
                        alert(result.error);
                })
                .catch(error => {
                    console.error('Error:', error);
                    // Handle error, e.g., show an error message
                });
        }
    })
}
if(window.location.pathname === '/jobs'){
    const jobCard = document.querySelectorAll('.jobCard');
    jobCard.forEach(job=>{
        job.addEventListener('click',e=>{
            const jobId = e.currentTarget.dataset.jobId;
            window.location.href = `/jobDetails?id=${jobId}`;
        })
    })
}