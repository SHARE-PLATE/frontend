import styled from 'styled-components';

import Button from '@components/common/Button';
import { BUTTON_SIZE } from '@components/common/Button/constants';
import { flexCenter } from '@styles/mixin';

interface TabsPropsType {
  firstTitle: string;
  secondTitle: string;
}
const Tabs = ({ firstTitle, secondTitle }: TabsPropsType) => {
  return (
    <Wrapper>
      <Button size={BUTTON_SIZE.LARGE} onClick={() => {}}>
        {firstTitle}
      </Button>
      <Button size={BUTTON_SIZE.LARGE} onClick={() => {}}>
        {secondTitle}
      </Button>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  ${flexCenter}
  margin-top: 12px;
`;

export default Tabs;
