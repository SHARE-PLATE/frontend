import { useState } from 'react';

import * as S from '@components/ShareForm/Option/ShareForm.style';
import Icon from '@components/common/Icon';

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
  const [isDateFocused, setIsDateFocused] = useState(false);
  const [isTimeFocused, setIsTimeFocused] = useState(false);

  const handelChangeDateTime = (date: Date | null) => setAppointmentDateTime(String(date));

  const handelChangeTime = ({ target }: React.ChangeEvent<HTMLInputElement>) =>
    setAppointmentTime(target.value);

  return (
    <S.TwoTextBlock ratio={0.7}>
      <S.DateInputWrapper htmlFor='date' isDateFocused={isDateFocused}>
        <S.DateInputLeftWrapper>
          <Icon iconName='Calendar' iconSize={1} />
          <S.DateInputFormWrapper>
            <S.DateInputTextWrapper>Select a day</S.DateInputTextWrapper>
            <S.StyledDatePicker
              id='date'
              wrapperClassName='datepicker'
              selected={new Date(appointmentDateTime)}
              onFocus={() => setIsDateFocused(true)}
              onBlur={() => setIsDateFocused(false)}
              onChange={handelChangeDateTime}
              dateFormat='yyyy.MM.dd'
              minDate={new Date()}
              showPopperArrow={false}
              formatWeekDay={(nameOfDay) => nameOfDay.substr(0, 1)}
            />
          </S.DateInputFormWrapper>
        </S.DateInputLeftWrapper>
        <Icon iconName='ChevronDown' iconSize={0.75} />
      </S.DateInputWrapper>
      <S.TimeInputWrapper htmlFor='time' isTimeFocused={isTimeFocused}>
        <S.TimeInputForm
          id='time'
          type='time'
          onFocus={() => setIsTimeFocused(true)}
          onBlur={() => setIsTimeFocused(false)}
          value={appointmentTime}
          onChange={handelChangeTime}
        />
        <Icon iconName='ChevronDown' iconSize={0.75} />
      </S.TimeInputWrapper>
    </S.TwoTextBlock>
  );
};

export default DateContainer;
