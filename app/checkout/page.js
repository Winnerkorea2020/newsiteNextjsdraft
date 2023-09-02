import ProductOrder from "@/components/ProductOrder";
import CheckOut from "@/components/CheckOut";
const page = () => {
  return (
    <div className="flex-1">
      <div className="container mx-auto px-6">
        <h3 className="text-gray-600 text-2xl font-medium py-4">Item A</h3>
        <div className="">
          <div className="border-b pb-8">
            <ProductOrder />
          </div>
          <div className="mt-8">
            <CheckOut />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
