import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
const Job = ({ job }) => {
  const {id, logo, job_title, company_name,remote_or_onsite, location, job_type, salary} = job;

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img
          src={logo}
          alt="Job"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div>
            <button className="px-5 text-[#7E90FE] py-2 font-extrabold border rounded border-[#7E90FE] mr-4">{remote_or_onsite}</button>
            <button className="px-5 text-[#7E90FE] py-2 font-extrabold border rounded border-[#7E90FE] mr-4">{job_type}</button>
        </div>

        <div className="mt-4 flex items-center gap-6">
    <h2 className="flex gap-2 items-center"><IoLocationOutline className="text-2xl"></IoLocationOutline>{location}</h2>
    <h2 className="flex gap-2 items-center"><HiOutlineCurrencyDollar className="text-2xl"></HiOutlineCurrencyDollar> {salary}</h2>
</div>

        <div className="card-actions justify-start">
       <Link to={`/job/${id}`}>
       <button className="btn btn-primary">View Details</button>
       </Link>
        </div>


      </div>
    </div>
  );
};

Job.propTypes = {
job: PropTypes.object,

}

export default Job;
