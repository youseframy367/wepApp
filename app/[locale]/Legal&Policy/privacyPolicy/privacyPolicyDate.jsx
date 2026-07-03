import { description } from "@/app/assets/images";

export const notes = {
  notesAr: [
    "قانون حماية البيانات الشخصية المصري رقم 151 لسنة 2020",
    " اللائحة العامة لحماية البيانات في المملكة المتحدة (UK GDPR)ء.",
    " قانون خصوصية المستهلك في كاليفورنيا (CCPA) – للمستخدمين في ولاية كاليفورنيا، الولايات المتحدة الأمريكية",
    " سياسة بيانات المستخدم الخاصة بـ Google Play وإرشادات متجر تطبيقات Apple App Store",
  ],

  notesEn: [
    "Egyptian Personal Data Protection Law No. 151 of 2020",
    "UK GDPR (General Data Protection Regulation)",
    "CCPA (California Consumer Privacy Act) – for users in California, USA",
    "Google Play User Data Policy & Apple App Store Guidelines",
  ],
};

export const PrivacyPolicyData = [
 {
  img: "/imge/policy/logo.svg",

  titleAr: "2. مشغل وسائط فقط",
  titleEn: "2. Media Player Only",

  descriptionAr:
    "Ex Pro هو مجرد مشغل وسائط بشكل صارم. لا يتضمن أي قنوات مدمجة أو قوائم تشغيل أو أفلام أو مسلسلات أو أي محتوى محمي بحقوق الملكية. المستخدمون مسؤولون بالكامل عن إضافة مصادر الوسائط الخاصة بهم.",

  descriptionEn:
    "Ex Pro is strictly a media player. It does not include any built-in channels, playlists, movies, TV shows, or copyrighted content. Users are solely responsible for adding their own media sources.",

  ulAr: [
    {
      titleAr: "ولا تتحمل شركة Exclusive Movies Ltd أو مطوروها أي مسؤولية عن:",
      titleEn:
        "Exclusive Movies Ltd and its developers are not responsible for:",

      itemsAr: [
        "أي مصادر وسائط من أطراف خارجية يضيفها المستخدمون.",
        "أي محتوى يتم الوصول إليه أو بثه أو رفعه عبر التطبيق.",
        "أي انتهاكات لحقوق النشر يرتكبها المستخدمون.",
        "أي روابط غير مصرح بها أو محتوى غير قانوني أو أنشطة مخالفة.",
        "استخدام روابط أو مصادر من أطراف خارجية يكون على مسؤولية المستخدم وحده.",
      ],

      itemsEn: [
        "Any third-party media sources added by users.",
        "Any content accessed, streamed, or uploaded through the application.",
        "Any copyright infringements committed by users.",
        "Any unauthorized links, illegal content, or unlawful activities.",
        "The use of third-party links or media sources is entirely at the user's own risk.",
      ],
    },
  ],
},
{
  img: "/imge/policy/worning.svg",

  titleAr: "3. أمان بيانات المنصة",
  titleEn: "3. Platform Data Security",

  descriptionAr: `للامتثال لسياسات المنصات، نقدم شفافية كاملة بشأن البيانات التي يتم جمعها بواسطة Ex Pro.

نحن لا نشارك بيانات المستخدم مع أي طرف ثالث باستثناء مزودي الخدمات المعتمدين مثل خدمات التحليلات ومعالجي الدفع، وذلك فقط ضمن اتفاقيات سرية صارمة.`,

  descriptionEn: `To comply with platform policies, Ex Pro provides complete transparency regarding the data it collects.

We do not share user data with any third party except trusted service providers, such as analytics providers and payment processors, and only under strict confidentiality agreements.`,

  ulAr: [
    {
      titleAr: "البيانات التي قد يتم جمعها:",
      titleEn: "Data We May Collect:",

      itemsAr: [
        "معلومات الجهاز (طراز الجهاز، إصدار نظام التشغيل، المعرفات الفريدة).",
        "الدولة أو المنطقة بناءً على عنوان IP.",
        "تحليلات استخدام التطبيق، وسجلات الأعطال، وبيانات تشخيص الأخطاء.",
      ],

      itemsEn: [
        "Device information (device model, operating system version, and unique identifiers).",
        "Country or region based on the IP address.",
        "Application usage analytics, crash logs, and diagnostic data.",
      ],
    },
    {
      titleAr: "البيانات التي لا نقوم بجمعها:",
      titleEn: "Data We Do Not Collect:",

      itemsAr: [
        "الموقع في الخلفية.",
        "الرسائل النصية أو جهات الاتصال أو سجل المكالمات.",
        "معرض الصور بدون إذن.",
        "البيانات الشخصية الحساسة.",
        "المعلومات البيومترية.",
      ],

      itemsEn: [
        "Background location.",
        "SMS messages, contacts, or call history.",
        "Photo gallery without permission.",
        "Sensitive personal data.",
        "Biometric information.",
      ],
    },
  ],
},
  {
    img: "/imge/policy/lesning.svg",

    titleAr: "4. الأذونات المستخدمة",
    titleEn: "4. Permissions Used",

    descriptionAr: `يتطلب تطبيق Ex Pro فقط الحد الأدنى من الأذونات اللازمة للعمل.

ولا يقوم التطبيق بتعديل أو حذف أو رفع أي ملفات، ولا يتطلب أي أذونات أخرى للوظائف الأساسية.`,

    descriptionEn: `Ex Pro only requests the minimum permissions required for its functionality.

The application does not modify, delete, or upload any files, and no additional permissions are required for its core features.`,

    ulAr: [
      {
        titleAr: "إذن التخزين (اختياري) – يُستخدم فقط من أجل:",
        titleEn: "Storage Permission (Optional) – Used only for:",
        itemsAr: [
          "قراءة ملفات الوسائط المحلية المخزنة على الجهاز.",
          "تشغيل الفيديوهات أو الملفات الصوتية الخاصة بالمستخدم.",
        ],
        itemsEn: [
          "Reading local media files stored on the device.",
          "Playing the user's video or audio files.",
        ],
      },
    ],
  },
  {
  img: "/imge/policy/visa.svg",

  titleAr: "5. سياسة المحتوى الذي ينشئه المستخدم (UGC)",
  titleEn: "5. User-Generated Content (UGC) Policy",

  descriptionAr:
    "يسمح Ex Pro للمستخدمين بإضافة مصادر وسائط خارجية. نحن لا نستضيف أو نتحكم أو نوزع أو نوصي أو نفهرس أي محتوى تابع لأطراف ثالثة، كما أن التطبيق لا يروّج لأي محتوى مقرصن أو غير مرخّص.",

  descriptionEn:
    "Ex Pro allows users to add external media sources. We do not host, control, distribute, recommend, or index any third-party content, and the application does not promote pirated or unauthorized content.",

  ulAr: [
    {
      titleAr: "",
      titleEn: "",

      itemsAr: [
        "يُسمح للمستخدمين فقط بإضافة مصادر الوسائط التي يمتلكونها قانونيًا أو لديهم الحق في الوصول إليها.",
        "أي إساءة استخدام للتطبيق في عمليات البث غير القانونية ممنوعة بشكل صارم.",
      ],

      itemsEn: [
        "Users may only add media sources that they legally own or are authorized to access.",
        "Any misuse of the application for illegal streaming is strictly prohibited.",
      ],
    },
  ],
},
{
  img: "/imge/policy/info.svg",

  titleAr: "6. المعلومات التي نجمعها",
  titleEn: "6. Information We Collect",

  descriptionAr: `يجمع تطبيق Ex Pro بعض المعلومات اللازمة لتقديم الخدمات وتحسين تجربة المستخدم.`,

  descriptionEn: `Ex Pro collects certain information required to provide its services and improve the user experience.`,

  ulAr: [
    {
      titleAr: "A. المعلومات الشخصية (يتم جمعها فقط إذا قمت بشراء الميزات المدفوعة):",
      titleEn: "A. Personal Information (Collected only when purchasing paid features):",
      itemsAr: [
        "الاسم.",
        "البريد الإلكتروني.",
        "بيانات الدفع (تتم معالجتها بشكل آمن عبر معالجات دفع خارجية مثل Stripe أو Paymob).",
      ],
      itemsEn: [
        "Name.",
        "Email address.",
        "Payment information (processed securely through third-party payment processors such as Stripe or Paymob).",
      ],
    },
    {
      titleAr: "B. البيانات التقنية وبيانات الاستخدام:",
      titleEn: "B. Technical and Usage Data:",
      itemsAr: [
        "طراز الجهاز ونظام التشغيل والمعرفات الفريدة.",
        "عنوان IP والمنطقة.",
        "أنماط تفاعل المستخدم مع التطبيق.",
        "تقارير الأعطال وبيانات التشخيص.",
      ],
      itemsEn: [
        "Device model, operating system, and unique identifiers.",
        "IP address and region.",
        "User interaction patterns with the application.",
        "Crash reports and diagnostic data.",
      ],
    },
    {
      titleAr: "C. ملفات تعريف الارتباط وتقنيات التتبع:",
      titleEn: "C. Cookies and Tracking Technologies:",
      itemsAr: [
        "تُستخدم لأغراض التحليلات، وتوزيع الأحمال، وتحسين الأداء.",
        "يتم جمعها فقط بموافقة المستخدم.",
      ],
      itemsEn: [
        "Used for analytics, load balancing, and performance optimization.",
        "Collected only with the user's consent.",
      ],
    },
  ],
}, 
{
  img: "/imge/policy/HowUsInfo.svg",

  titleAr: "7. كيفية استخدام المعلومات",
  titleEn: "7. How We Use Information",

  descriptionAr: "قد يتم استخدام معلوماتك من أجل:",
  descriptionEn: "Your information may be used for:",

  ulAr: [
    {
      titleAr: "",
      titleEn: "",
      itemsAr: [
        "توفير وظائف التطبيق والتحديثات.",
        "معالجة المدفوعات والتحقق من الاشتراكات.",
        "تحسين الأداء وتجربة المستخدم.",
        "منع الاحتيال وسوء الاستخدام.",
        "الامتثال للالتزامات القانونية.",
        "نحن لا نقوم أبدًا ببيع أو تأجير بياناتك الشخصية.",
      ],
      itemsEn: [
        "Providing application functionality and updates.",
        "Processing payments and verifying subscriptions.",
        "Improving performance and user experience.",
        "Preventing fraud and misuse.",
        "Complying with legal obligations.",
        "We never sell or rent your personal data.",
      ],
    },
  ],
},
{
  img: "/imge/policy/todo.svg",

  titleAr: "8. الأساس القانوني للمعالجة",
  titleEn: "8. Legal Basis for Processing",

  descriptionAr: "نقوم بمعالجة بياناتك بناءً على:",
  descriptionEn: "We process your data based on:",

  ulAr: [
    {
      titleAr: "",
      titleEn: "",
      itemsAr: [
        "موافقتك الصريحة.",
        "الضرورة التعاقدية.",
        "الالتزامات القانونية.",
        "المصالح التجارية المشروعة.",
      ],
      itemsEn: [
        "Your explicit consent.",
        "Contractual necessity.",
        "Legal obligations.",
        "Legitimate business interests.",
      ],
    },
  ],
},
{
  img: "/imge/policy/sherInfo.svg",

  titleAr: "9. مشاركة معلوماتك",
  titleEn: "9. Sharing Your Information",

  descriptionAr: "قد تتم مشاركة بياناتك فقط مع:",
  descriptionEn: "Your data may only be shared with:",

  ulAr: [
    {
      titleAr: "",
      titleEn: "",
      itemsAr: [
        "مزودي الخدمات المعتمدين من أطراف ثالثة (مثل معالجات الدفع، خدمات التحليلات، والاستضافة).",
        "تعمل Stripe وPaymob كمعالجي بيانات تحت إشرافنا وبما يتوافق مع اتفاقيات معالجة البيانات (DPA) التي تفي بمتطلبات اللائحة العامة لحماية البيانات (GDPR)، وUK GDPR، والقانون المصري لحماية البيانات.",
        "الجهات القانونية عند الطلب وبموجب القانون.",
        "خدمات إعلانات Google على الأجهزة المتصلة: عندما تستنتج Google اهتمامات عبر الأجهزة أو على مستوى الأسرة (مثل أجهزة التلفاز الذكية)، تعمل Google وفق سياسة الخصوصية الخاصة بها وإطار Privacy Sandbox. ولا تقوم Exclusive Movies Ltd بمشاركة أي بيانات شخصية قابلة للتحديد مع Google لهذا الغرض.",
        "جميع الشركاء يعملون بموجب اتفاقيات صارمة لحماية البيانات.",
      ],
      itemsEn: [
        "Authorized third-party service providers (such as payment processors, analytics services, and hosting providers).",
        "Stripe and Paymob act as data processors under our instructions and in accordance with Data Processing Agreements (DPAs) that comply with GDPR, UK GDPR, and the Egyptian Data Protection Law.",
        "Legal authorities when required by applicable law.",
        "Google Ads services on connected devices: When Google infers interests across devices or households (such as smart TVs), it operates under its own Privacy Policy and the Privacy Sandbox framework. Exclusive Movies Ltd does not share any personally identifiable information with Google for this purpose.",
        "All partners operate under strict data protection agreements.",
      ],
    },
  ],
},
{
  img: "/imge/policy/translateInfo.svg",

  titleAr: "10. نقل البيانات دوليًا",
  titleEn: "10. International Data Transfers",

  descriptionAr: "قد يتم تخزين بياناتك أو معالجتها خارج بلدك. نحن نطبق الإجراءات التالية:",
  descriptionEn: "Your data may be stored or processed outside your country. We apply the following safeguards:",

  ulAr: [
    {
      titleAr: "",
      titleEn: "",
      itemsAr: [
        "ضمانات اللائحة العامة لحماية البيانات في المملكة المتحدة (UK GDPR).",
        "البنود التعاقدية القياسية (Standard Contractual Clauses - SCCs).",
        "تقليل جمع البيانات إلى الحد الأدنى (Data Minimization) والتشفير (Encryption).",
      ],
      itemsEn: [
        "UK GDPR safeguards.",
        "Standard Contractual Clauses (SCCs).",
        "Data minimization and encryption.",
      ],
    },
  ],
},
{
  img: "/imge/policy/seftiInfo.svg",

  titleAr: "11. الاحتفاظ بالبيانات",
  titleEn: "11. Data Retention",

  descriptionAr: "نحتفظ ببياناتك فقط للمدة اللازمة من أجل:",
  descriptionEn: "We retain your data only for as long as necessary to:",

  ulAr: [
    {
      titleAr: "",
      titleEn: "",
      itemsAr: [
        "تقديم الخدمة.",
        "الامتثال للمتطلبات التنظيمية.",
        "منع الاحتيال.",
        "وعند عدم الحاجة إليها بعد ذلك، يتم حذف البيانات بشكل دائم أو إخفاء هويتها (Anonymized).",
      ],
      itemsEn: [
        "Provide the service.",
        "Comply with regulatory requirements.",
        "Prevent fraud.",
        "Once the data is no longer required, it is permanently deleted or anonymized.",
      ],
    },
  ],
},
{
  img: "/imge/policy/seveData.svg",

  titleAr: "12. حقوقك المتعلقة بالبيانات",
  titleEn: "12. Your Data Rights",

  descriptionAr: "اعتمادًا على الولاية القضائية، يمكنك:",
  descriptionEn: "Depending on your jurisdiction, you may have the right to:",

  ulAr: [
    {
      titleAr: "",
      titleEn: "",
      itemsAr: [
        "الوصول إلى بياناتك أو تصحيحها أو حذفها.",
        "تقييد أو الاعتراض على معالجة بياناتك.",
        "طلب نسخة من بياناتك.",
        "سحب الموافقة في أي وقت.",
        "تقديم شكوى إلى هيئة حماية البيانات المختصة.",
      ],
      itemsEn: [
        "Access, correct, or delete your personal data.",
        "Restrict or object to the processing of your data.",
        "Request a copy of your data.",
        "Withdraw your consent at any time.",
        "Lodge a complaint with the relevant data protection authority.",
      ],
    },
    {
      titleAr: "سكان كاليفورنيا (CCPA/CPRA):",
      titleEn: "California Residents (CCPA/CPRA):",
      itemsAr: [
        "لديك الحق في إلغاء الاشتراك في «بيع» أو «مشاركة» معلوماتك الشخصية.",
        "يشمل «المشاركة» استخدام المعرفات (مثل Advertising ID) لتمكين الإعلانات المخصصة عبر أطراف ثالثة مثل Google.",
        "لإلغاء الاشتراك، قم بزيارة صفحتنا المخصصة: Do Not Sell or Share My Personal Information.",
        "يمكنك أيضًا تقديم طلبات الوصول أو الحذف من خلال التواصل معنا عبر: info@exclusivemoviess.com.",
      ],
      itemsEn: [
        "You have the right to opt out of the 'sale' or 'sharing' of your personal information.",
        "Sharing includes the use of identifiers (such as Advertising ID) to enable personalized advertising through third parties such as Google.",
        "To opt out, visit our dedicated page: Do Not Sell or Share My Personal Information.",
        "You may also submit access or deletion requests by contacting us at: info@exclusivemoviess.com.",
      ],
    },
  ],
},
{
  img: "/imge/policy/sefteOfdata.svg",

  titleAr: "13. أمان البيانات",
  titleEn: "13. Data Security",

  descriptionAr: "نستخدم إجراءات قياسية في الصناعة تشمل:",
  descriptionEn: "We implement industry-standard security measures, including:",

  ulAr: [
    {
      titleAr: "",
      titleEn: "",
      itemsAr: [
        "التشفير.",
        "الحماية بجدران الحماية (Firewall).",
        "ضوابط الوصول.",
        "بروتوكولات تخزين آمنة.",
        "لا يوجد أي نظام مضمون بنسبة 100%، ولكننا نطبق أعلى مستويات الحماية العملية الممكنة.",
      ],
      itemsEn: [
        "Encryption.",
        "Firewall protection.",
        "Access controls.",
        "Secure storage protocols.",
        "No system can be guaranteed to be 100% secure, but we apply the highest practical security standards available.",
      ],
    },
  ],
},

{
  img: "/imge/policy/sohibleKeds.svg",

  titleAr: "14. خصوصية الأطفال",
  titleEn: "14. Children's Privacy",

  descriptionAr:
    "Ex Pro غير مخصص للأشخاص الذين تقل أعمارهم عن 18 عامًا. نحن لا نقوم عن قصد بجمع بيانات من القُصّر.",

  descriptionEn:
    "Ex Pro is not intended for individuals under the age of 18. We do not knowingly collect personal data from minors.",
},
{
  img: "/imge/policy/outputUrl.svg",

  titleAr: "15. الروابط الخارجية",
  titleEn: "15. External Links",

  descriptionAr:
    "الروابط الخارجية أو الإعلانات تقع خارج نطاق سيطرتنا. نحن لسنا مسؤولين عن أمانها أو ممارسات الخصوصية الخاصة بها.",

  descriptionEn:
    "External links or advertisements are outside our control. We are not responsible for their security or privacy practices.",
},
{
  img: "/imge/policy/gogelSeting.svg",

  titleAr: "16. إعلانات Google",
  titleEn: "16. Google Advertising",

  descriptionAr:
    "قد تستخدم Google ومورّدو الطرف الثالث ملفات تعريف الارتباط (Cookies) لتخصيص الإعلانات. يمكن للمستخدمين إلغاء الاشتراك عبر: https://policies.google.com/technologies/ads\n\nلا تستطيع شركة Exclusive Movies Ltd الوصول إلى بيانات التتبع الخاصة بأطراف ثالثة أو التحكم فيها.",

  descriptionEn:
    "Google and its third-party vendors may use cookies to personalize advertisements. Users can opt out by visiting: https://policies.google.com/technologies/ads\n\nExclusive Movies Ltd does not have access to or control over third-party tracking data.",
},
{
  img: "/imge/policy/fileConcat.svg",

  titleAr: "17. ملفات تعريف الارتباط",
  titleEn: "17. Consent & Cookies. ",

  descriptionAr:
    "يجب على المستخدمين تقديم موافقة لاستخدام ملفات تعريف الارتباط الخاصة بالتحليلات أو الأغراض الإعلانية.",

  descriptionEn:
    "Users must provide consent before analytics or advertising cookies are used.",

  ulAr: [
    {
      titleAr: "",
      titleEn: "",
      itemsAr: [
        "يمكن سحب هذه الموافقة في أي وقت داخل التطبيق أو من خلال الإعدادات.",
        "لن يتم تخزين ملفات تعريف الارتباط غير الضرورية بدون موافقة صريحة مسبقة.",
      ],
      itemsEn: [
        "Consent can be withdrawn at any time through the application or device settings.",
        "Non-essential cookies will not be stored without prior explicit consent.",
      ],
    },
  ],
},
{
  img: "/imge/policy/segalNezam.svg",

  titleAr: "18. سجلات النظام",
  titleEn: "18. Log Files",

  descriptionAr: "قد تتضمن السجلات القياسية ما يلي:",
  descriptionEn: "Standard system logs may include:",

  ulAr: [
    {
      titleAr: "",
      titleEn: "",
      itemsAr: [
        "عنوان IP.",
        "معلومات المتصفح أو الجهاز.",
        "مزود خدمة الإنترنت (ISP).",
        "الطوابع الزمنية.",
        "الصفحات أو الميزات المستخدمة.",
        "تُستخدم هذه البيانات بشكل حصري لأغراض التشخيص وتحسين الأداء.",
      ],
      itemsEn: [
        "IP address.",
        "Browser or device information.",
        "Internet Service Provider (ISP).",
        "Timestamps.",
        "Pages or features accessed.",
        "This data is used solely for diagnostics and performance improvement.",
      ],
    },
  ],
},
{
  img: "/imge/policy/changeSbichial.svg",

  titleAr: "19. تغييرات سياسة الخصوصية",
  titleEn: "19. Changes Privacy Policy",

  descriptionAr:
    "قد نقوم بتحديث هذه السياسة في أي وقت. سيتم الإعلان عن التغييرات المهمة داخل التطبيق أو عبر موقعنا الرسمي.",

  descriptionEn:
    "We may update this Privacy Policy at any time. Any significant changes will be announced within the application or on our official website.",
},
]

