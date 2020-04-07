import React from 'react';

import {
  Container,
  Bar,
  ToolbarTitle,
  Navigation,
  RedirectLink,
  ButtonOutlined
} from './styles';

export default function Header() {
  return (
    <Container position="static" color="default" elevation={0}>
      <Bar>
        <ToolbarTitle variant="h6" color="inherit" noWrap>
          Company name
        </ToolbarTitle>
        <Navigation>
          <RedirectLink href="#" >
            Features
          </RedirectLink>
          <RedirectLink href="#" >
            Enterprise
          </RedirectLink>
          <RedirectLink href="#" >
            Support
          </RedirectLink>
        </Navigation>
        <ButtonOutlined href="#">
          Login
        </ButtonOutlined>
      </Bar>
    </Container>
  );
}
