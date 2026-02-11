'use client';

import { FB_PIXEL_ID, pageview } from "@/lib/fpixel";
import Script from "next/script";
import { useEffect } from "react";

export default function FacebookPixel() {
  useEffect(() => {
    // Track lần đầu
    pageview();

    const handleRouteChange = () => pageview();

    // Back/forward
    window.addEventListener('popstate', handleRouteChange);

    // Khi Next pushState / replaceState
    const pushState = history.pushState;
    history.pushState = function (...args) {
      pushState.apply(this, args);
      handleRouteChange();
    };

    const replaceState = history.replaceState;
    history.replaceState = function (...args) {
      replaceState.apply(this, args);
      handleRouteChange();
    };

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return (
    <Script
      id="facebook-pixel"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          !function(f,b,e,v,n,t,s){
            if(f.fbq)return;n=f.fbq=function(){
            n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;
            n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];
            t=b.createElement(e);t.async=!0;
            t.src=v;
            s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)
          }(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${FB_PIXEL_ID}');
        `,
      }}
    />
  );
}