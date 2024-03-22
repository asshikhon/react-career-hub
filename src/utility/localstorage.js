const getStoredApplication = () => {
const storedApplication = localStorage.getItem('job-application');
if(storedApplication){
return JSON.parse(storedApplication)
}
return [];
}



const saveJobApplication = id =>{
const storedJobApplications = getStoredApplication();
const exists = storedJobApplications.find(jobId => jobId === id);
if(!exists){
storedJobApplications.push(id);
localStorage.setItem('job-application', JSON.stringify(storedJobApplications));
    
}

}

export {getStoredApplication, saveJobApplication}