import { Close as CloseIcon } from '@mui/icons-material';
import {
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    keyframes,
    Dialog as MuiDialog,
    styled,
    useTheme,
} from '@mui/material';
import React from 'react';
import type { TButtonUseCase } from 'ts/types';
import Button from './Button';

// Animation keyframes
const shadowDrop = keyframes`
  0% { box-shadow: none; }
  100% { box-shadow: 5px 15px 15px rgba(0, 0, 0, 0.3); }
`;

const StyledDialog = styled(MuiDialog)(({ theme }) => ({
    '& .MuiDialog-paper': {
        borderRadius: '25px',
        border: '1px solid',
        borderColor: theme.palette.primary.dark,
        maxWidth: '700px',
        width: '95%',
        maxHeight: '95vh',
        minHeight: '12rem',
        animation: `${shadowDrop} 5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both`,

        [theme.breakpoints.up('sm')]: {
            width: '75%',
        },
        [theme.breakpoints.up('lg')]: {
            width: '50%',
        },
    },
}));

const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
    padding: theme.spacing(1),
    margin: theme.spacing(0.6),
    position: 'relative',
    '& .MuiTypography-root': {
        textAlign: 'center',
        fontSize: theme.typography.h5.fontSize,
    },
}));

const CloseButton = styled(IconButton)(({ theme }) => ({
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.text.primary,
    transition: 'transform 0.3s ease',
    '&:hover': {
        transform: 'scale(1.2)',
        backgroundColor: 'transparent',
    },
}));

interface DialogProps {
    hideFunction: () => void;
    content: React.ReactNode;
    title: string;
    submitBtn?: {
        onSubmit?: () => void;
        text: string;
        useCase?: TButtonUseCase;
        disabled?: boolean | (() => boolean);
    };
}

const Dialog: React.FC<DialogProps> = ({ hideFunction, content, title, submitBtn }) => {
    const theme = useTheme();

    return (
        <>
            <StyledDialog open onClose={hideFunction}>
                <StyledDialogTitle>
                    {title}
                    <CloseButton
                        aria-label="close"
                        onClick={hideFunction}
                        sx={{
                            right: theme.spacing(0.7),
                            top: theme.spacing(0.7),
                        }}
                    >
                        <CloseIcon fontSize="large" />
                    </CloseButton>
                </StyledDialogTitle>

                <DialogContent dividers sx={{ padding: theme.spacing(2) }}>
                    {content}
                </DialogContent>

                {submitBtn && (
                    <DialogActions sx={{ justifyContent: 'center', padding: theme.spacing(2) }}>
                        <Button
                            onClick={submitBtn.onSubmit}
                            disabled={
                                typeof submitBtn.disabled === 'function' ? submitBtn.disabled() : submitBtn.disabled
                            }
                            text={submitBtn.text}
                            useCase={submitBtn.useCase}
                        />
                    </DialogActions>
                )}
            </StyledDialog>
        </>
    );
};

export default Dialog;
