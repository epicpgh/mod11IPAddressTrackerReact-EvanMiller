



const API_KEY = "YOUR_API_KEY"; import.meta.env.VITE_API_KEY || "at_dEvxaNgE3w4EzpPyq4wVkiMtuo0az";



export async function fetchIPData(ipAddress) {
    const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ipAddress}`);
    
    if (!response.ok) {
        throw new Error("Failed to fetch IP data");
    }
    
    return response.json();
}