import moment from 'moment';

import { NoticeActivityDataType } from '@api/notice';
import 'moment/locale/ko';
import ImgContainer from '@components/ImgContainer';
import * as S from '@components/NoticeActivity/NoticeActivity.style';
import Icon from '@components/common/Icon';

type NoticeActivityPropsType = { contents: NoticeActivityDataType }; // active notice 값에 따라 올바른 contents type 들어오도록 재설정 필요

const deadlineMention = '등록하신 상품의 시간이 끝나가요!';

const NoticeActivity = ({ contents }: NoticeActivityPropsType) => {
  const Items = contents.map(
    ({
      activityType,
      notificationCreatedDateTime,
      recruitmentMemberNickname,
      shareId,
      shareThumbnailImageUrl,
      shareTitle,
    }) => {
      const diffTime = moment(notificationCreatedDateTime).fromNow();

      return (
        <S.Item key={shareId}>
          <Icon iconName='NoticeActivityFull' iconSize={2.6} />
          <S.TextWrapper>
            <div>{deadlineMention}</div>
            <S.DescText>{`[${shareTitle}] 상품이 30분 남았습니다!`}</S.DescText>
            <S.DiffTime>{diffTime}</S.DiffTime>
          </S.TextWrapper>
          <ImgContainer
            imgSrc={shareThumbnailImageUrl}
            imgTitle={shareTitle}
            imgWrapperWidth='3rem'
            imgWrapperRatio={1 / 1}
          />
        </S.Item>
      );
    },
  );

  return <S.Wrapper>{Items}</S.Wrapper>;
};

export default NoticeActivity;
