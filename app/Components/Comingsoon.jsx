import React from "react";

const UnderConstruction = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="text-center mt-[-50px]  p-8 max-w-md">
        <img
        width={250} height={250}
          src="./alhamdlogo.png" // Replace with your client's logo URL
          alt="Company Logo"
          className="ml-10 md:ml-16"
        />
        <h1 className="text-3xl mt-[-50px] font-bold text-white">
          COMING SOON
        </h1>
        <p className="text-white mb-6">
          We’re currently working on something exciting! Please check back soon.
        </p>
        <p className="text-gray-500 text-sm">
          For inquiries, contact us at{" "}
          <a
            href="mailto:alhamdtraders@gmail.com"
            className="text-blue-600 hover:underline"
          >
            alhamdtarder@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default UnderConstruction;