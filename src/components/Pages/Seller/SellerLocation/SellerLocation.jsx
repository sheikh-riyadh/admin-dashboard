import map from "../../../../assets/map.jpg";
const SellerLocation = () => {
  return (
    <div className="bg-white flex flex-col shadow-md border rounded-md overflow-hidden">
      <div className="p-5">
        <h2 className="capitalize font-medium text-2xl text-end ">
          Location Info
        </h2>
      </div>
      <div>
        <img className="w-full" src={map} alt="location" />
      </div>
    </div>
  );
};

export default SellerLocation;
