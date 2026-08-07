import Navbar from "./components/navbar";
import InteractiveHero from "./components/interactive";
import AboutSection from "./components/section/about";
import ProjectsSection from "./components/section/project";
import ContactSection from "./components/section/contact";
import Footer from "./components/footer";
import BackToTop from "./components/back-to-top";

export default function Home() {
  return (
    <div className="min-h-[100dvh] overflow-x-clip bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Navbar />

      <main id="main-content">
        <section id="home" className="scroll-mt-20 bg-white dark:bg-zinc-950">
          <InteractiveHero />
        </section>

        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
