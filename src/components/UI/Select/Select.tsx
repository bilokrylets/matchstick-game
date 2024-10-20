import styles from './select.module.scss';

type Props = {
  label?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { label: string; value: string }[];
};

export default function Select({
  label = 'Choose your option',
  value,
  onChange,
  options,
}: Props) {
  return (
    <div>
      <label>{label}</label>
      <select className={styles.select} value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
