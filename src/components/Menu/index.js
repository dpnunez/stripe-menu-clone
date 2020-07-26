import React, { useState, useCallback, useRef, useEffect } from 'react';
import Content from './Content'
import styled from 'styled-components'

const menu_items = [
  {
    title: 'Lorem',
    content: <div>Lorem ipsum dolor imet</div>
  },
  {
    title: 'ipsum',
    content: <div><h1>Lorem</h1><p>ipsum</p></div>
  },
  {
    title: 'Dolor',
    content: <div>321</div>
  }
]



const Menu = () => {
  const [visible, setVisible] = useState()
  const [isOnDropDown, setIsOnDropDown] = useState(false)
  const [dropDownDimensions, setDropDownDimensions] = useState({})
  const dropDowRef = useRef()

  const clearDropDown = useCallback(() => setVisible(null), [])


  const handleDropDown = (item, element) => {
    setVisible(item)
    window.requestAnimationFrame(() => {
      dropDowRef.current.style.left = `${element.offsetLeft}px`
    })
  }

  useEffect(() => {
    if(!visible && !isOnDropDown) {
      dropDowRef.current.style.transition = 'opacity ease 0.3s'
      return 
    }
    dropDowRef.current.style.transition = 'all ease 0.3s, opacity ease 0.3s, left ease 0.3s'
  }, [visible, isOnDropDown, dropDowRef])

  return (
    <Navigation>
      <Logo src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/724px-Stripe_Logo%2C_revised_2016.svg.png' />
      <MenuList onMouseLeave={clearDropDown}>
        {menu_items.map((item, index) => (
          <MenuItem onMouseOver={(event) => handleDropDown(index + 1, event.currentTarget)}>{item.title}</MenuItem>
        ))}
        <DropdownInfos
          dimensions={dropDownDimensions}
          onMouseLeave={() => setIsOnDropDown(false)}
          onMouseOver={() => {
            if(visible) {
              setIsOnDropDown(true)
            }
          }}
          isOpened={visible || isOnDropDown}
          ref={dropDowRef}
        >
          {menu_items.map((item, index) => (
            <Content handleDimensions={setDropDownDimensions} active={visible === index + 1} >
              {item.content}
            </Content>
          ))}
        </DropdownInfos>
      </MenuList>
      <div>
        Actions
      </div>
    </Navigation>
  )
}


const Logo = styled.img`
  width: 100px;
`

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #F8F8F8;
  padding: 20px 60px;
  box-shadow: 0px -2px 10px 0px rgba(0,0,0,0.21);
`

const MenuList = styled.ul`
  display: flex;
  position: relative;
  justify-content: center;
`

const MenuItem = styled.li`
  cursor: pointer;
  display: inline;
  margin: 0px 20px;
  padding: 10px;
`

const DropdownInfos = styled.div`
  ${({dimensions}) => `
    min-height: ${dimensions.height + 10}px;
    max-height: ${dimensions.height + 10}px;
    max-width: ${dimensions.width + 10}px;
    min-width: ${dimensions.width + 10}px;
  `}
  position: absolute;
  top: calc(99%);
  transition: all 4s;
  overflow: hidden;
  background-color: white;
  opacity: ${({isOpened}) => isOpened ? 1 : 0};
  border-radius: 10px;
  box-shadow: 0px -2px 10px 0px rgba(0,0,0,0.21);


  >* {
    position: absolute;
  }
`
export {Menu};