import { Stack } from "expo-router";
import { BrandProvider } from "../../components/BrandProvider";

export default function RootLayout() {
    return (
      <BrandProvider>
        <Stack />
      </BrandProvider>
    );
}
