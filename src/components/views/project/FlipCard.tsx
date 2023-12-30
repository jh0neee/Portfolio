import Image from "next/image";
import { useState } from "react";
import styled, { css } from "styled-components";

interface StyleCard {
  $isFlipped: boolean;
  $isChecked: boolean;
}

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <CardWrapper>
      {/* <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(prev => !prev)}
      /> */}
      <p>아래 이미지를 클릭하면 자세히 볼 수 있습니다.</p>
      <Container onClick={handleCardClick}>
        <Card $isFlipped={isFlipped} $isChecked={isChecked}>
          <Front>
            <Image
              src="/image/project_billim.png"
              alt="front이미지"
              width={600}
              height={300}
            />
          </Front>

          <Back>
            <Image
              src="/image/project_survey.png"
              alt="back이미지"
              width={600}
              height={300}
            />
          </Back>
        </Card>
      </Container>
    </CardWrapper>
  );
};

export default FlipCard;

const CardWrapper = styled.div`
  > p {
    text-align: center;
    margin-bottom: 2rem;
    color: #888;
  }
`;

const Container = styled.div`
  position: relative;
  width: 480px;
  height: 250px;
`;

const Card = styled.div<StyleCard>`
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: all 0.5s ease;

  ${props =>
    props.$isChecked &&
    css`
      &:hover {
        transform: rotateY(180deg);
      }
    `}

  ${props =>
    !props.$isChecked &&
    props.$isFlipped &&
    css`
      transform: rotateY(180deg);
    `}
`;

const Front = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: #fff;
  color: #333;

  > img {
    width: 100%;
    height: 100%;
  }
`;

const Back = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: #fafafa;
  color: #333;
  transform: rotateY(180deg);

  > img {
    width: 100%;
    height: 100%;
  }
`;
