#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const brandId = process.argv[2];

if (!brandId) {
  console.error('Usage: node switch-brand.js <brandId>');
  console.error('Available brands: mcd, bk');
  process.exit(1);
}

const brandConfigMap = {
  mcd: 'config/credentials-mcd.json',
  bk: 'config/credentials-bk.json'
};

const configFile = brandConfigMap[brandId];
if (!configFile) {
  console.error(`Unknown brand: ${brandId}`);
  console.error('Available brands: mcd, bk');
  process.exit(1);
}

const projectRoot = path.join(__dirname, '..');
const sourceFile = path.join(projectRoot, configFile);
const targetFile = path.join(projectRoot, 'credentials.json');

if (!fs.existsSync(sourceFile)) {
  console.error(`Configuration file not found: ${sourceFile}`);
  process.exit(1);
}

try {
  const config = fs.readFileSync(sourceFile, 'utf8');
  fs.writeFileSync(targetFile, config);
  
  // Clear Metro cache to ensure new configuration is picked up
  const metroCacheDir = path.join(projectRoot, 'node_modules/.cache/metro');
  if (fs.existsSync(metroCacheDir)) {
    fs.rmSync(metroCacheDir, { recursive: true, force: true });
    console.log('🧹 Cleared Metro cache');
  }
  
  const brandNames = {
    mcd: "McDonalds",
    bk: "Burger King"
  };
  
  console.log(`✅ Switched to ${brandNames[brandId]} configuration`);
  console.log(`📱 Metro deep link will use: exp+${brandId === 'mcd' ? 'mcd' : 'bk'}://`);
  console.log('⚠️  Please restart any running Metro instances to pick up the new brand');
} catch (error) {
  console.error('Error switching brand configuration:', error.message);
  process.exit(1);
}