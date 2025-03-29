/**  @jsxImportSource @emotion/react */
'use client'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useCallback, useRef } from "react"
import { useMemo } from 'react'
import AboutMeSection from "@components/templates/AboutMeSection"
import CareerSection from '@components/templates/CarreerSection'
import MySkillSection from '@components/templates/MySkillSection'
import ProjectSection from '@components/templates/ProjectSection'
import { motion, useScroll, useTransform } from 'framer-motion'

import { Text } from '@components/atoms'
import IntroSection, {
  INTRO_SECTION_PAGE_HEIGHT,
} from '@components/templates/IntroSection'


const HEADER_HEIGHT = 72

export type SectionMethodsType = {
  scrollToSection: (index: number) => void
}

const Home: NextPage = () => {
  // references to major sections
  const IntroSectionRef = useRef<HTMLDivElement>(null);
  const AboutMeSectionRef = useRef<HTMLDivElement>(null);
  const CareerSectionRef = useRef<HTMLDivElement>(null);
  const MySkillSectionRef = useRef<HTMLDivElement>(null);
  const ProjectSectionRef = useRef<HTMLDivElement>(null);

  const scrollToSection = useCallback(
    (index: number) => {
      if (typeof window !== 'undefined') {
        // TEMP
        const isMobile = window.innerWidth < 800

        switch(index) {
          case 0: // to the introduction section
            return window.scrollTo({
              top: IntroSectionRef.current?.offsetTop! - (!isMobile?HEADER_HEIGHT:0),
              behavior: 'smooth'
            })
          case 1: // to the about me section
            return window.scrollTo({
              top: AboutMeSectionRef.current?.offsetTop! - (!isMobile?HEADER_HEIGHT:0),
              behavior: 'smooth'
            })
          case 2: // to skill section
            return window.scrollTo({
              top: MySkillSectionRef.current?.offsetTop! - (!isMobile?HEADER_HEIGHT:0),
              behavior: 'smooth'
            })        
          case 3: // to project section
            return window.scrollTo({
              top: ProjectSectionRef.current?.offsetTop! - (!isMobile?HEADER_HEIGHT:0),
              behavior: 'smooth'
            })
          case 4: // to the about me section
            return window.scrollTo({
              top: CareerSectionRef.current?.offsetTop! - (!isMobile?HEADER_HEIGHT:0),
              behavior: 'smooth'
            })            
        }
      } else {
        console.log("no window")
      }
    },
    []
  )

  // navigation bar
  const headers = [
    { title: 'About Me', scrollIndex: 1},
    { title: 'Skill', scrollIndex: 2 },
    { title: 'Project', scrollIndex: 3 },
    { title: 'Career', scrollIndex: 4 },    
  ]

  const sectionMethods = useMemo(
    () => ({ scrollToSection }), 
    [scrollToSection]
  )

  // change the background color of a header based on the scroll position (along the Y-axis),
  const { scrollY } = useScroll()
  const headerBackgroundColor = useTransform(
    scrollY, 
    (value) => {
      return value > INTRO_SECTION_PAGE_HEIGHT ? 'white' : 'black'
    }
  )

  const headerTextBackgroundColor = useTransform(
    scrollY, 
    (value) => {
      return value > INTRO_SECTION_PAGE_HEIGHT ? 'black' : 'white'
    }
  )

  return (
    <main
      css={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        css={{
          display: 'none',
          '@media (min-width: 800px)': {
            'display': 'block'
          }
        }}
      >
        
        <motion.header
          style={{ backgroundColor: headerBackgroundColor}}
          css={{
            zIndex: 101,
            position: 'fixed',
            top: 0,
            height: HEADER_HEIGHT,
            opacity: 0.9,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '2rem',
            paddingRight: '2rem',
            justifyContent: 'center',
            boxShadow: '0 1px 0.3rem hsl(0deg 0% 80% / 80%)',
          }}
        >
          {/**Logo + Navigation*/}
          <div
            css={{
              maxWidth: '71.25rem',
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',              
            }}
          >
            {/**Logo*/}
            <Text bold 
              css={{
                fontSize: '2rem',
                cursor: 'pointer',
                transition: '0.2s ease',
                ':hover': {
                  color: '#007aff !important',
                },
              }}
              onClick={() => { scrollToSection(0)}}
              style={{
                color: headerTextBackgroundColor,
              }}
            >
              {"Hoondori Portfolio"}
            </Text>
            
            {/**Navigation*/}
            <div
              css={{
                display: 'flex',
                gap: '2rem',
                alignItems: 'center',
              }}
            >
              {headers.map((header) => (
                <Text
                  key={header.title}
                  style={{
                    color: headerTextBackgroundColor,
                  }}                                      
                  css={{
                    fontSize: '1.5rem',
                    cursor: 'pointer',
                    transition: '0.2s ease',
                    ':hover': {
                      color: '#007aff !important',
                    },
                  }}
                  onClick={() => {scrollToSection(header.scrollIndex)}}
                >
                  {header.title}
                </Text>
             
              ))}
            </div> {/**end of navigation*/}
          </div> {/**end of Logo + Navigation*/}
        </motion.header>
      </div>
      <IntroSection ref={IntroSectionRef} sectionMethods={sectionMethods} />
      <AboutMeSection ref={AboutMeSectionRef} sectionMethods={sectionMethods} />
      <MySkillSection ref={MySkillSectionRef} sectionMethods={sectionMethods} />      
      <ProjectSection ref={ProjectSectionRef} sectionMethods={sectionMethods} />
      <CareerSection ref={CareerSectionRef} sectionMethods={sectionMethods} />
    </main>    
  )
}





// const Home: NextPage = () => {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Create Next App</title>
//         <meta name="description" content="Generated by create next app" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className={styles.main}>
//         <h1 className={styles.title}>
//           Welcome to <a href="https://nextjs.org">Next.js!</a>
//         </h1>

//         <p className={styles.description}>
//           Get started by editing{' '}
//           <code className={styles.code}>pages/index.tsx</code>
//         </p>

//         <div className={styles.grid}>
//           <a href="https://nextjs.org/docs" className={styles.card}>
//             <h2>Documentation &rarr;</h2>
//             <p>Find in-depth information about Next.js features and API.</p>
//           </a>

//           <a href="https://nextjs.org/learn" className={styles.card}>
//             <h2>Learn &rarr;</h2>
//             <p>Learn about Next.js in an interactive course with quizzes!</p>
//           </a>

//           <a
//             href="https://github.com/vercel/next.js/tree/canary/examples"
//             className={styles.card}
//           >
//             <h2>Examples &rarr;</h2>
//             <p>Discover and deploy boilerplate example Next.js projects.</p>
//           </a>

//           <a
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             className={styles.card}
//           >
//             <h2>Deploy &rarr;</h2>
//             <p>
//               Instantly deploy your Next.js site to a public URL with Vercel.
//             </p>
//           </a>
//         </div>
//       </main>

//       <footer className={styles.footer}>
//         <a
//           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Powered by{' '}
//           <span className={styles.logo}>
//             <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
//           </span>
//         </a>
//       </footer>
//     </div>
//   )
// }

export default Home
