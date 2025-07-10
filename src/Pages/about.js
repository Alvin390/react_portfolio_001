import React from 'react';

export default function About() {
    return (
        <section className="about-futuristic">
            <div className="about-hero" data-animate="fade-in">
                <h1>👋🏽 About Me</h1>
                <p>
                    Hi, I’m <span className="about-name">Alvin Muturi Kariuki</span>, a passionate and versatile software developer from Kenya.<br />
                    <span className="about-age">I’m 18 years old</span> — but my journey in tech started long before I wrote my first line of code.
                </p>
                <div className="about-quote" data-animate="slide-in">
                    <blockquote>
                        It’s not about flashy titles — it’s about showing up, solving problems, and serving people through technology.
                    </blockquote>
                </div>
            </div>

            <div className="about-journey" data-animate="fade-up">
                <h2>🛠️ My Journey</h2>
                <p>
                    After primary at <b>Aimeel Preparatory</b> and graduating from <b>Nyeri High School</b> with an A in Computer Studies, I studied Full-Stack Software Development at <b>eMobilis Institute of Technology</b> in Westlands.
                </p>
                <ul className="about-skills">
                    <li><b>Frontend:</b> HTML, CSS, Bootstrap, Vanilla JavaScript, React</li>
                    <li><b>Backend:</b> Python, Django, Node.js, SQLite, MySQL, PostgreSQL</li>
                    <li><b>Mobile:</b> Kotlin with Jetpack Compose (MVVM Architecture)</li>
                    <li><b>APIs & Tools:</b> REST, STK Push (MPESA), Git, GitHub, Agile workflows</li>
                </ul>
                <p>
                    I’ve built both web and mobile apps — always with the user in mind and real-world impact as the goal.<br />
                    I’ve presented to corporate stakeholders like <b>Stanbic Bank</b>, competed in hackathons, and led teams through design, development, and pitching.
                </p>
            </div>

            <div className="about-values" data-animate="fade-in">
                <h2>💭 What I Value</h2>
                <ul>
                    <li>Problem-solving over perfection</li>
                    <li>Teamwork that turns strangers into collaborators</li>
                    <li>Opportunities to grow through challenges</li>
                    <li>Building solutions that make a difference, especially in Kenya and across Africa</li>
                </ul>
                <p>
                    Whether it’s code or community, I care about what’s real — and I’m always looking for new ways to serve, learn, and evolve.
                </p>
            </div>

            <div className="about-opportunities" data-animate="slide-in">
                <h2>📌 What I’m Open To</h2>
                <ul>
                    <li>Internship & junior developer opportunities</li>
                    <li>Remote or local freelance projects</li>
                    <li>Mentorship in tech, startups, or AI</li>
                    <li>Collaborations with builders, creatives, and visionaries</li>
                </ul>
            </div>

            <div className="about-growth" data-animate="fade-up">
                <h2>🔁 Still Growing</h2>
                <p>
                    Right now, I’m advancing my full-stack skills with deeper dives into React, Node.js, PostgreSQL, and Data Structures & Algorithms.
                </p>
                <div className="about-mantra">
                    <p>
                        And I’m still doing what I’ve always done:<br />
                        <span className="about-mantra-list">
              Showing up. Solving problems. Learning fast.<br />
              And building for something bigger than myself.
            </span>
                    </p>
                </div>
                <div className="about-connect" data-animate="pulse">
                    <p>
                        <b>Let’s connect — and let’s build something that matters.</b>
                    </p>
                </div>
            </div>
        </section>
    );
}