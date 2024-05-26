import Container from "./components/Container";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Header from "./pages/Header";
import Projects from "./pages/Projects";
import Solutions from "./pages/Solutions";

function App() {
  return (
    <>
      <Container>
        <Header />
        <About />
        <Solutions />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </Container>
    </>
  );
}

export default App;
