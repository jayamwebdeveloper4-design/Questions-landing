/**
 * Forest B2B Enterprise Quoting Design System
 * Theme Tokens & Color Palette from Design.md
 */

export const colors = {
  // Surfaces
  surface: '#f8f9ff',
  surfaceDim: '#cbdbf5',
  surfaceBright: '#f8f9ff',
  surfaceContainerLowest: '#ffffff',
  surfaceContainerLow: '#eff4ff',
  surfaceContainer: '#e5eeff',
  surfaceContainerHigh: '#dce9ff',
  surfaceContainerHighest: '#d3e4fe',
  surfaceVariant: '#d3e4fe',
  surfaceTint: '#2e6956',
  surfaceCanvas: '#f4f7f6',
  background: '#f8f9ff',

  // Typography & On-Surface
  onSurface: '#0b1c30',
  onSurfaceVariant: '#404945',
  onBackground: '#0b1c30',
  inverseSurface: '#213145',
  inverseOnSurface: '#eaf1ff',

  // Outlines & Borders
  outline: '#707974',
  outlineVariant: '#bfc9c3',

  // Primary (Deep Forest Green)
  primary: '#003528',
  onPrimary: '#ffffff',
  primaryContainer: '#0b4d3c',
  onPrimaryContainer: '#82bda7',
  inversePrimary: '#97d3bc',
  primaryFixed: '#b2efd8',
  primaryFixedDim: '#97d3bc',
  onPrimaryFixed: '#002117',
  onPrimaryFixedVariant: '#10503f',
  forestDark: '#08382c',

  // Secondary (Mint & Emerald)
  secondary: '#006c49',
  onSecondary: '#ffffff',
  secondaryContainer: '#6cf8bb',
  onSecondaryContainer: '#00714d',
  secondaryFixed: '#6ffbbe',
  secondaryFixedDim: '#4edea3',
  onSecondaryFixed: '#002113',
  onSecondaryFixedVariant: '#005236',
  mintAccent: '#10b981',

  // Tertiary (Precision Blue)
  tertiary: '#002771',
  onTertiary: '#ffffff',
  tertiaryContainer: '#003ba1',
  onTertiaryContainer: '#94aeff',
  tertiaryFixed: '#dbe1ff',
  tertiaryFixedDim: '#b4c5ff',
  onTertiaryFixed: '#00174b',
  onTertiaryFixedVariant: '#003ea8',

  // Semantic Feedback
  error: '#ba1a1a',
  onError: '#ffffff',
  errorContainer: '#ffdad6',
  onErrorContainer: '#93000a',
  success: '#15803d',
  successBg: '#dcfce7',
  warning: '#b45309',
  warningBg: '#fef3c7',
} as const;

export type ColorToken = keyof typeof colors;
