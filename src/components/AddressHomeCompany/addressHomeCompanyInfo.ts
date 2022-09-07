import { AddressHomeCompanyPropsType } from '@components/AddressHomeCompany';
import { ADD_COMPANY, ADD_HOME, COMPANY, COMPANY_KOR, HOME, HOME_KOR } from '@constants/words';

const addressHomeCompanyInfo: AddressHomeCompanyPropsType[] = [
  {
    type: HOME,
    iconName: 'HomeAdd',
    textKor: HOME_KOR,
    textAdd: ADD_HOME,
  },
  {
    type: COMPANY,
    iconName: 'BriefCase',
    textKor: COMPANY_KOR,
    textAdd: ADD_COMPANY,
  },
];

export default addressHomeCompanyInfo;
