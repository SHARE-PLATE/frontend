import 'react-datepicker/dist/react-datepicker.css';

import ReactDatePicker from 'react-datepicker';
import styled, { css } from 'styled-components';

import { flexCenter, noScrollBar } from '@styles/mixin';

const DatePickerStyle = css`
  ${({ theme: { fonts, colors } }) => css`
    position: relative;

    .react-datepicker {
      box-shadow: 2px 4px 8px rgba(255, 69, 58, 0.2);
      width: 100%;
      border: none;

      &__input-container {
        input {
          margin: 0;
          width: 100%;
          ${fonts.largeRegular}
        }
      }

      &-popper {
        transform: none !important;
        inset: 0 !important;
        padding-top: calc(48px + 4px);
        width: 100%;
        max-width: 300px;
      }

      &__header {
        border: none;
        background-color: transparent;
        padding: 0;
      }

      &__current {
        &-month {
          text-align: left;
          padding-left: calc(100% * 7 / 80 - 5px);
          padding-bottom: 0.5rem;
          padding-top: 0.75rem;
        }
      }

      &__month {
        padding: 0;
        padding-bottom: 10px;
        margin: 0;

        &-container {
          width: 100%;
        }
      }

      &__week {
        display: flex;
        justify-content: space-evenly;
      }

      &__day {
        ${fonts.xSmall};
        color: ${colors.grey4};
        width: calc(100% / 10);
        aspect-ratio: 1;
        line-height: initial;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin: 0;

        :hover {
          border-radius: 10rem;
        }

        &-name {
          ${fonts.xSmall};

          width: calc(100% / 10);
          aspect-ratio: 1;
          line-height: initial;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin: 0;
        }

        &-names {
          display: flex;
          justify-content: space-evenly;
          margin-bottom: 0;
        }

        &--selected,
        &--keyboard-selected {
          border-radius: 10rem;
          background-color: ${colors.orange2};
          color: ${colors.white0};
        }

        &--disabled {
          text-decoration: line-through;
          color: ${colors.grey3};
        }
      }

      &__navigation {
        &--previous {
          top: 5px;
          left: unset;
          right: calc(32px);
        }
        &--next {
          top: 5px;
          right: 0px;
        }
        &-icon {
          ::before {
            border: none;
          }
        }
      }
    }

    [class$='outside-month'] {
      color: ${colors.grey3};
    }
  `}
`;

const TimePickerStyle = css`
  ${({ theme: { fonts, colors } }) => css`
    position: relative;

    .react-datepicker {
      box-shadow: 2px 4px 8px rgba(255, 69, 58, 0.2);
      width: 100%;
      border: none;

      &__input-container {
        input {
          margin: 0;
          ${fonts.large}
        }
      }

      &-popper {
        transform: none !important;
        inset: 0 !important;
        padding-top: calc(48px + 4px);
        width: 100%;
        max-width: 130px;
      }

      &__header {
        padding: 0;
        &--time {
          background-color: transparent;
          border-bottom: none;
        }
      }

      &-time__header {
        ${flexCenter};

        justify-content: left;
        width: 100px;
        word-spacing: 10px;
        margin: 0 auto;
        white-space: pre;
        font-size: 8px;
        font-weight: 400;
        height: 25px;
        color: ${colors.grey4};
      }

      &__time {
        &-container {
          width: 100%;
        }

        &-box {
          margin: 0 !important;
          width: 100% !important;
        }

        &-list {
          height: 100px !important;
          ${noScrollBar}

          &-item {
            color: ${colors.grey4};
            font-size: 12px;
            padding: 0 !important;
            height: 25px !important;
            word-spacing: 20px;
            ${flexCenter};

            &--selected {
              background-color: transparent !important;
              color: ${colors.orange2} !important;
              font-weight: 500 !important;
            }
          }
        }
      }
    }
  `}
`;

export const DateInputWrapper = styled.label<{ isDateFocused: boolean }>`
  ${({ theme: { colors }, isDateFocused }) => css`
    color: ${colors.black};
    display: flex;
    height: 48px;
    justify-content: space-between;
    align-items: center;
    padding: 0 12px;
    border: 1px solid ${colors.grey3};
    border-radius: 4px;
    width: 60%;
    min-width: 60%;

    :focus-within {
      border: solid 2px ${colors.orange2};
    }

    > :last-child {
      transition: all 0.3s;

      ${isDateFocused &&
      css`
        // when last child is chevron-down
        transform: rotate(0.5turn);
      `}
    }

    ${DatePickerStyle}
  `}
`;

export const DateInputLeftWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  max-width: 100%;
`;

export const DateInputFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  width: 100%;
`;

export const StyledDatePicker = styled(ReactDatePicker)`
  border: none;
  background-color: transparent;
  padding: 0;

  :focus {
    outline: none;
  }
`;

export const DateInputForm = styled.input`
  border: none;
  background-color: transparent;

  :focus {
    outline: none;
  }

  ::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
  }
`;

export const DateInputShowed = styled.div`
  ${({ theme: { fonts } }) => css`
    ${fonts.small};
  `}
`;

export const TimeInputWrapper = styled.label<{ isTimeFocused: boolean }>`
  ${({ theme: { colors }, isTimeFocused }) => css`
    color: ${colors.black};
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    align-items: center;
    padding: 0 12px;
    border: 1px solid ${colors.grey3};
    border-radius: 4px;
    height: 48px;

    :focus-within {
      border: solid 2px ${colors.orange2};
    }

    > :last-child {
      transition: all 0.3s;

      ${isTimeFocused &&
      css`
        // when last child is chevron-down
        transform: rotate(0.5turn);
      `}
    }

    ${TimePickerStyle}
  `}
`;

export const StyledTimePicker = styled(ReactDatePicker)`
  width: 100%;
  border: none;
  background-color: transparent;
  padding: 0;

  :focus {
    outline: none;
  }
`;

export const TimeInputForm = styled.input`
  ${({ theme: { fonts } }) => css`
    ${fonts.small};

    border: none;
    background-color: transparent;

    :focus {
      outline: none;
    }

    ::-webkit-calendar-picker-indicator {
      display: none;
      -webkit-appearance: none;
    }
  `}
`;
