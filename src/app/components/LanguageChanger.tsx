'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useState, ChangeEvent, useTransition } from 'react';
import { IconButton, Menu, MenuItem, CircularProgress } from '@mui/material';
import Image from 'next/image';

export default function LocaleSwitcher() {
  const [isPending, startTransition] = useTransition();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const router = useRouter();
  const activeLocale = useLocale();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onSelectChange = (locale: string) => {
    startTransition(() => {
      router.replace(`/${locale}`);
    });
    handleClose();
  };

  return (
    <div>
      <IconButton onClick={handleClick} aria-label="change language">
        <Image
          src="/lang-icon.png"
          alt="language-icon"
          height={30}
          width={35}
        />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => onSelectChange('en')}>English</MenuItem>
        <MenuItem onClick={() => onSelectChange('ar')}>Arabic</MenuItem>
        {isPending && (
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 1,
            }}
          >
            <CircularProgress size={24} />
          </div>
        )}
      </Menu>
    </div>
  );
}
