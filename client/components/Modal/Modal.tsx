import React, { ReactNode } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            backgroundColor: theme.palette.background.paper,
            border: '1px solid #000',
            borderRadius: '3px',
            boxShadow: theme.shadows[5],
        },
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
    }),
);

interface SimpleModalProps {
    isOpen: boolean;
    setOpen: (state: boolean) => void;
    children: ReactNode;
}

export default function SimpleModal({isOpen, setOpen, children }: SimpleModalProps) {
    const classes = useStyles();
    const handleClose = () => setOpen(false);

    return (
        <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={isOpen}
            onClose={handleClose}
            className={classes.modal}
        >
            <Fade in={isOpen}>
                <div className={classes.paper}>
                    {children}
                </div>
            </Fade>
        </Modal>
    );
}