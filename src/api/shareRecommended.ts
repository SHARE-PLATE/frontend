import { unexpectedErrorOccursMention } from '@constants/mentions';
import { ShareRecommendationType } from '@type/shareList';
import { checkError, createClient } from '@utils/api';

export const getShareListRecommendedData = async (lat: string | number, lng: string | number) => {
  const { client, result } = createClient<ShareRecommendationType[]>({
    address: 'SHARE_RECOMMENDED',
  });

  try {
    const { data } = await client.get<ShareRecommendationType[]>('', {
      params: {
        latitude: lat,
        longitude: lng,
      },
    });
    result.isSuccess = true;
    result.data = data;
  } catch (error) {
    const { message, errorCode } = checkError(error);
    result.errorMessage = errorCode ? unexpectedErrorOccursMention : message;
  }

  return result;
};
