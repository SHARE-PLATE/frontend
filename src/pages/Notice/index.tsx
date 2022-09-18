import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import NoticeContent from '@components/NoticeContent';
import Tabs from '@components/Tabs';
import Icon from '@components/common/Icon';
import { NOTICE_CENTER } from '@constants/words';
import * as S from '@pages/Notice/Notice.style';
import { activeNoticeState, noticeInfoState } from '@store/notice';

const Notice = () => {
  const navigate = useNavigate();
  const noticeTabsInfo = useRecoilValue(noticeInfoState);

  return (
    <S.Wrapper>
      <S.Header>
        <S.HeaderTitle>{NOTICE_CENTER}</S.HeaderTitle>
        <S.CloseBtn onClick={() => navigate(-1)}>
          <Icon iconName='Back' />
        </S.CloseBtn>
      </S.Header>
      <Tabs tabsInfo={noticeTabsInfo} targetAtom={activeNoticeState} />
      <NoticeContent />
    </S.Wrapper>
  );
};

export default Notice;
