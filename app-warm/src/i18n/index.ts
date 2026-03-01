export type Language = 'zh' | 'en';

export interface Translations {
  nav: {
    home: string;
    about: string;
    products: string;
    brands: string;
    contact: string;
    cta: string;
    switchSite: string;
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
    newCollection: string;
    mainTitle: string[];
    description: string;
    explore: string;
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
    ourStory: string;
    since: string;
    yearsExcellence: string;
    features: {
      production: { title: string; enTitle: string; desc: string };
      quality: { title: string; enTitle: string; desc: string };
      brand: { title: string; enTitle: string; desc: string };
    };
  };
  brands: {
    subtitle: string;
    title: string;
    desc: string;
    feifei: {
      name: string;
      concept: string;
      desc: string;
    };
    gduck: {
      name: string;
      concept: string;
      desc: string;
    };
    migu: {
      name: string;
      concept: string;
      desc: string;
    };
  };
  products: {
    subtitle: string;
    title: string;
    desc: string;
    categories: {
      all: string;
      boys: string;
      girls: string;
      toddler: string;
      sports: string;
    };
    cta: string;
    ctaBtn: string;
    viewAll: string;
    new: string;
    hot: string;
    limited: string;
    items: {
      cloudWalk: string;
      urbanExplorer: string;
      princessBow: string;
      runningShoes: string;
      classicSchool: string;
      balletFlat: string;
    };
  };
  contact: {
    subtitle: string;
    title: string;
    desc: string;
    phone: string;
    email: string;
    address: string;
    hours: string;
    getInTouch: string;
    startCooperation: string;
    cooperationDesc: string;
    contactTitle: string;
    followUs: string;
    inquiryTitle: string;
    form: {
      name: string;
      phone: string;
      email: string;
      company: string;
      message: string;
      submit: string;
      namePlaceholder: string;
      phonePlaceholder: string;
      messagePlaceholder: string;
    };
  };
  footer: {
    desc: string;
    links: string;
    contact: string;
    brands: string;
    copyright: string;
    privacy: string;
    terms: string;
    navigation: string;
  };
}

export const translations: Record<Language, Translations> = {
  zh: {
    nav: {
      home: '首页',
      about: '关于我们',
      products: '产品中心',
      brands: '品牌矩阵',
      contact: '联系我们',
      cta: '联系我们',
      switchSite: '盛达潮流站',
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
      newCollection: 'New Collection - 2024',
      mainTitle: ['FUN', 'ACTIVE', 'KIDS.'],
      description: '探索充满活力的全新童鞋系列。高纯度色彩碰撞人体工学设计，让孩子释放天性，趣玩每一步。',
      explore: '探索全新系列',
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
      ourStory: 'Our Story',
      since: 'Since 2004',
      yearsExcellence: 'Years of Excellence',
      features: {
        production: {
          title: '设计研发',
          enTitle: 'Design & R&D',
          desc: '不仅关注潮流，更在乎孩子的每一步发育。汇聚资深童鞋设计师，将人体工学与现代东方审美温润融合。'
        },
        quality: {
          title: '生产制造',
          enTitle: 'Manufacturing',
          desc: '二十年坚守匠心制造。选用环保透气级面料，严格把控每一道工序，确保每一双鞋都如同妈妈的拥抱般柔软安全。'
        },
        brand: {
          title: '品牌运营',
          enTitle: 'Brand Eco',
          desc: '构建充满温度的童鞋生态。无论线上线下，我们致力于为您和孩子提供最贴心、最可靠的陪伴式服务。'
        },
      },
    },
    brands: {
      subtitle: 'Our Family',
      title: '自有品牌矩阵',
      desc: '针对不同年龄段与穿着场景，我们精心孵化了三大童鞋子品牌，用爱与专业陪伴孩子成长的每一个阶段。',
      feifei: {
        name: '神童菲菲',
        concept: '轻盈、童趣、自由呼吸',
        desc: '专为亚洲儿童脚型研发，侧重于日常休闲与运动轻跑。采用"云感"超轻大底，让孩子的每一步都像踩在棉花上般柔软。',
      },
      gduck: {
        name: '图图小黄鸭',
        concept: '活力、探索、高辨识度',
        desc: '联名IP授权系列，将经典活泼的小黄鸭元素融入鞋身设计。高纯度色彩搭配防滑耐磨科技，是孩子户外探险的最佳萌宠。',
      },
      migu: {
        name: '咪咕兔',
        concept: '甜美、梦幻、公主童话',
        desc: '专注女童鞋履细分市场。以浪漫的蝴蝶结、闪片与清新的马卡龙配色，为每一个拥有公主梦的小女孩打造专属梦幻步调。',
      },
    },
    products: {
      subtitle: 'Our Collections',
      title: '精选鞋履系列',
      desc: '每一双鞋都经过上百次打样与测试，采用环保科技材料与护足设计，为中国儿童的每一步保驾护航。',
      categories: {
        all: '全部',
        boys: '男童',
        girls: '女童',
        toddler: '幼童',
        sports: '运动',
      },
      cta: '想了解更多产品信息？',
      ctaBtn: '获取完整产品目录',
      viewAll: '探索完整系列',
      new: '新品上市',
      hot: '热销款',
      limited: '限量款',
      items: {
        cloudWalk: '时尚潮流阿甘系列',
        urbanExplorer: '梦幻甜美公主鞋',
        princessBow: '潮牌活力运动鞋',
        runningShoes: '潮流拼色板鞋',
        classicSchool: '时尚潮流德训鞋',
        balletFlat: '经典学院小白鞋',
      },
    },
    contact: {
      subtitle: '联系我们',
      title: '期待与您的合作',
      desc: '无论您有任何问题或合作意向，欢迎随时与我们联系',
      phone: '联系电话',
      email: '电子邮箱',
      address: '公司地址',
      hours: '工作时间',
      getInTouch: 'Get In Touch',
      startCooperation: '开启合作',
      cooperationDesc: '无论是品牌经销、定制服务，亦或只是来打个招呼，我们都希望能听到您的声音。',
      contactTitle: '联系方式',
      followUs: 'Follow Us',
      inquiryTitle: '留言咨询',
      form: {
        name: '您的姓名',
        phone: '联系电话',
        email: '电子邮箱',
        company: '公司名称',
        message: '咨询内容',
        submit: '提交咨询',
        namePlaceholder: '您的称呼',
        phonePlaceholder: '您的联系方式',
        messagePlaceholder: '请输入您的需求内容...',
      },
    },
    footer: {
      desc: '呵护每一步童真与成长。致力于打造舒适、安全、时尚的现代童鞋生态。',
      links: '快速链接',
      contact: '联系方式',
      brands: '旗下品牌',
      copyright: '© {year} 温州盛达鞋业有限公司. All rights reserved.',
      privacy: '隐私政策',
      terms: '服务条款',
      navigation: '浏览导航',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      products: 'Products',
      brands: 'Our Brands',
      contact: 'Contact',
      cta: 'Contact Us',
      switchSite: 'TREND',
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
      newCollection: 'New Collection - 2024',
      mainTitle: ['FUN', 'ACTIVE', 'KIDS.'],
      description: 'Explore our vibrant new children\'s shoe collection. High-purity colors meet ergonomic design, letting kids release their nature and enjoy every step.',
      explore: 'Explore New Collection',
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
      ourStory: 'Our Story',
      since: 'Since 2004',
      yearsExcellence: 'Years of Excellence',
      features: {
        production: {
          title: 'Design & R&D',
          enTitle: 'Innovation',
          desc: 'We care not just about trends, but every step of your child\'s development. Our senior designers blend ergonomics with modern aesthetics.'
        },
        quality: {
          title: 'Manufacturing',
          enTitle: 'Craftsmanship',
          desc: 'Two decades of dedicated craftsmanship. We use eco-friendly, breathable materials and strict quality control for soft, safe comfort.'
        },
        brand: {
          title: 'Brand Ecosystem',
          enTitle: 'Service',
          desc: 'Building a warm children\'s shoe ecosystem. Online or offline, we provide the most caring and reliable companion service for you and your child.'
        },
      },
    },
    brands: {
      subtitle: 'Our Family',
      title: 'Brand Portfolio',
      desc: 'For different age groups and wearing scenarios, we have carefully incubated three children\'s shoe sub-brands, accompanying every stage of your child\'s growth with love and professionalism.',
      feifei: {
        name: 'MAGIC FEIFEI',
        concept: 'Light, Fun, Breathable',
        desc: 'Specially developed for Asian children\'s foot shapes, focusing on daily leisure and light sports. With "cloud-like" ultra-light soles, every step feels as soft as walking on cotton.',
      },
      gduck: {
        name: 'TUTU DUCK',
        concept: 'Vibrant, Exploratory, Iconic',
        desc: 'Co-branded IP series integrating the classic lively duck element into shoe design. High-purity colors meet anti-slip technology, the perfect companion for outdoor adventures.',
      },
      migu: {
        name: 'MIGU RABBIT',
        concept: 'Sweet, Dreamy, Princess Fairy Tale',
        desc: 'Focusing on the girls\' footwear market. With romantic bows, sequins and fresh macaron colors, creating exclusive dreamy steps for every little princess.',
      },
    },
    products: {
      subtitle: 'Our Collections',
      title: 'Featured Collections',
      desc: 'Every pair of shoes undergoes hundreds of prototypes and tests, using eco-friendly tech materials and foot protection design to safeguard every step of Chinese children.',
      categories: {
        all: 'All',
        boys: 'Boys',
        girls: 'Girls',
        toddler: 'Toddler',
        sports: 'Sports',
      },
      cta: 'Want to know more?',
      ctaBtn: 'Get Full Catalog',
      viewAll: 'Explore Full Collection',
      new: 'New Arrival',
      hot: 'Best Seller',
      limited: 'Limited Edition',
      items: {
        cloudWalk: 'Trendy Forrest Gump Series',
        urbanExplorer: 'Sweet Princess Shoes',
        princessBow: 'Active Sports Sneakers',
        runningShoes: 'Color Block Skate Shoes',
        classicSchool: 'Trendy German Trainer',
        balletFlat: 'Classic White Sneakers',
      },
    },
    contact: {
      subtitle: 'Contact Us',
      title: 'Looking Forward to Cooperation',
      desc: 'Feel free to contact us for any questions or cooperation inquiries',
      phone: 'Phone',
      email: 'Email',
      address: 'Address',
      hours: 'Working Hours',
      getInTouch: 'Get In Touch',
      startCooperation: 'Start Cooperation',
      cooperationDesc: 'Whether brand distribution, custom services, or just saying hello, we would love to hear from you.',
      contactTitle: 'Contact Info',
      followUs: 'Follow Us',
      inquiryTitle: 'Send Inquiry',
      form: {
        name: 'Your Name',
        phone: 'Phone Number',
        email: 'Email',
        company: 'Company',
        message: 'Message',
        submit: 'Submit Inquiry',
        namePlaceholder: 'Your name',
        phonePlaceholder: 'Your contact number',
        messagePlaceholder: 'Please enter your requirements...',
      },
    },
    footer: {
      desc: 'Caring for every step of childhood and growth. Committed to creating a modern children\'s shoe ecosystem that is comfortable, safe, and fashionable.',
      links: 'Quick Links',
      contact: 'Contact',
      brands: 'Our Brands',
      copyright: '© {year} Wenzhou Shengda Footwear Co., Ltd. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      navigation: 'Navigation',
    },
  },
};
