export default function Listing(props) {
    const {items} = props

    return (
        <div className="item-list">
            {items.map(item => {
                const { listing_id, url, MainImage, title, currency_code, price, quantity } = item

                if (!url) {
                    return null
                }

                const itemPrice = currency_code === 'USD' ? '$' + price : currency_code === 'EUR' ? '€' + price : price + ' ' + currency_code
                const classQuantity = quantity < 11 ? 'level-low' : quantity < 21 ? 'level-medium' : 'level-high' 

                return (
                    <div className="item" key={listing_id}>
                        <div className="item-image">
                            <a href={url}>
                                <img src={MainImage.url_570xN} alt="item screen"></img>
                            </a>
                        </div>
                        <div className="item-details">
                            <p className="item-title">{title.length < 50 ? title : title.slice(0, 50) + '...'}</p>
                            <p className="item-price">{itemPrice}</p>
                            <p className={'item-quantity ' + classQuantity}>{quantity} left</p>
                        </div>
                    </div>
                )
            })}
            
        </div>
    )
}