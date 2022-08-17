import { useState } from 'react';

import moment from 'moment';
import { useLocation, useNavigate } from 'react-router-dom';

import { FileContainer, TextContainer, ContentDescription } from '@components/ShareForm';
import Icon from '@components/common/Icon';
import InputForm from '@components/common/InputForm';
import useInput from '@hooks/useInput';
import * as S from '@pages/ShareRegistration/ShareRegistration.style';

const ShareRegistration = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [file, setFile] = useState<FileList>();
  const [appointmentLocation, setAppointmentLocation] = useState();
  const [appointmentDateTime, setAppointmentDateTime] = useState(moment().format('YYYY-MM-DD'));

  const titleInput = useInput('');
  const priceInput = useInput('');
  const originalPriceInput = useInput('');
  const recruitmentInput = useInput('');
  const descriptionInput = useInput('');

  const handelSubmit = async () => {
    const newData = {
      images: file,
      title: titleInput.inputValue,
      price: priceInput.inputValue,
      originalPrice: originalPriceInput.inputValue,
      location: appointmentLocation,
      recruitment: recruitmentInput.inputValue,
      appointmentDateTime: appointmentDateTime,
      description: descriptionInput.inputValue,
    };

    //엑시오스요청 (newData)
  };
  return (
    <S.Wrapper>
      <S.InputFormWrapper onSubmit={handelSubmit}>
        <FileContainer />
        <TextContainer
          titleInput={titleInput}
          priceInput={priceInput}
          originalPriceInput={originalPriceInput}
          recruitmentInput={recruitmentInput}
        />
        <ContentDescription descriptionInput={descriptionInput} />
        <S.SubmitBtn type='submit'>모집하기</S.SubmitBtn>
      </S.InputFormWrapper>
    </S.Wrapper>
  );
};

export default ShareRegistration;
