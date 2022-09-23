import * as S from '@components/ShareForm/Option/ShareForm.style';

interface DateContainerPropsType {
  appointmentDateTime: string;
  setAppointmentDateTime: React.Dispatch<React.SetStateAction<string>>;
  appointmentTime: string;
  setAppointmentTime: React.Dispatch<React.SetStateAction<string>>;
}

const DateContainer = ({
  appointmentDateTime,
  setAppointmentDateTime,
  appointmentTime,
  setAppointmentTime,
}: DateContainerPropsType) => {
  const handelChangeDateTime = ({ target }: React.ChangeEvent<HTMLInputElement>) =>
    setAppointmentDateTime(target.value);

  const handelChangeTime = ({ target }: React.ChangeEvent<HTMLInputElement>) =>
    setAppointmentTime(target.value);

  return (
    <S.TowTextBlock>
      <S.DateInputForm type='date' value={appointmentDateTime} onChange={handelChangeDateTime} />
      <S.DateInputForm type='time' value={appointmentTime} onChange={handelChangeTime} />
    </S.TowTextBlock>
  );
};

export default DateContainer;
