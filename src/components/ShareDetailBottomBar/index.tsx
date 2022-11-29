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
  cancelParticipating,
  cancelWishMention,
  enrollParticipating,
  enrollWishMention,
  failedToDeleteShareMention,
  questionCancelShareMention,
  questionDeleteShareMention,
  questionParticipateShareMention,
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
  isInfoBar,
}: ShareDetailBottomBarPropsType & { isInfoBar: boolean }) => {
  const navigate = useNavigate();
  const setBottomMessage = useSetRecoilState(bottomMessageState);
  const [isWishedNow, setIsWishedNow] = useState(wish);
  const [isEntry, setIsEntry] = useState(entry);
  const setPortalState = useSetRecoilState(portalState);
  const { state, contents } = useRecoilValueLoadable(isLoginState);
  const modalRef = useRef<HTMLDivElement>(null);
  const [isSelectModal, setIsSelectModal] = useModal({ modalRef });
  const selectModalOkMention = isWriter ? DELETE : isEntry ? CANCEL_PARTICIPATING : PARTICIPATING;
  const selectModalAnsweringMention = isWriter
    ? questionDeleteShareMention
    : isEntry
    ? questionCancelShareMention
    : questionParticipateShareMention;
  const isLogin = state === 'hasValue' && contents;

  const deleteCurrentShare = async () => {
    const { isDeleted, message: errorMessage } = await deleteShare({ id });
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

  const handleClickWishIcon = async () => {
    if (!isLogin) {
      setPortalState('login');
      return;
    }
    const wishControlOption: ChangeWishOptionType = !isWishedNow ? 'enroll' : 'cancel';
    const response = await changeWish({ option: wishControlOption, id });
    if (response?.status === 200) {
      setIsWishedNow(!isWishedNow);
      setBottomMessage(({ trigger }) => ({
        trigger: trigger + 1,
        message: !isWishedNow ? enrollWishMention : cancelWishMention,
        distance: 5,
      }));
    }
  };

  const startChatting = async () => {
    const chattingData = await getPersonalChatroom({ shareId: id });

    if (chattingData) {
      const { id: chatroomId } = chattingData;
      navigate(`${pathName.chatroomDetail}/${chatroomId}`);
    }
  };

  const changeParticipating = async () => {
    const request = isEntry ? deleteShareEntry : postShareEntry;
    const isRequestSuccess = await request({ id });

    if (isRequestSuccess) {
      setBottomMessage(({ trigger }) => ({
        trigger: trigger + 1,
        message: !isEntry ? enrollParticipating : cancelParticipating,
        distance: 5,
      }));
      setIsEntry(!isEntry);
    }
  };

  const handleClickFirstBtn = () => {
    if (!isLogin) {
      setPortalState('login');
      return;
    }

    if (isWriter) {
    } else {
      startChatting();
    }
  };

  const handleClickSecondBtn = async () => {
    if (!isLogin) {
      setPortalState('login');
      return;
    }
    setIsSelectModal(true);
  };

  const handleClickSelectOkBtn = async () => {
    if (isWriter) {
      deleteCurrentShare();
    } else {
      changeParticipating();
    }

    setIsSelectModal(false);
  };

  return (
    <>
      <S.Wrapper>
        {isInfoBar && (
          <S.ScrollToTopBtnWrapper>
            <ScrollToTopBtn />
          </S.ScrollToTopBtnWrapper>
        )}
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
          <S.Button onClick={handleClickFirstBtn} blur={true}>
            {isWriter ? SHARE + EDIT : START_CHATTING}
          </S.Button>
          <S.Button onClick={handleClickSecondBtn}>
            {isWriter ? SHARE + DELETE : isEntry ? CANCEL_PARTICIPATING : PARTICIPATING}
          </S.Button>
        </S.RightWrapper>
      </S.Wrapper>
      {isSelectModal && (
        <SelectModal
          modalRef={modalRef}
          onClickOkButton={handleClickSelectOkBtn}
          onClickCancelButton={() => setIsSelectModal(false)}
          okMention={selectModalOkMention}
          answeringMention={selectModalAnsweringMention}
        />
      )}
    </>
  );
};

export default ShareDetailBottomBar;
