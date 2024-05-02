import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import { FC, memo } from 'react';

const ContactSection: FC = memo(() => (
  <IconButton
    sx={{ mt: '20px' }}
    component="a"
    href="https://github.com/0o22/mui-password-generator"
    target="_blank"
    aria-label="Github: 0o22"
  >
    <GitHubIcon />
  </IconButton>
));

export default ContactSection;
