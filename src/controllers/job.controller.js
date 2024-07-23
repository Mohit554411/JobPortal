import JobModel from "../models/job.model.js"

export default class JobController{
    getLandingPage(req,res){
        res.render('landing',{userEmail:req.session.userEmail});
    }
    getAllJObs(req,res){
        const jobs = JobModel.getAllJobs();
        res.render('jobs',{jobs,userEmail:req.session.userEmail})
    }
    getJobDetails(req,res){
        const id = req.query.id;
        const job = JobModel.findJobDetails(id);
        if(!job){
            res.status(404).json({error:'Job not found'});
        }
        res.render('jobDetails',{job,userEmail:req.session.userEmail});
    }
    getPostJob(req,res){
        if(!req.session.userEmail || !req.session.role){
            res.render('login');
        }
        else if(req.session.role === 'recruiter'){
            res.render('postJob',{error:null,userEmail:req.session.userEmail});
        }
        else{
            res.render('postJob',{error:'You are not recruiter',userEmail:req.session.userEmail});
        }
    }
}