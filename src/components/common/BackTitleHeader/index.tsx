import { useNavigate } from 'react-router-dom';

import * as S from '@components/common/BackTitleHeader/BackTitleHeader.style';
import Icon from '@components/common/Icon';
import { pathName, pathNameKeysType } from '@constants/pathName';

type BackTitleHeaderPropsType = {
  title: string;
  backIconTargetPathname?: pathNameKeysType;
};

const BackTitleHeader = ({ title, backIconTargetPathname }: BackTitleHeaderPropsType) => {
  const navigate = useNavigate();
  const handleClickBackIcon = () =>
    backIconTargetPathname ? navigate(pathName[backIconTargetPathname]) : navigate(-1);

  return (
    <S.Wrapper>
      <Icon iconName='Back' handleClick={handleClickBackIcon} />
      <S.Title>{title}</S.Title>
    </S.Wrapper>
  );
};

export default BackTitleHeader;
