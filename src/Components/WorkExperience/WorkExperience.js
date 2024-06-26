import React from 'react'
import './WorkExperience.css'

function WorkExperience() {

return (
   <section className="experience" id="experience">
        <h2 className="experience__title">Experience</h2>
          <div className="experience__wrapper">
            <h3 className="experience__subtitle">Apr 2024 - Present: FullStack-Developer, InsAIt</h3>
            <ul className="experience__container">
                <li>Developed responsive and visually appealing frontend solutions using React, TypeScript, and integrated data visualization with Recharts,
                </li>
                <li>
                Engineered robust backend APIs leveraging Node.js for server-side logic, Python for data processing tasks, and integrated workflow orchestration with Prefect and data modeling with Prisma,
                </li>
                <li>
                Led initiatives in codebase refactoring to improve code maintainability, readability, and scalability
                </li>
            </ul>  
            <h3 className="experience__subtitle">Dec 2022 - Present: Web-Developer, Veles Research, (Software Development)</h3>
            <ul className="experience__container">
                <li>Participating in the development of an online store, a testing platform, 
                    and a social network (Responsible for data validation, API and layout design in React),
                </li>
                <li>
                    Participating in designing and structuring applications and websites 
                    in cooperation with backend developers, contributing to the creation of APIs, 
                    code merging, and reviewing processes,
                </li>
                <li>
                    Collaborate with Backend Developers to create API, merge and review code,
                </li>
                <li>Refactoring of the codebase
                </li>
            </ul>
            <h3 className="experience__subtitle">Nov 2021 - Oct 2022: Web-Developer (Student) in Practicum by Yandex (Educational Platform)</h3>
            <ul className="experience__container">
                <li>Developed applications and websites using React, JavaScript, Object-Oriented
                    Programming (OOP), HTML, and CSS</li>
                <li>Developed the server-side of the application (including API creation, database
                    management, Node.js, Express, MongoDB)</li>
                <li>Deployed web applications to servers using Webpack, NGINX, pm2</li>
            </ul>
            <h3 className="experience__subtitle">May 2022 - Oct 2022: Web-Developer (Junior Developer) AUTO49 (Selling goods store)</h3>
            <ul className="experience__container">
                <li>Website design and web page coding (HTML,CSS)</li>
                <li>Creating layouts in Figma</li>
            </ul>
            <h3>Sep 2011 - May 2018: Lawyer, Several companies</h3>
            <ul className="experience__container">
                <li>Protected interests of companies in court</li>
                <li>Negotiated and represented the company in authorities</li>
                <li>Handled lease agreements and supply contracts, etc</li>
            </ul>
          </div>
    </section>
)
}

export default WorkExperience;