import Layout from "../../Components/layout/Layout";
import DetailDescription from "../../module/details/DetailDescription";
import DetailFeature from "../../module/details/DetailFeature";
import DetailList from "../../module/details/DetailList";
const Detail = () => {
  return (
    <div>
      <Layout>
        <DetailFeature />
        <DetailDescription />
        <DetailList />
      </Layout>
    </div>
  );
};

export default Detail;
