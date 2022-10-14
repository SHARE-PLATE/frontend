import { useEffect, useRef, useState, useCallback } from 'react';

import moment from 'moment';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';

import { registrationShareListData } from '@api/shareList';
import ErrorWithButtons from '@components/ErrorWithButtons';
import {
  FileContainer,
  TextContainer,
  ContentDescription,
  AddressContainer,
  DateContainer,
  RecruitmentContainer,
  OptionPortalButton,
} from '@components/ShareForm';
import {
  dateFormat,
  getCurrentTime,
  timeFormat,
} from '@components/ShareForm/DateContainer/timeSettings';
import BackTitleHeader from '@components/common/BackTitleHeader';
import FailedModal from '@components/common/FailedModal';
import { dataFailed } from '@constants/mentions';
import {
  DELIVERY_KOR,
  FINISH_REGISTRATION,
  INGREDIENTS_KOR,
  SHARE_REGISTRATION,
} from '@constants/words';
import useInput from '@hooks/useInput';
import useModal from '@hooks/useModal';
import * as S from '@pages/ShareRegistration/ShareRegistration.style';
import { shareLocationState } from '@store/location';
import { shareListTrigger } from '@store/shareList';
import { locationPossible, pricePossible, tagsState } from '@store/shareRegistration';

type TitleType = { type: 'delivery' | 'ingredient' };

const titleMatch = {
  delivery: DELIVERY_KOR,
  ingredient: INGREDIENTS_KOR,
};
const currentTime = getCurrentTime().format(timeFormat);
const currentDate = moment().format(dateFormat);

const ShareRegistration = () => {
  const { type } = useParams<TitleType>();
  if (!type) return <ErrorWithButtons />;

  const title = `${titleMatch[type]} ${SHARE_REGISTRATION}`;
  const navigate = useNavigate();
  const [fileImage, setFileImage] = useState<FileList>();
  const [descriptionValue, setDescriptionValue] = useState('');
  const [recruitmentValue, setRecruitmentValue] = useState(1);
  const [appointmentDateTime, setAppointmentDateTime] = useState(currentDate);
  const [appointmentTime, setAppointmentTime] = useState(currentTime);
  const [isSubmiting, setIsSubmiting] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const { lat, lng, place_name, road_address_name } = useRecoilValue(shareLocationState);
  const resetShareLocation = useResetRecoilState(shareLocationState);
  const tags = useRecoilValue(tagsState);
  const pricePossibleValue = useRecoilValue(pricePossible);
  const locationPossibleValue = useRecoilValue(locationPossible);
  const [isModalOpen, setIsModalOpen] = useModal({ modalRef });
  const titleInput = useInput('');
  const priceInput = useInput('');
  const originalPriceInput = useInput('');
  const setShareListTrigger = useSetRecoilState(shareListTrigger);

  const closeModal = () => setIsModalOpen(false);
  const handelSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (!fileImage || !type) return;

    setIsSubmiting(true);
    const formData = new FormData();

    //이미지
    for (let i = 0; i < fileImage.length; i++) {
      formData.append('images', fileImage[i]);
    }

    //해쉬태그
    for (let i = 0; i < tags.length; i++) {
      formData.append('hashtags', tags[i]);
    }

    //타입
    formData.append('type', type);
    //제목
    formData.append('title', titleInput.inputValue);
    //가격
    formData.append('price', priceInput.inputValue.replaceAll(',', ''));
    //원래가격
    formData.append('originalPrice', originalPriceInput.inputValue.replaceAll(',', ''));
    //쉐어장소
    formData.append('location', String(road_address_name));
    //쉐어장소 디테일
    formData.append('locationGuide', String(place_name));
    //위도
    formData.append('latitude', String(lat));
    //경도
    formData.append('longitude', String(lng));
    //모집인원
    formData.append('recruitment', JSON.stringify(recruitmentValue));
    //쉐어시간
    formData.append(
      'closedDateTime',
      `${appointmentDateTime} ${appointmentTime.substring(0, appointmentTime.length - 3)}`,
    );
    //설명
    formData.append('description', descriptionValue);
    //가격협의 가능 여부
    formData.append('locationNegotiation', JSON.stringify(pricePossibleValue));
    //장소협의 가능 여부
    formData.append('priceNegotiation', JSON.stringify(locationPossibleValue));

    const isSuccessFetch = await registrationShareListData(formData);

    if (isSuccessFetch) {
      setShareListTrigger((prev) => prev + 1);
      navigate('/share-list');
    } else {
      setIsModalOpen(true);
      setIsSubmiting(false);
    }
  };

  useEffect(() => {
    return () => resetShareLocation();
  }, []);

  return (
    <S.Wrapper>
      <BackTitleHeader title={title} />
      <S.InputFormWrapper onSubmit={handelSubmit} encType='multipart/form-data'>
        <FileContainer
          fileImage={fileImage}
          setFileImage={useCallback((file) => setFileImage(file), [])}
        />

        <TextContainer
          titleInput={titleInput}
          priceInput={priceInput}
          originalPriceInput={originalPriceInput}
        />

        <AddressContainer placeName={place_name} />

        <DateContainer
          appointmentDateTime={appointmentDateTime}
          setAppointmentDateTime={setAppointmentDateTime}
          appointmentTime={appointmentTime}
          setAppointmentTime={setAppointmentTime}
        />

        <S.TwoContents>
          <RecruitmentContainer
            recruitmentValue={recruitmentValue}
            setRecruitmentValue={setRecruitmentValue}
          />
          <OptionPortalButton />
        </S.TwoContents>

        <ContentDescription
          descriptionValue={descriptionValue}
          setDescriptionValue={setDescriptionValue}
        />

        <S.SubmitBtn type='submit' disabled={isSubmiting}>
          {FINISH_REGISTRATION}
        </S.SubmitBtn>
        {isModalOpen && (
          <FailedModal modalRef={modalRef} closeModal={closeModal} text={dataFailed} />
        )}
      </S.InputFormWrapper>
    </S.Wrapper>
  );
};

export default ShareRegistration;
