import { StyleSheet, Text, View } from "react-native";
import { useBrand } from "../../components/BrandProvider";

export default function Index() {
  const { brand, colors } = useBrand();
  console.log('index');
  
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colors.background }
      ]}
    >
      <Text style={[styles.title, { color: colors.primary }]}>
        Welcome to {brand.displayName}
      </Text>
      <Text style={[styles.subtitle, { color: colors.text }]}>
        Restaurant Ordering App
      </Text>
      <View style={[styles.brandInfo, { backgroundColor: colors.primary }]}>
        <Text style={[styles.brandText, { color: colors.background }]}>
          Brand: {brand.name}
        </Text>
        <Text style={[styles.brandText, { color: colors.background }]}>
          Scheme: {brand.scheme}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 30,
  },
  brandInfo: {
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    width: "100%",
    maxWidth: 300,
  },
  brandText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 5,
  },
});
