import { useEffect, useState } from 'react';

import moment from 'moment';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';

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
  const { lat, lng, place_name, road_address_name } = useRecoilValue(shareLocationState);
  const resetShareLocation = useResetRecoilState(shareLocationState);
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
    formData.append('type', pathname.split('/')[2]);
    //제목
    formData.append('title', titleInput.inputValue);
    //가격
    formData.append('price', priceInput.inputValue);
    //원래가격
    formData.append('originalPrice', originalPriceInput.inputValue);
    //쉐어장소
    formData.append('location', String(road_address_name));
    // //쉐어장소 디테일
    formData.append('locationGuide', String(place_name));
    // //위도
    console.log(typeof lat)
    console.log(lat)
    console.log(typeof JSON.stringify(lat));
    console.log(JSON.stringify(lat));
    formData.append('latitude', String(lat));
    // //경도
    formData.append('longitude', String(lng));
    // //모집인원
    formData.append('recruitment', JSON.stringify(recruitmentValue));
    //쉐어시간
    formData.append(
      'closedDateTime',
      `${appointmentDateTime} ${appointmentTime}`,
    );

    console.log(JSON.stringify(pricePossibleValue));
    console.log(typeof JSON.stringify(pricePossibleValue));
    //설명
    formData.append('description', JSON.stringify(descriptionValue));
    //가격협의 가능 여부
    formData.append('locationNegotiation', JSON.stringify(pricePossibleValue));
    // //장소협의 가능 여부
    formData.append('priceNegotiation', JSON.stringify(pricePossibleValue));
    // //해쉬태그

    for (let i = 0; i < tagListValue.length; i++) {
      //이미지
      formData.append('hashtags', tagListValue[i]);
    }

    let isSuccessFetch = false;
    isSuccessFetch = await registrationShareListData(formData);
    if (isSuccessFetch) {
      setShareListTrigger((prev) => prev + 1);
      navigate('/share-list');
    }
  };

  useEffect(() => {
    return () => resetShareLocation();
  }, []);

  return (
    <S.Wrapper>
      <ShareFormHeader />
      <S.InputFormWrapper onSubmit={handelSubmit} encType='multipart/form-data'>
        <FileContainer fileImage={fileImage} setFileImage={setFileImage} />
        <TextContainer
          titleInput={titleInput}
          priceInput={priceInput}
          originalPriceInput={originalPriceInput}
          placeName={place_name}
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
