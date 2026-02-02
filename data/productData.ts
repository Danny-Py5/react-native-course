import { getRandomKey } from 'util/getAKey';
import { ProductCardDataType } from '../components/ScrollViewCard';

export const cardData: ProductCardDataType[] = [
  {
    id: `${getRandomKey()}`,
    image: require('../assets/OIP.webp'),
    title: 'Emerolda De Hotel',
    subtitle: 'Ports Comfort',
    reviewCount: 182,
    category: 'General',
    whatThisPlaceOffers: [
      {
        title: 'Entertainment',
        description: '55" Smart TV',
        materialIconName: 'tv',
      },
      {
        title: 'AC',
        description: 'Climate control',
        materialIconName: 'ac-unit',
      },
      {
        title: 'Security',
        description: '24/7 monitoring',
        materialIconName: 'security',
      },
      {
        title: 'Kitchen',
        description: 'Fully equipped',
        materialIconName: 'kitchen',
      },
      {
        title: 'Wifi',
        description: 'Hight-Speed Internet',
        materialIconName: 'wifi',
      },
      {
        title: 'Dedicated Workspace',
        description: 'Work from anywhere',
        materialIconName: 'work',
      },
      {
        title: 'pool',
        description: 'Infinity Pool',
        materialIconName: 'pool',
      },
      {
        title: 'Hot Tub',
        description: 'Private spa',
        materialIconName: 'hot-tub',
      },
    ],
    price: '29',
    rate: '5.7',
    reviews: [
      {
        reviewer: 'Sarah M.',
        date: 'Feb 2026',
        description:
          'An absolute paradise! The views were stunning, the rooms were immaculate, and the hospitality made us feel like royalty throughout our stay.',
        shortDescription: 'Stunning views and exceptional hospitality.',
        star: 2.5,
      },
    ],
    description:
      'Experience unparalleled luxury in this breathtaking beachfront villa. Nestled on pristine white sand beaches with crystal-clear turquoise waters, this exclusive property offers the perfect escape for those seeking ultimate tranquility and sophistication.',
  },
  {
    id: `${getRandomKey()}`,
    image: require('../assets/img2.webp'),
    title: 'Grand Royale',
    subtitle: 'Correct Comfort',
    reviewCount: 127,
    category: 'General',
    whatThisPlaceOffers: [
      {
        title: 'Entertainment',
        description: '55" Smart TV',
        materialIconName: 'tv',
      },
      {
        title: 'AC',
        description: 'Climate control',
        materialIconName: 'ac-unit',
      },
      {
        title: 'Security',
        description: '24/7 monitoring',
        materialIconName: 'security',
      },
      {
        title: 'Kitchen',
        description: 'Fully equipped',
        materialIconName: 'kitchen',
      },
      {
        title: 'Wifi',
        description: 'Hight-Speed Internet',
        materialIconName: 'wifi',
      },
      {
        title: 'Dedicated Workspace',
        description: 'Work from anywhere',
        materialIconName: 'work',
      },
      {
        title: 'pool',
        description: 'Infinity Pool',
        materialIconName: 'pool',
      },
      {
        title: 'Hot Tub',
        description: 'Private spa',
        materialIconName: 'hot-tub',
      },
    ],
    price: '89',
    rate: '4.9',
    reviews: [
      {
        reviewer: 'Chiamaka N.',
        date: 'Jun 2025',
        description:
          'The service quality was impressive, and the staff was always ready to help. A great place for both relaxation and business.',
        shortDescription: 'Excellent service and convenience.',
        star: 2,
      },
      {
        reviewer: 'Tunde A.',
        date: 'May 2025',
        description:
          'Everything was handled professionally, and the process was faster than expected.',
        shortDescription: 'Professional and fast service.',
        star: 3,
      },
      {
        reviewer: 'Blessing E.',
        date: 'Mar 2025',
        description:
          'I appreciated the clear communication and the friendly attitude of the staff.',
        shortDescription: 'Clear communication and friendly staff.',
        star: 4,
      },
      {
        reviewer: 'David M.',
        date: 'Feb 2025',
        description: 'Services were delivered accurately, and the environment was well organized.',
        shortDescription: 'Accurate and organized service.',
        star: 4.5,
      },
      {
        reviewer: 'Zainab R.',
        date: 'Jan 2025',
        description: 'A dependable service center that values customers and delivers on promises.',
        shortDescription: 'Dependable and customer-focused.',
        star: 4.6,
      },
    ],
    description:
      'Experience unparalleled luxury in this breathtaking beachfront villa. Nestled on pristine white sand beaches with crystal-clear turquoise waters, this exclusive property offers the perfect escape for those seeking ultimate tranquility and sophistication.',
  },
  {
    id: `${getRandomKey()}`,
    image: require('../assets/img3.webp'),
    title: 'Sea View Resort',
    subtitle: 'Ocean Comfort',
    reviewCount: 123,
    category: 'General',
    whatThisPlaceOffers: [
      {
        title: 'Entertainment',
        description: '55" Smart TV',
        materialIconName: 'tv',
      },
      {
        title: 'AC',
        description: 'Climate control',
        materialIconName: 'ac-unit',
      },
      {
        title: 'Security',
        description: '24/7 monitoring',
        materialIconName: 'security',
      },
      {
        title: 'Kitchen',
        description: 'Fully equipped',
        materialIconName: 'kitchen',
      },
      {
        title: 'Wifi',
        description: 'Hight-Speed Internet',
        materialIconName: 'wifi',
      },
      {
        title: 'Dedicated Workspace',
        description: 'Work from anywhere',
        materialIconName: 'work',
      },
      {
        title: 'pool',
        description: 'Infinity Pool',
        materialIconName: 'pool',
      },
      {
        title: 'Hot Tub',
        description: 'Private spa',
        materialIconName: 'hot-tub',
      },
    ],
    price: '100',
    rate: '4.3',
    reviews: [
      {
        reviewer: 'Emily R.',

        date: 'Dec 2025',
        description:
          'A relaxing and luxurious experience. The room was beautifully designed, and the environment was calm and peaceful.',
        shortDescription: 'Relaxing luxury at its finest.',
        star: 2.6,
      },
    ],
    description:
      'Indulge in ultimate luxury in this expansive suite, complete with a separate living area, premium furnishings, and panoramic city or ocean views. Perfect for VIP guests.',
  },
  {
    id: `${getRandomKey()}`,
    image: require('../assets/img4.webp'),
    title: 'Ocean Breeze',
    subtitle: 'Coastal Comfort',
    reviewCount: 345,
    category: 'General',
    whatThisPlaceOffers: [
      {
        title: 'Entertainment',
        description: '55" Smart TV',
        materialIconName: 'tv',
      },
      {
        title: 'AC',
        description: 'Climate control',
        materialIconName: 'ac-unit',
      },
      {
        title: 'Security',
        description: '24/7 monitoring',
        materialIconName: 'security',
      },
      {
        title: 'Kitchen',
        description: 'Fully equipped',
        materialIconName: 'kitchen',
      },
      {
        title: 'Wifi',
        description: 'Hight-Speed Internet',
        materialIconName: 'wifi',
      },
      {
        title: 'Dedicated Workspace',
        description: 'Work from anywhere',
        materialIconName: 'work',
      },
      {
        title: 'pool',
        description: 'Infinity Pool',
        materialIconName: 'pool',
      },
      {
        title: 'Hot Tub',
        description: 'Private spa',
        materialIconName: 'hot-tub',
      },
    ],
    price: '120',
    rate: '4.7',
    reviews: [
      {
        reviewer: 'Michael T.',

        date: 'Nov 2025',
        description:
          'Excellent location with top-notch facilities. The food was delicious, and the customer service was outstanding.',
        shortDescription: 'Great location and outstanding service.',
        star: 3.4,
      },
      {
        reviewer: 'Chiamaka N.',
        date: 'Jun 2025',
        description:
          'The service quality was impressive, and the staff was always ready to help. A great place for both relaxation and business.',
        shortDescription: 'Excellent service and convenience.',
        star: 2.4,
      },
    ],
    description:
      'Enjoy a blend of elegance and coziness in this deluxe double room. Equipped with twin beds, ambient lighting, and contemporary amenities for a restful stay.',
  },
];

export const newProductData: ProductCardDataType[] = [
  {
    id: `${getRandomKey()}`,
    image: require('../assets/new1.webp'),
    title: 'Fresh City Studio',
    subtitle: 'New Arrival',
    reviewCount: 12,
    category: 'New',
    whatThisPlaceOffers: [
      { title: 'Entertainment', description: 'Smart TV', materialIconName: 'tv' },
      { title: 'AC', description: 'Cooling system', materialIconName: 'ac-unit' },
      { title: 'Security', description: 'Secure access', materialIconName: 'security' },
      { title: 'Wifi', description: 'Fast Internet', materialIconName: 'wifi' },
    ],
    price: '70',
    rate: '3.9',
    reviews: [
      {
        reviewer: 'Samuel O.',
        date: 'Sep 2025',
        description: 'Still new but okay.',
        shortDescription: 'Decent stay.',
        star: 2,
      },
    ],
    description: 'A newly listed studio apartment offering basic comfort for short city stays.',
  },

  {
    id: `${getRandomKey()}`,
    image: require('../assets/new2.webp'),
    title: 'Modern Comfort Suite',
    subtitle: 'Just Listed',
    reviewCount: 24,
    category: 'New',
    whatThisPlaceOffers: [
      { title: 'Entertainment', description: 'LED TV', materialIconName: 'tv' },
      { title: 'AC', description: 'Room AC', materialIconName: 'ac-unit' },
      { title: 'Security', description: '24/7 security', materialIconName: 'security' },
      { title: 'Kitchen', description: 'Compact kitchen', materialIconName: 'kitchen' },
      { title: 'Wifi', description: 'Reliable WiFi', materialIconName: 'wifi' },
      { title: 'Dedicated Workspace', description: 'Work desk', materialIconName: 'work' },
    ],
    price: '120',
    rate: '4.3',
    reviews: [
      {
        reviewer: 'Nancy A.',
        date: 'Oct 2025',
        description: 'Comfortable place.',
        shortDescription: 'Nice and clean.',
        star: 4,
      },
      {
        reviewer: 'Peter J.',
        date: 'Oct 2025',
        description: 'Good layout and calm.',
        shortDescription: 'Peaceful.',
        star: 3.6,
      },
    ],
    description: 'A modern suite newly introduced, blending comfort with functionality.',
  },

  {
    id: `${getRandomKey()}`,
    image: require('../assets/new3.webp'),
    title: 'Urban Mini Apartment',
    subtitle: 'New Listing',
    reviewCount: 18,
    category: 'New',
    whatThisPlaceOffers: [
      { title: 'Entertainment', description: 'Cable TV', materialIconName: 'tv' },
      { title: 'AC', description: 'Standard AC', materialIconName: 'ac-unit' },
      { title: 'Security', description: 'Controlled entry', materialIconName: 'security' },
      { title: 'Kitchen', description: 'Mini kitchen', materialIconName: 'kitchen' },
      { title: 'Wifi', description: 'Stable WiFi', materialIconName: 'wifi' },
    ],
    price: '85',
    rate: '4.0',
    reviews: [
      {
        reviewer: 'Tunde K.',
        date: 'Sep 2025',
        description: 'Nice but small.',
        shortDescription: 'Compact.',
        star: 3.2,
      },
      {
        reviewer: 'Zainab M.',
        date: 'Oct 2025',
        description: 'Clean and affordable.',
        shortDescription: 'Good price.',
        star: 3.8,
      },
      {
        reviewer: 'Emeka L.',
        date: 'Oct 2025',
        description: 'Okay for short stays.',
        shortDescription: 'Short stay friendly.',
        star: 3.5,
      },
    ],
    description: 'A compact apartment newly available for guests who prefer simplicity.',
  },

  {
    id: `${getRandomKey()}`,
    image: require('../assets/new5.webp'),
    title: 'Premium Luxury Villa',
    subtitle: 'Brand New',
    reviewCount: 50,
    category: 'New',
    whatThisPlaceOffers: [
      { title: 'Entertainment', description: 'Smart TV', materialIconName: 'tv' },
      { title: 'AC', description: 'Central AC', materialIconName: 'ac-unit' },
      { title: 'Security', description: 'Private security', materialIconName: 'security' },
      { title: 'Kitchen', description: 'Luxury kitchen', materialIconName: 'kitchen' },
      { title: 'Wifi', description: 'Ultra-fast WiFi', materialIconName: 'wifi' },
      { title: 'Dedicated Workspace', description: 'Private office', materialIconName: 'work' },
      { title: 'Pool', description: 'Infinity pool', materialIconName: 'pool' },
      { title: 'Hot Tub', description: 'Private spa', materialIconName: 'hot-tub' },
    ],
    price: '320',
    rate: '5.0',
    reviews: [
      {
        reviewer: 'Aisha M.',
        date: 'Oct 2025',
        description: 'Absolutely perfect.',
        shortDescription: 'Perfect.',
        star: 5,
      },
      {
        reviewer: 'David K.',
        date: 'Oct 2025',
        description: 'Luxury at its best.',
        shortDescription: 'Top tier.',
        star: 4.9,
      },
      {
        reviewer: 'Sarah L.',
        date: 'Oct 2025',
        description: 'Exceeded expectations.',
        shortDescription: 'Exceeded.',
        star: 4.8,
      },
      {
        reviewer: 'Michael O.',
        date: 'Oct 2025',
        description: 'Worth every penny.',
        shortDescription: 'Worth it.',
        star: 4.7,
      },
      {
        reviewer: 'Fatima N.',
        date: 'Oct 2025',
        description: 'Exceptional service.',
        shortDescription: 'Exceptional.',
        star: 5,
      },
    ],
    description:
      'A brand-new luxury villa offering top-tier amenities and an exceptional experience.',
  },
];

export const popularProductData: ProductCardDataType[] = [
  {
    id: `${getRandomKey()}`,
    image: require('../assets/pop1.webp'),
    title: 'Luxury City Penthouse',
    subtitle: 'Top Pick',
    reviewCount: 210,
    category: 'Popular',
    whatThisPlaceOffers: [
      { title: 'Entertainment', description: 'Smart TV', materialIconName: 'tv' },
      { title: 'AC', description: 'Central cooling', materialIconName: 'ac-unit' },
      { title: 'Security', description: '24/7 security', materialIconName: 'security' },
      { title: 'Kitchen', description: 'Modern kitchen', materialIconName: 'kitchen' },
      { title: 'Wifi', description: 'High-speed WiFi', materialIconName: 'wifi' },
      { title: 'Dedicated Workspace', description: 'Office desk', materialIconName: 'work' },
      { title: 'Pool', description: 'Private pool', materialIconName: 'pool' },
      { title: 'Hot Tub', description: 'Luxury spa', materialIconName: 'hot-tub' },
    ],
    price: '220',
    rate: '4.9',
    reviews: [
      {
        reviewer: 'Daniel A.',
        date: 'Aug 2025',
        description: 'Everything about this place screams luxury.',
        shortDescription: 'Premium experience.',
        star: 4.8,
      },
    ],
    description:
      'A premium penthouse offering unmatched comfort, luxury finishes, and stunning city views.',
  },

  {
    id: `${getRandomKey()}`,
    image: require('../assets/pop2.webp'),
    title: 'Modern Serviced Apartment',
    subtitle: 'Highly Rated',
    reviewCount: 165,
    category: 'Popular',
    whatThisPlaceOffers: [
      { title: 'Entertainment', description: 'LED TV', materialIconName: 'tv' },
      { title: 'AC', description: 'Room AC', materialIconName: 'ac-unit' },
      { title: 'Security', description: 'Secured access', materialIconName: 'security' },
      { title: 'Kitchen', description: 'Equipped kitchen', materialIconName: 'kitchen' },
      { title: 'Wifi', description: 'Fast Internet', materialIconName: 'wifi' },
      { title: 'Dedicated Workspace', description: 'Work station', materialIconName: 'work' },
    ],
    price: '160',
    rate: '4.7',
    reviews: [
      {
        reviewer: 'Blessing K.',
        date: 'Jun 2025',
        description: 'Clean, modern, and very comfortable.',
        shortDescription: 'Modern and neat.',
        star: 4.5,
      },
    ],
    description:
      'A well-furnished serviced apartment popular among business and leisure travelers.',
  },

  {
    id: `${getRandomKey()}`,
    image: require('../assets/pop3.webp'),
    title: 'Popular Budget Suite',
    subtitle: 'Most Booked',
    reviewCount: 132,
    category: 'Popular',
    whatThisPlaceOffers: [
      { title: 'Entertainment', description: 'Cable TV', materialIconName: 'tv' },
      { title: 'AC', description: 'Cooling unit', materialIconName: 'ac-unit' },
      { title: 'Security', description: 'On-site guard', materialIconName: 'security' },
      { title: 'Wifi', description: 'Stable WiFi', materialIconName: 'wifi' },
    ],
    price: '95',
    rate: '4.4',
    reviews: [
      {
        reviewer: 'Ibrahim S.',
        date: 'May 2025',
        description: 'Very popular for a reason, good value.',
        shortDescription: 'Value-packed stay.',
        star: 4.2,
      },
    ],
    description:
      'A frequently booked suite offering comfort and affordability with essential amenities.',
  },
];

export const trendingProductData: ProductCardDataType[] = [
  {
    id: `${getRandomKey()}`,
    image: require('../assets/trend1.webp'),
    title: 'City Lights Apartment',
    subtitle: 'Urban Luxury',
    reviewCount: 210,
    category: 'Trending',
    whatThisPlaceOffers: [
      { title: 'Entertainment', description: 'Smart TV', materialIconName: 'tv' },
      { title: 'AC', description: 'Cooling system', materialIconName: 'ac-unit' },
      { title: 'Security', description: 'Secure access', materialIconName: 'security' },
      { title: 'Kitchen', description: 'Modern appliances', materialIconName: 'kitchen' },
      { title: 'Wifi', description: 'Fast Internet', materialIconName: 'wifi' },
      { title: 'Dedicated Workspace', description: 'Office desk', materialIconName: 'work' },
      { title: 'Pool', description: 'Rooftop pool', materialIconName: 'pool' },
      { title: 'Hot Tub', description: 'Luxury spa', materialIconName: 'hot-tub' },
    ],
    price: '180',
    rate: '5.4',
    reviews: [
      {
        reviewer: 'Tunde A.',
        date: 'Mar 2025',
        description: 'Great city view and very comfortable stay.',
        shortDescription: 'Amazing city view.',
        star: 4.5,
      },
    ],
    description:
      'A modern apartment located in the heart of the city, offering stunning skyline views and premium comfort.',
  },

  {
    id: `${getRandomKey()}`,
    image: require('../assets/trend2.webp'),
    title: 'Luxury Beach Condo',
    subtitle: 'Oceanfront Living',
    reviewCount: 185,
    category: 'Trending',
    whatThisPlaceOffers: [
      { title: 'Entertainment', description: 'Netflix TV', materialIconName: 'tv' },
      { title: 'AC', description: 'Ocean breeze cooling', materialIconName: 'ac-unit' },
      { title: 'Security', description: 'Gated access', materialIconName: 'security' },
      { title: 'Kitchen', description: 'Open kitchen', materialIconName: 'kitchen' },
      { title: 'Wifi', description: 'Unlimited Internet', materialIconName: 'wifi' },
      { title: 'Dedicated Workspace', description: 'Sea-view desk', materialIconName: 'work' },
      { title: 'Pool', description: 'Infinity pool', materialIconName: 'pool' },
      { title: 'Hot Tub', description: 'Beachside spa', materialIconName: 'hot-tub' },
    ],
    price: '220',
    rate: '5.6',
    reviews: [
      {
        reviewer: 'Blessing K.',
        date: 'Feb 2025',
        description: 'Peaceful environment with beautiful ocean views.',
        shortDescription: 'Relaxing beachfront stay.',
        star: 4.7,
      },
    ],
    description:
      'Wake up to ocean waves in this luxurious beachfront condo designed for comfort and serenity.',
  },

  {
    id: `${getRandomKey()}`,
    image: require('../assets/trend3.webp'),
    title: 'Forest Cabin Escape',
    subtitle: 'Nature Retreat',
    reviewCount: 140,
    category: 'Trending',
    whatThisPlaceOffers: [
      { title: 'Entertainment', description: 'Satellite TV', materialIconName: 'tv' },
      { title: 'AC', description: 'Natural cooling', materialIconName: 'ac-unit' },
      { title: 'Security', description: 'Private compound', materialIconName: 'security' },
      { title: 'Kitchen', description: 'Rustic kitchen', materialIconName: 'kitchen' },
      { title: 'Wifi', description: 'Stable connection', materialIconName: 'wifi' },
      { title: 'Dedicated Workspace', description: 'Quiet desk', materialIconName: 'work' },
      { title: 'Pool', description: 'Natural pool', materialIconName: 'pool' },
      { title: 'Hot Tub', description: 'Outdoor tub', materialIconName: 'hot-tub' },
    ],
    price: '130',
    rate: '5.2',
    reviews: [
      {
        reviewer: 'Samuel D.',
        date: 'Jan 2025',
        description: 'Perfect for disconnecting and relaxing.',
        shortDescription: 'Peaceful and calm.',
        star: 4.3,
      },
    ],
    description:
      'A quiet forest cabin ideal for guests seeking privacy, calm, and a connection to nature.',
  },

  {
    id: `${getRandomKey()}`,
    image: require('../assets/trend4.webp'),
    title: 'Skyline Penthouse',
    subtitle: 'Elite Comfort',
    reviewCount: 260,
    category: 'Trending',
    whatThisPlaceOffers: [
      { title: 'Entertainment', description: 'Home theatre', materialIconName: 'tv' },
      { title: 'AC', description: 'Smart cooling', materialIconName: 'ac-unit' },
      { title: 'Security', description: '24/7 guards', materialIconName: 'security' },
      { title: 'Kitchen', description: 'Luxury kitchen', materialIconName: 'kitchen' },
      { title: 'Wifi', description: 'Ultra-fast WiFi', materialIconName: 'wifi' },
      { title: 'Dedicated Workspace', description: 'Executive desk', materialIconName: 'work' },
      { title: 'Pool', description: 'Private pool', materialIconName: 'pool' },
      { title: 'Hot Tub', description: 'Indoor jacuzzi', materialIconName: 'hot-tub' },
    ],
    price: '300',
    rate: '5.8',
    reviews: [
      {
        reviewer: 'Ibrahim S.',
        date: 'Apr 2025',
        description: 'Top-tier luxury and unmatched comfort.',
        shortDescription: 'Pure luxury.',
        star: 4.9,
      },
    ],
    description: 'An exclusive penthouse offering premium living with breathtaking skyline views.',
  },
];

export const regularProductData: ProductCardDataType[] = [
  {
    id: `${getRandomKey()}`,
    image: require('../assets/reg1.webp'),
    title: 'Comfort Stay Apartment',
    subtitle: 'Simple & Cozy',
    reviewCount: 78,
    category: 'Regular',
    whatThisPlaceOffers: [
      { title: 'Entertainment', description: 'Flat-screen TV', materialIconName: 'tv' },
      { title: 'AC', description: 'Room cooling', materialIconName: 'ac-unit' },
      { title: 'Security', description: 'Secure entry', materialIconName: 'security' },
      { title: 'Kitchen', description: 'Basic kitchen', materialIconName: 'kitchen' },
      { title: 'Wifi', description: 'Standard Internet', materialIconName: 'wifi' },
      { title: 'Dedicated Workspace', description: 'Reading desk', materialIconName: 'work' },
      { title: 'Pool', description: 'Shared pool', materialIconName: 'pool' },
      { title: 'Hot Tub', description: 'Shared tub', materialIconName: 'hot-tub' },
    ],
    price: '90',
    rate: '4.6',
    reviews: [
      {
        reviewer: 'Grace M.',
        date: 'Feb 2025',
        description: 'Comfortable place with everything you need.',
        shortDescription: 'Good value for money.',
        star: 4.1,
      },
    ],
    description:
      'A comfortable and affordable apartment suitable for short stays and everyday travel needs.',
  },

  {
    id: `${getRandomKey()}`,
    image: require('../assets/reg2.webp'),
    title: 'Urban Guest House',
    subtitle: 'Affordable Living',
    reviewCount: 65,
    category: 'Regular',
    whatThisPlaceOffers: [
      { title: 'Entertainment', description: 'Cable TV', materialIconName: 'tv' },
      { title: 'AC', description: 'Air cooling', materialIconName: 'ac-unit' },
      { title: 'Security', description: 'Night watch', materialIconName: 'security' },
      { title: 'Kitchen', description: 'Shared kitchen', materialIconName: 'kitchen' },
      { title: 'Wifi', description: 'Reliable WiFi', materialIconName: 'wifi' },
      { title: 'Dedicated Workspace', description: 'Compact desk', materialIconName: 'work' },
      { title: 'Pool', description: 'Community pool', materialIconName: 'pool' },
      { title: 'Hot Tub', description: 'Common spa', materialIconName: 'hot-tub' },
    ],
    price: '75',
    rate: '4.4',
    reviews: [
      {
        reviewer: 'Kunle B.',
        date: 'Jan 2025',
        description: 'Nice and quiet environment, good for rest.',
        shortDescription: 'Quiet and affordable.',
        star: 4.0,
      },
    ],
    description:
      'An affordable guest house located in the city, offering basic comfort and convenience.',
  },

  {
    id: `${getRandomKey()}`,
    image: require('../assets/reg3.webp'),
    title: 'Budget City Room',
    subtitle: 'Everyday Stay',
    reviewCount: 52,
    category: 'Regular',
    whatThisPlaceOffers: [
      { title: 'Entertainment', description: 'LED TV', materialIconName: 'tv' },
      { title: 'AC', description: 'Standard AC', materialIconName: 'ac-unit' },
      { title: 'Security', description: 'Controlled access', materialIconName: 'security' },
      { title: 'Kitchen', description: 'Mini kitchen', materialIconName: 'kitchen' },
      { title: 'Wifi', description: 'Basic Internet', materialIconName: 'wifi' },
      { title: 'Dedicated Workspace', description: 'Small table', materialIconName: 'work' },
      { title: 'Pool', description: 'Outdoor pool', materialIconName: 'pool' },
      { title: 'Hot Tub', description: 'Shared hot tub', materialIconName: 'hot-tub' },
    ],
    price: '60',
    rate: '4.2',
    reviews: [
      {
        reviewer: 'Ayo T.',
        date: 'Dec 2024',
        description: 'Simple place, clean and okay for the price.',
        shortDescription: 'Clean and simple.',
        star: 3.9,
      },
    ],
    description:
      'A budget-friendly city room designed for guests seeking simplicity and affordability.',
  },

  {
    id: `${getRandomKey()}`,
    image: require('../assets/reg4.webp'),
    title: 'Standard Family Lodge',
    subtitle: 'Homely Comfort',
    reviewCount: 89,
    category: 'Regular',
    whatThisPlaceOffers: [
      { title: 'Entertainment', description: 'Family TV', materialIconName: 'tv' },
      { title: 'AC', description: 'Room cooling system', materialIconName: 'ac-unit' },
      { title: 'Security', description: '24/7 security', materialIconName: 'security' },
      { title: 'Kitchen', description: 'Family kitchen', materialIconName: 'kitchen' },
      { title: 'Wifi', description: 'Home WiFi', materialIconName: 'wifi' },
      { title: 'Dedicated Workspace', description: 'Work table', materialIconName: 'work' },
      { title: 'Pool', description: 'Kids-friendly pool', materialIconName: 'pool' },
      { title: 'Hot Tub', description: 'Relaxation tub', materialIconName: 'hot-tub' },
    ],
    price: '110',
    rate: '4.8',
    reviews: [
      {
        reviewer: 'Mary O.',
        date: 'Mar 2025',
        description: 'Very homely and comfortable for families.',
        shortDescription: 'Family-friendly stay.',
        star: 4.4,
      },
    ],
    description:
      'A standard lodge offering a warm, homely atmosphere ideal for families and longer stays.',
  },
];

export const recommendProductData: ProductCardDataType[] = [
  {
    id: `${getRandomKey()}`,
    image: require('../assets/recommended1.webp'),
    title: 'Ocean View Paradise',
    subtitle: 'Luxury by the Sea',
    reviewCount: 210,
    category: 'Recommended',
    whatThisPlaceOffers: [
      {
        title: 'Entertainment',
        description: '65" Smart TV',
        materialIconName: 'tv',
      },
      {
        title: 'AC',
        description: 'Central cooling system',
        materialIconName: 'ac-unit',
      },
      {
        title: 'Security',
        description: 'Private security',
        materialIconName: 'security',
      },
      {
        title: 'Kitchen',
        description: 'Modern appliances',
        materialIconName: 'kitchen',
      },
      {
        title: 'Wifi',
        description: 'High-speed internet',
        materialIconName: 'wifi',
      },
      {
        title: 'Dedicated Workspace',
        description: 'Office-ready space',
        materialIconName: 'work',
      },
      {
        title: 'pool',
        description: 'Oceanfront pool',
        materialIconName: 'pool',
      },
      {
        title: 'Hot Tub',
        description: 'Luxury hot tub',
        materialIconName: 'hot-tub',
      },
    ],
    price: '220',
    rate: '4.8',
    reviews: [
      {
        reviewer: 'Samuel K.',
        date: 'May 2025',
        description: 'A beautiful location with outstanding service and breathtaking views.',
        shortDescription: 'Amazing views and comfort.',
        star: 4.7,
      },
      {
        reviewer: 'Zainab R.',
        date: 'Apr 2025',
        description: 'Everything felt premium and well-maintained throughout our stay.',
        shortDescription: 'Premium experience.',
        star: 4.6,
      },
      {
        reviewer: 'David M.',
        date: 'Mar 2025',
        description: 'Peaceful environment and very responsive staff.',
        shortDescription: 'Peaceful and responsive.',
        star: 4.5,
      },
    ],
    description:
      'Wake up to stunning ocean views in this beautifully designed luxury apartment, offering comfort, privacy, and world-class amenities.',
  },

  {
    id: `${getRandomKey()}`,
    image: require('../assets/recommended2.webp'),
    title: 'City Lights Apartment',
    subtitle: 'Urban Comfort',
    reviewCount: 185,
    category: 'Recommended',
    whatThisPlaceOffers: [
      {
        title: 'Entertainment',
        description: 'Smart TV with streaming',
        materialIconName: 'tv',
      },
      {
        title: 'AC',
        description: 'Energy-efficient cooling',
        materialIconName: 'ac-unit',
      },
      {
        title: 'Security',
        description: 'Secure building access',
        materialIconName: 'security',
      },
      {
        title: 'Kitchen',
        description: 'Stylish kitchenette',
        materialIconName: 'kitchen',
      },
      {
        title: 'Wifi',
        description: 'Fast and reliable',
        materialIconName: 'wifi',
      },
      {
        title: 'Dedicated Workspace',
        description: 'Perfect for remote work',
        materialIconName: 'work',
      },
      {
        title: 'pool',
        description: 'Rooftop pool',
        materialIconName: 'pool',
      },
      {
        title: 'Hot Tub',
        description: 'Relaxation spa',
        materialIconName: 'hot-tub',
      },
    ],
    price: '180',
    rate: '4.6',
    reviews: [
      {
        reviewer: 'Ibrahim S.',
        date: 'Jun 2025',
        description: 'Great location and very convenient for city activities.',
        shortDescription: 'Perfect city stay.',
        star: 4.5,
      },
      {
        reviewer: 'Blessing E.',
        date: 'May 2025',
        description: 'Clean, modern, and close to everything.',
        shortDescription: 'Modern and accessible.',
        star: 4.4,
      },
      {
        reviewer: 'Grace T.',
        date: 'Apr 2025',
        description: 'Comfortable stay with great amenities.',
        shortDescription: 'Comfortable and stylish.',
        star: 4.6,
      },
    ],
    description:
      'Located in the heart of the city, this apartment offers modern living with easy access to entertainment, dining, and business hubs.',
  },

  {
    id: `${getRandomKey()}`,
    image: require('../assets/recommended3.webp'),
    title: 'Forest Hideaway',
    subtitle: 'Nature Escape',
    reviewCount: 140,
    category: 'Recommended',
    whatThisPlaceOffers: [
      {
        title: 'Entertainment',
        description: 'Satellite TV',
        materialIconName: 'tv',
      },
      {
        title: 'AC',
        description: 'Natural ventilation',
        materialIconName: 'ac-unit',
      },
      {
        title: 'Security',
        description: 'Gated property',
        materialIconName: 'security',
      },
      {
        title: 'Kitchen',
        description: 'Rustic kitchen setup',
        materialIconName: 'kitchen',
      },
      {
        title: 'Wifi',
        description: 'Stable connection',
        materialIconName: 'wifi',
      },
      {
        title: 'Dedicated Workspace',
        description: 'Quiet workspace',
        materialIconName: 'work',
      },
      {
        title: 'pool',
        description: 'Natural spring pool',
        materialIconName: 'pool',
      },
      {
        title: 'Hot Tub',
        description: 'Wooden hot tub',
        materialIconName: 'hot-tub',
      },
    ],
    price: '130',
    rate: '4.5',
    reviews: [
      {
        reviewer: 'Hassan Y.',
        date: 'Mar 2025',
        description: 'Perfect getaway from city noise.',
        shortDescription: 'Peaceful retreat.',
        star: 4.4,
      },
      {
        reviewer: 'Oluwaseun P.',
        date: 'Feb 2025',
        description: 'Nature lovers will enjoy this place.',
        shortDescription: 'Nature-friendly.',
        star: 4.5,
      },
      {
        reviewer: 'Emeka D.',
        date: 'Jan 2025',
        description: 'Very calming and well-kept.',
        shortDescription: 'Calm and refreshing.',
        star: 4.6,
      },
    ],
    description:
      'Surrounded by lush greenery, this forest retreat offers peace, privacy, and a deep connection with nature.',
  },

  {
    id: `${getRandomKey()}`,
    image: require('../assets/recommended4.webp'),
    title: 'Desert Oasis',
    subtitle: 'Luxury in the Sands',
    reviewCount: 95,
    category: 'Recommended',
    whatThisPlaceOffers: [
      {
        title: 'Entertainment',
        description: 'Premium sound system',
        materialIconName: 'tv',
      },
      {
        title: 'AC',
        description: 'Advanced cooling',
        materialIconName: 'ac-unit',
      },
      {
        title: 'Security',
        description: 'Private guards',
        materialIconName: 'security',
      },
      {
        title: 'Kitchen',
        description: 'Chef-grade kitchen',
        materialIconName: 'kitchen',
      },
      {
        title: 'Wifi',
        description: 'Satellite internet',
        materialIconName: 'wifi',
      },
      {
        title: 'Dedicated Workspace',
        description: 'Luxury desk setup',
        materialIconName: 'work',
      },
      {
        title: 'pool',
        description: 'Desert-view pool',
        materialIconName: 'pool',
      },
      {
        title: 'Hot Tub',
        description: 'Open-sky spa',
        materialIconName: 'hot-tub',
      },
    ],
    price: '260',
    rate: '4.9',
    reviews: [
      {
        reviewer: 'Aisha M.',
        date: 'Jun 2025',
        description: 'Truly a one-of-a-kind experience.',
        shortDescription: 'Unique luxury.',
        star: 4.9,
      },
      {
        reviewer: 'Mohammed A.',
        date: 'May 2025',
        description: 'Exceptional service and comfort.',
        shortDescription: 'Exceptional stay.',
        star: 4.8,
      },
      {
        reviewer: 'Fatima Z.',
        date: 'Apr 2025',
        description: 'Luxury meets nature beautifully.',
        shortDescription: 'Luxury oasis.',
        star: 4.9,
      },
    ],
    description:
      'An exclusive desert retreat combining luxury architecture with breathtaking natural surroundings.',
  },

  {
    id: `${getRandomKey()}`,
    image: require('../assets/recommended5.webp'),
    title: 'Lakeside Cabin',
    subtitle: 'Waterfront Serenity',
    reviewCount: 160,
    category: 'Recommended',
    whatThisPlaceOffers: [
      {
        title: 'Entertainment',
        description: 'Smart TV',
        materialIconName: 'tv',
      },
      {
        title: 'AC',
        description: 'Silent cooling system',
        materialIconName: 'ac-unit',
      },
      {
        title: 'Security',
        description: 'Monitored entry',
        materialIconName: 'security',
      },
      {
        title: 'Kitchen',
        description: 'Cozy kitchen',
        materialIconName: 'kitchen',
      },
      {
        title: 'Wifi',
        description: 'Reliable internet',
        materialIconName: 'wifi',
      },
      {
        title: 'Dedicated Workspace',
        description: 'Lake-view desk',
        materialIconName: 'work',
      },
      {
        title: 'pool',
        description: 'Infinity lake pool',
        materialIconName: 'pool',
      },
      {
        title: 'Hot Tub',
        description: 'Lakeside hot tub',
        materialIconName: 'hot-tub',
      },
    ],
    price: '170',
    rate: '4.7',
    reviews: [
      {
        reviewer: 'Daniel F.',
        date: 'May 2025',
        description: 'Beautiful scenery and very relaxing.',
        shortDescription: 'Relaxing stay.',
        star: 4.6,
      },
      {
        reviewer: 'Kemi S.',
        date: 'Apr 2025',
        description: 'Loved the calm environment.',
        shortDescription: 'Calm and cozy.',
        star: 4.7,
      },
      {
        reviewer: 'John B.',
        date: 'Mar 2025',
        description: 'Great for couples and quiet retreats.',
        shortDescription: 'Perfect retreat.',
        star: 4.8,
      },
    ],
    description:
      'Enjoy peaceful lake views and modern comfort in this beautifully designed lakeside cabin.',
  },
];

export const recentlyBookedData: ProductCardDataType[] = [
  {
    id: `${getRandomKey()}`,
    image: require('../assets/img5.jpg'),
    title: 'Mountain Retreat',
    subtitle: 'Hilltop Comfort',
    reviewCount: 100,
    category: 'Recently Booked',
    whatThisPlaceOffers: [
      {
        title: 'Entertainment',
        description: '55" Smart TV',
        materialIconName: 'tv',
      },
      {
        title: 'AC',
        description: 'Climate control',
        materialIconName: 'ac-unit',
      },
      {
        title: 'Security',
        description: '24/7 monitoring',
        materialIconName: 'security',
      },
      {
        title: 'Kitchen',
        description: 'Fully equipped',
        materialIconName: 'kitchen',
      },
      {
        title: 'Wifi',
        description: 'Hight-Speed Internet',
        materialIconName: 'wifi',
      },
      {
        title: 'Dedicated Workspace',
        description: 'Work from anywhere',
        materialIconName: 'work',
      },
      {
        title: 'pool',
        description: 'Infinity Pool',
        materialIconName: 'pool',
      },
      {
        title: 'Hot Tub',
        description: 'Private spa',
        materialIconName: 'hot-tub',
      },
    ],
    price: '150',
    rate: '5.7',
    reviews: [
      {
        reviewer: 'Chiamaka N.',
        date: 'Jun 2025',
        description:
          'The service quality was impressive, and the staff was always ready to help. A great place for both relaxation and business.',
        shortDescription: 'Excellent service and convenience.',
        star: 2.8,
      },

      {
        reviewer: 'Funke O.',
        date: 'Jul 2025',
        description:
          'Customer support was polite and helpful, making the process easy from start to finish.',
        shortDescription: 'Helpful customer support.',
        star: 2.6,
      },

      {
        reviewer: 'Amina L.',
        date: 'Jan 2025',
        description: 'Attention to detail and timely service made the experience very satisfying.',
        shortDescription: 'Timely and detailed service.',
        star: 2,
      },
    ],
    description:
      'Experience unparalleled luxury in this breathtaking beachfront villa. Nestled on pristine white sand beaches with crystal-clear turquoise waters, this exclusive property offers the perfect escape for those seeking ultimate tranquility and sophistication.',
  },
  {
    id: `${getRandomKey()}`,
    image: require('../assets/img6.webp'),
    title: 'Desert Oasis',
    subtitle: 'Sandy Comfort',
    reviewCount: 231,
    category: 'Recently Booked',
    whatThisPlaceOffers: [
      {
        title: 'Entertainment',
        description: '55" Smart TV',
        materialIconName: 'tv',
      },
      {
        title: 'AC',
        description: 'Climate control',
        materialIconName: 'ac-unit',
      },
      {
        title: 'Security',
        description: '24/7 monitoring',
        materialIconName: 'security',
      },
      {
        title: 'Kitchen',
        description: 'Fully equipped',
        materialIconName: 'kitchen',
      },
      {
        title: 'Dedicated Workspace',
        description: 'Work from anywhere',
        materialIconName: 'work',
      },
      {
        title: 'pool',
        description: 'Infinity Pool',
        materialIconName: 'pool',
      },
      {
        title: 'Hot Tub',
        description: 'Private spa',
        materialIconName: 'hot-tub',
      },
    ],
    price: '200',
    rate: '4.6',
    reviews: [
      {
        reviewer: 'Chiamaka N.',
        date: 'Jun 2025',
        description:
          'The service quality was impressive, and the staff was always ready to help. A great place for both relaxation and business.',
        shortDescription: 'Excellent service and convenience.',
        star: 2.4,
      },
      {
        reviewer: 'Blessing E.',
        date: 'May 2025',
        description:
          'Everything was well organized, and the staff handled requests professionally without delays.',
        shortDescription: 'Well organized and professional.',
        star: 3.5,
      },
      {
        reviewer: 'Tunde A.',
        date: 'Feb 2025',
        description:
          'The environment was neat and comfortable, making the entire experience stress-free.',
        shortDescription: 'Neat and comfortable.',
        star: 3.1,
      },
      {
        reviewer: 'Zainab M.',
        date: 'Dec 2024',
        description:
          'Service delivery was smooth, and communication throughout the process was very clear.',
        shortDescription: 'Clear and smooth process.',
        star: 1.6,
      },
      {
        reviewer: 'Emeka C.',
        date: 'Oct 2024',
        description:
          'A dependable service with courteous staff who pay attention to customer needs.',
        shortDescription: 'Dependable and courteous.',
        star: 2.3,
      },
    ],
    description:
      'Wake up to breathtaking sea views in this spacious suite. Featuring modern décor, a plush king-size bed, and a private balcony, it’s perfect for a luxurious coastal escape.',
  },

  {
    id: `${getRandomKey()}`,
    image: require('../assets/img7.webp'),
    title: 'Forest Hideaway',
    subtitle: 'Woodland Comfort',
    reviewCount: 119,
    category: 'Recently Booked',
    whatThisPlaceOffers: [
      {
        title: 'Entertainment',
        description: '55" Smart TV',
        materialIconName: 'tv',
      },
      {
        title: 'AC',
        description: 'Climate control',
        materialIconName: 'ac-unit',
      },
      {
        title: 'Security',
        description: '24/7 monitoring',
        materialIconName: 'security',
      },
      {
        title: 'Kitchen',
        description: 'Fully equipped',
        materialIconName: 'kitchen',
      },
      {
        title: 'Wifi',
        description: 'Hight-Speed Internet',
        materialIconName: 'wifi',
      },
      {
        title: 'Dedicated Workspace',
        description: 'Work from anywhere',
        materialIconName: 'work',
      },
      {
        title: 'pool',
        description: 'Infinity Pool',
        materialIconName: 'pool',
      },
      {
        title: 'Hot Tub',
        description: 'Private spa',
        materialIconName: 'hot-tub',
      },
    ],
    price: '180',
    rate: '4.9',
    reviews: [
      {
        reviewer: 'Chiamaka N.',
        date: 'Jun 2025',
        description:
          'The service quality was impressive, and the staff was always ready to help. A great place for both relaxation and business.',
        shortDescription: 'Excellent service and convenience.',
        star: 3.4,
      },
      {
        reviewer: 'Adebola T.',
        date: 'Mar 2025',
        description:
          'A calm and professional environment with reliable services. Everything was handled efficiently and on time.',
        shortDescription: 'Professional and reliable.',
        star: 4,
      },
      {
        reviewer: 'Samuel O.',
        date: 'Jan 2025',
        description:
          'Customer support was polite and attentive. The overall experience exceeded my expectations.',
        shortDescription: 'Great customer support.',
        star: 3,
      },
      {
        reviewer: 'Fatima A.',
        date: 'Nov 2024',
        description:
          'The atmosphere was welcoming, and the service delivery was smooth from start to finish.',
        shortDescription: 'Welcoming and smooth service.',
        star: 2,
      },
      {
        reviewer: 'Ibrahim K.',
        date: 'Sep 2024',
        description:
          'Efficient service with a strong attention to detail. I would confidently recommend this place to others.',
        shortDescription: 'Efficient and detailed.',
        star: 4.3,
      },
    ],
    description:
      'Designed for comfort and style, this executive room offers a king-size bed, sleek furnishings, and a work desk. Ideal for business travelers seeking relaxation after a busy day.',
  },
];
