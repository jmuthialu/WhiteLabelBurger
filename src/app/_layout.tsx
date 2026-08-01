import { BrandProvider } from "@/components/BrandProvider";
import { Stack } from "expo-router";


export default function RootLayout() {
    return (
      <BrandProvider>
        <Stack />
      </BrandProvider>
    );
}
