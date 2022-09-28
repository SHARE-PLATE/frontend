import { SetterOrUpdater } from 'recoil';
import SockJs from 'sockjs-client';
import StompJs from 'stompjs';

import { ENTRIES, KEYWORD, NOTIFICATIONS, QUEUE, WEBSOCKET } from '@constants/words';
import { newNoticeStateType } from '@store/notice';
import { getAuthHeaders } from '@utils/getAuthHeaders';

type subscribeParamsType = {
  entryIds?: number[];
  keywordIds?: number[];
};

type connectNoticeParamsType = {
  setter: SetterOrUpdater<newNoticeStateType>;
};

export const noticeSocket = ({ setter }: connectNoticeParamsType) => {
  const sockServer = `${process.env.REACT_APP_BASE_URL}/${WEBSOCKET}`; // 들어갈 주소 설정
  const sock = new SockJs(sockServer);
  const stompClient = StompJs.over(sock);

  const subscribeNotice = ({ entryIds = [], keywordIds = [] }: subscribeParamsType) => {
    const subscribeURL = `/${QUEUE}/${NOTIFICATIONS}`;
    const headers = getAuthHeaders();

    if (!!entryIds.length) {
      entryIds.forEach((id) => {
        stompClient.subscribe(
          subscribeURL + `/${ENTRIES}/${id}`,
          (entryData) => {
            const newEntryData = JSON.parse(entryData.body);
            setter(newEntryData);
          },
          headers,
        );
      });
    }

    if (!!keywordIds.length) {
      keywordIds.forEach((id) => {
        stompClient.subscribe(
          subscribeURL + `/${KEYWORD}/${id}`,
          (keywordData) => {
            const newKeywordData = JSON.parse(keywordData.body);
            setter(newKeywordData);
          },
          headers,
        );
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
