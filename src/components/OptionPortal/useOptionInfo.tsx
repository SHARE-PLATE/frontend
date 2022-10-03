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

  const priceClickHandler = () => setPricePossibleValue((prev) => !prev);
  const locationClickHandler = () => setLocationPossibleValue((prev) => !prev);

  const optionInfo: OptionInfoType[] = [
    {
      id: 1,
      title: '가격협의',
      child: [
        { id: 1, text: '불가', onClick: priceClickHandler, active: !pricePossibleValue },
        { id: 2, text: '가능', onClick: priceClickHandler, active: pricePossibleValue },
      ],
    },
    {
      id: 2,
      title: '장소협의',
      child: [
        { id: 3, text: '불가', onClick: locationClickHandler, active: !locationPossibleValue },
        { id: 4, text: '가능', onClick: locationClickHandler, active: locationPossibleValue },
      ],
    },
  ];

  return optionInfo;
};

export default useOptionInfo;
