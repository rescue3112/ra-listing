import Listing from './components/ListingFunc';
import data from './data/etsy.json'
import './css/main.css';

function App() {
  const list = data.map(item => { 
    const { listing_id, url, MainImage, title, currency_code, price, quantity } = item
    return {
      listing_id,
      url, 
      MainImage, 
      title, 
      currency_code, 
      price, 
      quantity
    }
  })

  return (
    <div className="main-content">
      <Listing items={list}/>
    </div>
  );
}

export default App;
