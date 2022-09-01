import { useState } from 'react';

import moment from 'moment';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { registrationShareListData } from '@api/shareList';
import { FileContainer, TextContainer, ContentDescription } from '@components/ShareForm';
import ShareFormHeader from '@components/ShareFormHeader';
import useInput from '@hooks/useInput';
import * as S from '@pages/ShareRegistration/ShareRegistration.style';
import { shareListTrigger } from '@store/shareList';

const ShareRegistration = () => {
  const navigate = useNavigate();
  const [fileImage, setFileImage] = useState<FileList>();
  const [descriptionValue, setDescriptionValue] = useState('');
  const [locationValue, setLocationValue] = useState();
  const [appointmentDateTime, setAppointmentDateTime] = useState(moment().format('YYYY-MM-DD'));
  const setShareListTrigger = useSetRecoilState(shareListTrigger);
  const titleInput = useInput('');
  const priceInput = useInput('');
  const originalPriceInput = useInput('');
  const recruitmentInput = useInput('');

  const handelSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const formData = new FormData();

    if (fileImage) {
      for (let i = 0; i < fileImage.length; i++) {
        formData.append('images', fileImage[i]);
      }
    }

    formData.append('title', JSON.stringify(titleInput.inputValue));
    formData.append('price', JSON.stringify(priceInput.inputValue));
    formData.append('originalPrice', JSON.stringify(originalPriceInput.inputValue));
    formData.append('location', JSON.stringify(locationValue));
    formData.append('recruitment', JSON.stringify(recruitmentInput.inputValue));
    formData.append('appointmentDateTime', JSON.stringify(appointmentDateTime));
    formData.append('description', JSON.stringify(descriptionValue));

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
          recruitmentInput={recruitmentInput}
          appointmentDateTime={appointmentDateTime}
          setAppointmentDateTime={setAppointmentDateTime}
        />
        <ContentDescription
          descriptionValue={descriptionValue}
          setDescriptionValue={setDescriptionValue}
        />
        <S.SubmitBtn type='submit'>모집하기</S.SubmitBtn>
      </S.InputFormWrapper>
    </S.Wrapper>
  );
};

export default ShareRegistration;
