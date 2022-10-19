import 'moment/locale/ko';

import { useState } from 'react';

import moment from 'moment';
import { useRecoilValue } from 'recoil';
import { v4 as getRandomKey } from 'uuid';

import { IconsType } from '@assets/icons';
import * as S from '@components/NoticeActivity/NoticeActivity.style';
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
import { deleteModeState } from '@store/notice';
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
  const deleteMode = useRecoilValue(deleteModeState);
  const [activityData, setActivityData] = useState(contents);
  const getItems = () => {
    return activityData
      .map(
        ({
          activityType,
          notificationCreatedDateTime,
          recruitmentMemberNickname,
          shareId,
          shareThumbnailImageUrl,
          shareTitle,
        }) => {
          const diffTime = moment(notificationCreatedDateTime).fromNow();
          const { iconName, mention, desc } = getTextsByActivity(
            activityType,
            recruitmentMemberNickname,
          );
          return (
            <S.ItemWrapper key={getRandomKey()}>
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
              <NoticeDeleteBtn id={shareId} isShowed={deleteMode} />
            </S.ItemWrapper>
          );
        },
      )
      .reverse();
  };

  const items = getItems();

  return <S.Wrapper>{items}</S.Wrapper>;
};

export default NoticeActivity;
