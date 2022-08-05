import styled from 'styled-components';

import Icon from '@components/common/Icon';
import { ICON_NAME, ICON_SIZE } from '@components/common/Icon/constants';
import { userMenu, userMenuType } from '@constants/userMenu';

const UserMenu = () => {
  const mokData: userMenuType[] = userMenu;
  return (
    <div>
      {mokData.map((data: userMenuType) => (
        <Wrapper key={data.id}>
          <Title>{data.title}</Title>
          <Icon iconName={ICON_NAME.RIGHT_ARROW} iconSize={ICON_SIZE.LARGE} />
        </Wrapper>
      ))}
    </div>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 25px 15px;
`;

const Title = styled.div`
  text-align: left;
  font-weight: bold;
  width: 75%;
  height: 10%;
`;
export default UserMenu;
