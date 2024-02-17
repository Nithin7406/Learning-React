// const person = {
//   name: "Gregorio Y. Zara",
//   theme: {
//     backgroundColor: "black",
//     color: "pink",
//   },
// };

export default function VariableInJsx(props) {
  // console.log("props", props);
  return <div style={props.person.theme}>{props.name}</div>;
}
