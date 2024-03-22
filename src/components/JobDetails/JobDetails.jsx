import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localstorage";
const JobDetails = () => {
const jobs = useLoaderData();
const {id} = useParams();
const idInt = parseInt(id);

const job = jobs.find(job => job.id === idInt);
const handleApplyJob = () =>{
    saveJobApplication(idInt);
toast.success('you have apply successfully')
}

    return (
        <div>

            <div className="grid gap-4 md:grid-cols-4">
             <div className="border md:col-span-3">
                <h2 className="text-4xl">Details coming here</h2>
                <h1 className="text-4xl">job details Of:{job.job_title}</h1>
                <p>{job.company_name}</p>
             </div>
             <div className="border">
             <h2 className="text-4xl">side thinks</h2>
             <button onClick={handleApplyJob} className="btn primary w-full">Apply Now</button>

             </div>
       
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default JobDetails;