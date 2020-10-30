const productData = [
  {
    name: "Diapers",
    priority: 1,
    remarks: "Keep your little one dry and cosy\nTip: Get ones with indicator line on the outside so you are not left guessing",
    price: 1,
    thumbsUp: 48,
    thumbsDown: 53,
    image: "https://media.istockphoto.com/photos/cute-baby-using-diapers-picture-id989447660",
    slug: "diapers"
  },
  {
    name: "Nappy Cream",
    priority: 1,
    remarks: "A must have to prevent the itchy rashes on your LO's soft skin",
    price: 10,
    thumbsUp: 101,
    thumbsDown: 6,
    image: "https://media.istockphoto.com/photos/mother-is-changing-diapers-to-her-little-baby-picture-id137475340",
    slug: "nappy-cream"
  },
  {
    name: "Changing Mat",
    priority: 1,
    remarks: "Give your little one a comfy padded surface to lie on when being changed.",
    price: 30,
    thumbsUp: 166,
    thumbsDown: 2,
    image: "https://cdn.pixabay.com/photo/2017/04/24/04/32/baby-2255477_1280.jpg",
    slug: "changing-mat"
  },
  {
    name: "Changing Mat Cover",
    priority: 1,
    remarks: "",
    price: 12,
    thumbsUp: 172,
    thumbsDown: 55,
    image: "",
    slug: "changing-mat-cover"
  },
  {
    name: "Cloth Diapers",
    priority: 1,
    remarks: "Switch to pure cotton cloth diapers for additional comfort. Bonus, they are also environmentally friendly!!",
    price: 19,
    thumbsUp: 175,
    thumbsDown: 62,
    image: "https://cdn.pixabay.com/photo/2012/03/04/01/02/baby-22199_1280.jpg",
    slug: "cloth-diapers"
  },
  {
    name: "Baby Wipes",
    priority: 1,
    remarks: "",
    price: 42,
    thumbsUp: 199,
    thumbsDown: 56,
    image: "",
    slug: "baby-wipes"
  },
  {
    name: "Diaper Bag",
    priority: 1,
    remarks: "Travel easy with all the things your baby may need packed in one sassy comfortable bag",
    price: 47,
    thumbsUp: 102,
    thumbsDown: 14,
    image: "https://media.istockphoto.com/photos/diaper-bag-essentials-picture-id508755415",
    slug: "diaper-bag"
  },
  {
    name: "Cotton Balls",
    priority: 1,
    remarks: "",
    price: 74,
    thumbsUp: 158,
    thumbsDown: 8,
    image: "",
    slug: "cotton-balls"
  },
  {
    name: "Hand Sanitizer",
    priority: 1,
    remarks: "Keep those germs away!!",
    price: 17,
    thumbsUp: 121,
    thumbsDown: 0,
    image: "",
    slug: "hand-sanitizer"
  },
  {
    name: "Small Thermos",
    priority: 1,
    remarks: "For hot boiled water, hot water thermos should always be in the room along with your diaper bag",
    price: 53,
    thumbsUp: 51,
    thumbsDown: 0,
    image: "",
    slug: "small-thermos"
  },
  {
    name: "Bottles",
    priority: 1,
    remarks: "Initially recommended 120ml bottle as baby doesn’t take too much. Remember to get the slow flowing nipple for the early days",
    price: 65,
    thumbsUp: 153,
    thumbsDown: 20,
    image: "",
    slug: "bottles"
  },
  {
    name: "Bottle Steriliser",
    priority: 1,
    remarks: "",
    price: 42,
    thumbsUp: 95,
    thumbsDown: 15,
    image: "",
    slug: "bottle-steriliser"
  },
  {
    name: "Bottles And Nipple Brush",
    priority: 1,
    remarks: "Born free twister brush set to clean bottles and nipples",
    price: 36,
    thumbsUp: 101,
    thumbsDown: 15,
    image: "",
    slug: "bottles-and-nipple-brush"
  },
  {
    name: "Nipple Cream",
    priority: 1,
    remarks: "Lanisoh (start applying on week 39)",
    price: 63,
    thumbsUp: 49,
    thumbsDown: 50,
    image: "",
    slug: "nipple-cream"
  },
  {
    name: "Breast Pump",
    priority: 1,
    remarks: "Spectra",
    price: 47,
    thumbsUp: 42,
    thumbsDown: 52,
    image: "",
    slug: "breast-pump"
  },
  {
    name: "Disposable Breast Pads",
    priority: 1,
    remarks: "recommended from pigeon brand in case you leak as they have cotton lining, avent, mothercare ultrathin",
    price: 40,
    thumbsUp: 90,
    thumbsDown: 5,
    image: "",
    slug: "disposable-breast-pads"
  },
  {
    name: "Bottle And Nipple Cleanser",
    priority: 1,
    remarks: "very important – fairy baby",
    price: 92,
    thumbsUp: 92,
    thumbsDown: 60,
    image: "",
    slug: "bottle-and-nipple-cleanser"
  },
  {
    name: "Feeding Cloth",
    priority: 1,
    remarks: "To give you the privacy you need to breastfeed your baby in peace. \nTips: Get one with a stiff neckline to make it easier for you to watch over the little one",
    price: 42,
    thumbsUp: 30,
    thumbsDown: 56,
    image: "",
    slug: "feeding-cloth"
  },
  {
    name: "Bottle Dish Rack",
    priority: 2,
    remarks: "Double layer",
    price: 90,
    thumbsUp: 79,
    thumbsDown: 39,
    image: "",
    slug: "bottle-dish-rack"
  },
  {
    name: "Pacifier For Emergencies",
    priority: 2,
    remarks: "",
    price: 70,
    thumbsUp: 108,
    thumbsDown: 29,
    image: "",
    slug: "pacifier-for-emergencies"
  },
  {
    name: "Baby Bath Tub",
    priority: 1,
    remarks: "plastic infant tub with top and tall for easily bathing the baby",
    price: 25,
    thumbsUp: 113,
    thumbsDown: 63,
    image: "",
    slug: "baby-bath-tub"
  },
  {
    name: "Baby Bath Hooded Towels",
    priority: 1,
    remarks: "Should be 100% cotton",
    price: 47,
    thumbsUp: 149,
    thumbsDown: 60,
    image: "",
    slug: "baby-bath-hooded-towels"
  },
  {
    name: "12 Small Washcloths",
    priority: 1,
    remarks: "",
    price: 68,
    thumbsUp: 26,
    thumbsDown: 27,
    image: "",
    slug: "12-small-washcloths"
  },
  {
    name: "Separate Mat For Massage",
    priority: 1,
    remarks: "",
    price: 60,
    thumbsUp: 77,
    thumbsDown: 31,
    image: "",
    slug: "separate-mat-for-massage"
  },
  {
    name: "Shampoo",
    priority: 1,
    remarks: "Pigeon",
    price: 23,
    thumbsUp: 159,
    thumbsDown: 63,
    image: "",
    slug: "shampoo"
  },
  {
    name: "Body Wash",
    priority: 1,
    remarks: "A gentle cleanser for the soft skin of your LO",
    price: 15,
    thumbsUp: 60,
    thumbsDown: 2,
    image: "",
    slug: "body-wash"
  },
  {
    name: "Lotion",
    priority: 1,
    remarks: "Pigeon",
    price: 71,
    thumbsUp: 25,
    thumbsDown: 62,
    image: "",
    slug: "lotion"
  },
  {
    name: "Grooming Set",
    priority: 1,
    remarks: "which is ergonomic (includes baby hairbrush, comb, scissors, nail cutter)",
    price: 51,
    thumbsUp: 141,
    thumbsDown: 58,
    image: "",
    slug: "grooming-set"
  },
  {
    name: "Baby Bath Bed",
    priority: 2,
    remarks: "",
    price: 52,
    thumbsUp: 177,
    thumbsDown: 48,
    image: "",
    slug: "baby-bath-bed"
  },
  {
    name: "Nasal Aspirator",
    priority: 2,
    remarks: "",
    price: 61,
    thumbsUp: 43,
    thumbsDown: 57,
    image: "",
    slug: "nasal-aspirator"
  },
  {
    name: "Cotton Buds",
    priority: 2,
    remarks: "",
    price: 57,
    thumbsUp: 126,
    thumbsDown: 19,
    image: "",
    slug: "cotton-buds"
  },
  {
    name: "Cotbed",
    priority: 1,
    remarks: "Elise cot bed",
    price: 80,
    thumbsUp: 189,
    thumbsDown: 25,
    image: "",
    slug: "cotbed"
  },
  {
    name: "Cotbed Mattress",
    priority: 1,
    remarks: "King Koil",
    price: 43,
    thumbsUp: 49,
    thumbsDown: 28,
    image: "",
    slug: "cotbed-mattress"
  },
  {
    name: "Cotbed Mattress Protector",
    priority: 1,
    remarks: "High absorbant/ waterproof but comfortables\nGet 2, so easy to switch and wash",
    price: 65,
    thumbsUp: 184,
    thumbsDown: 25,
    image: "",
    slug: "cotbed-mattress-protector"
  },
  {
    name: "Cotbed Fitted Sheets",
    priority: 1,
    remarks: "4 sets, white and print",
    price: 10,
    thumbsUp: 62,
    thumbsDown: 35,
    image: "",
    slug: "cotbed-fitted-sheets"
  },
  {
    name: "Baby Wardrobe",
    priority: 1,
    remarks: "Use the guest room drawers- Need to re arrange the items",
    price: 65,
    thumbsUp: 101,
    thumbsDown: 8,
    image: "",
    slug: "baby-wardrobe"
  },
  {
    name: "Senori Pillow",
    priority: 1,
    remarks: "",
    price: 20,
    thumbsUp: 148,
    thumbsDown: 45,
    image: "",
    slug: "senori-pillow"
  },
  {
    name: "Fleece Blanket",
    priority: 1,
    remarks: "",
    price: 20,
    thumbsUp: 168,
    thumbsDown: 52,
    image: "",
    slug: "fleece-blanket"
  },
  {
    name: "Small Blanket",
    priority: 1,
    remarks: "for stroller",
    price: 11,
    thumbsUp: 48,
    thumbsDown: 26,
    image: "",
    slug: "small-blanket"
  },
  {
    name: "Receiving Blanket",
    priority: 4,
    remarks: "",
    price: 40,
    thumbsUp: 93,
    thumbsDown: 32,
    image: "",
    slug: "receiving-blanket"
  },
  {
    name: "Baby Monitor",
    priority: 1,
    remarks: "",
    price: 75,
    thumbsUp: 37,
    thumbsDown: 25,
    image: "",
    slug: "baby-monitor"
  },
  {
    name: "Baby Detergent",
    priority: 1,
    remarks: "Baby purex detergent or easy pure (non bio) for washing of all bably clothes/beddings or fairy or easy (non bio)",
    price: 78,
    thumbsUp: 57,
    thumbsDown: 17,
    image: "",
    slug: "baby-detergent"
  },
  {
    name: "Cot Pillow",
    priority: 2,
    remarks: "",
    price: 92,
    thumbsUp: 76,
    thumbsDown: 32,
    image: "",
    slug: "cot-pillow"
  },
  {
    name: "Feeding Pillow",
    priority: 1,
    remarks: "",
    price: 84,
    thumbsUp: 125,
    thumbsDown: 64,
    image: "",
    slug: "feeding-pillow"
  },
  {
    name: "Sanitary Napkins",
    priority: 1,
    remarks: "(for initial bleeding to prevent infection)",
    price: 23,
    thumbsUp: 150,
    thumbsDown: 4,
    image: "",
    slug: "sanitary-napkins"
  },
  {
    name: "Nursing Bras",
    priority: 1,
    remarks: "Bought 2. Need to get more",
    price: 26,
    thumbsUp: 133,
    thumbsDown: 14,
    image: "",
    slug: "nursing-bras"
  },
  {
    name: "Baby Thermometer",
    priority: 3,
    remarks: "",
    price: 52,
    thumbsUp: 84,
    thumbsDown: 23,
    image: "",
    slug: "baby-thermometer"
  },
  {
    name: "Baby Seat",
    priority: 1,
    remarks: "",
    price: 52,
    thumbsUp: 23,
    thumbsDown: 4,
    image: "",
    slug: "baby-seat"
  },
  {
    name: "Stroller",
    priority: 1,
    remarks: "(look for sturdy, lightweight, easily foldable, decide on reversible seat",
    price: 68,
    thumbsUp: 143,
    thumbsDown: 5,
    image: "",
    slug: "stroller"
  },
  {
    name: "Burp Napkins",
    priority: 1,
    remarks: "",
    price: 34,
    thumbsUp: 158,
    thumbsDown: 42,
    image: "",
    slug: "burp-napkins"
  },
  {
    name: "Long Sleeve Onesies With Mittens",
    priority: 1,
    remarks: 3,
    price: 31,
    thumbsUp: 43,
    thumbsDown: 36,
    image: "",
    slug: "long-sleeve-onesies-with-mittens"
  },
  {
    name: "Baby Cap",
    priority: 1,
    remarks: "",
    price: 98,
    thumbsUp: 175,
    thumbsDown: 61,
    image: "",
    slug: "baby-cap"
  },
  {
    name: "Baby Bibs",
    priority: 1,
    remarks: "",
    price: 87,
    thumbsUp: 160,
    thumbsDown: 6,
    image: "",
    slug: "baby-bibs"
  },
  {
    name: "Playmat",
    priority: 2,
    remarks: "(colourful/alphabetical or numbers from ELC)\nParklon",
    price: 28,
    thumbsUp: 74,
    thumbsDown: 62,
    image: "",
    slug: "playmat"
  },
  {
    name: "Cot Mobile",
    priority: 2,
    remarks: "",
    price: 90,
    thumbsUp: 118,
    thumbsDown: 52,
    image: "",
    slug: "cot-mobile"
  },
  {
    name: "Bottle Warmer",
    priority: 2,
    remarks: "",
    price: 13,
    thumbsUp: 120,
    thumbsDown: 42,
    image: "",
    slug: "bottle-warmer"
  },
  {
    name: "Bottle Covers",
    priority: 5,
    remarks: "No need",
    price: 35,
    thumbsUp: 143,
    thumbsDown: 25,
    image: "",
    slug: "bottle-covers"
  },
  {
    name: "Surface Sterilizer",
    priority: 2,
    remarks: "Milton surface spray to keep all surfaces sterilized",
    price: 82,
    thumbsUp: 88,
    thumbsDown: 63,
    image: "",
    slug: "surface-sterilizer"
  },
  {
    name: "Nipple Shield",
    priority: 2,
    remarks: "Ardo",
    price: 97,
    thumbsUp: 156,
    thumbsDown: 25,
    image: "",
    slug: "nipple-shield"
  },
  {
    name: "Bath Sponges",
    priority: 3,
    remarks: "",
    price: 38,
    thumbsUp: 118,
    thumbsDown: 59,
    image: "",
    slug: "bath-sponges"
  },
  {
    name: "Massage Oil",
    priority: 1,
    remarks: "",
    price: 16,
    thumbsUp: 153,
    thumbsDown: 20,
    image: "",
    slug: "massage-oil"
  },
  {
    name: "Water Bowls",
    priority: 1,
    remarks: "2 separate bowl: one for baby’s face and one for bottom area",
    price: 45,
    thumbsUp: 13,
    thumbsDown: 28,
    image: "",
    slug: "water-bowls"
  },
  {
    name: "Laundry Basket",
    priority: 1,
    remarks: "",
    price: 38,
    thumbsUp: 94,
    thumbsDown: 39,
    image: "",
    slug: "laundry-basket"
  },
  {
    name: "Glycerin",
    priority: 3,
    remarks: "Glycerin to clean baby’s mouth and gauze",
    price: 62,
    thumbsUp: 74,
    thumbsDown: 55,
    image: "",
    slug: "glycerin"
  },
  {
    name: "Mosquito Net",
    priority: 1,
    remarks: "Mosquito net for cotbed",
    price: 42,
    thumbsUp: 17,
    thumbsDown: 50,
    image: "",
    slug: "mosquito-net"
  },
  {
    name: "Changing Table",
    priority: 1,
    remarks: "",
    price: 38,
    thumbsUp: 90,
    thumbsDown: 10,
    image: "",
    slug: "changing-table"
  },
  {
    name: "Nursery Light",
    priority: 1,
    remarks: "",
    price: 32,
    thumbsUp: 60,
    thumbsDown: 42,
    image: "",
    slug: "nursery-light"
  },
  {
    name: "Cot Bumper",
    priority: 1,
    remarks: "",
    price: 52,
    thumbsUp: 60,
    thumbsDown: 24,
    image: "",
    slug: "cot-bumper"
  },
  {
    name: "Feeding Pyjamas",
    priority: 2,
    remarks: "",
    price: 18,
    thumbsUp: 16,
    thumbsDown: 18,
    image: "",
    slug: "feeding-pyjamas"
  },
  {
    name: "Feeding Chair",
    priority: 5,
    remarks: "",
    price: 20,
    thumbsUp: 65,
    thumbsDown: 64,
    image: "",
    slug: "feeding-chair"
  },
  {
    name: "Belly Band",
    priority: 1,
    remarks: "",
    price: 36,
    thumbsUp: 193,
    thumbsDown: 32,
    image: "",
    slug: "belly-band"
  },
  {
    name: "High Chair",
    priority: 2,
    remarks: "",
    price: 46,
    thumbsUp: 135,
    thumbsDown: 62,
    image: "",
    slug: "high-chair"
  },
  {
    name: "Moses Carry Basket",
    priority: 2,
    remarks: "",
    price: 84,
    thumbsUp: 107,
    thumbsDown: 18,
    image: "",
    slug: "moses-carry-basket"
  },
  {
    name: "Swaddle Cloth",
    priority: 1,
    remarks: "6 pieces",
    price: 85,
    thumbsUp: 194,
    thumbsDown: 11,
    image: "",
    slug: "swaddle-cloth"
  },
  {
    name: "Short Sleeve Onesies",
    priority: 1,
    remarks: "",
    price: 72,
    thumbsUp: 107,
    thumbsDown: 43,
    image: "",
    slug: "short-sleeve-onesies"
  },
  {
    name: "Vests",
    priority: 4,
    remarks: "",
    price: 46,
    thumbsUp: 136,
    thumbsDown: 58,
    image: "",
    slug: "vests"
  },
  {
    name: "Mittens",
    priority: 1,
    remarks: "6 pairs",
    price: 10,
    thumbsUp: 139,
    thumbsDown: 37,
    image: "",
    slug: "mittens"
  },
  {
    name: "Booties",
    priority: 1,
    remarks: "6 pairs",
    price: 64,
    thumbsUp: 63,
    thumbsDown: 53,
    image: "",
    slug: "booties"
  },
  {
    name: "Baby Bouncer",
    priority: 1,
    remarks: "Keep your LO occupied",
    price: 27,
    thumbsUp: 17,
    thumbsDown: 37,
    image: "",
    slug: "baby-bouncer"
  },
  {
    name: "Sanitary Napkins",
    priority: 1,
    remarks: "",
    price: 21,
    thumbsUp: 180,
    thumbsDown: 43,
    image: "",
    slug: "sanitary-napkins"
  },
  {
    name: "Nipple Cream",
    priority: 1,
    remarks: "",
    price: 89,
    thumbsUp: 156,
    thumbsDown: 4,
    image: "",
    slug: "nipple-cream"
  },
  {
    name: "Loose Gown",
    priority: 1,
    remarks: "",
    price: 56,
    thumbsUp: 89,
    thumbsDown: 21,
    image: "",
    slug: "loose-gown"
  },
  {
    name: "Disposable Underwear",
    priority: 1,
    remarks: "",
    price: 73,
    thumbsUp: 153,
    thumbsDown: 25,
    image: "",
    slug: "disposable-underwear"
  }
]
  
  module.exports = productData

