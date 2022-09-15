import { useRecoilValue } from 'recoil';

import * as S from '@components/RegisteredKeyword/RegisteredKeyword.style';
import Icon from '@components/common/Icon';
import { keyword } from '@data/keyword';
import { getRegisteredKeywordData } from '@store/keyword';
interface RegisteredKeywordPropsType {
  regionName: string;
}

const RegisteredKeyword = ({ regionName }: RegisteredKeywordPropsType) => {
  const exampleKeyword = keyword;

  const { state, contents } = useRecoilValue(getRegisteredKeywordData(regionName)); //에러

  console.log(state);
  console.log(contents);

  return (
    <div>
      <S.SubHeader>
        등록된 키워드 {exampleKeyword.length} <S.MaxKeyword>/ 10</S.MaxKeyword>
      </S.SubHeader>
      <S.ContentContainer>
        {exampleKeyword.map((item) => (
          <S.ContentBox key={item}>
            <S.ContentItem>{item}</S.ContentItem>
            <Icon iconName='X_Icon' />
          </S.ContentBox>
        ))}
      </S.ContentContainer>
    </div>
  );

  // switch (state) {
  //   case 'hasValue':
  //     return (
  //       <div>
  //         <S.SubHeader>
  //           등록된 키워드 {exampleKeyword.length} <S.MaxKeyword>/ 10</S.MaxKeyword>
  //         </S.SubHeader>
  //         <S.ContentContainer>
  //           {exampleKeyword.map((item) => (
  //             <S.ContentBox key={item}>
  //               <S.ContentItem>{item}</S.ContentItem>
  //               <Icon iconName='X_Icon' />
  //             </S.ContentBox>
  //           ))}
  //         </S.ContentContainer>
  //       </div>
  //     );
  //   case 'loading':
  //     return <div>로딩 페이지</div>;
  //   case 'hasError':
  //     return <div>에러 페이지</div>;
  // }
};

export default RegisteredKeyword;
