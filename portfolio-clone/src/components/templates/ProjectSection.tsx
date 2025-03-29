/**  @jsxImportSource @emotion/react */
import { Center } from '@components/atoms/Center'
import { Text } from '@components/atoms/Text'
import { Section } from '@components/organisms/Section'
import { motion } from 'framer-motion'
import { useTheme } from '@emotion/react'
import { forwardRef, ForwardRefRenderFunction } from 'react'
import { SectionTitle } from '@components/organisms/SectionTitle'
import { SectionMethodsType } from 'pages'
import { Swiper, SwiperSlide } from 'swiper/react'
import ProjectTodo1 from '@public/static/images/project-any-todo-1.jpg'
import ProjectTodo2 from '@public/static/images/project-any-todo-2.jpg'
import ProjectTodo3 from '@public/static/images/project-any-todo-3.jpg'
import ProjectAha1 from '@public/static/images/project-aha-1.png'
import ProjectAha2 from '@public/static/images/project-aha-2.png'
import ProjectAha3 from '@public/static/images/project-aha-3.png'
import ProjectAha4 from '@public/static/images/project-aha-4.png'
import { Divider } from '@components/atoms/Divider'
import androidMarket from '@public/static/logo/market/google-play.svg'
// import close from '@public/static/icon/object/close.svg'
import iosMarket from '@public/static/logo/market/apple-store.png'
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper'
import Image from 'next/image'

type ProjectSectionProps = {
  sectionMethods: SectionMethodsType
}

type SkillTagProps = {
  title: string
}

const SkillTag = ({ title }: SkillTagProps ) => (
  <div
    css={{
      borderRadius: '1rem',
      border: '1px solid gray',
      padding: '0px 4px',
      cursor: 'pointer',
      userSelect: 'none'
    }}
  >
    <Text
      css={{
        fontSize: '0.875rem'
      }}
    >
      {title}
    </Text>

  </div>
)
//imageList: [ProjectAha1, ProjectAha2, ProjectAha3, ProjectAha4],    
// imageList: [ProjectTodo1, ProjectTodo2, ProjectTodo3],
const ProjectList = [
  {
    title: 'TodoApp',
    subTitle: '20xx-xx ~ 20yy-yy',
    imageList: [ProjectAha1, ProjectAha2, ProjectAha3, ProjectAha4],
    description: (
      <>
        <div>
          <Text>
            TODO Service is {' '}
            <Text bold>
              app that organize your schedule
            </Text>
          </Text>
        </div>
      </>
    ),
    subDescription: [
      { title: 'major capability', description: <Text>TODO Service Capabilities</Text> },
      {
        title: 'URL',
        description: (
          <div
            css={{
              display: 'flex',
              gap: '0.5rem'
            }}
          >
            <div
              css={{
                width: 40,
                cursor: 'pointer',
              }}
              onClick={
                () => window.open('https://path_to_google_playstore')
              }
            >
              <Image src={androidMarket} />
            </div>
            <div
              css={{
                width: 40,
                cursor: 'pointer'
              }}
              onClick={
                () => window.open('https://path_to_apple_store')
              }
            >
              <Image src={iosMarket} />
            </div>
          </div>
        )
      },
      {
        title: 'Skill Stack',
        description: (
          <div
            css={{
              display: 'flex',
              gap: '0.25rem',
              flexWrap: 'wrap'
            }}
          >
            <SkillTag title="React-Native" />
            <SkillTag title="NextJs" />
            <SkillTag title="Redux" />
          </div>
        )
      }
    ]
  }
]

const ProjectSection: ForwardRefRenderFunction<
  HTMLDivElement,
  ProjectSectionProps
> = ({ sectionMethods }, ref) => {
  const theme = useTheme()

  SwiperCore.use([Navigation, Pagination, Autoplay]) // 추가

  return (
    <Section
      ref={ref}
      css={{
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#4244ff',
        padding: '6rem 2rem',
      }}
    >
      <Center
        css={{
          flexDirection: 'column',
          flex: 1,
        }}
      >
        <SectionTitle
          title="PROJECT"
          color={theme.colors.white}
          onClickScrollClip={() => sectionMethods.scrollToSection(5)}
        />

        {ProjectList.map((project) => (
          <motion.div
            key={project.title}
            initial={{ translateY: 0, opacity: 0 }}
            whileInView={{
              translateY: -20,
              opacity: 1,
            }}
            transition={{
              delay: 0.6,
              x: { duration: 1 },
              default: { ease: 'linear' },
            }}
            viewport={{
              once: true,
            }}
            css={{
              display: 'flex',
              width: '100%',
              marginTop: '4rem',
              justifyContent: 'center',
            }}
          >
            <Center
              css={{
                padding: '3rem',
                borderRadius: '1rem',
                backgroundColor: theme.colors.white,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Text
                bold
                css={{
                  fontSize: '2rem',
                }}
              >
                {project.title}
              </Text>
              <Text
                css={{
                  color: '#6c757d',
                }}
              >
                {project.subTitle}
              </Text>

              <div
                css={{
                  display: 'flex',
                  gap: '2rem',
                  marginTop: '3rem',
                  width: '100%',
                  alignItems: 'center',
                  maxWidth: '71.25rem',
                  flexDirection: 'column',
                  '@media (min-width: 800px)': {
                    flexDirection: 'row',
                  },
                }}
              >
                <div
                  css={{
                    width: '100%',
                    '@media (min-width: 800px)': {
                      width: '50%',
                    },
                  }}
                >
                  <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    autoplay={{
                      delay: 3000,
                    }}
                    loop
                    navigation
                    pagination={{ clickable: true }}
                  >
                    {project.imageList.map((image) => (
                      <SwiperSlide key={image.src}>
                        <div
                          css={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            userSelect: 'none',
                          }}
                        >
                          <Image src={image} alt={image.src} />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <div
                  css={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    '@media (min-width: 800px)': {
                      width: '50%',
                    },
                  }}
                >
                  <div>{project.description}</div>

                  <div>
                    <Divider
                      style={{
                        paddingBottom: '1rem',
                        marginBottom: '1rem',
                      }}
                    />

                    <div
                      css={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                      }}
                    >
                      {project.subDescription.map(({ title, description }) => (
                        <div
                          key={title}
                          css={{
                            display: 'flex',
                          }}
                        >
                          <div
                            css={{
                              width: '9rem',
                            }}
                          >
                            <Text>{title}</Text>
                          </div>
                          <div>{description}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Center>
          </motion.div>
        ))}
      </Center>
      {/* <Portal>
        <Center
          id="TEST"
          css={{
            height: '100%',
            width: '100%',
            position: 'fixed',
            top: 0,
          }}
        >
          <div
            css={{
              height: '100%',
              width: '100%',
              backgroundColor: 'white',
              position: 'relative',
              padding: '3rem',
            }}
          >
            <div
              css={{
                position: 'absolute',
                top: 0,
                right: 0,
                padding: '1rem',
              }}
            >
              <Image
                src={close}
                width="28px"
                height="28px"
                onClick={() => {}}
                css={{
                  cursor: 'pointer',
                }}
              />
            </div>
            <div>
              <Text>ㅁㄴㅇㅁㄴㅇㄴㅁㅇ</Text>
            </div>
          </div>
        </Center>
      </Portal> */}
    </Section>
  )
}

// const ProjectSection: ForwardRefRenderFunction<
//   HTMLDivElement,
//   ProjectSectionProps
// > = ({ sectionMethods }, ref) => {
//   const theme = useTheme()

//   SwiperCore.use([Navigation, Pagination, Autoplay])

//   return (
//     <Section
//       ref={ref}
//       css={{
//         justifyContent: 'center',
//         alignItems: 'flex-start',
//         backgroundColor: '#4244ff',
//         padding: '6rem 2rem'
//       }}
//     >
//       <Center 
//         css={{
//           flexDirection: 'column',
//           flex: 1,
//         }}
//       >
//         <SectionTitle
//           title="PROJECT"
//           color={theme.colors.white}
//           onClickScrollClip={() => sectionMethods.scrollToSection(5)}
//         />
//         {ProjectList.map((project) =>(
//           <motion.div
//             key={project.title}
//             initial={{ translateY: 0, opacity: 0}}
//             whileInView={{
//               translateY: -20,
//               opacity: 1,
//             }}
//             transition={{
//               delay: 0.6,
//               x: { duration: 1 },
//               default: { ease: 'linear' },
//             }}
//             viewport={{
//               once: true,
//             }}
//             css={{
//               display: 'flex',
//               width: '100%',
//               marginTop: '4rem',
//               justifyContent: 'center'
//             }}            
//           >
//             <Center
//               css={{
//                 padding: '3rem',
//                 borderRadius: '1rem',
//                 backgroundColor: theme.colors.white,
//                 display: 'flex',
//                 flexDirection: 'column'
//               }}
//             >
//               <Text bold
//                 css={{
//                   fontSize: '2rem'
//                 }}
//               >
//                 {project.title}
//               </Text>
//               <Text
//                 css={{
//                   color: '#6c757d'
//                 }}
//               >
//                 {project.subTitle}
//               </Text>
//               <div
//                 css={{
//                   display: 'flex',
//                   gap: '2rem',
//                   marginTop: '3rem',
//                   width: '100%',
//                   alignItems: 'center',
//                   maxWidth: '71.25rem',
//                   flexDirection: 'column',
//                   '@media (min-width: 800px)': {
//                     flexDirection: 'row',
//                   },
//                 }}
//               >
//                 <div
//                   css={{
//                     width: '100%',
//                     '@media (min-width: 800px)': {
//                       width: '50%',
//                     },
//                   }}
//                 >
//                   <Swiper
//                     spaceBetween={50}
//                     slidesPerView={1}
//                     autoplay={{
//                       delay: 3000,
//                     }}
//                     loop
//                     navigation
//                     pagination={{ clickable: true }}                  
//                   >
//                     {project.imageList.map((image) => (
//                       <SwiperSlide key={image.src}>
//                         <div
//                           css={{
//                             display: 'flex',
//                             justifyContent: 'center',
//                             alignItems: 'center',
//                             userSelect: 'none',
//                           }}
//                         >
//                           <Image src={image} alt={image.src} />
//                         </div>
//                       </SwiperSlide>
//                     ))}
//                   </Swiper>
//                 </div>
//                 <div 
//                   css={{
//                     width: '100%',
//                     height: '100%',
//                     display: 'flex',
//                     flexDirection: 'column',
//                     justifyContent: 'space-between',
//                     '@media (min-width: 800px)': {
//                       width: '50%',
//                     },
//                   }}
//                 >
//                   <div>{project.description}</div>
//                   <div>
//                     <Divider
//                         style={{
//                           paddingBottom: '1rem',
//                           marginBottom: '1rem',
//                         }}
//                     />
//                     <div
//                       css={{
//                         display: 'flex',
//                         flexDirection: 'column',
//                         gap: '1rem',
//                       }}
//                     >
//                       {project.subDescription.map(
//                         ({title, description}) =>(
//                           <div
//                             key={title}
//                             css={{display: 'flex',}} 
//                           >
//                             <div
//                               css={{
//                                 width: '9rem',
//                               }}
//                             >
//                               <Text>{title}</Text>
//                             </div>
//                             <div> {description} </div>
//                           </div>
//                         )
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </Center>
//           </motion.div>
//         ))}
//       </Center>
//     </Section>
//   )
// }

export default forwardRef(ProjectSection)