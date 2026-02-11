// lib/fpixel.ts
export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID!;

declare global {
  interface Window {
    fbq: any;
  }
}

// PageView
export const pageview = () => {
  window.fbq('track', 'PageView');
};

// Track event custom
export const event = (name: string, options = {}) => {
  window.fbq('track', name, options);
};
