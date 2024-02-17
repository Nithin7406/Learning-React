export default function Age(props) {
  if (props.age >= 18) {
    return <div>Adult</div>;
  } else {
    return <div>Not an Adult</div>;
  }
}
