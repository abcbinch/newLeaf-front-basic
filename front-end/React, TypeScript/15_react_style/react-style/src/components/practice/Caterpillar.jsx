import "./pracStyle/caterpillar.scss";

export default function Caterpillar() {
  return (
    <div>
      <div className="larva">
        <div className="body head">
          <div className="eye eye-white">
            <div className="eye eye-black"></div>
          </div>
        </div>
        <div className="body body1"></div>
        <div className="body body2"></div>
        <div className="body body3"></div>
        <div className="body tail"></div>

        {/*  /public/images/grass.png 로드 */}
        <img
          className="grass"
          src={process.env.PUBLIC_URL + "/images/grass.png"}
          alt="잔디"
        />
      </div>
    </div>
  );
}
