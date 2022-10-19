import { MouseEvent, TouchEvent, useEffect, useRef, useState } from 'react';

import moment from 'moment';
import 'moment/locale/ko';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { useLongPress, LongPressEvent } from 'use-long-press';

import * as S from '@components/ChatroomsItem/ChatroomsItem.style';
import ImgContainer from '@components/common/ImgContainer';
import { noRecentChatMention } from '@constants/mentions';
import { pathName } from '@constants/pathName';
import { chatroomsUpdateState } from '@store/chatrooms';
import { ChatroomsDataType } from '@type/chat';

export type IdType = string | null;

export type ChatroomItemCallBackParamsType = { id?: string; event?: LongPressEvent<any> };

export type LongPressOption = {
  onLongPress?: ({ id, event }: ChatroomItemCallBackParamsType) => void;
  onLongPressStart?: ({ id, event }: ChatroomItemCallBackParamsType) => void;
  onLongPressFinish?: ({ id, event }: ChatroomItemCallBackParamsType) => void;
};

type ChatroomsItemPropsType = ChatroomsDataType & {
  longPressOption: LongPressOption;
  onClickExitBtn: ({ id, event }: ChatroomItemCallBackParamsType) => void;
};

const defaultStartPoint = 0;

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
  longPressOption,
  onClickExitBtn,
}: ChatroomsItemPropsType) => {
  const navigate = useNavigate();
  const { id: updateId, contents: updateContents } = useRecoilValue(chatroomsUpdateState);
  const [curUnreadCount, setCurUnreadCount] = useState(unreadCount);
  const [curRecentMessage, setCurRecentMessage] = useState<string | undefined>(recentMessage);
  const [startPoint, setStartPoint] = useState(0);
  const [moving, setMoving] = useState<S.MovingType>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { onLongPress, onLongPressFinish, onLongPressStart } = longPressOption;
  const diffTime = moment(recentMessageDataTime).add(9, 'hours').fromNow();
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
      onLongPress && onLongPress({ id, event });
    },
    {
      threshold: 500,
      captureEvent: true,
      cancelOnMovement: true,
      onStart: (event) => {
        onLongPressStart && onLongPressStart({ event, id });
      },
      onFinish: (event) => {
        setStartPoint(defaultStartPoint);
        onLongPressFinish && onLongPressFinish({ event, id });
      },
    },
  );

  const changeInnerLeft = (distance: number) => {
    if (!startPoint || !wrapperRef.current) return;
    if (distance >= 20) setMoving('left');
    if (distance > defaultStartPoint && distance < 20)
      wrapperRef.current.style.left = `-${distance / 10}px`;
    if (distance < defaultStartPoint && distance > -20)
      wrapperRef.current.style.left = `${distance / 10}px`;
    if (distance <= -20) setMoving('right');
  };

  const handleClickItem = () => {
    if (moving) return;
    navigate(`${pathName.chatroomDetail}/${id}`, { state: { chatRoomMemberId } });
  };

  const handleMoveEnd = (distance: number) => {
    if (distance >= 20) {
      setMoving('left');
    } else {
      wrapperRef.current && (wrapperRef.current.style.left = '0');
    }

    setStartPoint(defaultStartPoint);
  };

  const handleClickExitBtn = (event: MouseEvent<HTMLButtonElement>) => {
    setMoving('right');
    setStartPoint(defaultStartPoint);
    onClickExitBtn({ event, id });
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

  const handleAnimationEnd = () => {
    if (moving === 'right') setMoving(null);
  };

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
        onAnimationEnd={handleAnimationEnd}
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
                {recentMessageDataTime && <S.Time>{diffTime}</S.Time>}
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
