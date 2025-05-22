import React from 'react';

export default function TopBar() {
  return (
    <div className="w-full h-full relative">
      {/* Navigation items container */}
      <div className="absolute w-[504px] h-[44px] left-[468px] top-[22px]">
        {/* About Us */}
        <div
          className="
            absolute left-[423px] top-[10px]
            flex flex-col justify-center
            text-white text-[15px] font-inter font-normal
            underline uppercase
            leading-[24px] tracking-[0.53px] break-words
          "
        >
          About Us
        </div>

        {/* Products with dropdown arrow */}
        <div className="absolute w-[119px] h-[24px] left-[192px] top-[10px]">
          <div
            className="
              absolute left-0 top-0
              flex flex-col justify-center
              text-white text-[15px] font-inter font-normal
              underline uppercase
              leading-[24px] tracking-[0.53px] break-words
            "
          >
            PRODUCTS
          </div>
          <div
            className="
              absolute w-[14.63px] h-[8px]
              left-[93px] top-[12.34px]
              transform -rotate-45 origin-top-left
              border-l border-white border-b
            "
          />
        </div>

        {/* Home (with text-shadow) */}
        <div
          className="
            absolute left-0 top-[10px]
            flex flex-col justify-center
            text-white text-[15px] font-inter font-normal
            underline uppercase
            leading-[24px] tracking-[0.53px] break-words
            text-center
          "
          style={{
            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          }}
        >
          HOME
        </div>
      </div>

      {/* Waitlist button */}
      <div
        className="
          absolute inline-flex items-start justify-start
          left-[1268.66px] top-[31px]
          pt-[1px] pb-[1px] pl-[27px] pr-[7.36px]
          relative
        "
      >
        <div
          className="
            absolute w-[16px] h-[16px] left-0 top-[5px]
            rounded-[8px]
            bg-gradient-to-br from-[#665DCD] via-[#5FA4E6] to-[#D2AB67]
          "
        />
        <div
          className="
            flex flex-col justify-center
            text-white text-[15px] font-inter font-normal
            underline uppercase
            leading-[24px] tracking-[0.53px] break-words
            text-center
          "
        >
          WAITLIST
        </div>
      </div>

      {/* Icon shapes */}
      <div
        className="absolute w-[18.08px] h-[34.22px] left-[142.75px] top-[26.96px]"
        style={{
          backgroundColor: '#001233',
          outline: '2px #0466C8 solid',
          outlineOffset: '-1px',
        }}
      />
      <div
        className="absolute w-[19.76px] h-[16.97px] left-[119.51px] top-[44.88px]"
        style={{
          backgroundColor: '#001233',
          outline: '2px #0466C8 solid',
          outlineOffset: '-1px',
        }}
      />
      <div
        className="absolute w-[19.6px] h-[17.59px] left-[120.09px] top-[25px]"
        style={{
          backgroundColor: '#001233',
          outline: '2px #0466C8 solid',
          outlineOffset: '-1px',
        }}
      />
      <div className="absolute w-[9px] h-[9.01px] left-[57.72px] top-[40.48px] bg-[#001233] border border-[#0466C8]" />
      <div className="absolute w-[14.79px] h-[36.04px] left-[34px] top-[26.96px] bg-[#001233] border border-[#0466C8]" />
      <div className="absolute w-[17.97px] h-[16.31px] left-[77.16px] top-[25.95px] bg-[#001233] border border-[#0466C8]" />
      <div className="absolute w-[17.97px] h-[15.19px] left-[77.16px] top-[47.81px] bg-[#001233] border border-[#0466C8]" />
      <div className="absolute w-[16.9px] h-[36.04px] left-[98.89px] top-[26.23px] bg-[#001233] border border-[#0466C8]" />
      <div className="absolute w-[22.83px] h-[9.32px] left-[50.9px] top-[26.96px] bg-[#001233] border border-[#0466C8]" />
      <div className="absolute w-[22.83px] h-[9.32px] left-[50.9px] top-[53.68px] bg-[#001233] border border-[#0466C8]" />
      <div className="absolute w-[5.19px] h-[12.77px] left-[68.9px] top-[38.51px] bg-[#001233] border border-[#0466C8]" />
      <div className="absolute w-[4.96px] h-[12.77px] left-[50.49px] top-[38.51px] bg-[#001233] border border-[#0466C8]" />
      <div className="absolute w-[5.41px] h-[3.85px] left-[110.38px] top-[26.23px] bg-[#001233] border border-[#0466C8]" />
    </div>
  );
}
