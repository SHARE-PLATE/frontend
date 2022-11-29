import moment from 'moment';
import { useNavigate } from 'react-router-dom';

import NoticeDeleteBtn, { NoticeDeleteBtnPropsType } from '@components/NoticeDeleteBtn';
import * as S from '@components/NoticeKeyword/NoticeKeywordItem/NoticeKeywordItem.style';
import ImgContainer from '@components/common/ImgContainer';
import { newShareEnrolledMention } from '@constants/mentions';
import { pathName } from '@constants/pathName';
import { NoticeKeywordDataType } from '@type/notice';

const NoticeKeywordItem = ({
  id,
  shareLocation,
  shareId,
  shareThumbnailImageUrl,
  shareTitle,
  notificationCreatedDateTime,
  onDeleteSuccess,
}: NoticeKeywordDataType & Pick<NoticeDeleteBtnPropsType, 'onDeleteSuccess'>) => {
  const diffTime = moment(notificationCreatedDateTime).add(9, 'h').fromNow();
  const navigate = useNavigate();
  const locationParts = shareLocation.split(' ');
  const location = `${locationParts[2]}∙${locationParts[3]}`;

  const handleClickItem = () => navigate(`${pathName.shareDetail}/${shareId}`);

  return (
    <S.ItemWrapper onClick={handleClickItem}>
      <S.ImgWrapper>
        <ImgContainer
          imgSrc={shareThumbnailImageUrl}
          imgTitle={shareTitle}
          imgWrapperRatio={1 / 1}
          imgWrapperWidth={S.itemHeight}
          borderRadius='0.25rem'
          noAlign={true}
        />
      </S.ImgWrapper>
      <S.TextWrapper>
        <S.TextUpper>
          <S.LocationBox>{location}</S.LocationBox>
          <S.EnrollMention>{newShareEnrolledMention}</S.EnrollMention>
        </S.TextUpper>
        <S.TitleWrapper>{shareTitle}</S.TitleWrapper>
        <S.DiffTime>{diffTime}</S.DiffTime>
      </S.TextWrapper>
      <NoticeDeleteBtn id={id} onDeleteSuccess={onDeleteSuccess} />
    </S.ItemWrapper>
  );
};

export default NoticeKeywordItem;
