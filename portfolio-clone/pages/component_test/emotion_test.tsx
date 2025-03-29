/**  @jsxImportSource @emotion/react */
import { css } from "@emotion/react"


export default function App() {
  return (
    <>
      <div css={css`
        background: yellow;
      `}>
        <h1> Hello</h1>
      </div>
      <div css={{
        backgroundColor: "red",
      }}>
        <h1> Hello</h1>
      </div>    
    </>
  )
}