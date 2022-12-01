import { useRecoilValueLoadable } from 'recoil';

import EditUserInfoContents from '@components/EditUserInfoContents';
import ErrorWithButtons from '@components/ErrorWithButtons';
import Loading from '@components/Loading';
import { userInfoState } from '@store/userInfo';

const EditUserInfo = () => {
  const { state, contents } = useRecoilValueLoadable(userInfoState);

  const getContent = () => {
    switch (state) {
      case 'loading':
        return <Loading color='grey3' size={40} border={5} />;
      case 'hasValue':
        if (!contents) return <ErrorWithButtons mention='사용자 정보를 불러오지 못했습니다.' />;
        return <EditUserInfoContents prevUserInfo={contents} />;
      case 'hasError':
        return <ErrorWithButtons mention='사용자 정보를 불러오지 못했습니다.' />;
    }
  };

  return getContent();
};

export default EditUserInfo;
