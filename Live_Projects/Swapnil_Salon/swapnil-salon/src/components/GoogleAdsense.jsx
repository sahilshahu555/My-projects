import Script from "next/script";


export const metadata = {
  name:"google-adsense-account", 
  content:"ca-pub-6313035859774742"
};
const GoogleAdsense = () => {
  
  return (
    <Script
      async
      src={"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6313035859774742"}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
    
  );
};

export default GoogleAdsense;