import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { activeMenuState } from "@/recoil/atom";
import styled from "styled-components";
import { useGoToMenu } from "@/hooks/useGoToMenu";
import { useScroll } from "@/hooks/useScroll";
import { projectMenu, sections } from "../constant/data";

interface ActiveProps {
  $menuWidth: string;
  $menuLeft: string;
}

const SideBar = () => {
  const [activeMenu, setActiveMenu] = useRecoilState(activeMenuState);
  const { handleGoTo } = useGoToMenu();

  // 스크롤 이벤트 hook
  useScroll(setActiveMenu);

  useEffect(() => {
    const defaultSection = sections[0];
    setActiveMenu(defaultSection);
  }, []);

  const handleActive = (menu: string) => {
    setActiveMenu(menu);
    handleGoTo(menu);
  };

  return (
    <Navigation>
      <li>
        <p>ABOUT ME?</p>
      </li>
      <li>
        <p>SKILL</p>
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

    &:nth-child(3) {
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
    cursor: pointer;
  }
`;

const Menu = styled.div<ActiveProps>`
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
