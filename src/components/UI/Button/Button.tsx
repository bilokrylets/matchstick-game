import { ReactNode } from 'react';
import styles from './button.module.scss';

type Props = {
  children: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
};

export default function Button({ onClick, children, disabled }: Props) {
  return (
    <button className={styles.button} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
