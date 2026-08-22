export interface TypeData { img: string; key: string; }
export const notes: { notesAr: string[]; notesEn: string[]} = {
  notesAr: [
    "لا يُسمح بأي استرداد أو إلغاء أو رصيد دائن أو طلبات استرجاع للمدفوعات بعد التفعيل (إلا إذا كان ذلك مطلوبًا بموجب القانون).",
    "أرصدة المحفظة الداخلية نهائية وغير قابلة للاسترجاع أو الإلغاء.",
    "يجب أن تتم المدفوعات عبر بوابات الدفع المعتمدة (Stripe، Paymob).",
    "أي تجاوز لطرق الدفع أو نزاع على الدفع قد يؤدي إلى إيقاف دائم للحساب.",
    "يتحمل البائعون مسؤولية تأمين الحساب والجهاز وعنوان الـ MAC.",
  ],

  notesEn: [
    "No refunds, reversals, credits, or chargebacks after activation (except where required by law).",
    "Internal wallet credits are final and irreversible.",
    "Payments must go through approved gateways (Stripe, Paymob).",
    "Any payment bypass or dispute may result in permanent suspension.",
    "Resellers are responsible for account, device, and MAC address security.",
  ],
};
export const LegalTermsOfTheContract: TypeData[] = [
  {
    img: "/imge/agreement/logo.webp",
    key: "natureOfService",
  },
  {
    img: "/imge/agreement/worning.webp",
    key: "noRefundPolicy",
  },
  {
    img: "/imge/agreement/contact.webp",
    key: "paymentStructure",
  },
  {
    img: "/imge/agreement/PAYMENT.webp",
    key: "accountAndDeviceResponsibility",
  },
  {
    img: "/imge/agreement/accunt.webp",
    key: "enforcementAndTermination",
  },
  {
    img: "/imge/agreement/Layer 3 27.webp",
    key: "limitationOfLiability",
  },
  {
    img: "/imge/agreement/LIMITATION.webp",
    key: "agreementVersioning",
  },
  {
    img: "/imge/agreement/privcy.webp",
    key: "governingLaw",
  },
  {
    img: "/imge/agreement/AGREEMENT.webp",
    key: "finalAcceptance",
  },
  {
    img: "/imge/agreement/serverBolicy.webp",
    key: "severability",
  },
];
export const choicesAdd: TypeData[]  = [
  {
    img: "/imge/agreement/reseller/imgScurty.webp",
    key: "internalResellers",
  },
  {
    img: "/imge/agreement/reseller/imgTodo.webp",
    key: "publicUsersAndResellers",
  },
];