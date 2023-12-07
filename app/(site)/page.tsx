import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Statistic from "./components/Statistic/Statistic";
import CheckEarn from "./components/CheckEarn/CheckEarn";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <Statistic />
      <CheckEarn/>
    </div>
  )
}

export default Home;
