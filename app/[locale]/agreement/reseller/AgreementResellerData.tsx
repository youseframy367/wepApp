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
    img: "/imge/agreement/logo.png",
    key: "natureOfService",
  },
  {
    img: "/imge/agreement/worning.png",
    key: "noRefundPolicy",
  },
  {
    img: "/imge/agreement/contact.png",
    key: "paymentStructure",
  },
  {
    img: "/imge/agreement/PAYMENT.png",
    key: "accountAndDeviceResponsibility",
  },
  {
    img: "/imge/agreement/accunt.png",
    key: "enforcementAndTermination",
  },
  {
    img: "/imge/agreement/Layer 3 27.png",
    key: "limitationOfLiability",
  },
  {
    img: "/imge/agreement/LIMITATION.png",
    key: "agreementVersioning",
  },
  {
    img: "/imge/agreement/privcy.png",
    key: "governingLaw",
  },
  {
    img: "/imge/agreement/AGREEMENT.png",
    key: "finalAcceptance",
  },
  {
    img: "/imge/agreement/serverBolicy.png",
    key: "severability",
  },
];
export const choicesAdd: TypeData[]  = [
  {
    img: "/imge/agreement/reseller/imgScurty.png",
    key: "internalResellers",
  },
  {
    img: "/imge/agreement/reseller/imgTodo.png",
    key: "publicUsersAndResellers",
  },
];