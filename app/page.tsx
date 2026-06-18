import HomeBanner from "@/components/layout/HomeBanner";
import ProductSection from "@/components/product/ProductSection";

import { garbageBags } from "@/components/product/data";

export default function Home() {
  return (
    <>
      <HomeBanner />

      <ProductSection
        title="Trending Products"
        description="Most popular garbage bags"
        products={garbageBags.filter(
          (p) => p.is_trending
        )}
      />

      <ProductSection
        title="Featured Products"
        description="Best selling products"
        products={garbageBags.filter(
          (p) => p.is_featured
        )}
      />

      <ProductSection
        title="New Arrivals"
        description="Recently added products"
        products={garbageBags.filter(
          (p) => p.is_new_arrival
        )}
      />

      <ProductSection
        title="Day Of The Deal"
        description="Limited time offers"
        products={garbageBags.filter(
          (p) => p.day_of_the_deal
        )}
      />
    </>
  );
}