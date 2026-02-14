
import { Book, Testimonial, RoadmapStep } from './types';

export const COLORS = {
  primary: '#000000',
  pink: '#FF007F',
  gold: '#D4AF37',
  white: '#FFFFFF',
  green: '#1A5F3F',
  cream: '#F5F5DC'
};

export const EXTERNAL_LINKS = {
  profile: "https://www.instagram.com/sjcpa.taxfreemillionaire?igsh=ZmFpMTA1aWN3aDBq",
  calendly: "https://calendly.com/sarahcpa?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAb21jcAP9rgVleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAafxAfnp2Y5qkS4kxR1EC2Ezn67c5BrnLc0zV5mp_TjzTaeCm7jNKl1oXQdAyA_aem_WNvW9GIDdCRgWk2ozC7-2g"
};

export interface BookWithLink extends Book {
  amazonLink: string;
}

export const BOOKS: BookWithLink[] = [
  {
    id: 'tax-free-millionaire',
    title: 'Tax Free',
    subtitle: 'Millionaire',
    description: "Flip the script on money, mindsets, and the broken American dream. Sarah Jones, CPA and her husband Phil Jones team up to show you how to turn overpaid taxes into generational wealth. This is the roadmap for entrepreneurs ready to stop playing small and start building an empire.",
    image: 'tax-free-millionaire.jpg', 
    theme: 'gold',
    highlights: [
      'The "Build. Protect. Grow." Wealth Framework',
      'Advanced Strategies for 7 & 8-Figure Owners',
      'Legally keep what you earn and grow it tax-free',
      'Turning tax savings into lasting legacies'
    ],
    cta: 'GET TAX FREE MILLIONAIRE →',
    footerText: 'SARAH JONES, CPA and PHIL JONES',
    amazonLink: "https://www.amazon.com/Tax-Free-Millionaire-Dollars-Become/dp/1632968126?crid=16K73TVJYZDTM&linkCode=sl1&tag=lucidbooks148-20&linkId=ca344c1376ae66bad14c5c4ea0454742&language=en_US&ref_=as_li_ss_tl"
  },
  {
    id: 'fire-my-cpa',
    title: 'Fire',
    subtitle: 'MY CPA',
    description: "An Entrepreneur's Guide to Financial Success and Massive Tax Savings. Most CPAs are history teachers—reporting what happened last year. You need a strategist who helps you write the future. Learn how to find, manage, and leverage a high-level strategic CPA partnership.",
    image: 'fire-my-cpa.jpg',
    theme: 'pink',
    highlights: [
      'Identification of "Red Flag" CPA relationships',
      'How to bridge the gap from accounting to strategy',
      'Step-by-step guide to saving $100k+ in taxes',
      'Strategic partnership vs. basic compliance'
    ],
    cta: 'GET FIRE MY CPA →',
    footerText: 'SARAH JONES, CPA',
    amazonLink: "https://www.amazon.in/Fire-My-CPA-Entrepreneurs-Financial/dp/1632966948"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Jessica Martinez',
    role: 'E-commerce Founder',
    quote: "Working with Sarah saved our business $287,000 in year one. She's not just a CPA—she's a strategic partner who actually cares about our growth.",
    saving: '$287,000 Saved',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: '2',
    name: 'Marcus Chen',
    role: 'Tech Agency CEO',
    quote: "I thought my previous CPA was doing a good job until Sarah found 12 missed deductions. The level of strategy here is completely different.",
    saving: '$94k Strategy Found',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: '3',
    name: 'Lisa Ray',
    role: 'Real Estate Developer',
    quote: "The 'Build. Protect. Grow.' framework is the only reason I was able to scale past $10M without losing 40% to the IRS.",
    saving: 'Tax Burden Reduced by 60%',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150'
  }
];

export const ROADMAP_STEPS: RoadmapStep[] = [
  {
    id: 1,
    title: 'BUILD',
    subtitle: 'Your Foundation',
    details: [
      'Strategic business structure optimization',
      'Cash flow management & CFO advisory',
      'Real-time financial insights & dashboards',
      'Quarterly strategic planning sessions'
    ],
    theme: 'pink'
  },
  {
    id: 2,
    title: 'PROTECT',
    subtitle: 'Your Assets',
    details: [
      'Advanced tax planning (Augusta Rule, Cost Seg, etc.)',
      'Asset protection strategies',
      'Risk mitigation frameworks',
      'Legal structure optimization'
    ],
    theme: 'pink'
  },
  {
    id: 3,
    title: 'GROW',
    subtitle: 'Your Legacy',
    details: [
      'Generational wealth planning',
      'Investment strategy coordination',
      'Exit planning & business succession',
      'Philanthropic wealth structures'
    ],
    theme: 'gold'
  }
];
