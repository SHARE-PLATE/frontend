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
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
`;

const Title = styled.div`
  font-weight: bold;
  height: 10%;
  flex-grow: 1;
`;
export default UserMenu;
