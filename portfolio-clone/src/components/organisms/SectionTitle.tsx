/**  @jsxImportSource @emotion/react */
import { Text } from '@components/atoms/Text'
import { motion } from 'framer-motion'
import IconObjectLinkChain from '@public/static/icon/object/link-chain.svg'
import Image from 'next/image'
/**
 * This component, SectionTitle, displays a title with an optional link icon on the left. 
 * The icon has a hover effect, and clicking it triggers an optional event passed through onClickScrollClip. 
 * The title is animated to appear with a slight vertical motion when it enters the viewport. 
 * The text style is customizable with a dynamic color and has a bottom border.
 */

export type SectionTitleProps = {
  title: string, // The title text to be displayed
  color?: string, // Optional color for the title text
  onClickScrollClip?: () => void // Optional function to handle click event on the icon
}

// SectionTitle component
export const SectionTitle = ({
  title,
  color,
  onClickScrollClip,
}: SectionTitleProps) => (
  // Motion div for adding animation effects when the section title comes into view
  <motion.div
    initial={{ translateY: 0, opacity: 0 }} // Initial position and opacity (invisible)
    whileInView={{
      translateY: -20, // Moves the title slightly upwards when in view
      opacity: 1, // Full opacity when in view
    }}
    transition={{
      delay: 0.3, // Delay before starting the animation
      x: { duration: 10 }, // Duration of the horizontal movement (if any)
      default: { ease: 'linear' } // Defines the easing function for smooth motion
    }}
    viewport={{
      once: true, // Animation triggers only once when the component comes into view
    }}
    css={{
      display: 'flex', // Align items horizontally
      alignItems: 'center', // Vertically center-align items
    }}
  >
    {/* Icon that is displayed on the left of the title */}
    <div
      css={{
        position: 'absolute', // Positioned absolutely relative to its parent
        marginLeft: '-3rem', // Moves the icon to the left
        cursor: 'pointer', // Changes the cursor to a pointer on hover
      }}
      onClick={onClickScrollClip} // Triggers the passed click event function
    >
      <Image
        src={IconObjectLinkChain} // Source of the icon image
        width={40} // Icon width
        height={40} // Icon height
        css={{
          opacity: 0.5, // Initially, the icon has 50% opacity
          position: 'absolute', // Positioned absolutely within the container
          ':hover': {
            opacity: 0.7, // On hover, increase opacity to 70%
          },
        }}
      />
    </div>
    {/* Title text with the optional color prop */}
    <Text
      css={{
        fontWeight: 'bold', // Makes the title bold
        fontSize: '4rem', // Sets the font size to 4rem
        borderBottomColor: '#cccccc', // Adds a bottom border with light grey color
        borderBottomWidth: 2, // Sets the border width to 2px
        borderBottomStyle: 'solid', // Solid line for the bottom border
        color, // Dynamically sets the text color based on the passed prop
      }}
    >
      {title} {/* Displays the title text */}
    </Text>
  </motion.div>
)
