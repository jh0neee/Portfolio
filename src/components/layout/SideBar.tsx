import styled from "styled-components";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { useScroll } from "@/hooks/useScroll";
import { useGoToMenu } from "@/hooks/useGoToMenu";
import { projectMenu, sections } from "../constant/data";
import {
  activeMenuState,
  clickProjectState,
  selectBlogState,
  selectedMenuState,
} from "@/recoil/atom";

interface ActiveProps {
  $menuWidth: string;
  $menuLeft: string;
}

const SideBar = () => {
  const [activeMenu, setActiveMenu] = useRecoilState(activeMenuState);
  const [selectBlog, setSelectBlog] = useRecoilState(selectBlogState);
  const [clickProject, setClickProject] = useRecoilState(clickProjectState);
  const [selectedMenu, setSelectedMenu] = useRecoilState(selectedMenuState);

  const { handleGoTo } = useGoToMenu(); // 선택 섹션으로 스크롤 이동

  // 스크롤 이벤트 hook
  useScroll(setActiveMenu);

  useEffect(() => {
    if (selectBlog || clickProject) {
      setActiveMenu("");
    } else if (!selectBlog || !clickProject) {
      const defaultSection = selectedMenu || sections[0];
      setActiveMenu(defaultSection);
      handleGoTo(defaultSection);
    }
  }, [selectBlog, clickProject]);

  const handleActive = (menu: string) => {
    setSelectBlog(false);
    setClickProject(false);

    // 선택한 메뉴명 저장
    setSelectedMenu(menu);

    setActiveMenu(menu);
    handleGoTo(menu);
  };

  return (
    <Navigation>
      <li>
        <Menu
          className={activeMenu === "ABOUT" ? "active" : ""}
          $menuWidth={"110px"}
          $menuLeft={"-7px"}
          onClick={() => handleActive("ABOUT")}
        >
          ABOUT
        </Menu>
      </li>
      <li>
        <p>PROJECT</p>
      </li>
      <ProjectList>
        {projectMenu.map(menu => (
          <li key={menu.name}>
            <Menu
              className={activeMenu === `${menu.name}` ? "active" : ""}
              $menuWidth={menu.width}
              $menuLeft={menu.left}
              onClick={() => handleActive(menu.name)}
            >
              {menu.name}
            </Menu>
          </li>
        ))}
      </ProjectList>
    </Navigation>
  );
};

export default SideBar;

const Navigation = styled.ul`
  width: 14%;
  height: 100vh;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 84px;
  min-width: 160px;
  font-family: "PuradakGentleGothicR";

  > * {
    margin-bottom: 92px;
    font-size: 22px;
    align-self: center;
    text-decoration: none;

    &:nth-child(2) {
      margin-bottom: 2rem;
    }
  }
`;

const ProjectList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  > * {
    margin-bottom: 21px;
  }
`;

const Menu = styled.div<ActiveProps>`
  cursor: pointer;

  &.active {
    position: relative;
    display: inline-block;
  }

  &.active::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: ${({ $menuLeft }) => $menuLeft || "5px"};
    height: 5px;
    background-color: #8ebcb1;
    border-radius: 5px;
    width: ${({ $menuWidth }) => $menuWidth || "100px"};
  }
`;
