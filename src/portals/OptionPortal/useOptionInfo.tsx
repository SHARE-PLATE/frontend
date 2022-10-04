import { useRecoilState } from 'recoil';

import { pricePossible, locationPossible } from '@store/shareRegistration';

export interface ChildType {
  id: number;
  text: string;
  onClick: () => void;
  active: boolean;
}

export interface OptionInfoType {
  id: number;
  title: string;
  child: ChildType[];
}

const useOptionInfo = () => {
  const [pricePossibleValue, setPricePossibleValue] = useRecoilState(pricePossible);
  const [locationPossibleValue, setLocationPossibleValue] = useRecoilState(locationPossible);
  const isPossibleValue = pricePossibleValue || locationPossibleValue;
  const optionInfo: OptionInfoType[] = [
    {
      id: 1,
      title: '가격협의',
      child: [
        {
          id: 1,
          text: '불가',
          onClick: () => setPricePossibleValue(false),
          active: !pricePossibleValue,
        },
        {
          id: 2,
          text: '가능',
          onClick: () => setPricePossibleValue(true),
          active: pricePossibleValue,
        },
      ],
    },
    {
      id: 2,
      title: '장소협의',
      child: [
        {
          id: 3,
          text: '불가',
          onClick: () => setLocationPossibleValue(false),
          active: !locationPossibleValue,
        },
        {
          id: 4,
          text: '가능',
          onClick: () => setLocationPossibleValue(true),
          active: locationPossibleValue,
        },
      ],
    },
  ];

  return { optionInfo, isPossibleValue };
};

export default useOptionInfo;
