import { StyledHeader } from "./ContainerHeader.styled";
interface Props {
  amount: number;
  handler: () => void;
}
export default function ContainerHeader(props: Props) {
  return (
    <StyledHeader>
      <h1>Notifications</h1>
      <div className="number">{props.amount}</div>
      <div onClick={props.handler} className="mark">
        Mark all as read
      </div>
    </StyledHeader>
  );
}
