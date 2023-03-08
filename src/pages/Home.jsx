import Navbar from "../components/navbar/Navbar";
import Header from "../components/Header/Header";
import Access from "../components/Access/Access";
import Borrow from "../components/Borrow/Borrow";
import Happening from "../components/Happening/Happening";
import Disclosures from "../components/Disclosures/Disclosures";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Access />
      <Borrow />
      <Happening />
      <Disclosures />
      <Footer />
    </div>
  );
}

export default Home;
