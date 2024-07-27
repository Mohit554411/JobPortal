// window.onbeforeunload = () => {
//     const cookies = document.cookie.split(";");
//     for (let i = 0; i < cookies.length; i++) {
//         const cookie = cookies[i];
//         const eqPos = cookie.indexOf("=");
//         const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
//         document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
//     }

// }
const jobCategories = [
    "Software Development",
    "IT & Network Administration",
    "Cybersecurity",
    "Data Science & Analytics",
    "Cloud Computing",
    "AI & Machine Learning",
    "Web Development",
    "Mobile App Development",
    "IT Support & Help Desk",
    "Project Management"
];
const jobDesignation = {
    "Software Development": [
        "Software Developer",
        "Frontend Developer",
        "Backend Developer",
        "Full Stack Developer",
        "DevOps Engineer",
        "Embedded Developer",
        "Game Developer",
        "Mobile Developer",
        "Web Developer",
        "UI/UX Designer"
    ],
    "IT & Network Administration": [
        "Network Administrator",
        "System Administrator",
        "Network Architect",
        "IT Manager",
        "IT Director",
        "IT Support Specialist",
        "IT Technician",
        "IT Analyst",
        "IT Coordinator",
        "IT Consultant"
    ],
    "Cybersecurity": [
        "Security Analyst",
        "Security Engineer",
        "Security Architect",
        "Security Administrator",
        "Security Consultant",
        "Security Specialist",
        "Security Manager",
        "Security Director",
        "Security Auditor",
        "Security Officer"
    ],
    "Data Science & Analytics": [
        "Data Scientist",
        "Data Analyst",
        "Data Engineer",
        "Data Architect",
        "Data Modeler",
        "Data Administrator",
        "Data Manager",
        "Data Consultant",
        "Data Specialist",
        "Data Coordinator"
    ],
    "Cloud Computing": [
        "Cloud Engineer",
        "Cloud Architect",
        "Cloud Developer",
        "Cloud Consultant",
        "Cloud Specialist",
        "Cloud Administrator",
        "Cloud Manager",
        "Cloud Coordinator",
        "Cloud Analyst",
        "Cloud Technician"
    ],
    "AI & Machine Learning": [
        "AI Engineer",
        "AI Developer",
        "AI Specialist",
        "AI Architect",
        "AI Analyst",
        "AI Consultant",
        "AI Coordinator",
        "AI Technician",
        "AI Manager",
        "AI Director"
    ],
    "Web Development": [
        "Web Developer",
        "Frontend Developer",
        "Backend Developer",
        "Full Stack Developer",
        "Web Designer",
        "Web Administrator",
        "Web Manager",
        "Web Coordinator",
        "Web Analyst",
        "Web Consultant"
    ],
    "Mobile App Development": [
        "Mobile Developer",
        "Android Developer",
        "iOS Developer",
        "Mobile Architect",
        "Mobile Designer",
        "Mobile Administrator",
        "Mobile Manager",
        "Mobile Coordinator",
        "Mobile Analyst",
        "Mobile Consultant"
    ],
    "IT Support & Help Desk": [
        "IT Support Specialist",
        "IT Technician",
        "IT Analyst",
        "IT Coordinator",
        "IT Consultant",
        "IT Administrator",
        "IT Manager",
        "IT Director",
        "IT Architect",
        "IT Auditor"
    ],
    "Project Management": [
        "Project Manager",
        "Project Coordinator",
        "Project Director",
        "Project Analyst",
        "Project Consultant",
        "Project Specialist",
        "Project Administrator",
        "Project Architect",
        "Project Auditor",
        "Project Officer"
    ]
}
const skills = {
    "Software Development": [
        "Java",
        "Python",
        "JavaScript",
        "C++",
        "C#",
        "Ruby",
        "PHP",
        "Swift",
        "Kotlin",
        "Dart"
    ],
    "IT & Network Administration": [
        "Network Security",
        "Firewall Management",
        "Network Configuration",
        "Network Monitoring",
        "Network Troubleshooting",
        "Network Optimization",
        "Network Administration",
        "Network Architecture",
        "Network Design",
        "Network Implementation"
    ],
    "Cybersecurity": [
        "Security Analysis",
        "Security Engineering",
        "Security Architecture",
        "Security Administration",
        "Security Monitoring",
        "Security Troubleshooting",
        "Security Optimization",
        "Security Management",
        "Security Design",
        "Security Implementation"
    ],
    "Data Science & Analytics": [
        "Data Analysis",
        "Data Engineering",
        "Data Architecture",
        "Data Administration",
        "Data Monitoring",
        "Data Troubleshooting",
        "Data Optimization",
        "Data Management",
        "Data Design",
        "Data Implementation"
    ],
    "Cloud Computing": [
        "Cloud Engineering",
        "Cloud Architecture",
        "Cloud Development",
        "Cloud Administration",
        "Cloud Monitoring",
        "Cloud Troubleshooting",
        "Cloud Optimization",
        "Cloud Management",
        "Cloud Design",
        "Cloud Implementation"
    ],
    "AI & Machine Learning": [
        "AI Engineering",
        "AI Development",
        "AI Architecture",
        "AI Administration",
        "AI Monitoring",
        "AI Troubleshooting",
        "AI Optimization",
        "AI Management",
        "AI Design",
        "AI Implementation"
    ],
    "Web Development": [
        "Web Development",
        "Frontend Development",
        "Backend Development",
        "Full Stack Development",
        "Web Design",
        "Web Administration",
        "Web Monitoring",
        "Web Troubleshooting",
        "Web Optimization",
        "Web Implementation"
    ],
    "Mobile App Development": [
        "Mobile Development",
        "Android Development",
        "iOS Development",
        "Mobile Design",
        "Mobile Administration",
        "Mobile Monitoring",
        "Mobile Troubleshooting",
        "Mobile Optimization",
        "Mobile Management",
        "Mobile Implementation"
    ],
    "IT Support & Help Desk": [
        "IT Support",
        "IT Troubleshooting",
        "IT Monitoring",
        "IT Optimization",
        "IT Administration",
    ],
    "Project Management": [
        "Project Management",
        "Project Coordination",
        "Project Monitoring",
        "Project Optimization",
        "Project Administration",
        "Project Troubleshooting",
        "Project Design",
        "Project Implementation"
    ]
}
let seletedSkills = [];
function getCookie(name) {
    let cookieArray = document.cookie.split(';'); // Split the cookie string into an array
    for (let i = 0; i < cookieArray.length; i++) {
        let cookiePair = cookieArray[i].split('='); // Split each individual cookie into a key/value pair
        if (name == cookiePair[0].trim()) {
            // Decode the cookie value and return
            return decodeURIComponent(cookiePair[1]);
        }
    }
    // Return null if the cookie is not found
    return null;
}
let userEmail = getCookie('userEmail');
if (userEmail) {
    const profile = document.querySelector('.profileContainer');
    const profileDetails = document.querySelector('.profileDetails');
    const userName = profileDetails.firstElementChild.textContent;
    const userSortname = userName.split(' ')[0].charAt(0) + userName.split(' ')[1].charAt(0);
    profile.firstElementChild.textContent = userSortname.toUpperCase();
    profile.addEventListener('click', (e) => {
        profileDetails.classList.toggle('hidden');
    });
}

if (window.location.pathname === '/register') {
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const form = document.querySelector('.formCard');
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        if (password.value !== confirmPassword.value) {
            alert('Password does not match')
        }
        else {
            const formData = document.querySelector('.formCard');
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
if (window.location.pathname === '/jobs') {
    const jobCard = document.querySelectorAll('.jobCard');
    jobCard.forEach(job => {
        job.addEventListener('click', e => {
            const jobId = e.currentTarget.dataset.jobId;
            window.location.href = `/jobDetails?id=${jobId}`;
        })
    })
}
if (window.location.pathname === '/postJobs') {
    seletedSkills = [];
    postJobAndUpdateJObData();
    const postJobForm = document.querySelector('.postJobForm');
    postJobForm.addEventListener('submit', e => {
        e.preventDefault();
        const data = new FormData(postJobForm);
        // const data = Object.fromEntries(formData.entries());
        data.delete('skills');
        data.append('skills', JSON.stringify(seletedSkills));
        fetch('./postJobs', {
            method: 'POST',
            body: data
        }).then(res => res.json())
            .then(result => {
                if (result.success) {
                    alert(result.success);
                    window.location.href = '/jobs';
                }
                else if (result.error)
                    alert(result.error);
            })
            .catch(error => {
                console.error('Error:', error);
                // Handle error, e.g., show an error message
            });
    });
}
if (window.location.pathname === '/jobDetails') {
    function deleteJob(job) {
        const jobData = JSON.parse(job);
        if (userEmail === jobData.postedBy) {
            const consfirm = confirm('Are you sure you want to delete this job?');
            if (consfirm) {
                fetch(`./deleteJob?id=${jobData.id}`, {
                    method: 'DELETE'
                }).then(res => res.json())
                    .then(result => {
                        if (result.success) {
                            alert(result.success);
                            window.location.href = '/jobs';
                        }
                        else if (result.error)
                            alert(result.error);
                    })
                    .catch(error => {
                        console.error('Error:', error);
                    })
            }
        }
        else {
            alert('You are not authorized to delete this job');
        }
    }
    function updateJob(job) {
        const jobData = JSON.parse(job);
        if (userEmail === jobData.postedBy) {
            const consfirm = confirm('Are you sure you want to update this job?');
            if (consfirm) {
                sessionStorage.setItem('job', JSON.stringify(jobData));
                window.location.href = '/updateJob';
            }
        }
        else {
            alert('You are not authorized to update this job');
        }
    }
}
if(window.location.pathname === '/updateJob'){
    const title = document.querySelector('h2');
    const button = document.querySelector('.postJobForm button');
    const logo = document.getElementById('logo');
    logo.remove();
    button.textContent = 'Update Job';
    title.textContent = 'Update Job';
    seletedSkills = [];
    const jobData = JSON.parse(sessionStorage.getItem('job'));
    if(jobData){
        postJobAndUpdateJObData();
        const postJobForm = document.querySelector('.postJobForm');
        postJobForm.jobCategory.value = jobData.jobCategory;
        postJobForm.jobDesignation.value = jobData.jobDesignation;
        postJobForm.jobLocation.value = jobData.jobLocation;
        postJobForm.companyName.value = jobData.companyName;
        postJobForm.experince.value = jobData.workExperience;
        postJobForm.opening.value = jobData.numberOfopenings;
        postJobForm.salary.value = jobData.salary;
        postJobForm.applyBy.value = jobData.applyBy;
        seletedSkills = jobData.skillsRequired;
        const selectedSkillDiv = document.querySelector('.selectedSkill');
        seletedSkills.forEach(skill => {
            const selectedSkill = document.createElement('span');
            selectedSkill.textContent = skill;
            selectedSkill.className = 'selected';
            selectedSkill.addEventListener('click', e => {
                seletedSkills = seletedSkills.filter(skill => skill !== e.target.textContent);
                selectedSkillDiv.removeChild(e.target);
            });
            selectedSkillDiv.appendChild(selectedSkill);
        });
        postJobForm.addEventListener('submit', e => {
            e.preventDefault();
            const data = new FormData(postJobForm);
            data.delete('skills');
            data.append('skills', JSON.stringify(seletedSkills));
            fetch(`./updateJob?id=${jobData.id}`, {
                method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                },
                body: JSON.stringify(Object.fromEntries(data.entries()))
            }).then(res => res.json())
                .then(result => {
                    if (result.success) {
                        alert(result.success);
                        window.location.href = '/jobs';
                    }
                    else if (result.error)
                        alert(result.error);
                })
                .catch(error => {
                    console.error('Error:', error);
                    // Handle error, e.g., show an error message
                });
        });
    }
}

function postJobAndUpdateJObData(){
    const jobCategory = document.getElementById('jobCategory');
    const jobSkills = document.getElementById('skills');
    const selectedSkillDiv = document.querySelector('.selectedSkill');
    jobCategories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        jobCategory.appendChild(option);
    });
    jobCategory.addEventListener('change', e => {
        const jobDesignationSelect = document.getElementById('jobDesignation');
        jobDesignationSelect.innerHTML = '';
        jobDesignation[e.target.value].forEach(designation => {
            const option = document.createElement('option');
            option.value = designation;
            option.textContent = designation;
            jobDesignationSelect.appendChild(option);
        })

        jobSkills.innerHTML = '';
        seletedSkills = [];
        selectedSkillDiv.innerHTML = '';
        skills[e.target.value].forEach(skill => {
            const option = document.createElement('option');
            option.value = skill;
            option.textContent = skill;
            option.className = 'skills';
            jobSkills.appendChild(option);
        })
    });
    jobSkills.addEventListener('change', e => {
        if (!seletedSkills.includes(e.target.value)) {
            seletedSkills.push(e.target.value);
            const selectedSkill = document.createElement('span');
            selectedSkill.textContent = e.target.value;
            selectedSkill.className = 'selected';
            selectedSkill.addEventListener('click', e => {
                seletedSkills = seletedSkills.filter(skill => skill !== e.target.textContent);
                selectedSkillDiv.removeChild(e.target);
            });
            selectedSkillDiv.appendChild(selectedSkill);
        }
    });
}