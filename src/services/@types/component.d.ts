/* eslint-disable unused-imports/no-unused-vars */

/**
 * @name MergeComponentProps
 * @description ComponentPropsWithRef와 커스텀 Props 타입을 병합합니다.
 */
type MergeComponentProps<T extends React.ElementType, P extends object = {}> = Omit<
  React.ComponentPropsWithRef<T>,
  keyof P
> &
  P;

// Button

type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'secondary-green' | 'outlined';
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

// Chip

type ChipVariant = 'primary' | 'secondary';
type ChipSize = 'sm' | 'md';

// Badge

type BadgeStyle = 'tertiary' | 'outlined-purple' | 'outlined-green' | 'filled-purple' | 'filled-green' | 'dark';
type BadgeSize = 'sm' | 'md' | 'lg';
