import {
  Dispatch,
  MouseEvent,
  SetStateAction,
  TouchEvent,
  useEffect,
  useRef,
  useState,
} from 'react';

import moment from 'moment';
import 'moment/locale/ko';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useLongPress } from 'use-long-press';

import { deleteChatroomData } from '@api/chat';
import * as S from '@components/ChatroomsItem/ChatroomsItem.style';
import ImgContainer from '@components/common/ImgContainer';
import { noRecentChatMention } from '@constants/mentions';
import { chatroomsTrigger, chatroomsUpdateState } from '@store/chatrooms';
import { ChatroomsDataType } from '@type/chat';

export type IdType = string | null;

type ChatroomsItemPropsType = ChatroomsDataType & {
  setDeletedId: Dispatch<SetStateAction<IdType>>;
};

const ChatroomsItem = ({
  id,
  chatRoomMemberId,
  shareThumbnailImageUrl,
  currentRecruitment,
  recentMessage,
  recentMessageDataTime,
  recruitmentMemberNicknames,
  recruitmentMemberImageUrls,
  unreadCount,
  setDeletedId,
}: ChatroomsItemPropsType) => {
  const navigate = useNavigate();
  const setChatroomsTrigger = useSetRecoilState(chatroomsTrigger);
  const { id: updateId, contents: updateContents } = useRecoilValue(chatroomsUpdateState);
  const [curUnreadCount, setCurUnreadCount] = useState(unreadCount);
  const [curRecentMessage, setCurRecentMessage] = useState<string | undefined>(recentMessage);
  const [startPoint, setStartPoint] = useState(0);
  const [moving, setMoving] = useState<S.MovingType>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const diffTime = moment(recentMessageDataTime).fromNow();
  const recruitmentMemberNicknamesJoined = recruitmentMemberNicknames.join(', ');
  const recruitmentMemberImages = recruitmentMemberImageUrls.map((img) => (
    <ImgContainer
      key={`key-${img}`}
      imgSrc={img}
      imgTitle={img}
      imgWrapperRatio={1 / 1}
      imgWrapperWidth={'100%'}
    />
  ));

  const handleLongPress = useLongPress(
    (event) => {
      event.stopPropagation();
      setDeletedId(id);
    },
    {
      threshold: 500,
      captureEvent: true,
      cancelOnMovement: true,
      onFinish: (event) => {
        event.stopPropagation();
        setStartPoint(0);
      },
    },
  );

  const changeInnerLeft = (distance: number) => {
    if (!startPoint || !wrapperRef.current) return;
    if (distance >= 20) setMoving('left');
    if (distance > 0 && distance < 20) wrapperRef.current.style.left = `-${distance / 10}px`;
    if (distance < 0 && distance > -20) wrapperRef.current.style.left = `${distance / 10}px`;
    if (distance <= -20) setMoving('right');
  };

  const handleClickItem = () => {
    if (!wrapperRef.current) return;
    const { left } = wrapperRef.current.style;

    console.log(left);
    if (left !== '0px') return;
    navigate(`/chatroom-detail/${id}`, { state: { chatRoomMemberId } });
  };

  const handleClickExitBtn = async (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    const response = await deleteChatroomData(id);
    if (response.status === 200) setChatroomsTrigger((trigger) => trigger + 1);
  };

  const handleMoveEnd = (distance: number) => {
    if (distance >= 20) {
      setMoving('left');
    } else {
      wrapperRef.current && (wrapperRef.current.style.left = '0');
    }

    setStartPoint(0);
  };

  const handleMouseDown = (event: MouseEvent<HTMLDivElement>) => setStartPoint(event.screenX);

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) =>
    setStartPoint(event.touches[0].screenX);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) =>
    changeInnerLeft(startPoint - event.screenX);

  const handleTouchMove = (event: TouchEvent<HTMLDivElement>) =>
    changeInnerLeft(startPoint - event.touches[0].screenX);

  const handleMouseLeaveOrUp = (event: MouseEvent<HTMLDivElement>) =>
    handleMoveEnd(startPoint - event.screenX);

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) =>
    handleMoveEnd(startPoint - event.changedTouches[0].screenX);

  useEffect(() => {
    if (chatRoomMemberId !== updateId) return;

    setCurRecentMessage(updateContents);
    setCurUnreadCount((prev) => prev + 1);
  }, [updateContents]);

  return (
    <S.OuterWrapper>
      <S.InnerWrapper
        ref={wrapperRef}
        moving={moving}
        onTouchMove={handleTouchMove}
        onTouchStartCapture={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseLeaveOrUp}
        onMouseLeave={handleMouseLeaveOrUp}
        onClick={handleClickItem}
      >
        <S.ShowedWrapper {...handleLongPress()}>
          <S.InfoWrapper>
            <S.ImgsWrapper count={recruitmentMemberImages.length}>
              {recruitmentMemberImages}
            </S.ImgsWrapper>
            <S.TextWrapper>
              <S.TextUpper>
                <S.WritersNames>{recruitmentMemberNicknamesJoined}</S.WritersNames>
                <S.WritersCount>{currentRecruitment}</S.WritersCount>
                <S.Time>{diffTime}</S.Time>
              </S.TextUpper>
              <S.Content isRecent={!!curRecentMessage}>
                {curRecentMessage || noRecentChatMention}
              </S.Content>
            </S.TextWrapper>
          </S.InfoWrapper>
          <S.UnreadCountWrapper>
            {!!curUnreadCount && <S.UnreadCount>{curUnreadCount}</S.UnreadCount>}
            <ImgContainer
              imgSrc={shareThumbnailImageUrl}
              imgTitle={id + shareThumbnailImageUrl}
              imgWrapperRatio={1 / 1}
              imgWrapperWidth='3rem'
              additionalStyle={S.ShareImgStyle}
            />
          </S.UnreadCountWrapper>
        </S.ShowedWrapper>
        <S.ExitBtn onClick={handleClickExitBtn}>나가기</S.ExitBtn>
      </S.InnerWrapper>
    </S.OuterWrapper>
  );
};

export default ChatroomsItem;
