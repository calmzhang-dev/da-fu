import { useState } from "react";
import { Layout, Pagination } from "@douyinfe/semi-ui";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.less";
import logoImg from "../../assets/zlogo.png";
import copyImg from "../../assets/copy.png";
export default function Home() {
  const { Header, Footer, Content } = Layout;
  const pageSize = 6
  const [page, setPage] = useState(1)
  const navigator = useNavigate();
  const dataList = [
    "关于第十八届人民代表大会第五次会议建议的答复",
    "关于第十八届人民代表大会第四次会议建议的答复",
    "关于第十八届人民代表大会第三次会议建议的答复",
    "关于第十八届人民代表大会第二次会议建议的答复",
    "关于第十八届人民代表大会第一次会议建议的答复",
    "关于第十七届人民代表大会第十次会议建议的答复",
    "关于第十七届人民代表大会第九次会议建议的答复",
    "关于第十七届人民代表大会第八次会议建议的答复",
    "关于第十七届人民代表大会第七次会议建议的答复",
    "关于第十七届人民代表大会第六次会议建议的答复",
    "关于第十七届人民代表大会第五次会议建议的答复",
    "关于第十七届人民代表大会第四次会议建议的答复",
    "关于第十七届人民代表大会第一次会议建议的答复",
    "关于第十六届人民代表大会第六次会议建议的答复",
    "关于第十六届人民代表大会第四次会议建议的答复",
    "关于第十六届人民代表大会第三次会议建议的答复",
    "关于第十六届人民代表大会第一次会议建议的答复",
    "关于第十五届人民代表大会第五次会议建议的答复",
    "关于第十五届人民代表大会第四次会议建议的答复",
    "关于第十五届人民代表大会第三次会议建议的答复",
    "关于第十五届人民代表大会第二次会议建议的答复",
    "关于第十五届人民代表大会第一次会议建议的答复",
    "关于第十四届人民代表大会第五次会议建议的答复",
    "关于第十四届人民代表大会第四次会议建议的答复",
    "关于第十四届人民代表大会第三次会议建议的答复",
    "关于镇人大评议政府工作会议建议的答复",
    "关于区人大代表第一届三次会议建议的答复",
    "关于区人大代表第一届五次会议建议的答复",
    "关于市第十四届人民代表大会第二次会议建议的答复",
    "关于市第十五届人大代表大会第二次会议建议的答复",
  ]
  return (
    <div>
      <div className={styles.home}>
        <Layout>
          <Header className={styles.head}>
            <img src={logoImg} alt="" />
          </Header>
          <Content className={styles.introduce}>
            {dataList.map((item: any, index: any) => {
              if (index < pageSize * page && index >= pageSize * (page - 1)) {
                return <div className={styles.listItem} key={index} onClick={() => {
                  navigator(`/basic?${index}`)
                }}>{item}</div>
              }
            })}
          </Content>
          <Footer className={styles.footer}>
            <Pagination total={dataList.length} style={{ marginBottom: 12 }} pageSize={pageSize} onPageChange={(num: any) => { setPage(num) }}></Pagination>
            <img src={copyImg} alt="" />
          </Footer>
        </Layout>
      </div>
    </div>
  );
}
