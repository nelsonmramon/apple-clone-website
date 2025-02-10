import Hero from "./components/Hero/Hero.component";
import Highlights from "./components/Highlights/Highlights.component";
import Navbar from "./components/Navbar/Navbar.component";

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
    </main>
  );
};

export default App;
