import { useState } from "react";
import { ArrowRight, Check, X } from "lucide-react";
import pricingData from "../Dumy.json";
import { APP_SIGNUP_URL, SHOW_PREVIEW_PRICING_NOTE } from "../config";

type BillingPeriod = "monthly" | "quarterly" | "half_yearly" | "annual";

type PricingOption = {
  packKey: string;
  packName: string;
  durationDays: number;
  amount: number;
};

type PlanFeature = {
  featureName: string;
  enabled: boolean;
  value: number | null;
  rule: {
    type: string;
    value?: number | null;
    period?: {
      value: number;
      unit: string;
    };
  };
};

type PricingPlan = {
  subscriptionId: string;
  subscriptionName: string;
  isPopular: boolean;
  pricing: PricingOption[];
  features: PlanFeature[];
};

const plans: PricingPlan[] = pricingData;

const billingPeriods: { key: BillingPeriod; label: string }[] = [
  { key: "monthly", label: "Monthly" },
  { key: "quarterly", label: "Quarterly" },
  { key: "half_yearly", label: "Half-yearly" },
  { key: "annual", label: "Annual" },
];

const formatFeatureLimit = (feature: PlanFeature) => {
  if (!feature.enabled) return "Not included";
  if (feature.rule.type === "unlimited") return "Unlimited";
  if (feature.rule.type === "boolean") return "Included";
  if (feature.rule.period) {
    const limit = feature.rule.value ?? feature.value ?? null;
    return limit === null
      ? "Included"
      : `${limit} per ${feature.rule.period.unit}`;
  }
  if (feature.value !== null) return `${feature.value} included`;
  return "Included";
};

const formatPrice = (amount: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] =
    useState<BillingPeriod>("monthly");

  const sortedPlans = [...plans].sort((first, second) => {
    const firstAmount =
      first.pricing.find((price) => price.packKey === billingPeriod)?.amount ??
      Number.POSITIVE_INFINITY;
    const secondAmount =
      second.pricing.find((price) => price.packKey === billingPeriod)?.amount ??
      Number.POSITIVE_INFINITY;
    return firstAmount - secondAmount;
  });

  return (
    <section
      id="pricing"
      className="scroll-mt-20 bg-surface px-4 py-16 text-on-surface sm:px-6 sm:py-20 lg:scroll-mt-24 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-secondary sm:text-sm">
            Pricing
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-on-surface sm:text-4xl lg:text-5xl">
            Choose the plan that fits your business
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-on-surface-variant sm:text-base">
            Compare plans and choose a billing period that works for you.
          </p>
        </header>

        <div
          className="mx-auto mt-8 flex w-fit flex-wrap justify-center gap-1 rounded-xl border border-outline-variant/50 bg-white p-1.5 shadow-sm"
          aria-label="Billing period"
        >
          {billingPeriods.map((period) => (
            <button
              key={period.key}
              type="button"
              aria-pressed={billingPeriod === period.key}
              onClick={() => setBillingPeriod(period.key)}
              className={`rounded-lg px-3 py-2 text-xs font-semibold transition-colors sm:px-4 sm:text-sm ${
                billingPeriod === period.key
                  ? "bg-primary-container text-white shadow-sm"
                  : "text-on-surface-variant hover:bg-surface-container-low"
              }`}
            >
              {period.label}
            </button>
          ))}
        </div>

        {SHOW_PREVIEW_PRICING_NOTE && (
          <p className="mt-4 text-center text-xs text-on-surface-variant">
            Preview pricing: plans and amounts are shown for preview purposes.
          </p>
        )}

        <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-3">
          {sortedPlans.map((plan) => {
            const price = plan.pricing.find(
              (option) => option.packKey === billingPeriod,
            );
            const signupUrl = new URL(APP_SIGNUP_URL);
            signupUrl.searchParams.set("plan", plan.subscriptionId);
            signupUrl.searchParams.set("billingCycle", billingPeriod);

            return (
              <article
                key={plan.subscriptionId}
                className={`relative flex h-full flex-col rounded-2xl border bg-white p-6 shadow-[0_12px_32px_rgba(11,77,60,0.06)] sm:p-8 ${
                  plan.isPopular
                    ? "border-primary-container ring-1 ring-primary-container/20"
                    : "border-outline-variant/50"
                }`}
              >
                {plan.isPopular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary-container px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                    Most popular
                  </span>
                )}

                <div className="border-b border-outline-variant/40 pb-6">
                  <h3 className="font-display text-xl font-bold text-on-surface">
                    {plan.subscriptionName}
                  </h3>
                  <div className="mt-5 flex min-h-12 items-baseline gap-2">
                    {price ? (
                      <>
                        <span className="font-display text-4xl font-extrabold tracking-tight text-on-surface">
                          {formatPrice(price.amount)}
                        </span>
                        <span className="text-sm text-on-surface-variant">
                          / {price.packName.toLowerCase()}
                        </span>
                      </>
                    ) : (
                      <span className="text-sm font-medium text-on-surface-variant">
                        Price unavailable
                      </span>
                    )}
                  </div>
                  {price && (
                    <p className="mt-1 text-xs text-on-surface-variant">
                      Covers {price.durationDays} days
                    </p>
                  )}
                  <a
                    href={signupUrl.toString()}
                    aria-disabled={!price}
                    className={`mt-6 inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg px-4 text-sm font-semibold transition-colors ${
                      plan.isPopular
                        ? "bg-primary-container text-white hover:bg-primary"
                        : "border border-outline-variant/60 bg-white text-primary-container hover:bg-surface-container-low"
                    } ${!price ? "pointer-events-none opacity-50" : ""}`}
                  >
                    Choose {plan.subscriptionName}
                    <ArrowRight size={16} aria-hidden="true" />
                  </a>
                </div>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature.featureName}
                      className="flex items-start justify-between gap-3 text-sm"
                    >
                      <span className="flex min-w-0 items-start gap-2 text-on-surface-variant">
                        {feature.enabled ? (
                          <Check
                            size={16}
                            className="mt-0.5 shrink-0 text-secondary"
                            aria-hidden="true"
                          />
                        ) : (
                          <X
                            size={16}
                            className="mt-0.5 shrink-0 text-outline"
                            aria-hidden="true"
                          />
                        )}
                        <span>{feature.featureName}</span>
                      </span>
                      <span
                        className={`shrink-0 text-right text-xs font-semibold ${
                          feature.enabled
                            ? "text-primary-container"
                            : "text-outline"
                        }`}
                      >
                        {formatFeatureLimit(feature)}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}