
import { useState, useEffect } from 'react';

const API_KEY = import.meta.env.VITE_API_KEY || "at_dEvxaNgE3w4EzpPyq4wVkiMtuo0az";

export default function useFetchIpData(ip) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!ip) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ip}`);
        const result = await res.json();
        setData(result);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [ip]);

  return { data, loading, error };
}