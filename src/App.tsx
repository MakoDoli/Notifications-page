import { GlobalStyles } from "./assets/components/GlobalSyles";
import Comment from "./assets/components/Comments/Comment";
import { Container } from "./assets/components/Comments/Comments.styled";
import ContainerHeader from "./assets/components/ContainerHeader/ContainerHeader";
import { Data1 } from "./assets/components/Comments/Data";
import { Data2 } from "./assets/components/Comments/Data";
import Message from "./assets/components/Comments/Message";
import { useState } from "react";
// import mark from "./assets/images/avatar-mark-webber.webp";

function App() {
  const [read, setRead] = useState<number[]>([]);
  const [number, setNumber] = useState(15);
  const [amount, setAmount] = useState(3);

  const markRead = (num: number) => {
    if (!read.includes(num)) {
      setNumber(num);
      setRead((prevNumArray) => [...prevNumArray, num]);
      setAmount(amount - 1);
    } else {
      return;
    }
  };
  const markAllRead = () => {
    setRead((previousArray) => [...previousArray, 0, 1, 2]);
    setAmount(0);
  };
  const empty = () => {
    console.log("");
  };

  return (
    <Container>
      <GlobalStyles />
      <ContainerHeader amount={amount} handler={markAllRead} />
      {Data1.map((elem, index) => (
        <Comment
          key={index}
          src={elem.src}
          name={elem.name}
          event={elem.event}
          post={elem.post}
          chess={elem.chess}
          number={index}
          dot={
            index < 3 && index !== number && !read.includes(index)
              ? elem.dot
              : ""
          }
          time={elem.time}
          background={
            index < 3 && index !== number && !read.includes(index)
              ? false
              : true
          }
          classname={elem.classname}
          handler={markRead}
        />
      ))}
      <Message />
      {Data2.map((elem, index) => (
        <Comment
          key={index}
          number={15}
          src={elem.src}
          name={elem.name}
          event={elem.event}
          post={elem.post}
          chess={elem.chess}
          dot={elem.dot}
          time={elem.time}
          classname={elem.classname}
          background={true}
          handler={empty}
        />
      ))}
    </Container>
  );
}

export default App;
