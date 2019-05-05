import React from 'react'
import styled from 'styled-components'

const Text = styled.p`
  margin: 1rem 0;
  color: #fff;
  font-family: ${({ theme }) => theme.font.sansSerif};
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.5px;
  margin-bottom: 17px;
`
const Wrapper = styled.footer`
  background-color: #333;
  text-align: center;
`

export default () => (
  <Wrapper>
    <Text>
      {'Copyright 2018 Omid Ahourai. All Rights Reserved.'}
    </Text>
  </Wrapper>
)
