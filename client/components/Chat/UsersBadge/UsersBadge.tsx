import React from "react";
import { UsersBadgeHost, UsersBadgeContent, UsersBadgeAmount } from "./styled";
import { SupervisedUserCircle, } from '@styled-icons/material/SupervisedUserCircle'

interface UsersBadgeProps {
    amount: number;
}

export const UsersBadge = ({ amount }: UsersBadgeProps) => (
    <UsersBadgeHost>
        <UsersBadgeContent>
            <SupervisedUserCircle width={24} height={24}></SupervisedUserCircle>
            <UsersBadgeAmount>{amount}</UsersBadgeAmount>
        </UsersBadgeContent>
    </UsersBadgeHost>
);