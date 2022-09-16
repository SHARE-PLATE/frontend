import { NoticeKeywordDataType } from '@api/notice';
import * as S from '@components/NoticeActivity/NoticeActivity.style';

type NoticeActivityPropsType = { contents: NoticeKeywordDataType }; // active notice 값에 따라 올바른 contents type 들어오도록 재설정 필요

const NoticeKeyword = ({ contents }: NoticeActivityPropsType) => {
  const Items = contents.map(({}) => <S.Item></S.Item>);

  return <S.Wrapper>{}</S.Wrapper>;
};

export default NoticeKeyword;
