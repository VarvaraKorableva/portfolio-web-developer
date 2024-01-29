import React from 'react'
import './About.css'

function About() {

return (
    <section className='about'>
        <h2 className='about__title'>About me</h2>
        <div className='about__text-continer'>
          <p className='about__text'>Hello! I'm glad you're here and I'm sure you'll find this page interesting!</p>
          <p className='about__text'>My name is Varvara, and I'm a web developer. But the most intriguing part of my 
          life is who I was before and how I decided to switch career paths.
          </p>
          <p className='about__text'>For most of my life, my dream was to become a lawyer, perhaps because my 
          father is a lawyer, or maybe simply because I watched a lot of law-related movies during my childhood. 
          And I achieved that dream! I studied rigorously and for a long time, finally landing my first job and 
          working continuously for almost 7 years as a lawyer, which I loved.
          </p>
          <p className='about__text'>A few years ago, I decided to do something extraordinary and started 
          learning web development. I began with beginner-level materials, then progressed to more advanced 
          resources—many books, serious professional courses—and voila! I secured my first job as a web developer. 
          I'm incredibly grateful to my friend Sergey for believing in me!
          </p>
          <p className='about__text'>Now, I work as a frontend developer at Veles Research, and my dreams keep 
          coming true.</p>
          <p className='about__text'>I've completed over 15 projects from scratch using React, collaborated with 
          amazing teams, and I continue to grow every day.</p>
          <p className='about__text'>I'm passionate about sports (snowboarding, climbing, paragliding), 
          music, and traveling (having explored more than 30 countries). My goal is to be happy and healthy.</p>
        </div>

    </section>
)
}

export default About;