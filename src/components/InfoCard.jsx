


import './InfoCard.css';

export default function InfoCard({ data, loading, error }) {

    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Error: {error.message}</p>;
    }
    if (!data) {
        return <p>No data available</p>;
    }

    const { ip, location, isp } = data;

    return (
        <div className="info-card">
          <div className="info-item">
            <h4>IP Address:</h4>
            <p>{ip}</p>
          </div>
          <div className="info-item">
            <h4>Location:</h4>
            <p>{location?.city}, {location?.region}, {location?.country}</p>
          </div>
          <div className="info-item">
            <h4>Timezone:</h4>
            <p>{location?.timezone}</p>
          </div>
          <div className="info-item">
            <h4>ISP:</h4>
            <p>{isp}</p>
          </div>
        </div>
    );
}