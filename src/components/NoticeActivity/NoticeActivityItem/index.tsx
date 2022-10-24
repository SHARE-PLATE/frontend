import moment from 'moment';
import { useNavigate } from 'react-router-dom';

import { IconsType } from '@assets/icons';
import * as S from '@components/NoticeActivity/NoticeActivityItem/NoticeActivityItem.style';
import NoticeDeleteBtn, { NoticeDeleteBtnPropsType } from '@components/NoticeDeleteBtn';
import Icon from '@components/common/Icon';
import ImgContainer from '@components/common/ImgContainer';
import {
  deadlineMention,
  entryCanceledMention,
  entryCancelMention,
  entryJoinedMention,
  entryMention,
  newQuestionChatroomMention,
  questionChatroomMention,
  shareCanceledMention,
  shareCancelMention,
  thirtyMinuitesLeftMention,
} from '@constants/mentions';
import { pathName } from '@constants/pathName';
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
    QUESTION_CHATROOM: {
      iconName: 'NoticeActivityLogo',
      mention: newQuestionChatroomMention,
      desc: questionChatroomMention(option),
    },
  };

  const texts = textsByAcitivity[type];

  return texts;
};

const NoticeActivityItem = ({
  id,
  activityType,
  notificationCreatedDateTime,
  recruitmentMemberNickname,
  shareId,
  shareThumbnailImageUrl,
  shareTitle,
  onDeleteSuccess,
}: NoticeActivityDataType & Pick<NoticeDeleteBtnPropsType, 'onDeleteSuccess'>) => {
  const diffTime = moment(notificationCreatedDateTime).add(9, 'h').fromNow();
  const navigate = useNavigate();
  const { iconName, mention, desc } = getTextsByActivity(activityType, recruitmentMemberNickname);

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
          noAlign={true}
        />
      </S.ImgWrapper>
      <NoticeDeleteBtn id={id} onDeleteSuccess={onDeleteSuccess} />
    </S.ItemWrapper>
  );
};

export default NoticeActivityItem;
