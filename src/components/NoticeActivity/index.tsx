import { useState } from 'react';

import moment from 'moment';
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
  shareCanceledMention,
  shareCancelMention,
  thirtyMinuitesLeftMention,
} from '@constants/mentions';
import { ActivityType, NoticeActivityDataType } from '@type/notice';

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
  };

  const texts = textsByAcitivity[type];

  return texts;
};

const NoticeActivity = ({ contents }: { contents: NoticeActivityDataType[] }) => {
  const [activityData, setActivityData] = useState(contents);
  const NoticeActivityItem = ({
    activityType,
    notificationCreatedDateTime,
    recruitmentMemberNickname,
    shareId,
    shareThumbnailImageUrl,
    shareTitle,
  }: NoticeActivityDataType) => {
    const diffTime = moment(notificationCreatedDateTime).add(9, 'h').fromNow();
    const { iconName, mention, desc } = getTextsByActivity(activityType, recruitmentMemberNickname);

    return (
      <S.ItemWrapper>
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
        <NoticeDeleteBtn id={shareId} />
      </S.ItemWrapper>
    );
  };
  const getItems = () => {
    return activityData
      .map((info) => <NoticeActivityItem {...info} key={getRandomKey()} />)
      .reverse();
  };

  const idList = contents.map(({ shareId }) => shareId);
  const items = getItems();

  return (
    <S.Wrapper>
      <NoticeDeleteAllButton idList={idList} />
      {items}
    </S.Wrapper>
  );
};

export default NoticeActivity;
