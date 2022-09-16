import { useEffect, useState } from 'react';

import { useRecoilValue, useRecoilValueLoadable } from 'recoil';

import Loading from '@components/Loading';
import NoticeActivity from '@components/NoticeActivity';
import * as S from '@components/NoticeContent/NoticeContent.style';
import NoticeKeyword from '@components/NoticeKeyword';
import { activeNoticeState, noticeActivityState, noticeKeywordState } from '@store/notice';

import { activityData } from './data';

const 테스트 = true;

const noticeContentInfo = {
  activity: { ContentComponent: NoticeActivity, selector: noticeActivityState },
  keyword: { ContentComponent: NoticeKeyword, selector: noticeKeywordState },
};

const NoticeContent = () => {
  const [content, setContent] = useState(<Loading color='orange2' size={60} border={6} />);
  const activeNotice = useRecoilValue(activeNoticeState);
  const { ContentComponent, selector } = noticeContentInfo[activeNotice];
  const { state, contents } = useRecoilValueLoadable(selector);

  useEffect(() => {
    if (state === 'hasValue') {
      setContent(<ContentComponent contents={테스트 ? activityData : contents} />);
    }
    if (state === 'hasError') {
      setContent(<S.ErrorWrapper>현재 알림 목록이 없습니다!</S.ErrorWrapper>);
    }
  }, [state]);

  return <S.Wrapper>{content}</S.Wrapper>;
};

export default NoticeContent;
