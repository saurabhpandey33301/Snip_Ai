import Image from "next/image";
import React from "react";
import { options } from "./VedioStyle";

export default function Preveiw({ formData }) {
  const selectVedioStyle =
    formData && options.find((item) => item?.name == formData?.VideoStyle);

  return (
    <div className="m-1 relative">
      <h1 className=" px-3 text-xl font-bold">Preveiw</h1>
      {selectVedioStyle && (
        <div>
          <Image
            src={selectVedioStyle?.image}
            alt={selectVedioStyle?.name}
            width={1000}
            height={300}
            className="w-full h-[70vh] object-cover rounded-xl p-2 "
          />
          <h2
            className={`${formData?.Caption?.style} absolute bottom-7 text-center w-full`}
          >
            {formData?.Caption?.name}
          </h2>
        </div>
      )}
    </div>
  );
}
