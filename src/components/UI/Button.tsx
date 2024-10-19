type Props = { onChange: () => void };
export default function Button({ onChange }: Props) {
  return <div onChange={onChange}>Button</div>;
}
