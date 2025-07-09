import { useState } from 'react';
import Header from './components/Header';
import MapView from './components/MapView';
import InfoCard from './components/InfoCard';
import useFetchIpData from './api/useFetchIpData'; // 🔄 not destructured
import './styles/App.css';

function App() {
  const [ipQuery, setIpQuery] = useState('192.212.174.101'); // default IP
  const { data: ipData, loading, error } = useFetchIpData(ipQuery);

  return (
    <div className="App">
      <Header
        ipQuery={ipQuery}
        setIpQuery={setIpQuery}
        onSearch={() => setIpQuery(ipQuery)}
      />

      <InfoCard
        ipData={ipData}
        loading={loading}
        error={error}
      />

      <MapView location={ipData?.location} loading={loading} />
    </div>
  );
}

export default App;

