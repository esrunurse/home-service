// Next step
export function BgCircleGrey(image) {
  return (
    <div
      className="h-10 w-10 bg-white flex justify-center 
    items-center rounded-full border-2 border-grey300"
    >
      {image.children}
    </div>
  )
}

// Current status
export function CerrentCircle(image) {
  return (
    <div
      className="h-10 w-10 bg-white flex justify-center 
    items-center rounded-full border-2 border-blue500"
    >
      {image.children}
    </div>
  )
}

// Text : Grey700; font-size 16px; line-height 150%; font-weight 500;
export function GreyTextOne(text) {
  return (
    <div className="text-base text-grey700 font-medium leading-[150%]">
      {text.children}
    </div>
  )
}
// Text : Grey700; font-size 20px; font-weight 400; line-height; 150%;
export function GreyTextTwo(text) {
  return (
    <div className="text-grey700 text-xl font-normal leading-[150%]">
      {text.children}
    </div>
  )
}
// Text : Blue500; font-size: 16px; font-weight 500; line-height; 150%;
export function BlueTextFive(text) {
  return (
    <div className="text-base text-blue500 font-medium leading-[150%]">
      {text.children}
    </div>
  )
}
