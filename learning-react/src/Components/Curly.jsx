// const person = {
//   name: "Gregorio Y. Zara",
//   theme: {
//     backgroundColor: "black",
//     color: "pink",
//   },
// };

export default function VariableInJsx(props) {
  return <div style={props.person.theme}>{props.name}</div>;
}
