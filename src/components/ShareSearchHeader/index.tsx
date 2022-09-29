import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import * as S from '@components/ShareSearchHeader/ShareSearchHeader.style';
import Icon from '@components/common/Icon';
import { portalState } from '@store/portal';

const ShareSearchHeader = ({ keyWord }: { keyWord: string }) => {
  const setPortal = useSetRecoilState(portalState);
  const navigate = useNavigate();
  const handleClickBackBtn = () => navigate(-1);
  const handelClickOpenSearchForm = () => setPortal('search');
  return (
    <S.Wrapper>
      <S.FormWrapper>
        <S.CloseBtn onClick={handleClickBackBtn}>
          <Icon iconName='Back' />
        </S.CloseBtn>
        <S.Form onClick={handelClickOpenSearchForm}>
          <S.Input value={keyWord} readOnly />
        </S.Form>
      </S.FormWrapper>
    </S.Wrapper>
  );
};

export default ShareSearchHeader;
