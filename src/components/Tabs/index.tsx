import * as S from '@components/Tabs/Tabs.styled';
import Button from '@components/common/Button';
import { BUTTON_SIZE } from '@components/common/Button/constants';

interface TabsPropsType {
  firstTitle: string;
  secondTitle: string;
}
const Tabs = ({ firstTitle, secondTitle }: TabsPropsType) => {
  return (
    <S.Wrapper>
      <Button size={BUTTON_SIZE.LARGE} onClick={() => {}}>
        {firstTitle}
      </Button>
      <Button size={BUTTON_SIZE.LARGE} onClick={() => {}}>
        {secondTitle}
      </Button>
    </S.Wrapper>
  );
};

export default Tabs;
