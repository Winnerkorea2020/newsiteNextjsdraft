import CheckOut from "@/components/CheckOut";
import ProductCheckOut from "@/components/ProductOrder";
const page = () => {
  return (
    <div className="flex-1">
      <div className="container mx-auto px-6">
        <div className="">
          <div className="border-b pb-8">
            <ProductCheckOut />
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
