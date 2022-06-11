// ADDING ALL THE TAILWIND CSS CLASSES HERE

// ------------------------------------------------------------------------------------------
// Page Base
export const PageBase = "mx-auto text-xl container";
export const FlexGap4 = "flex gap-4";
// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// Banner
export const BannerBase = `w-full h-52 rounded-2xl shadow relative flex gap-24 justify-between relative text-white`;
export const BannerContentBase = "my-auto px-12 w-full sm:w-full lg:w-3/4";
export const BannerTitle = "text-5xl font-medium";
export const BannerDesc = "text-base mt-2 leading-tight w-full sm:w-full ";
export const BannerImgBase = "absolute right-2 w-80";
export const BannerImg = "-mt-16 -ml-5 hidden sm:block";
// ------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------
// Toggle Button
export const ToggleBase =
  "mt-16 flex flex-row text-center text-white text-sm justify-center mb-5";
export const Toggler = "w-40 bg-red-200 rounded-2xl flex";
export const TogglerActive =
  "hover:bg-red-600 bg-red px-2 py-2 w-20 rounded-2xl cursor-pointer";
export const TogglerInActive =
  "text-red px-2 py-2 w-20 rounded-2xl cursor-pointer";
// ------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------
// Item Card
export const ItemCardBase =
  " shadow-lg rounded-2xl flex flex-col justify-center p-6 mb-auto";
export const ItemCardHead =
  "font-face-poppins text-lg uppercase font-semibold mb-4 text-center";
export const ItemCardProfit =
  "bg-yellow-500 text-center ml-auto w-12 h-9 text-sm py-2 font-medium uppercase rounded-2xl mb-2";
export const ItemCardRiskBase =
  "ring-2 ring-yellow-500 rounded-2xl flex justify-around p-1 px-2";
export const ItemCardRiskContent = "text-sm text-yellow-500 font-semibold";
export const ItemCardProfitBase = "flex justify-between text-sm mb-2";
export const ItemCardProfitTitle = "text-yellow-500";
export const ItemCardProfitContent = "uppercase font-bold";
export const ItemCardBSCLink = "text-sm text-center text-red cursor-pointer";
export const ItemCardStakeTitle = "text-3xl font-medium";
export const ItemCardStakeImage = "w-20 h-20";
export const ItemCardStakePrice = "text-4xl font-medium";
export const ItemCardStakeEarn = "text-sm text-red";
export const ItemCardStakeDetailsBase =
  "flex px-8 py-4 justify-between relative";
export const ItemCardStakeDetail =
  "text-sm stake-color-text font-medium cursor-pointer my-auto";
export const ItemCardStakeDetailsCard =
  "flex px-8 py-4 justify-between text-sm font-medium gap-3 flex-wrap";
// ------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------
// Button
export const ButtonBase =
  "flex items-center justify-center flex-shrink-0 font-normal w-auto capitalize text-lg rounded outline-none transition duration-250 ease-in-out focus:outline-none bg-red hover:bg-red-700 font-face-poppins";
export const ButtonVariant = {
  // primary: 'text-white bg-primary hover:bg-primary-hover',
  primary: "text-white buttonMain",
  secondary: "text-white bg-gray-900 hover:bg-gray-900",
  elevation: "text-white bg-gray-900 hover:bg-gray-900 shadow-upside",
  unlock: "text-red hover:bg-red-200",
  wallet: " hover:unlock-bg",
};
export const ButtonDisable =
  "text-gray-500 bg-gray-300 cursor-not-allowed hover:bg-gray-300";
export const ButtonSize = {
  big: "h-12 px-5",
  normal: "h-11 px-3",
  small: "h-9 text-12 px-4",
};
export const ButtonBase2 =
  "transition duration-200 cursor-pointer text-xs font-normal rounded text-gray-500 hover:bg-gray-200 w-full py-2 focus:outline-none ";
// ------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------
// Input & Textarea
export const InputBase = "bg-transparent w-4/5 mt-8";

export const TextBoxCommonBase =
  "w-full placeholder-yellow-200 border border-transparent rounded outline-none transition duration-200 text-yellow-400";

export const TextBoxDisable =
  "text-gray-500 bg-gray-300 cursor-not-allowed hover:bg-gray-300 hover:border-transparent focus:border-transparent focus:placeholder-gray-500";

export const TextBoxEnable = "bg-gray-f7 focus:placeholder-red";

export const TextareaBase = "h-120px p-4 resize-none";
// ------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------
// Trade Card
export const TradeCardBase =
  "w-26.5rem sm:w-96px md:w-96px lg:w-26.5rem shadow-2xl rounded-2xl mx-auto divide-y";
// ------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------
// Modal
export const ModalContainer = "absolute translate-center shadow-xl rounded-xl";
export const ModalBase =
  "inline-block align-bottom rounded-xl text-left overflow-hidden shadow-xl transform transition-all sm:align-middle w-full divide-y";
export const ModalWalletBase =
  "bg-red hover:bg-red-700 cursor-pointer flex justify-between py-2 px-5 rounded-2xl my-2 text-base text-white";
export const ModalWalletTitle = "my-auto flex-1 font-semibold";
export const ModalWalletImage = "w-8 h-8 rounded-full overflow-hidden";
export const ModalConnect =
  "mt-6 mb-6 text-center text-red flex justify-center text-lg gap-2";
// ------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------
// Homepage
export const HomepageTitlebase =
  "text-center font-bold mt-8 flex flex-col gap-4";
export const HomepageTitle = "text-6xl text-red";
export const HomepageCardBase =
  "flex text-white gap-4 w-full my-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4";
export const HomepageCardContent =
  "flex-1 rounded-2xl relative h-52 overflow-hidden cursor-pointer shadow-lg";
export const HomepageCardTitle = "text-3xl font-semibold m-5";
export const HomepageCardImg = "absolute right-0 w-11/12 bottom-0 right-2 ";
export const HomepageCardBase2 =
  "flex my-6 flex-wrap lg:justify-between xl:justify-between 2xl:justify-between justify-center lg:gap-0 xl:gap-0 2xl:gap-0 gap-5";
export const HomepageCardBase2Card =
  "rounded-2xl p-8 pb-6 text-white text-xl font-semibold w-92";
export const HomepageCardBase2Content = "flex justify-between gap-2 relative";
export const HomapageCardBase2Title = "text-3xl font-semibold w-52 mb-14";
export const HomepageCardBase2Img = "absolute -right-4 w-40 -top-4";
export const HomepageWalletCard =
  "flex w-full h-56 text-white unlock-bg rounded-3xl shadow-lg overflow-visible my-10 bg-no-repeat relative bg-left bg-contain text-right";
export const HomepageWalletImg =
  "w-80 h-80 overflow-visible -mt-10 bg-no-repeat bg-cover absolute left-5 hidden sm:block";
export const HomepageStats =
  "flex w-full shadow-2xl rounded-3xl mt-8 p-8 gap-10 grid sm:grid-cols-2";
export const HomepageStatsContent = "flex w-full mb-2";
export const HomepageStatsTitle = "flex w-2/3 text-base gap-2 font-medium";
export const HomepageStatsData =
  "flex w-1/3 text-lg text-right text-red font-medium justify-end";
export const HomepageStatsIcon = "text-red mt-0.5 text-lg";

// ------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------
// Farming
export const FarmingCardBase =
  "flex justify-center flex-wrap gap-6 lg:justify-start";
// ------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------
// DRAWER
export const as = "flex justify-center flex-wrap gap-6 lg:justify-start";
// ------------------------------------------------------------------------------------------
