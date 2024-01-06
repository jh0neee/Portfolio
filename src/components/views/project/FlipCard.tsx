import Image from "next/image";
import { useState } from "react";
import styled, { css } from "styled-components";
import ImageFile from "@/components/common/ImageFile";

interface ImageCardProps {
  imagePath: string;
}

const FlipCard = ({ imagePath }: ImageCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <CardWrapper>
      <p>아래 이미지를 클릭하면 자세히 볼 수 있습니다.</p>
      <Container onClick={handleCardClick}>
        <Card $isFlipped={isFlipped}>
          <Front>
            <ImageFile imagePath={imagePath} altText="front 이미지" />
          </Front>

          <Back>
            <Image
              src="/image/project_survey.png"
              alt="back이미지"
              width={450}
              height={250}
              priority
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
  width: 450px;
  height: 250px;
`;

const Card = styled.div<{ $isFlipped: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: all 0.5s ease;

  ${props =>
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
    border: 1px solid lightgrey;
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
