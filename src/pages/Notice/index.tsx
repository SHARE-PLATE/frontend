import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import NoticeContent from '@components/NoticeContent';
import Icon from '@components/common/Icon';
import { NOTICE_CENTER } from '@constants/words';
import * as S from '@pages/Notice/Notice.style';
import { deleteModeState } from '@store/notice';

const Notice = () => {
  const navigate = useNavigate();
  const [deleteMode, setDeleteMode] = useRecoilState(deleteModeState);

  return (
    <S.Wrapper>
      <S.Header>
        <S.HeaderBtn onClick={() => navigate(-1)}>
          <Icon iconName='Back' iconSize={1.125} />
        </S.HeaderBtn>
        <S.HeaderTitle>{NOTICE_CENTER}</S.HeaderTitle>
        <S.HeaderBtn onClick={() => setDeleteMode(!deleteMode)}>
          <Icon iconName={!deleteMode ? 'DeleteCircle' : 'CheckCircleColor'} iconSize={1.125} />
        </S.HeaderBtn>
      </S.Header>
      <NoticeContent />
    </S.Wrapper>
  );
};

export default Notice;
