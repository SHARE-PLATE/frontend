import { useState } from 'react';

import moment from 'moment';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { registrationShareListData } from '@api/shareList';
import { FileContainer, TextContainer, ContentDescription } from '@components/ShareForm';
import ShareFormHeader from '@components/ShareFormHeader';
import useInput from '@hooks/useInput';
import * as S from '@pages/ShareRegistration/ShareRegistration.style';
import { shareLocationState } from '@store/location';
import { shareListTrigger } from '@store/shareList';
import { locationPossible, pricePossible, tagList } from '@store/shareRegistration';

const ShareRegistration = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [fileImage, setFileImage] = useState<FileList>();
  const [descriptionValue, setDescriptionValue] = useState('');
  const { road_address_name } = useRecoilValue(shareLocationState);
  const tagListValue = useRecoilValue(tagList);
  const pricePossibleValue = useRecoilValue(pricePossible);
  const locationPossibleValue = useRecoilValue(locationPossible);
  const [recruitmentValue, setRecruitmentValue] = useState(1);
  const [appointmentDateTime, setAppointmentDateTime] = useState(moment().format('YYYY-MM-DD'));
  const [appointmentTime, setAppointmentTime] = useState(moment().format('HH:mm'));

  const titleInput = useInput('');
  const priceInput = useInput('');
  const originalPriceInput = useInput('');

  const setShareListTrigger = useSetRecoilState(shareListTrigger);

  const handelSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const formData = new FormData();

    if (fileImage) {
      for (let i = 0; i < fileImage.length; i++) {
        //이미지
        formData.append('images', fileImage[i]);
      }
    }

    //타입
    formData.append('type', JSON.stringify(pathname.split('/')[2]));
    //제목
    formData.append('title', JSON.stringify(titleInput.inputValue));
    //가격
    formData.append('price', JSON.stringify(priceInput.inputValue));
    //원래가격
    formData.append('originalPrice', JSON.stringify(originalPriceInput.inputValue));
    //쉐어장소
    formData.append('location', JSON.stringify(road_address_name));
    //모집인원
    formData.append('recruitment', JSON.stringify(recruitmentValue));
    //쉐어시간
    formData.append(
      'appointmentDateTime',
      JSON.stringify(`${appointmentDateTime} ${appointmentTime}`),
    );
    //설명
    formData.append('description', JSON.stringify(descriptionValue));
    //가격협의
    formData.append('', JSON.stringify(pricePossibleValue));
    //장소협의
    formData.append('', JSON.stringify(locationPossibleValue));
    //해쉬태그
    formData.append('hashtags', JSON.stringify(tagListValue));

    let isSuccessFetch = false;
    isSuccessFetch = await registrationShareListData(formData);

    if (isSuccessFetch) {
      setShareListTrigger((prev) => prev + 1);
      navigate('/share-list');
    }
  };
  return (
    <S.Wrapper>
      <ShareFormHeader />
      <S.InputFormWrapper onSubmit={handelSubmit} encType='multipart/form-data'>
        <FileContainer fileImage={fileImage} setFileImage={setFileImage} />
        <TextContainer
          titleInput={titleInput}
          priceInput={priceInput}
          originalPriceInput={originalPriceInput}
          roadAddressName={road_address_name}
          appointmentDateTime={appointmentDateTime}
          setAppointmentDateTime={setAppointmentDateTime}
          appointmentTime={appointmentTime}
          setAppointmentTime={setAppointmentTime}
          recruitmentValue={recruitmentValue}
          setRecruitmentValue={setRecruitmentValue}
        />
        <ContentDescription
          descriptionValue={descriptionValue}
          setDescriptionValue={setDescriptionValue}
        />
        <S.SubmitBtn type='submit'>등록완료</S.SubmitBtn>
      </S.InputFormWrapper>
    </S.Wrapper>
  );
};

export default ShareRegistration;
