import 'react-datepicker/dist/react-datepicker.css';

import ReactDatePicker from 'react-datepicker';
import styled, { css } from 'styled-components';

import { flexBetween, flexCenter, noScrollBar } from '@styles/mixin';

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
        /* margin-left: -1px; // hide line */
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
      width: 7rem;
      border: none;
      /* margin-left: -1px; */

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
        margin-left: -1px; // hide line
      }

      &__header--time {
        background-color: transparent;
        border-bottom: none;
      }

      &__time {
        &-container {
          width: 100%;
        }

        &-box {
          margin: 0 !important;
          width: 100%;
        }
        &-list {
          &-item {
            padding: 0 !important;
          }
        }
      }
    }
  `}
`;

//FileContainer.tsx
export const FileWrapper = styled.div`
  display: flex;
  gap: 12px;
  width: calc(100% + 1rem);
  padding-top: 15px;
  padding-right: 1rem;
  overflow-x: scroll;
  scroll-behavior: smooth;
  ${noScrollBar}
`;

export const FileLabel = styled.label<{ isImage: boolean }>`
  ${({ theme: { colors, fonts }, isImage }) => css`
    ${fonts.smallRegular};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    cursor: pointer;
    width: 4.5rem;
    min-width: 4.5rem;
    height: 4.5rem;
    background-color: ${colors.white2};
    border: 1px solid ${colors.grey2};
    border-radius: 4px;
    path {
      fill: ${isImage && colors.orange2};
    }
  `}
`;

export const FileCount = styled.div`
  color: ${({ theme }) => theme.colors.grey4};
`;

export const FileLength = styled.span<{ isFile?: number }>`
  ${({ isFile }) => css`
    ${isFile &&
    css`
      color: ${({ theme }) => theme.colors.orange3};
    `}
  `}
`;

export const FileForm = styled.input`
  display: none;
`;

export const ImagePreviewContainer = styled.div`
  position: relative;

  svg {
    position: absolute;
    top: -4px;
    right: -4px;
  }
`;

//default style
export const TwoTextBlock = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
  justify-content: flex-start;
`;

export const LongTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

//TextContainer.tsx
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

//AddressContainer.tsx
export const LocationSelectButton = styled.button`
  ${flexBetween}
  padding: 0 12px;
  width: 100%;
  height: 48px;
  border: 1px solid ${({ theme }) => theme.colors.grey3};
  border-radius: 4px;
  svg {
    padding-right: 0.2rem;
  }
`;

export const NoneLocation = styled.span`
  ${({ theme: { fonts, colors } }) => css`
    ${fonts.largeRegular};

    color: ${colors.grey4};
  `}
`;

//DateContainer.tsx
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

//RecruitmentContainer.tsx
export const CountContainer = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  gap: 10px;
`;

export const ButtonContainer = styled.div`
  ${({ theme: { colors, fonts } }) => css`
    ${flexCenter}
    ${fonts.large}

    height: 48px;
    width: 96px;
    padding: 2px 4px;
    display: flex;
    justify-content: space-around;
    border: 1px solid ${colors.grey3};
    border-radius: 4px;
  `}
`;

export const CountButton = styled.button<{ isClickable: boolean }>`
  ${({ theme: { colors }, isClickable }) => css`
    width: 24px;
    height: 24px;
    path {
      stroke: ${isClickable ? colors.black : colors.grey4};
    }
  `}
`;

export const RecruitmentText = styled.span`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.largeRegular};
    color: ${colors.grey4};
  `}
`;

//ContentDescription.tsx
export const DescriptionWrapper = styled.div`
  min-height: 236px;
`;

export const ContentDescriptionInput = styled.textarea`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.main};
    ${fonts.largeRegular};
    width: 100%;
    min-height: 236px;
    padding: 0.75rem;
    border: 1px solid ${colors.grey3};
    background: ${colors.white2};
    border-radius: 4px;
    resize: none;

    :focus-visible {
      outline: none;
    }

    :focus {
      ::placeholder {
        color: transparent;
      }
    }

    ::placeholder {
      color: ${colors.grey4};
    }
  `}
`;
