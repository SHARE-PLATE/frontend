import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useRecoilValueLoadable, useSetRecoilState } from 'recoil';

import Loading from '@components/Loading';
import NoticeActivity from '@components/NoticeActivity';
import NoticeDeleteAllButton from '@components/NoticeDeleteAllButton';
import NoticeKeyword from '@components/NoticeKeyword';
import Tabs from '@components/Tabs';
import Icon from '@components/common/Icon';
import { failtoGetNoticeMention, noRecentNoticeMention } from '@constants/mentions';
import { EDIT, FINISH, NOTICE_CENTER } from '@constants/words';
import * as S from '@pages/Notice/Notice.style';
import { activeNoticeState } from '@store/activeNotice';
import { deleteModeState, newNoticeState, noticeInfoState, noticeState } from '@store/notice';
import { NoticeActivityDataType, NoticeKeywordDataType } from '@type/notice';

const getIsActivity = (
  curContents: NoticeActivityDataType[] | NoticeKeywordDataType[],
  //@ts-ignore ** 추후에 반드시 처리가 필요합니다!
): curContents is NoticeActivityDataType[] => !!curContents[0].activityType;

const Notice = () => {
  const navigate = useNavigate();
  const [deleteMode, setDeleteMode] = useRecoilState(deleteModeState);
  const setNewNotice = useSetRecoilState(newNoticeState);
  const noticeTabsInfo = useRecoilValue(noticeInfoState);
  const activeNotice = useRecoilValue(activeNoticeState);
  const NoRecentNotice = <S.NoRecentNoticeWrapper>{noRecentNoticeMention}</S.NoRecentNoticeWrapper>;
  const selector = noticeState<typeof activeNotice>({ type: activeNotice });
  const { state, contents } = useRecoilValueLoadable(selector);

  const getNoticeContents = () => {
    switch (state) {
      case 'hasValue':
        if (!contents.length) return NoRecentNotice;
        const idList = contents.map(({ shareId }) => shareId);
        const isActivity = getIsActivity(contents);

        return (
          <>
            <NoticeDeleteAllButton idList={idList} />
            {isActivity && <NoticeActivity contents={contents} />}
            {!isActivity && <NoticeKeyword contents={contents} />}
          </>
        );
      case 'hasError':
        return <S.ErrorWrapper>{failtoGetNoticeMention}</S.ErrorWrapper>;
      case 'loading':
        return <Loading color='grey2' size={60} border={6} height='20rem' />;
    }
  };

  // set notice icon show that new notice doesn't exist
  setNewNotice(null);

  return (
    <S.Wrapper>
      <S.TopFixedWrapper>
        <S.Header>
          <S.HeaderBtn onClick={() => navigate(-1)}>
            <Icon iconName='Back' iconSize={1.125} />
          </S.HeaderBtn>
          <S.HeaderTitle>{NOTICE_CENTER}</S.HeaderTitle>
          <S.HeaderBtn onClick={() => setDeleteMode(!deleteMode)}>
            <S.DeleteModeButton>{!deleteMode ? EDIT : FINISH}</S.DeleteModeButton>
          </S.HeaderBtn>
        </S.Header>
        <Tabs tabsInfo={noticeTabsInfo} targetAtom={activeNoticeState} />
      </S.TopFixedWrapper>
      {getNoticeContents()}
    </S.Wrapper>
  );
};

export default Notice;
