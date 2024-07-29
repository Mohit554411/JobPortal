import deleteUploadFile from "../middlewares/delete-upload-file.middleware.js";
export default class JobModel {
    constructor(id, jobCategory, jobDesignation, jobLocation, companyName, salary, applyBy, skillsRequired, workExperience, numberOfopenings, jobPosted, applicants, compnayLogo, postedBy) {
        this.id = id;
        this.jobCategory = jobCategory;
        this.jobDesignation = jobDesignation;
        this.jobLocation = jobLocation;
        this.companyName = companyName;
        this.salary = salary;
        this.applyBy = applyBy;
        this.skillsRequired = skillsRequired;
        this.workExperience = workExperience;
        this.numberOfopenings = numberOfopenings;
        this.jobPosted = jobPosted;
        this.applicants = applicants;
        this.compnayLogo = compnayLogo;
        this.postedBy = postedBy;
    }
    static getAllJobs() {
        return jobs;
    }
    static findJobDetails(id) {
        return jobs.find(job => job.id == id);
    }
    static postJob(jobData) {
        jobs.push(
            new JobModel(
                jobs.length + 1,
                jobData.jobCategory,
                jobData.jobDesignation,
                jobData.jobLocation,
                jobData.companyName,
                jobData.salary,
                jobData.applyBy,
                jobData.skills,
                jobData.experince,
                jobData.opening,
                jobData.jobPosted,
                [],
                jobData.logo,
                jobData.postedBy));
    }
    static updateJob(jobData,id) {
        const job = jobs.find(job=>job.id == id);
        if (job) {
            job.jobCategory = jobData.jobCategory;
            job.jobDesignation = jobData.jobDesignation;
            job.jobLocation = jobData.jobLocation;
            job.companyName = jobData.companyName;
            job.salary = jobData.salary;
            job.applyBy = jobData.applyBy;
            job.skillsRequired = jobData.skills;
            job.workExperience = jobData.experince;
            job.numberOfopenings = jobData.opening;
            job.jobPosted = jobData.jobPosted;
            job.postedBy = jobData.postedBy
            return true;
        }
        return false;
    }
    static deleteJob(id) {
        deleteUploadFile(jobs.find(job => job.id == id).compnayLogo);
        jobs = jobs.filter(job => job.id != id);
    }
    static jobApply(applicants){
        const job = jobs.find(job=>job.id == applicants.jobId);
        if(job){
            job.applicants.push(applicants);
            return job;
        }else{
            return false;
        }
    }
}
let jobs = [
    new JobModel(1, 'Software Engineer', 'Software Engineer', 'Bangalore', 'Infosys', '10LPA', '26/08/2024', ['React', 'Java', 'HTML', 'CSS'], '0-2Y', '50', '19/07/2024', [], '', 'System'),
    new JobModel(2, 'Software Engineer', 'Full Stack Developer', 'Hyderabad', 'TCS', '15LPA', '26/08/2024', ['React', 'Java', 'HTML', 'CSS'], '0-2Y', '50', '19/07/2024', [], '', 'System'),
    new JobModel(3, 'Software Engineer', 'Backend Developer', 'Hyderabad', 'Infosys', '20LPA', '26/08/2024', ['Python', 'Java', '.NET'], '0-2Y', '50', '19/07/2024', [], '', 'System'),
    new JobModel(4, 'Manual Tester', 'UI Tester', 'Bangalore', 'Infosys', '5LPA', '26/08/2024', ['HTML', 'CSS'], '0-2Y', '50', '19/07/2024', [], '', 'System'),
    new JobModel(5, 'Software Engineer', 'Frontent Developer', 'Bangalore', 'Zepto', '10LPA', '26/08/2024', ['React', 'JavaScript', 'HTML', 'CSS'], '0-2Y', '50', '19/07/2024', [], '', 'System'),
]