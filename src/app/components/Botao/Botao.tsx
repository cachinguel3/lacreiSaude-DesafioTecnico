interface BotaoProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
    variant?: 'primary' | 'secondary';
}

export default function Botao({ children, icon, iconPosition = 'left', variant = 'primary', ...props }: BotaoProps) {
    const baseClasses = "inline-flex items-center justify-center gap-3 min-w-[141px] h-12 px-4 rounded-xl text-base font-bold text-center transition-all duration-200 active:translate-y-[1px] outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2";
    
    const primaryClasses = "bg-[var(--color-background-accent)] text-white shadow-[0_10px_24px_rgba(13,115,72,0.18)] hover:bg-[var(--color-background-accent-hover)]";
    const secondaryClasses = "bg-transparent text-[var(--color-background-accent)] border-2 border-[var(--color-background-accent)] hover:bg-[var(--color-background-success)]";
    
    const classes = `${baseClasses} ${variant === 'secondary' ? secondaryClasses : primaryClasses} ${props.className || ''}`.trim();

    return (
        <button className={classes} {...props}>
            {icon && iconPosition === 'left' && <span className="flex h-6 w-6 items-center justify-center text-base" aria-hidden="true">{icon}</span>}
            <span>{children}</span>
            {icon && iconPosition === 'right' && <span className="flex h-6 w-6 items-center justify-center text-base" aria-hidden="true">{icon}</span>}
        </button>
    );
}