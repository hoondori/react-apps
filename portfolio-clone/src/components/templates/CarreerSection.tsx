/**  @jsxImportSource @emotion/react */

import { forwardRef, ForwardRefRenderFunction, ReactElement } from "react"
import { Divider, Text } from "@components/atoms"
import Image from 'next/image'
import IconCompanyFirst from '@public/static/icon/object/aha.png'
import IconCompanySecond from '@public/static/icon/object/amazon.png'
import { SectionMethodsType } from "pages"
import { Section } from "@components/organisms/Section"
import { Center } from "@components/atoms"
import { SectionTitle } from "@components/organisms/SectionTitle"
import { motion } from 'framer-motion'

type CompanyItemType = {
  title: string // 회사명
  period: string[] // 재직기간(from, to)
  descr: string | ReactElement  // 회사 소개
  role: string | ReactElement // 나의 역할  
  imageIcon: ReactElement  // 회사 이미지 아이콘
}

type ProjectItemType = {
  title: string // 프로젝트명
  period: string[] // 진행기간(from, to)
  descriptions: (string | ReactElement)[]  // 설명들
}

type CareerItemType = {
  company: CompanyItemType
  projects: ProjectItemType[]
}



const CareerList: CareerItemType[] = [
  {
    company: {
      title: '회사명#1',
      period: ['20xx-xx-xx', '20xx-xx-xx'],
      descr: (
        <>
          이 회사는 XXXX 하는 회사로써 {' '}
          <Text bold>1천만</Text>이상의 고객을 가진
          <Text bold> 제1 XX 회사</Text>입니다. 
        </>
      ),
      role: (
        <>
          XXX 포지션으로 XXX 를 담당하고 있습니다. 
        </>
      ),
      imageIcon: (
        <div  // 원
          css={{
            backgroundColor: 'white',
            borderRadius: '100%',
            width: '250px',
            height: '250px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #ccc',
          }}
        >
          <div // 원 안의 이미지
            css={{ 
              position: 'absolute',
              width: '18rem',
            }}
          >
            <Image src={IconCompanyFirst} />
          </div>
        </div>
      )
    },
    projects: [
      {
        title: '프로젝트#1',
        period: ['20xx-xx-xx', '20xx-xx-xx'],
        descriptions: ['#1 설명입니다', '#2 설명입니다']
      },
      {
        title: '프로젝트#2',
        period: ['20xx-xx-xx', '20xx-xx-xx'],
        descriptions: ['#1 설명입니다', '#2 설명입니다']
      }      
    ]
  },
  {
    company: {
      title: '회사명#2',
      period: ['20xx-xx-xx', '20xx-xx-xx'],
      descr: (
        <>
          이 회사는 YYY 하는 회사로써 {' '}
          <Text bold>3천만</Text>이상의 고객을 가진
          <Text bold> 제3 XX 회사</Text>입니다. 
        </>
      ),
      role: (
        <>
          YYY 포지션으로 ZZZ 를 담당하고 있습니다. 
        </>
      ),
      imageIcon: (
        <div
          css={{
            backgroundColor: 'white',
            borderRadius: '100%',
            width: '250px',
            height: '250px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #ccc',
          }}
        >
          <div // 원 안의 이미지
            css={{ 
              position: 'absolute',
              width: '13rem',
            }}
          >
            <Image src={IconCompanySecond} />
          </div>
        </div>
      )
    },
    projects: [
      {
        title: '프로젝트#1',
        period: ['20xx-xx-xx', '20xx-xx-xx'],
        descriptions: ['#1 설명입니다', '#2 설명입니다']
      },
      {
        title: '프로젝트#2',
        period: ['20xx-xx-xx', '20xx-xx-xx'],
        descriptions: ['#1 설명입니다', '#2 설명입니다']
      }      
    ]
  }  
]

type CareerContentProps = {
  career: CareerItemType 
}

const CareerContent = ({career}: CareerContentProps) =>(
  <motion.div
    css={{
      display: 'flex',
      width: '100%',
      maxWidth: '71.25rem',
      gap: '4rem',
      flexDirection: 'column',
      '@media (min-width: 800px)': {
        flexDirection: 'row',
      },
    }}  
  >
    <div 
      css={{
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        borderBottomStyle: 'solid',

        paddingBottom: '4rem',
        display: 'flex',
        justifyContent: 'center', 
        
        '@media (min-width: 800px)': {
          borderRightColor: '#ccc',
          borderRightWidth: 1,
          borderBottomWidth: 0,
          borderRightStyle: 'solid',
          paddingRight: '4rem',
        },        
      }}
    >
      {career.company.imageIcon}
    </div>
    <div>
      <header>
        <div>
          <Text 
            css={{
              fontSize: '1.75rem',
              fontWeight: 'bold',
            }}
          >
            {career.company.title}
          </Text>
        </div>
        <div 
          css={{
            marginTop: '0.5rem',
            marginBottom: '0.5rem',
          }}
        >
          <Text 
            css={{
              fontSize: '1.25rem',
              color: '#6c757d',
            }}
          >
            {career.company.period[0]} - {career.company.period[1]}
          </Text>
        </div>  
      </header>

      <article>
        <Text 
          css={{
            fontSize: '1.2rem',
          }}
        >
          {career.company.descr}
        </Text>
      </article>

      <article
        css={{
          marginTop: '1rem',
        }}
      >
        <Text
          css={{
            fontSize: '1.2rem',
          }}        
        >
          {career.company.role}
        </Text>
      </article>  
    
      <Divider
        style={{
          marginTop: '1rem',
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
        {career.projects
          .map(
            (project) => (
              <article key={project.title}>
                <Text 
                  css={{
                    fontWeight: 'bold',
                    fontSize: '1.2rem',
                  }}
                >
                ▎ {project.title}
                </Text>
                <div 
                  css={{
                    marginTop: '0.5rem',
                    marginBottom: '0.5rem',
                  }}
                >
                  <Text 
                    css={{
                      fontSize: '1.1rem',
                      color: '#6c757d',
                    }}                  
                  >
                    {project.period[0]} - {project.period[1]}
                  </Text>
                </div>
                <ul 
                  css={{
                    paddingLeft: '1rem',
                    li: {
                      marginBottom: '0.5rem',
                    },
                  }}
                >
                  {project.descriptions.map((desc, idx)=>
                    <li key={idx}>
                      <Text>{desc}</Text>
                    </li>
                  )}
                </ul>
              </article>
            )
          )
        }
      </div>         
    </div>
  </motion.div>
)


type CareerSectionProps = {
  sectionMethods: SectionMethodsType
}

const CareerSection: ForwardRefRenderFunction<
  HTMLDivElement,
  CareerSectionProps
> = ({sectionMethods}, ref) => {
  return (
    <Section
      ref={ref}
      css={{
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#f5f5f5',
        padding: '6rem 2rem'
      }}
    >
      <Center
        css={{
          flexDirection: 'column',
          flex: 1,
        }}
      >
        <SectionTitle
          title='CAREER' 
          onClickScrollClip={()=>sectionMethods.scrollToSection(4)}  
        />      
      <motion.div
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
          justifyContent: 'space-around',
          marginTop: '4rem',
          gap: '3rem',
          flexDirection: 'column',
          '@media (min-width: 1800px)': {
            flexDirection: 'row',
          },
        }}          
      >
        {CareerList.map(
          (career)=> (
            <CareerContent career={career}/>
          )
        )}
        </motion.div> 
      </Center>               
    </Section>
  )
}

export default forwardRef(CareerSection)