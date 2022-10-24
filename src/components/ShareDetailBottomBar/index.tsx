import { useRef, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { useRecoilValueLoadable, useSetRecoilState } from 'recoil';

import { getPersonalChatroom } from '@api/chat';
import { deleteShare, deleteShareEntry, postShareEntry } from '@api/shareList';
import { changeWish, ChangeWishOptionType } from '@api/wish';
import ScrollToTopBtn from '@components/ScrollToTopBtn';
import * as S from '@components/ShareDetailBottomBar/ShareDetailBottomBar.style';
import Icon from '@components/common/Icon';
import SelectModal from '@components/common/SelectModal';
import {
  failedToDeleteShareMention,
  questionDeleteShareMention,
  successToDeleteShareMention,
} from '@constants/mentions';
import { pathName } from '@constants/pathName';
import {
  CANCEL_PARTICIPATING,
  DELETE,
  EDIT,
  PARTICIPATING,
  SHARE,
  START_CHATTING,
} from '@constants/words';
import useModal from '@hooks/useModal';
import { bottomMessageState } from '@store/bottomMessage';
import { portalState } from '@store/portal';
import { isLoginState } from '@store/user';
import { ShareDetailType } from '@type/shareList';
import { getPriceType } from '@utils/getPriceType';

type ShareDetailBottomBarPropsType = Pick<
  ShareDetailType,
  'wish' | 'entry' | 'price' | 'originalPrice' | 'isWriter' | 'id'
>;

const ShareDetailBottomBar = ({
  wish,
  entry,
  price,
  originalPrice,
  isWriter,
  id,
}: ShareDetailBottomBarPropsType) => {
  const navigate = useNavigate();
  const setBottomMessage = useSetRecoilState(bottomMessageState);
  const [isWishedNow, setIsWishedNow] = useState(wish);
  const [isEntry, setIsEntry] = useState(entry);
  const setPortalState = useSetRecoilState(portalState);
  const { state, contents } = useRecoilValueLoadable(isLoginState);
  const modalRef = useRef<HTMLDivElement>(null);
  const [isSelectModal, setIsSelectModal] = useModal({ modalRef });
  const isLogin = state === 'hasValue' && contents;

  const handleClickWishIcon = async () => {
    if (!isLogin) {
      setPortalState('login');
      return;
    }
    const wishControlOption: ChangeWishOptionType = !isWishedNow ? 'enroll' : 'cancel';
    const response = await changeWish({ option: wishControlOption, id });
    if (response?.status === 200) setIsWishedNow(!isWishedNow);
  };

  const handleClickStartChattingBtn = async () => {
    if (!isLogin) {
      setPortalState('login');
      return;
    }
    const chattingData = await getPersonalChatroom({ shareId: id });
    if (chattingData) {
      const { id: chatroomId } = chattingData;
      navigate(`${pathName.chatroomDetail}/${chatroomId}`);
    }
  };

  const handleClickParticipatingBtn = async () => {
    if (!isLogin) {
      setPortalState('login');
      return;
    }
    const request = isEntry ? deleteShareEntry : postShareEntry;
    const isRequestSuccess = await request({ id });
    if (isRequestSuccess) setIsEntry(!isEntry);
  };

  const handleClickEditBtn = () => {};

  const handleClickSelectOkBtn = async () => {
    const { isDeleted, message: errorMessage } = await deleteShare({ id: id + 332421 });
    if (isDeleted) {
      navigate('/');
      setBottomMessage(({ trigger }) => ({
        trigger: trigger + 1,
        message: successToDeleteShareMention,
      }));
    } else {
      setIsSelectModal(false);
      setBottomMessage(({ trigger }) => ({
        trigger: trigger + 1,
        message: errorMessage || failedToDeleteShareMention,
      }));
    }
  };

  return (
    <>
      <S.Wrapper>
        <S.ScrollToTopBtnWrapper>
          <ScrollToTopBtn />
        </S.ScrollToTopBtnWrapper>
        <S.LeftWrapper>
          <S.IconWrapper wish={isWishedNow}>
            <Icon iconName='HeartEmpty' handleClick={handleClickWishIcon} />
          </S.IconWrapper>
          <S.PriceWrapper>
            <div>{getPriceType({ price, isUnit: true })}</div>
            <div>{getPriceType({ price: originalPrice, isUnit: true })}</div>
          </S.PriceWrapper>
        </S.LeftWrapper>
        <S.RightWrapper>
          {!isWriter && (
            <>
              <S.Button onClick={handleClickStartChattingBtn} blur={true}>
                {START_CHATTING}
              </S.Button>
              <S.Button onClick={handleClickParticipatingBtn}>
                {isEntry ? CANCEL_PARTICIPATING : PARTICIPATING}
              </S.Button>
            </>
          )}
          {isWriter && (
            <>
              <S.Button onClick={handleClickEditBtn} blur={true}>
                {SHARE + EDIT}
              </S.Button>
              <S.Button onClick={() => setIsSelectModal(true)}>{SHARE + DELETE}</S.Button>
            </>
          )}
        </S.RightWrapper>
      </S.Wrapper>
      {isSelectModal && (
        <SelectModal
          modalRef={modalRef}
          onClickOkButton={handleClickSelectOkBtn}
          onClickCancelButton={() => setIsSelectModal(false)}
          okMention={DELETE}
          answeringMention={questionDeleteShareMention}
        />
      )}
    </>
  );
};

export default ShareDetailBottomBar;
