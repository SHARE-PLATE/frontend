import * as S from '@components/NavigationBar/NavigationBar.style';
import useNavigationBarInfo from '@components/NavigationBar/useNavigationBarInfo';
import ShareFormButton from '@components/ShareFormButton';
import Icon from '@components/common/Icon';
import useCheckPathname from '@hooks/useCheckPathname';

const NavigationBar = () => {
  const navigationBarInfo = useNavigationBarInfo();
  const navigationBarBtns = navigationBarInfo.map(({ id, name, link, clickHandler, icon }) => {
    const isSelected = useCheckPathname({ targetPaths: [link] });

    return (
      <S.NavigationBarBtn key={id} onClick={() => clickHandler(link)} isSelected={isSelected}>
        <Icon iconName={icon} />
        {name}
      </S.NavigationBarBtn>
    );
  });

  return (
    <S.NavigationBarWrapper>
      <S.ShareFormBtnWrapper>
        <ShareFormButton />
      </S.ShareFormBtnWrapper>
      {navigationBarBtns}
    </S.NavigationBarWrapper>
  );
};

export default NavigationBar;
