import { Reply } from "./Reply";

export const Comment = ({
  userImagePath,
  username,
  commentText,
  likeNum,
  replies,
}) => {
  const showLike = likeNum > 0 ? "/like.svg" : "";
  const showLikeNum = likeNum > 0 ? `${likeNum} คน` : "";

  return (
    <div className="d-flex gap-2 my-2">
      <img
        src={userImagePath}
        width="48"
        height="48"
        className="rounded-circle"
        style={{ objectFit: "cover" }}
      />
      <div>
        <div
          className="rounded rounded-3 p-2"
          style={{ backgroundColor: "#E5E7EB" }}
        >
          <span className="fw-semibold">{username}</span>
          <br />
          <span>{commentText}</span>

          <div className="d-flex align-items-center gap-1">
            <img src={showLike} width={20}></img>
            <span className="text-muted">{showLikeNum}</span>
          </div>
        </div>
        <div>
          {replies.map((rep, i) => (
            <Reply
              key={i}
              userImagePath={rep.userImagePath}
              username={rep.username}
              replyText={rep.replyText}
              likeNum={rep.likeNum}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
