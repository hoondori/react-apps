/**  @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { Text, Divider, Center } from "@components/atoms"

export default function TextTest() {
  return (
    <>
      <Center type='fixed'>
        <Text bold color='red'
          css={{
            fontSize: "3rem",
            borderBottomColor: '#cccccc',
            borderBottomWidth: 2,
            borderBottomStyle: 'solid'
          }}
        >
          ABCD
        </Text>
        <Text bold color="green">BABO</Text>
        <Divider/>
      </Center>
    </>

  )
}


