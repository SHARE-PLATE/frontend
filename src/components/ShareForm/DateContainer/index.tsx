import { useState } from 'react';

import moment from 'moment';

import * as S from '@components/ShareForm/DateContainer/DateContainer.style';
import {
  dateFormat,
  getCurrentTime,
  timeFormat,
  timeIntervals,
} from '@components/ShareForm/DateContainer/timeSettings';
import { TwoTextBlock } from '@components/ShareForm/ShareForm.style';
import Icon from '@components/common/Icon';

interface DateContainerPropsType {
  appointmentDateTime: string;
  setAppointmentDateTime: React.Dispatch<React.SetStateAction<string>>;
  appointmentTime: string;
  setAppointmentTime: React.Dispatch<React.SetStateAction<string>>;
}

const currentTime = getCurrentTime();

const DateContainer = ({
  appointmentDateTime,
  setAppointmentDateTime,
  appointmentTime,
  setAppointmentTime,
}: DateContainerPropsType) => {
  const [isDateFocused, setIsDateFocused] = useState(false);
  const [isTimeFocused, setIsTimeFocused] = useState(false);
  const [currentTimeDateType, setCurrentTimeDateType] = useState(currentTime.toDate());

  const handelChangeDate = (date: Date) => {
    const newDate = moment(date).format(dateFormat);
    setAppointmentDateTime(newDate);
  };

  const handleChangeTimeTest = (newDate: Date) => {
    const newTime = moment(newDate).locale('en').format(timeFormat);
    setAppointmentTime(newTime);
    setCurrentTimeDateType(newDate);
  };

  return (
    <TwoTextBlock>
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
      <S.TimeInputWrapper isTimeFocused={isTimeFocused}>
        <S.StyledTimePicker
          onChange={handleChangeTimeTest}
          timeIntervals={timeIntervals}
          showTimeSelect
          showTimeSelectOnly
          selected={currentTimeDateType}
          showPopperArrow={false}
          timeFormat='HH mm aa'
          value={appointmentTime}
          timeCaption='HOUR MINUTE'
          onFocus={() => setIsTimeFocused(true)}
          onBlur={() => setIsTimeFocused(false)}
        />
        <Icon iconName='ChevronDown' iconSize={0.9} />
      </S.TimeInputWrapper>
    </TwoTextBlock>
  );
};

export default DateContainer;
