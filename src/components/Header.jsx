

import './Header.css';
import bgImage from '../assets/pattern-bg.png';

export default function Header({ipQuery, setIpQuery, onSearch}) {

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            onSearch();
        }
    };
return(
    <header className='header' style={{ backgroundImage: `url(${bgImage})` }}>

        <h1 className='header-title'>IP Address Tracker</h1>

        <div className='input-group'>
            <input 
                type='text'
                placeholder='Search for any IP address or domain'
                value={ipQuery}
                onChange={(e) => setIpQuery(e.target.value)}
                onKeyPress={handleKeyPress}/>
            <button onClick={onSearch}>Search</button>  

                

            
        </div>
    </header>
    );
}