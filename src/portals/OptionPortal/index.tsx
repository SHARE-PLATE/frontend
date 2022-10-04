import { useEffect } from 'react';

import { useSetRecoilState } from 'recoil';

import HashTag from '@portals/OptionPortal/HashTag';
import * as S from '@portals/OptionPortal/OptionPortal.style';
import useOptionInfo from '@portals/OptionPortal/useOptionInfo';
import Portal from '@portals/Portal';
import { portalState } from '@store/portal';
import { isSelectedOptionState } from '@store/shareRegistration';

const OptionPortal = () => {
  const setPortal = useSetRecoilState(portalState);
  const setIsSelectedOption = useSetRecoilState(isSelectedOptionState);
  const { optionInfo, isPossibleValue } = useOptionInfo();
  const negotiationBtns = optionInfo.map(({ id, title, child }) => (
    <S.ConferenceContainer key={id}>
      <S.CategoryTitle>{title}</S.CategoryTitle>
      <S.ButtonBox>
        {child.map(({ id, text, onClick, active }) => (
          <S.OptionButton key={id} onClick={onClick} isSelected={active}>
            <span>{text}</span>
          </S.OptionButton>
        ))}
      </S.ButtonBox>
    </S.ConferenceContainer>
  ));

  const handleFinishBtn = () => setPortal(null);

  useEffect(() => {
    setIsSelectedOption(isPossibleValue);
  }, [isPossibleValue]);

  return (
    <Portal type='toast' portalName='option'>
      <S.PortalWrapper>
        <S.OptionTitle>옵션선택</S.OptionTitle>
        {negotiationBtns}
        <HashTag />
        <S.FinishButton type='button' onClick={handleFinishBtn}>
          <span>선택완료</span>
        </S.FinishButton>
      </S.PortalWrapper>
    </Portal>
  );
};

export default OptionPortal;
