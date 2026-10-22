export type SitePageSection = {
  heading: string;
  paragraphs?: string[];
  items?: string[];
};

export type SitePage = {
  title: string;
  highlight?: string;
  subtitle: string;
  intro: string;
  sections: SitePageSection[];
};

/**
 * The content of the pages the footer links to.
 *
 * Every entry here has a matching route under app/, so the footer never
 * sends a visitor to a 404.
 */
export const sitePages: Record<string, SitePage> = {
  deals: {
    title: 'Deals',
    highlight: 'Live',
    subtitle: 'Time limited offers across the catalogue.',
    intro:
      'Every deal below is a real offer on a real product. Stock is updated in real time, so a price that has just changed is shown with the new number rather than the old one.',
    sections: [
      {
        heading: 'How the deals work',
        items: [
          'A deal shows the current price and how much it is reduced by.',
          'The stock counter is the number of items that can still be ordered at that price.',
          'When the stock reaches zero the deal disappears from this page.',
        ],
      },
      {
        heading: 'What to expect',
        paragraphs: [
          'Prices update live, so the number you see when you open a product is the number you pay for. There is no coupon step and no waiting period.',
        ],
      },
    ],
  },
  new: {
    title: "What's New",
    highlight: 'Latest',
    subtitle: 'The products that were added to the catalogue most recently.',
    intro:
      'New arrivals are listed in the order they were added. The catalogue refreshes as products are published, so this page is the quickest way to see what is fresh.',
    sections: [
      {
        heading: 'Recently added',
        items: [
          'New products appear at the top of the catalogue with their full description.',
          'Existing products are never silently changed, so a price you saw stays valid until it is updated on purpose.',
          'Categories keep their own pages, so a new arrival in one category does not change the others.',
        ],
      },
    ],
  },
  trending: {
    title: 'Trending',
    highlight: 'Popular',
    subtitle: 'The products that people are looking at the most right now.',
    intro:
      'Trending is driven by real activity on the storefront: the products with the most views and the most orders in the current period, not a hand picked list.',
    sections: [
      {
        heading: 'How the list is built',
        items: [
          'Products are ranked by the number of views they receive.',
          'Orders count as a stronger signal than a view.',
          'The ranking is recalculated continuously, so the order changes as the day goes on.',
        ],
      },
      {
        heading: 'Looking for something else',
        paragraphs: [
          'The full catalogue is always one click away in the shop, and every category has its own page.',
        ],
      },
    ],
  },
  help: {
    title: 'Help Center',
    highlight: 'Support',
    subtitle: 'Answers to the questions we are asked most often.',
    intro:
      'Most questions fall into one of the groups below. If yours is not here, the contact page reaches a person.',
    sections: [
      {
        heading: 'Orders and stock',
        items: [
          'Stock is live, so the counter you see is the counter that is used.',
          'An item can sell out between opening the product page and confirming the order.',
          'An order that cannot be fulfilled is cancelled and nothing is charged.',
        ],
      },
      {
        heading: 'Payments',
        items: [
          'Checkout is a single step and shows the total before the order is placed.',
          'The order confirmation is sent as soon as the order is accepted.',
        ],
      },
      {
        heading: 'Still stuck?',
        paragraphs: [
          'The contact page has the details for reaching support directly.',
        ],
      },
    ],
  },
  returns: {
    title: 'Returns',
    highlight: 'Policy',
    subtitle: 'How to send an order back.',
    intro:
      'Returns are accepted for 30 days from the day the order is delivered. The product only has to be in the condition it arrived in.',
    sections: [
      {
        heading: 'The steps',
        items: [
          'Open the order in your account and choose return.',
          'Pack the product with the delivery note.',
          'Send it back with the carrier of your choice.',
          'The refund is issued once the return has been received.',
        ],
      },
      {
        heading: 'Refunds',
        items: [
          'The refund goes back to the original payment method.',
          'Delivery costs are not refunded unless the order was sent to the wrong address.',
        ],
      },
    ],
  },
  shipping: {
    title: 'Shipping',
    highlight: 'Delivery',
    subtitle: 'Where the order goes and how long it takes.',
    intro:
      'Orders are packed as soon as the stock is reserved. You get a confirmation with the delivery estimate for your address.',
    sections: [
      {
        heading: 'Delivery times',
        items: [
          'Standard delivery: 3 to 5 working days.',
          'Express delivery: 1 to 2 working days.',
          'Tracking is included with every order.',
        ],
      },
      {
        heading: 'Delivery cost',
        paragraphs: [
          'Delivery is free above the order threshold shown in the checkout. Below it, the cost is calculated from the destination and the size of the order.',
        ],
      },
    ],
  },
  contact: {
    title: 'Contact Us',
    highlight: 'Support',
    subtitle: 'Reach a person, not a form that goes nowhere.',
    intro:
      'The team reads every message. If the question is about an existing order, mentioning the order number makes the answer much faster.',
    sections: [
      {
        heading: 'How to reach us',
        items: [
          'Email: support@mercatolive.example',
          'Support hours: Monday to Friday, 09:00 to 18:00.',
          'Typical first reply: within one working day.',
        ],
      },
      {
        heading: 'Before you write',
        paragraphs: [
          'The help center covers the questions that come up most often, and the returns and shipping pages cover the rest of the common cases.',
        ],
      },
    ],
  },
  careers: {
    title: 'Careers',
    highlight: 'Company',
    subtitle: 'Open roles and how the team works.',
    intro:
      'MercatoLive is a small team that ships often. The work is frontend heavy, with a real interest in live data and in keeping the interface fast.',
    sections: [
      {
        heading: 'How we work',
        items: [
          'Small changes, reviewed in the same day.',
          'The catalogue and the storefront are the same product, so a change is visible immediately.',
          'Remote friendly, with a small number of planned meetups.',
        ],
      },
      {
        heading: 'Open roles',
        items: [
          'Frontend engineer, storefront.',
          'Full stack engineer, catalogue and inventory.',
          'Product designer, live shopping experience.',
        ],
      },
    ],
  },
  press: {
    title: 'Press',
    highlight: 'Media',
    subtitle: 'Material for writing about MercatoLive.',
    intro:
      'This page collects the things that are useful when writing about the product: what it is, the numbers behind it and who to talk to.',
    sections: [
      {
        heading: 'The short version',
        paragraphs: [
          'MercatoLive is a shopping experience where the stock counter on a product page is the number the order is actually placed against, updated as it changes rather than refreshed every few minutes.',
        ],
      },
      {
        heading: 'Media contact',
        items: [
          'Press enquiries: press@mercatolive.example',
          'Brand assets and screenshots: available on request.',
          'Interviews with the team: arranged through the contact page.',
        ],
      },
    ],
  },
  sustainability: {
    title: 'Sustainability',
    highlight: 'Planet',
    subtitle: 'What the company is trying to do about its footprint.',
    intro:
      'A store that ships physical goods has a footprint whatever it says. These are the parts of it that are measured rather than promised.',
    sections: [
      {
        heading: 'Where we are today',
        items: [
          'Consolidated shipping: orders travelling together leave as one parcel.',
          'Paper only where it is needed, and recycled where it is used.',
          'No separate return label for every order, so a return travels with the next pickup.',
        ],
      },
      {
        heading: 'What is still open',
        items: [
          'Packaging is not yet plastic free across the whole catalogue.',
          'The supplier audit covers the main suppliers only.',
        ],
      },
    ],
  },
  privacy: {
    title: 'Privacy Policy',
    highlight: 'Legal',
    subtitle: 'What is collected, and what happens to it.',
    intro:
      'This policy describes the data the storefront handles, why it is needed and how long it is kept.',
    sections: [
      {
        heading: 'What is collected',
        items: [
          'The details needed to deliver an order: name, address and contact details.',
          'The details needed to sign in, if an account is used.',
          'Technical data about how the storefront is used, in aggregate.',
        ],
      },
      {
        heading: 'What is not done with it',
        items: [
          'Order data is not sold.',
          'Payment details are handled by the payment provider and never stored here.',
          'The site does not use third party advertising trackers.',
        ],
      },
      {
        heading: 'Keeping it',
        paragraphs: [
          'Order records are kept for as long as the law requires. Everything else is removed as soon as it is no longer needed.',
        ],
      },
    ],
  },
  terms: {
    title: 'Terms of Service',
    highlight: 'Legal',
    subtitle: 'The rules for using the storefront.',
    intro:
      'By using MercatoLive you agree to the terms below, along with the policies they refer to.',
    sections: [
      {
        heading: 'Orders',
        items: [
          'An order is accepted when the stock has been reserved and the payment has gone through.',
          'If the stock turns out to be gone, the order is cancelled and nothing is charged.',
          'Prices can change, and the price that applies is the one shown when the order is placed.',
        ],
      },
      {
        heading: 'Use of the site',
        items: [
          'The storefront is for personal, non commercial use.',
          'Content and the brand may not be reused without permission.',
        ],
      },
    ],
  },
  cookies: {
    title: 'Cookie Settings',
    highlight: 'Legal',
    subtitle: 'What the site stores in your browser.',
    intro:
      'The storefront keeps the site working with a small number of cookies and similar browser storage. Nothing is used for advertising.',
    sections: [
      {
        heading: 'What is stored',
        items: [
          'A session cookie that keeps you signed in.',
          'A cookie that remembers the contents of the shopping cart.',
          'A preference cookie that remembers whether the interface is in light or dark mode.',
        ],
      },
      {
        heading: 'What is not',
        paragraphs: [
          'There is no advertising cookie, no cross site tracking and no third party analytics script on the storefront.',
        ],
      },
      {
        heading: 'Removing them',
        paragraphs: [
          'Clearing the site data in your browser removes all of them. The cart and the session then have to be set up again.',
        ],
      },
    ],
  },
};
