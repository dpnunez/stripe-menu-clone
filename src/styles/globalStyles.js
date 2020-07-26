import { createGlobalStyle } from 'styled-components'

const globalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
  *, button, input {
    border: 0;
    background: none;
    font-family: 'Roboto', -apple-system, system-ui, sans-serif;
  }
  ul {
    list-style: none;
    padding-left: 0;
  }
`

export default globalStyle