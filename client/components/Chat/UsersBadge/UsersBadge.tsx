import React from "react";
import { UsersBadgeHost, UsersBadgeContent, UsersBadgeAmount } from "./styled";
import { SupervisedUserCircle, } from '@styled-icons/material/SupervisedUserCircle'
import { colors } from "../../../constants";

interface UsersBadgeProps {
    amount: number;
}

export const UsersBadge = ({ amount }: UsersBadgeProps) => (
    <UsersBadgeHost>
        <UsersBadgeContent>
            <SupervisedUserCircle width={36} height={36} fill={colors.primary}></SupervisedUserCircle>
            <UsersBadgeAmount>{amount}</UsersBadgeAmount>
        </UsersBadgeContent>
    </UsersBadgeHost>
);