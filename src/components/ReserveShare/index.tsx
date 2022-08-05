import PreviewShareListCenterImage from '@components/PreviewShareListCenterImage';
import Title from '@components/common/Title';
import { sharingExample, sharingExampleType } from '@data/sharing';

const ReserveShare = () => {
  const mokData: sharingExampleType[] | undefined = sharingExample;
  const falseData = undefined;
  return (
    <div>
      <Title contentTitle='쉐어중' />
      <PreviewShareListCenterImage title='쉐어' data={mokData} />
      <Title contentTitle='예약중' />
      <PreviewShareListCenterImage title='예약' data={falseData} />
    </div>
  );
};

export default ReserveShare;
