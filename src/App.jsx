import { useEffect, useState } from "react";
import ShinyText from "./components/ShinyText/ShinyText";
import BlurText from "./components/BlurText/BlurText";
import { listTools, listProyek } from "./data";
import ChromaGrid from "./components/ChromaGrid/ChromaGrid";
import ProjectModal from "./components/ProjectModal/ProjectModal";
import Aurora from "./components/Aurora/Aurora";
import AOS from "aos";
import ChatRoom from "./components/ChatRoom";
import "aos/dist/aos.css";

AOS.init();

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    const isReload =
      performance.getEntriesByType("navigation")[0]?.type === "reload";

    if (isReload) {
      const baseUrl = window.location.origin + "/portofolio/";
      window.location.replace(baseUrl);
    }
  }, []);

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full -z-10 ">
        <Aurora
          colorStops={["#577870", "#1F97A6", "#127B99"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1"
          id="home"
        >
          <div className="animate__animated animate__fadeInUp animate__delay-3s">
            <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
              <span className="inline-flex h-3 w-3 rounded-full bg-emerald-400"></span>
              <q>Building practical apps with clean UI and useful features.</q>
            </div>

            <h1 className="text-5xl font-bold mb-6">
              <ShinyText
                text="Hi, I'm Pradeep"
                disabled={false}
                speed={3}
                className="custom-class"
              />
            </h1>

            <BlurText
              text="Java Full Stack Developer focused on responsive web apps, API integration, and user-friendly products that solve real problems."
              delay={150}
              animateBy="words"
              direction="top"
              className="mb-6"
            />

            <div className="flex items-center sm:gap-4 gap-2">
              <a
                href="https://github.com/Pradeep11022004"
                target="_blank"
                rel="noreferrer"
                className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors"
              >
                <ShinyText
                  text="Visit GitHub"
                  disabled={false}
                  speed={3}
                  className="custom-class"
                />
              </a>

              <a
                href="#project"
                className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors"
              >
                <ShinyText
                  text="Explore My Projects"
                  disabled={false}
                  speed={3}
                  className="custom-class"
                />
              </a>
            </div>
          </div>

          <div className="md:ml-auto animate__animated animate__fadeInUp animate__delay-4s">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(160deg,rgba(8,15,28,0.98),rgba(9,24,39,0.92),rgba(20,83,45,0.35))] p-8 shadow-[0_18px_80px_rgba(0,0,0,0.35)]">
              <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-cyan-400/20 blur-3xl"></div>
              <div className="absolute -left-8 bottom-0 h-28 w-28 rounded-full bg-emerald-400/20 blur-3xl"></div>
              <div className="relative">
                <div className="mb-8 flex items-start justify-between gap-4">
                  <div>
                    <p className="mb-3 text-xs uppercase tracking-[0.35em] text-cyan-300">
                      Profile Card
                    </p>
                    <h2 className="text-4xl font-bold">Pradeep</h2>
                    <p className="mt-2 text-zinc-300">
                      Java Full Stack Developer
                    </p>
                  </div>
                  <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300">
                    Available
                  </div>
                </div>

                <div className="mb-6 grid gap-4">
                  <div className="rounded-2xl border border-white/8 bg-black/20 p-4">
                    <p className="text-sm text-zinc-400">Focus</p>
                    <p className="mt-1 text-lg font-semibold text-white">
                      Building useful apps with clean frontend experience
                    </p>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-white/8 bg-black/20 p-4">
                      <p className="text-sm text-zinc-400">GitHub</p>
                      <p className="mt-1 font-semibold">@Pradeep11022004</p>
                    </div>
                    <div className="rounded-2xl border border-white/8 bg-black/20 p-4">
                      <p className="text-sm text-zinc-400">Preferred Stack</p>
                      <p className="mt-1 font-semibold">React, Firebase, MySQL</p>
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  <a
                    href="https://github.com/Pradeep11022004"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-center font-semibold transition-colors hover:bg-white/10"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/pradeep-k-1b99002a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-4 text-center font-semibold text-cyan-200 transition-colors hover:bg-cyan-400/15"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="mt-15 mx-auto w-full max-w-[1600px] rounded-3xl border-[5px] border-violet-500/40 shadow-[0_0_30px_rgba(168,85,247,0.4)] bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a] p-6"
          id="about"
        >
          <div
            className="pt-0 px-8"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <div className="w-full">
              <div className="flex-1 text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                  About Me
                </h2>

                <BlurText
                  text="I’m Pradeep focused on becoming a Java Full Stack Developer. I build responsive web applications using Java, HTML, CSS, JavaScript, and SQL. I focus on strong fundamentals, consistent practice, and real-world project building to become industry-ready."
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-base md:text-lg leading-relaxed mb-10 text-gray-300"
                />

                <div className="flex flex-col sm:flex-row items-center sm:justify-between text-center sm:text-left gap-y-8 sm:gap-y-0 mb-4 w-full">
                  <div>
                    <h1 className="text-3xl md:text-4xl mb-1">
                      2<span className="text-violet-500">+</span>
                    </h1>
                    <p>Public GitHub Projects</p>
                  </div>
                  <div>
                    <h1 className="text-3xl md:text-4xl mb-1">
                      API<span className="text-violet-500">+</span>
                    </h1>
                    <p>Frontend Integrations</p>
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="600"
                    data-aos-once="true"
                  >
                    <h1 className="text-3xl md:text-4xl mb-1">
                      UI<span className="text-violet-500">+</span>
                    </h1>
                    <p>Responsive Build Mindset</p>
                  </div>
                </div>

                <ShinyText
                  text="Working with focus, building with purpose."
                  disabled={false}
                  speed={3}
                  className="text-sm md:text-base text-violet-400"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="tools mt-32">
          <h1
            className="text-4xl/snug font-bold mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Tools & Technologies
          </h1>
          <p
            className="w-full md:w-2/5 text-base/loose opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            Core tools I use to design, build, test, and share web
            applications.
          </p>

          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool) => (
              <div
                key={tool.id}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={tool.dad}
                data-aos-once="true"
                className="flex items-center gap-4 p-4 border border-zinc-700 rounded-xl bg-zinc-900/60 backdrop-blur-md hover:bg-zinc-800/80 transition-all duration-300 group shadow-lg"
              >
                <img
                  src={tool.gambar}
                  alt="Tools Image"
                  className="w-16 h-16 object-contain bg-zinc-800 p-2 rounded-lg group-hover:bg-zinc-900 transition-all duration-300"
                />
                <div className="flex flex-col overflow-hidden">
                  <div className="truncate">
                    <ShinyText
                      text={tool.nama}
                      disabled={false}
                      speed={3}
                      className="text-lg font-semibold block"
                    />
                  </div>
                  <p className="text-sm text-zinc-400 truncate">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="proyek mt-32 py-10"
          id="project"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        ></div>
        <h1
          className="text-center text-4xl font-bold mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Projects
        </h1>
        <p
          className="text-base/loose text-center opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          Featured work pulled from my GitHub profile, focused on useful
          interfaces and practical features.
        </p>

        <div className="proyek-box mt-14">
          <div
            style={{ height: "auto", position: "relative" }}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
            data-aos-once="true"
          >
            <ChromaGrid
              items={listProyek}
              onItemClick={handleProjectClick}
              radius={500}
              damping={0.45}
              fadeOut={0.6}
              ease="power3.out"
            />
          </div>
        </div>

        <div className="kontak mt-32 sm:p-10 p-0" id="contact">
          <h1
            className="text-4xl mb-2 font-bold text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Contact & Chat
          </h1>
          <p
            className="text-base/loose text-center mb-10 opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            Chat live here or connect with me through GitHub and LinkedIn.
          </p>

          <div className="flex flex-col md:flex-row gap-8">
            <div
              className="flex-1 bg-zinc-800 p-6 rounded-md"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
              data-aos-once="true"
            >
              <ChatRoom />
            </div>

            <div className="flex-1">
              <div
                className="bg-zinc-800 p-10 w-full rounded-md h-full"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="500"
                data-aos-once="true"
              >
                <div className="flex flex-col gap-6 h-full justify-center">
                  <div className="flex flex-col gap-2">
                    <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
                      Connect
                    </p>
                    <h2 className="text-3xl font-bold">
                      Let&apos;s build something useful
                    </h2>
                    <p className="text-zinc-300 leading-relaxed">
                      I&apos;m using GitHub as the main place to showcase my
                      work. You can review my repositories, code style, and
                      recent project activity there.
                    </p>
                  </div>

                  <div className="grid gap-4">
                    <div className="rounded-2xl border border-zinc-700 bg-zinc-900/60 p-4">
                      <p className="text-zinc-400 text-sm mb-1">GitHub Profile</p>
                      <a
                        href="https://github.com/Pradeep11022004"
                        target="_blank"
                        rel="noreferrer"
                        className="text-lg font-semibold text-white hover:text-cyan-300 transition-colors"
                      >
                        github.com/Pradeep11022004
                      </a>
                    </div>
                    <div className="rounded-2xl border border-zinc-700 bg-zinc-900/60 p-4">
                      <p className="text-zinc-400 text-sm mb-1">LinkedIn</p>
                      <a
                        href="https://www.linkedin.com/in/pradeep-k-1b99002a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        target="_blank"
                        rel="noreferrer"
                        className="text-lg font-semibold text-white hover:text-cyan-300 transition-colors break-all"
                      >
                        linkedin.com/in/pradeep-k-1b99002a2
                      </a>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3 text-center">
                    <a
                      href="https://github.com/Pradeep11022004"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full w-full cursor-pointer border border-gray-700 hover:bg-[#222] transition-colors"
                    >
                      <ShinyText
                        text="Open GitHub Profile"
                        disabled={false}
                        speed={3}
                        className="custom-class"
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/pradeep-k-1b99002a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center font-semibold bg-[#12314a] p-4 px-6 rounded-full w-full cursor-pointer border border-cyan-800 hover:bg-[#173d5b] transition-colors"
                    >
                      <ShinyText
                        text="Open LinkedIn"
                        disabled={false}
                        speed={3}
                        className="custom-class"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <ProjectModal
        isOpen={!!selectedProject}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </>
  );
}

export default App;
