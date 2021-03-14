import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from "../components/navbar/navbar";
import { useEffect, useState } from "react";
import { campaignType } from "../utils/constants"
import TabRow from '../components/tabs/tabRow';
import Table from '../components/gridContainer';

export default function Home(props) {
  const [serverData, updateServerData] = useState([]);
  const [campaign, setCampaign] = useState(campaignType[0]);
  useEffect(() => {
    fetch(`/api/hello`)
      .then(res => res.json())
      .then(res => updateServerData(res.data))
      .catch(err => console.log(err));
  }, [])

  const filteredCampaings = serverData.filter(data => {
    const currentDate = Date.now()
    let shouldFilter = false;
    if(campaign.id === "UPCOMING"){
      shouldFilter = data.createdOn > currentDate
    }else if(campaign.id === "LIVE"){
      shouldFilter = new Date(currentDate).toDateString() == new Date(data.createdOn).toDateString();
    }else {
      shouldFilter = data.createdOn < currentDate && new Date(currentDate).toDateString() !== new Date(data.createdOn).toDateString()
    }
    return shouldFilter;
  })
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <Navbar />
      <main className={styles.mainWrapper}>
        <div className={styles.title}>Manage Campaigns</div>
          <TabRow data={campaignType} selected={campaign} select={setCampaign} />
          <Table data={serverData} filteredData={filteredCampaings} updateServerData={updateServerData} />
      </main>
    </div>
  )
}