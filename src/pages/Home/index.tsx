import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import styles from './index.less';
//import { DatePicker, Space } from 'antd';
import { DatePicker } from 'antd';
const HomePage: React.FC = () => {
  const { name } = useModel('global');
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <Guide name={trim(name)} />
        <DatePicker />
      </div>
    </PageContainer>
  );
};

export default HomePage;
