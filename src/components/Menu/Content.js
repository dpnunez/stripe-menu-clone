import React, { useCallback, useState, useEffect } from 'react';
import styled from 'styled-components'

const Content = ({active, handleDimensions, children}) => {
  const [dimensions, setDimensions] = useState({})

  const takeSize = useCallback((element) => {
    if(element !== null) {
      console.dir(element)
      setDimensions({
        width: element.clientWidth - 10,
        height: element.clientHeight - 10
      })
      return element.clientWidth
    }
  }, [])

  useEffect(() => {
    if(active) {
      console.log(dimensions)
      handleDimensions(dimensions)
    }
  }, [active, dimensions, handleDimensions])

  return (
    <Wrapper ref={takeSize} active={active}>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  transition: opacity ease 0.3s;
  opacity: ${({active}) => active ? 1 : 0};

  > * {
    padding: 20px;
  }
`

export default Content;