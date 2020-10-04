import { FC } from 'react';
import styled from 'styled-components';
import { down } from 'styled-breakpoints';
import Link from 'next-translate/Link';
import hexToRgba from 'hex-to-rgba';
import { useCursorFollower } from '@/hooks/useCursorFollower';
import { colors } from '@/constants';

interface IProps {
  title: string;
  category: string;
  imageSrc: string;
  href: string;
  textStyle?: 'light' | 'dark';
}

interface IStyledInfoProps {
  textStyle: 'light' | 'dark';
}

const Wrapper = styled.div`
  position: relative;
  flex-basis: 50%;
  margin: 0 0 130px 0;
  padding: 0 30px;
  height: 60vw;
  max-height: 900px;

  &:nth-child(2n) {
    margin-top: -130px;
  }

  ${down('xxl')} {
    margin-bottom: 70px;
    padding: 0 15px;

    &:nth-child(2n) {
      margin-top: -100px;
    }
  }

  ${down('md')} {
    margin-bottom: 30px;

    &:nth-child(2n) {
      margin-top: -50px;
    }
  }

  ${down('sm')} {
    flex-basis: 100%;
    padding: 0;
    height: 100vw;
    max-height: 600px;

    &:nth-child(2n) {
      margin-top: 0;
    }
  }

  ${down('xs')} {
    min-height: 400px;
  }
`;

const Work = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  transition: all 0.5s ease-in-out;
  box-shadow: 0 12px 20px 0 ${hexToRgba(colors.BLACK, 0.09)};
`;

const Cover = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  object-fit: cover;
  vertical-align: middle;
  transition: all 0.5s ease-in-out;
`;

const WorkLink = styled.a`
  text-decoration: none;
  cursor: pointer;

  &:hover {
    & ${Cover} {
      transform: scale(1.15);
    }

    & ${Work} {
      transform: scale(0.98);
    }
  }
`;

const Info = styled.div<IStyledInfoProps>`
  position: relative;
  z-index: 2;
  padding: 30px;
  color: ${({ textStyle }: IStyledInfoProps) =>
    textStyle === 'light' ? colors.WHITE : colors.BLACK};
`;

const Title = styled.h3`
  margin: 0 0 16px 0;
  font-size: 32px;
  font-weight: 800;
  color: inherit;

  ${down('md')} {
    margin-bottom: 12px;
    font-size: 26px;
    line-height: 32px;
  }
`;

const Category = styled.p`
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 2px;
  color: inherit;

  ${down('md')} {
    font-size: 13px;
  }
`;

const WorksItem: FC<IProps> = ({
  title,
  category,
  imageSrc,
  href,
  textStyle = 'dark',
}: IProps) => {
  const { setCursorSize, setCursorType } = useCursorFollower();

  const handleMouseMove = () => {
    setCursorType('workImage');
    setCursorSize(100);
  };

  const handleMouseLeave = () => {
    setCursorSize(10);
    setCursorType('default');
  };

  return (
    <Wrapper>
      <Link href={href} passHref>
        <WorkLink onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
          <Work>
            <Info textStyle={textStyle}>
              <Title>{title}</Title>
              <Category>{category}</Category>
            </Info>
            <Cover src={imageSrc} alt={title} />
          </Work>
        </WorkLink>
      </Link>
    </Wrapper>
  );
};

export default WorksItem;
