import { Metadata } from 'next';
import { simplifiedProduct } from '../interface';
import { client } from '../lib/sanity';
import Image from 'next/image';
import Link from 'next/link';

// Helper function for fetching data
async function getData(category: string): Promise<simplifiedProduct[]> {
  const query = `*[_type == "product" && category->name == $category] {
    _id,
    "imageUrl": images[0].asset->url,
    price,
    name,
    "slug": slug.current,
    "categoryName": category->name
  }`;
  return await client.fetch(query, { category });
}

// Page component
export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const data = await getData(params.category);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 sm:px-6  lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Our Products for {params.category}
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((product) => (
            <div key={product._id} className="group relative">
              <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                <Image
                  src={product.imageUrl}
                  alt="Product image"
                  className="w-full h-full object-cover object-center lg:h-full lg:w-full"
                  width={300}
                  height={300}
                />
              </div>
              <div className="mt-4 flex justify-between">
                <h3 className="text-sm text-gray-700">
                  <Link href={`/product/${product.slug}`}>
                    {product.name}
                  </Link>
                </h3>
                <p className="text-sm text-gray-900">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
