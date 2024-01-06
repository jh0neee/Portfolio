import { useState } from "react";
import styled, { css } from "styled-components";
import Contact from "../views/Contact";
import { sections } from "../constant/data";
import { useGoToMenu } from "@/hooks/useGoToMenu";
import { useRecoilState } from "recoil";
import { selectBlogState } from "@/recoil/atom";

const NavBar = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectBlog, setSelectBlog] = useRecoilState(selectBlogState);
  const { handleGoTo } = useGoToMenu();

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const goToHome = () => {
    setSelectBlog(false);
    handleGoTo(sections[0]);
  };

  return (
    <HeaderContainer>
      <HeaderTitle>
        <HeaderLine>
          <div />
          <div />
        </HeaderLine>
        <p onClick={() => goToHome()}>PORTFOLIO</p>
      </HeaderTitle>
      <HeaderMenu>
        <BlogLink
          onClick={() => setSelectBlog(true)}
          $openModal={showModal}
          $selectBlog={selectBlog}
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
  height: 84px;
  display: flex;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.7);
  font-family: "PuradakGentleGothicR";
`;

const HeaderTitle = styled.div`
  display: flex;
  align-items: center;

  > p {
    cursor: pointer;
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
    height: 42px;

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

const BlogLink = styled.p<{ $selectBlog: boolean; $openModal: boolean }>`
  cursor: pointer;
  ${props =>
    props.$selectBlog &&
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
