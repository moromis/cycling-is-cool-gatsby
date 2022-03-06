import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import "./styles.css";

const ShopContent = () => {
  
  useEffect(() => {
    window.spread_shop_config = {
      shopName: 'cycling-is-cool',
      locale: 'us_US',
      prefix: 'https://shop.spreadshirt.com',
      baseId: 'shop'
  };
  })

  return (
    <div className="shopBody">
    <Helmet>
        <script type="text/javascript"
                src="https://shop.spreadshirt.com/shopfiles/shopclient/shopclient.nocache.js">
        </script>
    </Helmet>
      <div id="shop">
        <p>Loading The Shop...</p>
      </div>
   </div>
  );
}


export default ShopContent;
