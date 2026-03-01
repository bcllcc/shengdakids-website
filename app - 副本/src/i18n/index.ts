export type Language = 'zh' | 'en';

export interface Translations {
  nav: {
    home: string;
    about: string;
    products: string;
    contact: string;
  };
  hero: {
    badge: string;
    title1: string;
    subtitle1: string;
    title2: string;
    subtitle2: string;
    title3: string;
    subtitle3: string;
    cta1: string;
    cta2: string;
  };
  stats: {
    years: string;
    brands: string;
    production: string;
  };
  about: {
    subtitle: string;
    title: string;
    desc: string;
    heading: string;
    content: string;
    highlights: string[];
    cta: string;
    features: {
      production: { title: string; desc: string };
      quality: { title: string; desc: string };
      delivery: { title: string; desc: string };
      service: { title: string; desc: string };
    };
  };
  products: {
    subtitle: string;
    title: string;
    desc: string;
    categories: {
      all: string;
      sports: string;
      casual: string;
      princess: string;
    };
    cta: string;
    ctaBtn: string;
  };
  contact: {
    subtitle: string;
    title: string;
    desc: string;
    phone: string;
    email: string;
    address: string;
    hours: string;
    form: {
      name: string;
      phone: string;
      email: string;
      company: string;
      message: string;
      submit: string;
    };
  };
  footer: {
    desc: string;
    links: string;
    contact: string;
    copyright: string;
  };
}

export const translations: Record<Language, Translations> = {
  zh: {
    nav: {
      home: '首页',
      about: '关于我们',
      products: '产品中心',
      contact: '联系我们',
    },
    hero: {
      badge: '专业童鞋制造商',
      title1: '专注童鞋制造',
      subtitle1: '20年匠心品质，陪伴孩子每一步成长',
      title2: '品质源于专业',
      subtitle2: '严格品控体系，每一双都是精品',
      title3: '时尚舒适兼具',
      subtitle3: '潮流设计，让孩子爱上穿鞋',
      cta1: '浏览产品',
      cta2: '了解我们',
    },
    stats: {
      years: '年制鞋经验',
      brands: '自有品牌',
      production: '年产销量',
    },
    about: {
      subtitle: '关于我们',
      title: '专业童鞋制造商',
      desc: '温州盛达鞋业有限公司成立于2004年，是一家集设计研发、生产制造、品牌运营于一体的现代化童鞋企业。',
      heading: '匠心品质，陪伴孩子成长每一步',
      content: '我们始终坚持"品质第一、客户至上"的经营理念，从原材料采购到成品出厂，每个环节都严格把控。旗下拥有三大自有品牌，产品涵盖运动鞋、休闲鞋、公主鞋等多个品类，满足不同年龄段儿童的穿鞋需求。',
      highlights: ['20年专注童鞋制造', '年产超千万双', '500+合作客户', '三大自有品牌'],
      cta: '了解更多',
      features: {
        production: { title: '自主生产', desc: '30000㎡现代化厂房，8条自动化生产线' },
        quality: { title: '品质保障', desc: '严格质检流程，符合国家童鞋安全标准' },
        delivery: { title: '快速发货', desc: '现货24小时发货，定制7天交货' },
        service: { title: '专属服务', desc: '一对一客户经理，全程跟踪服务' },
      },
    },
    products: {
      subtitle: '产品中心',
      title: '精选产品系列',
      desc: '旗下三大品牌，涵盖运动鞋、休闲鞋、公主鞋等多个品类，满足不同年龄段儿童的穿鞋需求',
      categories: {
        all: '全部产品',
        sports: '运动鞋',
        casual: '休闲鞋',
        princess: '公主鞋',
      },
      cta: '想了解更多产品信息？',
      ctaBtn: '获取完整产品目录',
    },
    contact: {
      subtitle: '联系我们',
      title: '期待与您的合作',
      desc: '无论您有任何问题或合作意向，欢迎随时与我们联系',
      phone: '联系电话',
      email: '电子邮箱',
      address: '公司地址',
      hours: '工作时间',
      form: {
        name: '您的姓名',
        phone: '联系电话',
        email: '电子邮箱',
        company: '公司名称',
        message: '咨询内容',
        submit: '提交咨询',
      },
    },
    footer: {
      desc: '专注童鞋研发、设计、生产与销售20余年，旗下拥有三大自有品牌。',
      links: '快速链接',
      contact: '联系方式',
      copyright: '© 2024 温州盛达鞋业有限公司. All rights reserved.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      products: 'Products',
      contact: 'Contact',
    },
    hero: {
      badge: 'Professional Children\'s Shoe Manufacturer',
      title1: 'Focus on Kids Footwear',
      subtitle1: '20 years of craftsmanship, accompanying every step of children\'s growth',
      title2: 'Quality from Professionalism',
      subtitle2: 'Strict quality control, every pair is a masterpiece',
      title3: 'Fashion & Comfort',
      subtitle3: 'Trendy designs that kids love to wear',
      cta1: 'Browse Products',
      cta2: 'Learn More',
    },
    stats: {
      years: 'Years Experience',
      brands: 'Own Brands',
      production: 'Annual Output',
    },
    about: {
      subtitle: 'About Us',
      title: 'Professional Kids Footwear Manufacturer',
      desc: 'Founded in 2004, Wenzhou Shengda Footwear Co., Ltd. is a modern enterprise integrating design, manufacturing, and brand operation.',
      heading: 'Craftsmanship Quality, Accompanying Every Step',
      content: 'We always adhere to the business philosophy of "Quality First, Customer Supreme", strictly controlling every step from raw material procurement to finished product delivery. With three own brands, our products cover sports shoes, casual shoes, princess shoes and more.',
      highlights: ['20 Years in Kids Footwear', '10M+ Annual Production', '500+ Partners', 'Three Own Brands'],
      cta: 'Learn More',
      features: {
        production: { title: 'In-house Production', desc: '30,000㎡ modern factory, 8 automated production lines' },
        quality: { title: 'Quality Assurance', desc: 'Strict QC process, meeting national safety standards' },
        delivery: { title: 'Fast Delivery', desc: '24h for stock, 7 days for custom orders' },
        service: { title: 'Dedicated Service', desc: 'One-on-one account manager, full tracking' },
      },
    },
    products: {
      subtitle: 'Products',
      title: 'Featured Collections',
      desc: 'Three major brands covering sports shoes, casual shoes, princess shoes and more, meeting needs of all ages',
      categories: {
        all: 'All Products',
        sports: 'Sports',
        casual: 'Casual',
        princess: 'Princess',
      },
      cta: 'Want to know more?',
      ctaBtn: 'Get Full Catalog',
    },
    contact: {
      subtitle: 'Contact Us',
      title: 'Looking Forward to Cooperation',
      desc: 'Feel free to contact us for any questions or cooperation inquiries',
      phone: 'Phone',
      email: 'Email',
      address: 'Address',
      hours: 'Working Hours',
      form: {
        name: 'Your Name',
        phone: 'Phone Number',
        email: 'Email',
        company: 'Company',
        message: 'Message',
        submit: 'Submit Inquiry',
      },
    },
    footer: {
      desc: '20+ years in kids footwear R&D, design, production and sales, with three own brands.',
      links: 'Quick Links',
      contact: 'Contact',
      copyright: '© 2024 Wenzhou Shengda Footwear Co., Ltd. All rights reserved.',
    },
  },
};
