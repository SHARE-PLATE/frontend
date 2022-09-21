import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useRecoilState } from 'recoil';

import * as S from '@components/MainHeader/MainHeader.style';
import Icon from '@components/common/Icon';
import { curHightAtom, maxHeightAtom } from '@store/shareMap';

const minHeight = 70;

const ShareMapHeader = () => {
  const navigate = useNavigate();
  const [isOpenToggle, setIsOpenToggle] = useState<boolean>(false);
  const [curHeight, setCurHeight] = useRecoilState(curHightAtom);
  const maxHeight = useRecoilValue(maxHeightAtom);

  const changeBottomList = () => {
    if (maxHeight === curHeight) setIsOpenToggle(false);
    else if (minHeight === curHeight) setIsOpenToggle(true);
    else setIsOpenToggle((prev) => !prev);
  };

  useEffect(() => {
    isOpenToggle ? setCurHeight(maxHeight) : setCurHeight(minHeight);
  }, [isOpenToggle]);

  return (
    <S.Wrapper>
      <S.IconsWrapper position='left'>
        <Icon iconName='LogoWithText' iconSize={4.2} handleClick={() => navigate('/')} />
      </S.IconsWrapper>
      <S.Header>내주변</S.Header>
      <S.IconsWrapper position='flex-end'>
        <Icon iconName='NoticeOn' iconSize='LARGE' handleClick={() => navigate('/notice')} />
        <Icon iconName='Hamburger' iconSize='LARGE' handleClick={changeBottomList} />
      </S.IconsWrapper>
    </S.Wrapper>
  );
};

export default ShareMapHeader;
