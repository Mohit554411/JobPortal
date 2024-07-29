import JobModel from "../models/job.model.js"
import ejs from 'ejs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import sendMail from "../middlewares/job-mail.middleware.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default class JobController {
    getLandingPage(req, res) {
        res.render('landing', { userEmail: req.session.userEmail, userName: req.session.userName, role: req.session.role });
    }
    getAllJObs(req, res) {
        const jobs = JobModel.getAllJobs();
        console.log(jobs);
        res.render('jobs', { jobs, userEmail: req.session.userEmail, userName: req.session.userName, role: req.session.role });
    }
    getJobDetails(req, res) {
        const id = req.query.id;
        const job = JobModel.findJobDetails(id);
        if (!job) {
            res.status(404).json({ error: 'Job not found' });
        }
        res.render('jobDetails', { job, userEmail: req.session.userEmail, userName: req.session.userName, role: req.session.role });
    }
    getPostJob(req, res) {
        if (!req.session.userEmail || !req.session.role) {
            res.redirect('/login');
        }
        else if (req.session.role === 'recruiter') {
            res.render('postJob', { error: null, userEmail: req.session.userEmail, userName: req.session.userName, role: req.session.role });
        }
        else {
            res.render('postJob', { error: 'Only recruiter is allowed to access this page,login as recruiter to', userEmail: req.session.userEmail, userName: req.session.userName, role: req.session.role });
        }
    }
    postJobData(req, res) {
        const jobData = req.body;
        jobData.logo = '/uploads/' + req.file.filename;
        jobData.postedBy = req.session.userEmail;
        jobData.jobPosted = new Date().toLocaleDateString();
        jobData.skills = JSON.parse(jobData.skills);
        JobModel.postJob(jobData);
        res.status(201).json({ success: `Job created successfully` });
    }
    deleteJob(req, res) {
        const id = req.query.id;
        const job = JobModel.findJobDetails(id);
        if (!job) {
            res.status(404).json({ error: 'Job not found' });
        }
        JobModel.deleteJob(id);
        res.status(200).json({ success: 'Job deleted successfully' });
    }
    async applyJob(req, res) {
        const { jobId, userName, userEmail } = req.body;
        const resume = '/uploads/' + req.file.filename;
        const applicants = {
            jobId,
            userEmail,
            userName,
            resume
        }
        const result = JobModel.jobApply(applicants);
        if (result) {
            const templatePath = path.resolve(__dirname, '..', 'views',  'emailTemplate.ejs');
            const html = await ejs.renderFile(templatePath, { name: userName });
            await sendMail(userEmail, 'Job Application', html);
            res.status(200).json({ success: 'Job applied successfully' });
        }
        else {
            res.status(400).json({ error: 'Failed to apply job' });
        }


    }
    updateJob(req, res) {
        const id = req.query.id;
        const job = JobModel.findJobDetails(id);
        if (!job) {
            res.status(404).json({ error: 'Job not found' });
        }
        res.status(200).json({ success: 'redirecting to update page' });
    }
    putUpdateJob(req, res) {
        const id = req.query.id;
        const jobData = req.body;
        jobData.postedBy = req.session.userEmail;
        jobData.jobPosted = new Date().toLocaleDateString();
        jobData.skills = JSON.parse(jobData.skills);
        const result = JobModel.updateJob(jobData, id);
        if (!result) {
            res.status(404).json({ error: 'Job not found' });
        }
        res.status(200).json({ success: `Job updated successfully` });
    }
}