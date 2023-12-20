import { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import Contact from "../views/Contact";

const HeaderContainer = styled.div`
  height: 120px;
  display: flex;
  justify-content: space-between;
  padding: 0 3.5rem 0 0;
  background: lightyellow;
  font-family: "PuradakGentleGothicR";
`;

const HeaderTitle = styled.div`
  display: flex;
  align-items: center;

  > a {
    padding-left: 27px;
    font-size: 2rem;
    letter-spacing: 0.5px;
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

    &:last-child {
      cursor: pointer;
    }
  }
`;

const NavBar = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <HeaderContainer>
      <HeaderTitle>
        <HeaderLine>
          <div />
          <div />
        </HeaderLine>
        <Link href="/">PORTFOLIO</Link>
      </HeaderTitle>
      <HeaderMenu>
        <Link href="/blog">BLOG</Link>
        <p onClick={openModal}>CONTACT</p>
      </HeaderMenu>
      <Contact showModal={showModal} closeModal={closeModal} />
    </HeaderContainer>
  );
};

export default NavBar;
