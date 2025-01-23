// CMF by Nothing
import cmfByNothing42dBANC from "../assets/images/CMF-by-Nothing-42-dB-ANC.png";
import cmfByNothingBudsPro from "../assets/images/CMF-by-Nothing-Buds-Pro.png";
import cmfByNothingWatchPro from "../assets/images/CMF-by-Nothing-Watch-Pro.png";
import cmfByNothingWatchPro2 from "../assets/images/CMF-by-Nothing-Watch-Pro-2.png";
import cmfByNothingNeckbandPro from "../assets/images/CMF-by-Nothing-Neckband-Pro.png";

// boAt
import boAtRockerz450 from "../assets/images/boAt-rockerz-450.png";
import boAtRockerz550FM from "../assets/images/boAt-Rockerz-550-FM.png";
import boAtRockerz518 from "../assets/images/boAt-Rockerz-518.png";
import boAtRockerz330 from "../assets/images/boAt-Rockerz-330.png";
import boAtRockerz255F from "../assets/images/boAt-Rockerz-255F.png";
import boAtAirdopes161Pro from "../assets/images/boAt-Airdopes-161-pro.png";
import boAtAirdopes131 from "../assets/images/boAt-Airdopes-131.png";
import boAtAirdopesSupreme from "../assets/images/boAt-Airdopes-Supreme.png";
import boAtWaveSigma3 from "../assets/images/boAt-Wave-Sigma-3.png";
import boAtWaveFury from "../assets/images/boAt-Wave-Fury.png";
import boAtBassheads100 from "../assets/images/boAt-Bassheads-100.png";

// JBL
import jblTune770NC from "../assets/images/JBL-Tune-770NC.png";
import jblTune520BT from "../assets/images/JBL-Tune-520BT.png";
import jblT110BT from "../assets/images/JBL-T110BT.png";
import jblC150SI from "../assets/images/JBL-C150SI.png";
import jblC50HI from "../assets/images/JBL-C50HI.png";
import jblTune235NC from "../assets/images/JBL-Tune-235NC.png";

// Samsung
import samsungGalaxyBuds2 from "../assets/images/SAMSUNG-Galaxy-Buds2.png";
import samsungGalaxyFit3 from "../assets/images/SAMSUNG-Galaxy-Fit3.png";

// Sony
import sonyWHXB910N from "../assets/images/SONY-WH-XB910N.png";
import sonyWFC500 from "../assets/images/SONY-WF-C500.png";
import sonyXB55AP from "../assets/images/SONY-XB55AP.png";
import sonyWIXB400 from "../assets/images/SONY-WI-XB400.png";

export const productsData = [
  {
    id: 1,
    category: "True wireless Earbuds",
    name: "CMF by Nothing 42 dB ANC",
    imagePath: cmfByNothing42dBANC,
    originalPrice: 2999,
    discountedPrice: 2499,
    brand: "CMF by Nothing",
    discountPercentage: 16,
    ratings: { average: 4.4, count: 200 },
    reviews: [
      {
        userName: "Manish Kumar",
        comment: "Amazing sound quality!",
        rating: 5,
        date: "2023-06-01",
      },
      {
        userName: "Sanjeet Malhotra",
        comment: "Great noise cancellation.",
        rating: 4.3,
        date: "2023-06-15",
      },
    ],
  },
  {
    id: 2,
    category: "True wireless Earbuds",
    name: "CMF by Nothing Buds Pro",
    imagePath: cmfByNothingBudsPro,
    originalPrice: 4499,
    discountedPrice: 2499,
    brand: "CMF by Nothing",
    discountPercentage: 44,
    ratings: { average: 4.6, count: 150 },
    reviews: [
      {
        userName: "Ali Imam",
        comment: "Excellent battery life!",
        rating: 5,
        date: "2023-05-20",
      },
      {
        userName: "Pushkar Adhikari",
        comment: "Very comfortable to wear.",
        rating: 4,
        date: "2023-05-25",
      },
    ],
  },
  {
    id: 3,
    category: "Smart watches",
    name: "CMF by Nothing Watch Pro",
    imagePath: cmfByNothingWatchPro,
    originalPrice: 5999,
    discountedPrice: 2999,
    brand: "CMF by Nothing",
    discountPercentage: 50,
    ratings: { average: 4.7, count: 220 },
    reviews: [
      {
        userName: "Abhishek Singh",
        comment: "Feature-packed!",
        rating: 5,
        date: "2023-06-20",
      },
      {
        userName: "Mohit Singh",
        comment: "Great design.",
        rating: 4,
        date: "2023-06-22",
      },
    ],
  },
  {
    id: 4,
    category: "Smart watches",
    name: "CMF by Nothing Watch Pro 2",
    imagePath: cmfByNothingWatchPro2,
    originalPrice: 6499,
    discountedPrice: 4999,
    brand: "CMF by Nothing",
    discountPercentage: 23,
    ratings: { average: 4.5, count: 180 },
    reviews: [
      {
        userName: "Sanjeet Malhotra",
        comment: "Stylish and functional.",
        rating: 4,
        date: "2023-06-30",
      },
      {
        userName: "Pushkar Adhikari",
        comment: "Nice features for the price.",
        rating: 4,
        date: "2023-07-02",
      },
    ],
  },
  {
    id: 5,
    category: "Neckbands",
    name: "CMF by Nothing Neckband Pro",
    imagePath: cmfByNothingNeckbandPro,
    originalPrice: 2499,
    discountedPrice: 1799,
    brand: "CMF by Nothing",
    discountPercentage: 28,
    ratings: { average: 4.3, count: 160 },
    reviews: [
      {
        userName: "Manish Kumar",
        comment: "Good sound and comfort.",
        rating: 4,
        date: "2023-07-10",
      },
      {
        userName: "Ali Imam",
        comment: "Decent ANC performance.",
        rating: 4,
        date: "2023-07-15",
      },
    ],
  },
  {
    id: 6,
    category: "Headphones",
    name: "boAt Rockerz 450",
    imagePath: boAtRockerz450,
    originalPrice: 3999,
    discountedPrice: 1899,
    brand: "boAt",
    discountPercentage: 52,
    ratings: { average: 4.4, count: 300 },
    reviews: [
      {
        userName: "Abhishek Singh",
        comment: "Great sound quality!",
        rating: 5,
        date: "2023-07-01",
      },
      {
        userName: "Mohit Singh",
        comment: "Good battery life.",
        rating: 4,
        date: "2023-07-03",
      },
    ],
  },
  {
    id: 7,
    category: "Headphones",
    name: "boAt Rockerz 550 FM",
    imagePath: boAtRockerz550FM,
    originalPrice: 4999,
    discountedPrice: 2999,
    brand: "boAt",
    discountPercentage: 40,
    ratings: { average: 4.3, count: 150 },
    reviews: [
      {
        userName: "Sanjeet Malhotra",
        comment: "Good sound for the price.",
        rating: 4,
        date: "2023-07-10",
      },
      {
        userName: "Pushkar Adhikari",
        comment: "Decent battery life.",
        rating: 4,
        date: "2023-07-15",
      },
    ],
  },
  {
    id: 8,
    category: "Headphones",
    name: "boAt Rockerz 518",
    imagePath: boAtRockerz518,
    originalPrice: 3990,
    discountedPrice: 1599,
    brand: "boAt",
    discountPercentage: 60,
    ratings: { average: 4.2, count: 180 },
    reviews: [
      {
        userName: "Manish Kumar",
        comment: "Good quality.",
        rating: 4,
        date: "2023-07-12",
      },
      {
        userName: "Ali Imam",
        comment: "Great for gaming!",
        rating: 5,
        date: "2023-07-14",
      },
    ],
  },
  {
    id: 9,
    category: "Neckbands",
    name: "boAt Rockerz 330",
    imagePath: boAtRockerz330,
    originalPrice: 2990,
    discountedPrice: 1299,
    brand: "boAt",
    discountPercentage: 56,
    ratings: { average: 4.1, count: 190 },
    reviews: [
      {
        userName: "Abhishek Singh",
        comment: "Very comfortable.",
        rating: 4,
        date: "2023-07-15",
      },
      {
        userName: "Mohit Singh",
        comment: "Good for workouts.",
        rating: 4,
        date: "2023-07-18",
      },
    ],
  },
  {
    id: 10,
    category: "Neckbands",
    name: "boAt Rockerz 255F",
    imagePath: boAtRockerz255F,
    originalPrice: 2990,
    discountedPrice: 1299,
    brand: "boAt",
    discountPercentage: 56,
    ratings: { average: 4.2, count: 160 },
    reviews: [
      {
        userName: "Abhishek Singh",
        comment: "Good quality neckband.",
        rating: 4,
        date: "2023-08-01",
      },
      {
        userName: "Mohit Singh",
        comment: "Comfortable fit.",
        rating: 4,
        date: "2023-08-02",
      },
    ],
  },
  {
    id: 11,
    category: "True wireless Earbuds",
    name: "boAt Airdopes 161 Pro",
    imagePath: boAtAirdopes161Pro,
    originalPrice: 4990,
    discountedPrice: 1299,
    brand: "boAt",
    discountPercentage: 74,
    ratings: { average: 4.6, count: 230 },
    reviews: [
      {
        userName: "Manish Kumar",
        comment: "Great performance!",
        rating: 5,
        date: "2023-07-02",
      },
      {
        userName: "Ali Imam",
        comment: "Very lightweight and easy to use.",
        rating: 4,
        date: "2023-07-15",
      },
    ],
  },
  {
    id: 12,
    category: "True wireless Earbuds",
    name: "boAt Airdopes 131",
    imagePath: boAtAirdopes131,
    originalPrice: 2990,
    discountedPrice: 999,
    brand: "boAt",
    discountPercentage: 67,
    ratings: { average: 4.0, count: 220 },
    reviews: [
      {
        userName: "Sanjeet Malhotra",
        comment: "Decent sound.",
        rating: 4,
        date: "2023-08-02",
      },
      {
        userName: "Pushkar Adhikari",
        comment: "Battery could last longer.",
        rating: 3,
        date: "2023-08-03",
      },
    ],
  },
  {
    id: 13,
    category: "True wireless Earbuds",
    name: "boAt Airdopes Supreme",
    imagePath: boAtAirdopesSupreme,
    originalPrice: 5999,
    discountedPrice: 1599,
    brand: "boAt",
    discountPercentage: 73,
    ratings: { average: 4.8, count: 200 },
    reviews: [
      {
        userName: "Abhishek Singh",
        comment: "Best earbuds for the price!",
        rating: 5,
        date: "2023-08-05",
      },
      {
        userName: "Mohit Singh",
        comment: "Great sound quality!",
        rating: 4,
        date: "2023-08-10",
      },
    ],
  },
  {
    id: 14,
    category: "Smart watches",
    name: "boAt Wave Sigma 3",
    imagePath: boAtWaveSigma3,
    originalPrice: 8999,
    discountedPrice: 1499,
    brand: "boAt",
    discountPercentage: 83,
    ratings: { average: 4.4, count: 150 },
    reviews: [
      {
        userName: "Sanjeet Malhotra",
        comment: "Value for money!",
        rating: 5,
        date: "2023-08-10",
      },
      {
        userName: "Pushkar Adhikari",
        comment: "Good for fitness tracking.",
        rating: 4,
        date: "2023-08-15",
      },
    ],
  },
  {
    id: 15,
    category: "Smart watches",
    name: "boAt Wave Fury",
    imagePath: boAtWaveFury,
    originalPrice: 6999,
    discountedPrice: 1399,
    brand: "boAt",
    discountPercentage: 80,
    ratings: { average: 4.5, count: 220 },
    reviews: [
      {
        userName: "Manish Kumar",
        comment: "Good features for the price.",
        rating: 4,
        date: "2023-08-01",
      },
      {
        userName: "Ali Imam",
        comment: "Stylish design.",
        rating: 5,
        date: "2023-08-05",
      },
    ],
  },
  {
    id: 16,
    category: "Wired Earphones",
    name: "boAt Bassheads 100",
    imagePath: boAtBassheads100,
    originalPrice: 999,
    discountedPrice: 399,
    brand: "boAt",
    discountPercentage: 60,
    ratings: { average: 4.1, count: 180 },
    reviews: [
      {
        userName: "Abhishek Singh",
        comment: "Great budget earphones.",
        rating: 4,
        date: "2023-08-02",
      },
      {
        userName: "Mohit Singh",
        comment: "Sound quality is impressive.",
        rating: 5,
        date: "2023-08-05",
      },
    ],
  },
  {
    id: 17,
    category: "Headphones",
    name: "JBL Tune 770NC",
    imagePath: jblTune770NC,
    originalPrice: 9999,
    discountedPrice: 5499,
    brand: "JBL",
    discountPercentage: 45,
    ratings: { average: 4.5, count: 210 },
    reviews: [
      {
        userName: "Sanjeet Malhotra",
        comment: "Excellent noise cancellation.",
        rating: 5,
        date: "2023-08-10",
      },
      {
        userName: "Ali Imam",
        comment: "Very comfortable to wear.",
        rating: 4,
        date: "2023-08-15",
      },
    ],
  },
  {
    id: 18,
    category: "Headphones",
    name: "JBL Tune 520BT",
    imagePath: jblTune520BT,
    originalPrice: 6999,
    discountedPrice: 4499,
    brand: "JBL",
    discountPercentage: 36,
    ratings: { average: 4.4, count: 180 },
    reviews: [
      {
        userName: "Manish Kumar",
        comment: "Good quality for the price.",
        rating: 4,
        date: "2023-08-12",
      },
      {
        userName: "Abhishek Singh",
        comment: "Satisfactory sound quality.",
        rating: 4,
        date: "2023-08-15",
      },
    ],
  },
  {
    id: 19,
    category: "Neckbands",
    name: "JBL T110BT",
    imagePath: jblT110BT,
    originalPrice: 2499,
    discountedPrice: 1749,
    brand: "JBL",
    discountPercentage: 30,
    ratings: { average: 4.3, count: 200 },
    reviews: [
      {
        userName: "Mohit Singh",
        comment: "Solid build quality.",
        rating: 4,
        date: "2023-08-10",
      },
      {
        userName: "Pushkar Adhikari",
        comment: "Good bass.",
        rating: 4,
        date: "2023-08-12",
      },
    ],
  },
  {
    id: 20,
    category: "Wired Earphones",
    name: "JBL C150SI",
    imagePath: jblC150SI,
    originalPrice: 1399,
    discountedPrice: 799,
    brand: "JBL",
    discountPercentage: 43,
    ratings: { average: 4.2, count: 160 },
    reviews: [
      {
        userName: "Abhishek Singh",
        comment: "Good sound for the price.",
        rating: 4,
        date: "2023-08-14",
      },
      {
        userName: "Sanjeet Malhotra",
        comment: "Nice earphones.",
        rating: 4,
        date: "2023-08-16",
      },
    ],
  },
  {
    id: 21,
    category: "Wired Earphones",
    name: "JBL C50HI",
    imagePath: jblC50HI,
    originalPrice: 699,
    discountedPrice: 449,
    brand: "JBL",
    discountPercentage: 36,
    ratings: { average: 4.3, count: 170 },
    reviews: [
      {
        userName: "Manish Kumar",
        comment: "Nice sound quality.",
        rating: 4,
        date: "2023-08-17",
      },
      {
        userName: "Ali Imam",
        comment: "Great for casual listening.",
        rating: 4,
        date: "2023-08-20",
      },
    ],
  },
  {
    id: 22,
    category: "True wireless Earbuds",
    name: "JBL Tune 235NC",
    imagePath: jblTune235NC,
    originalPrice: 7999,
    discountedPrice: 3299,
    brand: "JBL",
    discountPercentage: 59,
    ratings: { average: 4.6, count: 240 },
    reviews: [
      {
        userName: "Sanjeet Malhotra",
        comment: "Amazing performance!",
        rating: 5,
        date: "2023-08-25",
      },
      {
        userName: "Pushkar Adhikari",
        comment: "Good for workouts.",
        rating: 4,
        date: "2023-08-27",
      },
    ],
  },
  {
    id: 23,
    category: "True wireless Earbuds",
    name: "SAMSUNG Galaxy Buds 2",
    imagePath: samsungGalaxyBuds2,
    originalPrice: 13990,
    discountedPrice: 8199,
    brand: "SAMSUNG",
    discountPercentage: 41,
    ratings: { average: 4.5, count: 210 },
    reviews: [
      {
        userName: "Abhishek Singh",
        comment: "Great sound quality!",
        rating: 5,
        date: "2023-09-01",
      },
      {
        userName: "Mohit Singh",
        comment: "Very comfortable.",
        rating: 4,
        date: "2023-09-03",
      },
    ],
  },
  {
    id: 24,
    category: "Smart watches",
    name: "SAMSUNG Galaxy Fit3",
    imagePath: samsungGalaxyFit3,
    originalPrice: 9999,
    discountedPrice: 3790,
    brand: "SAMSUNG",
    discountPercentage: 62,
    ratings: { average: 4.7, count: 210 },
    reviews: [
      {
        userName: "Sanjeet Malhotra",
        comment: "Great value for money.",
        rating: 5,
        date: "2023-09-10",
      },
      {
        userName: "Pushkar Adhikari",
        comment: "Good features.",
        rating: 4,
        date: "2023-09-12",
      },
    ],
  },
  {
    id: 25,
    category: "Headphones",
    name: "SONY WH-XB910N",
    imagePath: sonyWHXB910N,
    originalPrice: 19990,
    discountedPrice: 14990,
    brand: "SONY",
    discountPercentage: 25,
    ratings: { average: 4.8, count: 130 },
    reviews: [
      {
        userName: "Manish Kumar",
        comment: "Excellent sound!",
        rating: 5,
        date: "2023-09-15",
      },
      {
        userName: "Ali Imam",
        comment: "Comfortable for long use.",
        rating: 4,
        date: "2023-09-17",
      },
    ],
  },

  {
    id: 26,
    category: "Neckbands",
    name: "SONY WI-XB400",
    imagePath: sonyWIXB400,
    originalPrice: 4990,
    discountedPrice: 2799,
    brand: "SONY",
    discountPercentage: 44,
    ratings: { average: 4.6, count: 220 },
    reviews: [
      {
        userName: "Abhishek Singh",
        comment: "Good sound quality.",
        rating: 4,
        date: "2023-10-01",
      },
      {
        userName: "Ali Imam",
        comment: "Comfortable to wear.",
        rating: 5,
        date: "2023-10-02",
      },
    ],
  },
  {
    id: 27,
    category: "True wireless Earbuds",
    name: "SONY WF-C500",
    imagePath: sonyWFC500,
    originalPrice: 8990,
    discountedPrice: 4490,
    brand: "SONY",
    discountPercentage: 50,
    ratings: { average: 4.5, count: 120 },
    reviews: [
      {
        userName: "Mohit Singh",
        comment: "Great sound and very comfortable!",
        rating: 5,
        date: "2023-08-12",
      },
      {
        userName: "Abhishek Singh",
        comment: "Decent battery life.",
        rating: 4,
        date: "2023-08-20",
      },
    ],
  },
  {
    id: 28,
    category: "Wired Earphones",
    name: "SONY XB55AP",
    imagePath: sonyXB55AP,
    originalPrice: 2490,
    discountedPrice: 1949,
    brand: "SONY",
    discountPercentage: 22,
    ratings: { average: 4.3, count: 200 },
    reviews: [
      {
        userName: "Pushkar Adhikari",
        comment: "Good sound quality for the price.",
        rating: 4,
        date: "2023-07-15",
      },
      {
        userName: "Sanjeet Malhotra",
        comment: "Comfortable and stylish.",
        rating: 5,
        date: "2023-07-25",
      },
    ],
  },
];
