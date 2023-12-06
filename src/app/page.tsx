import Header from "./components/Header";
import Heading from "./components/Heading";
import Main from "./components/Main";
import Subheading from "./components/Subheading";
import Footer from "./components/Footer";
import AboutSection from "./components/AboutSection";
import Clients from "./components/Clients";

export default function HomePage() {
  return (
    <>
      <Header />
      <Heading />
      <Main/>
      <Subheading/>
      <AboutSection/>
      <Clients />
      <Footer/>
    </>
  );
}
