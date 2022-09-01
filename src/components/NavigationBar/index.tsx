import * as S from '@components/NavigationBar/NavigationBar.style';
import useNavigationBarInfo from '@components/NavigationBar/useNavigationBarInfo';
import ShareFormButton from '@components/ShareFormButton';
import Icon from '@components/common/Icon';
import useCheckPathname from '@hooks/useCheckPathname';

const NavigationBar = () => {
  const isNavBarCondition = !useCheckPathname({
    targetPaths: ['shareForm', 'loginCallback', 'shareDetail', 'chatroomDetail'],
  });
  const navigationBarInfo = useNavigationBarInfo();
  const navigationBarBtns = navigationBarInfo.map(
    ({ id, name, link, clickHandler, icon, iconFill }) => {
      const isSelected = useCheckPathname({ targetPaths: [link] });

      return (
        <S.NavigationBarBtn key={id} onClick={() => clickHandler(link)} isSelected={isSelected}>
          <S.IconWrapper isSelected={isSelected}>
            <Icon iconName={icon} iconSize={1.25} />
            <Icon iconName={iconFill} iconSize={1.25} />
          </S.IconWrapper>
          {name}
        </S.NavigationBarBtn>
      );
    },
  );

  return (
    <S.NavigationBarWrapper isNavBarCondition={isNavBarCondition}>
      <S.ShareFormBtnWrapper>
        <ShareFormButton />
      </S.ShareFormBtnWrapper>
      {navigationBarBtns}
    </S.NavigationBarWrapper>
  );
};

export default NavigationBar;
