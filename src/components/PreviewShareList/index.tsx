import * as S from '@components/PreviewShareList/PreviewShareList.style';
import Icon from '@components/common/Icon';
import { ICON_NAME } from '@components/common/Icon/constants';
import PersonnelStatus from '@components/common/PersonnelStatus';

const PreviewShareList = () => {
  return (
    <S.Wrapper className='ranking'>
      <img
        src='https://dn-img-page.kakao.com/download/resource?kid=cjkvcL/hzCteePBKL/sbDIMr3ywrQfNuePWeAZYk&filename=th2'
        alt='${title} 이미지'
        width='110'
        height='110'
      ></img>
      <S.ListInfo className='info_ranking'>
        <S.Title>zxczc</S.Title>
        <S.Location>12</S.Location>
        <S.Cost>sadasd</S.Cost>
        <S.Personnel>
          <Icon iconName={ICON_NAME.USER} />
          <PersonnelStatus />
        </S.Personnel>
      </S.ListInfo>
    </S.Wrapper>
  );
};

export default PreviewShareList;
