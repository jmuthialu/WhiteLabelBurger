import React, { createContext, ReactNode, useContext } from 'react';
import { BrandConfig, getCurrentBrand } from './brand';

interface BrandContextType {
  brand: BrandConfig;
  colors: BrandConfig['colors'];
  assets: BrandConfig['assets'];
}

const BrandContext = createContext<BrandContextType | null>(null);

interface BrandProviderProps {
  children: ReactNode;
}

export function BrandProvider({ children }: BrandProviderProps) {
  const brand = getCurrentBrand();
  
  console.log('🏢 Brand Provider Debug:', {
    brandId: brand.id,
    displayName: brand.displayName,
    bundleId: brand.bundleId,
    primaryColor: brand.colors.primary
  });
  
  const value: BrandContextType = {
    brand,
    colors: brand.colors,
    assets: brand.assets,
  };

  return (
    <BrandContext.Provider value={value}>
      {children}
    </BrandContext.Provider>
  );
}

export function useBrand(): BrandContextType {
  const context = useContext(BrandContext);
  if (!context) {
    throw new Error('useBrand must be used within a BrandProvider');
  }
  return context;
}

export function useBrandColors() {
  const { colors } = useBrand();
  return colors;
}

export function useBrandAssets() {
  const { assets } = useBrand();
  return assets;
}