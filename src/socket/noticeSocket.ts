import { useSetRecoilState } from 'recoil';
import SockJs from 'sockjs-client';
import StompJs from 'stompjs';

import { ENTRIES, NOTIFICATIONS, QUEUE, WEBSOCKET } from '@constants/words';
import { newNoticeState } from '@store/notice';
import { getAuthHeaders } from '@utils/getAuthHeaders';

type subscribeParamsType = {
  entryIds: number[];
  keywordIds: number[];
};

export const useConnectNoticeSocket = () => {
  const sockServer = `${process.env.REACT_APP_BASE_URL}/${WEBSOCKET}`; // 들어갈 주소 설정
  const sock = new SockJs(sockServer);
  const stompClient = StompJs.over(sock);
  const setNewNotice = useSetRecoilState(newNoticeState);

  const subscribeNotice = ({ entryIds, keywordIds }: subscribeParamsType) => {
    const subscribeURL = `/${QUEUE}/${NOTIFICATIONS}`;
    const headers = getAuthHeaders();

    entryIds.forEach((id) => {
      stompClient.subscribe(
        subscribeURL + `/${ENTRIES}/${id}`,
        (entryData) => {
          const newEntryData = JSON.parse(entryData.body);
          setNewNotice(newEntryData);
        },
        headers,
      );
    });

    keywordIds.forEach((id) => {
      stompClient.subscribe(
        subscribeURL + `/${ENTRIES}/${id}`,
        (keywordData) => {
          const newKeywordData = JSON.parse(keywordData.body);
          setNewNotice(newKeywordData);
        },
        headers,
      );
    });
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
