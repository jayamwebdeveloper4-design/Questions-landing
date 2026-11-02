import React from 'react';
import { ArrowRight, ArrowUpRight, CheckCircle2, FileText, ShieldCheck } from 'lucide-react';
import { Button } from '../Components/UI/Button';
import { APP_SIGNUP_URL } from '../config';
import {
  formatQuotationCurrency,
  quotationExample,
} from './HowItWorks/quotationExample';

export const Header: React.FC = () => {
  return (
    <section id="home" className="relative w-full overflow-hidden bg-surface pt-16 text-on-surface scroll-mt-16">
        {/* Background Ambient Glows (Contained) */}
        <div
          className="pointer-events-none absolute -right-20 top-0 h-96 w-96 rounded-full bg-[#B2EFD8]/35 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-[#E5EEFF]/50 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto flex min-h-[calc(100vh-68px)] max-w-7xl items-center px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
          <div className="grid w-full items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
            
            {/* Left Content Column */}
            <div className="max-w-2xl">
              {/* Category Pill */}
              <div className="mb-2 inline-flex items-center gap-2  px-3 py-1 text-xs font-semibold tracking-wider text-primary-container uppercase animate-fade-up">
            
                B2B Quotation Management & Estimation
              </div>

              {/* Main Headline */}
              <h1 className="font-display text-3xl font-extrabold tracking-tight text-on-surface sm:text-4xl lg:text-5xl leading-tight">
                Create professional <br />
                <span className="text-primary-container">
                  quotations faster.
                </span>
              </h1>

              {/* Supporting Copy */}
              <p className="mt-4 max-w-xl font-body text-sm leading-relaxed text-on-surface-variant sm:text-base">
                Say goodbye to messy spreadsheets. Build GST-ready quotations with pre-priced catalogs, 
                auto-calculated taxes, presentation-grade PDF templates, and direct-domain email delivery.
              </p>

              {/* Primary & Secondary Call to Actions */}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  variant="primary"
                  size="md"
                  className="shadow-sm hover:shadow gap-2 text-sm font-semibold"
                  onClick={() => window.location.assign(APP_SIGNUP_URL)}
                >
                  <span>Get Started Free</span>
                  <ArrowRight size={16} />
                </Button>

                <a
                  href="https://jayam.co.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-outline-variant/80 bg-white px-5 text-sm font-semibold text-primary-container transition-all hover:border-primary-container hover:bg-[#F4FAF7]"
                >
                  <span>More Products</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>

              {/* Trust & Compliance Micro-Badges */}
              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 pt-4 border-t border-outline-variant/30 text-xs text-on-surface-variant font-medium">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-mint-accent" />
                  <span>Indian GST (CGST/SGST/IGST)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-mint-accent" />
                  <span>Custom Domain SMTP</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-mint-accent" />
                  <span>Version History (V1 &rarr; V2)</span>
                </div>
              </div>
            </div>

            {/* Right Visual: Compact Quotation Proposal Card */}
            <div className="relative mx-auto w-full max-w-[440px] lg:mx-0 lg:ml-auto">
              {/* Subtle Gradient Halo */}
              <div
                className="absolute inset-2 rounded-3xl bg-primary-container/10 blur-xl"
                aria-hidden="true"
              />

              {/* Main Quotation Surface Card */}
              <div className="relative rounded-2xl border border-outline-variant/50 bg-white p-4 sm:p-5 shadow-[0_12px_32px_rgba(11,77,60,0.08)]">
                
                {/* Card Header: Brand & Status Tag */}
                <div className="flex items-center justify-between border-b border-surface-container pb-3">
                  <div className="flex items-center gap-2">
                    <img src="/Logo.png" alt="Logo" className="h-7 w-7 object-contain" />
                    <div>
                      <p className="font-display text-sm font-bold tracking-tight text-on-surface">
                        QuotFlow
                      </p>
                      <p className="text-[10px] text-on-surface-variant">
                        sales@quotflow.com
                      </p>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[10px] font-bold text-[#15803D]">
                    DRAFT V1
                  </span>
                </div>

                {/* Quotation Metadata Bar */}
                <div className="py-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-on-surface-variant">
                        Quotation Ref
                      </span>
                      <h3 className="font-display text-lg font-bold tracking-tight text-on-surface">
                        QT-2026-0001
                      </h3>
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-on-surface-variant">
                        Grand Total
                      </span>
                      <p className="font-display text-lg font-extrabold text-primary-container">
                        {formatQuotationCurrency(quotationExample.total)}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Customer Box */}
                <div className="rounded-xl bg-surface-canvas p-3 border border-outline-variant/30">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[9px] font-bold uppercase tracking-wider text-on-surface-variant">
                        Client Details
                      </span>
                      <p className="text-xs font-bold text-on-surface mt-0.5">
                        Acme Industrial Corp Pvt Ltd
                      </p>
                      <p className="text-[10px] text-on-surface-variant">
                        GSTIN: 33AAAAA0000A1Z5 &bull; Chennai, TN
                      </p>
                    </div>
                    <span className="rounded bg-[#DCFCE7] px-1.5 py-0.5 text-[9px] font-bold text-[#15803D]">
                      VERIFIED
                    </span>
                  </div>
                </div>

                {/* Line Items Table */}
                <div className="mt-3 divide-y divide-surface-container">
                  {quotationExample.items.map((item) => (
                    <div key={item.name} className="flex items-center justify-between py-2">
                      <div>
                        <p className="text-xs font-medium text-on-surface">{item.name}</p>
                        <p className="text-[10px] text-on-surface-variant">{item.quantity}</p>
                      </div>
                      <span className="font-display text-xs font-bold text-on-surface">
                        {formatQuotationCurrency(item.amount)}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Card Footer: Tax Summary & Action */}
                <div className="mt-3 flex items-end justify-between gap-3 border-t border-surface-container pt-3">
                  <div className="min-w-0 flex-1 space-y-1">
                    <div className="flex justify-between gap-2 text-[10px] text-on-surface-variant">
                      <span>Subtotal</span>
                      <span className="font-semibold text-on-surface">{formatQuotationCurrency(quotationExample.subtotal)}</span>
                    </div>
                    <div className="flex justify-between gap-2 text-[10px] text-on-surface-variant">
                      <span>Discount</span>
                      <span className="font-semibold text-success">-{formatQuotationCurrency(quotationExample.discount)}</span>
                    </div>
                    <div className="flex justify-between gap-2 text-[10px] text-on-surface-variant">
                      <span>CGST (9%)</span>
                      <span className="font-semibold text-on-surface">{formatQuotationCurrency(quotationExample.cgst)}</span>
                    </div>
                    <div className="flex justify-between gap-2 text-[10px] text-on-surface-variant">
                      <span>SGST (9%)</span>
                      <span className="font-semibold text-on-surface">{formatQuotationCurrency(quotationExample.sgst)}</span>
                    </div>
                  </div>

                  <span
                    aria-hidden="true"
                    className="inline-flex h-8 items-center justify-center rounded-sm bg-primary px-3 text-xs font-medium text-white shadow-xs"
                  >
                    <FileText size={13} className="mr-1" />
                    Generate PDF
                  </span>
                </div>
              </div>

              {/* Floating Live Badge */}
              <div className="absolute -bottom-3 -left-3 hidden sm:flex items-center gap-2.5 rounded-xl border border-outline-variant/40 bg-white px-3.5 py-2 shadow-[0_8px_20px_rgba(15,23,42,0.08)] animate-float">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#ECFDF5]">
                  <ShieldCheck size={16} className="text-[#10B981]" />
                </div>
                <div>
                  <p className="text-[9px] font-semibold text-on-surface-variant uppercase tracking-wider">
                    Compliance Status
                  </p>
                  <p className="text-xs font-bold text-[#15803D]">
                    100% GST-Ready Quote
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
    </section>
  );
};

export const Home = Header;
export default Header;