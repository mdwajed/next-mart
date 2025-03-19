import { getProductById } from "@/actions/product";
import ProductDetails from "@/components/modules/home/ProductDetails";
export const dynamic = "force-dynamic";

const ProductDetailsPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;
  const product = await getProductById(productId);

  if (!product) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold">Product Not Found</h2>
      </div>
    );
  }

  return <ProductDetails product={product} />;
};

export default ProductDetailsPage;
