import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useRecoilState } from 'recoil';

import * as S from '@components/MainHeader/MainHeader.style';
import NoticeIcon from '@components/NoticeIcon';
import Icon from '@components/common/Icon';
import { curTopAtom, maxTopAtom, minTopAtom } from '@store/shareMap';

const ShareMapHeader = () => {
  const navigate = useNavigate();
  const [isOpenToggle, setIsOpenToggle] = useState<boolean>(false);
  const [curTop, setCurTop] = useRecoilState(curTopAtom);
  const maxTop = useRecoilValue(maxTopAtom);
  const minTop = useRecoilValue(minTopAtom);

  const changeBottomList = () => {
    if (maxTop === curTop) setIsOpenToggle(false);
    else if (minTop === curTop) setIsOpenToggle(true);
    else setIsOpenToggle((prev) => !prev);
  };

  useEffect(() => {
    isOpenToggle ? setCurTop(maxTop) : setCurTop(minTop);
  }, [isOpenToggle]);

  return (
    <S.Wrapper>
      <S.IconsWrapper position='left'>
        <Icon iconName='LogoWithText' iconSize={4.2} handleClick={() => navigate('/')} />
      </S.IconsWrapper>
      <S.Header>내주변</S.Header>
      <S.IconsWrapper position='flex-end'>
        <NoticeIcon noticeOnIcon='NoticeOn' noticeOffIcon='NoticeOff' iconSize={1.5} />
        <Icon iconName='Hamburger' iconSize={1.25} handleClick={changeBottomList} />
      </S.IconsWrapper>
    </S.Wrapper>
  );
};

export default ShareMapHeader;
