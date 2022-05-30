import "../../App.css";
import image from "../../ServicePagePhoto/imageIndex";

function SubmitTab(props) {
  return (
    <footer className="w-screen flex justify-between items-center bg-white h-[92px] px-[10vw] border-t border-grey300 fixed bottom-0 ">
      <button className="btn-secondary" onClick={props.onClickBack}>
        <img src={image.BackBlue} className="inline " /> ย้อนกลับ{" "}
      </button>
      <button className="btn-primary" onClick={props.onClickNext}>
        ดำเนินการต่อ <img src={image.BackWhite} className="inline" />
      </button>
    </footer>
  );
}

export default SubmitTab;
