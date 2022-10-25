import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useRecoilValueLoadable } from 'recoil';

import Loading from '@components/Loading';
import NoticeActivity from '@components/NoticeActivity';
import NoticeDeleteModeButton from '@components/NoticeDeleteModeButton';
import { HeaderBtn } from '@components/NoticeDeleteModeButton/NoticeDeleteModeButton.style';
import NoticeKeyword from '@components/NoticeKeyword';
import Tabs from '@components/Tabs';
import Icon from '@components/common/Icon';
import { failtoGetNoticeMention } from '@constants/mentions';
import { NOTICE_CENTER } from '@constants/words';
import useIsTopState from '@hooks/useIsTopState';
import * as S from '@pages/Notice/Notice.style';
import { activeNoticeState, noticeInfoState, noticeState } from '@store/notice';

const Notice = () => {
  const navigate = useNavigate();
  const noticeTabsInfo = useRecoilValue(noticeInfoState);
  const activeNotice = useRecoilValue(activeNoticeState);
  const selector = noticeState<typeof activeNotice>({ type: activeNotice });
  const { state, contents } = useRecoilValueLoadable(selector);
  const isTop = useIsTopState();

  const getNoticeContents = () => {
    switch (state) {
      case 'hasValue':
        const NoticeContent = activeNotice === 'activity' ? NoticeActivity : NoticeKeyword;
        return (
          //@ts-ignore ** 추후에 반드시 처리가 필요합니다!
          <NoticeContent contents={contents} />
        );
      case 'hasError':
        return <S.ErrorWrapper>{failtoGetNoticeMention}</S.ErrorWrapper>;
      case 'loading':
        return <Loading color='grey2' size={60} border={6} height='20rem' />;
    }
  };

  return (
    <S.Wrapper>
      <S.TopFixedWrapper isTop={isTop}>
        <S.Header>
          <HeaderBtn onClick={() => navigate(-1)}>
            <Icon iconName='Back' iconSize={1.125} />
          </HeaderBtn>
          <S.HeaderTitle>{NOTICE_CENTER}</S.HeaderTitle>
          <NoticeDeleteModeButton />
        </S.Header>
        <Tabs tabsInfo={noticeTabsInfo} targetAtom={activeNoticeState} />
      </S.TopFixedWrapper>
      {getNoticeContents()}
    </S.Wrapper>
  );
};

export default Notice;
