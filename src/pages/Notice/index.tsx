import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';

import Tabs, { TabsInfoType } from '@components/Tabs';
import Icon from '@components/common/Icon';
import { NOTICE_CENTER } from '@constants/words';
import * as S from '@pages/Notice/Notice.style';
import { activeNoticeState, activeNoticeType } from '@store/activeNotice';

const useNoticeTabsInfo = () => {
  const activeNotice = useRecoilValue(activeNoticeState);
  const noticeTabsInfo: TabsInfoType<activeNoticeType> = [
    { order: 0, title: '활동 알림', value: 'activity', active: activeNotice === 'activity' },
    { order: 1, title: '키워드 알림', value: 'keyword', active: activeNotice === 'keyword' },
  ];

  return noticeTabsInfo;
};

const Notice = () => {
  const navigate = useNavigate();
  const [activeNotice, setActiveNotice] = useRecoilState(activeNoticeState);
  const noticeTabsInfo = useNoticeTabsInfo();

  return (
    <S.Wrapper>
      <S.Header>
        <S.HeaderTitle>{NOTICE_CENTER}</S.HeaderTitle>
        <S.CloseBtn onClick={() => navigate(-1)}>
          <Icon iconName='Back' />
        </S.CloseBtn>
      </S.Header>
      <Tabs tabsInfo={noticeTabsInfo} setTab={setActiveNotice} />
    </S.Wrapper>
  );
};

export default Notice;
