import '../App.css';
import FirstContainer from '../components/homeComponents/FirstContainer';
import ThirdContainer from '../components/homeComponents/ThirdContainer';

function Home() {
 return (
  <div className="w-full h-[100vh] bg-[#301934]">
   <FirstContainer/>
   <ThirdContainer/>
  </div>
 );
}

export default Home;