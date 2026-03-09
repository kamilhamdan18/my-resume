import { useState, useEffect, useRef } from "react";
import "./App.css";
import hero_image from "../public/photo_2026-03-06_23-04-50.jpg";
import project1 from "./assets/pro1.png";
import project2 from "./assets/pro2.png";
import project3 from "./assets/pro3.png";
import project4 from "./assets/pro4.png";
import project5 from "./assets/pro5.png";

import projFile1 from "./assets/docs/Adventure works.pptx";
import projFile2 from "./assets/docs/Bank Analytics.pptx";
import projFile3 from "./assets/docs/Healthcare presentation.pptx";
import projFile4 from "./assets/docs/HR_Analytics_Project_Presentation.pptx";
import projFile5 from "./assets/docs/KIcKSTARTERS CROWDFUNDING ANALYSIS.pptx";

import resume from "./assets/docs/Mohamed Kamil M_Data Analyst.pdf";

function App() {
  const [currentPage, setCurrentPage] = useState("about");

  const aboutRef = useRef(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentPage(entry.target.id === "about" ? "about" : "project");
          }
        });
      },
      { threshold: 0.2 },
    );

    if (aboutRef.current) observer.observe(aboutRef.current);
    if (projectsRef.current) observer.observe(projectsRef.current);

    return () => observer.disconnect();
  }, []);

  const imgLink = [project1, project2, project3, project4, project5];
  const imgProjFile = [projFile1, projFile2, projFile3, projFile4, projFile5];

  const projTags = [
    <div>
      <h3 className="font-bold text-lg text-white">Adventure Works Sales Analysis</h3>
      <ul className="list-disc pl-5 opacity-80 text-sm md:text-base">
        <li>Evaluated revenue, profit, and customer growth trends.</li>
        <li>Visualized monthly and yearly sales performance in Power BI.</li>
      </ul>
    </div>,
    <div>
      <h3 className="font-bold text-lg text-white">Bank Analytics Dashboard</h3>
      <ul className="list-disc pl-5 opacity-80 text-sm md:text-base">
        <li>Analyzed 65K+ banking records for loan performance.</li>
        <li>Built Power BI dashboards for KPI tracking and revenue analysis.</li>
      </ul>
    </div>,
    <div>
      <h3 className="font-bold text-lg text-white">Healthcare Analytics</h3>
      <ul className="list-disc pl-5 opacity-80 text-sm md:text-base">
        <li>Analyzed patient records and hospital efficiency.</li>
        <li>Created interactive dashboards for healthcare KPIs.</li>
      </ul>
    </div>,
    <div>
      <h3 className="font-bold text-lg text-white">HR Analytics - Employee Attrition</h3>
      <ul className="list-disc pl-5 opacity-80 text-sm md:text-base">
        <li>Identified attrition drivers like salary and work-life balance.</li>
        <li>Tracked department-wise workforce trends for retention.</li>
      </ul>
    </div>,
    <div>
      <h3 className="font-bold text-lg text-white">Kickstarter Crowdfunding Analysis</h3>
      <ul className="list-disc pl-5 opacity-80 text-sm md:text-base">
        <li>Analyzed 365K+ campaigns to find success factors.</li>
        <li>Compared funding goals and category performance.</li>
      </ul>
    </div>,
  ];

  return (
    <div className="bg-gradient-to-br from-blue-950 via-slate-900 to-black min-h-screen w-full flex flex-col md:flex-row text-slate-200">
      
      {/* LEFT SECTION (Aside) - Fixed on Desktop, Scrolls on Mobile */}
      <aside className="w-full md:w-1/2 md:h-screen flex flex-col justify-center items-center p-8 md:sticky md:top-0 gap-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <img 
            src={hero_image} 
            alt="hero_section" 
            className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover border-4 border-white/10 shadow-2xl" 
          />
          <div>
            <h1 className="font-bold text-3xl md:text-5xl text-white tracking-tight">Mohamed Kamil</h1>
            <h2 className="text-xl md:text-2xl opacity-60 mt-2">Data Analyst</h2>
          </div>
        </div>

        {/* Navigation Menu - Hidden or Row on Mobile */}
        <nav className="my-4">
          <ul className="flex flex-row md:flex-col gap-6 md:gap-4 font-medium uppercase tracking-widest text-xs">
            <li className="flex items-center gap-3 group">
              <div className={`hidden md:block h-[1px] transition-all duration-300 bg-white ${currentPage === "about" ? "w-12" : "w-6 opacity-30 group-hover:w-12 group-hover:opacity-100"}`}></div>
              <a href="#about" className={`${currentPage === "about" ? "text-white" : "opacity-50 hover:text-white"}`}>About</a>
            </li>
            <li className="flex items-center gap-3 group">
              <div className={`hidden md:block h-[1px] transition-all duration-300 bg-white ${currentPage === "project" ? "w-12" : "w-6 opacity-30 group-hover:w-12 group-hover:opacity-100"}`}></div>
              <a href="#projects" className={`${currentPage === "project" ? "text-white" : "opacity-50 hover:text-white"}`}>Projects</a>
            </li>
          </ul>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-6 items-center">
          <a href="mailto:kamilhamdan18@gmail.com" className="hover:scale-110 transition-transform"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="#fff"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" /></svg></a>
          <a
  href="https://www.linkedin.com/in/kamilhamdan"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:scale-110 transition-transform inline-block"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#fff"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
</a>
        </div>

        <a href={resume} download className="mt-4">
          <button className="px-8 py-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all font-bold text-sm">
            Download Resume
          </button>
        </a>
      </aside>

      {/* RIGHT SECTION (Content) */}
      <main className="w-full md:w-1/2 p-6 md:p-12 lg:p-24 overflow-y-auto">
        
        {/* About Section */}
        <section ref={aboutRef} id="about" className="mb-20 scroll-mt-10">
          <h2 className="sticky top-0 z-20 py-4 text-sm font-bold uppercase tracking-widest text-white backdrop-blur-md md:hidden">About</h2>
          <p className="leading-relaxed text-slate-400 text-lg text-justify">
            Results-driven Data Analyst with hands-on experience in data analysis, reporting, and dashboard development through internship and multiple real-world projects. 
            Proficient in Excel, SQL, Power BI, and Python with strong skills in data cleaning, visualization, and KPI tracking. 
            Experienced in analyzing large datasets including banking transactions, HR analytics, healthcare data, and crowdfunding campaigns to generate business insights. 
            Skilled in building interactive dashboards and transforming raw data into actionable insights for decision-making. 
            Eager to contribute analytical expertise to data-driven teams and support business growth.
          </p>

          <div className="mt-12 space-y-12">
            <h3 className="text-xl font-bold text-white border-b border-white/10 pb-2">Experience</h3>
            
            {/* Experience Block 1 */}
            <div className="flex flex-col gap-2 group">
              <span className="text-xs font-semibold opacity-50 uppercase">01/2025 - 12/2025</span>
              <h4 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">Data Analyst | ExcelR</h4>
              <p className="text-sm italic opacity-50">In Bengaluru, India.</p>
              <ul className="mt-2 space-y-2 text-sm opacity-80 list-disc pl-4">
                <li>Designed Power BI dashboards to monitor website traffic and campaign metrics.</li>
                <li>Generated Excel reports to evaluate user behavior trends.</li>
                <li>Collaborated with teams to convert findings into actionable marketing improvements.</li>
              </ul>
            </div>

            {/* Experience Block 2 */}
            <div className="flex flex-col gap-2 group">
              <span className="text-xs font-semibold opacity-50 uppercase">02/2025 - 02/2025</span>
              <h4 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">Data Science Virtual Internship | British Airways</h4>
              <p className="text-sm italic opacity-50">Remote, India</p>
              <ul className="mt-2 space-y-2 text-sm opacity-80 list-disc pl-4">
                <li>Worked with datasets to identify patterns and performance insights.</li>
                <li>Developed visual dashboards for stakeholder reporting.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section ref={projectsRef} id="projects" className="mb-20 scroll-mt-10">
          <h2 className="sticky top-0 z-20 py-4 text-sm font-bold uppercase tracking-widest text-white backdrop-blur-md md:hidden">Projects</h2>
          <div className="grid grid-cols-1 gap-12">
            {imgLink.map((img, index) => (
              <div key={index} className="flex flex-col gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 transition-all group">
                <a href={imgProjFile[index]} download className="overflow-hidden rounded-lg">
                  <img
                    src={img}
                    alt={`project-${index}`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </a>
                <div className="p-2">{projTags[index]}</div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Footer Info */}
        <footer className="border-t border-white/10 pt-10 space-y-10">
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4">Certifications</h3>
            <ul className="space-y-2 text-sm opacity-70">
              <li>• Business Analyst Certification - ExcelR (2025)</li>
              <li>• Data Science Job Simulation - Forage (2025)</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4">Education</h3>
              <p>Computer Science and Engineering - (2021-2025)
                 CGPA - 7.33</p>
                 SNS College of Engineering, Coimbatore</p>
          </div>
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4">Languages</h3>
            <div className="flex flex-wrap gap-2 text-xs">
              {["Tamil", "English", "Malayalam", "Hindi"].map(lang => (
                <span key={lang} className="px-3 py-1 rounded-full bg-white/10 border border-white/5">{lang}</span>
              ))}
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
