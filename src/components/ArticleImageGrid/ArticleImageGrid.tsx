import { FC } from 'react';
import styled from 'styled-components';
import { down } from 'styled-breakpoints';
import { ParallaxImage } from '@/components/ParallaxImage';

interface IProps {
  items: Array<IItem>;
}

interface IItem {
  id: string;
  src: string;
  caption?: string;
  description?: string;
}

const Wrapper = styled.div`
  margin: 100px 0;
  width: 100%;
`;

const Columns = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
`;

const Column = styled.div`
  flex-basis: 50%;

  &:nth-child(2n) {
    margin-top: 250px;
  }

  ${down('md')} {
    flex-basis: 100%;

    &:nth-child(2n) {
      margin-top: 0;
    }
  }
`;

const Item = styled.div`
  position: relative;
  padding: 15px;

  ${down('xs')} {
    padding: 15px 0;
  }
`;

const ItemDescription = styled.div`
  padding: 30px 40px;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
`;

const ArticleImageGrid: FC<IProps> = ({ items }: IProps) => {
  const evenItems = items.filter((i, index) => index % 2 === 0);
  const oddItems = items.filter((i, index) => index % 2 !== 0);

  const renderItem = (i: IItem) => (
    <Item key={i.id}>
      <ParallaxImage src={i.src} limitPositionY={20} caption={i.caption} />
      {i.description && <ItemDescription>{i.description}</ItemDescription>}
    </Item>
  );

  return (
    <Wrapper>
      <Columns>
        <Column>{evenItems.map((i) => renderItem(i))}</Column>
        <Column>{oddItems.map((i) => renderItem(i))}</Column>
      </Columns>
    </Wrapper>
  );
};

export default ArticleImageGrid;
