"use client";
import Image from 'next/image';
import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillLinkedin, AiFillInstagram, AiFillGithub, AiFillBehanceCircle} from 'react-icons/ai';
import shreya from '../public/me.png';
import delta from '../public/delta.png';
import redbus from '../public/redbus.png';
import nit from '../public/nit.png';
import gwc from '../public/gwc.png';
import hackumass from '../public/hackumass.png';
import cye from '../public/cye.png';
import python from "../public/python.png";
import java from "../public/Java.png";
import sql from "../public/MySQL.png";
import js from "../public/javascript.png";
import node from "../public/node.png";
import react from "../public/React.png";
import html from "../public/html.png";
import css from "../public/css.png";
import next from "../public/next.webp";
import c from "../public/c.png";
import tableau from "../public/tableau.png";
import aws from "../public/aws.png";
import dbeaver from "../public/dbeaver.png";
import nginx from "../public/nginx.png";
import linux from "../public/linux.png";
import figma from "../public/figma.png";
import umass from "../public/umass.png";
import cics from "../public/cics.png";
import headstart from "../public/headstart.png";
import delta1 from "../public/delta1.jpg";
import delta2 from "../public/delta2.jpg";
import delta3 from "../public/delta3.jpg";
import delta4 from "../public/delta4.jpg";
import { useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "" : "dark"}>
      <Head>
        <title>Shreya Nimbali</title>
      </Head>
      <main className="bg-white px-10 py-5 dark:bg-black">
        {/* Main Page */}
        <section className="min-h-screen">
          <nav className='p-10 mb-12 flex justify-between'>
            <h1 className="text-2xl font-burtons text-black dark:text-white">Shreya Nimbali</h1>
            <ul className="flex item.center">
              <li className="text-black dark:text-white">
                <BsFillMoonStarsFill onClick={()=>setDarkMode(!darkMode)} className="cursor-pointer text-2xl"/>
              </li>
              <li><a className="bg-gradient-to-br from-purple-500 to-blue-300 text-white px-4 py-3 rounded-md ml-8"href="#">Resume</a></li>
            </ul>
          </nav>
          <div className="relative bg-gradient-to-br from-purple-500 to-blue-300 rounded-full w-80 h-80 mx-auto overflow-hidden">
              <Image className="w-60 h-60" src={shreya} layout="fill" objectFit='cover'/>
          </div>
          <div className="text-center p-10">
            <h2 className="text-6xl py-2 font-medium text-black dark:text-white">Shreya Nimbali</h2>
            <h3 className="text-xl pt-2 text-blue-500 dark:text-blue-400">Software Engineering . Data Science . Product Design</h3>
          </div>
          <div className="flex justify-center text-5xl gap-8 cursor-pointer text-black dark:text-purple-300">
            <a href="https://www.linkedin.com/in/shreya-nimbali-181737192/"><AiFillLinkedin/></a>
            <a href="https://github.com/shreyanimbali"><AiFillGithub/></a>
            <a href="https://www.behance.net/shreyanimbali"><AiFillBehanceCircle/></a>
            <AiFillInstagram/>
          </div>
        </section>
        {/* Work Experience */}
        <section>
          <div className="text-center px-10">
            <h2 className="text-3xl py-2 font-medium text-black mt-20 dark:text-white">Professional Adventures 🚀</h2>
          </div>
          <div>
            <ul className='px-40 py-10'>
              <li className="flex gap-20 shadow-lg rounded-2xl p-10 mt-10 bg-gray-100 dark:bg-gradient-to-br from-slate-900 to-gray-950">
                <Image className="w-60 h-60 my-auto" src={delta}/>
                <div className="my-auto">
                  <h2 className="text-2xl text-black font-semibold dark:text-purple-300">Delta Air Lines</h2>
                  <p className="text-gray-600 mr-20 py-5 text-justify dark:text-blue-300">
                    June 2023 - Present
                  </p>
                  <p className="text-gray-600 mr-10 py-5 text-justify dark:text-gray-400">
                  Welcome aboard! I'm a <span className="text-purple-500 dark:text-blue-300">Data Engineering Co-op</span> soaring high at Delta Air Lines HQ in Atlanta. 
                  My mission? Crafting an awe-inspiring Tableau dashboard, featuring Post-Inflight Medical Event survey outcomes. 
                  With AWS Glue as my trusty co-pilot, I integrate data with finesse, offering real-time updates and safety insights that fly us to improved safety protocols and medical response. 
                  </p>
                  <h3 className="text-xl text-black my-5 font-semibold dark:text-white">Skills</h3>
                  <div className="flex gap-10 text-blue-500 mr-20 dark:text-blue-300">
                    <h3>Python</h3>
                    <h3>AWS</h3>
                    <h3>Tableau</h3>
                    <h3>MySQL</h3>
                  </div>
                </div>
              </li>
              {/* <ul className="grid grid-cols-2 gap-5 p-10 flex-wrap">
                <li className="relative w-100 h-100 mx-auto rounded-2xl overflow-hidden">
                  <Image style={{ width: '100%', height: '100%', borderRadius: '2rem' }} src={delta1} objectFit='cover' />
                </li>
                <li className="relative w-100 h-100 mx-auto rounded-2xl overflow-hidden">
                  <Image style={{ width: '100%', height: '100%', borderRadius: '2rem' }} src={delta2} objectFit='cover' />
                </li>
              </ul> */}
              <li className="flex gap-20 shadow-lg rounded-2xl p-10 mt-10 bg-gray-100 dark:bg-gradient-to-br from-slate-900 to-gray-950">
                <Image className="w-60 h-60 my-auto" src={redbus}/>
                <div className="my-auto">
                  <h2 className="text-2xl text-black font-semibold dark:text-purple-300">redBus</h2>
                  <p className="text-gray-600 mr-20 py-5 text-justify dark:text-blue-300">
                    June 2022 - August 2022
                  </p>
                  <p className="text-gray-600 mr-10 py-5 text-justify dark:text-gray-400">
                    During my time at the redBus Headquarters in Bengaluru, India, I wore the cape of a <span className="text-purple-500 dark:text-blue-300">Customer Behavior and Engineering Intern</span>. I crunched some serious data, boosting perception by over 70% through Exploratory Data Analysis on NGINX access logs. 
                    I nailed a 99% accuracy in classifying network speeds using Machine Learning. And hey, I didn't stop there – I leveled up the web server with a slick NGINX Header Module, adding that extra flair to the HTTP response based on the classifier results. 
                  </p>
                  <h3 className="text-xl text-black my-5 font-semibold dark:text-white">Skills</h3>
                  <div className="flex gap-10 text-blue-500 mr-20 dark:text-blue-300">
                    <h3>Python</h3>
                    <h3>NGINX</h3>
                    <h3>C</h3>
                    <h3>Linux</h3>
                  </div>
                </div>
              </li>
              <li className="flex gap-20 shadow-lg rounded-2xl p-10 mt-10 bg-gray-100 dark:bg-gradient-to-br from-slate-900 to-gray-950">
                <Image className="w-60 h-60 my-auto" src={nit}/>
                <div className="my-auto">
                  <h2 className="text-2xl text-black font-semibold dark:text-purple-300">National Institute of Technology</h2>
                  <p className="text-gray-600 mr-20 py-5 text-justify dark:text-blue-300">
                    May 2022 - July 2022
                  </p>
                  <p className="text-gray-600 mr-10 py-5 text-justify dark:text-gray-400">
                  My journey as a <span className="text-purple-500 dark:text-blue-300">Research & Development Intern</span> at NIT, Raipur was a delightful whirlwind! 
                  I improved model performance by implementing data augmentation on a real-life Psoriasis dataset. Psoriasis image classification soared to new heights with UNet, Macro Unit-Based CNN, and Modified-VGG, boasting a cool 98% accuracy. To level up, I tapped into Vision Transformer and TransUNet models for advanced image processing tasks. 
                  A summer of tech wonders!
                  </p>
                  <h3 className="text-xl text-black my-5 font-semibold dark:text-white">Skills</h3>
                  <div className="flex gap-10 text-blue-500 mr-20 dark:text-blue-300">
                    <h3>Python Libraries</h3>
                    <h3>CNN Models</h3>
                    <h3>Vision Transformer</h3>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
        {/* Extracurricular */}
        <section className="mt-21">
          <div className="text-center px-10 py-10">
            <h2 className="text-3xl py-2 font-medium text-black dark:text-white">Extracurricular Extravaganza ✨</h2>
          </div>
          <div>
            <ul className="flex grid-cols-3 gap-10 justify-center px-40 py-10 flex-wrap">
              <li className="justify-center text-center w-80 p-10 shadow-lg rounded-2xl bg-gray-100 dark:bg-gradient-to-br from-slate-900 to-gray-950">
                <Image className="w-40 h-40 m-auto" src={gwc}/>
                <div className="m-auto">
                  <h2 className="text-2xl text-black py-10 font-semibold dark:text-purple-300">Girls Who Code</h2>
                  <p className="text-gray-600 m-auto dark:text-gray-400">
                  As the <span className="text-blue-500 dark:text-blue-300">Founder and President</span> of the Girls Who Code College Loop at UMass Amherst, I lead a mission to break tech's gender barriers! 
                  Our weekly challenges and empowering workshops are the catalysts for honing computer science, design, prototyping, and product management skills for women and non-binary students. 
                  Watch out world, we're changing the game!
                  </p>
                </div>
              </li>
              <li className="justify-center text-center w-80 p-10 shadow-lg rounded-2xl bg-gray-100 dark:bg-gradient-to-br from-slate-900 to-gray-950">
                <Image className="w-40 h-40 m-auto" src={hackumass}/>
                <div className="m-auto">
                  <h2 className="text-2xl text-black py-10 font-semibold dark:text-purple-300">HackUMass</h2>
                  <p className="text-gray-600 m-auto dark:text-gray-400">
                  As a <span className="text-blue-500 dark:text-blue-300">Software Developer</span> in HackUMass' tech team, I collaborate with my team to conjure up awesome new features for the HackUMass dashboard and website, enhance the landing page's functionality, and sprinkle in some bug fixes.
                  And let's not forget the grand spectacle of organizing the university's largest hackathon, hosting over 600 participants! 
                  </p>
                </div>
              </li>
              <li className="justify-center text-center w-80 p-10 shadow-lg rounded-2xl bg-gray-100 dark:bg-gradient-to-br from-slate-900 to-gray-950">
                <Image className="w-40 h-40 m-auto" src={cye}/>
                <div className="m-auto">
                  <h2 className="text-2xl text-black py-10 font-bold dark:text-purple-300">CYE</h2>
                  <p className="text-gray-600 m-auto dark:text-gray-400">
                  As an <span className="text-blue-500 dark:text-blue-300">iOS Developer</span> at the Center for Youth Engagement, I'm part of a dedicated team working to empower underserved and at-risk youth through the 'AppBook.' 
                  I am focussed on enhancing the user experience, by developing engaging tools for the digital textbook. I am currently building an interactive simulation feature for the Ecology section.
                  </p>
                </div>
              </li>
              <li className="justify-center text-center w-80 p-10 shadow-lg rounded-2xl bg-gray-100 dark:bg-gradient-to-br from-slate-900 to-gray-950">
                <Image className="w-40 h-40 m-auto" src={umass}/>
                <div className="m-auto">
                  <h2 className="text-2xl text-black py-10 font-semibold dark:text-purple-300">Resident Assistant</h2>
                  <p className="text-gray-600 m-auto dark:text-gray-400">
                  As a <span className="text-blue-500 dark:text-blue-300">Resident Assistant</span> at UMass Amherst, I'm the go-to problem solver and friendly face for fellow students in the residence halls. 
                  With a heart for building community, I foster a welcoming and inclusive environment for all residents. 
                  From organizing fun events to providing support, my role is all about making dorm life a memorable and positive experience for everyone.
                  </p>
                </div>
              </li>
              <li className="justify-center text-center w-80 p-10 shadow-lg rounded-2xl bg-gray-100 dark:bg-gradient-to-br from-slate-900 to-gray-950">
                <Image className="w-40 h-40 m-auto" src={cics}/>
                <div className="m-auto">
                  <h2 className="text-2xl text-black py-10 font-semibold dark:text-purple-300">Research Volunteer</h2>
                  <p className="text-gray-600 m-auto dark:text-gray-400">
                  As an <span className="text-blue-500 dark:text-blue-300">Undergraduate Research Volunteer</span> in the winter of 2021, I immersed myself in blockchain technology with a PhD mentor. 
                  I analyzed research papers on blockchain applications like bitcoin, and used the YouTube API to extract comments from key influencers' videos. 
                  Their comments fueled a fascinating sentiment analysis, visualized through a word cloud.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>
        {/* Skills */}
        <section className="mt-21">
          <div className="text-center px-10 py-10">
            <h2 className="text-3xl py-2 font-medium text-black dark:text-white">Skill Spectrum 🌈</h2>
          </div>
          <div className="py-10 mx-40 mt-10 text-center shadow-lg rounded-2xl bg-gray-100 dark:bg-gradient-to-br from-slate-900 to-gray-950">
            <h2 className="text-2xl text-black font-semibold dark:text-purple-300">Programming</h2>
            <ul className='flex gap-20 justify-center px-10 mt-10 flex-wrap'>
              <li>
                <Image className="w-20 h-20" src={python} />
              </li>
              <li>
                <Image className="w-20 h-20" src={java} />
              </li>
              <li>
                <Image className="w-20 h-20" src={sql} />
              </li>
              <li>
                <Image className="w-20 h-20" src={js} />
              </li>
              <li>
                <Image className="w-20 h-20" src={node} />
              </li>
              <li>
                <Image className="w-20 h-20" src={react} />
              </li>
              <li>
                <Image className="w-20 h-20" src={html} />
              </li>
              <li>
                <Image className="w-20 h-20" src={css} />
              </li>
              <li>
                <Image className="w-20 h-20" src={next} />
              </li>
              <li>
                <Image className="w-20 h-20" src={c} />
              </li>
            </ul>
          </div>
          <div className="py-10 mx-40 mt-10 mb-10 text-center shadow-lg rounded-2xl bg-gray-100 dark:bg-gradient-to-br from-slate-900 to-gray-950">
            <h2 className="text-2xl text-black font-semibold dark:text-purple-300">Technology and Software</h2>
            <ul className='flex gap-20 justify-center px-10 mt-10 flex-wrap'>
              <li>
                <Image className="w-40 h-20" src={tableau} />
              </li>
              <li>
                <Image className="w-20 h-20" src={aws} />
              </li>
              <li>
                <Image className="w-20 h-20" src={dbeaver} />
              </li>
              <li>
                <Image className="w-20 h-20" src={nginx} />
              </li>
              <li>
                <Image className="w-20 h-20" src={linux} />
              </li>
              <li>
                <Image className="w-10 h-20" src={figma} />
              </li>
            </ul>
          </div>
        </section>
        {/* Awards */}
        <section className='mt-21'>
          <div className="text-center px-10 py-10">
            <h2 className="text-3xl py-2 font-medium text-black dark:text-white">Achievement Odyssey 🏅</h2>
          </div>
          <ul className="grid grid-cols-2 gap-10 justify-center px-40 py-10 flex-wrap pb-20">
            <li className="justify-center text-center w-100 p-10 shadow-lg rounded-2xl bg-gray-100 dark:bg-gradient-to-br from-slate-900 to-gray-950">
              <Image className="w-40 h-40 m-auto" src={umass}/>
              <div className="m-auto">
                <h2 className="text-2xl text-blue-500 py-10 font-semibold dark:text-purple-300">Chancellor's Merit Scholarship Award</h2>
                <p className="text-gray-600 m-auto dark:text-gray-400">
                I was delighted to be selected as a recipient of the Chancellor's Merit Scholarship Award, valued at $64,000, to pursue my undergraduate degree at UMass Amherst. 
                This recognition of my achievements has inspired me to aim higher and make the most of my educational journey. 
                </p>
              </div>
            </li>
            <li className="justify-center text-center w-100 p-10 shadow-lg rounded-2xl bg-gray-100 dark:bg-gradient-to-br from-slate-900 to-gray-950">
              <Image className="w-40 h-40 m-auto" src={cics}/>
              <div className="m-auto">
                <h2 className="text-2xl text-blue-500 py-10 font-semibold dark:text-purple-300">Student Organizations at UMass Amherst Leadership Award</h2>
                <p className="text-gray-600 m-auto dark:text-gray-400">
                I'm thrilled to be honored with the prestigious Student Organizations at UMass Amherst Leadership Award 2023! 
                As the Founder and President of the Girls Who Code chapter at UMass Amherst, 
                this recognition validates the hard work and impact we've made in promoting diversity and inclusion in tech.
                </p>
              </div>
            </li>
            <li className="justify-center text-center w-100 p-10 shadow-lg rounded-2xl bg-gray-100 dark:bg-gradient-to-br from-slate-900 to-gray-950">
              <Image className="w-40 h-40 m-auto" src={gwc}/>
              <div className="m-auto">
                <h2 className="text-2xl text-blue-500 py-10 font-semibold dark:text-purple-300">Girls Who Code X Raytheon Leadership Academy Scholar</h2>
                <p className="text-gray-600 m-auto dark:text-gray-400">
                Selected for the Leadership Academy Fall 2023 cohort by Girls Who Code and Raytheon Technologies, I'm thrilled for the semester ahead!
                Excited to tackle the Give Back Project, showcasing leadership and technical prowess for educational and employment opportunities in computer science. 
                </p>
              </div>
            </li>
            <li className="justify-center text-center w-100 p-10 shadow-lg rounded-2xl bg-gray-100 dark:bg-gradient-to-br from-slate-900 to-gray-950">
              <Image className="w-40 h-40 m-auto" src={headstart}/>
              <div className="m-auto">
                <h2 className="text-2xl text-blue-500 py-10 font-semibold dark:text-purple-300">HeadStart Student Fellow</h2>
                <p className="text-gray-600 m-auto dark:text-gray-400">
                As a proud Student Fellow in the Tech Vertical for the HeadStart Fellowship Fall 2022 cohort, I relished the transformative experience! 
                The program provided invaluable 1:1 Mentorship in technology and opportunities to connect with industry professionals gthat helped me grow exponentially.
                </p>
              </div>
            </li>
          </ul>
        </section>
        {/* UX Design
        <section>
          <div className="text-center p-10">
            <h2 className="text-3xl py-2 font-medium text-black dark:text-white">Design Alchemy 🎨</h2>
          </div>
        </section> */}
      </main>
    </div>
  )
}
