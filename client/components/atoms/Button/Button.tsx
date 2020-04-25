import React, { ReactNode } from 'react'
import { ButtonHost, ButtonType } from './styled'

interface IButtonProps {
    children: ReactNode;
    type?: ButtonType,
    onClick: () => void;
    width?: number;
    size?: string;
}

export const Button = ({ children, width, size, type = ButtonType.primary, onClick }: IButtonProps) => (
    <ButtonHost size={size} width={width} onClick={onClick} buttonType={type}>
        {children}
    </ButtonHost>
)

interface ISubmitButton {
    children: ReactNode
}

export const SubmitButton = ({ children }: ISubmitButton) => (
    <ButtonHost buttonType={ButtonType.primary} type="submit">{children}</ButtonHost>
)

export { ButtonType }
