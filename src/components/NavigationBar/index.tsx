import { useRecoilValue, useRecoilValueLoadable } from 'recoil';

import AddKeywordButton from '@components/AddKeyWordButton';
import ChatsUnread from '@components/ChatsUnread';
import * as S from '@components/NavigationBar/NavigationBar.style';
import useNavigationBarInfo from '@components/NavigationBar/useNavigationBarInfo';
import ShareFormButton from '@components/ShareFormButton';
import Icon from '@components/common/Icon';
import { pathNameKeysType } from '@constants/pathName';
import useCheckPathname from '@hooks/useCheckPathname';
import { chatsUnreadState } from '@store/chatrooms';
import { isNavigationState } from '@store/navigation';

const noNavBarPaths: pathNameKeysType[] = [
  'shareForm',
  'loginCallback',
  'shareDetail',
  'chatroomDetail',
  'addKeyword',
  'shareMap',
  'notice',
  'purchaseHistory',
  'salesHistory',
  'wishList',
  'searchShare',
];

const NavigationBar = () => {
  const isNavigation = useRecoilValue(isNavigationState);
  const isNavBarCondition = isNavigation && !useCheckPathname({ targetPaths: noNavBarPaths });
  const isKeyword = useCheckPathname({ targetPaths: ['keyword'] });
  const { state: chatsUnreadApiState, contents: chatsUnread } =
    useRecoilValueLoadable(chatsUnreadState);
  const navigationBarInfo = useNavigationBarInfo();
  const navigationBarButtons = navigationBarInfo.map(
    ({ id, name, link, clickHandler, icon, iconFill }) => {
      const isSelected = useCheckPathname({ targetPaths: [link] });

      return (
        <S.NavigationBarBtn key={id} onClick={() => clickHandler(link)} isSelected={isSelected}>
          <S.IconWrapper isSelected={isSelected}>
            <Icon iconName={icon} iconSize={1.25} />
            <Icon iconName={iconFill} iconSize={1.25} />
            {link === 'chatrooms' && (
              <ChatsUnread newCount={chatsUnread} state={chatsUnreadApiState} />
            )}
          </S.IconWrapper>
          {name}
        </S.NavigationBarBtn>
      );
    },
  );

  return (
    <S.Wrapper isNavBarCondition={isNavBarCondition} isHeight={!isKeyword}>
      {/* 버튼 종류 설정 */}
      {isKeyword ? <AddKeywordButton /> : <ShareFormButton />}
      {/* 네비게이션 바 유무 설정 */}
      {!isKeyword && navigationBarButtons}
    </S.Wrapper>
  );
};

export default NavigationBar;
