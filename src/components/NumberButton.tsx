export function NumberButton({
  num,
  onClick
}: {
  num: number;
  onClick: (num: number) => void;
}) {
  // eslint-disable-next-line react/button-has-type
  return <button onClick={() => onClick(num)}>{num}</button>;
}
