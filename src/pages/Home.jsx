import Navbar from "../components/navbar/Navbar";
import Header from "../components/Header/Header";
import Access from "../components/Access/Access";
import Borrow from "../components/Borrow/Borrow";
import Happening from "../components/Happening/Happening";
import Disclosures from "../components/Disclosures/Disclosures";
import Footer from "../components/Footer/Footer";
import { toggleMenu } from "../hooks/toogleMenu";

function Home() {
  const { toggle, setToggle } = toggleMenu();
  console.log(toggle);

  return (
    <div>
      <div>
        <Navbar toggle={toggle} setToggle={setToggle} />
      </div>
      <div
        onClick={() => setToggle(false)}
        className={`${toggle && "home__section"}`}
      >
        <Header />
        <Access />
        <Borrow />
        <Happening />
        <Disclosures />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
