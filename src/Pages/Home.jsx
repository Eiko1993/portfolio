import "../Assets/CSS/main.css";
import About from "../Components/About";
import Formation from "../Components/Formation";
import Skills from "../Components/Skills";
import Banner from "../Components/Banner";
import background from "../Assets/Images/banner.webp";

function Home() {
  return (
    <main className="home">
      <div className="main-content">
        <Banner img={background} title="Vincent Merah - Développeur Web" />

        <section id="about" className="about">
          <About />
        </section>

        <section id="formation" className="formation">
          <Formation />
        </section>

        <section id="skills" className="skills">
          <Skills />
        </section>
      </div>
    </main>
  );
}

export default Home;