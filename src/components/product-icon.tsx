import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';

type ProductIconProps = {
  icon: IconDefinition;
  color: 'primary' | 'secondary';
};

export default function ProductIcon({ icon, color }: ProductIconProps) {
  return (
    <div
      className={clsx(
        'flex h-[34px] w-[34px] items-center justify-center rounded-full',
        color === 'primary' ? 'bg-secondary' : 'bg-primary',
      )}
    >
      <FontAwesomeIcon
        icon={icon}
        className={color === 'primary' ? 'text-primary' : 'text-secondary'}
      />
    </div>
  );
}
