import React from "react";

export default function About() {
  return (
    <div className="container my-5">
      <div className="p-4 rounded shadow-sm">
        <div className="heading">
          <h2 className="mb-4 text-center">👋 <span className="underline">About Me</span></h2>
        </div>
        <p>
          Hi! I'm <strong>Adarsh Singh</strong>, a passionate and curious
          CSE(AIML) student at{" "}
          <strong>KIET Group of Institutions, Ghaziabad</strong>. I specialize
          in <strong>front-end web development</strong> and enjoy turning ideas
          into real-world applications using
          <code> HTML</code>, <code>CSS</code>, <code>JavaScript</code>, and{" "}
          <code>React</code>. I'm constantly exploring new technologies and love
          building projects that solve real problems or showcase creativity.
        </p>
        <p>
          Currently in my first year, I’ve already started building projects
          like a <strong>Notes</strong> and a <strong> FINDMYGYM </strong>
          app using APIs — and I’m just getting started!
        </p>
        <p>
          My goal is to grow into a <strong>full-stack developer</strong> who
          not only writes clean, efficient code but also designs intuitive user
          experiences. I believe in <em>learning by doing</em>, and I'm always
          open to collaborating on exciting ideas, internships, or freelance
          opportunities.
        </p>
        <p>
          When I’m not coding, you’ll probably find me exploring new tech
          trends, working on logic-building exercises, or helping peers debug
          their code.
        </p>

        <hr className="my-4" />

        <h2 className="mb-3">🔧 <span className="underline">Skills & Technologies</span></h2>
        <div className="row">
          <div className="col-md-4">
            <h6 className="fw-bold">Languages</h6>
            <p className="mb-1">HTML, CSS (Bootstrap), JavaScript</p>
            <p>Python (basic), SQL (basic)</p>
          </div>
          <div className="col-md-4">
            <h6 className="fw-bold">Frameworks & Libraries</h6>
            <p>React (beginner)</p>
          </div>
          <div className="col-md-4">
            <h6 className="fw-bold">Tools & Other</h6>
            <p className="mb-1">Git & GitHub, VS Code</p>
            <p>Responsive Design, API Integration, Problem-Solving</p>
          </div>
        </div>
      </div>
    </div>
  );
}
