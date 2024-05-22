import React from 'react';
import classNames from 'classnames';
// import * as Radix from '@radix-ui/themes';
import './index.css';

// const RadixBadge = Radix.Badge;
export interface BadgeProps extends React.HTMLAttributes<HTMLElement> {
  asChild?: boolean;
  children?: React.ReactNode;
  className?: string;
  color?: 'gray' | 'orange' | 'sky' | 'violet' | 'green' | 'red' | 'yellow' | 'blue';
  size?: 'small' | 'medium' | 'large';
  variant?: 'strong' | '';
}

// const Badge = React.forwardRef<React.ElementRef<typeof RadixBadge>, React.ComponentPropsWithRef<typeof RadixBadge>>(
//   ({ className, children, size = 'medium', variant = '', ...props }, ref) => {
//     return (
//       <RadixBadge className={classNames('badge', className, variant, size)} ref={ref} {...props}>
//         {children}
//       </RadixBadge>
//     );
//   }
// );

const Badge = React.forwardRef<HTMLElement, BadgeProps>(
  ({ className, children, color = 'gray', size = 'medium', variant = '', ...props }, ref) => {
    return (
      <span className={classNames('badge', className, variant, color, size)} ref={ref} {...props}>
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

export { Badge };
