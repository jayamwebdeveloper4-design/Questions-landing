const taxRate = 0.09;
const discount = 4500;

const items = [
  { name: "Industrial Servo Drive Motor", quantity: "2 Nos", amount: 75000 },
  { name: "On-Site Commissioning Service", quantity: "1 Set", amount: 25000 },
  { name: "Heavy-Duty Mounting Brackets", quantity: "4 Sets", amount: 14500 },
];

const subtotal = items.reduce((sum, item) => sum + item.amount, 0);
const taxableAmount = subtotal - discount;
const cgst = Math.round(taxableAmount * taxRate);
const sgst = Math.round(taxableAmount * taxRate);

export const quotationExample = {
  items,
  subtotal,
  discount,
  cgst,
  sgst,
  total: taxableAmount + cgst + sgst,
  taxRate,
};

export const formatQuotationCurrency = (amount: number) =>
  `₹${amount.toLocaleString("en-IN")}`;
