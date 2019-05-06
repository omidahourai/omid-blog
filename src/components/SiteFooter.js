import React from 'react'
import styled, { css } from 'styled-components'
import Theme from 'styled-theming'

const Text = styled.p`
  margin: 1rem 0;
  color: #fff;
  font-family: ${({ theme }) => theme.font.sansSerif};
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.5px;
  margin-bottom: 17px;
`
const footerStyles = Theme('mode', {
  light: css`
    background-color: #333;
  `,
  dark: css`
    background-color: #111;
  `
})
const Wrapper = styled.footer`
  text-align: center;
  ${footerStyles}
`

export default () => (
  <Wrapper>
    <Text>
      {'Copyright 2018 Omid Ahourai. All Rights Reserved.'}
    </Text>
  </Wrapper>
)
