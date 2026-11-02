import { ChevronDown } from "lucide-react";

const questions = [
  {
    question: "What is this platform?",
    answer:
      "It is a simple business management platform that helps you create professional quotations, manage customers and products, and keep your quotation workflow organized in one place.",
  },
  {
    question: "Can I create quotations quickly?",
    answer:
      "Yes. Add your customer and products, select your preferred template, and generate a professional quotation in just a few steps.",
  },
  {
    question: "Can I customize my quotations?",
    answer:
      "Yes. You can choose from the available quotation templates and configure your business information and branding according to your plan.",
  },
  {
    question: "Can I manage my customers and products?",
    answer:
      "Yes. You can maintain your customer and product information in one place, making it easier to reuse them when creating new quotations.",
  },
  {
    question: "Can I download quotations as PDF?",
    answer:
      "Yes. Quotations can be generated and downloaded as professional PDF documents that are ready to share with your customers.",
  },
  {
    question: "Is there a free plan?",
    answer:
      "Yes. You can start with the Free plan and use the available features without committing to a paid subscription.",
  },
  {
    question: "Can I change or upgrade my subscription plan later?",
    answer:
      "Yes. You can change or upgrade your subscription as your business grows and your feature or usage needs change.",
  },
  {
    question: "Can multiple users use the platform?",
    answer:
      "Yes. Plans that support team management allow you to add users and manage access according to your business requirements.",
  },
  {
    question: "Is my business data secure?",
    answer:
      "Your business information is handled through controlled access and tenant-based data separation so that your company's data remains within your account.",
  },
  {
    question: "Do I need technical knowledge to use it?",
    answer:
      "No. The platform is designed with a straightforward workflow so you can manage quotations, customers, and products without technical knowledge.",
  },
  {
    question: "Can I use it as my business grows?",
    answer:
      "Yes. You can start with the features you need today and move to higher plans as your quotation volume, users, and business requirements increase.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="scroll-mt-20 bg-white px-4 py-16 text-on-surface sm:px-6 sm:py-20 lg:scroll-mt-24 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-4xl">
        <header className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-secondary sm:text-sm">
            FAQ
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-on-surface sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-sm leading-7 text-on-surface-variant sm:text-base">
            Everything you need to know about managing your quotations and
            business.
          </p>
        </header>

        <div className="divide-y divide-outline-variant/50 border-y border-outline-variant/50">
          {questions.map(({ question, answer }, index) => (
            <details key={question} className="group py-1" open={index === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 font-display text-base font-bold text-on-surface marker:hidden sm:py-6 sm:text-lg [&::-webkit-details-marker]:hidden">
                <span>{question}</span>
                <ChevronDown
                  size={20}
                  aria-hidden="true"
                  className="shrink-0 text-primary-container transition-transform duration-200 group-open:rotate-180"
                />
              </summary>
              <p className="max-w-3xl pb-5 pr-8 text-sm leading-7 text-on-surface-variant sm:pb-6 sm:text-base">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}