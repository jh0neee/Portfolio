import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styled, { css } from "styled-components";
import Contact from "../views/Contact";

interface BlogLinkProps {
  name: string;
  path: string;
  $openModal: boolean;
}

const NavBar = () => {
  const router = useRouter();
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
        <BlogLink
          href="/blog"
          name="/blog"
          path={router.pathname}
          $openModal={showModal}
        >
          BLOG
        </BlogLink>
        <ContactLink onClick={openModal} $openModal={showModal}>
          CONTACT
        </ContactLink>
      </HeaderMenu>
      <Contact showModal={showModal} closeModal={closeModal} />
    </HeaderContainer>
  );
};

export default NavBar;

const HeaderContainer = styled.div`
  position: fixed;
  z-index: 9;
  width: 100vw;
  height: 120px;
  display: flex;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.7);
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
      margin-right: 60px;
    }
  }
`;

const commonLinkStyle = css`
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: -4px;
    height: 5px;
    background-color: #8ebcb1;
    border-radius: 5px;
  }
`;

const BlogLink = styled(Link)<BlogLinkProps>`
  ${props =>
    props.name === props.path &&
    !props.$openModal &&
    css`
      ${commonLinkStyle}
      &::after {
        width: 67px;
      }
    `}
`;

const ContactLink = styled.p<{ $openModal: boolean }>`
  ${props =>
    props.$openModal &&
    css`
      ${commonLinkStyle}
      &::after {
        width: 108px;
      }
    `}
`;
