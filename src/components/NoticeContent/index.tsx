import { useRecoilValue, useRecoilValueLoadable } from 'recoil';

import Loading from '@components/Loading';
import NoticeActivity from '@components/NoticeActivity';
import * as S from '@components/NoticeContent/NoticeContent.style';
import NoticeKeyword from '@components/NoticeKeyword';
import { activeNoticeState, noticeActivityState, noticeKeywordState } from '@store/notice';

import { activityData, keywordData } from './data';

const 테스트 = true;

const noticeContentInfo = {
  activity: { ContentComponent: NoticeActivity, selector: noticeActivityState },
  keyword: { ContentComponent: NoticeKeyword, selector: noticeKeywordState },
};

const NoticeContent = () => {
  const activeNotice = useRecoilValue(activeNoticeState);
  const { ContentComponent, selector } = noticeContentInfo[activeNotice];
  const { state, contents } = useRecoilValueLoadable(selector);

  const getNoticeContents = () => {
    switch (state) {
      case 'hasValue':
        return <ContentComponent contents={테스트 ? keywordData : contents} />;
      case 'hasError':
        return <S.ErrorWrapper>현재 알림 목록이 없습니다!</S.ErrorWrapper>;
      case 'loading':
        return (
          <S.LoadingWrapper>
            <Loading color='orange2' size={60} border={6} />
          </S.LoadingWrapper>
        );
    }
  };

  const noticeContents = getNoticeContents();

  return <S.Wrapper>{noticeContents}</S.Wrapper>;
};

export default NoticeContent;
