import React, { useEffect, useState } from "react";
import {
  FileText,
  ShieldCheck,
  CheckCircle2,
  Building2,
  CreditCard,
  Send,
  UserCheck,
  Search,
  Mail,
  Check,
  Plus,
} from "lucide-react";
import type { Step } from "./types";
import {
  formatQuotationCurrency,
  quotationExample,
} from "./quotationExample";

interface StepPreviewProps {
  steps: Step[];
  active: number;
}

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

// animation delay set panna: style={d(400)}
const d = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

// Typing effect (Step 1 search box)
const useTyping = (text: string, speed = 60, delay = 200) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(0);
    let i = 0;
    let interval: ReturnType<typeof setInterval> | undefined;

    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setCount(i);
        if (i >= text.length && interval) clearInterval(interval);
      }, speed);
    }, delay);

    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, [text, speed, delay]);

  return text.slice(0, count);
};

/* ------------------------------------------------------------------ */
/* STEP 1 - Customer : typing -> card slides up -> fields stagger -> pop */
/* ------------------------------------------------------------------ */

const CustomerBody: React.FC = () => {
  const typed = useTyping("Jayam Websolution", 55, 250);

  const fields = [
    { label: "Contact Person", value: "Mr.Praveen Kumar" },
    { label: "Phone", value: "+91 98765 43210" },
    { label: "Email", value: "accounts@Jaym.in" },
    { label: "Billing Address", value: "Tambram,Chennai" },
  ];

  return (
    <div className="flex h-full flex-col justify-between">
      {/* Search box with typing */}
      <div className="flex items-center gap-2 rounded-lg border border-primary-container/40 bg-white px-3 py-2 ring-2 ring-primary-container/15">
        <Search size={14} className="text-on-surface-variant" />
        <span className="text-xs text-on-surface">
          {typed}
          <span className="sp-caret ml-0.5 inline-block h-3 w-px translate-y-0.5 bg-on-surface" />
        </span>
      </div>

      {/* Matched customer */}
      <div
        className="sp-up rounded-xl border border-primary-container bg-[#F4FAF7] p-3 ring-2 ring-primary-container/20"
        style={d(1200)}
      >
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[9px] font-bold uppercase tracking-wider text-on-surface-variant">
              Client Details
            </span>
            <p className="mt-0.5 text-xs font-bold text-on-surface">
              JayamWeb Solution Pvt Ltd
            </p>
            <p className="text-[10px] text-on-surface-variant">
              GSTIN: 33AAAAA0000A1Z5 &bull; Chennai, TN
            </p>
          </div>

          <span
            className="sp-pop inline-flex items-center gap-1  px-1.5 py-0.5 text-[9px] font-bold text-[#15803D]"
            style={d(1800)}
          >
            <Check size={10} strokeWidth={3} />
            VERIFIED
          </span>
        </div>
      </div>

      {/* Fields slide in from left, one by one */}
      <div className="grid grid-cols-2 gap-2">
        {fields.map((f, i) => (
          <div
            key={f.label}
            className="sp-left rounded-lg border border-outline-variant/40 bg-surface-canvas px-2.5 py-2"
            style={d(1500 + i * 180)}
          >
            <p className="text-[9px] font-bold uppercase tracking-wider text-on-surface-variant">
              {f.label}
            </p>
            <p className="mt-0.5 text-[11px] font-medium text-on-surface">{f.value}</p>
          </div>
        ))}
      </div>

      <div
        className="sp-up flex items-center gap-1.5 rounded-lg border border-primary-container/20 bg-[#F4FAF7] px-2.5 py-1.5 text-[10px] font-medium text-primary-container"
        style={d(2400)}
      >
        <CheckCircle2 size={12} className="text-primary-container" />
        <span>Details auto-filled from GSTIN</span>
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* STEP 2 - Quotation : rows slide from right -> summary -> count-up   */
/* ------------------------------------------------------------------ */

const QuotationBody: React.FC = () => {
  const summary = [
    { label: "Subtotal", value: quotationExample.subtotal, tone: "" },
    { label: "Discount", value: -quotationExample.discount, tone: "text-[#15803D]" },
    { label: `CGST (${quotationExample.taxRate * 100}%)`, value: quotationExample.cgst, tone: "" },
    { label: `SGST (${quotationExample.taxRate * 100}%)`, value: quotationExample.sgst, tone: "" },
  ];

  return (
    <div className="flex h-full flex-col justify-between">
      <div>
        <div className="mb-1 flex items-center justify-between">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-on-surface-variant">
            Line Items
          </span>
          <span
            className="sp-up sp-pulse inline-flex items-center gap-1 rounded-md bg-[#E7F2EE] px-2 py-0.5 text-[10px] font-semibold text-primary-container"
            style={d(1000)}
          >
            <Plus size={11} /> Add item
          </span>
        </div>

        <div className="divide-y divide-surface-container rounded-lg border border-outline-variant/30 px-2.5">
          {quotationExample.items.map((item, i) => (
            <div
              key={item.name}
              className="sp-right flex items-center justify-between py-1.5"
              style={d(150 + i * 250)}
            >
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

        <div className="mt-2 space-y-1 px-1">
          {summary.map((row, i) => (
            <div
              key={row.label}
              className="sp-up flex items-center justify-between text-[11px] text-on-surface-variant"
              style={d(1000 + i * 120)}
            >
              <span>{row.label}</span>
              <span className={`font-semibold ${row.tone || "text-on-surface"}`}>
                {row.value < 0
                  ? `-${formatQuotationCurrency(Math.abs(row.value))}`
                  : formatQuotationCurrency(row.value)}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div
        className="sp-up mt-2 flex items-center justify-between rounded-lg bg-[#F4FAF7] px-3 py-2 ring-1 ring-primary-container/30"
        style={d(1450)}
      >
        <span className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">
          Grand Total
        </span>
        <span className="font-display text-lg font-extrabold text-primary-container">
          {formatQuotationCurrency(quotationExample.total)}
        </span>
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* STEP 3 - Branding : template cycling + logo drop + signature draw   */
/* ------------------------------------------------------------------ */

const templates = [
  { name: "Classic", accent: "#0B4D3C" },
  { name: "Executive", accent: "#1D4ED8" },
  { name: "Minimal", accent: "#7C3AED" },
];

const BrandingBody: React.FC = () => {
  const [sel, setSel] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setSel((p) => (p + 1) % templates.length), 1400);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex h-full flex-col justify-between">
      <div>
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-on-surface-variant">
            Choose Template
          </span>
          <span key={sel} className="sp-pop text-[10px] font-bold text-primary-container">
            {templates[sel].name}
          </span>
        </div>

        {/* Template thumbnails - selection keeps moving */}
        <div className="grid grid-cols-3 gap-2.5">
          {templates.map((t, i) => {
            const isSel = i === sel;
            return (
              <div key={t.name} className="sp-up" style={d(i * 150)}>
                <div
                  className={`relative rounded-lg border-2 p-2 transition-all duration-300 ${
                    isSel
                      ? "scale-105 border-primary-container bg-[#F4FAF7] shadow-md"
                      : "border-outline-variant/40 bg-white"
                  }`}
                >
                  <div className="h-2 w-8 rounded" style={{ backgroundColor: t.accent }} />
                  <div className="mt-1.5 h-1 w-12 rounded bg-[#D6DCE1]" />
                  <div className="mt-3 space-y-1">
                    <div className="h-1 rounded bg-[#E1E6EA]" />
                    <div className="h-1 rounded bg-[#E1E6EA]" />
                    <div className="h-1 w-3/4 rounded bg-[#E1E6EA]" />
                  </div>
                  <div
                    className="ml-auto mt-3 h-1.5 w-6 rounded"
                    style={{ backgroundColor: t.accent, opacity: 0.6 }}
                  />
                  {isSel && (
                    <span className="sp-pop absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary-container text-white">
                      <Check size={10} strokeWidth={3} />
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Logo drop + Signature draw */}
      <div className="grid grid-cols-2 gap-2.5">
        <div className="flex items-center gap-2 rounded-lg border border-dashed border-outline-variant px-3 py-2.5">
          <div
            className="sp-drop flex h-8 w-8 items-center justify-center rounded-md bg-primary-container text-sm font-bold text-white"
            style={d(700)}
          >
            Q
          </div>
          <div>
            <p className="text-[11px] font-semibold text-on-surface">Company logo</p>
            <p className="text-[9px] text-on-surface-variant">Uploaded ✓</p>
          </div>
        </div>

        <div className="rounded-lg border border-dashed border-outline-variant px-3 py-1.5">
          <p className="text-[9px] font-semibold uppercase tracking-wider text-on-surface-variant">
            Signature
          </p>
          <svg viewBox="0 0 130 40" className="h-8 w-full" fill="none">
            <path
              d="M5 28 C 18 4, 28 40, 42 18 S 66 8, 78 26 S 102 34, 124 12"
              stroke="#0B4D3C"
              strokeWidth="2"
              strokeLinecap="round"
              pathLength={1}
              strokeDasharray={1}
              strokeDashoffset={1}
              className="sp-draw"
              style={d(1000)}
            />
          </svg>
        </div>
      </div>

      {/* Bank details */}
      <div
        className="sp-up flex items-center justify-between rounded-lg border border-primary-container/40 bg-[#F4FAF7] p-2.5 text-[10px]"
        style={d(1900)}
      >
        <div className="flex items-center gap-1.5 text-on-surface">
          <CreditCard size={13} className="text-primary-container" />
          <span className="font-semibold">HDFC Bank: A/C 50200088991</span>
        </div>
        <span className="font-mono text-on-surface-variant">IFSC: HDFC0000123</span>
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* STEP 4 - Send : progress bar -> email -> press -> plane flies -> sent */
/* ------------------------------------------------------------------ */

const SendBody: React.FC = () => (
  <div className="flex h-full flex-col justify-between">
    {/* PDF generation progress */}
    <div className="rounded-xl border border-outline-variant/40 bg-surface-canvas p-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#E7F2EE] text-primary-container">
            <FileText size={16} />
          </div>
          <div>
            <p className="text-xs font-bold text-on-surface">QT-2026-0001.pdf</p>
            <p className="text-[10px] text-on-surface-variant">
              Grand Total • {formatQuotationCurrency(quotationExample.total)}
            </p>
          </div>
        </div>

        <span
          className="sp-pop inline-flex items-center gap-1 rounded bg-[#DCFCE7] px-1.5 py-0.5 text-[9px] font-bold text-[#15803D]"
          style={d(1500)}
        >
          <Check size={10} strokeWidth={3} />
          PDF READY
        </span>
      </div>

      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-surface-container">
        <div className="sp-bar h-full rounded-full bg-primary-container" style={d(200)} />
      </div>
    </div>

    {/* Email composer */}
    <div
      className="sp-up rounded-xl border border-outline-variant/40 bg-white p-3"
      style={d(1600)}
    >
      <div className="flex items-center gap-2 text-[11px]">
        <Mail size={13} className="text-primary-container" />
        <span className="text-on-surface-variant">To:</span>
        <span className="font-medium text-on-surface">accounts@Jayam.in</span>
      </div>
      <div className="mt-1.5 border-t border-surface-container pt-1.5 text-[11px]">
        <span className="text-on-surface-variant">Subject: </span>
        <span className="font-medium text-on-surface">Quotation QT-2026-0001 from QuotFlow</span>
      </div>
    </div>

    {/* Send button + flying plane */}
    <div className="relative flex items-center justify-end overflow-visible">
      <Send
        size={18}
        className="sp-fly absolute right-16 top-1/2 -translate-y-1/2 text-primary-container"
        style={d(2450)}
      />
      <div className="sp-press" style={d(2300)}>
        <span
          aria-hidden="true"
          className="inline-flex h-8 items-center justify-center rounded-sm bg-primary px-3 text-xs font-medium text-white shadow-xs"
        >
          <Send size={13} className="mr-1" />
          Send to Client
        </span>
      </div>
    </div>

    {/* Success */}
    <div
      className="sp-up flex items-center gap-2 rounded-lg bg-[#DCFCE7] px-3 py-2 text-[11px] font-semibold text-[#15803D]"
      style={d(3000)}
    >
      <CheckCircle2 size={15} />
      Quotation sent to accounts@jayam.in
    </div>
  </div>
);

/* ------------------------------------------------------------------ */
/* Main component                                                      */
/* ------------------------------------------------------------------ */

const stepConfigs = [
  {
    badge: "STEP 01 • CUSTOMER",
    badgeColor: "text-primary-container bg-[#E7F2EE]",
    complianceBadge: {
      icon: UserCheck,
      title: "Customer Profiling",
      text: "Auto-matched GSTIN & State Rules",
    },
    Body: CustomerBody,
  },
  {
    badge: "STEP 02 • QUOTATION",
    badgeColor: "text-[#15803D] bg-[#DCFCE7]",
    complianceBadge: {
      icon: CheckCircle2,
      title: "Estimation Engine",
      text: "100% Error-free Tax & Totals",
    },
    Body: QuotationBody,
  },
  {
    badge: "STEP 03 • BRANDING",
    badgeColor: "text-primary-container bg-[#E7F2EE]",
    complianceBadge: {
      icon: Building2,
      title: "Company Identity",
      text: "Official Logo & Bank Details",
    },
    Body: BrandingBody,
  },
  {
    badge: "STEP 04 • READY TO SEND",
    badgeColor: "text-[#15803D] bg-[#DCFCE7]",
    complianceBadge: {
      icon: ShieldCheck,
      title: "Compliance Status",
      text: "100% GST-Ready Quote",
    },
    Body: SendBody,
  },
];

export const StepPreview: React.FC<StepPreviewProps> = ({ steps, active }) => {
  const config = stepConfigs[active] || stepConfigs[0];
  const ComplianceIcon = config.complianceBadge.icon;
  const Body = config.Body;

  return (
    <><div className="relative w-full" aria-label={`${steps[active]?.title ?? "Step"} preview`}>
      {/* Subtle Gradient Halo - Match Home */}
      <div
        className="pointer-events-none absolute inset-2 rounded-3xl bg-primary-container/10 blur-xl"
        aria-hidden="true" />

      {/* Main Quotation Surface Card */}
      <div className="how-it-works-preview-card relative flex h-[420px] w-full flex-col rounded-2xl border border-outline-variant/50 bg-white p-4 sm:p-5 shadow-[0_12px_32px_rgba(11,77,60,0.08)]">
        {/* Card Header: Brand & Status Tag */}
        <div className="flex shrink-0 items-center justify-between border-b border-surface-container pb-3">
          <div className="flex items-center gap-2">
            <img src={`${import.meta.env.BASE_URL}Logo.png`} alt="Logo" className="h-7 w-7 object-contain" />
            <div>
              <p className="font-display text-sm font-bold tracking-tight text-on-surface">
                QuotFlow
              </p>
              <p className="text-[10px] text-on-surface-variant">sales@quotflow.com</p>
            </div>
          </div>

          <span
            key={active}
            className={`sp-pop inline-flex items-center gap-1.5 rounded px-2.5 py-0.5 text-[10px] font-bold ${config.badgeColor}`}
          >
            {config.badge}
          </span>
        </div>

        {/* Step body */}
        <div key={active} className="flex-1 pt-3">
          <Body />
        </div>
      </div>

      {/* Floating live badge - Match Home */}
      <div
        key={`badge-${active}`}
        className="sp-up absolute -bottom-3 -left-3 hidden sm:flex items-center gap-2.5 rounded-xl border border-outline-variant/40 bg-white px-3.5 py-2 shadow-[0_8px_20px_rgba(15,23,42,0.08)] animate-float"
        style={d(400)}
      >
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#ECFDF5]">
          <ComplianceIcon size={16} className="text-mint-accent" />
        </div>
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-wider text-on-surface-variant">
            {config.complianceBadge.title}
          </p>
          <p className="text-xs font-bold text-success">{config.complianceBadge.text}</p>
        </div>
      </div>
    </div><style>{`
        @keyframes spUp    { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }
        @keyframes spLeft  { from { opacity: 0; transform: translateX(-24px); } to { opacity: 1; transform: none; } }
        @keyframes spRight { from { opacity: 0; transform: translateX(24px); } to { opacity: 1; transform: none; } }
        @keyframes spPop   { 0% { opacity: 0; transform: scale(.4); } 60% { opacity: 1; transform: scale(1.15); } 100% { opacity: 1; transform: scale(1); } }
        @keyframes spDrop  { 0% { opacity: 0; transform: translateY(-30px) scale(.8); } 60% { opacity: 1; transform: translateY(4px) scale(1.05); } 100% { opacity: 1; transform: none; } }
        @keyframes spBar   { from { width: 0; } to { width: 100%; } }
        @keyframes spDraw  { to { stroke-dashoffset: 0; } }
        @keyframes spFly   { 0% { opacity: 0; transform: translate(0,-50%) rotate(0); } 20% { opacity: 1; } 100% { opacity: 0; transform: translate(150px,-130%) rotate(-14deg); } }
        @keyframes spPress { 0%, 100% { transform: scale(1); } 50% { transform: scale(.9); } }
        @keyframes spCaret { 50% { opacity: 0; } }
        @keyframes spPulse { 0%, 100% { box-shadow: 0 0 0 0 rgba(11,77,60,.3); } 50% { box-shadow: 0 0 0 6px rgba(11,77,60,0); } }

        .sp-up    { animation: spUp .5s ease-out var(--d, 0ms) both; }
        .sp-left  { animation: spLeft .5s ease-out var(--d, 0ms) both; }
        .sp-right { animation: spRight .5s ease-out var(--d, 0ms) both; }
        .sp-pop   { animation: spPop .45s cubic-bezier(.2,.9,.3,1.3) var(--d, 0ms) both; }
        .sp-drop  { animation: spDrop .6s ease-out var(--d, 0ms) both; }
        .sp-bar   { animation: spBar 1.2s ease-in-out var(--d, 0ms) both; }
        .sp-draw  { animation: spDraw 1.4s ease-in-out var(--d, 0ms) both; }
        .sp-fly   { animation: spFly .9s ease-in var(--d, 0ms) both; }
        .sp-press { animation: spPress .35s ease-in-out var(--d, 0ms) both; }
        .sp-caret { animation: spCaret 1s steps(1) infinite; }
        .sp-pulse { animation: spUp .5s ease-out var(--d, 0ms) both, spPulse 1.6s ease-in-out 1.5s infinite; }

        @media (prefers-reduced-motion: reduce) {
          .sp-up, .sp-left, .sp-right, .sp-pop, .sp-drop,
          .sp-bar, .sp-draw, .sp-fly, .sp-press, .sp-caret, .sp-pulse {
            animation: none !important;
          }
          .sp-draw { stroke-dashoffset: 0; }
          .sp-bar { width: 100%; }
        }
      `}</style></>
  
  );
};

export default StepPreview;