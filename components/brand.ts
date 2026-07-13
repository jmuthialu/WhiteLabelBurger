import Constants from 'expo-constants';

export interface BrandConfig {
  id: string;
  name: string;
  displayName: string;
  scheme: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
  };
  assets: {
    icon: string;
    splash: string;
    adaptiveIcon: string;
    favicon: string;
  };
}

const BRANDS: Record<string, BrandConfig> = {
  mcd: {
    id: 'mcd',
    name: 'McDonalds',
    displayName: "McDonalds",
    scheme: 'mcd',
    colors: {
      primary: '#FFC72C',
      secondary: '#DA020E',
      accent: '#FF8C00',
      background: '#FFFFFF',
      text: '#292929',
    },
    assets: {
      icon: './assets/brands/mcd/icon.png',
      splash: './assets/brands/mcd/splash-icon.png',
      adaptiveIcon: './assets/brands/mcd/adaptive-icon.png',
      favicon: './assets/brands/mcd/favicon.png',
    },
  },
  bk: {
    id: 'bk',
    name: 'BurgerKing',
    displayName: 'BurgerKing',
    scheme: 'bk',
    colors: {
      primary: '#D62300',
      secondary: '#FFC72C',
      accent: '#F5EBDC',
      background: '#FFFFFF',
      text: '#502314',
    },
    assets: {
      icon: './assets/brands/bk/icon.png',
      splash: './assets/brands/bk/splash-icon.png',
      adaptiveIcon: './assets/brands/bk/adaptive-icon.png',
      favicon: './assets/brands/bk/favicon.png',
    },
  },
};

export function getCurrentBrand(): BrandConfig {
  const brandId = getCurrentBrandId();
  return BRANDS[brandId] || BRANDS.mcd;
}

export function getCurrentBrandId(): string {
  const brandId = Constants.expoConfig?.extra?.brandId || 'mcd';
  console.log('🔍 Brand Detection Debug:', {
    expoConfig: Constants.expoConfig?.name,
    extra: Constants.expoConfig?.extra,
    detectedBrandId: brandId
  });
  return brandId;
}

export function isMcDonalds(): boolean {
  return getCurrentBrandId() === 'mcd';
}

export function isBurgerKing(): boolean {
  return getCurrentBrandId() === 'bk';
}