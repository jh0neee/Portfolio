import Link from "next/link";
import styled from "styled-components";

const Navigation = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 77px;
  min-width: 160px;

  > * {
    margin-bottom: 92px;
    font-size: 22px;
    align-self: center;
    text-decoration: none;

    &:nth-child(4) {
      margin-bottom: 1rem;
    }
  }
`;

const ProjectList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  > * {
    margin-bottom: 1rem;
  }
`;

const SideBar = () => {
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
        <li>
          <p>Billim</p>
        </li>
        <li>
          <p>Survey</p>
        </li>
        <li>
          <p>Portfolio</p>
        </li>
      </ProjectList>
    </Navigation>
  );
};

export default SideBar;
