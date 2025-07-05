import { useState, useEffect } from 'react';
import Header from './components/Header';

import MapView from './components/MapView';
import InfoCard from './components/InfoCard';
import {fetchIPData} from './utils/api/fetchData';



import './App.css'




function App() {


  const [ipData, setIpData] = useState(null);
  const[ipQuery, setIpQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

useEffect(()=>{
  handleSearch()
}, []);


const handleSearch = async (ip ='') => {
  try{
    setLoading(true);
    setError('');
    const data = await fetchIPData(ip);
    setIpData(data);
  } catch(err) {
    setError(err.message)
  } finally {
    setLoading(false);
  }
}

  return (
    <div className="App">
      <Header ipQuery = {ipQuery} setIpQuery={setIpQuery} handleSearch={handleSearch} />
      <InfoCard
        ipData={ipData}
        loading={loading}
        error={error}
      />
      <MapView loaction={ipData?.location} loading={loading} />
<Header
  ipQuery={ipQuery}
  setIpQuery={setIpQuery}
  onSearch={() => handleSearch(ipQuery)}
/>

      
    
    </div>
  )
}

export default App
