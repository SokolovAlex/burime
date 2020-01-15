import React, { ReactNode } from 'react'
import { ButtonHost } from './styled'
import { ButtonType } from '../../constants/enums';

interface IButtonProps {
    children: ReactNode;
    type?: ButtonType,
    onClick: () => void;
    width?: number;
}

export const Button = ({ children, width, type = ButtonType.primary, onClick }: IButtonProps) => (
    <ButtonHost width={width} onClick={onClick} buttonType={type}>
        {children}
    </ButtonHost>
)

interface ISubmitButton {
    children: ReactNode
}

export const SubmitButton = ({ children }: ISubmitButton) => (
    <ButtonHost buttonType={ButtonType.primary} type="submit">{children}</ButtonHost>
)

export { ButtonType };
