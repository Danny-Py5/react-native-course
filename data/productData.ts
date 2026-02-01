import { ProductCardDataType } from '../components/ScrollViewCard';

/* 
  id: number;
  title: string;
  image: any;
  subtitle: string;
  price: string;
  rate: string;
  reviews: number;
  description: string;
  whatThisPlaceOffers: WhatThisPlaceOffers[];
*/

export const cardData: ProductCardDataType[] = [
  {
    id: 1,
    image: require('../assets/OIP.webp'),
    title: 'Emerolda De Hotel',
    subtitle: 'Ports Comfort',
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
    reviews: 124,
    description:
      'Experience unparalleled luxury in this breathtaking beachfront villa. Nestled on pristine white sand beaches with crystal-clear turquoise waters, this exclusive property offers the perfect escape for those seeking ultimate tranquility and sophistication.',
  },
  {
    id: 2,
    image: require('../assets/img2.webp'),
    title: 'Grand Royale',
    subtitle: 'Correct Comfort',
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
    reviews: 124,
    description:
      'Experience unparalleled luxury in this breathtaking beachfront villa. Nestled on pristine white sand beaches with crystal-clear turquoise waters, this exclusive property offers the perfect escape for those seeking ultimate tranquility and sophistication.',
  },
  {
    id: 3,
    image: require('../assets/img3.webp'),
    title: 'Sea View Resort',
    subtitle: 'Ocean Comfort',
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
    reviews: 124,
    description:
      'Indulge in ultimate luxury in this expansive suite, complete with a separate living area, premium furnishings, and panoramic city or ocean views. Perfect for VIP guests.',
  },
  {
    id: 4,
    image: require('../assets/img4.webp'),
    title: 'Ocean Breeze',
    subtitle: 'Coastal Comfort',
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
    reviews: 124,
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
    reviews: 124,
    description:
      'Experience unparalleled luxury in this breathtaking beachfront villa. Nestled on pristine white sand beaches with crystal-clear turquoise waters, this exclusive property offers the perfect escape for those seeking ultimate tranquility and sophistication.',
  },
  {
    id: 2,
    image: require('../assets/img6.webp'),
    title: 'Desert Oasis',
    subtitle: 'Sandy Comfort',
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
    reviews: 124,
    description:
      'Wake up to breathtaking sea views in this spacious suite. Featuring modern décor, a plush king-size bed, and a private balcony, it’s perfect for a luxurious coastal escape.',
  },

  {
    id: 3,
    image: require('../assets/img7.webp'),
    title: 'Forest Hideaway',
    subtitle: 'Woodland Comfort',
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
    reviews: 124,
    description:
      'Designed for comfort and style, this executive room offers a king-size bed, sleek furnishings, and a work desk. Ideal for business travelers seeking relaxation after a busy day.',
  },
];
