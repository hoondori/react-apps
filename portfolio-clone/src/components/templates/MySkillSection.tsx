
/**  @jsxImportSource @emotion/react */
import IconHtml5 from '@public/static/logo/skills/html5.png'
import IconCss from '@public/static/logo/skills/css.png'
import IconJs from '@public/static/logo/skills/js.png'
import IconTailWind from '@public/static/logo/skills/tailwind.png'
import IconEmotion from '@public/static/logo/skills/emotion.png'
import IconTs from '@public/static/logo/skills/ts.png'
import IconSass from '@public/static/logo/skills/sass.png'
import IconStyledComponent from '@public/static/logo/skills/styled-component.png'
import IconJquery from '@public/static/logo/skills/jquery.png'
import IconReact from '@public/static/logo/skills/react.png'
import IconNext from '@public/static/logo/skills/next.png'
import IconRedux from '@public/static/logo/skills/redux.png'
import IconMobx from '@public/static/logo/skills/mobx.png'
import IconNest from '@public/static/logo/skills/nestjs.png'
import IconMysql from '@public/static/logo/skills/mysql.png'
import IconPostgresql from '@public/static/logo/skills/postgresql.png'
import IconTypeorm from '@public/static/logo/skills/typeorm.png'
import IconReactNative from '@public/static/logo/skills/react-native.png'
import IconNativeBase from '@public/static/logo/skills/native-base.png'
import IconAmazon from '@public/static/logo/skills/amazon.png'
import IconDocker from '@public/static/logo/skills/docker.png'
import IconFigma from '@public/static/logo/skills/figma.png'
import IconZeplin from '@public/static/logo/skills/zeplin.png'
import IconJira from '@public/static/logo/skills/jira-confluence.png'
import IconRedhat from '@public/static/logo/skills/redhat.png'

import Image, { StaticImageData } from 'next/image'
import { Interpolation, Theme, CSSObject, useTheme } from '@emotion/react'
import { motion } from 'framer-motion'
import { SectionMethodsType } from 'pages'
import { forwardRef, ForwardRefRenderFunction } from 'react'
import { Center } from '@components/atoms/Center'
import { Text } from '@components/atoms/Text'
import { Section } from '@components/organisms/Section'
import { SectionTitle } from '@components/organisms/SectionTitle'


type SkillItemProps = {
  src: string | StaticImageData
  imageContainerStyle: Interpolation<Theme>
  containerStyle?: CSSObject
}

const SkillItem = ({
  src,
  imageContainerStyle,
  containerStyle
}: SkillItemProps) => (
  <motion.div
    whileHover={{ scale: 1.1}}
    css={{
      borderWidth: 2,
      borderColor: '#eeeeee',
      borderStyle: 'solid',
      cursor: 'pointer',
      borderRadius: '1rem',
      userSelect: 'none',
      display: 'flex',
      width: '90px',
      height: '90px',
      alignItems: 'center',
      justifyContent: 'center',      
      ...containerStyle
    }}
  >
    <div css={imageContainerStyle}>
      <Image src={src} />
    </div>
  </motion.div>
)

const FrontendSection = () => {
  const theme = useTheme()

  return (
    <section>
      <div
        css={{
          backgroundColor: theme.colors.white,
          padding: '2rem',
          borderRadius: '1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
          boxShadow: '1rem 1rem 1rem 0 rgb(68 68 68 / 20%)',
        }}
      >
        <Text 
          css={{
            color: theme.colors.carrot,
            fontSize: '1.5rem',
            borderBottom: '1px solid #ccc',
            fontWeight: 'bold',
            marginBottom: '1rem'
          }}
        >
          FrontEnd
        </Text>
        {/** 1 line */}
        <article  
          css={{
            display: 'flex',
            gap: '0.5rem',
            justifyContent: 'space-between',
            width: '280px'
          }}
        >
          <SkillItem src={IconHtml5} imageContainerStyle={{width:'4.25rem'}} />
          <SkillItem src={IconCss} imageContainerStyle={{width:'3rem'}} />
          <SkillItem src={IconJs} imageContainerStyle={{width:'3rem'}} />
        </article>
        {/** 2 line */}
        <article
          css={{
            display: 'flex',
            gap: '0.5rem',
            justifyContent: 'space-between',
            width: '280px'
          }}          
        >
          <SkillItem src={IconTs} imageContainerStyle={{width:'4rem'}} />
          <SkillItem src={IconSass} imageContainerStyle={{width:'10rem', marginLeft: '-1rem', marginRight: '-1rem'}} />
          <SkillItem src={IconStyledComponent} 
            imageContainerStyle={{width:'4rem'}} containerStyle={{backgroundColor: 'black'}} />
        </article>

        {/** 3 line */}
        <article
          css={{
            display: 'flex',
            justifyContent: 'space-between',
          }}          
        >
          <SkillItem src={IconTailWind} 
            imageContainerStyle={{width:'10rem'}} containerStyle={{width:'100%'}}/>
        </article>        
        {/** 4 line */}
        <article
          css={{
            display: 'flex',
            justifyContent: 'space-between',
          }}          
        >
          <SkillItem src={IconEmotion} 
            imageContainerStyle={{width:'14rem'}} containerStyle={{width:'100%'}}/>
        </article>                
      </div>        
    </section>
  )
}


const BackendSection = () => {
  const theme = useTheme()

  return (
    <section>
      <div
        css={{
          backgroundColor: theme.colors.white,
          padding: '2rem',
          borderRadius: '1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
          boxShadow: '1rem 1rem 1rem 0 rgb(68 68 68 / 20%)',
        }}
      >
        <Text 
          css={{
            color: theme.colors.carrot,
            fontSize: '1.5rem',
            borderBottom: '1px solid #ccc',
            fontWeight: 'bold',
            marginBottom: '1rem'
          }}
        >
          BackEnd
        </Text>
        {/** 1 line */}
        <article  
          css={{
            display: 'flex',
            width: '280px'
          }}
        >
          <SkillItem src={IconNest} imageContainerStyle={{width:'9rem'}} containerStyle={{width: '100%'}} />
        </article>
        {/** 2 line */}
        <article
          css={{
            display: 'flex'
          }}          
        >
          <SkillItem src={IconMysql} imageContainerStyle={{width:'8rem'}} containerStyle={{width: '100%'}}/>
        </article>

        {/** 3 line */}
        <article
          css={{
            display: 'flex'
          }}          
        >
          <SkillItem src={IconPostgresql} imageContainerStyle={{width:'5rem'}} containerStyle={{width: '100%'}}/>
          <SkillItem src={IconTypeorm} imageContainerStyle={{width:'5rem'}} containerStyle={{width: '100%'}}/>          
        </article>                   
      </div>        
    </section>
  )
}

const MobileSection = () => {
  const theme = useTheme()

  return (
    <section>
      <div
        css={{
          backgroundColor: theme.colors.white,
          padding: '2rem',
          borderRadius: '1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
          boxShadow: '1rem 1rem 1rem 0 rgb(68 68 68 / 20%)',
        }}
      >
        <Text 
          css={{
            color: theme.colors.carrot,
            fontSize: '1.5rem',
            borderBottom: '1px solid #ccc',
            fontWeight: 'bold',
            marginBottom: '1rem'
          }}
        >
          Mobile App
        </Text>
        {/** 1 line */}
        <article  
          css={{
            display: 'flex',
            width: '280px'
          }}
        >
          <SkillItem src={IconReactNative} imageContainerStyle={{width:'14rem'}} containerStyle={{width: '100%'}} />
        </article>
        {/** 2 line */}
        <article
          css={{
            display: 'flex'
          }}          
        >
          <SkillItem src={IconNativeBase} imageContainerStyle={{width:'15rem'}} containerStyle={{width: '100%'}}/>
        </article>        
      </div>        
    </section>
  )
}


type MySkillSectionProps = {
  sectionMethods: SectionMethodsType
}

const MySkillSection: ForwardRefRenderFunction<
  HTMLDivElement,
  MySkillSectionProps
> = ({ sectionMethods}, ref) => {
  const theme = useTheme()

  return (
    <Section
      ref={ref}
      css={{
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#ffc107',
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
          title='SKILL' 
          onClickScrollClip={()=>sectionMethods.scrollToSection(2)}  
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
            justifyContent: 'center',
            marginTop: '4rem',
            gap: '2rem'
          }}          
        >  
          <div
            css={{
              display: 'flex',
              gap: '2rem',
              flexDirection: 'column',
              '@media (min-width: 1200px)': {
                flexDirection: 'row',
              },
            }}
          >
            <FrontendSection/>
            <BackendSection/>
            <MobileSection/>
          </div>        

        </motion.div>
      </Center>
    </Section>
  )
}

export default forwardRef(MySkillSection)