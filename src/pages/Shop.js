import ItemContent from "../components/Items";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function Shop() {
  return (
    <>
      <header>
        <Nav />
      </header>

      <main>
        <ItemContent />
      </main>
      <Footer />
    </>
  );
}

export default Shop;
