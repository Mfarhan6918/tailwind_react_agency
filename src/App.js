import "./App.css";
import Banner from "./components/banner";
import Courses from "./components/courses";
import Experts from "./components/experts";
import Footer from "./components/footer";
import Header from "./components/header";
import NewsLetter from "./components/newsLetter";
import Plans from "./components/plans";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Experts/>
      <Courses/>
      <NewsLetter/>
      <Plans/>
      <Footer/>
    </>
  );
}
export default App;
