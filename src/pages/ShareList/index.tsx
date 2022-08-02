import CategoryButton from '@components/CategoryButton';
import PreviewShareList from '@components/PreviewShareList';
import ShareListHeader from '@components/ShareListHeader';
import Tabs from '@components/Tabs';

const ShareList = () => {
  return (
    <>
      <ShareListHeader />
      <Tabs firstTitle='배달쉐어' secondTitle='재료쉐어' />
      <CategoryButton />
      <PreviewShareList />
    </>
  );
};

export default ShareList;
