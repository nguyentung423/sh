export interface AffiliateContext {
  isAffiliate: boolean;
  ref: string | null;
  zaloLink: string;
  monthlyPrice: number;
}

export const DEFAULT_ZALO_LINK = "https://zalo.me/0374918396";
const DEFAULT_MONTHLY_PRICE = 50000;
const AFFILIATE_REF = "nhbn";

const AFFILIATE = {
  ref: AFFILIATE_REF,
  zaloLink: "https://zalo.me/0367171698",
  monthlyPrice: 70000,
};

function normalizeRef(ref?: string | null): string {
  return (ref || "").trim().toLowerCase();
}

export function resolveAffiliate(ref?: string | null): AffiliateContext {
  const normalized = normalizeRef(ref);
  const isAffiliate = normalized === AFFILIATE_REF;

  if (isAffiliate) {
    return {
      isAffiliate: true,
      ref: AFFILIATE.ref,
      zaloLink: AFFILIATE.zaloLink,
      monthlyPrice: AFFILIATE.monthlyPrice,
    };
  }

  return {
    isAffiliate: false,
    ref: null,
    zaloLink: DEFAULT_ZALO_LINK,
    monthlyPrice: DEFAULT_MONTHLY_PRICE,
  };
}

export function formatVnd(value: number): string {
  return new Intl.NumberFormat("vi-VN").format(value);
}
