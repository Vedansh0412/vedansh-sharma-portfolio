import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
// import Blogs from "./components/Blogs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />

        <About />

        <Projects />

        {/* <Blogs /> */}

        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;