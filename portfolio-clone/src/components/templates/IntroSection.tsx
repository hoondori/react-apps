/**  @jsxImportSource @emotion/react */

/**
 * 스크롤 이벤트에 따라 페이지의 다양한 요소들(타이틀, 서브타이틀, 버튼 등)의 애니메이션을 동적으로 변화시키는 기능을 제공합니다.
 * 특히, Framer Motion의 애니메이션 도구들을 활용하여 스크롤 위치에 따라 요소들이 자연스럽게 변하며, 
 * 이를 통해 페이지를 더 인터랙티브하고 몰입감 있게 만듭니다
 */

import { useEffect, useRef } from "react"
import { Center, Text } from "@components/atoms"
import { useTheme } from "@emotion/react"
import { useScroll, useTransform } from "framer-motion"
import { motion } from "framer-motion"
import { SectionMethodsType } from "pages"
import { Section } from '@components/organisms/Section'
import { forwardRef, ForwardRefRenderFunction } from 'react'
import { SectionTitle } from '@components/organisms/SectionTitle'

export const INTRO_SECTION_PAGE_HEIGHT = 4000

//  MOTION_OFFSET 상수는 특정 스크롤 범위에 맞춰 애니메이션이 발생하는 구간을 설정합니다.
const MOTION_OFFSET = {
  WELCOME_CONTAINER_SCALE: [0, 900],
  WELCOME_MAIN_TITLE_OPACITY: [700, 900],
  WELCOME_SUB_TITLE_OPACITY: [500, 700],
  BIO_MAIN_TITLE_OPACITY: [1000, 2400],
  BIO_SUB_TITLE_OPACITY: [1400, 2400],
  BIO_MAIN_TITLE_TRANSLATE_Y: [1000, 1400],
  BIO_CONTAINER_HOLDUP_Y: 3400,
  READ_MORE_BUTTON_OPACITY: [2800, 3000],
  READ_MORE_BUTTON_TRANSLATE_Y: [2800, 3000],
}


// 페이지의 상단에서 나타나는 "메시지"(스크롤하여 진행해주세요) 와 관련된 애니메이션을 처리합니다. 
// 스크롤에 따라 타이틀과 서브타이틀의 불투명도(opacity)가 변화하고, 텍스트가 애니메이션됩니다.
const WelcomeFixedMotion = () => {
  const { scrollY } = useScroll()
  const theme = useTheme()

  /** container motion styles */
  const containerScale = useTransform(
    scrollY,
    MOTION_OFFSET.WELCOME_CONTAINER_SCALE,
    [1, 1.2]
  )

  /** main title motion styles */
  const mainTitleOpacity = useTransform(
    scrollY,
    MOTION_OFFSET.WELCOME_MAIN_TITLE_OPACITY,
    [1, 0]
  )

  /** sub title motion styles */
  const subTitleOpacity = useTransform(
    scrollY,
    MOTION_OFFSET.WELCOME_SUB_TITLE_OPACITY,
    [1, 0]
  )

  /** scrollNav motion styles */
  const scrollNavOpacity = useTransform(scrollY, (value) =>
    value > MOTION_OFFSET.BIO_CONTAINER_HOLDUP_Y ? 0 : 1
  )  

  return (
    <Center type="fixed">
      <Center
        css={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',          
        }}
      >
        {/** scroll instruction */}
        <motion.div
          css={{
            position: 'absolute',
            top: 150,
            margin: '1rem',
          }}
          initial={{ translateY: 0 }}
          whileInView={{
            translateY: '10px',
          }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 1,
            repeatDelay: 1,
          }}
          style={{ opacity: scrollNavOpacity }}          
        >
          <Text 
            css={{
              color: theme.colors.white,
            }}
          >
            ↓ 스크롤하여 진행해주세요!
          </Text>
        </motion.div>

        {/** Hello message and my name is */}
        <motion.div style={{scale: containerScale}}>
          {/** (Title) Hello message */}
          <motion.div
            style={{ opacity: mainTitleOpacity }}
            css={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Text 
              css={{
                color: theme.colors.white,
                textAlign: 'center',
                fontSize: '4rem',
                '@media (min-width: 768px)': {
                  'fontSize': '8rem'
                }
              }}
            >
              안녕하세요!
            </Text>
          </motion.div> 

          {/** (SubTitle) My name is */}
          <motion.div
            style={{ opacity: subTitleOpacity }}
            css={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Text 
              css={{
                color: theme.colors.white,
                textAlign: 'center',
                fontSize: '1.5rem',
                '@media (min-width: 768px)': {
                  fontSize: '2.5rem',
                },
              }}
            >
              개발자 정성훈입니다
            </Text>
          </motion.div> 
        </motion.div>
      </Center>
    </Center>
  )
}

// - BioFixedMotion:
//   "자기소개" 섹션에서 타이틀, 서브타이틀, 버튼에 애니메이션을 적용합니다. scrollY 값에 따라 텍스트의 불투명도와 위치, 버튼의 애니메이션도 처리됩니다.
//   버튼은 특정 스크롤 위치에서만 활성화되며, 클릭하면 다른 섹션으로 스크롤됩니다.
type BioFixedMotionProps = {
  sectionMethods: SectionMethodsType
}

const BioFixedMotion = ({ sectionMethods }: BioFixedMotionProps) => {
  const { scrollY } = useScroll()
  const theme = useTheme()
  const innerHeight = useRef(0)  

  /** container motion styles */
  const containerTranslateY = useTransform(scrollY, (value) => {
    const correctionOffset = innerHeight.current / 2 - 350

    return value > MOTION_OFFSET.BIO_CONTAINER_HOLDUP_Y - correctionOffset
      ? MOTION_OFFSET.BIO_CONTAINER_HOLDUP_Y - value - correctionOffset
      : 0
  })
  
  useEffect(
    () => {
      innerHeight.current = window.innerHeight
      window.addEventListener(
        'resize', 
        () => {
          innerHeight.current = window.innerHeight
          window.scrollBy(0,0);
        }
      )
    },
    []
  )

    /** main title motion styles */
    const mainTitleOpacity = useTransform(
      scrollY,
      MOTION_OFFSET.BIO_MAIN_TITLE_OPACITY,
      [0, 1]
    )
    const mainTitleTranslateY = useTransform(
      scrollY,
      MOTION_OFFSET.BIO_MAIN_TITLE_TRANSLATE_Y,
      [0, -10]
    )
  
    /** sub title motion styles */
    const subTitleOpacity = useTransform(
      scrollY,
      MOTION_OFFSET.BIO_SUB_TITLE_OPACITY,
      [0, 1]
    )
  
    /** button motion styles */
    const buttonOpacity = useTransform(
      scrollY,
      MOTION_OFFSET.READ_MORE_BUTTON_OPACITY,
      [0, 1]
    )
  
    const buttonTranslateY = useTransform(
      scrollY,
      MOTION_OFFSET.READ_MORE_BUTTON_TRANSLATE_Y,
      [0, -10]
    )
  
    const buttonPointerEvent = useTransform(scrollY, (value) =>
      value > MOTION_OFFSET.READ_MORE_BUTTON_OPACITY[0] ? 'auto' : 'none'
    )

  return (
    <Center type="fixed">
      <Center 
        css={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem'
        }}
      >
        <motion.div
          style={{
            translateY: containerTranslateY
          }} 
        >
          {/** NAME */}
          <motion.div
            style={{
              opacity: mainTitleOpacity,
              translateY: mainTitleTranslateY
            }}
            css={{
              display: 'flex',
              justifyContent: 'center'
            }}
            layout="position"
          >
            <Text 
              css={{
                color: theme.colors.white,
                fontSize: '3rem',
                textAlign: 'center',
                'media (min-width: 768px)' : {
                  fontSize: '4rem',
                },
              }}
            >
              개발자 정성훈
            </Text>          
          </motion.div>

          {/** SHORT BIO */}
          <motion.div
            style={{
              opacity: subTitleOpacity
            }}
            css={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Text 
              css={{
                color: theme.colors.white,
                textAlign: 'center',
                fontSize: '1.125rem',
                whiteSpace: 'break-spaces',
                'media (min-width: 768px)' : {
                  fontSize: '2rem',
                },                
              }}
            >
              xxx 개발자입니다.\n xxx 전반에 걸쳐 전문성이 있습니다'
            </Text>          
          </motion.div>

          <motion.div
            style={{
              opacity: buttonOpacity,
              translateY: buttonTranslateY,
              pointerEvents: buttonPointerEvent
            }}
            css={{
              marginBottom: '-4rem',
              marginTop: '4rem',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <button 
              css={{
                borderColor: theme.colors.white,
                borderWidth: 2,
                borderStyle: 'solid',
                borderRadius: '980px',
                backgroundColor: 'black',
                height: '52px',
                paddingLeft: '1rem',
                paddingRight: '1rem',
                cursor: 'pointer',
                ':hover': {
                  backgroundColor: theme.colors.white,
                  transition: 'background-color 350ms ease-in-out',
                  span: {
                    transition: 'color 350ms ease-in-out',
                    color: 'black',
                  },
                },
              }}
              onClick={
                () => { sectionMethods.scrollToSection(1)}
              }
            >
              <span 
                css={{
                  color: theme.colors.white,
                  fontSize: '1rem',
                }}
              >
                저를 조금 더 알아보고 싶나요?
              </span>
            </button>          
          </motion.div>
        </motion.div>
      </Center>
    </Center>
  )    
}

// define props
type IntroSectionProps = {
  sectionMethods: SectionMethodsType
}

const IntroSection: ForwardRefRenderFunction<
  HTMLDivElement,
  IntroSectionProps
> = ({ sectionMethods}, ref) => {
  const theme = useTheme()

  return (
    <Section
      ref={ref}
      css={{
        backgroundColor: theme.colors.black,
        height: INTRO_SECTION_PAGE_HEIGHT,
        position: 'relative'
      }}
    >
      <WelcomeFixedMotion/>
      <BioFixedMotion sectionMethods={sectionMethods} />
    </Section>
  )
}

export default forwardRef(IntroSection)