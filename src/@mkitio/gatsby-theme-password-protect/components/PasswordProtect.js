import React, { useState } from "react"
import { setSessionPassword } from "../utils/utils"
import styled, { css } from "styled-components"
import { navbarHeight } from "../../../utility/sizes"
import rem from "../../../utility/rem"

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: calc(100vh - ${rem(navbarHeight)});
  color: #666;

  font-size: 8rem;
  max-width: 100%;
  width: 100%;
  align-items: center;
  align-content: center;
  font-weight: 200;
  @media screen and (max-width: 995px) {
    padding: 0 10%;
  }
`

const StyledForm = styled.form`
  display: flex;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 26px;
  color: #333;
  flex-direction: row;
  font-weight: 400;
  margin: 0 auto;
  outline: 0;
  position: relative;
  width: 100%;
  @media screen and (min-width: 540px) {
    width: 420px;
  }
`

const StyledInput = styled.input`
  width: 100%;
  height: 48px;
  border-radius: 26px;
  border-style: none;
  color: #333;
  font-size: 1.8rem;
  outline: 0;
  padding: 15px 25px;
  width: 100%;
`

const StyledButton = styled.button`
  position: absolute;
  @media screen and (min-width: 540px) {
    position: inherit;
  }
  font-size: 1.5rem;
  font-weight: bold;
  height: 40px;
  margin-right: 7px;
  top: calc(10px + 100%);
  transition: background-color 0.2s;
  width: 100%;
  ${props =>
    props.isHovering
      ? css`
          background: #444;
        `
      : css`
          background: black;
        `}
  border: 0;
  border-radius: 100px;
  float: left;
  outline: 0;
  padding: 0 20px 1px;
  color: white;
`

const PasswordProtect = () => {
  const [password, setPassword] = useState("")
  const [isButtonHovered, buttonHover] = useState(false)

  const onSubmit = event => {
    event.preventDefault()
    setSessionPassword(password)
    window.location.reload() // eslint-disable-line
  }

  return (
    <Wrapper>
      <StyledForm onSubmit={onSubmit}>
        <StyledInput
          name="password"
          placeholder="Enter Password"
          type="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
        <StyledButton
          isHovering={isButtonHovered}
          type="submit"
          onMouseEnter={() => buttonHover(true)}
          onMouseLeave={() => buttonHover(false)}
        >
          ENTER
        </StyledButton>
      </StyledForm>
    </Wrapper>
  )
}

export default PasswordProtect
