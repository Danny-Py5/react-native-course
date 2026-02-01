import { ProductCardDataType } from '../components/ScrollViewCard';

/* 
 review{
 reviewer: "", 
 count: 245, 
 date: "Feb 2026"
 description: "....", 
 shortDescription: "...",
 star: 4.5
}]{
    reviewer: string;
    date: string;
    count: number;
    shortDescription: string;
    description: string;
    star?: number];
  };
*/

export const cardData: ProductCardDataType[] = [
  {
    id: 1,
    image: require('../assets/OIP.webp'),
    title: 'Emerolda De Hotel',
    subtitle: 'Ports Comfort',
    reviewCount: 182,
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
        star: 4.5,
      },
    ],
    description:
      'Experience unparalleled luxury in this breathtaking beachfront villa. Nestled on pristine white sand beaches with crystal-clear turquoise waters, this exclusive property offers the perfect escape for those seeking ultimate tranquility and sophistication.',
  },
  {
    id: 2,
    image: require('../assets/img2.webp'),
    title: 'Grand Royale',
    subtitle: 'Correct Comfort',
    reviewCount: 127,
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
        reviewer: 'Daniel K.',

        date: 'Jan 2026',
        description:
          'From check-in to check-out, everything was seamless. The staff was courteous, and the amenities exceeded our expectations.',
        shortDescription: 'Seamless service and premium comfort.',
        star: 4.7,
      },
    ],
    description:
      'Experience unparalleled luxury in this breathtaking beachfront villa. Nestled on pristine white sand beaches with crystal-clear turquoise waters, this exclusive property offers the perfect escape for those seeking ultimate tranquility and sophistication.',
  },
  {
    id: 3,
    image: require('../assets/img3.webp'),
    title: 'Sea View Resort',
    subtitle: 'Ocean Comfort',
    reviewCount: 123,
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
        star: 4.6,
      },
    ],
    description:
      'Indulge in ultimate luxury in this expansive suite, complete with a separate living area, premium furnishings, and panoramic city or ocean views. Perfect for VIP guests.',
  },
  {
    id: 4,
    image: require('../assets/img4.webp'),
    title: 'Ocean Breeze',
    subtitle: 'Coastal Comfort',
    reviewCount: 345,
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
        star: 4.4,
      },
      {
        reviewer: 'Michael T.',
        date: 'Nov 2025',
        description:
          'Excellent location with top-notch facilities. The food was delicious, and the customer service was outstanding.',
        shortDescription: 'Great location and outstanding service.',
        star: 4.4,
      },
    ],
    description:
      'Enjoy a blend of elegance and coziness in this deluxe double room. Equipped with twin beds, ambient lighting, and contemporary amenities for a restful stay.',
  },
];
export const recentlyBookedData: ProductCardDataType[] = [
  {
    id: 1,
    image: require('../assets/img5.jpg'),
    title: 'Mountain Retreat',
    subtitle: 'Hilltop Comfort',
    reviewCount: 100,
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
        reviewer: 'James O.',

        date: 'Sep 2025',
        description:
          'Comfortable rooms, friendly staff, and excellent amenities. This hotel strikes the perfect balance between comfort and luxury.',
        shortDescription: 'Comfort meets luxury perfectly.',
        star: 4.5,
      },
    ],
    description:
      'Experience unparalleled luxury in this breathtaking beachfront villa. Nestled on pristine white sand beaches with crystal-clear turquoise waters, this exclusive property offers the perfect escape for those seeking ultimate tranquility and sophistication.',
  },
  {
    id: 2,
    image: require('../assets/img6.webp'),
    title: 'Desert Oasis',
    subtitle: 'Sandy Comfort',
    reviewCount: 231,
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
    price: '200',
    rate: '4.6',
    reviews: [
      {
        reviewer: 'Omar H.',

        date: 'Jul 2025',
        description:
          'Modern, stylish, and extremely comfortable. The hotel delivered a premium experience worth every moment.',
        shortDescription: 'Modern style and premium comfort.',
        star: 4.7,
      },
    ],
    description:
      'Wake up to breathtaking sea views in this spacious suite. Featuring modern décor, a plush king-size bed, and a private balcony, it’s perfect for a luxurious coastal escape.',
  },

  {
    id: 3,
    image: require('../assets/img7.webp'),
    title: 'Forest Hideaway',
    subtitle: 'Woodland Comfort',
    reviewCount: 119,
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
        star: 4.4,
      },
    ],
    description:
      'Designed for comfort and style, this executive room offers a king-size bed, sleek furnishings, and a work desk. Ideal for business travelers seeking relaxation after a busy day.',
  },
];
