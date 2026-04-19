import Navbar from "./components/navbar";
import InteractiveHero from "./components/interactive";
import AboutSection from "./components/section/about";
import ProjectsSection from "./components/section/project";
import ContactSection from "./components/section/contact";
import Footer from "./components/footer";
import BackToTop from "./components/back-to-top";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Navbar />

      <main>
        <section id="home" className="bg-white dark:bg-slate-950">
          <InteractiveHero />
        </section>

        <section id="about">
          <AboutSection />
        </section>

        <section id="projects">
          <ProjectsSection />
        </section>

        <section id="contact">
          <ContactSection />
        </section>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
