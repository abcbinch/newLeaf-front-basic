export default function SpeechChat({ chat }) {
  //chat:{content, type}
  return (
    <>
      <div className="speech me">
        <span className="msg-box">채팅 내용</span>
      </div>
      <div className={`speech ${chat.type}`}>
        {chat.type === "other" && <span className="nickname">nickname</span>}
        {/* chat의 type일 때만 보여준다. */}
        <span className="msg-box">{chat.content}</span>
      </div>
      <div className="notice">공지사항</div>
    </>
  );
}
