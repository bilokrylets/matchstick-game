import styles from './rangeInput.module.scss';

type Props = {
  children?: string | number | string[];
  value: number;
  min: number;
  max: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export default function RangeInput({
  children,
  value,
  min,
  max,
  onChange,
}: Props) {
  return (
    <div className={styles.container}>
      <label>{children}</label>
      <input
        className={styles.rangeInput}
        type="range"
        value={value}
        min={min}
        max={max}
        onChange={onChange}
      />
    </div>
  );
}
