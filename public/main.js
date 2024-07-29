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
    const userSortname = userName.split(' ')[0].charAt(0) + userName.split(' ')[1]?.charAt(0);
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
    document.addEventListener('DOMContentLoaded', () => {
        const jobListSection = document.querySelector('.jobListSection');
        const companyselect = document.getElementById('company');
        const locationselect = document.getElementById('location');
        const jobCategorySelect = document.getElementById('jobCategory');
        const jobDesignationSelect = document.getElementById('jobDesignation');
        const jobList = JSON.parse(document.getElementById('jobsData').value);
        let selectedCompany = 'all';
        let selectedLocation = 'all';
        let selectedJobCategory = 'all';
        let selectedJobDesignation = 'all';

        // Initial render of job list
        jobRender(jobList);

        // Function to render job cards
        function jobRender(jobList) {
            const jobCardsHTML = jobList.map(job => `
                <div class="jobCard" data-job-id='${job.id}' onclick="jobsDetails(${job.id})">
                    <header>
                        <div class="jobCard__header__content">
                            ${job.compnayLogo ?
                    `<img src="${job.compnayLogo}" alt="">` :
                    `<img src="/images/reactIcon.svg" alt="">`
                }
                            <div>
                                <h3>${job.jobCategory}</h3>
                                <p>${job.jobDesignation}</p>
                            </div>
                        </div>
                        <div>
                            <p>Posted ${job.jobPosted}</p>
                        </div>
                    </header>
                    <section>
                        <div class="jobDetails">
                            <img src="/images/rupeeIcon.svg" alt="">
                            <span>${job.salary}</span>
                        </div>
                        <div class="jobDetails">
                            <img src="/images/locationIcon.svg" alt="">
                            <span>${job.jobLocation}</span>
                        </div>
                        <div class="jobDetails">
                            ${job.skillsRequired.map(skill => `
                                <span class="skillsChip">${skill}</span>
                            `).join('')}
                        </div>
                    </section>
                </div>
            `).join('');
            jobListSection.innerHTML = jobCardsHTML;
        }



        // Populate select options
        function populateSelectOptions(selectElement, options) {
            options.forEach(optionValue => {
                const option = document.createElement('option');
                option.value = optionValue;
                option.text = optionValue;
                selectElement.appendChild(option);
            });
        }

        const companyNames = [...new Set(jobList.map(job => job.companyName))];
        const locations = [...new Set(jobList.map(job => job.jobLocation))];
        const jobCategories = [...new Set(jobList.map(job => job.jobCategory))];
        const jobDesignations = [...new Set(jobList.map(job => job.jobDesignation))];

        populateSelectOptions(companyselect, companyNames);
        populateSelectOptions(locationselect, locations);
        populateSelectOptions(jobCategorySelect, jobCategories);
        populateSelectOptions(jobDesignationSelect, jobDesignations);

        // Add event listeners for filtering
        companyselect.addEventListener('change', (e) => {
            selectedCompany = e.target.value;
            const jobData = filterData();
            jobRender(jobData);
        });

        locationselect.addEventListener('change', (e) => {
            selectedLocation = e.target.value;
            const jobData = filterData();
            jobRender(jobData);
        });

        jobCategorySelect.addEventListener('change', (e) => {
            selectedJobCategory = e.target.value;
            const jobData = filterData();
            jobRender(jobData);
        });

        jobDesignationSelect.addEventListener('change', (e) => {
            selectedJobDesignation = e.target.value;
            const jobData = filterData();
            jobRender(jobData);
        });

        // Function to filter jobs based on selected criteria
        function filterData() {
            return jobList.filter(job =>
                (selectedCompany === 'all' || job.companyName === selectedCompany) &&
                (selectedLocation === 'all' || job.jobLocation === selectedLocation) &&
                (selectedJobCategory === 'all' || job.jobCategory === selectedJobCategory) &&
                (selectedJobDesignation === 'all' || job.jobDesignation === selectedJobDesignation)
            );
        }
    });

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
    function applyJob(userName, userEmail, jobId) {
        const JobDetailsContainer = document.querySelector('.JobDetailsContainer');
        const div = document.createElement('div');
        div.className = 'applyJobContainer';
        div.innerHTML = `
            <form class="applyFormContainer">
                <div class="inputField">
                     <h3>Apply Job</h3>
                     <span onclick="closeForm()">X</span>
                </div>
                  <div class="inputField">
                     <label for="userName">Name</label>
                     <input type="text" name="userName" value="${userName}" required>
                  </div>
                  <div class="inputField">
                     <label for="userEmail">Email</label>
                     <input type="text" name="userEmail" value="${userEmail}" required>
                  </div>
                  <div class="inputField" id="logo">
                     <label for="resume">Upload resume</label>
                     <input type="file" name="resume" accept=".pdf" required>
                  </div>
                  <div class="buttonField">
                    <button type="submit">Apply</button>
                 </div>
            </form>
        `
        JobDetailsContainer.appendChild(div);

        document.querySelector('.applyFormContainer').addEventListener('submit', e => {
            e.preventDefault();
            const formData = new FormData(e.target);
            formData.append('jobId', jobId);
            fetch('./applyJob', {
                method: 'POST',
                body: formData
            }).then(res => res.json())
                .then(result => {
                    if (result.success) {
                        alert(result.success);
                        window.location.href = `/jobDetails?id=${jobId}`;
                    }
                    else if (result.error) {
                        alert(result.error);
                    }
                }).catch(error => {
                    console.error(error);
                })
        });

    }
    function closeForm() {
        console.log("close");
        const applyJobContainer = document.querySelector('.applyJobContainer');
        applyJobContainer.remove();
    }
    function viewApplicants(job) {
        const jobData = JSON.parse(job);
        if (userEmail === jobData.postedBy){
            const applicants = jobData.applicants;
            const div = document.createElement('div');
            div.className = 'applyJobContainer';
            const applicantsHTML = applicants.map(applicant => `
                    <tr>
                        <td>${applicant.userName}</td>
                        <td>${applicant.userEmail}</td>
                        <td><a href="${applicant.resume}" target="_blank"><svg height="24px" width="24px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 56 56" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path style="fill:#E9E9E0;" d="M36.985,0H7.963C7.155,0,6.5,0.655,6.5,1.926V55c0,0.345,0.655,1,1.463,1h40.074 c0.808,0,1.463-0.655,1.463-1V12.978c0-0.696-0.093-0.92-0.257-1.085L37.607,0.257C37.442,0.093,37.218,0,36.985,0z"></path> <polygon style="fill:#D9D7CA;" points="37.5,0.151 37.5,12 49.349,12 "></polygon> <path style="fill:#CC4B4C;" d="M19.514,33.324L19.514,33.324c-0.348,0-0.682-0.113-0.967-0.326 c-1.041-0.781-1.181-1.65-1.115-2.242c0.182-1.628,2.195-3.332,5.985-5.068c1.504-3.296,2.935-7.357,3.788-10.75 c-0.998-2.172-1.968-4.99-1.261-6.643c0.248-0.579,0.557-1.023,1.134-1.215c0.228-0.076,0.804-0.172,1.016-0.172 c0.504,0,0.947,0.649,1.261,1.049c0.295,0.376,0.964,1.173-0.373,6.802c1.348,2.784,3.258,5.62,5.088,7.562 c1.311-0.237,2.439-0.358,3.358-0.358c1.566,0,2.515,0.365,2.902,1.117c0.32,0.622,0.189,1.349-0.39,2.16 c-0.557,0.779-1.325,1.191-2.22,1.191c-1.216,0-2.632-0.768-4.211-2.285c-2.837,0.593-6.15,1.651-8.828,2.822 c-0.836,1.774-1.637,3.203-2.383,4.251C21.273,32.654,20.389,33.324,19.514,33.324z M22.176,28.198 c-2.137,1.201-3.008,2.188-3.071,2.744c-0.01,0.092-0.037,0.334,0.431,0.692C19.685,31.587,20.555,31.19,22.176,28.198z M35.813,23.756c0.815,0.627,1.014,0.944,1.547,0.944c0.234,0,0.901-0.01,1.21-0.441c0.149-0.209,0.207-0.343,0.23-0.415 c-0.123-0.065-0.286-0.197-1.175-0.197C37.12,23.648,36.485,23.67,35.813,23.756z M28.343,17.174 c-0.715,2.474-1.659,5.145-2.674,7.564c2.09-0.811,4.362-1.519,6.496-2.02C30.815,21.15,29.466,19.192,28.343,17.174z M27.736,8.712c-0.098,0.033-1.33,1.757,0.096,3.216C28.781,9.813,27.779,8.698,27.736,8.712z"></path> <path style="fill:#CC4B4C;" d="M48.037,56H7.963C7.155,56,6.5,55.345,6.5,54.537V39h43v15.537C49.5,55.345,48.845,56,48.037,56z"></path> <g> <path style="fill:#FFFFFF;" d="M17.385,53h-1.641V42.924h2.898c0.428,0,0.852,0.068,1.271,0.205 c0.419,0.137,0.795,0.342,1.128,0.615c0.333,0.273,0.602,0.604,0.807,0.991s0.308,0.822,0.308,1.306 c0,0.511-0.087,0.973-0.26,1.388c-0.173,0.415-0.415,0.764-0.725,1.046c-0.31,0.282-0.684,0.501-1.121,0.656 s-0.921,0.232-1.449,0.232h-1.217V53z M17.385,44.168v3.992h1.504c0.2,0,0.398-0.034,0.595-0.103 c0.196-0.068,0.376-0.18,0.54-0.335c0.164-0.155,0.296-0.371,0.396-0.649c0.1-0.278,0.15-0.622,0.15-1.032 c0-0.164-0.023-0.354-0.068-0.567c-0.046-0.214-0.139-0.419-0.28-0.615c-0.142-0.196-0.34-0.36-0.595-0.492 c-0.255-0.132-0.593-0.198-1.012-0.198H17.385z"></path> <path style="fill:#FFFFFF;" d="M32.219,47.682c0,0.829-0.089,1.538-0.267,2.126s-0.403,1.08-0.677,1.477s-0.581,0.709-0.923,0.937 s-0.672,0.398-0.991,0.513c-0.319,0.114-0.611,0.187-0.875,0.219C28.222,52.984,28.026,53,27.898,53h-3.814V42.924h3.035 c0.848,0,1.593,0.135,2.235,0.403s1.176,0.627,1.6,1.073s0.74,0.955,0.95,1.524C32.114,46.494,32.219,47.08,32.219,47.682z M27.352,51.797c1.112,0,1.914-0.355,2.406-1.066s0.738-1.741,0.738-3.09c0-0.419-0.05-0.834-0.15-1.244 c-0.101-0.41-0.294-0.781-0.581-1.114s-0.677-0.602-1.169-0.807s-1.13-0.308-1.914-0.308h-0.957v7.629H27.352z"></path> <path style="fill:#FFFFFF;" d="M36.266,44.168v3.172h4.211v1.121h-4.211V53h-1.668V42.924H40.9v1.244H36.266z"></path> </g> </g> </g></svg></a></td>
                   </tr>
               `).join('');
            div.innerHTML = `
                <div class="viewApplicantsContainer">
                   <div class="titleField">
                         <h3>All Applicants</h3>
                         <span onclick="closeForm()">X</span>
                    </div>
                    <table>
                       <thead>
                         <tr>
                           <th>Name</th>
                           <th>Email</th>
                           <th>Resume</th>
                         </tr>
                       <thead>
                       <tbody>
                          ${applicantsHTML}
                       </tbody>
                    </table>
                </div>
                `
            document.querySelector('.JobDetailsContainer').appendChild(div);
        }else{
            alert("You are not authorized to view applicants for this job");
        }
        
    }
}
if (window.location.pathname === '/updateJob') {
    const title = document.querySelector('h2');
    const button = document.querySelector('.postJobForm button');
    const logo = document.getElementById('logo');
    logo.remove();
    button.textContent = 'Update Job';
    title.textContent = 'Update Job';
    seletedSkills = [];
    const jobData = JSON.parse(sessionStorage.getItem('job'));
    if (jobData) {
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

function postJobAndUpdateJObData() {
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
// Function to redirect to job details page
function jobsDetails(jobId) {
    window.location.href = `/jobDetails?id=${jobId}`;
}