import svgPaths from "./svg-k27n95pde8";
import imgRectangle30 from "figma:asset/3bd11fb2d71ea6c7f29e2958dc20d589ef1bbb25.png";
import imgRectangle31 from "figma:asset/9b5f7fa1327703732ce10486fa292edc7291aa60.png";
import imgRectangle32 from "figma:asset/03c33423312bda685289c203bdb4d8cd265f1739.png";
import imgRectangle38 from "figma:asset/5dedffd4071a4ea3807789f0af5570081fe4f28a.png";
import imgFooter from "figma:asset/73f1af10cf4c9fee37a627d59e845f19fb382e23.png";

function Frame249() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[40px] items-center leading-[1.215] not-italic relative shrink-0 text-[#1e1e1e] text-[24px] text-nowrap tracking-[0.4699px] whitespace-pre">
      <p className="relative shrink-0">Features</p>
      <p className="relative shrink-0">Pricing</p>
    </div>
  );
}

function Frame250() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#1e1e1e] text-[24px] text-nowrap whitespace-pre">Order Merging</p>
      <Frame249 />
    </div>
  );
}

function Frame251() {
  return (
    <div className="bg-[#cc6251] box-border content-stretch flex gap-[10px] items-center justify-center px-[20px] py-[14px] relative rounded-[12px] shrink-0">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[21px] text-nowrap text-white whitespace-pre">Get Started</p>
    </div>
  );
}

function TopNav() {
  return (
    <div className="relative shrink-0 w-full" data-name="Top nav">
      <div aria-hidden="true" className="absolute border-[#e3e3e3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[110px] py-[40px] relative w-full">
          <Frame250 />
          <Frame251 />
        </div>
      </div>
    </div>
  );
}

function Frame255() {
  return (
    <div className="bg-[rgba(247,223,219,0.34)] box-border content-stretch flex gap-[6px] items-center justify-center p-[8px] relative rounded-[11px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#f7dfdb] border-solid inset-0 pointer-events-none rounded-[11px]" />
      <div className="flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[24px] text-center text-nowrap tracking-[0.4699px]">
        <p className="leading-[1.215] whitespace-pre">⭐ Trusted by growing Shopify brands</p>
      </div>
    </div>
  );
}

function Frame254() {
  return (
    <div className="bg-[rgba(247,223,219,0.34)] box-border content-stretch flex gap-[6px] items-center justify-center p-[8px] relative rounded-[11px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#f7dfdb] border-solid inset-0 pointer-events-none rounded-[11px]" />
      <div className="flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[24px] text-center text-nowrap tracking-[0.4699px]">
        <p className="leading-[1.215] whitespace-pre">🛍️ Built for all order volumes</p>
      </div>
    </div>
  );
}

function TrustBadge() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0" data-name="trust badge">
      <Frame255 />
      <Frame254 />
    </div>
  );
}

function Frame233() {
  return (
    <div className="bg-[#cc6251] box-border content-stretch flex gap-[10px] items-center justify-center px-[20px] py-[14px] relative rounded-[12px] shrink-0">
      <p className="font-['SF_Pro_Display:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[21px] text-nowrap text-white whitespace-pre">Get Started</p>
    </div>
  );
}

function Cta() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[11px] items-start relative shrink-0 w-[320px]" data-name="CTA">
      <Frame233 />
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[21px] text-black w-[min-content]">Instant setup. No code required.</p>
    </div>
  );
}

function ContentContainer() {
  return (
    <div className="basis-0 bg-white content-stretch flex flex-col gap-[22px] grow h-[542px] items-start min-h-px min-w-px relative shrink-0" data-name="Content container">
      <p className="font-['Sacramento:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[36px] text-black w-[min-content]">
        <span className="font-['SF_Pro_Display:Regular',sans-serif]">{`OrderMerge helps you `}</span>
        <span className="font-['SF_Pro_Display:Bold',sans-serif] text-[#cc6251]">save shipping costs</span>
        <span className="font-['SF_Pro_Display:Regular',sans-serif]">{` and `}</span>
        <span className="font-['SF_Pro_Display:Bold',sans-serif] text-[#cc6251]">reduce operational overhead</span>
        <span className="font-['SF_Pro_Display:Regular',sans-serif]">{` by `}</span>
        <span className="font-['SF_Pro_Display:Bold',sans-serif] text-[#cc6251]">merging multiple orders</span>
        <span className="font-['SF_Pro_Display:Regular',sans-serif]">{` from the same customer within a time window you control.`}</span>
      </p>
      <p className="font-['SF_Pro_Display:Bold',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[21px] text-black tracking-[0.21px] w-[min-content]">Fewer shipments. Faster fulfillment. Better margins.</p>
      <TrustBadge />
      <Cta />
    </div>
  );
}

function Frame268() {
  return (
    <div className="content-stretch flex gap-[8.817px] items-center relative shrink-0">
      <p className="font-['SF_Pro_Display:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[23.144px] text-nowrap text-white whitespace-pre">#1021</p>
    </div>
  );
}

function Frame271() {
  return (
    <div className="bg-[#b4fed2] box-border content-stretch flex gap-[9.324px] items-center px-[6.216px] py-[3.108px] relative rounded-[4.408px] shrink-0">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e1e1e] text-[16.531px] text-nowrap whitespace-pre">Paid</p>
    </div>
  );
}

function Frame272() {
  return (
    <div className="bg-[#ffe600] box-border content-stretch flex gap-[9.324px] items-center px-[6.216px] py-[3.108px] relative rounded-[4.408px] shrink-0">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e1e1e] text-[16.531px] text-nowrap whitespace-pre">Unulfilled</p>
    </div>
  );
}

function Frame273() {
  return (
    <div className="content-stretch flex gap-[5.51px] items-center relative shrink-0 w-full">
      <Frame271 />
      <Frame272 />
    </div>
  );
}

function Frame274() {
  return (
    <div className="content-stretch flex flex-col gap-[8.817px] items-start relative shrink-0 w-[164.211px]">
      <Frame268 />
      <Frame273 />
    </div>
  );
}

function Frame275() {
  return (
    <div className="content-stretch flex flex-col gap-[11.021px] items-start relative shrink-0 w-[146.577px]">
      <div className="bg-[#f9e0dd] h-[6.613px] rounded-[33.063px] shrink-0 w-full" />
      <div className="bg-[#f9e0dd] h-[6.613px] rounded-[33.063px] shrink-0 w-[88.167px]" />
    </div>
  );
}

function Frame279() {
  return (
    <div className="content-stretch flex gap-[5.51px] items-center relative shrink-0">
      <div className="relative rounded-[7.715px] shrink-0 size-[39.675px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[7.715px]">
          <div className="absolute bg-[#f9e0dd] inset-0 rounded-[7.715px]" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[7.715px] size-full" src={imgRectangle30} />
        </div>
      </div>
      <Frame275 />
    </div>
  );
}

function Frame276() {
  return (
    <div className="content-stretch flex flex-col gap-[11.021px] items-start relative shrink-0 w-[29.756px]">
      <div className="bg-[#f9e0dd] h-[6.613px] rounded-[33.063px] shrink-0 w-full" />
      <div className="bg-[#f9e0dd] h-[6.613px] rounded-[33.063px] shrink-0 w-full" />
    </div>
  );
}

function Frame269() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame279 />
      <Frame276 />
    </div>
  );
}

function Frame289() {
  return (
    <div className="content-stretch flex flex-col gap-[11.021px] items-start relative shrink-0 w-[146.577px]">
      <div className="bg-[#f9e0dd] h-[6.613px] rounded-[33.063px] shrink-0 w-full" />
      <div className="bg-[#f9e0dd] h-[6.613px] rounded-[33.063px] shrink-0 w-[88.167px]" />
    </div>
  );
}

function Frame280() {
  return (
    <div className="content-stretch flex gap-[4.408px] items-center relative shrink-0 w-[266.705px]">
      <div className="relative rounded-[7.715px] shrink-0 size-[39.675px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[7.715px]">
          <div className="absolute bg-[#f9e0dd] inset-0 rounded-[7.715px]" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[7.715px] size-full" src={imgRectangle31} />
        </div>
      </div>
      <Frame289 />
    </div>
  );
}

function Frame290() {
  return (
    <div className="content-stretch flex flex-col gap-[11.021px] items-start relative shrink-0 w-[29.756px]">
      <div className="bg-[#f9e0dd] h-[6.613px] rounded-[33.063px] shrink-0 w-full" />
      <div className="bg-[#f9e0dd] h-[6.613px] rounded-[33.063px] shrink-0 w-full" />
    </div>
  );
}

function Frame291() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame280 />
      <Frame290 />
    </div>
  );
}

function Frame270() {
  return (
    <div className="content-stretch flex flex-col gap-[5.51px] items-start justify-center relative shrink-0 w-full">
      <div className="bg-[#f9e0dd] h-[8.817px] rounded-[33.063px] shrink-0 w-[30.858px]" />
      <div className="bg-[#f9e0dd] h-[8.817px] rounded-[33.063px] shrink-0 w-[170.823px]" />
      <div className="bg-[#f9e0dd] h-[8.817px] rounded-[33.063px] shrink-0 w-[152.088px]" />
      <div className="bg-[#f9e0dd] h-[8.817px] rounded-[33.063px] shrink-0 w-[187.354px]" />
    </div>
  );
}

function Frame278() {
  return (
    <div className="absolute bg-[#cc6251] box-border content-stretch flex flex-col gap-[20.94px] items-start left-[118.88px] p-[22.042px] rounded-[22.042px] top-[calc(50%+92.046px)] translate-y-[-50%] w-[310.788px]">
      <Frame274 />
      <Frame269 />
      <Frame291 />
      <Frame270 />
    </div>
  );
}

function Frame292() {
  return (
    <div className="content-stretch flex gap-[4.987px] items-center relative shrink-0">
      <p className="font-['SF_Pro_Display:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#8c89ff] text-[13.09px] text-nowrap whitespace-pre">#1019</p>
    </div>
  );
}

function Frame293() {
  return (
    <div className="bg-[#b4fed2] box-border content-stretch flex gap-[5.637px] items-center px-[3.758px] py-[1.879px] relative rounded-[2.493px] shrink-0">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e1e1e] text-[7.515px] text-nowrap whitespace-pre">Paid</p>
    </div>
  );
}

function Frame294() {
  return (
    <div className="bg-[#ffe600] box-border content-stretch flex gap-[5.637px] items-center px-[3.758px] py-[1.879px] relative rounded-[2.493px] shrink-0">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e1e1e] text-[7.515px] text-nowrap whitespace-pre">Unulfilled</p>
    </div>
  );
}

function Frame298() {
  return (
    <div className="content-stretch flex gap-[3.117px] items-center relative shrink-0 w-full">
      <Frame293 />
      <Frame294 />
    </div>
  );
}

function Frame299() {
  return (
    <div className="content-stretch flex flex-col gap-[4.987px] items-start relative shrink-0 w-[92.875px]">
      <Frame292 />
      <Frame298 />
    </div>
  );
}

function Frame300() {
  return (
    <div className="content-stretch flex flex-col gap-[6.233px] items-start relative shrink-0">
      <div className="bg-[#f9e0dd] h-[3.74px] rounded-[18.7px] shrink-0 w-[53.606px]" />
      <div className="bg-[#f9e0dd] h-[3.74px] rounded-[18.7px] shrink-0 w-[31.789px]" />
    </div>
  );
}

function Frame282() {
  return (
    <div className="content-stretch flex gap-[3.117px] items-center relative shrink-0">
      <div className="relative rounded-[4.363px] shrink-0 size-[22.439px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[4.363px]">
          <div className="absolute bg-[#f9e0dd] inset-0 rounded-[4.363px]" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[4.363px] size-full" src={imgRectangle30} />
        </div>
      </div>
      <Frame300 />
    </div>
  );
}

function Frame301() {
  return (
    <div className="content-stretch flex flex-col gap-[6.233px] items-start relative shrink-0 w-[16.83px]">
      <div className="bg-[#f9e0dd] h-[3.74px] rounded-[18.7px] shrink-0 w-full" />
      <div className="bg-[#f9e0dd] h-[3.74px] rounded-[18.7px] shrink-0 w-full" />
    </div>
  );
}

function Frame302() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame282 />
      <Frame301 />
    </div>
  );
}

function Frame303() {
  return (
    <div className="content-stretch flex flex-col gap-[3.117px] items-start justify-center relative shrink-0 w-full">
      <div className="bg-[#f9e0dd] h-[4.987px] rounded-[18.7px] shrink-0 w-[17.453px]" />
      <div className="bg-[#f9e0dd] h-[4.987px] rounded-[18.7px] shrink-0 w-[96.615px]" />
      <div className="bg-[#f9e0dd] h-[4.987px] rounded-[18.7px] shrink-0 w-[86.018px]" />
      <div className="bg-[#f9e0dd] h-[4.987px] rounded-[18.7px] shrink-0 w-[105.964px]" />
    </div>
  );
}

function Frame304() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[11.843px] h-[132.144px] items-start p-[12.466px] relative rounded-[7.48px] shrink-0 w-[131.521px]">
      <div aria-hidden="true" className="absolute border-[#cc6251] border-[0.939px] border-solid inset-0 pointer-events-none rounded-[7.48px]" />
      <Frame299 />
      <Frame302 />
      <Frame303 />
    </div>
  );
}

function Frame305() {
  return (
    <div className="content-stretch flex gap-[4.987px] items-center relative shrink-0">
      <p className="font-['SF_Pro_Display:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#8c89ff] text-[13.09px] text-nowrap whitespace-pre">#1020</p>
    </div>
  );
}

function Frame306() {
  return (
    <div className="bg-[#b4fed2] box-border content-stretch flex gap-[5.637px] items-center px-[3.758px] py-[1.879px] relative rounded-[2.493px] shrink-0">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e1e1e] text-[7.515px] text-nowrap whitespace-pre">Paid</p>
    </div>
  );
}

function Frame307() {
  return (
    <div className="bg-[#ffe600] box-border content-stretch flex gap-[5.637px] items-center px-[3.758px] py-[1.879px] relative rounded-[2.493px] shrink-0">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e1e1e] text-[7.515px] text-nowrap whitespace-pre">Unulfilled</p>
    </div>
  );
}

function Frame308() {
  return (
    <div className="content-stretch flex gap-[3.117px] items-center relative shrink-0 w-full">
      <Frame306 />
      <Frame307 />
    </div>
  );
}

function Frame309() {
  return (
    <div className="content-stretch flex flex-col gap-[4.987px] items-start relative shrink-0 w-[92.875px]">
      <Frame305 />
      <Frame308 />
    </div>
  );
}

function Frame310() {
  return (
    <div className="content-stretch flex flex-col gap-[6.233px] items-start relative shrink-0">
      <div className="bg-[#f9e0dd] h-[3.74px] rounded-[18.7px] shrink-0 w-[53.606px]" />
      <div className="bg-[#f9e0dd] h-[3.74px] rounded-[18.7px] shrink-0 w-[32.413px]" />
    </div>
  );
}

function Frame281() {
  return (
    <div className="content-stretch flex gap-[3.117px] items-center relative shrink-0">
      <div className="relative rounded-[4.363px] shrink-0 size-[22.439px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[4.363px]">
          <div className="absolute bg-[#f9e0dd] inset-0 rounded-[4.363px]" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[4.363px] size-full" src={imgRectangle31} />
        </div>
      </div>
      <Frame310 />
    </div>
  );
}

function Frame311() {
  return (
    <div className="content-stretch flex flex-col gap-[6.233px] items-start relative shrink-0 w-[16.83px]">
      <div className="bg-[#f9e0dd] h-[3.74px] rounded-[18.7px] shrink-0 w-full" />
      <div className="bg-[#f9e0dd] h-[3.74px] rounded-[18.7px] shrink-0 w-full" />
    </div>
  );
}

function Frame312() {
  return (
    <div className="content-stretch flex gap-[10.596px] items-center relative shrink-0 w-full">
      <Frame281 />
      <Frame311 />
    </div>
  );
}

function Frame313() {
  return (
    <div className="content-stretch flex flex-col gap-[3.117px] items-start justify-center relative shrink-0 w-full">
      <div className="bg-[#f9e0dd] h-[4.987px] rounded-[18.7px] shrink-0 w-[17.453px]" />
      <div className="bg-[#f9e0dd] h-[4.987px] rounded-[18.7px] shrink-0 w-[96.615px]" />
      <div className="bg-[#f9e0dd] h-[4.987px] rounded-[18.7px] shrink-0 w-[86.018px]" />
      <div className="bg-[#f9e0dd] h-[4.987px] rounded-[18.7px] shrink-0 w-[105.964px]" />
    </div>
  );
}

function Frame277() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[11.843px] h-[132.144px] items-start p-[12.466px] relative rounded-[7.48px] shrink-0 w-[131.521px]">
      <div aria-hidden="true" className="absolute border-[#cc6251] border-[0.939px] border-solid inset-0 pointer-events-none rounded-[7.48px]" />
      <Frame309 />
      <Frame312 />
      <Frame313 />
    </div>
  );
}

function Frame295() {
  return (
    <div className="absolute box-border content-stretch flex gap-[29.507px] items-center justify-center left-[90.27px] p-[16.095px] rounded-[17.883px] top-0">
      <div aria-hidden="true" className="absolute border-[#cc6251] border-[1.788px] border-dashed inset-[-0.894px] pointer-events-none rounded-[18.777px]" />
      <Frame304 />
      <p className="font-['SF_Pro_Display:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[32.19px] text-black text-nowrap whitespace-pre">+</p>
      <Frame277 />
    </div>
  );
}

function Frame287() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[15.014px] items-center justify-center px-[10.73px] py-[3.577px] relative w-full">
          <p className="basis-0 font-['SF_Pro_Display:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[14.307px] text-[rgba(0,0,0,0.5)]">Merge to original</p>
        </div>
      </div>
    </div>
  );
}

function Frame286() {
  return (
    <div className="bg-[#fcf4f3] relative rounded-[9.008px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[6.071px] items-center justify-center px-[10.73px] py-[3.577px] relative w-full">
          <p className="font-['SF_Pro_Display:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14.307px] text-black text-nowrap whitespace-pre">Create a new order</p>
          <div className="relative shrink-0 size-[17.883px]" data-name="Check">
            <div className="absolute inset-[28.75%_20%_31.25%_23.75%]" data-name="Icon">
              <div className="absolute inset-0" style={{ "--fill-0": "rgba(41, 132, 90, 1)" } as React.CSSProperties}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 8">
                  <path clipRule="evenodd" d={svgPaths.p22eddd00} fill="var(--fill-0, #29845A)" fillRule="evenodd" id="Icon" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame285() {
  return (
    <div className="absolute backdrop-blur-[1.788px] backdrop-filter bg-white box-border content-stretch flex flex-col gap-[4.504px] items-start left-[358.51px] p-[8.942px] rounded-[15.014px] top-[220.86px]">
      <Frame287 />
      <Frame286 />
    </div>
  );
}

function Frame314() {
  return (
    <div className="bg-[#fcf4f3] relative rounded-[9.008px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[6.071px] items-center justify-center px-[10.73px] py-[3.577px] relative w-full">
          <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14.307px] text-black text-nowrap whitespace-pre">Archive old order</p>
          <div className="relative shrink-0 size-[17.883px]" data-name="Check">
            <div className="absolute inset-[28.75%_20%_31.25%_23.75%]" data-name="Icon">
              <div className="absolute inset-0" style={{ "--fill-0": "rgba(41, 132, 90, 1)" } as React.CSSProperties}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 8">
                  <path clipRule="evenodd" d={svgPaths.p22eddd00} fill="var(--fill-0, #29845A)" fillRule="evenodd" id="Icon" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame296() {
  return (
    <div className="absolute backdrop-blur-[15.201px] backdrop-filter bg-[rgba(255,255,255,0.1)] box-border content-stretch flex flex-col gap-[4.504px] items-start left-[31.25px] p-[8.942px] rounded-[15.014px] top-[461.38px]">
      <div aria-hidden="true" className="absolute border-[0.894px] border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[15.014px]" />
      <Frame314 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute h-[47.837px] left-[93.84px] top-[193.14px] w-[48.732px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 48">
        <g id="Group 5">
          <path d={svgPaths.pbfc5e00} fill="var(--fill-0, #F7AE2F)" id="Vector 11" />
          <path d={svgPaths.p13e59300} fill="var(--fill-0, #F7AE2F)" id="Vector 12" />
          <path d={svgPaths.pa706500} fill="var(--fill-0, #F7AE2F)" id="Vector 13" />
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="h-[47.837px] relative w-[48.732px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 48">
        <g id="Group 6">
          <path d={svgPaths.p18a04600} fill="var(--fill-0, #F7AE2F)" id="Vector 11" />
          <path d={svgPaths.p18cbe080} fill="var(--fill-0, #F7AE2F)" id="Vector 12" />
          <path d={svgPaths.p3a105100} fill="var(--fill-0, #F7AE2F)" id="Vector 13" />
        </g>
      </svg>
    </div>
  );
}

function Frame283() {
  return (
    <div className="bg-[#cc6251] box-border content-stretch flex flex-col gap-[15.539px] h-[16.989px] items-end justify-center px-[1.788px] py-[6.216px] relative rounded-[6.216px] shrink-0 w-[37.555px]">
      <div className="bg-[#fcf4f3] rounded-[4.662px] shrink-0 size-[13.412px]" />
    </div>
  );
}

function Frame297() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[8.942px] items-center left-[401.43px] p-[8.942px] rounded-[14.307px] top-[386.28px] w-[166.313px]">
      <Frame283 />
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14.307px] text-black text-nowrap whitespace-pre">Auto merge</p>
    </div>
  );
}

function ImageContainer() {
  return (
    <div className="h-[542px] relative shrink-0 w-[586px]" data-name="Image container">
      <Frame278 />
      <Frame295 />
      <div className="absolute h-[56.779px] left-[276.7px] top-[164.97px] w-0">
        <div className="absolute inset-[-1.57%_-0.89px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 59">
            <path d="M0.894157 0.894157V57.6732" id="Vector 10" stroke="var(--stroke-0, #CC6251)" strokeDasharray="19.67 19.67" strokeLinecap="round" strokeWidth="1.78831" />
          </svg>
        </div>
      </div>
      <Frame285 />
      <Frame296 />
      <Group5 />
      <div className="absolute flex h-[47.837px] items-center justify-center left-[404.12px] top-[480.16px] w-[48.732px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Group6 />
        </div>
      </div>
      <Frame297 />
    </div>
  );
}

function HeroContainer() {
  return (
    <div className="content-stretch flex gap-[41px] items-center relative shrink-0 w-[1200px]" data-name="hero container">
      <ContentContainer />
      <ImageContainer />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="relative shrink-0 w-full" data-name="Hero section">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[41px] items-center px-[80px] py-[60px] relative w-full">
          <HeroContainer />
        </div>
      </div>
    </div>
  );
}

function Frame234() {
  return (
    <div className="bg-[#cc6251] box-border content-stretch flex gap-[10px] items-center justify-center px-[20px] py-[14px] relative rounded-[12px] shrink-0 w-[202px]">
      <p className="font-['SF_Pro_Display:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[21px] text-nowrap text-white whitespace-pre">Start Free Trial</p>
    </div>
  );
}

function ContentCtaContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[17px] items-start relative shrink-0 w-[423px]" data-name="Content + CTA container">
      <p className="font-['SF_Pro_Display:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e1e1e] text-[21px] text-nowrap whitespace-pre">Quick Setup</p>
      <p className="font-['SF_Pro_Display:Bold',sans-serif] h-[88px] leading-[normal] not-italic relative shrink-0 text-[#1e1e1e] text-[36px] w-[403px]">Simple setup. Powerful automation.</p>
      <Frame234 />
    </div>
  );
}

function Frame187() {
  return (
    <div className="absolute bg-[#f3e0de] box-border content-stretch flex gap-[6px] items-center left-[5px] px-[8.78px] py-[5.268px] rounded-[7.024px] top-[16px]">
      <div className="flex flex-col font-['SF_Pro_Display:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#cc6251] text-[14px] text-nowrap">
        <p className="leading-[28.095px] whitespace-pre">Install App</p>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[166px] top-[56px]">
      <div className="absolute bg-white h-[218px] left-[166px] rounded-[12px] top-[56px] w-[225px]" />
      <div className="absolute bg-white h-[182px] left-[184.06px] rounded-tl-[8px] rounded-tr-[8px] top-[92px] w-[189px]" />
      <div className="absolute bg-[#cc6251] h-[24px] left-[201.06px] rounded-[3.815px] top-[111px] w-[151px]" />
      <div className="absolute bg-[#fcf4f3] h-[24px] left-[201.06px] rounded-[3.815px] top-[144px] w-[151px]" />
      <p className="absolute font-['SF_Pro_Display:Semibold',sans-serif] leading-[35.878px] left-[207.06px] not-italic text-[12px] text-black text-nowrap top-[138px] whitespace-pre">Trigger</p>
      <div className="absolute bg-[#fcf4f3] h-[24px] left-[201.06px] rounded-[3.815px] top-[210px] w-[26px]" />
      <div className="absolute bg-[#fcf4f3] h-[24px] left-[201.06px] rounded-[3.815px] top-[242px] w-[26px]" />
      <div className="absolute h-[33.636px] left-[301.06px] top-[114px] w-[26.161px]">
        <div className="absolute inset-[-107.89%_-144.9%_-123.27%_-164.18%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 108 112">
            <g filter="url(#filter0_d_1_3579)" id="Vector 5">
              <path d={svgPaths.p30bc7f00} fill="var(--fill-0, white)" />
              <path d={svgPaths.p30bc7f00} stroke="var(--stroke-0, black)" strokeWidth="4.58889" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="111.39" id="filter0_d_1_3579" width="107.02" x="-1.90735e-06" y="3.57628e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="3.67111" />
                <feGaussianBlur stdDeviation="20.3288" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_3579" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_3579" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <p className="absolute font-['SF_Pro_Display:Semibold',sans-serif] leading-[35.878px] left-[208.06px] not-italic text-[15.697px] text-black text-nowrap top-[58px] whitespace-pre">Select merge rules</p>
      <p className="absolute font-['SF_Pro_Display:Semibold',sans-serif] leading-[35.878px] left-[210.06px] not-italic text-[12px] text-nowrap text-white top-[105px] whitespace-pre">Name</p>
      <div className="absolute bg-[#fcf4f3] h-[24px] left-[201.06px] rounded-[3.815px] top-[177px] w-[72px]" />
      <div className="absolute bg-[#fcf4f3] h-[24px] left-[282.06px] rounded-[3.815px] top-[177px] w-[70px]" />
      <p className="absolute font-['SF_Pro_Display:Semibold',sans-serif] leading-[35.878px] left-[207.06px] not-italic text-[12px] text-black text-nowrap top-[171px] whitespace-pre">Hrs</p>
      <p className="absolute font-['SF_Pro_Display:Semibold',sans-serif] leading-[35.878px] left-[234.06px] not-italic text-[12px] text-black text-nowrap top-[205px] whitespace-pre">Merge to orginal</p>
      <p className="absolute font-['SF_Pro_Display:Semibold',sans-serif] leading-[35.878px] left-[234.06px] not-italic text-[12px] text-black text-nowrap top-[237px] whitespace-pre">Create a new order</p>
      <p className="absolute font-['SF_Pro_Display:Semibold',sans-serif] leading-[35.878px] left-[289.06px] not-italic text-[12px] text-black text-nowrap top-[171px] whitespace-pre">min</p>
    </div>
  );
}

function Frame188() {
  return (
    <div className="bg-[#f3e0de] box-border content-stretch flex flex-col gap-[6px] items-center justify-end p-[8px] relative rounded-[7.024px] shrink-0">
      <div className="flex flex-col font-['SF_Pro_Display:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#cc6251] text-[14px] text-center w-[131px]">
        <p className="leading-[1.4]">Save on every shipment</p>
      </div>
    </div>
  );
}

function Frame220() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-center left-[413px] top-[191px]">
      <div className="overflow-clip relative shrink-0 size-[60px]" data-name="CashDollar">
        <div className="absolute left-1/2 size-[42px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Icon">
          <div className="absolute inset-0" style={{ "--fill-0": "rgba(41, 132, 90, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
              <g id="Icon">
                <path d={svgPaths.p31914580} fill="var(--fill-0, #29845A)" />
                <path clipRule="evenodd" d={svgPaths.p32370880} fill="var(--fill-0, #29845A)" fillRule="evenodd" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <Frame188 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents left-[5px] top-[16px]">
      <Frame187 />
      <div className="absolute h-[58px] left-[71px] top-[56px] w-[93px]">
        <div className="absolute bottom-[-16.72%] left-[-1.42%] right-[-1.42%] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 96 68">
            <path d={svgPaths.p1619dd80} fill="var(--stroke-0, #CC6251)" id="Line 3" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[38.84px] left-[389.5px] top-[156.16px] w-[94px]">
        <div className="absolute bottom-[-3.39%] left-0 right-[-10.32%] top-[-3.39%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104 42">
            <path d={svgPaths.pb9353f0} fill="var(--stroke-0, #CC6251)" id="Line 4" />
          </svg>
        </div>
      </div>
      <Group4 />
      <Frame220 />
      <div className="absolute h-[33.636px] left-[105px] top-[48px] w-[26.161px]">
        <div className="absolute inset-[-105.53%_-141.85%_-120.9%_-161.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 106 110">
            <g filter="url(#filter0_d_1_3575)" id="Vector 5">
              <path d={svgPaths.p2fc26480} fill="var(--fill-0, white)" />
              <path d={svgPaths.p2fc26480} stroke="var(--stroke-0, #CC6251)" strokeWidth="3" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="109.798" id="filter0_d_1_3575" width="105.43" x="0" y="-9.53674e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="3.67111" />
                <feGaussianBlur stdDeviation="20.3288" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_3575" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_3575" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function ImageContainer1() {
  return (
    <div className="h-[327px] relative shrink-0 w-[566px]" data-name="Image_container">
      <Group7 />
    </div>
  );
}

function QsContainer() {
  return (
    <div className="bg-[#fcf4f3] box-border content-stretch flex gap-[32px] items-center pb-[100px] pt-[50px] px-[100px] relative rounded-[20px] shrink-0 w-[1200px]" data-name="QS container">
      <ContentCtaContainer />
      <ImageContainer1 />
    </div>
  );
}

function QuickSetupSection() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Quick setup section">
      <QsContainer />
    </div>
  );
}

function Frame315() {
  return (
    <div className="content-stretch flex gap-[5.308px] items-center relative shrink-0">
      <p className="font-['SF_Pro_Display:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#8c89ff] text-[13.934px] text-nowrap whitespace-pre">#1019</p>
    </div>
  );
}

function Frame316() {
  return (
    <div className="bg-[#b4fed2] box-border content-stretch flex gap-[6px] items-center px-[4px] py-[2px] relative rounded-[2.654px] shrink-0">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e1e1e] text-[8px] text-nowrap whitespace-pre">Paid</p>
    </div>
  );
}

function Frame317() {
  return (
    <div className="bg-[#ffe600] box-border content-stretch flex gap-[6px] items-center px-[4px] py-[2px] relative rounded-[2.654px] shrink-0">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e1e1e] text-[8px] text-nowrap whitespace-pre">Unulfilled</p>
    </div>
  );
}

function Frame318() {
  return (
    <div className="content-stretch flex gap-[3.318px] items-center relative shrink-0 w-full">
      <Frame316 />
      <Frame317 />
    </div>
  );
}

function Frame319() {
  return (
    <div className="content-stretch flex flex-col gap-[5.308px] items-start relative shrink-0 w-[98.863px]">
      <Frame315 />
      <Frame318 />
    </div>
  );
}

function Frame320() {
  return (
    <div className="content-stretch flex flex-col gap-[6.635px] items-start relative shrink-0">
      <div className="bg-[#f9e0dd] h-[3.981px] rounded-[19.905px] shrink-0 w-[57.062px]" />
      <div className="bg-[#f9e0dd] h-[3.981px] rounded-[19.905px] shrink-0 w-[33.839px]" />
    </div>
  );
}

function Frame321() {
  return (
    <div className="content-stretch flex gap-[3.318px] items-center relative shrink-0">
      <div className="relative rounded-[4.645px] shrink-0 size-[23.886px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[4.645px]">
          <div className="absolute bg-[#f9e0dd] inset-0 rounded-[4.645px]" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[4.645px] size-full" src={imgRectangle30} />
        </div>
      </div>
      <Frame320 />
    </div>
  );
}

function Frame322() {
  return (
    <div className="content-stretch flex flex-col gap-[6.635px] items-start relative shrink-0 w-[17.915px]">
      <div className="bg-[#f9e0dd] h-[3.981px] rounded-[19.905px] shrink-0 w-full" />
      <div className="bg-[#f9e0dd] h-[3.981px] rounded-[19.905px] shrink-0 w-full" />
    </div>
  );
}

function Frame323() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame321 />
      <Frame322 />
    </div>
  );
}

function Frame324() {
  return (
    <div className="content-stretch flex flex-col gap-[3.318px] items-start justify-center relative shrink-0 w-full">
      <div className="bg-[#f9e0dd] h-[5.308px] rounded-[19.905px] shrink-0 w-[18.578px]" />
      <div className="bg-[#f9e0dd] h-[5.308px] rounded-[19.905px] shrink-0 w-[102.844px]" />
      <div className="bg-[#f9e0dd] h-[5.308px] rounded-[19.905px] shrink-0 w-[91.564px]" />
      <div className="bg-[#f9e0dd] h-[5.308px] rounded-[19.905px] shrink-0 w-[112.796px]" />
    </div>
  );
}

function Frame325() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[12.607px] h-[140.664px] items-start left-[75px] p-[13.27px] rounded-[7.962px] top-[40.08px] w-[140px]">
      <div aria-hidden="true" className="absolute border border-[#cc6251] border-solid inset-0 pointer-events-none rounded-[7.962px]" />
      <Frame319 />
      <Frame323 />
      <Frame324 />
    </div>
  );
}

function Frame326() {
  return (
    <div className="content-stretch flex gap-[5.674px] items-center relative shrink-0">
      <p className="font-['SF_Pro_Display:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14.894px] text-nowrap text-white whitespace-pre">#1021</p>
    </div>
  );
}

function Frame327() {
  return (
    <div className="bg-[#b4fed2] box-border content-stretch flex gap-[6px] items-center px-[4px] py-[2px] relative rounded-[2.837px] shrink-0">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e1e1e] text-[10.638px] text-nowrap whitespace-pre">Paid</p>
    </div>
  );
}

function Frame328() {
  return (
    <div className="bg-[#ffe600] box-border content-stretch flex gap-[6px] items-center px-[4px] py-[2px] relative rounded-[2.837px] shrink-0">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e1e1e] text-[10.638px] text-nowrap whitespace-pre">Unulfilled</p>
    </div>
  );
}

function Frame329() {
  return (
    <div className="content-stretch flex gap-[3.546px] items-center relative shrink-0 w-full">
      <Frame327 />
      <Frame328 />
    </div>
  );
}

function Frame330() {
  return (
    <div className="content-stretch flex flex-col gap-[5.674px] items-start relative shrink-0 w-[105.674px]">
      <Frame326 />
      <Frame329 />
    </div>
  );
}

function Frame331() {
  return (
    <div className="content-stretch flex flex-col gap-[7.092px] items-start relative shrink-0 w-[94.326px]">
      <div className="bg-[#f9e0dd] h-[4.255px] rounded-[21.277px] shrink-0 w-full" />
      <div className="bg-[#f9e0dd] h-[4.255px] rounded-[21.277px] shrink-0 w-[56.738px]" />
    </div>
  );
}

function Frame332() {
  return (
    <div className="content-stretch flex gap-[3.546px] items-center relative shrink-0">
      <div className="relative rounded-[4.965px] shrink-0 size-[25.532px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[4.965px]">
          <div className="absolute bg-[#f9e0dd] inset-0 rounded-[4.965px]" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[4.965px] size-full" src={imgRectangle30} />
        </div>
      </div>
      <Frame331 />
    </div>
  );
}

function Frame333() {
  return (
    <div className="content-stretch flex flex-col gap-[7.092px] items-start relative shrink-0 w-[19.149px]">
      <div className="bg-[#f9e0dd] h-[4.255px] rounded-[21.277px] shrink-0 w-full" />
      <div className="bg-[#f9e0dd] h-[4.255px] rounded-[21.277px] shrink-0 w-full" />
    </div>
  );
}

function Frame334() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame332 />
      <Frame333 />
    </div>
  );
}

function Frame335() {
  return (
    <div className="content-stretch flex flex-col gap-[7.092px] items-start relative shrink-0 w-[94.326px]">
      <div className="bg-[#f9e0dd] h-[4.255px] rounded-[21.277px] shrink-0 w-full" />
      <div className="bg-[#f9e0dd] h-[4.255px] rounded-[21.277px] shrink-0 w-[56.738px]" />
    </div>
  );
}

function Frame336() {
  return (
    <div className="content-stretch flex gap-[2.837px] items-center relative shrink-0 w-[171.631px]">
      <div className="relative rounded-[4.965px] shrink-0 size-[25.532px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[4.965px]">
          <div className="absolute bg-[#f9e0dd] inset-0 rounded-[4.965px]" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[4.965px] size-full" src={imgRectangle31} />
        </div>
      </div>
      <Frame335 />
    </div>
  );
}

function Frame337() {
  return (
    <div className="content-stretch flex flex-col gap-[7.092px] items-start relative shrink-0 w-[19.149px]">
      <div className="bg-[#f9e0dd] h-[4.255px] rounded-[21.277px] shrink-0 w-full" />
      <div className="bg-[#f9e0dd] h-[4.255px] rounded-[21.277px] shrink-0 w-full" />
    </div>
  );
}

function Frame338() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame336 />
      <Frame337 />
    </div>
  );
}

function Frame339() {
  return (
    <div className="content-stretch flex flex-col gap-[3.546px] items-start justify-center relative shrink-0 w-full">
      <div className="bg-[#f9e0dd] h-[5.674px] rounded-[21.277px] shrink-0 w-[19.858px]" />
      <div className="bg-[#f9e0dd] h-[5.674px] rounded-[21.277px] shrink-0 w-[109.929px]" />
      <div className="bg-[#f9e0dd] h-[5.674px] rounded-[21.277px] shrink-0 w-[97.872px]" />
      <div className="bg-[#f9e0dd] h-[5.674px] rounded-[21.277px] shrink-0 w-[120.567px]" />
    </div>
  );
}

function Frame340() {
  return (
    <div className="absolute bg-[#cc6251] box-border content-stretch flex flex-col gap-[13.475px] h-[189.362px] items-start left-[307px] p-[14.184px] rounded-[14.184px] top-[calc(50%+0.181px)] translate-y-[-50%] w-[200px]">
      <Frame330 />
      <Frame334 />
      <Frame338 />
      <Frame339 />
    </div>
  );
}

function Frame341() {
  return (
    <div className="content-stretch flex gap-[5.308px] items-center relative shrink-0">
      <p className="font-['SF_Pro_Display:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#8c89ff] text-[13.934px] text-nowrap whitespace-pre">#1020</p>
    </div>
  );
}

function Frame342() {
  return (
    <div className="bg-[#b4fed2] box-border content-stretch flex gap-[6px] items-center px-[4px] py-[2px] relative rounded-[2.654px] shrink-0">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e1e1e] text-[8px] text-nowrap whitespace-pre">Paid</p>
    </div>
  );
}

function Frame343() {
  return (
    <div className="bg-[#ffe600] box-border content-stretch flex gap-[6px] items-center px-[4px] py-[2px] relative rounded-[2.654px] shrink-0">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e1e1e] text-[8px] text-nowrap whitespace-pre">Unulfilled</p>
    </div>
  );
}

function Frame344() {
  return (
    <div className="content-stretch flex gap-[3.318px] items-center relative shrink-0 w-full">
      <Frame342 />
      <Frame343 />
    </div>
  );
}

function Frame345() {
  return (
    <div className="content-stretch flex flex-col gap-[5.308px] items-start relative shrink-0 w-[98.863px]">
      <Frame341 />
      <Frame344 />
    </div>
  );
}

function Frame346() {
  return (
    <div className="content-stretch flex flex-col gap-[6.635px] items-start relative shrink-0">
      <div className="bg-[#f9e0dd] h-[3.981px] rounded-[19.905px] shrink-0 w-[57.062px]" />
      <div className="bg-[#f9e0dd] h-[3.981px] rounded-[19.905px] shrink-0 w-[34.502px]" />
    </div>
  );
}

function Frame347() {
  return (
    <div className="content-stretch flex gap-[3.318px] items-center relative shrink-0">
      <div className="relative rounded-[4.645px] shrink-0 size-[23.886px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[4.645px]">
          <div className="absolute bg-[#f9e0dd] inset-0 rounded-[4.645px]" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[4.645px] size-full" src={imgRectangle31} />
        </div>
      </div>
      <Frame346 />
    </div>
  );
}

function Frame348() {
  return (
    <div className="content-stretch flex flex-col gap-[6.635px] items-start relative shrink-0 w-[17.915px]">
      <div className="bg-[#f9e0dd] h-[3.981px] rounded-[19.905px] shrink-0 w-full" />
      <div className="bg-[#f9e0dd] h-[3.981px] rounded-[19.905px] shrink-0 w-full" />
    </div>
  );
}

function Frame349() {
  return (
    <div className="content-stretch flex gap-[11.28px] items-center relative shrink-0 w-full">
      <Frame347 />
      <Frame348 />
    </div>
  );
}

function Frame350() {
  return (
    <div className="content-stretch flex flex-col gap-[3.318px] items-start justify-center relative shrink-0 w-full">
      <div className="bg-[#f9e0dd] h-[5.308px] rounded-[19.905px] shrink-0 w-[18.578px]" />
      <div className="bg-[#f9e0dd] h-[5.308px] rounded-[19.905px] shrink-0 w-[102.844px]" />
      <div className="bg-[#f9e0dd] h-[5.308px] rounded-[19.905px] shrink-0 w-[91.564px]" />
      <div className="bg-[#f9e0dd] h-[5.308px] rounded-[19.905px] shrink-0 w-[112.796px]" />
    </div>
  );
}

function Frame351() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[12.607px] h-[140.664px] items-start left-[75px] p-[13.27px] rounded-[7.962px] top-[202px] w-[140px]">
      <div aria-hidden="true" className="absolute border border-[#cc6251] border-solid inset-0 pointer-events-none rounded-[7.962px]" />
      <Frame345 />
      <Frame349 />
      <Frame350 />
    </div>
  );
}

function Frame352() {
  return (
    <div className="bg-[#cc6251] box-border content-stretch flex flex-col gap-[10px] items-end justify-center p-[4px] relative rounded-[4px] shrink-0 w-[34px]">
      <div className="bg-[#fcf4f3] rounded-[3px] shrink-0 size-[11px]" />
    </div>
  );
}

function Frame284() {
  return (
    <div className="absolute content-stretch flex gap-[15px] items-end left-[326px] top-[308px]">
      <p className="font-['SF_Pro_Display:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14.894px] text-black text-nowrap whitespace-pre">Manual</p>
      <Frame352 />
      <p className="font-['SF_Pro_Display:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14.894px] text-black text-nowrap whitespace-pre">Auto</p>
    </div>
  );
}

function BlockSpywareExtensions() {
  return (
    <div className="bg-[#fcf4f3] h-[383px] overflow-clip relative rounded-[20px] shrink-0 w-full" data-name="block spyware extensions">
      <Frame325 />
      <Frame340 />
      <Frame351 />
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[215px] top-[calc(50%-0.657px)] translate-y-[-50%] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "162.3125", "--transform-inner-height": "92.484375" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="h-[92.5px] relative w-[162.313px]">
            <div className="absolute inset-[-4.59%_-2.61%_-0.86%_-2.61%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 171 98">
                <path d={svgPaths.p3e3c5780} fill="var(--stroke-0, #CC6251)" id="Vector 6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="absolute font-['SF_Pro_Display:Bold',sans-serif] leading-[normal] left-[370px] not-italic text-[14.894px] text-black text-nowrap top-[65px] whitespace-pre">Merged</p>
      <Frame284 />
    </div>
  );
}

function Frame237() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start leading-[0] not-italic p-[10px] relative size-full text-[24px] tracking-[0.4699px]">
          <div className="flex flex-col font-['SF_Pro_Display:Bold',sans-serif] justify-center relative shrink-0 text-black text-center text-nowrap">
            <p className="leading-[1.215] whitespace-pre">Manual or Automatic Merging</p>
          </div>
          <div className="flex flex-col font-['SF_Pro_Display:Medium',sans-serif] justify-center relative shrink-0 text-[#616161] w-[521px]">
            <p className="leading-[1.215]">Choose how you work. Auto-merge using smart rules or manually merge only when needed.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Feature1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[540px] items-start relative shrink-0 w-[557px]" data-name="Feature 1">
      <BlockSpywareExtensions />
      <Frame237 />
    </div>
  );
}

function Frame353() {
  return (
    <div className="content-stretch flex gap-[5.308px] items-center relative shrink-0">
      <p className="font-['SF_Pro_Display:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#8c89ff] text-[13.934px] text-nowrap whitespace-pre">#1019</p>
    </div>
  );
}

function Frame354() {
  return (
    <div className="bg-[#b4fed2] box-border content-stretch flex gap-[6px] items-center px-[4px] py-[2px] relative rounded-[2.654px] shrink-0">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e1e1e] text-[8px] text-nowrap whitespace-pre">Paid</p>
    </div>
  );
}

function Frame355() {
  return (
    <div className="bg-[#ffe600] box-border content-stretch flex gap-[6px] items-center px-[4px] py-[2px] relative rounded-[2.654px] shrink-0">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e1e1e] text-[8px] text-nowrap whitespace-pre">Unulfilled</p>
    </div>
  );
}

function Frame356() {
  return (
    <div className="content-stretch flex gap-[3.318px] items-center relative shrink-0 w-full">
      <Frame354 />
      <Frame355 />
    </div>
  );
}

function Frame357() {
  return (
    <div className="content-stretch flex flex-col gap-[5.308px] items-start relative shrink-0 w-[98.863px]">
      <Frame353 />
      <Frame356 />
    </div>
  );
}

function Frame358() {
  return (
    <div className="content-stretch flex flex-col gap-[6.635px] items-start relative shrink-0">
      <div className="bg-[#f9e0dd] h-[3.981px] rounded-[19.905px] shrink-0 w-[57.062px]" />
      <div className="bg-[#f9e0dd] h-[3.981px] rounded-[19.905px] shrink-0 w-[33.839px]" />
    </div>
  );
}

function Frame359() {
  return (
    <div className="content-stretch flex gap-[3.318px] items-center relative shrink-0">
      <div className="relative rounded-[4.645px] shrink-0 size-[23.886px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[4.645px]">
          <div className="absolute bg-[#f9e0dd] inset-0 rounded-[4.645px]" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[4.645px] size-full" src={imgRectangle30} />
        </div>
      </div>
      <Frame358 />
    </div>
  );
}

function Frame360() {
  return (
    <div className="content-stretch flex flex-col gap-[6.635px] items-start relative shrink-0 w-[17.915px]">
      <div className="bg-[#f9e0dd] h-[3.981px] rounded-[19.905px] shrink-0 w-full" />
      <div className="bg-[#f9e0dd] h-[3.981px] rounded-[19.905px] shrink-0 w-full" />
    </div>
  );
}

function Frame361() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame359 />
      <Frame360 />
    </div>
  );
}

function Frame362() {
  return (
    <div className="content-stretch flex flex-col gap-[3.318px] items-start justify-center relative shrink-0 w-full">
      <div className="bg-[#f9e0dd] h-[5.308px] rounded-[19.905px] shrink-0 w-[18.578px]" />
      <div className="bg-[#f9e0dd] h-[5.308px] rounded-[19.905px] shrink-0 w-[102.844px]" />
      <div className="bg-[#f9e0dd] h-[5.308px] rounded-[19.905px] shrink-0 w-[91.564px]" />
      <div className="bg-[#f9e0dd] h-[5.308px] rounded-[19.905px] shrink-0 w-[112.796px]" />
    </div>
  );
}

function Frame363() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[12.607px] h-[140.664px] items-start left-[118px] p-[13.27px] rounded-[7.962px] top-[-38px] w-[140px]">
      <div aria-hidden="true" className="absolute border border-[#cc6251] border-solid inset-0 pointer-events-none rounded-[7.962px]" />
      <Frame357 />
      <Frame361 />
      <Frame362 />
    </div>
  );
}

function Frame364() {
  return (
    <div className="content-stretch flex gap-[5.308px] items-center relative shrink-0">
      <p className="font-['SF_Pro_Display:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#8c89ff] text-[13.934px] text-nowrap whitespace-pre">#1020</p>
    </div>
  );
}

function Frame365() {
  return (
    <div className="bg-[#b4fed2] box-border content-stretch flex gap-[6px] items-center px-[4px] py-[2px] relative rounded-[2.654px] shrink-0">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e1e1e] text-[8px] text-nowrap whitespace-pre">Paid</p>
    </div>
  );
}

function Frame366() {
  return (
    <div className="bg-[#ffe600] box-border content-stretch flex gap-[6px] items-center px-[4px] py-[2px] relative rounded-[2.654px] shrink-0">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e1e1e] text-[8px] text-nowrap whitespace-pre">Unulfilled</p>
    </div>
  );
}

function Frame367() {
  return (
    <div className="content-stretch flex gap-[3.318px] items-center relative shrink-0 w-full">
      <Frame365 />
      <Frame366 />
    </div>
  );
}

function Frame368() {
  return (
    <div className="content-stretch flex flex-col gap-[5.308px] items-start relative shrink-0 w-[98.863px]">
      <Frame364 />
      <Frame367 />
    </div>
  );
}

function Frame369() {
  return (
    <div className="content-stretch flex flex-col gap-[6.635px] items-start relative shrink-0">
      <div className="bg-[#f9e0dd] h-[3.981px] rounded-[19.905px] shrink-0 w-[57.062px]" />
      <div className="bg-[#f9e0dd] h-[3.981px] rounded-[19.905px] shrink-0 w-[34.502px]" />
    </div>
  );
}

function Frame370() {
  return (
    <div className="content-stretch flex gap-[3.318px] items-center relative shrink-0">
      <div className="relative rounded-[4.645px] shrink-0 size-[23.886px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[4.645px]">
          <div className="absolute bg-[#f9e0dd] inset-0 rounded-[4.645px]" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[4.645px] size-full" src={imgRectangle31} />
        </div>
      </div>
      <Frame369 />
    </div>
  );
}

function Frame371() {
  return (
    <div className="content-stretch flex flex-col gap-[6.635px] items-start relative shrink-0 w-[17.915px]">
      <div className="bg-[#f9e0dd] h-[3.981px] rounded-[19.905px] shrink-0 w-full" />
      <div className="bg-[#f9e0dd] h-[3.981px] rounded-[19.905px] shrink-0 w-full" />
    </div>
  );
}

function Frame372() {
  return (
    <div className="content-stretch flex gap-[11.28px] items-center relative shrink-0 w-full">
      <Frame370 />
      <Frame371 />
    </div>
  );
}

function Frame373() {
  return (
    <div className="content-stretch flex flex-col gap-[3.318px] items-start justify-center relative shrink-0 w-full">
      <div className="bg-[#f9e0dd] h-[5.308px] rounded-[19.905px] shrink-0 w-[18.578px]" />
      <div className="bg-[#f9e0dd] h-[5.308px] rounded-[19.905px] shrink-0 w-[102.844px]" />
      <div className="bg-[#f9e0dd] h-[5.308px] rounded-[19.905px] shrink-0 w-[91.564px]" />
      <div className="bg-[#f9e0dd] h-[5.308px] rounded-[19.905px] shrink-0 w-[112.796px]" />
    </div>
  );
}

function Frame374() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[12.607px] h-[140.664px] items-start left-[299px] p-[13.27px] rounded-[7.962px] top-[-38px] w-[140px]">
      <div aria-hidden="true" className="absolute border border-[#cc6251] border-solid inset-0 pointer-events-none rounded-[7.962px]" />
      <Frame368 />
      <Frame372 />
      <Frame373 />
    </div>
  );
}

function Frame375() {
  return (
    <div className="content-stretch flex gap-[5.674px] items-center relative shrink-0">
      <p className="font-['SF_Pro_Display:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14.894px] text-nowrap text-white whitespace-pre">#1021</p>
    </div>
  );
}

function Frame376() {
  return (
    <div className="bg-[#b4fed2] box-border content-stretch flex gap-[6px] items-center px-[4px] py-[2px] relative rounded-[2.837px] shrink-0">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e1e1e] text-[10.638px] text-nowrap whitespace-pre">Paid</p>
    </div>
  );
}

function Frame377() {
  return (
    <div className="bg-[#ffe600] box-border content-stretch flex gap-[6px] items-center px-[4px] py-[2px] relative rounded-[2.837px] shrink-0">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e1e1e] text-[10.638px] text-nowrap whitespace-pre">Unulfilled</p>
    </div>
  );
}

function Frame378() {
  return (
    <div className="content-stretch flex gap-[3.546px] items-center relative shrink-0 w-full">
      <Frame376 />
      <Frame377 />
    </div>
  );
}

function Frame379() {
  return (
    <div className="content-stretch flex flex-col gap-[5.674px] items-start relative shrink-0 w-[105.674px]">
      <Frame375 />
      <Frame378 />
    </div>
  );
}

function Frame380() {
  return (
    <div className="content-stretch flex flex-col gap-[7.092px] items-start relative shrink-0 w-[94.326px]">
      <div className="bg-[#f9e0dd] h-[4.255px] rounded-[21.277px] shrink-0 w-full" />
      <div className="bg-[#f9e0dd] h-[4.255px] rounded-[21.277px] shrink-0 w-[56.738px]" />
    </div>
  );
}

function Frame381() {
  return (
    <div className="content-stretch flex gap-[3.546px] items-center relative shrink-0">
      <div className="relative rounded-[4.965px] shrink-0 size-[25.532px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[4.965px]">
          <div className="absolute bg-[#f9e0dd] inset-0 rounded-[4.965px]" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[4.965px] size-full" src={imgRectangle30} />
        </div>
      </div>
      <Frame380 />
    </div>
  );
}

function Frame382() {
  return (
    <div className="content-stretch flex flex-col gap-[7.092px] items-start relative shrink-0 w-[19.149px]">
      <div className="bg-[#f9e0dd] h-[4.255px] rounded-[21.277px] shrink-0 w-full" />
      <div className="bg-[#f9e0dd] h-[4.255px] rounded-[21.277px] shrink-0 w-full" />
    </div>
  );
}

function Frame383() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame381 />
      <Frame382 />
    </div>
  );
}

function Frame384() {
  return (
    <div className="content-stretch flex flex-col gap-[7.092px] items-start relative shrink-0 w-[94.326px]">
      <div className="bg-[#f9e0dd] h-[4.255px] rounded-[21.277px] shrink-0 w-full" />
      <div className="bg-[#f9e0dd] h-[4.255px] rounded-[21.277px] shrink-0 w-[56.738px]" />
    </div>
  );
}

function Frame385() {
  return (
    <div className="content-stretch flex gap-[2.837px] items-center relative shrink-0 w-[171.631px]">
      <div className="relative rounded-[4.965px] shrink-0 size-[25.532px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[4.965px]">
          <div className="absolute bg-[#f9e0dd] inset-0 rounded-[4.965px]" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[4.965px] size-full" src={imgRectangle31} />
        </div>
      </div>
      <Frame384 />
    </div>
  );
}

function Frame386() {
  return (
    <div className="content-stretch flex flex-col gap-[7.092px] items-start relative shrink-0 w-[19.149px]">
      <div className="bg-[#f9e0dd] h-[4.255px] rounded-[21.277px] shrink-0 w-full" />
      <div className="bg-[#f9e0dd] h-[4.255px] rounded-[21.277px] shrink-0 w-full" />
    </div>
  );
}

function Frame387() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame385 />
      <Frame386 />
    </div>
  );
}

function Frame388() {
  return (
    <div className="content-stretch flex flex-col gap-[3.546px] items-start justify-center relative shrink-0 w-full">
      <div className="bg-[#f9e0dd] h-[5.674px] rounded-[21.277px] shrink-0 w-[19.858px]" />
      <div className="bg-[#f9e0dd] h-[5.674px] rounded-[21.277px] shrink-0 w-[109.929px]" />
      <div className="bg-[#f9e0dd] h-[5.674px] rounded-[21.277px] shrink-0 w-[97.872px]" />
      <div className="bg-[#f9e0dd] h-[5.674px] rounded-[21.277px] shrink-0 w-[120.567px]" />
    </div>
  );
}

function Frame389() {
  return (
    <div className="absolute bg-[#cc6251] box-border content-stretch flex flex-col gap-[13.475px] h-[189.362px] items-start left-[calc(50%-1px)] p-[14.184px] rounded-[14.184px] top-[calc(50%+136.181px)] translate-x-[-50%] translate-y-[-50%] w-[200px]">
      <Frame379 />
      <Frame383 />
      <Frame387 />
      <Frame388 />
    </div>
  );
}

function Frame390() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[4px] relative w-full">
          <p className="basis-0 font-['SF_Pro_Display:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[14.894px] text-black">Merge to original</p>
        </div>
      </div>
    </div>
  );
}

function Frame391() {
  return (
    <div className="bg-[#fcf4f3] relative rounded-[6px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[6px] py-[5px] relative w-full">
          <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14.894px] text-black text-nowrap whitespace-pre">Create a new order</p>
        </div>
      </div>
    </div>
  );
}

function Frame392() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[3px] items-start left-[203px] p-[12px] rounded-[10px] top-[118px]">
      <Frame390 />
      <Frame391 />
    </div>
  );
}

function BlockSpywareExtensions1() {
  return (
    <div className="bg-[#fcf4f3] h-[383px] overflow-clip relative rounded-[20px] shrink-0 w-full" data-name="block spyware extensions">
      <Frame363 />
      <Frame374 />
      <Frame389 />
      <div className="absolute h-[136.5px] left-[calc(50%-0.343px)] top-[calc(50%-26.25px)] translate-x-[-50%] translate-y-[-50%] w-[189.313px]">
        <div className="absolute inset-[-3.11%_-2.24%_-0.58%_-2.24%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 198 142">
            <path d={svgPaths.p2de67000} fill="var(--stroke-0, #CC6251)" id="Vector 6" />
          </svg>
        </div>
      </div>
      <Frame392 />
      <div className="absolute h-[33.636px] left-[332px] top-[176px] w-[26.161px]">
        <div className="absolute inset-[-107.89%_-144.9%_-123.27%_-164.18%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 108 112">
            <g filter="url(#filter0_d_1_3579)" id="Vector 5">
              <path d={svgPaths.p30bc7f00} fill="var(--fill-0, white)" />
              <path d={svgPaths.p30bc7f00} stroke="var(--stroke-0, black)" strokeWidth="4.58889" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="111.39" id="filter0_d_1_3579" width="107.02" x="-1.90735e-06" y="3.57628e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="3.67111" />
                <feGaussianBlur stdDeviation="20.3288" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_3579" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_3579" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame238() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start leading-[0] not-italic p-[10px] relative size-full text-[24px] tracking-[0.4699px]">
          <div className="flex flex-col font-['SF_Pro_Display:Bold',sans-serif] justify-center relative shrink-0 text-black text-center text-nowrap">
            <p className="leading-[1.215] whitespace-pre">Smart Order Management</p>
          </div>
          <div className="flex flex-col font-['SF_Pro_Display:Medium',sans-serif] justify-center relative shrink-0 text-[#616161] w-[521px]">
            <p className="leading-[1.215]">Decide whether to merge into the original order or generate a fresh consolidated order for fulfillment.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Feature2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[540px] items-start relative shrink-0 w-[558px]" data-name="Feature 2">
      <BlockSpywareExtensions1 />
      <Frame238 />
    </div>
  );
}

function Frame393() {
  return (
    <div className="content-stretch flex flex-col gap-[6.635px] items-start relative shrink-0">
      <div className="bg-[#f9e0dd] h-[3.981px] rounded-[19.905px] shrink-0 w-[57.062px]" />
      <div className="bg-[#f9e0dd] h-[3.981px] rounded-[19.905px] shrink-0 w-[33.839px]" />
    </div>
  );
}

function Frame394() {
  return (
    <div className="content-stretch flex gap-[3.318px] items-center relative shrink-0">
      <div className="relative rounded-[4.645px] shrink-0 size-[23.886px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[4.645px]">
          <div className="absolute bg-[#f9e0dd] inset-0 rounded-[4.645px]" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[4.645px] size-full" src={imgRectangle30} />
        </div>
      </div>
      <Frame393 />
    </div>
  );
}

function Frame395() {
  return (
    <div className="content-stretch flex flex-col gap-[6.635px] items-start relative shrink-0 w-[17.915px]">
      <div className="bg-[#f9e0dd] h-[3.981px] rounded-[19.905px] shrink-0 w-full" />
      <div className="bg-[#f9e0dd] h-[3.981px] rounded-[19.905px] shrink-0 w-full" />
    </div>
  );
}

function Frame396() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame394 />
      <Frame395 />
    </div>
  );
}

function Frame397() {
  return (
    <div className="bg-white relative rounded-[7.962px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#cc6251] border-solid inset-0 pointer-events-none rounded-[7.962px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12.607px] items-start p-[8px] relative w-full">
          <Frame396 />
        </div>
      </div>
    </div>
  );
}

function Frame398() {
  return (
    <div className="content-stretch flex flex-col gap-[6.635px] items-start relative shrink-0">
      <div className="bg-[#f9e0dd] h-[3.981px] rounded-[19.905px] shrink-0 w-[57.062px]" />
      <div className="bg-[#f9e0dd] h-[3.981px] rounded-[19.905px] shrink-0 w-[33.839px]" />
    </div>
  );
}

function Frame399() {
  return (
    <div className="content-stretch flex gap-[3.318px] items-center relative shrink-0">
      <div className="relative rounded-[4.645px] shrink-0 size-[23.886px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[4.645px] size-full" src={imgRectangle32} />
      </div>
      <Frame398 />
    </div>
  );
}

function Frame400() {
  return (
    <div className="content-stretch flex flex-col gap-[6.635px] items-start relative shrink-0 w-[17.915px]">
      <div className="bg-[#f9e0dd] h-[3.981px] rounded-[19.905px] shrink-0 w-full" />
      <div className="bg-[#f9e0dd] h-[3.981px] rounded-[19.905px] shrink-0 w-full" />
    </div>
  );
}

function Frame401() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame399 />
      <Frame400 />
    </div>
  );
}

function Frame402() {
  return (
    <div className="bg-white relative rounded-[7.962px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#cc6251] border-solid inset-0 pointer-events-none rounded-[7.962px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12.607px] items-start p-[8px] relative w-full">
          <Frame401 />
        </div>
      </div>
    </div>
  );
}

function Frame288() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[10px] items-start left-[39px] p-[10px] rounded-[14px] top-[135px] w-[205px]">
      <p className="font-['SF_Pro_Display:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#616161] text-[12.49px] text-nowrap whitespace-pre">Source Orders</p>
      <Frame397 />
      <Frame402 />
    </div>
  );
}

function Frame403() {
  return (
    <div className="content-stretch flex gap-[8.569px] items-center relative shrink-0">
      <p className="font-['SF_Pro_Display:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[22.494px] text-nowrap text-white whitespace-pre">#1021</p>
    </div>
  );
}

function Frame404() {
  return (
    <div className="bg-[#b4fed2] box-border content-stretch flex gap-[9.062px] items-center px-[6.041px] py-[3.021px] relative rounded-[4.285px] shrink-0">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e1e1e] text-[16.067px] text-nowrap whitespace-pre">Paid</p>
    </div>
  );
}

function Frame405() {
  return (
    <div className="bg-[#ffe600] box-border content-stretch flex gap-[9.062px] items-center px-[6.041px] py-[3.021px] relative rounded-[4.285px] shrink-0">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e1e1e] text-[16.067px] text-nowrap whitespace-pre">Unulfilled</p>
    </div>
  );
}

function Frame406() {
  return (
    <div className="content-stretch flex gap-[5.356px] items-center relative shrink-0 w-full">
      <Frame404 />
      <Frame405 />
    </div>
  );
}

function Frame407() {
  return (
    <div className="content-stretch flex flex-col gap-[8.569px] items-start relative shrink-0 w-[159.603px]">
      <Frame403 />
      <Frame406 />
    </div>
  );
}

function Frame408() {
  return (
    <div className="content-stretch flex flex-col gap-[10.712px] items-start relative shrink-0 w-[142.464px]">
      <div className="bg-[#f9e0dd] h-[6.427px] rounded-[32.135px] shrink-0 w-full" />
      <div className="bg-[#f9e0dd] h-[6.427px] rounded-[32.135px] shrink-0 w-[85.693px]" />
    </div>
  );
}

function Frame409() {
  return (
    <div className="content-stretch flex gap-[5.356px] items-center relative shrink-0">
      <div className="relative rounded-[7.498px] shrink-0 size-[38.562px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[7.498px]">
          <div className="absolute bg-[#f9e0dd] inset-0 rounded-[7.498px]" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[7.498px] size-full" src={imgRectangle30} />
        </div>
      </div>
      <Frame408 />
    </div>
  );
}

function Frame410() {
  return (
    <div className="content-stretch flex flex-col gap-[10.712px] items-start relative shrink-0 w-[28.921px]">
      <div className="bg-[#f9e0dd] h-[6.427px] rounded-[32.135px] shrink-0 w-full" />
      <div className="bg-[#f9e0dd] h-[6.427px] rounded-[32.135px] shrink-0 w-full" />
    </div>
  );
}

function Frame411() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame409 />
      <Frame410 />
    </div>
  );
}

function Frame412() {
  return (
    <div className="content-stretch flex flex-col gap-[10.712px] items-start relative shrink-0 w-[142.464px]">
      <div className="bg-[#f9e0dd] h-[6.427px] rounded-[32.135px] shrink-0 w-full" />
      <div className="bg-[#f9e0dd] h-[6.427px] rounded-[32.135px] shrink-0 w-[85.693px]" />
    </div>
  );
}

function Frame413() {
  return (
    <div className="content-stretch flex gap-[4.285px] items-center relative shrink-0 w-[259.221px]">
      <div className="relative rounded-[7.498px] shrink-0 size-[38.562px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[7.498px]">
          <div className="absolute bg-[#f9e0dd] inset-0 rounded-[7.498px]" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[7.498px] size-full" src={imgRectangle31} />
        </div>
      </div>
      <Frame412 />
    </div>
  );
}

function Frame414() {
  return (
    <div className="content-stretch flex flex-col gap-[10.712px] items-start relative shrink-0 w-[28.921px]">
      <div className="bg-[#f9e0dd] h-[6.427px] rounded-[32.135px] shrink-0 w-full" />
      <div className="bg-[#f9e0dd] h-[6.427px] rounded-[32.135px] shrink-0 w-full" />
    </div>
  );
}

function Frame415() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame413 />
      <Frame414 />
    </div>
  );
}

function Frame416() {
  return (
    <div className="content-stretch flex flex-col gap-[5.356px] items-start justify-center relative shrink-0 w-full">
      <div className="bg-[#f9e0dd] h-[8.569px] rounded-[32.135px] shrink-0 w-[29.992px]" />
      <div className="bg-[#f9e0dd] h-[8.569px] rounded-[32.135px] shrink-0 w-[166.03px]" />
      <div className="bg-[#f9e0dd] h-[8.569px] rounded-[32.135px] shrink-0 w-[147.82px]" />
      <div className="bg-[#f9e0dd] h-[8.569px] rounded-[32.135px] shrink-0 w-[182.097px]" />
    </div>
  );
}

function Frame417() {
  return (
    <div className="absolute bg-[#cc6251] box-border content-stretch flex flex-col gap-[20.352px] h-[327px] items-start left-[calc(50%+101.5px)] p-[21.423px] rounded-[21.423px] top-[calc(50%+81px)] translate-x-[-50%] translate-y-[-50%] w-[302px]">
      <Frame407 />
      <Frame411 />
      <Frame415 />
      <Frame416 />
    </div>
  );
}

function BlockSpywareExtensions2() {
  return (
    <div className="bg-[#fcf4f3] h-[383px] overflow-clip relative rounded-[20px] shrink-0 w-full" data-name="block spyware extensions">
      <Frame288 />
      <Frame417 />
      <p className="absolute font-['SF_Pro_Display:Bold',sans-serif] leading-[normal] left-[43px] not-italic text-[#616161] text-[22.494px] text-nowrap top-[104px] whitespace-pre">Archived</p>
      <p className="absolute font-['SF_Pro_Display:Bold',sans-serif] leading-[normal] left-[234px] not-italic text-[#616161] text-[22.494px] text-nowrap top-[72px] whitespace-pre">Merged Order</p>
      <div className="absolute h-[38px] left-[159px] top-[276px] w-[58px]">
        <div className="absolute inset-[-3.95%_-2.59%_-29.01%_-2.58%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 61 51">
            <path d={svgPaths.p130a6700} fill="var(--stroke-0, #CC6251)" id="Vector 7" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame239() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start leading-[0] not-italic p-[10px] relative size-full text-[24px] tracking-[0.4699px]">
          <div className="flex flex-col font-['SF_Pro_Display:Bold',sans-serif] justify-center relative shrink-0 text-black text-center text-nowrap">
            <p className="leading-[1.215] whitespace-pre">Remove or Archive Merged Orders</p>
          </div>
          <div className="flex flex-col font-['SF_Pro_Display:Medium',sans-serif] justify-center relative shrink-0 text-[#616161] w-[521px]">
            <p className="leading-[1.215]">Keep your Shopify dashboard clean. No duplicate fulfillment. No confusion.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Feature3() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[540px] items-start relative shrink-0 w-[557px]" data-name="Feature 3">
      <BlockSpywareExtensions2 />
      <Frame239 />
    </div>
  );
}

function Title() {
  return (
    <div className="box-border content-stretch flex gap-[3.726px] items-center px-0 py-[0.932px] relative shrink-0 w-full" data-name="Title">
      <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-[650] grow leading-[11.179px] min-h-px min-w-px not-italic relative shrink-0 text-[#303030] text-[9.32px] tracking-[-0.2px]">Welcome to Order Merging 👋🏻</p>
    </div>
  );
}

function TitleWrapper() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[0.932px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Title wrapper">
      <Title />
    </div>
  );
}

function ButtonGroup() {
  return (
    <div className="basis-0 content-stretch flex gap-[3.726px] grow items-center justify-end min-h-px min-w-px relative shrink-0" data-name="Button group">
      <div className="bg-white box-border content-stretch flex gap-[0.932px] items-center justify-center px-[5.589px] py-[2.795px] relative rounded-[3.762px] shrink-0" data-name="Button 2">
        <p className="font-['Inter:Medium',sans-serif] font-[550] leading-[7.452px] not-italic relative shrink-0 text-[#303030] text-[5.59px] text-nowrap whitespace-pre">View All merges</p>
        <div className="absolute inset-0 pointer-events-none shadow-[0px_-0.466px_0px_0px_inset_#b5b5b5,-0.466px_0px_0px_0px_inset_#e3e3e3,0.466px_0px_0px_0px_inset_#e3e3e3,0px_0.466px_0px_0px_inset_#e3e3e3]" />
      </div>
      <div className="bg-white box-border content-stretch flex gap-[0.932px] items-center justify-center px-[5.589px] py-[2.795px] relative rounded-[3.762px] shrink-0" data-name="Button 1">
        <p className="font-['Inter:Medium',sans-serif] font-[550] leading-[7.452px] not-italic relative shrink-0 text-[#303030] text-[5.59px] text-nowrap whitespace-pre">{`Usage & Billing`}</p>
        <div className="absolute inset-0 pointer-events-none shadow-[0px_-0.466px_0px_0px_inset_#b5b5b5,-0.466px_0px_0px_0px_inset_#e3e3e3,0.466px_0px_0px_0px_inset_#e3e3e3,0px_0.466px_0px_0px_inset_#e3e3e3]" />
      </div>
      <div className="bg-[#303030] box-border content-stretch flex gap-[0.932px] items-center justify-center px-[5.589px] py-[2.795px] relative rounded-[3.762px] shrink-0" data-name="Button 3">
        <p className="font-['SF_Pro_Text:Semibold',sans-serif] leading-[7.452px] not-italic relative shrink-0 text-[5.59px] text-nowrap text-white whitespace-pre">Manage Conditions</p>
        <div className="absolute flex inset-0 items-center justify-center">
          <div className="flex-none h-[28px] rotate-[180deg] scale-y-[-100%] w-[57px]">
            <div className="relative size-full" data-name=".button-shine">
              <div className="absolute bg-gradient-to-b from-[82.137%] from-[rgba(255,255,255,0.07)] inset-0 rounded-[3.762px] to-[94.444%] to-[rgba(255,255,255,0.15)]" data-name="shine">
                <div className="absolute inset-0 pointer-events-none shadow-[0px_0.932px_0px_0px_inset_rgba(255,255,255,0.2),0.932px_0px_0px_0px_inset_rgba(255,255,255,0.2),-0.932px_0px_0px_0px_inset_rgba(255,255,255,0.2),0px_-0.466px_0px_1px_inset_#000000,0px_0.466px_0px_0px_inset_#000000]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex gap-[4.658px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex gap-[1.863px] items-start relative shrink-0 w-[165.351px]" data-name="Header">
        <TitleWrapper />
      </div>
      <ButtonGroup />
    </div>
  );
}

function Title1() {
  return (
    <div className="box-border content-stretch flex gap-[3.726px] items-center px-0 py-[0.932px] relative shrink-0 w-full" data-name="Title">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-[650] leading-[9.316px] not-italic relative shrink-0 text-[#303030] text-[6.52px] text-nowrap whitespace-pre">Overview</p>
    </div>
  );
}

function TitleWrapper1() {
  return (
    <div className="content-stretch flex flex-col gap-[0.932px] items-center relative shrink-0" data-name="Title wrapper">
      <Title1 />
    </div>
  );
}

function IconWrapperForAutoLayout4() {
  return (
    <div className="relative shrink-0 size-[7.452px]" data-name="icon wrapper for auto layout">
      <div className="absolute left-0 size-[20px] top-[-0.93px]" data-name="ChevronDown">
        <div className="absolute h-[2.562px] left-[2.56px] top-[3.84px] w-[4.425px]" data-name="Icon">
          <div className="absolute inset-0" style={{ "--fill-0": "rgba(74, 74, 74, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 3">
              <path clipRule="evenodd" d={svgPaths.p236cbb80} fill="var(--fill-0, #4A4A4A)" fillRule="evenodd" id="Icon" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame103() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <div className="content-stretch flex gap-[1.863px] items-start relative shrink-0" data-name="Header">
        <TitleWrapper1 />
      </div>
      <div className="bg-white box-border content-stretch flex gap-[0.932px] items-center justify-center px-[3.726px] py-[1.863px] relative rounded-[3.762px] shrink-0" data-name="Button">
        <p className="font-['Inter:Medium',sans-serif] font-[550] leading-[7.452px] not-italic relative shrink-0 text-[#303030] text-[5.59px] text-nowrap whitespace-pre">Last 30 days</p>
        <IconWrapperForAutoLayout4 />
        <div className="absolute inset-0 pointer-events-none shadow-[0px_-0.466px_0px_0px_inset_#b5b5b5,-0.466px_0px_0px_0px_inset_#e3e3e3,0.466px_0px_0px_0px_inset_#e3e3e3,0px_0.466px_0px_0px_inset_#e3e3e3]" />
      </div>
    </div>
  );
}

function Title2() {
  return (
    <div className="box-border content-stretch flex items-center px-0 py-[0.932px] relative shrink-0 w-full" data-name="Title">
      <p className="font-['Inter:Medium',sans-serif] font-[450] leading-[9.316px] not-italic relative shrink-0 text-[#616161] text-[6.521px] text-nowrap whitespace-pre">Total orders merged</p>
      <div className="relative shrink-0 size-[9.316px]" data-name="Info">
        <div className="absolute left-1/2 size-[6.521px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Icon">
          <div className="absolute inset-0" style={{ "--fill-0": "rgba(74, 74, 74, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
              <g id="Icon">
                <path d={svgPaths.p2674100} fill="#4A4A4A" />
                <path d={svgPaths.p338ea100} fill="#4A4A4A" />
                <path clipRule="evenodd" d={svgPaths.p24936500} fill="#4A4A4A" fillRule="evenodd" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[5.589px] self-stretch shrink-0" data-name="Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-between pl-[7.452px] pr-[5.589px] py-[5.589px] relative size-full">
          <Title2 />
          <p className="font-['Inter:Semi_Bold',sans-serif] font-[650] leading-[9.316px] min-w-full not-italic relative shrink-0 text-[#303030] text-[6.521px] w-[min-content]">100</p>
        </div>
      </div>
    </div>
  );
}

function Title3() {
  return (
    <div className="box-border content-stretch flex items-center px-0 py-[0.932px] relative shrink-0 w-full" data-name="Title">
      <p className="font-['Inter:Medium',sans-serif] font-[450] leading-[9.316px] not-italic relative shrink-0 text-[#616161] text-[6.521px] text-nowrap whitespace-pre">Shipping Cost Saved</p>
      <div className="relative shrink-0 size-[9.316px]" data-name="Info">
        <div className="absolute left-1/2 size-[6.521px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Icon">
          <div className="absolute inset-0" style={{ "--fill-0": "rgba(74, 74, 74, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
              <g id="Icon">
                <path d={svgPaths.p2674100} fill="#4A4A4A" />
                <path d={svgPaths.p338ea100} fill="#4A4A4A" />
                <path clipRule="evenodd" d={svgPaths.p24936500} fill="#4A4A4A" fillRule="evenodd" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[5.589px] self-stretch shrink-0" data-name="Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-between p-[5.589px] relative size-full">
          <Title3 />
          <p className="font-['Inter:Semi_Bold',sans-serif] font-[650] leading-[9.316px] min-w-full not-italic relative shrink-0 text-[#303030] text-[6.521px] w-[min-content]">$ 200USD</p>
        </div>
      </div>
    </div>
  );
}

function Title4() {
  return (
    <div className="box-border content-stretch flex items-center px-0 py-[0.932px] relative shrink-0 w-full" data-name="Title">
      <p className="font-['Inter:Medium',sans-serif] font-[450] leading-[9.316px] not-italic relative shrink-0 text-[#616161] text-[6.521px] text-nowrap whitespace-pre">Average Merge time</p>
      <div className="relative shrink-0 size-[9.316px]" data-name="Info">
        <div className="absolute left-1/2 size-[6.521px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Icon">
          <div className="absolute inset-0" style={{ "--fill-0": "rgba(74, 74, 74, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
              <g id="Icon">
                <path d={svgPaths.p2674100} fill="#4A4A4A" />
                <path d={svgPaths.p338ea100} fill="#4A4A4A" />
                <path clipRule="evenodd" d={svgPaths.p24936500} fill="#4A4A4A" fillRule="evenodd" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[5.589px] self-stretch shrink-0" data-name="Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-between p-[5.589px] relative size-full">
          <Title4 />
          <p className="font-['Inter:Semi_Bold',sans-serif] font-[650] leading-[9.316px] min-w-full not-italic relative shrink-0 text-[#303030] text-[6.521px] w-[min-content]">4 seconds</p>
        </div>
      </div>
    </div>
  );
}

function Title5() {
  return (
    <div className="box-border content-stretch flex items-center justify-between px-0 py-[0.932px] relative shrink-0 w-full" data-name="Title">
      <p className="font-['Inter:Medium',sans-serif] font-[450] leading-[9.316px] not-italic relative shrink-0 text-[#616161] text-[6.521px] text-nowrap whitespace-pre">Plan details</p>
      <div className="content-stretch flex gap-[0.932px] items-center justify-center relative rounded-[3.762px] shrink-0" data-name="Button">
        <p className="font-['Inter:Medium',sans-serif] font-[450] leading-[9.316px] not-italic relative shrink-0 text-[#005bd3] text-[6.06px] text-nowrap whitespace-pre">Upgrade</p>
      </div>
    </div>
  );
}

function Frame100() {
  return (
    <div className="content-stretch flex font-['Inter:Medium',sans-serif] font-[450] items-center justify-between leading-[7.452px] not-italic relative shrink-0 text-[#303030] text-[5.589px] text-nowrap w-full whitespace-pre">
      <p className="relative shrink-0">Active merges</p>
      <p className="relative shrink-0">4/50</p>
    </div>
  );
}

function Frame101() {
  return (
    <div className="content-stretch flex flex-col gap-[2.329px] items-start relative shrink-0 w-full">
      <Frame100 />
      <div className="bg-[#e3e3e3] box-border content-stretch flex flex-col h-[1.397px] items-start justify-center pl-0 pr-[62.414px] py-0 relative rounded-[1.881px] shrink-0 w-[70.798px]" data-name="Progress bar">
        <div className="basis-0 bg-[#303030] grow min-h-px min-w-px rounded-bl-[1.863px] rounded-tl-[1.863px] shrink-0 w-full" data-name="Progress" />
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[5.589px] shrink-0" data-name="Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[1.863px] items-start pl-[5.589px] pr-[7.452px] py-[5.589px] relative w-full">
          <Title5 />
          <Frame101 />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white content-stretch flex items-start relative rounded-[5.589px] shrink-0 w-[335.36px]">
      <div aria-hidden="true" className="absolute border-[#e3e3e3] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-[6.089px]" />
      <Card />
      <Card1 />
      <Card2 />
      <Card3 />
    </div>
  );
}

function Frame102() {
  return (
    <div className="content-stretch flex flex-col gap-[4.658px] items-start relative shrink-0 w-full">
      <Frame103 />
      <Frame1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="content-stretch flex gap-[1.863px] items-start relative shrink-0" data-name="Tabs">
        <div className="bg-[rgba(0,0,0,0.08)] box-border content-stretch flex h-[13.042px] items-center justify-center px-[5.589px] py-[2.795px] relative rounded-[3.762px] shrink-0" data-name="Tab 1">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-[550] justify-center leading-[0] not-italic relative shrink-0 text-[#303030] text-[5.59px] text-center text-nowrap">
            <p className="leading-[7.452px] whitespace-pre">Recent Order Merges</p>
          </div>
        </div>
      </div>
      <div className="bg-white box-border content-stretch flex gap-[0.932px] items-center justify-center px-[3.726px] py-[2.795px] relative rounded-[3.762px] shrink-0" data-name="Button">
        <p className="font-['Inter:Medium',sans-serif] font-[550] leading-[7.452px] not-italic relative shrink-0 text-[#303030] text-[5.59px] text-nowrap whitespace-pre">View All</p>
        <div className="absolute inset-0 pointer-events-none shadow-[0px_-0.466px_0px_0px_inset_#b5b5b5,-0.466px_0px_0px_0px_inset_#e3e3e3,0.466px_0px_0px_0px_inset_#e3e3e3,0px_0.466px_0px_0px_inset_#e3e3e3]" />
      </div>
    </div>
  );
}

function Cell1() {
  return (
    <div className="bg-white h-[17px] relative shrink-0 w-full" data-name="↪️ Cell 1">
      <div aria-hidden="true" className="absolute border-[#ebebeb] border-[0px_0px_0.466px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[3.726px] h-[17px] items-center pl-[12px] pr-[6px] py-[3.7px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-[450] leading-[9.316px] not-italic relative shrink-0 text-[#303030] text-[6.055px] text-nowrap whitespace-pre">#M1108</p>
        </div>
      </div>
    </div>
  );
}

function Cell2() {
  return (
    <div className="bg-white h-[17px] relative shrink-0 w-full" data-name="↪️ Cell 2">
      <div aria-hidden="true" className="absolute border-[#ebebeb] border-[0px_0px_0.466px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[3.726px] h-[17px] items-center pl-[12px] pr-[6px] py-[3.7px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-[450] leading-[9.316px] not-italic relative shrink-0 text-[#303030] text-[6.055px] text-nowrap whitespace-pre">#M1107</p>
        </div>
      </div>
    </div>
  );
}

function Cell3() {
  return (
    <div className="bg-white h-[17px] relative shrink-0 w-full" data-name="↪️ Cell 3">
      <div aria-hidden="true" className="absolute border-[#ebebeb] border-[0px_0px_0.466px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[3.726px] h-[17px] items-center pl-[12px] pr-[6px] py-[3.7px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-[450] leading-[9.316px] not-italic relative shrink-0 text-[#303030] text-[6.055px] text-nowrap whitespace-pre">#M1106</p>
        </div>
      </div>
    </div>
  );
}

function Cell4() {
  return (
    <div className="bg-white h-[17px] relative shrink-0 w-full" data-name="↪️ Cell 4">
      <div aria-hidden="true" className="absolute border-[#ebebeb] border-[0px_0px_0.466px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[3.726px] h-[17px] items-center pl-[12px] pr-[6px] py-[3.7px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-[450] leading-[9.316px] not-italic relative shrink-0 text-[#303030] text-[6.055px] text-nowrap whitespace-pre">#M1105</p>
        </div>
      </div>
    </div>
  );
}

function Cell5() {
  return (
    <div className="bg-white h-[17px] relative shrink-0 w-full" data-name="↪️ Cell 5">
      <div aria-hidden="true" className="absolute border-[#ebebeb] border-[0px_0px_0.466px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[3.726px] h-[17px] items-center pl-[12px] pr-[6px] py-[3.7px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-[450] leading-[9.316px] not-italic relative shrink-0 text-[#303030] text-[6.055px] text-nowrap whitespace-pre">#M1104</p>
        </div>
      </div>
    </div>
  );
}

function Cell6() {
  return (
    <div className="bg-white h-[17px] relative shrink-0 w-full" data-name="↪️ Cell 6">
      <div aria-hidden="true" className="absolute border-[#ebebeb] border-[0px_0px_0.466px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[3.726px] h-[17px] items-center pl-[12px] pr-[6px] py-[3.7px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-[450] leading-[9.316px] not-italic relative shrink-0 text-[#303030] text-[6.055px] text-nowrap whitespace-pre">#M1103</p>
        </div>
      </div>
    </div>
  );
}

function Column6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[51.701px]" data-name="Column 6">
      <div className="bg-[#f7f7f7] relative shrink-0 w-full" data-name="↪️ Heading">
        <div aria-hidden="true" className="absolute border-[#e3e3e3] border-[0px_0px_0.466px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex items-center pl-[5.589px] pr-[2.795px] py-[5.589px] relative w-full">
            <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[9.316px] relative shrink-0 text-[#303030] text-[6.52px] text-nowrap tracking-[0.1px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
              Order number
            </p>
          </div>
        </div>
      </div>
      <Cell1 />
      <Cell2 />
      <Cell3 />
      <Cell4 />
      <Cell5 />
      <Cell6 />
    </div>
  );
}

function Cell7() {
  return (
    <div className="bg-white h-[17px] relative shrink-0 w-full" data-name="↪️ Cell 1">
      <div aria-hidden="true" className="absolute border-[#ebebeb] border-[0px_0px_0.466px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[1.863px] h-[17px] items-center px-[2.795px] py-[4.1px] relative w-full">
          <div className="bg-[rgba(0,0,0,0.06)] box-border content-stretch flex h-[9.316px] items-center justify-center px-[3.726px] py-[0.932px] relative rounded-[3.762px] shrink-0" data-name="Badge">
            <p className="font-['Inter:Medium',sans-serif] font-[550] leading-[7.452px] not-italic relative shrink-0 text-[#616161] text-[5.59px] text-nowrap whitespace-pre">#1108</p>
          </div>
          <div className="bg-[rgba(0,0,0,0.06)] box-border content-stretch flex h-[9.316px] items-center justify-center px-[3.726px] py-[0.932px] relative rounded-[3.762px] shrink-0" data-name="Badge">
            <p className="font-['Inter:Medium',sans-serif] font-[550] leading-[7.452px] not-italic relative shrink-0 text-[#616161] text-[5.59px] text-nowrap whitespace-pre">#1107</p>
          </div>
          <div className="bg-[rgba(0,0,0,0.06)] box-border content-stretch flex h-[9.316px] items-center justify-center px-[3.726px] py-[0.932px] relative rounded-[3.762px] shrink-0" data-name="Badge">
            <p className="font-['Inter:Medium',sans-serif] font-[550] leading-[7.452px] not-italic relative shrink-0 text-[#616161] text-[5.59px] text-nowrap whitespace-pre">#1106</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cell8() {
  return (
    <div className="bg-white h-[17px] relative shrink-0 w-full" data-name="↪️ Cell 2">
      <div aria-hidden="true" className="absolute border-[#ebebeb] border-[0px_0px_0.466px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[1.863px] h-[17px] items-center px-[2.795px] py-[4.1px] relative w-full">
          <div className="bg-[rgba(0,0,0,0.06)] box-border content-stretch flex h-[9.316px] items-center justify-center px-[3.726px] py-[0.932px] relative rounded-[3.762px] shrink-0" data-name="Badge">
            <p className="font-['Inter:Medium',sans-serif] font-[550] leading-[7.452px] not-italic relative shrink-0 text-[#616161] text-[5.59px] text-nowrap whitespace-pre">#1105</p>
          </div>
          <div className="bg-[rgba(0,0,0,0.06)] box-border content-stretch flex h-[9.316px] items-center justify-center px-[3.726px] py-[0.932px] relative rounded-[3.762px] shrink-0" data-name="Badge">
            <p className="font-['Inter:Medium',sans-serif] font-[550] leading-[7.452px] not-italic relative shrink-0 text-[#616161] text-[5.59px] text-nowrap whitespace-pre">#1104</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cell9() {
  return (
    <div className="bg-white h-[17px] relative shrink-0 w-full" data-name="↪️ Cell 3">
      <div aria-hidden="true" className="absolute border-[#ebebeb] border-[0px_0px_0.466px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[1.863px] h-[17px] items-center px-[2.795px] py-[4.1px] relative w-full">
          <div className="bg-[rgba(0,0,0,0.06)] box-border content-stretch flex h-[9.316px] items-center justify-center px-[3.726px] py-[0.932px] relative rounded-[3.762px] shrink-0" data-name="Badge">
            <p className="font-['Inter:Medium',sans-serif] font-[550] leading-[7.452px] not-italic relative shrink-0 text-[#616161] text-[5.59px] text-nowrap whitespace-pre">#1103</p>
          </div>
          <div className="bg-[rgba(0,0,0,0.06)] box-border content-stretch flex h-[9.316px] items-center justify-center px-[3.726px] py-[0.932px] relative rounded-[3.762px] shrink-0" data-name="Badge">
            <p className="font-['Inter:Medium',sans-serif] font-[550] leading-[7.452px] not-italic relative shrink-0 text-[#616161] text-[5.59px] text-nowrap whitespace-pre">#1102</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cell10() {
  return (
    <div className="bg-white h-[17px] relative shrink-0 w-full" data-name="↪️ Cell 4">
      <div aria-hidden="true" className="absolute border-[#ebebeb] border-[0px_0px_0.466px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[1.863px] h-[17px] items-center px-[2.795px] py-[4.1px] relative w-full">
          <div className="bg-[rgba(0,0,0,0.06)] box-border content-stretch flex h-[9.316px] items-center justify-center px-[3.726px] py-[0.932px] relative rounded-[3.762px] shrink-0" data-name="Badge">
            <p className="font-['Inter:Medium',sans-serif] font-[550] leading-[7.452px] not-italic relative shrink-0 text-[#616161] text-[5.59px] text-nowrap whitespace-pre">#1008</p>
          </div>
          <div className="bg-[rgba(0,0,0,0.06)] box-border content-stretch flex h-[9.316px] items-center justify-center px-[3.726px] py-[0.932px] relative rounded-[3.762px] shrink-0" data-name="Badge">
            <p className="font-['Inter:Medium',sans-serif] font-[550] leading-[7.452px] not-italic relative shrink-0 text-[#616161] text-[5.59px] text-nowrap whitespace-pre">#1007</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cell11() {
  return (
    <div className="bg-white h-[17px] relative shrink-0 w-full" data-name="↪️ Cell 5">
      <div aria-hidden="true" className="absolute border-[#ebebeb] border-[0px_0px_0.466px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[1.863px] h-[17px] items-center px-[2.795px] py-[4.1px] relative w-full">
          <div className="bg-[rgba(0,0,0,0.06)] box-border content-stretch flex h-[9.316px] items-center justify-center px-[3.726px] py-[0.932px] relative rounded-[3.762px] shrink-0" data-name="Badge">
            <p className="font-['Inter:Medium',sans-serif] font-[550] leading-[7.452px] not-italic relative shrink-0 text-[#616161] text-[5.59px] text-nowrap whitespace-pre">#1003</p>
          </div>
          <div className="bg-[rgba(0,0,0,0.06)] box-border content-stretch flex h-[9.316px] items-center justify-center px-[3.726px] py-[0.932px] relative rounded-[3.762px] shrink-0" data-name="Badge">
            <p className="font-['Inter:Medium',sans-serif] font-[550] leading-[7.452px] not-italic relative shrink-0 text-[#616161] text-[5.59px] text-nowrap whitespace-pre">#1002</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cell12() {
  return (
    <div className="bg-white h-[17px] relative shrink-0 w-full" data-name="↪️ Cell 6">
      <div aria-hidden="true" className="absolute border-[#ebebeb] border-[0px_0px_0.466px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[1.863px] h-[17px] items-center px-[2.795px] py-[4.1px] relative w-full">
          <div className="bg-[rgba(0,0,0,0.06)] box-border content-stretch flex h-[9.316px] items-center justify-center px-[3.726px] py-[0.932px] relative rounded-[3.762px] shrink-0" data-name="Badge">
            <p className="font-['Inter:Medium',sans-serif] font-[550] leading-[7.452px] not-italic relative shrink-0 text-[#616161] text-[5.59px] text-nowrap whitespace-pre">#1001</p>
          </div>
          <div className="bg-[rgba(0,0,0,0.06)] box-border content-stretch flex h-[9.316px] items-center justify-center px-[3.726px] py-[0.932px] relative rounded-[3.762px] shrink-0" data-name="Badge">
            <p className="font-['Inter:Medium',sans-serif] font-[550] leading-[7.452px] not-italic relative shrink-0 text-[#616161] text-[5.59px] text-nowrap whitespace-pre">#0998</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Column2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Column 2">
      <div className="bg-[#f7f7f7] box-border content-stretch flex items-center px-[2.795px] py-[5.589px] relative shrink-0 w-[139.268px]" data-name="↪️ Heading">
        <div aria-hidden="true" className="absolute border-[#e3e3e3] border-[0px_0px_0.466px] border-solid inset-0 pointer-events-none" />
        <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[9.316px] relative shrink-0 text-[#303030] text-[6.52px] text-nowrap tracking-[0.1px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Merge Status
        </p>
      </div>
      <Cell7 />
      <Cell8 />
      <Cell9 />
      <Cell10 />
      <Cell11 />
      <Cell12 />
    </div>
  );
}

function Cell13() {
  return (
    <div className="bg-white h-[17px] relative shrink-0 w-full" data-name="↪️ Cell 1">
      <div aria-hidden="true" className="absolute border-[#ebebeb] border-[0px_0px_0.466px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[3.726px] h-[17px] items-center px-[2.795px] py-[4.1px] relative w-full">
          <div className="bg-[#cdfee1] box-border content-stretch flex h-[9.316px] items-center justify-center px-[3.726px] py-[0.932px] relative rounded-[3.762px] shrink-0" data-name="Badge">
            <p className="font-['Inter:Medium',sans-serif] font-[550] leading-[7.452px] not-italic relative shrink-0 text-[#0c5132] text-[5.59px] text-nowrap whitespace-pre">Merged</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cell14() {
  return (
    <div className="bg-white h-[17px] relative shrink-0 w-full" data-name="↪️ Cell 2">
      <div aria-hidden="true" className="absolute border-[#ebebeb] border-[0px_0px_0.466px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[3.726px] h-[17px] items-center px-[2.795px] py-[4.1px] relative w-full">
          <div className="bg-[#ffd6a4] box-border content-stretch flex h-[9.316px] items-center justify-center px-[3.726px] py-[0.932px] relative rounded-[3.762px] shrink-0" data-name="Badge">
            <p className="font-['Inter:Medium',sans-serif] font-[550] leading-[7.452px] not-italic relative shrink-0 text-[#5e4200] text-[5.59px] text-nowrap whitespace-pre">Failed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cell15() {
  return (
    <div className="bg-white h-[17px] relative shrink-0 w-full" data-name="↪️ Cell 3">
      <div aria-hidden="true" className="absolute border-[#ebebeb] border-[0px_0px_0.466px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[3.726px] h-[17px] items-center px-[2.795px] py-[4.1px] relative w-full">
          <div className="bg-[#ffd6a4] box-border content-stretch flex h-[9.316px] items-center justify-center px-[3.726px] py-[0.932px] relative rounded-[3.762px] shrink-0" data-name="Badge">
            <p className="font-['Inter:Medium',sans-serif] font-[550] leading-[7.452px] not-italic relative shrink-0 text-[#5e4200] text-[5.59px] text-nowrap whitespace-pre">Failed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cell16() {
  return (
    <div className="bg-white h-[17px] relative shrink-0 w-full" data-name="↪️ Cell 4">
      <div aria-hidden="true" className="absolute border-[#ebebeb] border-[0px_0px_0.466px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[3.726px] h-[17px] items-center px-[2.795px] py-[4.1px] relative w-full">
          <div className="bg-[#cdfee1] box-border content-stretch flex h-[9.316px] items-center justify-center px-[3.726px] py-[0.932px] relative rounded-[3.762px] shrink-0" data-name="Badge">
            <p className="font-['Inter:Medium',sans-serif] font-[550] leading-[7.452px] not-italic relative shrink-0 text-[#0c5132] text-[5.59px] text-nowrap whitespace-pre">Merged</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cell17() {
  return (
    <div className="bg-white h-[17px] relative shrink-0 w-full" data-name="↪️ Cell 5">
      <div aria-hidden="true" className="absolute border-[#ebebeb] border-[0px_0px_0.466px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[3.726px] h-[17px] items-center px-[2.795px] py-[4.1px] relative w-full">
          <div className="bg-[#cdfee1] box-border content-stretch flex h-[9.316px] items-center justify-center px-[3.726px] py-[0.932px] relative rounded-[3.762px] shrink-0" data-name="Badge">
            <p className="font-['Inter:Medium',sans-serif] font-[550] leading-[7.452px] not-italic relative shrink-0 text-[#0c5132] text-[5.59px] text-nowrap whitespace-pre">Merged</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cell18() {
  return (
    <div className="bg-white h-[17px] relative shrink-0 w-full" data-name="↪️ Cell 6">
      <div aria-hidden="true" className="absolute border-[#ebebeb] border-[0px_0px_0.466px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[3.726px] h-[17px] items-center px-[2.795px] py-[4.1px] relative w-full">
          <div className="bg-[#cdfee1] box-border content-stretch flex h-[9.316px] items-center justify-center px-[3.726px] py-[0.932px] relative rounded-[3.762px] shrink-0" data-name="Badge">
            <p className="font-['Inter:Medium',sans-serif] font-[550] leading-[7.452px] not-italic relative shrink-0 text-[#0c5132] text-[5.59px] text-nowrap whitespace-pre">Merged</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Column10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[47.044px]" data-name="Column 10">
      <div className="bg-[#f7f7f7] box-border content-stretch flex items-center px-[2.795px] py-[5.589px] relative shrink-0 w-[47.044px]" data-name="↪️ Heading">
        <div aria-hidden="true" className="absolute border-[#e3e3e3] border-[0px_0px_0.466px] border-solid inset-0 pointer-events-none" />
        <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[9.316px] relative shrink-0 text-[#303030] text-[6.52px] text-nowrap tracking-[0.1px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Merge Status
        </p>
      </div>
      <Cell13 />
      <Cell14 />
      <Cell15 />
      <Cell16 />
      <Cell17 />
      <Cell18 />
    </div>
  );
}

function Cell19() {
  return (
    <div className="bg-white h-[17px] relative shrink-0 w-full" data-name="↪️ Cell 1">
      <div aria-hidden="true" className="absolute border-[#ebebeb] border-[0px_0px_0.466px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[3.726px] h-[17px] items-center pl-[12px] pr-[6px] py-[8px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-[450] leading-[9.316px] not-italic relative shrink-0 text-[#303030] text-[6.055px] text-nowrap whitespace-pre">2</p>
        </div>
      </div>
    </div>
  );
}

function Cell20() {
  return (
    <div className="bg-white h-[17px] relative shrink-0 w-full" data-name="↪️ Cell 2">
      <div aria-hidden="true" className="absolute border-[#ebebeb] border-[0px_0px_0.466px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[3.726px] h-[17px] items-center pl-[12px] pr-[6px] py-[8px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-[450] leading-[9.316px] not-italic relative shrink-0 text-[#303030] text-[6.055px] text-nowrap whitespace-pre">2</p>
        </div>
      </div>
    </div>
  );
}

function Cell21() {
  return (
    <div className="bg-white h-[17px] relative shrink-0 w-full" data-name="↪️ Cell 3">
      <div aria-hidden="true" className="absolute border-[#ebebeb] border-[0px_0px_0.466px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[3.726px] h-[17px] items-center pl-[12px] pr-[6px] py-[8px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-[450] leading-[9.316px] not-italic relative shrink-0 text-[#303030] text-[6.055px] text-nowrap whitespace-pre">2</p>
        </div>
      </div>
    </div>
  );
}

function Cell22() {
  return (
    <div className="bg-white h-[17px] relative shrink-0 w-full" data-name="↪️ Cell 4">
      <div aria-hidden="true" className="absolute border-[#ebebeb] border-[0px_0px_0.466px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[3.726px] h-[17px] items-center pl-[12px] pr-[6px] py-[8px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-[450] leading-[9.316px] not-italic relative shrink-0 text-[#303030] text-[6.055px] text-nowrap whitespace-pre">3</p>
        </div>
      </div>
    </div>
  );
}

function Cell23() {
  return (
    <div className="bg-white h-[17px] relative shrink-0 w-full" data-name="↪️ Cell 5">
      <div aria-hidden="true" className="absolute border-[#ebebeb] border-[0px_0px_0.466px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[3.726px] h-[17px] items-center pl-[12px] pr-[6px] py-[8px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-[450] leading-[9.316px] not-italic relative shrink-0 text-[#303030] text-[6.055px] text-nowrap whitespace-pre">2</p>
        </div>
      </div>
    </div>
  );
}

function Cell24() {
  return (
    <div className="bg-white h-[17px] relative shrink-0 w-full" data-name="↪️ Cell 6">
      <div aria-hidden="true" className="absolute border-[#ebebeb] border-[0px_0px_0.466px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[3.726px] h-[17px] items-center pl-[12px] pr-[6px] py-[8px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-[450] leading-[9.316px] not-italic relative shrink-0 text-[#303030] text-[6.055px] text-nowrap whitespace-pre">2</p>
        </div>
      </div>
    </div>
  );
}

function Column11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[30.741px]" data-name="Column 11">
      <div className="bg-[#f7f7f7] relative shrink-0 w-full" data-name="↪️ Heading">
        <div aria-hidden="true" className="absolute border-[#e3e3e3] border-[0px_0px_0.466px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex items-center pl-[5.589px] pr-[2.795px] py-[5.589px] relative w-full">
            <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[9.316px] relative shrink-0 text-[#303030] text-[6.52px] text-nowrap tracking-[0.1px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
              Orders
            </p>
          </div>
        </div>
      </div>
      <Cell19 />
      <Cell20 />
      <Cell21 />
      <Cell22 />
      <Cell23 />
      <Cell24 />
    </div>
  );
}

function Cell25() {
  return (
    <div className="bg-white h-[17px] relative shrink-0 w-full" data-name="↪️ Cell 1">
      <div aria-hidden="true" className="absolute border-[#ebebeb] border-[0px_0px_0.466px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[3.726px] h-[17px] items-center pl-[12px] pr-[6px] py-[8px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-[450] leading-[9.316px] not-italic relative shrink-0 text-[#303030] text-[6.055px] text-nowrap whitespace-pre">$345.00</p>
        </div>
      </div>
    </div>
  );
}

function Cell26() {
  return (
    <div className="bg-white h-[17px] relative shrink-0 w-full" data-name="↪️ Cell 2">
      <div aria-hidden="true" className="absolute border-[#ebebeb] border-[0px_0px_0.466px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[3.726px] h-[17px] items-center pl-[12px] pr-[6px] py-[8px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-[450] leading-[9.316px] not-italic relative shrink-0 text-[#303030] text-[6.055px] text-nowrap whitespace-pre">$345.00</p>
        </div>
      </div>
    </div>
  );
}

function Cell27() {
  return (
    <div className="bg-white h-[17px] relative shrink-0 w-full" data-name="↪️ Cell 3">
      <div aria-hidden="true" className="absolute border-[#ebebeb] border-[0px_0px_0.466px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[3.726px] h-[17px] items-center pl-[12px] pr-[6px] py-[8px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-[450] leading-[9.316px] not-italic relative shrink-0 text-[#303030] text-[6.055px] text-nowrap whitespace-pre">$345.00</p>
        </div>
      </div>
    </div>
  );
}

function Cell28() {
  return (
    <div className="bg-white h-[17px] relative shrink-0 w-full" data-name="↪️ Cell 4">
      <div aria-hidden="true" className="absolute border-[#ebebeb] border-[0px_0px_0.466px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[3.726px] h-[17px] items-center pl-[12px] pr-[6px] py-[8px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-[450] leading-[9.316px] not-italic relative shrink-0 text-[#303030] text-[6.055px] text-nowrap whitespace-pre">$345.00</p>
        </div>
      </div>
    </div>
  );
}

function Cell29() {
  return (
    <div className="bg-white h-[17px] relative shrink-0 w-full" data-name="↪️ Cell 5">
      <div aria-hidden="true" className="absolute border-[#ebebeb] border-[0px_0px_0.466px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[3.726px] h-[17px] items-center pl-[12px] pr-[6px] py-[8px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-[450] leading-[9.316px] not-italic relative shrink-0 text-[#303030] text-[6.055px] text-nowrap whitespace-pre">$345.00</p>
        </div>
      </div>
    </div>
  );
}

function Cell30() {
  return (
    <div className="bg-white h-[17px] relative shrink-0 w-full" data-name="↪️ Cell 6">
      <div aria-hidden="true" className="absolute border-[#ebebeb] border-[0px_0px_0.466px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[3.726px] h-[17px] items-center pl-[12px] pr-[6px] py-[8px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-[450] leading-[9.316px] not-italic relative shrink-0 text-[#303030] text-[6.055px] text-nowrap whitespace-pre">$345.00</p>
        </div>
      </div>
    </div>
  );
}

function Column12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[51.701px]" data-name="Column 12">
      <div className="bg-[#f7f7f7] relative shrink-0 w-full" data-name="↪️ Heading">
        <div aria-hidden="true" className="absolute border-[#e3e3e3] border-[0px_0px_0.466px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex items-center pl-[5.589px] pr-[2.795px] py-[5.589px] relative w-full">
            <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[9.316px] relative shrink-0 text-[#303030] text-[6.52px] text-nowrap tracking-[0.1px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
              Amount
            </p>
          </div>
        </div>
      </div>
      <Cell25 />
      <Cell26 />
      <Cell27 />
      <Cell28 />
      <Cell29 />
      <Cell30 />
    </div>
  );
}

function Table() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Table">
      <Column6 />
      <Column2 />
      <Column10 />
      <Column11 />
      <Column12 />
    </div>
  );
}

function DataTable() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[5.589px] shrink-0 w-full" data-name="Data table">
      <Table />
      <div className="absolute inset-0 pointer-events-none shadow-[0.466px_0px_0px_0px_inset_rgba(0,0,0,0.13),-0.466px_0px_0px_0px_inset_rgba(0,0,0,0.13),0px_-0.466px_0px_0px_inset_rgba(0,0,0,0.17),0px_0.466px_0px_0px_inset_rgba(204,204,204,0.5)]" />
    </div>
  );
}

function Card4() {
  return (
    <div className="bg-white relative rounded-[5.589px] shadow-[0px_0.466px_0px_0px_rgba(26,26,26,0.07)] shrink-0 w-full" data-name="Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[7.452px] items-start p-[7.452px] relative w-full">
          <Frame4 />
          <DataTable />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0.466px_0px_0px_0px_inset_rgba(0,0,0,0.13),-0.466px_0px_0px_0px_inset_rgba(0,0,0,0.13),0px_-0.466px_0px_0px_inset_rgba(0,0,0,0.17),0px_0.466px_0px_0px_inset_rgba(204,204,204,0.5)]" />
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex gap-[4.658px] items-center relative shrink-0 w-full">
      <div className="h-[0.466px] relative shrink-0 w-[145.323px]" data-name="Divider">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(235, 235, 235, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 146 1">
            <path clipRule="evenodd" d={svgPaths.p111c9a80} fill="var(--fill-0, #EBEBEB)" fillRule="evenodd" id="Divider" />
          </svg>
        </div>
      </div>
      <p className="font-['Inter:Medium',sans-serif] font-[550] leading-[7.452px] not-italic relative shrink-0 text-[#616161] text-[5.589px] text-nowrap whitespace-pre">All caught up</p>
      <div className="h-[0.466px] relative shrink-0 w-[145.323px]" data-name="Divider">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(235, 235, 235, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 146 1">
            <path clipRule="evenodd" d={svgPaths.p111c9a80} fill="var(--fill-0, #EBEBEB)" fillRule="evenodd" id="Divider" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Title6() {
  return (
    <div className="box-border content-stretch flex gap-[3.726px] items-center px-0 py-[0.932px] relative shrink-0 w-full" data-name="Title">
      <div className="overflow-clip relative shrink-0 size-[9.316px]" data-name="Chat">
        <div className="absolute h-[5.939px] left-1/2 top-[calc(50%+0.175px)] translate-x-[-50%] translate-y-[-50%] w-[6.521px]" data-name="Icon">
          <div className="absolute inset-0" style={{ "--fill-0": "rgba(74, 74, 74, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 6">
              <g id="Icon">
                <path d={svgPaths.p3a89880} fill="var(--fill-0, #4A4A4A)" />
                <path d={svgPaths.p6f5b800} fill="var(--fill-0, #4A4A4A)" />
                <path clipRule="evenodd" d={svgPaths.p1776b100} fill="var(--fill-0, #4A4A4A)" fillRule="evenodd" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[9.316px] relative shrink-0 text-[#303030] text-[6.521px] text-nowrap tracking-[0.0466px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Contact support (24/7)
      </p>
    </div>
  );
}

function TitleWrapper2() {
  return (
    <div className="content-stretch flex flex-col gap-[0.932px] items-center relative shrink-0 w-full" data-name="Title wrapper">
      <Title6 />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[9.316px] relative shrink-0 text-[#616161] text-[6.521px] tracking-[0.1164px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Need help? Our support team is here for you! Reach out via live chat anytime.
      </p>
    </div>
  );
}

function IconWrapperForAutoLayout7() {
  return (
    <div className="relative shrink-0 size-[7.452px]" data-name="icon wrapper for auto layout">
      <div className="absolute overflow-clip right-0 size-[20px] top-1/2 translate-y-[-50%]" data-name="Mobile=false">
        <div className="absolute h-[5.939px] left-1/2 top-[calc(50%+0.175px)] translate-x-[-50%] translate-y-[-50%] w-[6.521px]" data-name="Icon">
          <div className="absolute inset-0" style={{ "--fill-0": "rgba(74, 74, 74, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 6">
              <g id="Icon">
                <path d={svgPaths.p3a89880} fill="var(--fill-0, #4A4A4A)" />
                <path d={svgPaths.p6f5b800} fill="var(--fill-0, #4A4A4A)" />
                <path clipRule="evenodd" d={svgPaths.p1776b100} fill="var(--fill-0, #4A4A4A)" fillRule="evenodd" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col gap-[5.589px] items-start relative shrink-0 w-full" data-name="Header">
      <TitleWrapper2 />
      <div className="bg-white box-border content-stretch flex gap-[0.932px] items-center p-[3.726px] relative rounded-[3.762px] shrink-0" data-name="Button">
        <IconWrapperForAutoLayout7 />
        <p className="font-['Inter:Medium',sans-serif] font-[550] leading-[7.452px] not-italic relative shrink-0 text-[#303030] text-[5.59px] text-nowrap whitespace-pre">Talk to us</p>
        <div className="absolute inset-0 pointer-events-none shadow-[0px_-0.466px_0px_0px_inset_#b5b5b5,-0.466px_0px_0px_0px_inset_#e3e3e3,0.466px_0px_0px_0px_inset_#e3e3e3,0px_0.466px_0px_0px_inset_#e3e3e3]" />
      </div>
    </div>
  );
}

function Card5() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[5.589px] shadow-[0px_0.466px_0px_0px_rgba(26,26,26,0.07)] shrink-0" data-name="Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[7.452px] items-start p-[5.589px] relative w-full">
          <Header />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0.466px_0px_0px_0px_inset_rgba(0,0,0,0.13),-0.466px_0px_0px_0px_inset_rgba(0,0,0,0.13),0px_-0.466px_0px_0px_inset_rgba(0,0,0,0.17),0px_0.466px_0px_0px_inset_rgba(204,204,204,0.5)]" />
    </div>
  );
}

function Title7() {
  return (
    <div className="box-border content-stretch flex gap-[3.726px] items-center px-0 py-[0.932px] relative shrink-0 w-full" data-name="Title">
      <div className="relative shrink-0 size-[9.316px]" data-name="Book">
        <div className="absolute h-[6.521px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[5.589px]" data-name="Icon">
          <div className="absolute inset-0" style={{ "--fill-0": "rgba(74, 74, 74, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 7">
              <g id="Icon">
                <path d={svgPaths.p3e60d800} fill="var(--fill-0, #4A4A4A)" />
                <path d={svgPaths.p363c2300} fill="var(--fill-0, #4A4A4A)" />
                <path clipRule="evenodd" d={svgPaths.p35c41a00} fill="var(--fill-0, #4A4A4A)" fillRule="evenodd" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[9.316px] relative shrink-0 text-[#303030] text-[6.521px] text-nowrap tracking-[0.0466px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Read user guideline
      </p>
    </div>
  );
}

function TitleWrapper3() {
  return (
    <div className="content-stretch flex flex-col gap-[0.932px] items-center relative shrink-0 w-full" data-name="Title wrapper">
      <Title7 />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[9.316px] relative shrink-0 text-[#616161] text-[6.521px] tracking-[0.1164px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Easy step-by-step guides to help you get everything set up with confidence.
      </p>
    </div>
  );
}

function IconWrapperForAutoLayout8() {
  return (
    <div className="relative shrink-0 size-[7.452px]" data-name="icon wrapper for auto layout">
      <div className="absolute overflow-clip right-0 size-[20px] top-1/2 translate-y-[-50%]" data-name="Mobile=false">
        <div className="absolute h-[6.521px] left-1/2 top-[calc(50%+0.233px)] translate-x-[-50%] translate-y-[-50%] w-[6.055px]" data-name="Icon">
          <div className="absolute inset-0" style={{ "--fill-0": "rgba(74, 74, 74, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
              <g id="Icon">
                <path d={svgPaths.p1bfc4cc0} fill="#4A4A4A" />
                <path d={svgPaths.p21ded480} fill="#4A4A4A" />
                <path d={svgPaths.pf607d00} fill="#4A4A4A" />
                <path d={svgPaths.pd19ac00} fill="#4A4A4A" />
                <path d={svgPaths.p1cebdc40} fill="#4A4A4A" />
                <path clipRule="evenodd" d={svgPaths.p247d0a00} fill="#4A4A4A" fillRule="evenodd" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex flex-col gap-[5.589px] items-start relative shrink-0 w-full" data-name="Header">
      <TitleWrapper3 />
      <div className="bg-white box-border content-stretch flex gap-[0.932px] items-center p-[3.726px] relative rounded-[3.762px] shrink-0" data-name="Button">
        <IconWrapperForAutoLayout8 />
        <p className="font-['Inter:Medium',sans-serif] font-[550] leading-[7.452px] not-italic relative shrink-0 text-[#303030] text-[5.59px] text-nowrap whitespace-pre">Read User guidelines</p>
        <div className="absolute inset-0 pointer-events-none shadow-[0px_-0.466px_0px_0px_inset_#b5b5b5,-0.466px_0px_0px_0px_inset_#e3e3e3,0.466px_0px_0px_0px_inset_#e3e3e3,0px_0.466px_0px_0px_inset_#e3e3e3]" />
      </div>
    </div>
  );
}

function Card6() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[5.589px] shadow-[0px_0.466px_0px_0px_rgba(26,26,26,0.07)] shrink-0" data-name="Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[7.452px] items-start p-[5.589px] relative w-full">
          <Header1 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0.466px_0px_0px_0px_inset_rgba(0,0,0,0.13),-0.466px_0px_0px_0px_inset_rgba(0,0,0,0.13),0px_-0.466px_0px_0px_inset_rgba(0,0,0,0.17),0px_0.466px_0px_0px_inset_rgba(204,204,204,0.5)]" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[4.658px] items-start relative shrink-0 w-full">
      <Card5 />
      <Card6 />
    </div>
  );
}

function Card7() {
  return (
    <div className="bg-white relative rounded-[5.589px] shrink-0 w-full" data-name="Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[5.589px] items-start p-[7.452px] relative w-full">
          <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[11.179px] relative shrink-0 text-[7.452px] text-black text-nowrap tracking-[0.0699px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Need Help?
          </p>
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function ButtonGroup1() {
  return (
    <div className="content-stretch flex gap-[3.726px] items-center relative shrink-0" data-name="Button group">
      <div className="bg-white box-border content-stretch flex gap-[0.932px] items-center justify-center px-[5.589px] py-[2.795px] relative rounded-[3.762px] shrink-0" data-name="Primary action">
        <p className="font-['Inter:Medium',sans-serif] font-[550] leading-[7.452px] not-italic relative shrink-0 text-[#303030] text-[5.59px] text-nowrap whitespace-pre">Leave a review</p>
        <div className="absolute inset-0 pointer-events-none shadow-[0px_-0.466px_0px_0px_inset_#b5b5b5,-0.466px_0px_0px_0px_inset_#e3e3e3,0.466px_0px_0px_0px_inset_#e3e3e3,0px_0.466px_0px_0px_inset_#e3e3e3]" />
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[3.726px] grow items-start min-h-px min-w-px relative self-stretch shrink-0" data-name="Content">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-[650] leading-[9.316px] min-w-full not-italic relative shrink-0 text-[#303030] text-[6.055px] w-[min-content]">Enjoying our app? Leave a review</p>
      <p className="font-['Inter:Medium',sans-serif] font-[450] leading-[9.316px] min-w-full not-italic relative shrink-0 text-[#303030] text-[6.055px] w-[min-content]">We celebrate every review! It helps us grow and continue providing great customer support. Thank you in advance.</p>
      <ButtonGroup1 />
    </div>
  );
}

function CalloutCard() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[3.726px] items-start p-[7.452px] relative rounded-[5.589px] shadow-[0px_0.466px_0px_0px_rgba(26,26,26,0.07)] shrink-0 w-[335.36px]" data-name="Callout card">
      <div className="h-[48.441px] relative rounded-[4.658px] shrink-0 w-[83.84px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4.658px]">
          <img alt="" className="absolute h-[138.46%] left-0 max-w-none top-[-34.93%] w-full" src={imgRectangle38} />
        </div>
      </div>
      <Content />
      <div className="absolute inset-0 pointer-events-none shadow-[0.466px_0px_0px_0px_inset_rgba(0,0,0,0.13),-0.466px_0px_0px_0px_inset_rgba(0,0,0,0.13),0px_-0.466px_0px_0px_inset_rgba(0,0,0,0.17),0px_0.466px_0px_0px_inset_rgba(204,204,204,0.5)]" />
    </div>
  );
}

function Title8() {
  return (
    <div className="box-border content-stretch flex gap-[3.726px] items-center px-0 py-[0.932px] relative shrink-0 w-full" data-name="Title">
      <div className="relative shrink-0 size-[9.316px]" data-name="ThumbsUp">
        <div className="absolute h-[6.322px] left-[calc(50%-0.01px)] top-[calc(50%-0.332px)] translate-x-[-50%] translate-y-[-50%] w-[6.5px]" data-name="Icon">
          <div className="absolute inset-0" style={{ "--fill-0": "rgba(74, 74, 74, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
              <path clipRule="evenodd" d={svgPaths.p4760d00} fill="var(--fill-0, #4A4A4A)" fillRule="evenodd" id="Icon" />
            </svg>
          </div>
        </div>
      </div>
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[9.316px] relative shrink-0 text-[#303030] text-[6.521px] text-nowrap tracking-[0.0466px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Feedback and suggestions
      </p>
    </div>
  );
}

function TitleWrapper4() {
  return (
    <div className="content-stretch flex flex-col gap-[0.932px] items-center relative shrink-0 w-full" data-name="Title wrapper">
      <Title8 />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[9.316px] relative shrink-0 text-[#616161] text-[6.521px] tracking-[0.1164px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Vote for upcoming features or suggest your own.
      </p>
    </div>
  );
}

function Header2() {
  return (
    <div className="content-stretch flex flex-col gap-[5.589px] items-start relative shrink-0 w-full" data-name="Header">
      <TitleWrapper4 />
      <div className="bg-white box-border content-stretch flex gap-[0.932px] items-center p-[3.726px] relative rounded-[3.762px] shrink-0" data-name="Button">
        <p className="font-['Inter:Medium',sans-serif] font-[550] leading-[7.452px] not-italic relative shrink-0 text-[#303030] text-[5.59px] text-nowrap whitespace-pre">Open full roadmap ↗</p>
        <div className="absolute inset-0 pointer-events-none shadow-[0px_-0.466px_0px_0px_inset_#b5b5b5,-0.466px_0px_0px_0px_inset_#e3e3e3,0.466px_0px_0px_0px_inset_#e3e3e3,0px_0.466px_0px_0px_inset_#e3e3e3]" />
      </div>
    </div>
  );
}

function Card8() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[7.452px] items-start overflow-clip p-[5.589px] relative rounded-[5.589px] shadow-[0px_0.466px_0px_0px_rgba(26,26,26,0.07)] shrink-0 w-[335.36px]" data-name="Card">
      <Header2 />
      <div className="absolute inset-0 pointer-events-none shadow-[0.466px_0px_0px_0px_inset_rgba(0,0,0,0.13),-0.466px_0px_0px_0px_inset_rgba(0,0,0,0.13),0px_-0.466px_0px_0px_inset_rgba(0,0,0,0.17),0px_0.466px_0px_0px_inset_rgba(204,204,204,0.5)]" />
    </div>
  );
}

function Frame19() {
  return (
    <div className="h-[484.409px] relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[7.452px] h-[484.409px] items-center p-[12px] relative w-full">
          <Frame47 />
          <Frame102 />
          <Card4 />
          <Frame55 />
          <Card7 />
          <CalloutCard />
          <Card8 />
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-[550] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-black text-center text-nowrap">
            <p className="leading-[7.452px] text-[5.589px] whitespace-pre">
              Need help? Please view<span className="text-[#0082f7]">&nbsp;</span>
              <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Inter:Medium',sans-serif] font-[550] not-italic text-[#0082f7] underline">our documentation guide.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[1.863px] h-[643px] items-center left-[88.38px] rounded-[12.633px] top-[66px] w-[380.242px]">
      <div aria-hidden="true" className="absolute border-[#cc6251] border-[5px] border-solid inset-[-5px] pointer-events-none rounded-[17.633px]" />
      <Frame19 />
    </div>
  );
}

function BlockSpywareExtensions3() {
  return (
    <div className="bg-[#fcf4f3] h-[383px] overflow-clip relative rounded-[20px] shrink-0 w-full" data-name="block spyware extensions">
      <Frame20 />
    </div>
  );
}

function Frame240() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start leading-[0] not-italic p-[10px] relative size-full text-[24px] tracking-[0.4699px]">
          <div className="flex flex-col font-['SF_Pro_Display:Bold',sans-serif] justify-center relative shrink-0 text-black text-center text-nowrap">
            <p className="leading-[1.215] whitespace-pre">Analytics That Show Real Impact</p>
          </div>
          <div className="flex flex-col font-['SF_Pro_Display:Medium',sans-serif] justify-center relative shrink-0 text-[#616161] w-[521px]">
            <p className="leading-[1.215] whitespace-pre-wrap">{`Track how much money and time you save through merged orders.  See shipping costs saved per month and fulfillment efficiency gains.`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Feature4() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[540px] items-start relative shrink-0 w-[558px]" data-name="Feature 4">
      <BlockSpywareExtensions3 />
      <Frame240 />
    </div>
  );
}

function FeaturesList() {
  return (
    <div className="content-start flex flex-wrap gap-[60px] items-start justify-center relative shrink-0 w-[1200px]" data-name="Features list">
      <Feature1 />
      <Feature2 />
      <Feature3 />
      <Feature4 />
    </div>
  );
}

function FeaturesContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[70px] items-center relative shrink-0" data-name="Features container">
      <div className="flex flex-col font-['SF_Pro_Display:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#303030] text-[36px] text-nowrap tracking-[0.4699px]">
        <p className="leading-[1.215] whitespace-pre">Features</p>
      </div>
      <FeaturesList />
    </div>
  );
}

function FeaturesSection() {
  return (
    <div className="relative shrink-0 w-full" data-name="Features section">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[70px] items-center px-[100px] py-[80px] relative w-full">
          <FeaturesContainer />
        </div>
      </div>
    </div>
  );
}

function Frame252() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0">
      <div className="flex flex-col font-['SF_Pro_Display:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#fcf4f3] text-[36px] text-nowrap tracking-[0.4699px]">
        <p className="leading-[1.215] whitespace-pre">Missing a workflow?</p>
      </div>
    </div>
  );
}

function ContentContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-[1163px]" data-name="content container">
      <Frame252 />
      <div className="flex flex-col font-['Sacramento:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#fcf4f3] text-[24px] text-center tracking-[0.4699px] w-[897px]">
        <p className="leading-[1.215]">
          <span className="font-['SF_Pro_Display:Regular',sans-serif]">
            We build merchant-driven features with priority support.
            <br aria-hidden="true" />
          </span>
          <span className="font-['SF_Pro_Display:Medium',sans-serif]">Most improvements go live within 7 days.</span>
        </p>
      </div>
    </div>
  );
}

function Frame235() {
  return (
    <div className="bg-[#fcf4f3] box-border content-stretch flex gap-[10px] items-center justify-center px-[20px] py-[14px] relative rounded-[12px] shrink-0">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#cc6251] text-[21px] text-nowrap whitespace-pre">Get Started</p>
    </div>
  );
}

function Cta1() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-center relative shrink-0" data-name="CTA">
      <Frame235 />
      <div className="flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#fcf4f3] text-[24px] text-center tracking-[0.4699px] w-[897px]">
        <p className="leading-[1.215]">Instant Setup. No Action Needed. Free Trial</p>
      </div>
    </div>
  );
}

function GsContainer() {
  return (
    <div className="bg-[#cc6251] box-border content-stretch flex flex-col gap-[48px] items-center p-[50px] relative rounded-[20px] shrink-0 w-[1200px]" data-name="GS-container">
      <ContentContainer1 />
      <Cta1 />
    </div>
  );
}

function GetStartedCsection() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Get started csection">
      <GsContainer />
    </div>
  );
}

function Title9() {
  return (
    <div className="content-stretch flex flex-col gap-[13px] items-start relative shrink-0" data-name="Title">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#303030] text-[36px] text-center text-nowrap whitespace-pre">You’re in great company!</p>
    </div>
  );
}


function Frame265() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 text-[#1e1e1e] text-center">
      <p className="font-['SF_Pro_Display:Bold',sans-serif] relative shrink-0 text-[28px] w-full">Free</p>
      <p className="font-['SF_Pro_Display:Medium',sans-serif] relative shrink-0 text-[20px] w-full">Simple pricing. Full access.</p>
    </div>
  );
}

function Frame267() {
  return (
    <div className="bg-[#fcf4f3] box-border content-stretch flex flex-col gap-[16px] items-center p-[30px] relative shrink-0 w-[409px]">
      <div aria-hidden="true" className="absolute border-[#e3e3e3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame265 />
      <p className="font-['SF_Pro_Display:Medium',sans-serif] leading-[33px] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] text-nowrap whitespace-pre">
        ✅ Auto + Manual merging
        <br aria-hidden="true" />✅ Merge to original or new order
        <br aria-hidden="true" />✅ Remove/archive merged orders
        <br aria-hidden="true" />✅ Detailed analytics dashboard
      </p>
      <p className="font-['SF_Pro_Display:Medium',sans-serif] leading-[33px] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] text-nowrap whitespace-pre">No contracts. Cancel anytime.</p>
    </div>
  );
}

function Frame418() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['SF_Pro_Display:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e1e1e] text-[28px] text-center w-full">Stop losing profits to unnecessary shipping</p>
    </div>
  );
}

function Frame236() {
  return (
    <div className="bg-[#cc6251] box-border content-stretch flex gap-[10px] items-center justify-center px-[20px] py-[14px] relative rounded-[12px] shrink-0">
      <p className="font-['SF_Pro_Display:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[21px] text-nowrap text-white whitespace-pre">Get Started Free</p>
    </div>
  );
}

function Cta2() {
  return (
    <div className="bg-[#fcf4f3] box-border content-stretch flex flex-col gap-[17px] items-center p-[30px] relative shrink-0 w-[409px]" data-name="CTA">
      <Frame418 />
      <Frame236 />
      <p className="font-['SF_Pro_Display:Medium',sans-serif] leading-[33px] min-w-full not-italic relative shrink-0 text-[#1e1e1e] text-[16px] text-center w-[min-content]">Instant activation. No coding needed.</p>
    </div>
  );
}

function ContentCard() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[20px] shrink-0" data-name="Content card">
      <Frame267 />
      <Cta2 />
    </div>
  );
}

function PricingWrapper() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0" data-name="Pricing wrapper">
      <p className="font-['SF_Pro_Display:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6251] text-[28px] text-center text-nowrap whitespace-pre">{`Free for Early Users  🎉`}</p>
      <ContentCard />
    </div>
  );
}

function PricingContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-center relative shrink-0" data-name="Pricing container">
      <p className="font-['SF_Pro_Display:Semibold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#303030] text-[36px] text-center text-nowrap whitespace-pre">Pricing</p>
      <PricingWrapper />
    </div>
  );
}

function PricingSection() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Pricing section">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[30px] items-center justify-center pb-[90px] pt-0 px-[10px] relative w-full">
          <PricingContainer />
        </div>
      </div>
    </div>
  );
}

export default function Website() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-center pb-[30px] pt-0 px-0 relative size-full" data-name="website">
      <TopNav />
      <HeroSection />
      <QuickSetupSection />
      <FeaturesSection />
      <GetStartedCsection />
      <PricingSection />
      <div className="h-[161px] pointer-events-none relative shrink-0 w-[1383px]" data-name="Footer">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[841.06%] left-[-29.57%] max-w-none top-[-719.61%] w-[159.15%]" src={imgFooter} />
        </div>
        <div aria-hidden="true" className="absolute border-[#e3e3e3] border-[1px_0px_0px] border-solid inset-0" />
      </div>
    </div>
  );
}