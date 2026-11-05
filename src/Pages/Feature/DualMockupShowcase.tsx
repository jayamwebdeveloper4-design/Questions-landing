import React, { useState } from "react";
import {
  Lock,
  RotateCw,
  Bell,
  ChevronRight,
  Plus,

  Download,
  UploadCloud,
  FileSpreadsheet,
  Eye,
  Trash2,
  Mail,
  FileText,
  Package,
  Users,
  BarChart3,
  Sliders,
  CreditCard,
  ShieldCheck,
  Calendar,
  TrendingUp,
  Menu,
  X,
  ArrowUpRight,
  Wifi,
  Battery,
  Signal,
  Edit3,
} from "lucide-react";
import type { FeatureId } from "./featuresData";

export type ScreenTab =
  | "quotation"
  | "products"
  | "customer"
  | "reports"
  | "settings"
  | "dashboard"
  | "users"
  | "subscription";

export const featureIdToTab: Record<FeatureId, ScreenTab> = {
  quotations: "quotation",
  products: "products",
  customers: "customer",
  pdf: "reports",
  templates: "settings",
  analytics: "dashboard",
  team: "users",
  subscription: "subscription",
};

export const tabToFeatureId: Record<ScreenTab, FeatureId> = {
  quotation: "quotations",
  products: "products",
  customer: "customers",
  reports: "pdf",
  settings: "templates",
  dashboard: "analytics",
  users: "team",
  subscription: "subscription",
};

interface DualMockupShowcaseProps {
  activeFeatureId: FeatureId;
  onSelectFeature?: (id: FeatureId) => void;
  onInteraction?: () => void;
  onLeave?: () => void;
}

export const DualMockupShowcase: React.FC<DualMockupShowcaseProps> = ({
  activeFeatureId,
  onSelectFeature,
  onInteraction,
  onLeave,
}) => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const currentTab = featureIdToTab[activeFeatureId] || "quotation";

  const handleTabChange = (tab: ScreenTab) => {
    const targetFeatureId = tabToFeatureId[tab];
    if (targetFeatureId && onSelectFeature) {
      onSelectFeature(targetFeatureId);
    }
  };

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: BarChart3 },
    { id: "products", label: "AddNewProduct", icon: Package },
    { id: "quotation", label: "Quotation", icon: FileText },
    { id: "customer", label: "Customer", icon: Users },
    { id: "reports", label: "Report", icon: TrendingUp },
    { id: "settings", label: "Setting", icon: Sliders },
    { id: "subscription", label: "Subscription", icon: CreditCard },
    { id: "users", label: "Users", icon: ShieldCheck },
  ] as const;

  return (
    <div
      className="relative w-full select-none"
      onMouseEnter={onInteraction}
      onMouseLeave={onLeave}
    >
      {/* ========================================================= */}
      {/* 1. LAPTOP / DESKTOP VIEWPORT (COMPACT SINGLE PAGE HEIGHT) */}
      {/* ========================================================= */}
      <div className="w-full max-w-[86%] sm:max-w-[85%] lg:max-w-[86%]">
        <div className="bg-slate-900 rounded-xl p-1.5 sm:p-2 shadow-[0_20px_50px_-15px_rgba(15,23,42,0.22)] border border-slate-800 transition-all">
          {/* Laptop Window Header */}
          <div className="flex items-center justify-between px-2 py-0.5 text-slate-400 text-[9px] border-b border-slate-800/80 mb-1">
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 inline-block"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>
            </div>
            <div className="bg-slate-800/90 px-2.5 py-0.2 rounded text-[9px] text-slate-300 flex items-center gap-1 font-mono border border-slate-700/50">
              <Lock size={8} className="text-emerald-400" />
              <span className="truncate max-w-[130px] sm:max-w-xs">admin.acerenterprise.internal/app</span>
            </div>
            <div className="flex items-center text-slate-400">
              <RotateCw size={9} />
            </div>
          </div>

          {/* Desktop Inside Screen */}
          <div className="bg-slate-50 rounded-lg overflow-hidden flex h-[365px] sm:h-[385px] text-slate-800 shadow-inner border border-slate-200">
            {/* Desktop Sidebar */}
            <aside className="w-28 sm:w-36 border-r border-slate-200 bg-white flex flex-col justify-between shrink-0">
              <div>
                {/* Brand */}
                <div className="p-2 flex items-center gap-1.5 border-b border-slate-100">
                  <div className="w-5 h-5 rounded-md bg-emerald-700 flex items-center justify-center text-white shadow-xs font-black text-[10px] shrink-0">
                    <FileText size={11} />
                  </div>
                  <div className="min-w-0">
                    <div className="font-bold text-[10px] text-slate-900 truncate tracking-tight">
                      ACER Admin
                    </div>
                    <div className="text-[7px] text-slate-400 font-medium leading-none truncate">
                      Enterprise
                    </div>
                  </div>
                </div>

                {/* Nav Items */}
                <div className="p-1">
                  <div className="text-[7px] font-bold text-slate-400 tracking-wider uppercase px-1.5 mb-0.5">
                    WORKFLOW
                  </div>
                  <nav className="space-y-0.5 text-[9px] font-medium">
                    {navItems.map((item) => {
                      const IconComponent = item.icon;
                      const isActive = currentTab === item.id;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => handleTabChange(item.id)}
                          className={`w-full flex items-center gap-1.5 px-1.5 py-1 rounded text-left transition-all ${
                            isActive
                              ? "bg-[#064e3b] text-white font-bold shadow-xs"
                              : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                          }`}
                        >
                          <IconComponent size={10} className="shrink-0" />
                          <span className="truncate">{item.label}</span>
                        </button>
                      );
                    })}
                  </nav>
                </div>
              </div>

              {/* Profile Bottom Bar */}
              <div className="p-1.5 border-t border-slate-100">
                <div className="flex items-center gap-1 p-1 rounded bg-slate-50 border border-slate-200/60">
                  <div className="w-4 h-4 rounded bg-[#064e3b] text-white flex items-center justify-center font-bold text-[8px] shrink-0">
                    A
                  </div>
                  <div className="min-w-0 truncate leading-tight">
                    <div className="text-[8px] font-bold text-slate-800 truncate">ACER Admin</div>
                    <div className="text-[7px] text-slate-400 truncate">admin@JayamWeb.in</div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Desktop Content Area */}
            <div className="flex-1 flex flex-col bg-slate-50 min-w-0 overflow-hidden">
              {/* Top Bar Header */}
              <header className="h-8 bg-white border-b border-slate-200 px-2.5 flex items-center justify-between shrink-0">
                <div className="text-[9px] font-semibold text-slate-500 flex items-center gap-1 truncate">
                  <span>Portal</span>
                  <ChevronRight size={9} className="text-slate-300" />
                  <span className="text-slate-800 font-bold capitalize truncate">
                    {navItems.find((n) => n.id === currentTab)?.label}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="relative">
                    <span className="w-4 h-4 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center text-[8px]">
                      <Bell size={9} />
                    </span>
                    <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-rose-500 text-white rounded-full text-[5px] font-bold flex items-center justify-center">
                      2
                    </span>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-[#064e3b] text-white text-[8px] font-bold flex items-center justify-center">
                    A
                  </div>
                </div>
              </header>

              {/* Dynamic Screen View (Desktop) */}
              <div className="flex-1 p-2 overflow-y-auto pr-14 sm:pr-18">
                <DesktopScreenContent currentTab={currentTab} onTabChange={handleTabChange} />
              </div>
            </div>
          </div>

          {/* Laptop Lip / Stand */}
          <div className="w-20 h-1 bg-slate-700/80 mx-auto mt-1 rounded-b-md"></div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 2. SMARTPHONE VIEWPORT (FOREGROUND OVERLAP ON THE RIGHT)  */}
      {/* ========================================================= */}
      <div className="absolute right-0 sm:-right-1 bottom-1 sm:bottom-2 z-20 w-[155px] sm:w-[175px] md:w-[185px] transition-transform duration-200 hover:scale-[1.02]">
        <div className="bg-slate-900 rounded-[28px] sm:rounded-[32px] p-1.5 border-[2.5px] border-slate-800 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.08)]">
          {/* Dynamic Island */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-14 h-3 bg-black rounded-full z-30 flex items-center justify-between px-1">
            <div className="w-1 h-1 rounded-full bg-slate-900 border border-slate-800"></div>
            <div className="w-0.5 h-0.5 rounded-full bg-emerald-500/80"></div>
          </div>

          {/* Phone Screen Surface */}
          <div className="bg-white rounded-[22px] sm:rounded-[26px] overflow-hidden flex flex-col h-[310px] sm:h-[330px] text-slate-800 select-none relative">
            {/* Status Bar */}
            <div className="h-5 pt-1 px-2.5 flex items-center justify-between text-[8px] font-bold text-slate-800 bg-white shrink-0 z-20">
              <span>9:41</span>
              <div className="flex items-center gap-0.5 text-slate-700">
                <Signal size={8} />
                <Wifi size={8} />
                <Battery size={9} />
              </div>
            </div>

            {/* Mobile App Bar */}
            <header className="px-2 py-1 bg-white border-b border-slate-100 flex items-center justify-between shrink-0 z-20">
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => setMobileDrawerOpen(!mobileDrawerOpen)}
                  className="w-5 h-5 rounded hover:bg-slate-100 flex items-center justify-center text-slate-700"
                >
                  <Menu size={11} />
                </button>
                <div className="flex items-center gap-0.5 font-bold text-[9px] text-slate-900">
                  <span className="w-1 h-1 rounded-full bg-emerald-600 inline-block"></span>
                  <span>ACER</span>
                </div>
              </div>
              <div className="relative">
                <span className="w-4 h-4 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center text-[8px]">
                  <Bell size={9} />
                </span>
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-rose-500 text-white rounded-full text-[5px] font-bold flex items-center justify-center">
                  2
                </span>
              </div>
            </header>

            {/* Slide-over Drawer for Mobile */}
            {mobileDrawerOpen && (
              <div className="absolute inset-0 z-40 bg-slate-900/40 backdrop-blur-xs flex">
                <div className="w-36 bg-white h-full p-2 flex flex-col justify-between shadow-2xl">
                  <div>
                    <div className="flex items-center justify-between pb-1 border-b border-slate-100 mb-1">
                      <span className="font-bold text-[9px] text-slate-900 flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-[#064e3b]"></span> Menu
                      </span>
                      <button
                        type="button"
                        onClick={() => setMobileDrawerOpen(false)}
                        className="text-slate-400 hover:text-slate-600 p-0.5"
                      >
                        <X size={10} />
                      </button>
                    </div>
                    <div className="space-y-0.5">
                      {navItems.map((item) => {
                        const IconC = item.icon;
                        const isActive = currentTab === item.id;
                        return (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => {
                              handleTabChange(item.id);
                              setMobileDrawerOpen(false);
                            }}
                            className={`w-full text-left flex items-center gap-1 p-0.5 rounded text-[8px] font-medium transition-colors ${
                              isActive
                                ? "bg-emerald-50 text-emerald-800 font-bold"
                                : "text-slate-600 hover:bg-slate-50"
                            }`}
                          >
                            <IconC size={9} className="text-emerald-700" />
                            <span className="truncate">{item.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  <div className="text-[7px] text-slate-400 border-t border-slate-100 pt-1 font-mono">
                    v2.4
                  </div>
                </div>
                <div className="flex-1" onClick={() => setMobileDrawerOpen(false)} />
              </div>
            )}

            {/* Mobile Screen Content */}
            <div className="flex-1 p-1.5 overflow-y-auto bg-slate-50">
              <MobileScreenContent currentTab={currentTab} onTabChange={handleTabChange} />
            </div>

            {/* Mobile Bottom Navigation Bar */}
            <nav className="h-8 bg-white border-t border-slate-200/80 px-1 flex items-center justify-around shrink-0 z-20 text-[7px] font-semibold text-slate-500">
              <button
                type="button"
                onClick={() => handleTabChange("dashboard")}
                className={`flex flex-col items-center ${
                  currentTab === "dashboard" ? "text-emerald-700 font-bold" : "text-slate-400"
                }`}
              >
                <BarChart3 size={9} />
                <span>Dash</span>
              </button>
              <button
                type="button"
                onClick={() => handleTabChange("products")}
                className={`flex flex-col items-center ${
                  currentTab === "products" ? "text-emerald-700 font-bold" : "text-slate-400"
                }`}
              >
                <Package size={9} />
                <span>Items</span>
              </button>
              <button
                type="button"
                onClick={() => handleTabChange("quotation")}
                className={`flex flex-col items-center ${
                  currentTab === "quotation" ? "text-emerald-700 font-bold" : "text-slate-400"
                }`}
              >
                <FileText size={9} />
                <span>Quote</span>
              </button>
              <button
                type="button"
                onClick={() => handleTabChange("customer")}
                className={`flex flex-col items-center ${
                  currentTab === "customer" ? "text-emerald-700 font-bold" : "text-slate-400"
                }`}
              >
                <Users size={9} />
                <span>Client</span>
              </button>
              <button
                type="button"
                onClick={() => handleTabChange("subscription")}
                className={`flex flex-col items-center ${
                  currentTab === "subscription" ? "text-emerald-700 font-bold" : "text-slate-400"
                }`}
              >
                <CreditCard size={9} />
                <span>Plan</span>
              </button>
            </nav>

            {/* Home Indicator */}
            <div className="w-12 h-0.5 bg-slate-300 rounded-full mx-auto my-0.5 shrink-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// DESKTOP SCREEN CONTENT RENDERER
// ==========================================
interface ScreenProps {
  currentTab: ScreenTab;
  onTabChange: (tab: ScreenTab) => void;
}

const DesktopScreenContent: React.FC<ScreenProps> = ({ currentTab, onTabChange }) => {
  switch (currentTab) {
    case "dashboard":
      return (
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-[11px] font-bold text-[#064e3b]">Dashboard Overview</h3>
              <p className="text-[8px] text-slate-500">Live metrics & quotation stats.</p>
            </div>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => onTabChange("products")}
                className="px-1 py-0.2 bg-white border border-slate-200 text-[8px] font-semibold rounded text-slate-700 flex items-center gap-0.5 hover:bg-slate-50"
              >
                <Package size={9} className="text-emerald-600" /> Product
              </button>
              <button
                type="button"
                onClick={() => onTabChange("quotation")}
                className="px-1 py-0.2 bg-[#064e3b] text-white text-[8px] font-semibold rounded flex items-center gap-0.5 shadow-xs"
              >
                <Plus size={9} /> Quote
              </button>
            </div>
          </div>

          {/* 4 Metric Cards */}
          <div className="grid grid-cols-4 gap-1">
            <div className="bg-white p-1 rounded border border-slate-200/80">
              <div className="text-[7px] font-bold text-slate-400 uppercase">QUOTES</div>
              <div className="text-xs font-extrabold text-slate-800">4</div>
            </div>
            <div className="bg-white p-1 rounded border border-slate-200/80">
              <div className="text-[7px] font-bold text-slate-400 uppercase">PIPELINE</div>
              <div className="text-xs font-extrabold text-[#064e3b]">₹84,300</div>
            </div>
            <div className="bg-white p-1 rounded border border-slate-200/80">
              <div className="text-[7px] font-bold text-slate-400 uppercase">PRODUCTS</div>
              <div className="text-xs font-extrabold text-slate-800">10</div>
            </div>
            <div className="bg-white p-1 rounded border border-slate-200/80">
              <div className="text-[7px] font-bold text-slate-400 uppercase">CLIENTS</div>
              <div className="text-xs font-extrabold text-slate-800">3</div>
            </div>
          </div>

          {/* Velocity & Quick Hub */}
          <div className="grid grid-cols-12 gap-1.5">
            <div className="col-span-7 bg-white p-1.5 rounded border border-slate-200/80">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[9px] font-bold text-slate-800 flex items-center gap-0.5">
                  <BarChart3 size={9} className="text-emerald-700" /> Velocity
                </span>
                <span className="text-[7px] bg-slate-100 text-slate-600 px-1 py-0.2 rounded">Live</span>
              </div>
              <div className="grid grid-cols-3 gap-0.5 py-0.5 border-y border-slate-100 text-center">
                <div className="p-0.5 bg-slate-50 rounded">
                  <div className="text-[6px] text-slate-400 font-bold uppercase">Avg</div>
                  <div className="text-[9px] font-bold text-slate-800">₹21K</div>
                </div>
                <div className="p-0.5 bg-slate-50 rounded">
                  <div className="text-[6px] text-slate-400 font-bold uppercase">High</div>
                  <div className="text-[9px] font-bold text-slate-800">₹41K</div>
                </div>
                <div className="p-0.5 bg-slate-50 rounded">
                  <div className="text-[6px] text-slate-400 font-bold uppercase">Win</div>
                  <div className="text-[9px] font-bold text-emerald-600">68%</div>
                </div>
              </div>
            </div>

            <div className="col-span-5 bg-[#064e3b] text-white p-1.5 rounded flex flex-col justify-between">
              <div>
                <div className="text-[9px] font-bold text-emerald-200 mb-0.5 flex items-center gap-0.5">
                  <TrendingUp size={9} /> Quick Hub
                </div>
                <div className="space-y-0.5">
                  <button
                    type="button"
                    onClick={() => onTabChange("quotation")}
                    className="w-full text-left px-1 py-0.2 rounded bg-[#047857]/50 hover:bg-[#047857] text-[8px] font-medium flex justify-between items-center"
                  >
                    <span>Quotation</span>
                    <ArrowUpRight size={8} />
                  </button>
                  <button
                    type="button"
                    onClick={() => onTabChange("products")}
                    className="w-full text-left px-1 py-0.2 rounded bg-[#047857]/50 hover:bg-[#047857] text-[8px] font-medium flex justify-between items-center"
                  >
                    <span>Products (10)</span>
                    <ArrowUpRight size={8} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case "products":
      return (
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-[11px] font-bold text-[#064e3b]">Add New Product</h3>
              <p className="text-[8px] text-slate-500">Catalog parameters and unit pricing.</p>
            </div>
            <div className="flex items-center gap-1">
              <button type="button" className="px-1 py-0.2 bg-white border border-slate-200 text-[8px] font-semibold rounded text-slate-700 flex items-center gap-0.5">
                <Download size={8} /> Export
              </button>
              <button type="button" className="px-1 py-0.2 bg-emerald-600 text-white text-[8px] font-semibold rounded flex items-center gap-0.5">
                <FileSpreadsheet size={8} /> Import
              </button>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-1.5 rounded border border-slate-200/80 space-y-1">
            <div className="grid grid-cols-12 gap-1.5">
              <div className="col-span-3 border border-dashed border-slate-200 rounded p-1 flex flex-col items-center justify-center text-center bg-slate-50/50">
                <UploadCloud size={12} className="text-emerald-600 mb-0.5" />
                <span className="text-[8px] font-bold text-slate-800 leading-none">Upload</span>
              </div>
              <div className="col-span-9 space-y-1">
                <div className="grid grid-cols-2 gap-1">
                  <div>
                    <label className="text-[7px] font-bold text-slate-500 uppercase">Product Name *</label>
                    <input
                      type="text"
                      readOnly
                      value="Industrial Mixer 500L"
                      className="w-full mt-0.2 px-1 py-0.2 border border-slate-200 rounded text-[9px] bg-slate-50 font-medium"
                    />
                  </div>
                  <div>
                    <label className="text-[7px] font-bold text-slate-500 uppercase">Price (INR) *</label>
                    <input
                      type="text"
                      readOnly
                      value="₹ 120,000"
                      className="w-full mt-0.2 px-1 py-0.2 border border-slate-200 rounded text-[9px] bg-slate-50 font-mono font-bold text-emerald-800"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded border border-slate-200 overflow-hidden">
            <table className="w-full text-left text-[9px]">
              <thead className="bg-slate-50 text-[7px] font-bold text-slate-400 uppercase">
                <tr>
                  <th className="p-1 pl-2">Product</th>
                  <th className="p-1">Category</th>
                  <th className="p-1">Price</th>
                  <th className="p-1 text-right pr-2">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="p-1 pl-2 font-semibold text-slate-800">Marvel Iron Man Figurine</td>
                  <td className="p-1 text-slate-500">Collectibles</td>
                  <td className="p-1 font-bold font-mono text-emerald-800">₹1,499</td>
                  <td className="p-1 text-right pr-2 text-slate-400 space-x-1">
                    <button type="button" className="hover:text-emerald-700"><Eye size={9} /></button>
                    <button type="button" className="hover:text-emerald-700"><Edit3 size={9} /></button>
                    <button type="button" className="hover:text-rose-600"><Trash2 size={9} /></button>
                  </td>
                </tr>
                <tr>
                  <td className="p-1 pl-2 font-semibold text-slate-800">Industrial Mixer 500L</td>
                  <td className="p-1 text-slate-500">Machinery</td>
                  <td className="p-1 font-bold font-mono text-emerald-800">₹120,000</td>
                  <td className="p-1 text-right pr-2 text-slate-400 space-x-1">
                    <button type="button" className="hover:text-emerald-700"><Eye size={9} /></button>
                    <button type="button" className="hover:text-emerald-700"><Edit3 size={9} /></button>
                    <button type="button" className="hover:text-rose-600"><Trash2 size={9} /></button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );

    case "quotation":
      return (
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-[11px] font-bold text-[#064e3b]">Quotation Management</h3>
              <p className="text-[8px] text-slate-500">Manage, preview, and track proposals.</p>
            </div>
            <div className="flex items-center gap-1">
              <button type="button" className="px-1 py-0.2 bg-[#064e3b] text-white text-[8px] font-semibold rounded flex items-center gap-0.5 shadow-xs">
                <Plus size={8} /> New Quote
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-1">
            <div className="bg-white p-1 rounded border border-slate-200">
              <div className="text-[7px] font-bold text-slate-400 uppercase">QUOTES</div>
              <div className="text-xs font-extrabold text-slate-800">4</div>
            </div>
            <div className="bg-white p-1 rounded border border-slate-200">
              <div className="text-[7px] font-bold text-slate-400 uppercase">CLIENTS</div>
              <div className="text-xs font-extrabold text-slate-800">3</div>
            </div>
            <div className="bg-white p-1 rounded border border-slate-200">
              <div className="text-[7px] font-bold text-slate-400 uppercase">REVISIONS</div>
              <div className="text-xs font-extrabold text-slate-800">0</div>
            </div>
          </div>

          <div className="bg-white rounded border border-slate-200 overflow-hidden">
            <table className="w-full text-left text-[9px]">
              <thead className="bg-slate-50 text-[7px] font-bold text-slate-400 uppercase">
                <tr>
                  <th className="p-1 pl-2">QUOTATION</th>
                  <th className="p-1">CUSTOMER</th>
                  <th className="p-1">MOBILE</th>
                  <th className="p-1 text-right pr-2">ACTIONS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="p-1 pl-2">
                    <div className="flex items-center gap-0.5 font-bold text-slate-900">
                      <span>QT-2026-00006</span>
                      <span className="px-1 py-0.1 bg-emerald-100 text-emerald-800 text-[6px] rounded font-bold">V1</span>
                    </div>
                    <div className="text-[7px] text-emerald-700">✓ Converted</div>
                  </td>
                  <td className="p-1">
                    <div className="font-semibold text-slate-800 truncate">jayam W</div>
                    <div className="text-[7px] text-slate-400 truncate">Test Co</div>
                  </td>
                  <td className="p-1 font-mono text-slate-600 text-[8px]">9444286264</td>
                  <td className="p-1 text-right pr-2 text-slate-400 space-x-0.5">
                    <button type="button" className="hover:text-emerald-700"><Eye size={9} /></button>
                    <button type="button" className="hover:text-emerald-700"><Mail size={9} /></button>
                    <button type="button" className="hover:text-emerald-700"><Download size={9} /></button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );

    case "customer":
      return (
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-[11px] font-bold text-[#064e3b]">Client Directory</h3>
              <p className="text-[8px] text-slate-500">Track client accounts & proposals.</p>
            </div>
            <button type="button" className="px-1 py-0.2 bg-[#064e3b] text-white text-[8px] font-semibold rounded flex items-center gap-0.5 shadow-xs">
              <Plus size={8} /> Add Client
            </button>
          </div>

          <div className="grid grid-cols-3 gap-1">
            <div className="bg-white p-1 rounded border border-slate-200">
              <div className="text-[6px] font-bold text-slate-400 uppercase">CLIENTS</div>
              <div className="text-xs font-extrabold text-slate-800">3</div>
            </div>
            <div className="bg-white p-1 rounded border border-slate-200">
              <div className="text-[6px] font-bold text-slate-400 uppercase">QUOTES</div>
              <div className="text-xs font-extrabold text-slate-800">4</div>
            </div>
            <div className="bg-white p-1 rounded border border-slate-200">
              <div className="text-[6px] font-bold text-slate-400 uppercase">REGIONS</div>
              <div className="text-xs font-extrabold text-slate-800">2</div>
            </div>
          </div>

          <div className="bg-white rounded border border-slate-200 overflow-hidden">
            <table className="w-full text-left text-[9px]">
              <thead className="bg-slate-50 text-[7px] font-bold text-slate-400 uppercase">
                <tr>
                  <th className="p-1 pl-2">ORGANIZATION</th>
                  <th className="p-1">MOBILE</th>
                  <th className="p-1">LOCATION</th>
                  <th className="p-1 text-right pr-2">QUOTES</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="p-1 pl-2 font-semibold text-slate-800">
                    <div>Jayam Web Solutions</div>
                    <div className="text-[7px] text-slate-400 font-normal">Test Company Ltd</div>
                  </td>
                  <td className="p-1 font-mono text-slate-600 text-[8px]">9444286264</td>
                  <td className="p-1 text-slate-600">Gujarat</td>
                  <td className="p-1 text-right pr-2 font-bold text-emerald-700">2 Quotes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );

    case "reports":
      return (
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-[11px] font-bold text-[#064e3b]">Reports & Analytics</h3>
              <p className="text-[8px] text-slate-500">Volume and conversion stats.</p>
            </div>
            <button type="button" className="px-1 py-0.2 bg-[#064e3b] text-white text-[8px] font-semibold rounded flex items-center gap-0.5 shadow-xs">
              <Download size={8} /> Export
            </button>
          </div>

          <div className="grid grid-cols-3 gap-1">
            <div className="bg-white p-1 rounded border border-slate-200">
              <div className="text-[6px] font-bold text-slate-400 uppercase">PIPELINE</div>
              <div className="text-xs font-extrabold text-[#064e3b]">₹84,300</div>
            </div>
            <div className="bg-white p-1 rounded border border-slate-200">
              <div className="text-[6px] font-bold text-slate-400 uppercase">ISSUED</div>
              <div className="text-xs font-extrabold text-slate-800">4</div>
            </div>
            <div className="bg-white p-1 rounded border border-slate-200">
              <div className="text-[6px] font-bold text-slate-400 uppercase">WIN RATE</div>
              <div className="text-xs font-extrabold text-emerald-600">68%</div>
            </div>
          </div>

          <div className="bg-white p-2 rounded border border-slate-200 text-center py-4">
            <Calendar size={14} className="text-slate-300 mx-auto mb-0.5" />
            <div className="text-[10px] font-bold text-slate-700">Monthly Performance</div>
            <div className="text-[8px] text-slate-400">PDF ready to export</div>
          </div>
        </div>
      );

    case "settings":
      return (
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-[11px] font-bold text-[#064e3b]">Company Settings</h3>
              <p className="text-[8px] text-slate-500">Company details & GST.</p>
            </div>
            <span className="text-[8px] px-1 py-0.2 bg-slate-100 rounded text-slate-700 font-semibold border border-slate-200">
              Template: Executive
            </span>
          </div>

          <div className="bg-white p-1.5 rounded border border-slate-200 space-y-1">
            <div className="grid grid-cols-2 gap-1">
              <div>
                <label className="text-[7px] font-bold text-slate-400 uppercase">Company *</label>
                <input type="text" readOnly value="ACER Admin" className="w-full mt-0.2 p-0.5 border border-slate-200 rounded text-[9px] bg-slate-50" />
              </div>
              <div>
                <label className="text-[7px] font-bold text-slate-400 uppercase">Signatory *</label>
                <input type="text" readOnly value="JK-Prakash" className="w-full mt-0.2 p-0.5 border border-slate-200 rounded text-[9px] bg-slate-50" />
              </div>
            </div>
            <div>
              <label className="text-[7px] font-bold text-slate-400 uppercase">Address *</label>
              <input type="text" readOnly value="East Street mlkm, Gujarat" className="w-full mt-0.2 p-0.5 border border-slate-200 rounded text-[9px] bg-slate-50" />
            </div>
          </div>
        </div>
      );

    case "subscription":
      return (
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-[11px] font-bold text-[#064e3b]">Subscription</h3>
              <p className="text-[8px] text-slate-500">Plan tier & validity.</p>
            </div>
            <button type="button" className="px-1 py-0.2 bg-[#064e3b] text-white text-[8px] font-semibold rounded flex items-center gap-0.5 shadow-xs">
              Upgrade
            </button>
          </div>

          <div className="bg-white p-1.5 rounded border border-slate-200 space-y-1">
            <div className="flex items-start justify-between">
              <div>
                <span className="px-1 py-0.1 bg-emerald-100 text-emerald-800 text-[6px] font-bold rounded-full">
                  Active Plan
                </span>
                <div className="text-xs font-black text-slate-900 mt-0.2">
                  Business <span className="text-[8px] font-normal text-slate-400">/ Month</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-[8px] font-bold text-emerald-900">Verified</div>
              </div>
            </div>

            <div className="pt-1 border-t border-slate-100">
              <div className="flex justify-between text-[8px] font-semibold text-slate-600 mb-0.5">
                <span>Days Left</span>
                <span className="text-[#064e3b] font-bold">22 of 30 days</span>
              </div>
              <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-700 rounded-full" style={{ width: "73%" }}></div>
              </div>
            </div>
          </div>
        </div>
      );

    case "users":
      return (
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-[11px] font-bold text-[#064e3b]">User Management</h3>
              <p className="text-[8px] text-slate-500">Roles & permissions.</p>
            </div>
            <button type="button" className="px-1 py-0.2 bg-[#064e3b] text-white text-[8px] font-semibold rounded flex items-center gap-0.5 shadow-xs">
              <Plus size={8} /> Add
            </button>
          </div>

          <div className="bg-white rounded border border-slate-200 overflow-hidden">
            <table className="w-full text-left text-[9px]">
              <thead className="bg-slate-50 text-[7px] font-bold text-slate-400 uppercase">
                <tr>
                  <th className="p-1 pl-2">USER</th>
                  <th className="p-1">EMAIL</th>
                  <th className="p-1">ROLE</th>
                  <th className="p-1 text-right pr-2">STATUS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="p-1 pl-2 font-semibold text-slate-800 flex items-center gap-0.5">
                    <span className="w-3.5 h-3.5 rounded-full bg-slate-200 text-slate-700 text-[7px] font-bold flex items-center justify-center">AA</span>
                    ACER Admin
                  </td>
                  <td className="p-1 font-mono text-slate-600 text-[8px]">Admin@jayam.in</td>
                  <td className="p-1">
                    <span className="px-1 py-0.1 bg-emerald-100 text-emerald-800 text-[7px] font-bold rounded">
                      ADMIN
                    </span>
                  </td>
                  <td className="p-1 text-right pr-2 text-[8px] text-slate-400">
                    Active
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );

    default:
      return null;
  }
};

// ==========================================
// MOBILE SCREEN CONTENT RENDERER
// ==========================================
const MobileScreenContent: React.FC<ScreenProps> = ({ currentTab, onTabChange }) => {
  switch (currentTab) {
    case "dashboard":
      return (
        <div className="space-y-1">
          <div>
            <h4 className="text-[10px] font-bold text-[#064e3b]">Dashboard Overview</h4>
            <p className="text-[7px] text-slate-500">Real-time metrics</p>
          </div>
          <div className="grid grid-cols-2 gap-0.5">
            <button
              type="button"
              onClick={() => onTabChange("products")}
              className="p-0.5 bg-white border border-slate-200 rounded text-center text-[8px] font-semibold text-slate-700"
            >
              <Package size={9} className="text-emerald-700 mx-auto mb-0.2" /> Product
            </button>
            <button
              type="button"
              onClick={() => onTabChange("quotation")}
              className="p-0.5 bg-[#064e3b] text-white rounded text-center text-[8px] font-semibold"
            >
              <Plus size={9} className="mx-auto mb-0.2" /> Quote
            </button>
          </div>
          <div className="grid grid-cols-2 gap-0.5">
            <div className="bg-white p-1 rounded border border-slate-200">
              <div className="text-[6px] text-slate-400 font-bold uppercase">QUOTES</div>
              <div className="text-[10px] font-extrabold text-slate-800">4</div>
            </div>
            <div className="bg-white p-1 rounded border border-slate-200">
              <div className="text-[6px] text-slate-400 font-bold uppercase">PIPELINE</div>
              <div className="text-[10px] font-extrabold text-[#064e3b]">₹84.3K</div>
            </div>
          </div>
        </div>
      );

    case "products":
      return (
        <div className="space-y-1">
          <div>
            <h4 className="text-[10px] font-bold text-[#064e3b]">Product Catalog</h4>
            <p className="text-[7px] text-slate-500">Inventory item</p>
          </div>
          <div className="bg-white p-1 rounded border border-slate-200 space-y-0.5">
            <div className="text-[7px] font-bold text-slate-400">PRODUCT</div>
            <div className="text-[9px] font-bold text-slate-800 leading-tight">Industrial Mixer 500L</div>
            <div className="text-[7px] font-bold text-slate-400 mt-0.5">PRICE</div>
            <div className="text-[9px] font-bold font-mono text-emerald-800">₹ 120,000</div>
          </div>
        </div>
      );

    case "quotation":
      return (
        <div className="space-y-1">
          <div>
            <h4 className="text-[10px] font-bold text-[#064e3b]">Quotation Records</h4>
            <p className="text-[7px] text-slate-500">Proposals status</p>
          </div>
          <div className="bg-white p-1 rounded border border-slate-200 space-y-0.5">
            <div className="flex justify-between items-center text-[8px]">
              <span className="font-bold text-slate-900">QT-2026-00006</span>
              <span className="px-0.5 py-0.1 bg-emerald-100 text-emerald-800 text-[6px] rounded font-bold">V1</span>
            </div>
            <div className="text-[8px] font-semibold text-slate-700 truncate">Admin Jayam Web Solution</div>
            <div className="text-[7px] text-slate-400">Active • 9876543210</div>
          </div>
        </div>
      );

    case "customer":
      return (
        <div className="space-y-1">
          <div>
            <h4 className="text-[10px] font-bold text-[#064e3b]">Client Directory</h4>
            <p className="text-[7px] text-slate-500">Accounts</p>
          </div>
          <div className="bg-white p-1 rounded border border-slate-200 space-y-0.5">
            <div className="text-[9px] font-bold text-slate-800">Jayam websolution</div>
            <div className="text-[7px] text-slate-500">Test Company Ltd</div>
            <div className="text-[7px] font-bold text-emerald-700 pt-0.5 border-t border-slate-100">
              2 Quotes
            </div>
          </div>
        </div>
      );

    case "reports":
      return (
        <div className="space-y-1">
          <div>
            <h4 className="text-[10px] font-bold text-[#064e3b]">Reports & Analytics</h4>
            <p className="text-[7px] text-slate-500">Performance</p>
          </div>
          <div className="grid grid-cols-2 gap-0.5">
            <div className="bg-white p-1 rounded border border-slate-200">
              <div className="text-[6px] text-slate-400">PIPELINE</div>
              <div className="text-[9px] font-bold text-[#064e3b]">₹84.3K</div>
            </div>
            <div className="bg-white p-1 rounded border border-slate-200">
              <div className="text-[6px] text-slate-400">QUOTES</div>
              <div className="text-[9px] font-bold text-slate-800">4</div>
            </div>
          </div>
        </div>
      );

    case "settings":
      return (
        <div className="space-y-1">
          <div>
            <h4 className="text-[10px] font-bold text-[#064e3b]">Company Settings</h4>
            <p className="text-[7px] text-slate-500">Details</p>
          </div>
          <div className="bg-white p-1 rounded border border-slate-200 space-y-0.5">
            <div className="text-[7px] text-slate-400 uppercase">COMPANY</div>
            <div className="text-[8px] font-bold text-slate-800">ACER Admin</div>
            <div className="text-[7px] text-slate-400 uppercase mt-0.5">SIGNATORY</div>
            <div className="text-[8px] text-slate-700">JK-Prakash</div>
          </div>
        </div>
      );

    case "subscription":
      return (
        <div className="space-y-1">
          <div>
            <h4 className="text-[10px] font-bold text-[#064e3b]">Subscription</h4>
            <p className="text-[7px] text-slate-500">Plan</p>
          </div>
          <div className="bg-white p-1 rounded border border-slate-200 space-y-0.5">
            <div className="text-[9px] font-black text-slate-800">Business Plan</div>
            <div className="text-[7px] text-slate-400">22 of 30 days remaining</div>
            <div className="w-full h-0.5 bg-slate-100 rounded-full overflow-hidden mt-0.5">
              <div className="h-full bg-emerald-700" style={{ width: "73%" }}></div>
            </div>
          </div>
        </div>
      );

    case "users":
      return (
        <div className="space-y-1">
          <div>
            <h4 className="text-[10px] font-bold text-[#064e3b]">User Accounts</h4>
            <p className="text-[7px] text-slate-500">Access</p>
          </div>
          <div className="bg-white p-1 rounded border border-slate-200 space-y-0.5">
            <div className="text-[8px] font-bold text-slate-800">ACER Admin</div>
            <div className="text-[7px] text-slate-500">Admin@Jayam.in</div>
            <div className="text-[7px] font-bold text-emerald-800">ADMIN</div>
          </div>
        </div>
      );

    default:
      return null;
  }
};
