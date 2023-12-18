import styled from "styled-components";

const HeaderContainer = styled.div`
  height: 120px;
  display: flex;
  justify-content: space-between;
  padding: 0 3.5rem 0 0;
  background: lightyellow;
`;

const HeaderTitle = styled.div`
  display: flex;
  align-items: center;

  > p {
    padding-left: 0.5rem;
    font-size: 2rem;
    letter-spacing: 3px;
  }
`;

const HeaderLine = styled.div`
  display: flex;
  flex-direction: column;

  > * {
    width: 15px;
    height: 60px;

    &:first-child {
      background: #245254;
    }

    &:last-child {
      background: #387271;
    }
  }
`;

const HeaderMenu = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.1rem;

  > * {
    &:first-child {
      margin-right: 67px;
    }
  }
`;

const NavBar = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>
        <HeaderLine>
          <div />
          <div />
        </HeaderLine>
        <p>PORTFOLIO</p>
      </HeaderTitle>
      <HeaderMenu>
        <p>BLOG</p>
        <p>CONNECT</p>
      </HeaderMenu>
    </HeaderContainer>
  );
};

export default NavBar;
