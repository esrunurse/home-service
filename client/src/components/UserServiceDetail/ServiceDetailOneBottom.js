import fakeData from '../../components/AdminCategoryPage/CategoriesData'
import { GreyTextTwo } from './CheckOutForm'
import image from '../../HomePagePhoto/imageIndex'
import icons from '../../AdminPhoto/imageIndex'

function ServiceDetailOneBottom() {
  return (
    // <div className="flex justify-between mx-40 pt-8">
    <div className="w-[735px] px-6 pt-6 pb-8  flex flex-col justify-between border border-grey300 rounded-lg">
      <div className="mb-5">
        <GreyTextTwo>เลือกรายการบริการล้างแอร์</GreyTextTwo>
      </div>
      <div>
        {fakeData.map((data) => {
          return (
            <div
              className="w-[687px] h-[105px] pt-[23px] pb-[26px] flex justify-between 
            items-center last:border-b-0 border-b border-solid border-grey300"
            >
              <div className="h-14 w-[343px] flex flex-col justify-between">
                <div className="text-black text-lg font-medium leading-[150%]">
                  {data.categoryName}
                </div>
                <div className="text-grey700 text-sm leading-[150%] flex">
                  <img
                    className="mr-[13.33px]"
                    alt="Price Tag"
                    src={image.tag}
                  />
                  <div>{data.createdDate} ฿ / เครื่อง</div>
                </div>
              </div>
              <div className="w-[140px] h-[43px] flex justify-between items-center">
                <button
                  className="w-[43px] h-[43px] bg-white border rounded-lg border-blue600 
                  flex items-center justify-center"
                >
                  <img className="h-0.5 w-2.5" alt="Minus" src={icons.minus} />
                </button>
                2
                <button
                  className="w-[43px] h-[43px] bg-white border 
                  rounded-lg border-blue600 flex items-center justify-center"
                >
                  <img
                    className="h-2.5 w-2.5"
                    alt="Plus Symbol"
                    src={icons.bluePlusSymbol}
                  />
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
    // </div>
  )
}

export default ServiceDetailOneBottom
