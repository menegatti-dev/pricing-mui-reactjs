import { styled } from '@material-ui/core/styles';
import {
    CardHeader,
} from '@material-ui/core';

export const Header = styled(CardHeader)(({ theme }) => ({
    backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
}));

export const CardPricing = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
}));