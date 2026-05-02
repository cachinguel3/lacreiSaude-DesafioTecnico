import styles from './Botao.module.css';

interface BotaoProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
    variant?: 'primary' | 'secondary';
}

export default function Botao({ children, icon, iconPosition = 'left', variant = 'primary', ...props }: BotaoProps) {
    return (
        <button className={styles.botao} {...props}>
            {icon && iconPosition === 'left' && <span className={styles.icon} aria-hidden="true">{icon}</span>}
            <span>{children}</span>
            {icon && iconPosition === 'right' && <span className={styles.icon} aria-hidden="true">{icon}</span>}
        </button>
    );
}