import image from "../AdminPhoto/imageIndex";

function AdminEditedHeader(props) {
  return (
    <header
      className="h-20 w-full flex items-center justify-between 
        border-b border-grey300 px-10 py-10 bg-white"
    >
      <div className="flex justify-between h-12 w-44">
        <button onClick={props.back}>
          <img alt="Arrow Icon" src={image.arrow} className="w-10 h10" />
        </button>
        <div className="w-52 h-12">
          <div className="font-normal text-grey700 text-xs">{props.title}</div>
          <div className="font-medium text-xl">{props.name}</div>
        </div>
      </div>
      <div className="buttons flex justify-between h-11 w-64 px-1">
        <button
          className="btn-secondary 
            w-28 h-11 "
          type="button"
          onClick={props.back}
        >
          ยกเลิก
        </button>
        <button
          className="btn-primary 
          w-28 h-11"
        >
          ยืนยัน
        </button>
      </div>
    </header>
  );
}
export default AdminEditedHeader;
