"use server";

export const getProducts = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products`);
    const result = await res.json();
    return result.data;
  } catch (error) {
    console.error(error);
  }
};

export const getProductById = async (productId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/products/${productId}`
    );
    if (!res.ok) return null;

    const result = await res.json();
    return result.data;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
};
