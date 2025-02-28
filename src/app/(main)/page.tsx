import { getProducts } from "@/actions/product";
import Banner from "@/components/modules/home/Banner";
import FeaturedProducts from "@/components/modules/home/FeaturedProducts";

const HomePage = async () => {
  const featuredProducts = await getProducts();
  return (
    <div>
      <Banner />
      <FeaturedProducts featuredProducts={featuredProducts} />
    </div>
  );
};

export default HomePage;
