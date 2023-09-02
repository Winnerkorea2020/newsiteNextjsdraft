import Image from "next/image";

const ProductImg = () => {
  return (
    <div>
      <div className="w-full mx-auto tracking-tighter border-t">
        <h3 className="my-5 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
          High-quality Design
        </h3>
        <div className="grid grid-cols-1 gap-2">
          <div className="relative min-h-[500px] ">
            <Image
              src={`/jason-dent-3wPJxh-piRw-unsplash.jpg`}
              fill
              className="mt-8 object-center object-cover"
            />
          </div>
          <div className="relative min-h-[500px] ">
            <Image
              src={`/jason-dent-3wPJxh-piRw-unsplash.jpg`}
              fill
              className="mt-8 object-center object-cover"
            />
          </div>
          <div className="relative min-h-[500px] ">
            <Image
              src={`/jason-dent-3wPJxh-piRw-unsplash.jpg`}
              fill
              className="mt-8 object-center object-cover"
            />
          </div>
          <div className="relative min-h-[500px] ">
            <Image
              src={`/jason-dent-3wPJxh-piRw-unsplash.jpg`}
              fill
              className="mt-8 object-center object-cover"
            />
          </div>
          <div className="relative min-h-[500px] ">
            <Image
              src={`/jason-dent-3wPJxh-piRw-unsplash.jpg`}
              fill
              className="mt-8 object-center object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductImg;
