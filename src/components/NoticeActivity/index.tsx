import { useEffect, useState } from 'react';

import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { v4 as getRandomKey } from 'uuid';

import { IconsType } from '@assets/icons';
import * as S from '@components/NoticeActivity/NoticeActivity.style';
import NoticeDeleteAllButton from '@components/NoticeDeleteAllButton';
import NoticeDeleteBtn from '@components/NoticeDeleteBtn';
import Icon from '@components/common/Icon';
import ImgContainer from '@components/common/ImgContainer';
import {
  deadlineMention,
  entryCanceledMention,
  entryCancelMention,
  entryJoinedMention,
  entryMention,
  newQuestionChatroomMention,
  noRecentNoticeMention,
  questionChatroomMention,
  shareCanceledMention,
  shareCancelMention,
  thirtyMinuitesLeftMention,
} from '@constants/mentions';
import { pathName } from '@constants/pathName';
import { newNoticeState, noticeStateTrigger } from '@store/notice';
import { ActivityType, getIsActivity, NoticeActivityDataType } from '@type/notice';

type TextsByActivityType = {
  iconName: IconsType;
  mention: string;
  desc: string;
};

const getTextsByActivity = (type: ActivityType, option?: string): TextsByActivityType => {
  const textsByAcitivity: { [key in ActivityType]: TextsByActivityType } = {
    ENTRY: {
      iconName: 'NoticeActivityLogo',
      mention: entryJoinedMention,
      desc: entryMention(option),
    },
    ENTRY_CANCEL: {
      iconName: 'NoticeActivityLogo',
      mention: entryCanceledMention,
      desc: entryCancelMention(option),
    },
    DEADLINE: {
      iconName: 'NoticeActivityFull',
      mention: deadlineMention,
      desc: thirtyMinuitesLeftMention,
    },
    SHARE_CANCEL: {
      iconName: 'NoticeActivityFull',
      mention: shareCanceledMention,
      desc: shareCancelMention(option),
    },
    QUESTION_CHATROOM: {
      iconName: 'NoticeActivityLogo',
      mention: newQuestionChatroomMention,
      desc: questionChatroomMention(option),
    },
  };

  const texts = textsByAcitivity[type];

  return texts;
};

const NoticeActivity = ({ contents }: { contents: NoticeActivityDataType[] }) => {
  const [activityData, setActivityData] = useState(contents);
  const navigate = useNavigate();
  const setNoticeStateTrigger = useSetRecoilState(noticeStateTrigger);
  const [newNotice, setNewNotice] = useRecoilState(newNoticeState);
  const idList = activityData.map(({ id }) => id);
  const noRecentNotice = <S.NoRecentNoticeWrapper>{noRecentNoticeMention}</S.NoRecentNoticeWrapper>;

  const NoticeActivityItem = ({
    id,
    activityType,
    notificationCreatedDateTime,
    recruitmentMemberNickname,
    shareId,
    shareThumbnailImageUrl,
    shareTitle,
  }: NoticeActivityDataType) => {
    const diffTime = moment(notificationCreatedDateTime).add(9, 'h').fromNow();
    const { iconName, mention, desc } = getTextsByActivity(activityType, recruitmentMemberNickname);

    const onDeleteSuccess = (id: number) => {
      setActivityData((data) => data.filter(({ id: dataId }) => dataId !== id));
    };
    const handleClickItem = () => {
      if (activityType === 'SHARE_CANCEL') return;
      navigate(`${pathName.shareDetail}/${shareId}`);
    };

    return (
      <S.ItemWrapper onClick={handleClickItem}>
        <Icon iconName={iconName} iconSize={2.6} />
        <S.TextWrapper>
          <div>{mention}</div>
          <S.DescText>{`[${shareTitle}] ${desc}`}</S.DescText>
          <S.DiffTime>{diffTime}</S.DiffTime>
        </S.TextWrapper>
        <S.ImgWrapper>
          <ImgContainer
            imgSrc={shareThumbnailImageUrl}
            imgTitle={shareTitle}
            imgWrapperWidth={S.imgWidth}
            imgWrapperRatio={1 / 1}
            borderRadius='4px'
          />
        </S.ImgWrapper>
        <NoticeDeleteBtn id={id} onDeleteSuccess={onDeleteSuccess} />
      </S.ItemWrapper>
    );
  };

  const getContent = () => {
    const noticeItems = activityData
      .map((info) => <NoticeActivityItem {...info} key={getRandomKey()} />)
      .reverse();

    return activityData.length ? noticeItems : noRecentNotice;
  };

  useEffect(() => {
    if (!newNotice) return;
    const isActivity = getIsActivity(newNotice);
    if (!isActivity) return;

    setActivityData((curData) => {
      const newData = [...curData];
      newData.push(newNotice);
      return newData;
    });
  }, [newNotice]);

  // set notice icon show that new notice doesn't exist
  useEffect(() => {
    return () => {
      setNewNotice(null);
      setNoticeStateTrigger((prev) => prev + 1);
    };
  }, []);

  return (
    <S.Wrapper>
      <NoticeDeleteAllButton idList={idList} isList={!!activityData.length} />
      {getContent()}
    </S.Wrapper>
  );
};

export default NoticeActivity;
