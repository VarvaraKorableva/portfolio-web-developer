import React from 'react'
import './WorkExperience.css'

function WorkExperience() {

return (
   <section className="experience" id="experience">
        <h2 className="experience__title">Experience</h2>
          <div className="experience__wrapper">

            <h3 className="experience__subtitle">Dec 2022 - Present: FullStack-Developer, Veles Research, (Software Development)</h3>
            <ul className="experience__container">
                <li>Developing and maintaining an online store, task-solving platform, and social network with both frontend (React, TypeScript) and backend (Node.js).</li>
                <li>Designing and optimizing backend APIs, ensuring smooth integration with frontend systems.</li>
                <li>Implementing client-requested features and updates to existing applications.</li>
                <li>Refactoring codebase to enhance system performance, readability, and maintainability.</li>
            </ul> 

            <h3 className="experience__subtitle">Apr 2024 - Jul 2024: FullStack-Developer, InsAIt, (Software Development)</h3>
            <ul className="experience__container">
                <li>Developed an admin panel for client management with React and TypeScript, including features for messaging, statistics, charts, reviews, and data management.</li>
                <li>Designed database models and built backend APIs with Node.js and PostgreSQL for data handling and integration with frontend systems.</li>
                <li>Implemented data visualization using Recharts and integrated access control with Keycloak.</li>
                <li>Refactored both frontend and backend code to improve performance, scalability, and maintainability.</li>
            </ul>  

            <h3 className="experience__subtitle">Nov 2021 - Oct 2022: FullStack-Developer in Practicum by Yandex</h3>
            <ul>
                <li>Developed landing pages and a social network with full-stack functionality, using Node.js, Express, MongoDB, and React.</li>
                <li>Created and deployed backend APIs for user data management and interactions, ensuring scalability and high performance.</li>
                <li>Managed application deployment using Webpack, NGINX, and PM2, optimizing server performance and ensuring stability in production.</li>
            </ul>

            <h3>Sep 2011 - May 2018: Lawyer, Several companies</h3>
            <ul className="experience__container">
                <li>Protected interests of companies in court.</li>
                <li>Negotiated and represented the company in authorities.</li>
                <li>Handled lease agreements and supply contracts, etc.</li>
            </ul>
          </div>
    </section>
)
}

export default WorkExperience;