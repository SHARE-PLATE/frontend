import styled from 'styled-components';

import Icon from '@components/common/Icon';
import { ICON_NAME } from '@components/common/Icon/constants';
import PersonnelStatus from '@components/common/PersonnelStatus';

const PreviewShareList = () => {
  return (
    <Wrapper className='ranking'>
      <img
        src='https://dn-img-page.kakao.com/download/resource?kid=cjkvcL/hzCteePBKL/sbDIMr3ywrQfNuePWeAZYk&filename=th2'
        alt='${title} 이미지'
        width='110'
        height='110'
      ></img>
      <ListInfo className='info_ranking'>
        <Title>zxczc</Title>
        <Location>12</Location>
        <Cost>sadasd</Cost>
        <Personnel>
          <Icon iconName={ICON_NAME.USER} />
          <PersonnelStatus />
        </Personnel>
      </ListInfo>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  padding-left: 30px;

  img {
    position: absolute;
    top: 0px;
  }
`;

const ListInfo = styled.div`
  position: absolute;
  left: 40%;
  padding: 3px;
`;

const Title = styled.div`
  text-align: left;
  font-weight: bold;
`;
const Location = styled.div`
  text-align: left;
  color: #918b8b;
`;
const Cost = styled.div`
  text-align: left;
  font-weight: bold;
`;

const Personnel = styled.div`
  text-align: left;
`;

export default PreviewShareList;
