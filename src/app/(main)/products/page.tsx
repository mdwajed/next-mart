import { getProducts } from "@/actions/product";
import Products from "@/components/modules/home/Products";

const ProductsPage = async () => {
  const products = await getProducts();

  return (
    <div>
      <Products products={products} />
    </div>
  );
};

export default ProductsPage;
