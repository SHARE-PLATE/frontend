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

  const handelChangeDate = (date: Date | null) => setAppointmentDateTime(String(date));

  const handelChangeTime = ({ target }: React.ChangeEvent<HTMLInputElement>) =>
    setAppointmentTime(target.value);

  const handleChangeTimeTest = (target: any) => console.log(target);

  return (
    <S.TwoTextBlock>
      <S.DateInputWrapper isDateFocused={isDateFocused}>
        <S.DateInputLeftWrapper>
          <Icon iconName='Calendar' iconSize={1} />
          <S.DateInputFormWrapper>
            <S.StyledDatePicker
              selected={new Date(appointmentDateTime)}
              onFocus={() => setIsDateFocused(true)}
              onBlur={() => setIsDateFocused(false)}
              onChange={handelChangeDate}
              dateFormat='yyyy.MM.dd'
              minDate={new Date()}
              showPopperArrow={false}
              formatWeekDay={(nameOfDay) => nameOfDay.substring(0, 1)}
              nextMonthButtonLabel={<Icon iconName='ChevronRight' iconSize={0.75} />}
              previousMonthButtonLabel={<Icon iconName='ChevronLeft' iconSize={0.75} />}
            />
          </S.DateInputFormWrapper>
        </S.DateInputLeftWrapper>
        <Icon iconName='ChevronDown' iconSize={0.9} />
      </S.DateInputWrapper>
      <S.TimeInputWrapper htmlFor='time' isTimeFocused={isTimeFocused}>
        <S.StyledTimePicker
          id='time'
          onChange={handleChangeTimeTest}
          timeIntervals={5}
          showTimeSelect
          showTimeSelectOnly
          showPopperArrow={false}
          timeFormat='HH mm aa'
          value={appointmentTime}
          onFocus={() => setIsTimeFocused(true)}
          onBlur={() => setIsTimeFocused(false)}
        />
        <Icon iconName='ChevronDown' iconSize={0.9} />
      </S.TimeInputWrapper>
    </S.TwoTextBlock>
  );
};

export default DateContainer;
