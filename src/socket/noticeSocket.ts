import SockJs from 'sockjs-client';
import StompJs from 'stompjs';

import { ENTRIES, KEYWORDS, NOTIFICATIONS, QUEUE, WEBSOCKET } from '@constants/words';
import { getAuthHeaders } from '@utils/getAuthHeaders';

type subscribeParamsType = {
  entryIds: number[];
  keywordIds: number[];
  onSubscribeEntries: (entryData: StompJs.Message) => void;
  onSubscribeKeywords: (keywordData: StompJs.Message) => void;
};

export const noticeSocket = () => {
  const sockServer = `${process.env.REACT_APP_BASE_URL}/${WEBSOCKET}`; // 들어갈 주소 설정
  const sock = new SockJs(sockServer);
  const stompClient = StompJs.over(sock);

  const subscribeNotice = ({
    entryIds,
    keywordIds,
    onSubscribeEntries,
    onSubscribeKeywords,
  }: subscribeParamsType) => {
    const subscribeURL = `/${QUEUE}/${NOTIFICATIONS}`;
    const headers = getAuthHeaders();

    if (!!entryIds.length) {
      entryIds.forEach((id) => {
        stompClient.subscribe(subscribeURL + `/${ENTRIES}/${id}`, onSubscribeEntries, headers);
      });
    }

    if (!!keywordIds.length) {
      keywordIds.forEach((id) => {
        stompClient.subscribe(subscribeURL + `/${KEYWORDS}/${id}`, onSubscribeKeywords, headers);
      });
    }
  };

  const unsubscribe = () => {
    stompClient.unsubscribe('sub-0');
  };

  const connectNotice = (subscribeParams: subscribeParamsType) => {
    const headers = getAuthHeaders();

    try {
      // stompClient.debug = () => null;
      stompClient.connect(headers, () => subscribeNotice(subscribeParams));
    } catch (error) {
      console.log(error);
    }
  };

  const disconnectNotice = () => {
    try {
      // stompClient.debug = () => null;
      stompClient.disconnect(() => unsubscribe());
    } catch (error) {
      console.log(error);
    }
  };

  return { connectNotice, disconnectNotice };
};
