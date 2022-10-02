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

      &-popper {
        transform: none !important;
        inset: 0 !important;
        padding-top: calc(48px + 4px);
        width: 100%;
        margin-left: -1px; // hide line
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
          top: 6.5px;
          left: unset;
          right: calc(2px + 32px);
        }
        &--next {
          top: 6.5px;
          right: 2px;
        }
      }
    }

    [class$='outside-month'] {
      color: ${colors.grey3};
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
export const TwoTextBlock = styled.div<{ ratio?: number }>`
  ${({ ratio }) => css`
    display: flex;
    gap: 12px;

    justify-content: flex-start;

    ${ratio &&
    css`
      > :nth-child(1) {
        flex-grow: ${ratio};
      }
      > :nth-child(2) {
        flex-grow: 1;
      }
    `}
  `}
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
`;

export const DateInputFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
`;

export const DateInputTextWrapper = styled.div`
  ${({ theme: { colors } }) => css`
    font-size: 9px;
    color: ${colors.orange2};
  `}
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
  `}
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
  width: calc(50% - 6px);
  gap: 10px;
`;

export const ButtonContainer = styled.div`
  ${flexCenter}

  border: 1px solid ${({ theme }) => theme.colors.grey3};
  border-radius: 4px;
`;

export const CountButton = styled.button`
  padding: 3px 10px;
  margin-top: 5px;
`;

//ContentDescription.tsx
export const DescriptionWrapper = styled.div`
  min-height: 236px;
`;

export const ContentDescriptionInput = styled.textarea`
  width: 100%;
  min-height: 236px;
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.grey3};
  background: ${({ theme }) => theme.colors.white2};
  border-radius: 4px;
  resize: none;
  :focus-visible {
    outline: none;
  }
`;
