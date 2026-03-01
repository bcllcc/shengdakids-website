export type Language = 'zh' | 'en';

export interface Translations {
  nav: {
    home: string;
    about: string;
    products: string;
    brands: string;
    contact: string;
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
    cards: {
      design: { title: string; desc: string; enTitle: string };
      manufacture: { title: string; desc: string; enTitle: string };
      brand: { title: string; desc: string; enTitle: string };
    };
    footerText1: string;
    footerText2: string;
  };
  brands: {
    badge: string;
    title: string;
    items: {
      feifei: { name: string; desc: string };
      gduck: { name: string; desc: string };
      migu: { name: string; desc: string };
    };
    exploreBtn: string;
  };
  categoriesSection: {
    subtitle: string;
    title1: string;
    title2: string;
    desc: string;
    items: {
      baby: { name: string; desc: string; count: string };
      sports: { name: string; desc: string; count: string };
      sandals: { name: string; desc: string; count: string };
      boots: { name: string; desc: string; count: string };
      formal: { name: string; desc: string; count: string };
      slippers: { name: string; desc: string; count: string };
    };
  };
  servicesSection: {
    subtitle: string;
    title: string;
    desc: string;
    items: {
      supply: { title: string; desc: string };
      delivery: { title: string; desc: string };
      quality: { title: string; desc: string };
      service: { title: string; desc: string };
      return: { title: string; desc: string };
      new: { title: string; desc: string };
    };
  };
  mockProducts: {
    p1: string;
    p2: string;
    p3: string;
    p4: string;
    p5: string;
    p6: string;
    p7: string;
    p8: string;
    quickView: string;
  };
  salesChannels: {
    badge: string;
    title: string;
    taobaoName: string;
    pddName: string;
  };
  factory: {
    subtitle: string;
    title: string;
    desc: string;
    coreAdvantage: string;
    capabilities: {
      design: { title: string; desc: string };
      manufacture: { title: string; desc: string };
      quality: { title: string; desc: string };
      delivery: { title: string; desc: string };
    };
    stats: {
      area: string;
      lines: string;
      employees: string;
      capacity: string;
    };
    processTitle: string;
    process: {
      design: { title: string; desc: string };
      procurement: { title: string; desc: string };
      manufacture: { title: string; desc: string };
      quality: { title: string; desc: string };
      logistics: { title: string; desc: string };
    };
  };
  cooperation: {
    badge: string;
    title: string;
    desc: string;
    wholesale: {
      title: string;
      desc: string;
      features: string[];
      btn: string;
    };
    agent: {
      title: string;
      desc: string;
      features: string[];
      btn: string;
    };
    stats: {
      satisfaction: string;
      margin: string;
      delivery: string;
      merchants: string;
    };
  };
  testimonials: {
    subtitle: string;
    title: string;
    desc: string;
    items: {
      t1: { name: string; title: string; content: string };
      t2: { name: string; title: string; content: string };
      t3: { name: string; title: string; content: string };
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
      namePlaceholder: string;
      phonePlaceholder: string;
      messagePlaceholder: string;
    };
    consulting: string;
    success: string;
    willContact: string;
    info: {
      phoneValue: string;
      phoneDesc: string;
      emailValue: string;
      emailDesc: string;
      addressValue: string;
      addressDesc: string;
      hoursDays: string;
      hoursTime: string;
    };
  };
  footer: {
    desc: string;
    links: string;
    contact: string;
    copyright: string;
    brandName: string;
    privacy: string;
    terms: string;
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
      switchSite: '官方站',
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
      cards: {
        design: { title: '设计研发', desc: '汇聚顶尖潮童设计师，敏锐捕捉全球街头趋势，将人体工学与前卫视觉完美融合。', enTitle: 'DESIGN & R&D' },
        manufacture: { title: '生产制造', desc: '20余年深耕童鞋制造，拥有国际领先的智能化生产线，严苛把控每一处细节与品质。', enTitle: 'MANUFACTURING' },
        brand: { title: '品牌运营', desc: '全方位布局线上线下销售矩阵，打造高认知度、强用户粘性的超级潮童生态圈。', enTitle: 'BRAND OP.' }
      },
      footerText1: 'EST. 2004',
      footerText2: '立足中国\n走向世界',
    },
    brands: {
      badge: 'Exclusive IP Matrix',
      title: '自有品牌矩阵',
      items: {
        feifei: { name: '神童菲菲', desc: '专为女童打造的梦幻公主系列，闪亮元素与舒适脚感完美融合。' },
        gduck: { name: '图图小黄鸭', desc: '风靡全网的现象级潮童IP，以明亮的色彩和张扬的个性引领街头风潮。' },
        migu: { name: '咪咕兔', desc: '主打舒适休闲与日常陪伴，软萌可爱的造型让每一步都充满奇趣空间。' }
      },
      exploreBtn: 'Explore Products'
    },
    categoriesSection: {
      subtitle: '产品分类',
      title1: '探索我们的',
      title2: '童鞋系列',
      desc: '涵盖0-12岁全年龄段，满足不同场景需求，让每个孩子都能找到适合自己的鞋子',
      items: {
        baby: { name: '婴儿鞋', desc: '0-2岁软底学步', count: '120+' },
        sports: { name: '运动鞋', desc: '3-12岁活力运动', count: '200+' },
        sandals: { name: '凉鞋', desc: '夏季透气舒适', count: '80+' },
        boots: { name: '靴子', desc: '秋冬保暖时尚', count: '60+' },
        formal: { name: '正装鞋', desc: '校园演出必备', count: '50+' },
        slippers: { name: '拖鞋', desc: '居家舒适休闲', count: '40+' },
      }
    },
    servicesSection: {
      subtitle: '服务优势',
      title: '为什么选择我们',
      desc: '专业的服务团队，完善的售后体系，让您采购无忧',
      items: {
        supply: { title: '全品类供应', desc: '婴儿鞋、学步鞋、运动鞋、凉鞋、靴子等全品类童鞋供应' },
        delivery: { title: '快速配送', desc: '现货24小时内发货，定制订单7天内交货' },
        quality: { title: '品质保证', desc: '每双鞋都经过严格质检，符合国家儿童鞋安全标准' },
        service: { title: '专属服务', desc: '一对一客户经理，全程跟踪服务，快速响应需求' },
        return: { title: '灵活退换', desc: '质量问题包退包换，30天无忧售后保障' },
        new: { title: '快速上新', desc: '每月推出新品，紧跟市场潮流，满足多样化需求' }
      }
    },
    mockProducts: {
      p1: '时尚运动鞋',
      p2: '休闲板鞋',
      p3: '公主水晶鞋',
      p4: '透气跑步鞋',
      p5: '百搭小白鞋',
      p6: '闪亮公主鞋',
      p7: '舒适运动鞋',
      p8: '时尚休闲鞋',
      quickView: 'Quick View'
    },
    salesChannels: {
      badge: 'Official Drop Locations',
      title: '线上官方\n旗舰店',
      taobaoName: '盛达鞋业童装旗舰店',
      pddName: '盛达官方品牌甄选店',
    },
    factory: {
      subtitle: '关于我们',
      title: '现代化生产基地',
      desc: '从设计研发到生产制造，完整的产业链布局，确保每一双鞋的品质',
      coreAdvantage: '核心优势',
      capabilities: {
        design: { title: '自主设计研发', desc: '拥有专业设计团队，每年推出数百款新品' },
        manufacture: { title: '现代化生产线', desc: '8条自动化生产线，日产能达3万双' },
        quality: { title: '严格品质管控', desc: '从原材料到成品，全流程质量检测' },
        delivery: { title: '高效物流配送', desc: '智能仓储系统，快速响应订单需求' },
      },
      stats: {
        area: '㎡厂房面积',
        lines: '条生产线',
        employees: '名员工',
        capacity: '双日产能',
      },
      processTitle: '生产流程',
      process: {
        design: { title: '设计研发', desc: '原创设计，潮流引领' },
        procurement: { title: '原料采购', desc: '严选材料，品质保证' },
        manufacture: { title: '生产制造', desc: '精细工艺，匠心打造' },
        quality: { title: '品质检测', desc: '多重检验，放心出厂' },
        logistics: { title: '仓储物流', desc: '智能管理，快速发货' },
      },
    },
    cooperation: {
      badge: '商务合作',
      title: '合作模式',
      desc: '无论您是实体店铺、电商卖家还是区域代理商，我们都能为您提供最适合的合作方案',
      wholesale: {
        title: '批发采购',
        desc: '适合实体店铺、连锁店、电商平台等，享受优惠价格，获取更大利润空间',
        features: ['起批量低，100双起批', '价格优惠，利润空间大', '款式多样，自由搭配', '支持混批，降低库存', '定期上新，紧跟潮流', '专属客服，一对一服务'],
        btn: '申请批发合作',
      },
      agent: {
        title: '代理加盟',
        desc: '适合有销售渠道资源的合作伙伴，零库存创业，轻松开启童鞋生意',
        features: ['零库存压力，一件代发', '专属代理价，利润保障', '提供产品图片和资料', '区域保护，独家经营', '营销支持，培训指导', '售后无忧，我们承担'],
        btn: '申请代理加盟',
      },
      stats: {
        satisfaction: '客户满意度',
        margin: '平均利润率',
        delivery: '平均发货时间',
        merchants: '合作商家',
      }
    },
    testimonials: {
      subtitle: '客户评价',
      title: '合作伙伴怎么说',
      desc: '听听我们的合作伙伴如何评价我们的产品和服务',
      items: {
        t1: { name: '张经理', title: '某连锁母婴店采购经理', content: '与盛达鞋业合作已经3年了，产品质量一直很稳定，款式更新快，客户反馈很好。最重要的是他们的售后服务非常到位，有问题都能及时解决。' },
        t2: { name: '李女士', title: '电商平台店主', content: '作为代理商，我最喜欢他们的代发服务，零库存压力，利润空间也不错。产品图片和详情页素材都很专业，省去了我很多拍摄和制作的时间。' },
        t3: { name: '王先生', title: '批发市场商户', content: '批发价格很有竞争力，发货速度快，一般下单后第二天就能发出。混批政策也很灵活，可以根据市场需求随时调整进货款式。' }
      }
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
        submit: '发送留言',
        namePlaceholder: '您的姓名',
        phonePlaceholder: '您的联系方式',
        messagePlaceholder: '请输入您的需求...',
      },
      consulting: '在线咨询',
      success: '提交成功',
      willContact: '我们会尽快与您联系',
      info: {
        phoneValue: '13676582993',
        phoneDesc: '周一至周日 9:00-18:00',
        emailValue: 'wzshengdaxieye@163.com',
        emailDesc: '24小时内回复',
        addressValue: '浙江省温州市瓯北黎明路9号',
        addressDesc: '欢迎莅临参观',
        hoursDays: '周一至周日',
        hoursTime: '9:00 - 18:00'
      }
    },
    footer: {
      desc: '专注童鞋研发、设计、生产与销售20余年，旗下拥有三大自有品牌。',
      links: '快速链接',
      contact: '联系方式',
      copyright: '© 2024 温州盛达鞋业有限公司. All rights reserved.',
      brandName: '盛达鞋业',
      privacy: '隐私政策',
      terms: '服务条款',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      products: 'Products',
      brands: 'Our Brands',
      contact: 'Contact',
      switchSite: 'HOME',
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
      cards: {
        design: { title: 'Design & R&D', desc: 'Gathering top children\'s shoe designers, keenly capturing global street trends, and perfectly integrating ergonomics with avant-garde visuals.', enTitle: 'DESIGN & R&D' },
        manufacture: { title: 'Manufacturing', desc: 'Deeply rooted in kids\' footwear manufacturing for over 20 years, with internationally leading intelligent production lines, strictly controlling every detail and quality.', enTitle: 'MANUFACTURING' },
        brand: { title: 'Brand Operations', desc: 'A comprehensive online and offline sales matrix, creating a super trendy children\'s ecosystem with high recognition and strong user stickiness.', enTitle: 'BRAND OP.' }
      },
      footerText1: 'EST. 2004',
      footerText2: 'Based in China\nGoing Global',
    },
    brands: {
      badge: 'Exclusive IP Matrix',
      title: 'Our Own Brand Matrix',
      items: {
        feifei: { name: 'Magic Feifei', desc: 'A dreamy princess series designed specifically for girls, perfectly integrating shiny elements with a comfortable feel.' },
        gduck: { name: 'Tutu Duck', desc: 'A phenomenal trendy IP that has taken the internet by storm, leading street fashion with bright colors and a bold personality.' },
        migu: { name: 'Migu Rabbit', desc: 'Focusing on comfortable casual wear and daily companionship, the soft and cute design makes every step full of wonder.' }
      },
      exploreBtn: 'Explore Products'
    },
    categoriesSection: {
      subtitle: 'Product Categories',
      title1: 'Explore Our',
      title2: 'Kids Footwear Collection',
      desc: 'Covering all ages from 0-12, meeting different scenario needs, so every child can find the right shoes',
      items: {
        baby: { name: 'Baby Shoes', desc: '0-2yo soft sole walkers', count: '120+' },
        sports: { name: 'Sports Shoes', desc: '3-12yo active sports', count: '200+' },
        sandals: { name: 'Sandals', desc: 'Summer breathable comfort', count: '80+' },
        boots: { name: 'Boots', desc: 'Autumn/Winter warm fashion', count: '60+' },
        formal: { name: 'Formal Shoes', desc: 'School & Performance', count: '50+' },
        slippers: { name: 'Slippers', desc: 'Home comfort leisure', count: '40+' },
      }
    },
    servicesSection: {
      subtitle: 'Service Advantages',
      title: 'Why Choose Us',
      desc: 'Professional service team, perfect after-sales system, worry-free procurement',
      items: {
        supply: { title: 'Full Category Supply', desc: 'Baby shoes, toddler shoes, sneakers, sandals, boots and all categories.' },
        delivery: { title: 'Fast Delivery', desc: 'In-store stock ships within 24h, custom orders within 7 days.' },
        quality: { title: 'Quality Assurance', desc: 'Every pair passes strict QC, meeting national safety standards.' },
        service: { title: 'Exclusive Service', desc: '1-on-1 account manager, full-process tracking, fast response.' },
        return: { title: 'Flexible Returns', desc: '30-day worry-free after-sales guarantee for quality issues.' },
        new: { title: 'Fast Updates', desc: 'New arrivals every month, keeping up with market trends.' }
      }
    },
    mockProducts: {
      p1: 'Fashion Sneakers',
      p2: 'Casual Skate Shoes',
      p3: 'Princess Crystal Shoes',
      p4: 'Breathable Running Shoes',
      p5: 'Versatile White Shoes',
      p6: 'Shiny Princess Shoes',
      p7: 'Comfortable Sneakers',
      p8: 'Fashion Casual Shoes',
      quickView: 'Quick View'
    },
    salesChannels: {
      badge: 'Official Drop Locations',
      title: 'Official Online\nFlagship Stores',
      taobaoName: 'Shengda Kids Footwear Flagship',
      pddName: 'Shengda Official Selected Store',
    },
    factory: {
      subtitle: 'About Us',
      title: 'Modern Production Base',
      desc: 'From design to manufacturing, a complete industry chain layout ensures the quality of every pair of shoes',
      coreAdvantage: 'Core Advantages',
      capabilities: {
        design: { title: 'Independent R&D', desc: 'Professional design team, launching hundreds of new products annually' },
        manufacture: { title: 'Modern Production', desc: '8 automated lines, daily capacity of 30,000 pairs' },
        quality: { title: 'Strict Quality Control', desc: 'Full-process quality inspection from raw materials to finished products' },
        delivery: { title: 'Efficient Logistics', desc: 'Smart warehouse system, quick response to orders' },
      },
      stats: {
        area: '㎡ Factory Area',
        lines: 'Production Lines',
        employees: 'Employees',
        capacity: 'Pairs Daily Capacity',
      },
      processTitle: 'Production Process',
      process: {
        design: { title: 'R&D', desc: 'Original design, leading trends' },
        procurement: { title: 'Procurement', desc: 'Strict material selection, quality guaranteed' },
        manufacture: { title: 'Manufacturing', desc: 'Fine craftsmanship, built with care' },
        quality: { title: 'Quality Control', desc: 'Multiple inspections, assured delivery' },
        logistics: { title: 'Logistics', desc: 'Smart management, fast shipping' },
      },
    },
    cooperation: {
      badge: 'Business Cooperation',
      title: 'Cooperation Models',
      desc: 'Whether you are a physical store, e-commerce seller or regional agent, we offer the most suitable plan for you',
      wholesale: {
        title: 'Wholesale Purchase',
        desc: 'Suitable for physical stores, chains, and e-commerce. Enjoy discounted prices and better margins.',
        features: ['Low MOQ, starting at 100 pairs', 'Favorable prices, high profit margins', 'Diverse styles, free mixing', 'Mixed batches supported to reduce inventory', 'Regular new arrivals, trend-following', 'Exclusive 1-on-1 customer service'],
        btn: 'Apply for Wholesale',
      },
      agent: {
        title: 'Agent Franchise',
        desc: 'Suitable for partners with sales channels. Start your kids footwear business easily with zero inventory.',
        features: ['Zero inventory pressure, dropshipping available', 'Exclusive agent pricing, guaranteed profit', 'Product images and materials provided', 'Regional protection, exclusive operation', 'Marketing support and training', 'Worry-free after-sales, we cover it'],
        btn: 'Apply for Franchise',
      },
      stats: {
        satisfaction: 'Customer Satisfaction',
        margin: 'Average Margin',
        delivery: 'Avg. Delivery Time',
        merchants: 'Partner Merchants',
      }
    },
    testimonials: {
      subtitle: 'Testimonials',
      title: 'What Partners Say',
      desc: 'Listen to how our partners evaluate our products and services',
      items: {
        t1: { name: 'Manager Zhang', title: 'Purchasing Manager, Maternity Chain', content: 'We have cooperated with Shengda Footwear for 3 years. The product quality is always stable, styles are updated quickly, and customer feedback is great. Most importantly, their after-sales service is excellent, and any problems are solved in a timely manner.' },
        t2: { name: 'Ms. Li', title: 'E-commerce Store Owner', content: 'As an agent, I like their dropshipping service the most. Zero inventory pressure and good profit margins. The product images and detail page materials are very professional, saving me a lot of time on shooting and production.' },
        t3: { name: 'Mr. Wang', title: 'Wholesale Market Merchant', content: 'The wholesale prices are very competitive, and the delivery speed is fast, usually shipped the day after ordering. The mixed batch policy is also very flexible, allowing me to adjust the purchased styles at any time according to market needs.' }
      }
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
        message: 'Comments',
        submit: 'Send Message',
        namePlaceholder: 'Your name',
        phonePlaceholder: 'Your phone number',
        messagePlaceholder: 'Your message here...',
      },
      consulting: 'Online Consulting',
      success: 'Submitted Successfully',
      willContact: 'We will contact you as soon as possible',
      info: {
        phoneValue: '+86 13676582993',
        phoneDesc: 'Mon-Sun 9:00-18:00',
        emailValue: 'wzshengdaxieye@163.com',
        emailDesc: 'Reply within 24h',
        addressValue: 'No. 9 Liming Rd, Oubei, Wenzhou, Zhejiang',
        addressDesc: 'Welcome to visit us',
        hoursDays: 'Monday - Sunday',
        hoursTime: '9:00 - 18:00'
      }
    },
    footer: {
      desc: '20+ years in kids footwear R&D, design, production and sales, with three own brands.',
      links: 'Quick Links',
      contact: 'Contact',
      copyright: '© 2024 Wenzhou Shengda Footwear Co., Ltd. All rights reserved.',
      brandName: 'Shengda Footwear',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
    },
  },
};
