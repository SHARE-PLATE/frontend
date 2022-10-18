import { useRecoilValue, useRecoilValueLoadable } from 'recoil';

import { deleteNotice } from '@api/notice';
import Loading from '@components/Loading';
import NoticeActivity from '@components/NoticeActivity';
import * as S from '@components/NoticeContent/NoticeContent.style';
import NoticeKeyword from '@components/NoticeKeyword';
import Tabs from '@components/Tabs';
import { noRecentNoticeListMention } from '@constants/mentions';
import { DELETE_ALL } from '@constants/words';
import { activeNoticeState, deleteModeState, noticeInfoState, noticeState } from '@store/notice';

import { activityData, keywordData } from './data';

const isTest = false;
const testData = {
  activity: activityData,
  keyword: keywordData,
};

const ContentComponentInfo = {
  activity: NoticeActivity,
  keyword: NoticeKeyword,
};

const NoticeContent = () => {
  const activeNotice = useRecoilValue(activeNoticeState);
  const selector = noticeState<typeof activeNotice>({ type: activeNotice });
  const { state, contents } = useRecoilValueLoadable(selector);
  const deleteMode = useRecoilValue(deleteModeState);

  const handleDeleteAllBtn = async () => {
    if (state !== 'hasValue') return;

    const idList = contents.map(({ shareId }) => shareId);
    const response = await deleteNotice({ idList }); // 응답 후 처리 과정 필요!
  };

  const getNoticeContents = () => {
    switch (state) {
      case 'hasValue':
        const ContentComponent = ContentComponentInfo[activeNotice];
        //@ts-ignore ** 추후에 반드시 처리가 필요합니다!
        return <ContentComponent contents={isTest ? testData[activeNotice] : contents} />; // 테스트용 코드
      // return <ContentComponent contents={contents} />;
      case 'hasError':
        return <S.ErrorWrapper>{noRecentNoticeListMention}</S.ErrorWrapper>;
      case 'loading':
        return (
          <S.LoadingWrapper>
            <Loading color='orange2' size={60} border={6} />
          </S.LoadingWrapper>
        );
    }
  };

  const noticeContents = getNoticeContents();

  return (
    <>
      <S.DeleteAllBtn onClick={handleDeleteAllBtn} isDeleteMode={deleteMode && !!contents.length}>
        {DELETE_ALL}
      </S.DeleteAllBtn>
      <S.Wrapper>{noticeContents}</S.Wrapper>
    </>
  );
};

export default NoticeContent;
