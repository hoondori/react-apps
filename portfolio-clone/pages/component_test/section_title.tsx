/**  @jsxImportSource @emotion/react */
import { SectionTitle } from "@components/organisms/SectionTitle"
import { Text, Divider, Center } from "@components/atoms"

export default function SectionTitleTest() {
  return (
    <Center type='fixed'
      css={{
        flexDirection: 'column',
        flex: 1,
      }}
    >    
      <SectionTitle
        title="this is section title"
        color="red"
        onClickScrollClip={
          () => alert("alert me")
        }
      >
      </SectionTitle>
      <Text bold color='red'
        css={{
          fontSize: "3rem",
          borderBottomColor: '#cccccc',
          borderBottomWidth: 2,
          borderBottomStyle: 'solid'
        }}
      > ABCD
      </Text>
      <Text bold color="green">BABO</Text>      
    </Center>
  )
}