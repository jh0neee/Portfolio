import { useGoToMenu } from "@/hooks/useGoToMenu";
import { activeMenuState } from "@/recoil/atom";
import { useRecoilState } from "recoil";
import styled from "styled-components";

const projectMenu = ["Billim", "Portfolio", "Survey"];

const SideBar = () => {
  const [activeMenu, setActiveMenu] = useRecoilState(activeMenuState);
  const { handleGoTo } = useGoToMenu();

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
          <li key={menu}>
            <Menu
              className={activeMenu === `${menu}` ? "active" : ""}
              onClick={() => handleActive(menu)}
            >
              {menu}
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
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 200px;
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

const Menu = styled.div`
  &.active {
    position: relative;
    display: inline-block;
  }

  &.active::after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 5px;
    height: 5px;
    background-color: #8ebcb1;
    border-radius: 5px;
    width: 100px;
  }
`;
