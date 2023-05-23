import { StyledComment } from "./Comments.styled";

interface Props {
  src: string;
  name: string;
  event: string;
  post: string;
  chess: string;
  dot: string;
  time: string;
  classname: string;
  background: boolean;
  number: number;
  handler: (num: number) => void;
}
export default function Comment(props: Props) {
  // const checkNum = (num: number) => {
  //   props.handler(num);
  // };

  return (
    <StyledComment
      onClick={() => props.handler(props.number)}
      background={props.background}
    >
      <div className="text-dot">
        <div className="text">
          <img className="avatar" src={props.src} alt="avatar"></img>
          <div className="text-time">
            <p>
              <span className="clickable name">{props.name}</span>
              <span>{props.event}</span>
              <span className="clickable post">{props.post}</span>
              <span className="clickable chess">{props.chess}</span>
              <span>
                <img className={props.classname} src={props.dot} alt=""></img>
              </span>
            </p>
            <div className="time">{props.time}</div>
          </div>
        </div>
      </div>
    </StyledComment>
  );
}
