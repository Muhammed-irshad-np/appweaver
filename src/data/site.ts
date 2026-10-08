// Single source of truth for company facts shown across the site.

export const company = {
  name: 'AppWeavers',
  lab: 'AppWeavers Labs',
  tagline: 'We build AI products. Better ones.',
  email: 'contact@appweavers.in',
  phone: '+91 7034714132',
  address: 'Shantipuram 90, NGO Quarters, Kakkanad, Ernakulam, Kerala 682021, India',
  city: 'Kochi, India',
  udyam: 'UDYAM-KL-02-0104042',
  udyamVerifyUrl: 'https://udyamregistration.gov.in/Udyam_Verify.aspx',
};

export type ProductStatus = 'Early access' | 'In the lab';

export interface Product {
  name: string;
  kind: string;
  description: string;
  ai: string[];
  status: ProductStatus;
  url?: string;
}

export const flagship = {
  name: 'ReadyDM',
  url: 'https://www.readydm.com',
  logo: '/readydm-logo.svg',
  kind: 'AI comment intelligence for creators',
  headline: 'AI collaboration detection and spam comment filtering for creators.',
  description:
    'ReadyDM reads every comment on a creator’s Instagram Reels, spots brand-collaboration requests, filters spam, and answers real buyers with an automated DM storefront: product card, UPI or card checkout, and instant delivery.',
  capabilities: [
    {
      title: 'Collaboration detection',
      body: 'Recognises brand-deal and partnership enquiries buried in comments and DMs, so creators never miss a paid collab.',
    },
    {
      title: 'Spam comment filtering',
      body: 'Separates bots, scams and link-spam from real fans before anything reaches the creator or triggers a reply.',
    },
    {
      title: 'Comment-to-customer agent',
      body: 'Keyword triggers send a product card by DM in 2–4 seconds, take payment, deliver the file, and follow up on abandoned carts.',
    },
    {
      title: 'Revenue attribution',
      body: 'Every sale is traced back to the Reel, keyword and message that produced it, with an exportable customer list.',
    },
  ],
  facts: ['Built on Meta’s official Graph API', 'Razorpay checkout: UPI, cards, netbanking', 'Free lifetime access for the first 50 creators'],
};

export const upnow = {
  name: 'UpNow',
  fullName: 'UpNow: Smart Alarm & Habits',
  url: 'https://play.google.com/store/apps/details?id=com.appweavers.upnow',
  icon: '/upnow-icon.png',
  kind: 'AI task-based smart alarm',
  headline: 'An alarm you can’t snooze your way out of.',
  description:
    'UpNow is a task-based smart alarm that uses AI to make sure you’re actually awake: dismissing it means completing a wake-up challenge. It pairs alarms with a habit tracker and routine builder so the morning turns into a plan for the day.',
  features: [
    'AI-powered, task-based wake-up challenges',
    'Habit tracker with progress charts',
    'Morning and evening routine builder',
    'Privacy-first: data stays on your device, no account, no ads',
  ],
};

export const labProducts: Product[] = [
  {
    name: 'Kegel',
    kind: 'AI pelvic-floor coach',
    description: 'Guided pelvic-floor training that adjusts session difficulty from your progress and consistency.',
    ai: ['Personalised training plans', 'Progress prediction'],
    status: 'In the lab',
  },
  {
    name: 'Quit',
    kind: 'AI habit-recovery companion',
    description: 'A private companion for breaking unwanted habits: streaks, craving check-ins and an always-available AI coach.',
    ai: ['Conversational AI coach', 'Relapse-risk signals'],
    status: 'In the lab',
  },
];

export const tracks = [
  {
    id: 'agentic',
    label: 'Agentic AI',
    title: 'Agents that finish the job',
    body: 'LLM agents that read, decide and act across real APIs: replying, selling, scheduling and escalating to a human only when it matters.',
    points: ['Tool-using LLM agents', 'Human-in-the-loop guardrails', 'Evals before every release'],
  },
  {
    id: 'physical',
    label: 'Physical AI',
    title: 'AI that senses the real world',
    body: 'On-device models that turn phone sensors, camera and motion data into understanding of sleep, movement and the body.',
    points: ['On-device inference', 'Sensor and motion models', 'Private by default'],
  },
  {
    id: 'apps',
    label: 'AI applications',
    title: 'AI-native mobile and web apps',
    body: 'Consumer and creator apps where AI is the product: designed, built and shipped by us on Android, iOS and the web.',
    points: ['Android, iOS and web', 'Multimodal interfaces', 'Shipped, measured, iterated'],
  },
];

export interface Recognition {
  type: 'Registration' | 'Grant' | 'Publication' | 'Press' | 'Programme';
  title: string;
  issuer: string;
  detail?: string;
  url: string;
}

// Add publications, grants, press and programme acceptances here.
// Every entry renders as a backlink in the Recognition section.
export const recognition: Recognition[] = [
  {
    type: 'Registration',
    title: 'Udyam registered MSME',
    issuer: 'Ministry of MSME, Government of India',
    detail: company.udyam,
    url: company.udyamVerifyUrl,
  },
];
