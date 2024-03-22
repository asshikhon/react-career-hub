import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import FuturedJobs from "../FeturedJobs/FuturedJobs";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
      <CategoryList></CategoryList>
      <FuturedJobs></FuturedJobs>
        </div>
    );
};

export default Home;