import 'moment/locale/ko';

import moment from 'moment';
import { useRecoilValue } from 'recoil';

import { NoticeActivityDataType } from '@api/notice';
import * as S from '@components/NoticeActivity/NoticeActivity.style';
import NoticeDeleteBtn from '@components/NoticeDeleteBtn';
import Icon from '@components/common/Icon';
import ImgContainer from '@components/common/ImgContainer';
import { deleteModeState } from '@store/notice';

type NoticeActivityPropsType = {
  contents: NoticeActivityDataType;
};

const deadlineMention = '등록하신 상품의 시간이 끝나가요!';

const NoticeActivity = ({ contents }: NoticeActivityPropsType) => {
  const deleteMode = useRecoilValue(deleteModeState);
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
          <S.ImgWrapper>
            <ImgContainer
              imgSrc={shareThumbnailImageUrl}
              imgTitle={shareTitle}
              imgWrapperWidth={S.imgWidth}
              imgWrapperRatio={1 / 1}
            />
          </S.ImgWrapper>
          <NoticeDeleteBtn id={shareId} isShowed={deleteMode} />
        </S.Item>
      );
    },
  );

  return <S.Wrapper>{Items}</S.Wrapper>;
};

export default NoticeActivity;
