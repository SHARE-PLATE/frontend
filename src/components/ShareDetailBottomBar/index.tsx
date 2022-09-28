import { useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilValueLoadable, useSetRecoilState } from 'recoil';

import { getPersonalChatroom } from '@api/chat';
import { deleteShareEntry, postShareEntry } from '@api/shareList';
import { changeWish, ChangeWishOptionType } from '@api/wish';
import ScrollToTopBtn from '@components/ScrollToTopBtn';
import * as S from '@components/ShareDetailBottomBar/ShareDetailBottomBar.style';
import Icon from '@components/common/Icon';
import { pathName } from '@constants/pathName';
import { CANCEL_PARTICIPATING, PARTICIPATING, START_CHATTING } from '@constants/words';
import { portalState } from '@store/portal';
import { isLoginState } from '@store/user';
import { getPriceType } from '@utils/getPriceType';

type ShareDetailBottomBarPropsType = {
  isWished?: boolean;
  isEntry?: boolean;
};

const price = 10000;
const originalPrice = 20000;

const ShareDetailBottomBar = ({ isWished, isEntry }: ShareDetailBottomBarPropsType) => {
  const navigate = useNavigate();
  const { state, contents } = useRecoilValueLoadable(isLoginState);
  const isLogin = state === 'hasValue' && contents;
  const setPortalState = useSetRecoilState(portalState);
  const [isWishedNow, setIsWishedNow] = useState(isWished);
  const { id } = useParams();

  const handleClickWishIcon = async () => {
    const wishControlOption: ChangeWishOptionType = !isWishedNow ? 'enroll' : 'cancel';
    const response = await changeWish({ option: wishControlOption, id });

    if (response?.status === 200) {
      setIsWishedNow(!isWishedNow);
    } else {
      setPortalState('login');
    }
  };

  const handleClickStartChattingBtn = async () => {
    if (!isLogin) {
      setPortalState('login');
      return;
    }
    if (!id) return;
    const chattingData = await getPersonalChatroom({ shareId: id });
    if (!chattingData) return; // 채팅하기 실패 시 보여줄 내용 처리 필요
    const { id: chatroomId } = chattingData;
    const 테스트 = null;
    navigate(`${pathName.chatroomDetail}/${chatroomId}`, { state: { chatRoomMemberId: 테스트 } });
  };

  const handleClickParticipatingBtn = async () => {
    if (!isLogin) {
      setPortalState('login');
      return;
    }
    if (!id) return;
    const request = isEntry ? deleteShareEntry : postShareEntry;
    const isRequestSuccess = await request({ id });
    if (!isRequestSuccess) return; // 요청 실패 시 보여줄 내용 처리 필요
  };

  return (
    <S.Wrapper>
      <S.ScrollToTopBtnWrapper>
        <ScrollToTopBtn />
      </S.ScrollToTopBtnWrapper>
      <S.LeftWrapper>
        <S.IconWrapper isWished={isWishedNow}>
          <Icon iconName='HeartEmpty' handleClick={handleClickWishIcon} />
        </S.IconWrapper>
        <S.PriceWrapper>
          <div>{getPriceType({ price, isUnit: true })}</div>
          <div>{getPriceType({ price: originalPrice, isUnit: true })}</div>
        </S.PriceWrapper>
      </S.LeftWrapper>
      <S.RightWrapper>
        <S.Button onClick={handleClickStartChattingBtn} blur={true}>
          {START_CHATTING}
        </S.Button>
        <S.Button onClick={handleClickParticipatingBtn}>
          {isEntry ? CANCEL_PARTICIPATING : PARTICIPATING}
        </S.Button>
      </S.RightWrapper>
    </S.Wrapper>
  );
};

export default ShareDetailBottomBar;
