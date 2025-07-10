import { FaReact, FaPython, FaLinkedin, FaGithub } from "react-icons/fa";

function Home() {
    return (
        <div style={{ textAlign: "center" }}>
            <div className="main-photo">
                <img src="/alvin.jpg" alt="Alvin Kariuki" className="main-photo-img" />
            </div>
            <h1>Alvin Kariuki</h1>
            <p>
                <FaReact color="#61DBFB" /> ReactJS | <FaPython color="#306998" /> Django | Full-Stack Dev
            </p>
            <p>
                I’m Alvin Muturi Kariuki — a developer, communicator, and builder from Kenya.

                I craft full-stack solutions that make a difference, whether it's streamlining local trade, boosting employee well-being with AI, or helping communities manage resources better.

                My journey began behind church projectors. Today, I’m a hackathon winner, a presenter to corporate leaders, and a passionate problem solver who thrives in fast-paced, mission-driven environments.

                If it’s meaningful, I’ll build it. If it challenges me, I’ll grow through it. If it helps others, I’m all in.
            </p>
            <a href="/RESUME.pdf" download className="resume-download-btn">Download Resume</a>
            <br/>
            <br/>
            <div style={{ fontSize: "1.5rem" }}>
                <a href="https://linkedin.com/in/alvinkariuki254" target="_blank" rel="noreferrer">
                    <FaLinkedin />
                </a>{" "}
                <a href="https://github.com/Alvin390" target="_blank" rel="noreferrer">
                    <FaGithub />
                </a>
            </div>
        </div>
    );
}

export default Home;