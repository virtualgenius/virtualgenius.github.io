export interface WorkshopInstance {
  dates: string;
  titoSlug: string;
  utmCampaign: string;
  earlyBirdDeadline: string;
  earlyBirdPrice: string;
  regularPrice: string;
}

export interface WorkshopType {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  format: string;
  duration: string;
  schedule: string;
  targetAudience: string;
  instances: WorkshopInstance[];
}

function titoUrl(slug: string, utmCampaign: string, utmMedium: string): string {
  return `https://ti.to/EDDD/${slug}?utm_source=website&utm_medium=${utmMedium}&utm_campaign=${utmCampaign}`;
}

export function registrationUrl(instance: WorkshopInstance, utmMedium: string): string {
  return titoUrl(instance.titoSlug, instance.utmCampaign, utmMedium);
}

export const eventstorming: WorkshopType = {
  slug: "eventstorming",
  title: "EventStorming Facilitation Virtual Workshop",
  shortTitle: "EventStorming Facilitation",
  tagline: "Master the art of collaborative domain discovery",
  format: "Virtual",
  duration: "12 hours total (4 sessions x 3 hours each)",
  schedule: "9:00am - Noon MDT (UTC-6:00)",
  targetAudience: "Software and product professionals",
  instances: [
    {
      dates: "April 14-17, 2026",
      titoSlug: "eventstorming-facilitation-virtual-workshop-apr-2026",
      utmCampaign: "apr_2026",
      earlyBirdDeadline: "March 13, 2026",
      earlyBirdPrice: "$1,450 USD",
      regularPrice: "$1,650 USD",
    },
  ],
};

export const essentialDdd: WorkshopType = {
  slug: "essential-ddd",
  title: "Essential DDD Virtual Workshop",
  shortTitle: "Essential DDD",
  tagline: "Build better software through domain modeling",
  format: "Virtual",
  duration: "12 hours total (4 sessions x 3 hours each)",
  schedule: "9:00am - Noon MDT (UTC-6:00)",
  targetAudience: "Developers, architects, product managers, and business analysts",
  instances: [
    {
      dates: "May 5-8, 2026",
      titoSlug: "essential-ddd-virtual-workshop-may-2026",
      utmCampaign: "may_2026_eddd",
      earlyBirdDeadline: "April 3, 2026",
      earlyBirdPrice: "$1,450 USD",
      regularPrice: "$1,650 USD",
    },
  ],
};

export const strategicDdd: WorkshopType = {
  slug: "strategic-ddd",
  title: "Strategic DDD Virtual Workshop",
  shortTitle: "Strategic DDD",
  tagline: "Strategic design for complex systems and organizations",
  format: "Virtual",
  duration: "12 hours total (4 sessions x 3 hours each)",
  schedule: "9:00am - Noon MDT (UTC-6:00)",
  targetAudience: "Senior developers, architects, technical leads, and engineering managers",
  instances: [
    {
      dates: "May 12-15, 2026",
      titoSlug: "strategic-ddd-virtual-workshop-may-2026",
      utmCampaign: "may_2026_sddd",
      earlyBirdDeadline: "April 10, 2026",
      earlyBirdPrice: "$1,450 USD",
      regularPrice: "$1,650 USD",
    },
    {
      dates: "Oct 5-8, 2026",
      titoSlug: "strategic-ddd-virtual-workshop-oct-2026",
      utmCampaign: "oct_2026_sddd",
      earlyBirdDeadline: "September 4, 2026",
      earlyBirdPrice: "$1,450 USD",
      regularPrice: "$1,650 USD",
    },
  ],
};

export const allWorkshops: WorkshopType[] = [eventstorming, essentialDdd, strategicDdd];
