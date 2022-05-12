import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function Variants() {
  return (
    <Stack spacing={2}>
      <Skeleton variant="rectangular" width={300} height={88} />
      <Skeleton variant="text" />
      <Skeleton variant="rectangular" width={250} height={40} />
      <Skeleton variant="rectangular" width={250} height={40} />
      
      <Skeleton variant="rectangular" width={350} height={40} />
      <Skeleton variant="text" />
      <Skeleton variant="text" />
    </Stack>
  );
}