import Link from "next/link";
import styled from "styled-components";

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

const Navigation = styled.ul`
  width: 14%;
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
  }
`;
