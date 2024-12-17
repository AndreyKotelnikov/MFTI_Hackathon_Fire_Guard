import type { Customer, ECommerceProduct, Order, Referrals, Review } from '@db/apps/ecommerce/types'
import auFlag from '@images/icons/countries/au.png'
import brFlag from '@images/icons/countries/br.png'
import cnFlag from '@images/icons/countries/cn.png'
import frFlag from '@images/icons/countries/fr.png'
import inFlag from '@images/icons/countries/in.png'
import usFlag from '@images/icons/countries/us.png'

import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'


interface DB {
  products: ECommerceProduct[]
  orderData: Order[]
  customerData: Customer[]
  reviews: Review[]
  referrals: Referrals[]
}

export const db: DB = {
  products: [],
  reviews: [],
  referrals: [
    {
      id: 1,
      user: 'Koressa Leyfield',
      email: 'kleyfield0@columbia.edu',
      avatar: avatar1,
      referredId: 3398,
      status: 'Unpaid',
      value: '$6655.92',
      earning: '$380.17',
    },
    {
      id: 2,
      user: 'Tania Brotherhood',
      email: 'tbrotherhood1@bing.com',
      avatar: '',
      referredId: 6740,
      status: 'Unpaid',
      value: '$2113.04',
      earning: '$716.72',
    },
    {
      id: 3,
      user: 'Clemmie Montgomery',
      email: 'cmontgomery2@fema.gov',
      avatar: avatar1,
      referredId: 2749,
      status: 'Unpaid',
      value: '$6717.09',
      earning: '$699.02',
    },
    {
      id: 4,
      user: 'Job Jope',
      email: 'jjope3@istockphoto.com',
      avatar: avatar2,
      referredId: 1413,
      status: 'Paid',
      value: '$9465.13',
      earning: '$98.23',
    },
    {
      id: 5,
      user: 'Christoffer Derell',
      email: 'cderell4@apple.com',
      avatar: avatar1,
      referredId: 9176,
      status: 'Paid',
      value: '$6202.81',
      earning: '$882.51',
    },
    {
      id: 18,
      user: 'Andre Kenway',
      email: 'akenwayh@rambler.ru',
      avatar: '',
      referredId: 9826,
      status: 'Paid',
      value: '$2221.71',
      earning: '$347.19',
    },
    {
      id: 20,
      user: 'Shurwood Cabble',
      email: 'scabblej@twitpic.com',
      avatar: avatar4,
      referredId: 5591,
      status: 'Paid',
      value: '$9073.50',
      earning: '$980.62',
    },
    {
      id: 21,
      user: 'Thatch Borchardt',
      email: 'tborchardtk@bing.com',
      avatar: avatar1,
      referredId: 4491,
      status: 'Unpaid',
      value: '$8389.56',
      earning: '$746.81',
    },
    {
      id: 23,
      user: 'Ode Birts',
      email: 'obirtsm@sphinn.com',
      avatar: avatar3,
      referredId: 2328,
      status: 'Paid',
      value: '$8484.83',
      earning: '$815.79',
    },
    {
      id: 24,
      user: 'Bella Michelle',
      email: 'bmichellen@npr.org',
      avatar: avatar2,
      referredId: 5725,
      status: 'Paid',
      value: '$7088.56',
      earning: '$329.64',
    },
    {
      id: 25,
      user: 'Aurora Skpsey',
      email: 'askpseyo@cdc.gov',
      avatar: avatar2,
      referredId: 2821,
      status: 'Unpaid',
      value: '$2938.87',
      earning: '$317.42',
    },
    {
      id: 26,
      user: 'Neddie Maunders',
      email: 'nmaundersp@blogspot.com',
      avatar: avatar2,
      referredId: 1661,
      status: 'Unpaid',
      value: '$6256.70',
      earning: '$521.01',
    },
    {
      id: 27,
      user: 'Andria Chisnell',
      email: 'achisnellq@imageshack.us',
      avatar: avatar2,
      referredId: 3363,
      status: 'Unpaid',
      value: '$9106.99',
      earning: '$705.15',
    },
    {
      id: 28,
      user: 'Reggy Arnao',
      email: 'rarnaor@kickstarter.com',
      avatar: avatar3,
      referredId: 7814,
      status: 'Rejected',
      value: '$6300.60',
      earning: '$234.28',
    },
    {
      id: 29,
      user: 'Shaylah Hasselby',
      email: 'shasselbys@odnoklassniki.ru',
      avatar: avatar4,
      referredId: 8324,
      status: 'Paid',
      value: '$1874.21',
      earning: '$899.72',
    },

  ],
  orderData: [
    {
      id: 1,
      order: 5434,
      customer: 'Gabrielle Feyer',
      email: 'gfeyer0@nyu.edu',
      avatar: avatar1,
      payment: 1,
      status: 'Delivered',
      spent: 73.98,
      method: 'paypalLogo',
      date: '5/16/2022',
      time: '2:11 AM',
      methodNumber: 6522,
    },
    {
      id: 2,
      order: 6745,
      customer: 'Jackson Deignan',
      email: 'jdeignan1@dell.com',
      avatar: avatar2,
      payment: 3,
      status: 'Delivered',
      spent: 100.39,
      method: 'paypalLogo',
      date: '5/3/2023',
      time: '7:26 PM',
      methodNumber: 7538,
    },
    {
      id: 3,
      order: 6087,
      customer: 'Tanya Crum',
      email: 'tcrum2@yandex.ru',
      avatar: avatar3,
      payment: 4,
      status: 'Ready to Pickup',
      spent: 809.26,
      method: 'mastercard',
      date: '12/15/2022',
      time: '6:51 PM',
      methodNumber: 5170,
    },
    {
      id: 4,
      order: 7825,
      customer: 'Dallis Dillestone',
      email: 'ddillestone3@archive.org',
      avatar: avatar4,
      payment: 3,
      status: 'Ready to Pickup',
      spent: 617.64,
      method: 'paypalLogo',
      date: '8/5/2022',
      time: '9:18 PM',
      methodNumber: 1748,
    },
    {
      id: 5,
      order: 5604,
      customer: 'Conan Kennham',
      email: 'ckennham4@cnn.com',
      avatar: avatar5,
      payment: 3,
      status: 'Delivered',
      spent: 384.41,
      method: 'mastercard',
      date: '6/18/2022',
      time: '3:34 AM',
      methodNumber: 6425,
    },
  ],


  customerData: [
    {
      id: 1,
      customer: 'Stanfield Baser',
      customerId: 879861,
      email: 'sbaser0@boston.com',
      country: 'Australia',
      countryFlag: auFlag,
      countryCode: 'lk',
      order: 157,
      totalSpent: 2074.22,
      avatar: avatar1,
    },
    {
      id: 2,
      customer: 'Laurie Dax',
      customerId: 178408,
      email: 'ldax1@lycos.com',
      country: 'Australia',
      countryFlag: auFlag,
      countryCode: 'ru',
      order: 663,
      totalSpent: 2404.19,
      avatar: avatar2,
    },
    {
      id: 3,
      customer: 'Maxine Kenrick',
      customerId: 221092,
      email: 'mkenrick2@eepurl.com',
      country: 'Australia',
      countryFlag: auFlag,
      countryCode: 'gt',
      order: 64,
      totalSpent: 8821.40,
      avatar: avatar3,
    },
    {
      id: 4,
      customer: 'Harman Burkill',
      customerId: 645579,
      email: 'hburkill3@drupal.org',
      country: 'United States',
      countryFlag: usFlag,
      countryCode: 'pt',
      order: 640,
      totalSpent: 5294.35,
      avatar: avatar4,
    },
    {
      id: 5,
      customer: 'Aubrey Borrow',
      customerId: 288765,
      email: 'aborrow4@jiathis.com',
      country: 'France',
      countryFlag: frFlag,
      countryCode: 'fr',
      order: 184,
      totalSpent: 1003.30,
      avatar: avatar5,
    },
    {
      id: 6,
      customer: 'Nester Fridd',
      customerId: 321942,
      email: 'nfridd5@cdbaby.com',
      country: 'China',
      countryFlag: cnFlag,
      countryCode: 'cn',
      order: 965,
      totalSpent: 3876.92,
      avatar: avatar5,
    },
    {
      id: 7,
      customer: 'Lizzie Nicholes',
      customerId: 516109,
      email: 'lnicholes6@rediff.com',
      country: 'Brazil',
      countryFlag: brFlag,
      countryCode: 'br',
      order: 514,
      totalSpent: 7936.85,
      avatar: avatar4,
    },
    {
      id: 8,
      customer: 'Amabel Scullion',
      customerId: 403666,
      email: 'ascullion7@wiley.com',
      country: 'Australia',
      countryFlag: auFlag,
      countryCode: 'gt',
      order: 584,
      totalSpent: 4150.97,
      avatar: avatar4,
    },
    {
      id: 9,
      customer: 'Zeke Arton',
      customerId: 895280,
      email: 'zarton8@weibo.com',
      country: 'Australia',
      countryFlag: auFlag,
      countryCode: 'ua',
      order: 539,
      totalSpent: 3430.05,
      avatar: avatar3,
    },
    {
      id: 10,
      customer: 'Rosy Medlicott',
      customerId: 199195,
      email: 'rmedlicott9@amazon.com',
      country: 'Australia',
      countryFlag: auFlag,
      countryCode: 'ru',
      order: 4,
      totalSpent: 8646.75,
      avatar: avatar3,
    },
    {
      id: 11,
      customer: 'Elene Esp',
      customerId: 317063,
      email: 'eespa@soundcloud.com',
      country: 'China',
      countryFlag: cnFlag,
      countryCode: 'cn',
      order: 602,
      totalSpent: 5807.99,
      avatar: avatar3,
    },
    {
      id: 12,
      customer: 'Cal Lavington',
      customerId: 999318,
      email: 'clavingtonb@nps.gov',
      country: 'China',
      countryFlag: cnFlag,
      countryCode: 'bo',
      order: 779,
      totalSpent: 6677.41,
      avatar: avatar2,
    },
    {
      id: 13,
      customer: 'Merrick Antcliffe',
      customerId: 804513,
      email: 'mantcliffec@php.net',
      country: 'China',
      countryFlag: cnFlag,
      countryCode: 'cn',
      order: 267,
      totalSpent: 3340.41,
      avatar: avatar2,
    },
    {
      id: 14,
      customer: 'Price Tremathack',
      customerId: 155681,
      email: 'ptremathackd@amazon.com',
      country: 'Australia',
      countryFlag: auFlag,
      countryCode: 'ru',
      order: 611,
      totalSpent: 5768.17,
      avatar: avatar2,
    },
    {
      id: 15,
      customer: 'Leesa Habershaw',
      customerId: 490182,
      email: 'lhabershawe@washingtonpost.com',
      country: 'China',
      countryFlag: cnFlag,
      countryCode: 'jp',
      order: 90,
      totalSpent: 4488.03,
      avatar: avatar2,
    },
    {
      id: 16,
      customer: 'Jeana Quincey',
      customerId: 760428,
      email: 'jquinceyf@yolasite.com',
      country: 'Australia',
      countryFlag: auFlag,
      countryCode: 'ua',
      order: 597,
      totalSpent: 6936.49,
      avatar: avatar1,
    },
    {
      id: 17,
      customer: 'Emmott Hise',
      customerId: 675190,
      email: 'ehiseg@usatoday.com',
      country: 'China',
      countryFlag: cnFlag,
      countryCode: 'cn',
      order: 30,
      totalSpent: 7994.11,
      avatar: avatar2,
    },
    {
      id: 18,
      customer: 'Griffith Weeke',
      customerId: 601134,
      email: 'gweekeh@dyndns.org',
      country: 'United States',
      countryFlag: usFlag,
      countryCode: 'id',
      order: 322,
      totalSpent: 5710.25,
      avatar: avatar3,
    },
    {
      id: 19,
      customer: 'Ali Barnardo',
      customerId: 908144,
      email: 'abarnardoi@forbes.com',
      country: 'France',
      countryFlag: frFlag,
      countryCode: 'mx',
      order: 863,
      totalSpent: 7537.74,
      avatar: avatar4,
    },
    {
      id: 20,
      customer: 'Powell Wornham',
      customerId: 528288,
      email: 'pwornhamj@ca.gov',
      country: 'France',
      countryFlag: frFlag,
      countryCode: 'cz',
      order: 812,
      totalSpent: 7801.46,
      avatar: avatar5,
    },
    {
      id: 21,
      customer: 'Miltie Ganniclifft',
      customerId: 573210,
      email: 'mganniclifftk@bandcamp.com',
      country: 'Australia',
      countryFlag: auFlag,
      countryCode: 'ru',
      order: 705,
      totalSpent: 1371.44,
      avatar: avatar5,
    },
    {
      id: 22,
      customer: 'Tabbatha Duinbleton',
      customerId: 473511,
      email: 'tduinbletonl@mediafire.com',
      country: 'United States',
      countryFlag: usFlag,
      countryCode: 'us',
      order: 956,
      totalSpent: 8632.52,
      avatar: avatar4,
    },
    {
      id: 23,
      customer: 'Maurizia Abel',
      customerId: 676743,
      email: 'mabelm@xrea.com',
      country: 'Australia',
      countryFlag: auFlag,
      countryCode: 'my',
      order: 326,
      totalSpent: 7241.74,
      avatar: avatar4,
    },
    {
      id: 24,
      customer: 'Amargo Fliege',
      customerId: 381698,
      email: 'afliegen@storify.com',
      country: 'United States',
      countryFlag: usFlag,
      countryCode: 'id',
      order: 748,
      totalSpent: 5821.27,
      avatar: avatar3,
    },
    {
      id: 25,
      customer: 'Shayla Tarplee',
      customerId: 865989,
      email: 'starpleeo@ovh.net',
      country: 'India',
      countryFlag: inFlag,
      countryCode: 'ng',
      order: 535,
      totalSpent: 900.54,
      avatar: avatar3,
    },
    {
      id: 26,
      customer: 'Kassey Cutting',
      customerId: 545661,
      email: 'kcuttingp@dion.ne.jp',
      country: 'United States',
      countryFlag: usFlag,
      countryCode: 'id',
      order: 645,
      totalSpent: 3200.38,
      avatar: avatar3,
    },
    {
      id: 27,
      customer: 'Blaire Hillaby',
      customerId: 408852,
      email: 'bhillabyq@123-reg.co.uk',
      country: 'China',
      countryFlag: cnFlag,
      countryCode: 'cl',
      order: 709,
      totalSpent: 376.46,
      avatar: avatar2,
    },
    {
      id: 28,
      customer: 'Taryn Ducker',
      customerId: 486325,
      email: 'tduckerr@tamu.edu',
      country: 'Australia',
      countryFlag: auFlag,
      countryCode: 'bt',
      order: 535,
      totalSpent: 3654.39,
      avatar: avatar2,
    },
    {
      id: 29,
      customer: 'Maddie Witherop',
      customerId: 137049,
      email: 'mwitherops@bing.com',
      country: 'China',
      countryFlag: cnFlag,
      countryCode: 'cn',
      order: 763,
      totalSpent: 1136.68,
      avatar: avatar2,
    },
    {
      id: 30,
      customer: 'Brooke Pattemore',
      customerId: 985599,
      email: 'bpattemoret@techcrunch.com',
      country: 'Brazil',
      countryFlag: brFlag,
      countryCode: 'br',
      order: 63,
      totalSpent: 1955.91,
      avatar: avatar2,
    },
    {
      id: 31,
      customer: 'Mordy Dockerty',
      customerId: 178466,
      email: 'mdockertyu@umn.edu',
      country: 'Brazil',
      countryFlag: brFlag,
      countryCode: 'se',
      order: 452,
      totalSpent: 191.11,
      avatar: avatar1,
    },
    {
      id: 32,
      customer: 'Clemmie Trowel',
      customerId: 871402,
      email: 'ctrowelv@feedburner.com',
      country: 'China',
      countryFlag: cnFlag,
      countryCode: 'cl',
      order: 415,
      totalSpent: 5285.45,
      avatar: avatar4,
    },
    {
      id: 33,
      customer: 'Dehlia Shellard',
      customerId: 642834,
      email: 'dshellardw@mediafire.com',
      country: 'France',
      countryFlag: frFlag,
      countryCode: 'cz',
      order: 651,
      totalSpent: 4284.88,
      avatar: avatar2,
    },
    {
      id: 34,
      customer: 'Neila Juggings',
      customerId: 471692,
      email: 'njuggingsx@wp.com',
      country: 'Brazil',
      countryFlag: brFlag,
      countryCode: 'ke',
      order: 219,
      totalSpent: 6698.44,
      avatar: avatar3,
    },
    {
      id: 35,
      customer: 'Ellsworth Dunnan',
      customerId: 295906,
      email: 'edunnany@ucla.edu',
      country: 'Brazil',
      countryFlag: brFlag,
      countryCode: 'br',
      order: 11,
      totalSpent: 3496.34,
      avatar: avatar4,
    },
    {
      id: 36,
      customer: 'Kassandra Cossentine',
      customerId: 979702,
      email: 'kcossentinez@topsy.com',
      country: 'United States',
      countryFlag: usFlag,
      countryCode: 'id',
      order: 316,
      totalSpent: 5328.02,
      avatar: avatar2,
    },
    {
      id: 37,
      customer: 'Hugibert Merigeau',
      customerId: 231745,
      email: 'hmerigeau10@yelp.com',
      country: 'Australia',
      countryFlag: auFlag,
      countryCode: 'pe',
      order: 931,
      totalSpent: 5868.06,
      avatar: avatar2,
    },
    {
      id: 38,
      customer: 'Constantina Charter',
      customerId: 259786,
      email: 'ccharter11@php.net',
      country: 'France',
      countryFlag: frFlag,
      countryCode: 'cz',
      order: 30,
      totalSpent: 4134.97,
      avatar: avatar1,
    },
    {
      id: 39,
      customer: 'Charleen Langsbury',
      customerId: 794373,
      email: 'clangsbury12@usatoday.com',
      country: 'Brazil',
      countryFlag: brFlag,
      countryCode: 'br',
      order: 215,
      totalSpent: 1869.06,
      avatar: avatar5,
    },
    {
      id: 40,
      customer: 'Sande Ferrar',
      customerId: 949483,
      email: 'sferrar13@weather.com',
      countryFlag: cnFlag,
      country: 'China',
      countryCode: 'bo',
      order: 696,
      totalSpent: 2585.57,
      avatar: avatar4,
    },
    {
      id: 41,
      customer: 'Lonnard Najara',
      customerId: 225529,
      email: 'lnajara14@baidu.com',
      country: 'Australia',
      countryFlag: auFlag,
      countryCode: 'bd',
      order: 956,
      totalSpent: 1741.83,
      avatar: avatar4,
    },
    {
      id: 42,
      customer: 'Niko Sharpling',
      customerId: 184711,
      email: 'nsharpling15@ustream.tv',
      country: 'China',
      countryFlag: cnFlag,
      countryCode: 'cn',
      order: 172,
      totalSpent: 1733.66,
      avatar: avatar3,
    },
    {
      id: 43,
      customer: 'Malinde Derricoat',
      customerId: 272711,
      email: 'mderricoat16@feedburner.com',
      country: 'India',
      countryFlag: inFlag,
      countryCode: 'ng',
      order: 822,
      totalSpent: 3930.51,
      avatar: avatar3,
    },
    {
      id: 44,
      customer: 'Kelsey Muskett',
      customerId: 236093,
      email: 'kmuskett17@lycos.com',
      country: 'India',
      countryFlag: inFlag,
      countryCode: 'ca',
      order: 51,
      totalSpent: 4638.94,
      avatar: avatar3,
    },
    {
      id: 45,
      customer: 'Darcey Gorghetto',
      customerId: 582408,
      email: 'dgorghetto18@dropbox.com',
      country: 'China',
      countryFlag: cnFlag,
      countryCode: 'cn',
      order: 559,
      totalSpent: 3614.00,
      avatar: avatar2,
    },
    {
      id: 46,
      customer: 'Jody Stace',
      customerId: 343364,
      email: 'jstace19@ucsd.edu',
      country: 'China',
      countryFlag: cnFlag,
      countryCode: 'cn',
      order: 945,
      totalSpent: 5413.53,
      avatar: avatar2,
    },
    {
      id: 47,
      customer: 'Rudyard Prangnell',
      customerId: 811348,
      email: 'rprangnell1a@imageshack.us',
      country: 'Australia',
      countryFlag: auFlag,
      countryCode: 'ru',
      order: 149,
      totalSpent: 589.72,
      avatar: avatar1,
    },
    {
      id: 48,
      customer: 'Tanner Irdale',
      customerId: 855725,
      email: 'tirdale1b@plala.or.jp',
      country: 'China',
      countryFlag: cnFlag,
      countryCode: 'cn',
      order: 438,
      totalSpent: 8949.26,
      avatar: avatar2,
    },
    {
      id: 49,
      customer: 'Eran Galgey',
      customerId: 804218,
      email: 'egalgey1c@sakura.ne.jp',
      country: 'United States',
      countryFlag: usFlag,
      countryCode: 'id',
      order: 716,
      totalSpent: 4466.54,
      avatar: avatar2,
    },
    {
      id: 50,
      customer: 'Julianne Lavalde',
      customerId: 670044,
      email: 'jlavalde1d@twitter.com',
      country: 'United States',
      countryFlag: usFlag,
      countryCode: 'pl',
      order: 307,
      totalSpent: 4382.72,
      avatar: avatar1,
    },
    {
      id: 51,
      customer: 'Hernando Stolte',
      customerId: 804269,
      email: 'hstolte1e@artisteer.com',
      country: 'United States',
      countryFlag: usFlag,
      countryCode: 'us',
      order: 684,
      totalSpent: 4671.06,
      avatar: avatar2,
    },
    {
      id: 52,
      customer: 'Mommy Beardsdale',
      customerId: 711203,
      email: 'mbeardsdale1f@technorati.com',
      country: 'United States',
      countryFlag: usFlag,
      countryCode: 'pt',
      order: 315,
      totalSpent: 6261.53,
      avatar: avatar2,
    },
    {
      id: 53,
      customer: 'Edsel Wildbore',
      customerId: 745457,
      email: 'ewildbore1g@free.fr',
      country: 'United States',
      countryFlag: usFlag,
      countryCode: 'id',
      order: 797,
      totalSpent: 741.89,
      avatar: avatar3,
    },
    {
      id: 54,
      customer: 'Iseabal Idney',
      customerId: 560446,
      email: 'iidney1h@1688.com',
      country: 'China',
      countryFlag: cnFlag,
      countryCode: 'cn',
      order: 145,
      totalSpent: 4360.35,
      avatar: avatar4,
    },
    {
      id: 55,
      customer: 'Barbi Jest',
      customerId: 519637,
      email: 'bjest1i@com.com',
      country: 'Australia',
      countryFlag: auFlag,
      countryCode: 'co',
      order: 574,
      totalSpent: 8328.19,
      avatar: avatar5,
    },
    {
      id: 56,
      customer: 'Paddie Grogan',
      customerId: 915392,
      country: 'India',
      countryFlag: inFlag,
      email: 'pgrogan1j@wikia.com',
      countryCode: 'eg',
      order: 948,
      totalSpent: 9899.06,
      avatar: avatar5,
    },
    {
      id: 57,
      customer: 'Lem Exell',
      customerId: 856323,
      email: 'lexell1k@nytimes.com',
      country: 'Australia',
      countryFlag: auFlag,
      countryCode: 'tz',
      order: 541,
      totalSpent: 9285.65,
      avatar: avatar4,
    },
    {
      id: 58,
      customer: 'Starlin Baldassi',
      customerId: 696538,
      email: 'sbaldassi1l@squarespace.com',
      country: 'Australia',
      countryFlag: auFlag,
      countryCode: 'ru',
      order: 99,
      totalSpent: 3660.80,
      avatar: avatar4,
    },
    {
      id: 59,
      customer: 'Marjie Badman',
      customerId: 875646,
      email: 'mbadman1m@paypal.com',
      country: 'Australia',
      countryFlag: auFlag,
      countryCode: 'ru',
      order: 108,
      totalSpent: 1978.61,
      avatar: avatar3,
    },
    {
      id: 60,
      customer: 'Flossi McLaverty',
      customerId: 617163,
      email: 'fmclaverty1n@51.la',
      country: 'China',
      countryFlag: cnFlag,
      countryCode: 'cn',
      order: 483,
      totalSpent: 772.98,
      avatar: avatar3,
    },
    {
      id: 61,
      customer: 'Norri Dillinton',
      customerId: 123210,
      email: 'ndillinton1o@bbc.co.uk',
      country: 'China',
      countryFlag: cnFlag,
      countryCode: 'mk',
      order: 69,
      totalSpent: 4227.77,
      avatar: avatar3,
    },
    {
      id: 62,
      customer: 'Aloysius Lukas',
      customerId: 766292,
      email: 'alukas1p@chicagotribune.com',
      country: 'France',
      countryFlag: frFlag,
      countryCode: 'fr',
      order: 147,
      totalSpent: 6637.38,
      avatar: avatar2,
    },
    {
      id: 63,
      customer: 'Rochell Cockill',
      customerId: 100696,
      email: 'rcockill1q@irs.gov',
      country: 'United States',
      countryFlag: usFlag,
      countryCode: 'id',
      order: 444,
      totalSpent: 1730.64,
      avatar: avatar2,
    },
    {
      id: 64,
      customer: 'Emma Greensall',
      customerId: 792768,
      email: 'egreensall1r@joomla.org',
      country: 'Australia',
      countryFlag: auFlag,
      countryCode: 'ru',
      order: 831,
      totalSpent: 9996.22,
      avatar: avatar2,
    },
    {
      id: 65,
      customer: 'Jodi Malyan',
      customerId: 996390,
      email: 'jmalyan1s@uiuc.edu',
      country: 'China',
      countryFlag: cnFlag,
      countryCode: 'fi',
      order: 311,
      totalSpent: 3459.82,
      avatar: avatar2,
    },
    {
      id: 66,
      customer: 'Zed Rawe',
      customerId: 343593,
      email: 'zrawe1t@va.gov',
      country: 'China',
      countryFlag: cnFlag,
      countryCode: 'ly',
      order: 473,
      totalSpent: 5218.22,
      avatar: avatar3,
    },
    {
      id: 67,
      customer: 'Thomasine Vasentsov',
      customerId: 988015,
      email: 'tvasentsov1u@bloglovin.com',
      country: 'China',
      countryFlag: cnFlag,
      countryCode: 'ar',
      order: 752,
      totalSpent: 5984.53,
      avatar: avatar3,
    },
    {
      id: 68,
      customer: 'Janice Large',
      customerId: 270658,
      email: 'jlarge1v@dot.gov',
      country: 'China',
      countryFlag: cnFlag,
      countryCode: 'no',
      order: 582,
      totalSpent: 5565.85,
      avatar: avatar2,
    },
    {
      id: 69,
      customer: 'Tadeo Blasio',
      customerId: 208862,
      email: 'tblasio1w@ustream.tv',
      country: 'China',
      countryFlag: cnFlag,
      countryCode: 'cn',
      order: 751,
      totalSpent: 9042.56,
      avatar: avatar2,
    },
    {
      id: 70,
      customer: 'Raul Onele',
      customerId: 895818,
      email: 'ronele1x@bloglovin.com',
      country: 'China',
      countryFlag: cnFlag,
      countryCode: 'pe',
      order: 689,
      totalSpent: 4508.42,
      avatar: avatar2,
    },
    {
      id: 71,
      customer: 'Rolf Comellini',
      customerId: 292654,
      email: 'rcomellini1y@soup.io',
      country: 'United States',
      countryFlag: usFlag,
      countryCode: 'id',
      order: 837,
      totalSpent: 6379.88,
      avatar: avatar2,
    },
    {
      id: 72,
      customer: 'Feliza Birchenough',
      customerId: 974560,
      email: 'fbirchenough1z@a8.net',
      country: 'China',
      countryFlag: cnFlag,
      countryCode: 'ec',
      order: 724,
      totalSpent: 2933.59,
      avatar: avatar3,
    },
    {
      id: 73,
      customer: 'Elsinore Daltry',
      customerId: 152193,
      email: 'edaltry20@themeforest.net',
      country: 'Brazil',
      countryFlag: brFlag,
      countryCode: 'br',
      order: 455,
      totalSpent: 724.68,
      avatar: avatar2,
    },
    {
      id: 74,
      customer: 'Roseann Serck',
      customerId: 772228,
      email: 'rserck21@about.com',
      country: 'India',
      countryFlag: inFlag,
      countryCode: 'rs',
      order: 51,
      totalSpent: 8287.03,
      avatar: avatar3,
    },
    {
      id: 75,
      customer: 'Yank Luddy',
      customerId: 586615,
      email: 'yluddy22@fema.gov',
      country: 'United States',
      countryFlag: usFlag,
      countryCode: 'pt',
      order: 462,
      totalSpent: 9157.04,
      avatar: avatar4,
    },
    {
      id: 76,
      customer: 'Sloan Huskisson',
      customerId: 762754,
      email: 'shuskisson23@live.com',
      country: 'China',
      countryFlag: cnFlag,
      countryCode: 'do',
      order: 952,
      totalSpent: 6106.41,
      avatar: avatar5,
    },
    {
      id: 77,
      customer: 'Livy Lattimore',
      customerId: 258911,
      email: 'llattimore24@sfgate.com',
      country: 'United States',
      countryFlag: usFlag,
      countryCode: 'id',
      order: 794,
      totalSpent: 9053.56,
      avatar: avatar5,
    },
    {
      id: 78,
      customer: 'Lanette Deble',
      customerId: 890051,
      email: 'ldeble25@spotify.com',
      country: 'China',
      countryFlag: cnFlag,
      countryCode: 'hk',
      order: 454,
      totalSpent: 8180.20,
      avatar: avatar4,
    },
    {
      id: 79,
      customer: 'Juliet Gypps',
      customerId: 493646,
      email: 'jgypps26@paginegialle.it',
      country: 'United States',
      countryFlag: usFlag,
      countryCode: 'id',
      order: 320,
      totalSpent: 210.84,
      avatar: avatar4,
    },
    {
      id: 80,
      customer: 'Tome Joliffe',
      customerId: 356230,
      email: 'tjoliffe27@phoca.cz',
      country: 'France',
      countryFlag: frFlag,
      countryCode: 'mx',
      order: 515,
      totalSpent: 8571.28,
      avatar: avatar3,
    },
    {
      id: 81,
      customer: 'Joel Hamil',
      customerId: 337022,
      email: 'jhamil28@state.gov',
      country: 'China',
      countryFlag: cnFlag,
      countryCode: 'se',
      order: 906,
      totalSpent: 620.57,
      avatar: avatar3,
    },
    {
      id: 82,
      customer: 'Hagen Digance',
      customerId: 864064,
      email: 'hdigance29@odnoklassniki.ru',
      country: 'United States',
      countryFlag: usFlag,
      countryCode: 'id',
      order: 519,
      totalSpent: 332.44,
      avatar: avatar3,
    },
    {
      id: 83,
      customer: 'Kristo Wagstaff',
      customerId: 550008,
      email: 'kwagstaff2a@fotki.com',
      country: 'China',
      countryFlag: cnFlag,
      countryCode: 'cn',
      order: 313,
      totalSpent: 2481.60,
      avatar: avatar2,
    },
    {
      id: 84,
      customer: 'Gibbie Dysert',
      customerId: 778429,
      email: 'gdysert2b@so-net.ne.jp',
      country: 'China',
      countryFlag: cnFlag,
      countryCode: 'ni',
      order: 623,
      totalSpent: 8466.96,
      avatar: avatar2,
    },
    {
      id: 85,
      customer: 'Michale Britton',
      customerId: 158581,
      email: 'mbritton2c@cloudflare.com',
      country: 'China',
      countryFlag: cnFlag,
      countryCode: 'cn',
      order: 835,
      totalSpent: 9048.31,
      avatar: avatar2,
    },
    {
      id: 86,
      customer: 'Hiram Hoys',
      customerId: 747948,
      email: 'hhoys2d@msn.com',
      country: 'India',
      countryFlag: inFlag,
      countryCode: 'eg',
      order: 361,
      totalSpent: 9159.23,
      avatar: '',
    },
    {
      id: 87,
      customer: 'Tobin Bassick',
      customerId: 165827,
      email: 'tbassick2e@quantcast.com',
      country: 'India',
      countryFlag: inFlag,
      countryCode: 'jo',
      order: 527,
      totalSpent: 9289.92,
      avatar: avatar1,
    },
    {
      id: 88,
      customer: 'Mikol Caskey',
      customerId: 533641,
      email: 'mcaskey2f@facebook.com',
      country: 'India',
      countryFlag: inFlag,
      countryCode: 'in',
      order: 25,
      totalSpent: 4920.68,
      avatar: avatar2,
    },
    {
      id: 89,
      customer: 'Cris Donkersley',
      customerId: 997638,
      email: 'cdonkersley2g@utexas.edu',
      country: 'China',
      countryFlag: cnFlag,
      countryCode: 'cn',
      order: 404,
      totalSpent: 7369.58,
      avatar: avatar3,
    },
    {
      id: 90,
      customer: 'Valenka Turbill',
      customerId: 179914,
      email: 'vturbill2h@nbcnews.com',
      country: 'Australia',
      countryFlag: auFlag,
      countryCode: 'tm',
      order: 550,
      totalSpent: 9083.15,
      avatar: avatar4,
    },
    {
      id: 91,
      customer: 'Cherice Fairclough',
      customerId: 467280,
      email: 'cfairclough2i@csmonitor.com',
      country: 'United States',
      countryFlag: usFlag,
      countryCode: 'us',
      order: 792,
      totalSpent: 2634.36,
      avatar: avatar5,
    },
    {
      id: 92,
      customer: 'Lauritz Ramble',
      customerId: 140146,
      email: 'lramble2j@discuz.net',
      country: 'Australia',
      countryFlag: auFlag,
      countryCode: 'ru',
      order: 605,
      totalSpent: 9381.83,
      avatar: avatar5,
    },
    {
      id: 93,
      customer: 'Goddard Fosher',
      customerId: 398102,
      email: 'gfosher2k@example.com',
      country: 'China',
      countryFlag: cnFlag,
      countryCode: 'cn',
      order: 892,
      totalSpent: 3957.06,
      avatar: '',
    },
    {
      id: 94,
      customer: 'Darby Leming',
      customerId: 178939,
      email: 'dleming2l@paginegialle.it',
      country: 'United States',
      countryFlag: usFlag,
      countryCode: 'pl',
      order: 894,
      totalSpent: 1450.01,
      avatar: avatar3,
    },
    {
      id: 95,
      customer: 'Paulie Floch',
      customerId: 855358,
      email: 'pfloch2m@cnet.com',
      country: 'United States',
      countryFlag: usFlag,
      countryCode: 'id',
      order: 866,
      totalSpent: 8713.73,
      avatar: avatar2,
    },
    {
      id: 96,
      customer: 'Raffaello Reaney',
      customerId: 533341,
      email: 'rreaney2n@mlb.com',
      country: 'China',
      countryFlag: cnFlag,
      countryCode: 'cn',
      order: 145,
      totalSpent: 8589.40,
      avatar: avatar2,
    },
    {
      id: 97,
      customer: 'Inger Weadick',
      customerId: 902643,
      email: 'iweadick2o@unesco.org',
      country: 'United States',
      countryFlag: usFlag,
      countryCode: 'id',
      order: 766,
      totalSpent: 7119.15,
      avatar: avatar2,
    },
    {
      id: 98,
      customer: 'Brooke Tegler',
      customerId: 137230,
      email: 'btegler2p@state.tx.us',
      country: 'Australia',
      countryFlag: auFlag,
      countryCode: 'kp',
      order: 70,
      totalSpent: 4403.22,
      avatar: avatar2,
    },
    {
      id: 99,
      customer: 'Erny Picard',
      customerId: 960955,
      email: 'epicard2q@lycos.com',
      country: 'France',
      countryFlag: frFlag,
      countryCode: 'cz',
      order: 471,
      totalSpent: 7696.67,
      avatar: '',
    },
    {
      id: 100,
      customer: 'Manon Fossick',
      customerId: 478426,
      email: 'mfossick2r@hatena.ne.jp',
      country: 'China',
      countryFlag: cnFlag,
      countryCode: 'jp',
      order: 181,
      totalSpent: 2838.35,
      avatar: avatar2,
    },
  ],
}
