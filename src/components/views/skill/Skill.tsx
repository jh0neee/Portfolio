import styled from "styled-components";

const Skill = () => {
  return (
    <SkillWrapper id="SKILL">
      <div></div>
    </SkillWrapper>
  );
};

export default Skill;

const SkillWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 84px;

  > div {
    width: 80%;
    border: 1px solid black;
    border-radius: 20px;
  }
`;
