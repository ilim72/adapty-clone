const variants = {
  primary: 'bg-primary text-white hover:bg-primary-hover',
  secondary: 'border border-border text-text-primary hover:bg-surface-hover',
  ghost: 'text-text-secondary hover:text-text-primary hover:bg-surface-hover',
};

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) {
  return (
    <button
      className={`
        inline-flex items-center justify-center
        font-medium rounded-md
        transition-all duration-fast
        active:scale-95
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
