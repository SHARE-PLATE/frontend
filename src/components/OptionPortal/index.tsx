import { useRef } from 'react';

import { useSetRecoilState } from 'recoil';

import HashTag from '@components/OptionPortal/HashTag';
import * as S from '@components/OptionPortal/OptionPortal.style';
import useOptionInfo from '@components/OptionPortal/useOptionInfo';
import Portal from '@components/Portal';
import Button from '@components/common/Button';
import { portalState } from '@store/portal';
import { isSelectedOption } from '@store/shareRegistration';

const OptionPortal = () => {
  const setPortal = useSetRecoilState(portalState);
  const isSetSelectedOption = useSetRecoilState(isSelectedOption);
  const closeBtn = useRef<HTMLButtonElement>(null);
  const optionInfo = useOptionInfo();

  const buttonClickHandler = () => {
    setPortal(null);
    isSetSelectedOption(true);
  };

  return (
    <Portal type='half' portalName='option' closeBtn={closeBtn}>
      <S.PortalWrapper>
        <S.OptionTitle>옵션선택</S.OptionTitle>
        {optionInfo.map(({ id, title, child }) => (
          <S.ConferenceContainer key={id}>
            <S.CategoryTitle>{title}</S.CategoryTitle>
            <S.ButtonBox>
              {child.map(({ id, text, onClick, active }) => (
                <Button key={id} size='bigSize' onClick={onClick} active={active}>
                  <span>{text}</span>
                </Button>
              ))}
            </S.ButtonBox>
          </S.ConferenceContainer>
        ))}

        <HashTag />

        <S.SelectButton type='button' onClick={buttonClickHandler}>
          <span>선택완료</span>
        </S.SelectButton>
      </S.PortalWrapper>
    </Portal>
  );
};

export default OptionPortal;
