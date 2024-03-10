const ProductImage = ({ url }) => {
  return (
    <>
      <div className="product-image-wrapper w-full sm:w-full md:w-[500px] lg:w-[500px]">
        <img
          src={url}
          className="product-image h-[360px] w-full sm:h-[500px] sm:w-full md:h-[500px] md:w-[500px] lg:h-[500px] lg:w-[500px] object-contain"
          alt="product-image"
        />
      </div>
    </>
  );
};

export default ProductImage;
