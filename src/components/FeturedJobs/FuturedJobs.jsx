// import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FuturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
    fetch('jobs.json')
    
   .then(res => res.json())
   .then(data => setJobs(data))
    
    },[])

    return (
        <div className="text-center">
            <h2 className="text-5xl ">Featured Jobs</h2>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className="grid md:grid-cols-2 gap-6">
                {
                jobs.slice(0, dataLength).map((job, idx) => <Job key={idx} job={job}></Job>)
                }
            </div>
            <div className={dataLength === jobs.length ? 'hidden' : ''}>
                <button onClick={() => setDataLength(jobs.length)} className="btn bg-[#7E90FE]">See All Jobs</button>
            </div>
        </div>
        
    );
};

export default FuturedJobs;