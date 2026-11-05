
type LandingPageEnvironment = {
  VITE_APP_URL?: string;
  VITE_SITE_URL?: string;
  VITE_OG_IMAGE_URL?: string;
  VITE_LANDING_API_URL?: string;
  VITE_PRIVACY_POLICY_URL?: string;
  VITE_TERMS_URL?: string;
  VITE_REFUND_CANCELLATION_URL?: string;
};

const env = (import.meta as ImportMeta & { readonly env: LandingPageEnvironment }).env;
const Url = "https://webscape.co.in" 
const siteUrl = env.VITE_SITE_URL || Url;


export const APP_SIGNUP_URL =`${Url}/quotation-generation-saas/register`;
export const APP_LOGIN_URL = `${Url}/quotation-generation-saas/login`;




export const SITE_URL = siteUrl;
export const OG_IMAGE_URL = env.VITE_OG_IMAGE_URL || `${SITE_URL}/Logo.png`;

export const SHOW_PREVIEW_PRICING_NOTE = true;
export const Subscrition_Lst = `${Url}/quotation-backend-saas/api/landing/subscriptions`;

export const SUPPORT_CONTACT_URL =
  "https://jayamwebsolutions.com/contact.php#drop-your-requirements";
