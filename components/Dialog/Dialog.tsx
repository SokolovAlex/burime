import React, { ReactNode } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

interface FormDialogProps {
    isOpen: boolean;
    setOpen: (state: boolean) => void;
    children: ReactNode;
}

export const FormDialog = ({ isOpen, setOpen, children }: FormDialogProps) => {
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog open={isOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    );
}