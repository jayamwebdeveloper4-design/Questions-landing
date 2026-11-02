import {
  ArrowRight,
  Check,
  Users,
  BriefcaseBusiness,
  Building2,

  Store,
} from "lucide-react";

const audiences = [
  {
    icon: BriefcaseBusiness,
    title: "Small Business Owners",
    description:
      "Spend less time managing quotations and more time running your business. Keep customers, products, and quotations organized from one place.",
    points: [
      "Create professional quotations quickly",
      "Manage customers and products easily",
      "Keep quotation records organized",
      "Reduce repetitive manual work",
    ],
  },
  {
    icon: Users,
    title: "Sales Teams",
    description:
      "Give your sales team a faster way to prepare quotations, manage customer information, and keep every opportunity moving forward.",
    points: [
      "Prepare quotations faster",
      "Access customer information easily",
      "Use consistent quotation templates",
      "Keep the sales workflow organized",
    ],
  },
  {
    icon: Building2,
    title: "Growing Companies",
    description:
      "As your business grows, your quotation workflow shouldn't become harder to manage. Keep your teams and business data organized as you scale.",
    points: [
      "Manage multiple team members",
      "Organize products and customers",
      "Maintain consistent workflows",
      "Scale without unnecessary complexity",
    ],
  },
  {
    icon: Store,
    title: "Service Businesses",
    description:
      "Whether you provide consulting, installation, maintenance, or professional services, create clear quotations that are easy for customers to understand.",
    points: [
      "Create clear service quotations",
      "Maintain reusable product or service details",
      "Present pricing professionally",
      "Keep customer records organized",
    ],
  },
];

// const useCases = [
//   {
//     icon: FileText,
//     title: "Quotation Management",
//     description:
//       "Create, manage, and organize quotations without relying on scattered documents or spreadsheets.",
//   },
//   {
//     icon: Users,
//     title: "Customer Management",
//     description:
//       "Keep customer details organized so your team can quickly find the information they need.",
//   },
//   {
//     icon: Package,
//     title: "Product Management",
//     description:
//       "Maintain your product and pricing information in one organized place for faster quotation creation.",
//   },
//   {
//     icon: BarChart3,
//     title: "Business Workflow",
//     description:
//       "Bring your everyday quotation workflow together so your team can work with greater consistency.",
//   },
// ];

export default function WhoItsFor() {
  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* AUDIENCES */}
      <section id="whoItsFor" className="scroll-mt-20 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#004d4a]">
              Designed for you
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
              One platform.
              <span className="block text-[#004d4a]">
                Different kinds of businesses.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Whether you're working alone or managing a growing team,
              build a quotation workflow that fits the way you work.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-5xl gap-4 lg:grid-cols-2">

            {audiences.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#004d4a]/30 hover:shadow-xl"
                >
                  <div className="flex items-start justify-between gap-5">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#004d4a]/10 text-[#004d4a]">
                      <Icon size={20} />
                    </div>

                    <ArrowRight
                      size={20}
                      className="text-gray-300 transition group-hover:translate-x-1 group-hover:text-[#004d4a]"
                    />
                  </div>

                  <h3 className="mt-4 text-lg font-semibold text-gray-950 sm:text-xl">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-5 text-gray-600">
                    {item.description}
                  </p>

                  <div className="mt-4 space-y-2">
                    {item.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-center gap-2.5 text-xs text-gray-700 sm:text-sm"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#004d4a]/10 text-[#004d4a]">
                          <Check size={13} />
                        </span>

                        {point}
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}

          </div>
        </div>
      </section>


      {/* INTRO */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#004d4a]">
                Made for real workflows
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
                Your business is different.
                <span className="block text-gray-500">
                  Your workflow should still feel simple.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-gray-600">
                Every business handles quotations differently. Some teams
                create a few quotations each week, while others manage them
                every day.
              </p>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                The platform is designed to fit different business sizes and
                workflows without adding unnecessary complexity. Keep the
                information you need organized and make everyday quotation
                work easier for your team.
              </p>
            </div>

          </div>
        </div>
      </section>


    </div>
  );
}