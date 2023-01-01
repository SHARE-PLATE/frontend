import { useRecoilValueLoadable } from 'recoil';

import { chatroomIdsState } from '@store/chatrooms';
import { getKeywordListsData } from '@store/keyword';
import { shareListEntriesState } from '@store/shareList';

export const useSubscribedIds = () => {
  const { state: entriesState, contents: entriesContents } =
    useRecoilValueLoadable(shareListEntriesState);
  const { state: keywordsState, contents: keywordsContents } =
    useRecoilValueLoadable(getKeywordListsData);
  const { state: chatroomState, contents: chatroomContents } =
    useRecoilValueLoadable(chatroomIdsState);

  if (
    entriesState !== 'hasValue' ||
    keywordsState !== 'hasValue' ||
    chatroomState !== 'hasValue' ||
    !entriesContents ||
    !keywordsContents ||
    !chatroomContents
  )
    return null;

  const entryIds = entriesContents.data?.idList || [];
  const keywordIds = !keywordsContents.data
    ? []
    : keywordsContents.data.map(({ keywords }) => keywords.map(({ id }) => id)).flat();
  const chatroomIds = chatroomContents.map(({ id }) => id);

  return { entryIds, keywordIds, chatroomIds };
};
