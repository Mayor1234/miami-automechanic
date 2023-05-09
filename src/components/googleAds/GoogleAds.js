import React, { useEffect } from 'react';

function GoogleAds(props) {
  const { dataAdSlot } = props;

  useEffect(() => {
    window.adsbygoogle = window.adsbygoogle || [];
    window.adsbygoogle.push({});
  }, []);

  return (
    <>
      <ins
        class="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-format="auto"
        data-ad-client="ca-pub-1467151583136063"
        data-ad-slot={dataAdSlot}
        data-full-width-responsive="true"
      ></ins>
    </>
  );
}

export default GoogleAds;
