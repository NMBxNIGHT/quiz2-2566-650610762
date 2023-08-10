export const PostOwner = ({ posterName, posterId, texts, likes }) => {
  return (
    <div className="vstack gap-3">
      <div className="d-flex align-items-center gap-3">
        <img
          src="/profileImages/myPic.png"
          width="48"
          height="48"
          className="rounded-circle"
          style={{ objectFit: "cover" }}
        />
        <span className="fw-semibold fs-5">
          {posterName} {posterId}
        </span>
      </div>

      <span>{texts}</span>

      <div className="d-flex align-items-center gap-1">
        <img src="/like.svg" width={20}></img>
        <span className="text-muted">{likes} คน</span>
      </div>
      <hr className="m-0 border" />
    </div>
  );
};
