import { Skeleton, Stack, Box } from "@mui/material";

export const CallCard_skeliton = () => {
  return (

  <Box sx={{ display: 'flex', flexWrap: 'wrap', w:1, justifyContent:"center" }}>
    {Array.from({ length: 9 }).map((i, index) => (
        <Stack key={index} sx={{ m: 2, width: { md: 350, xs: 1 } }} spacing={3}>
        {/* <Skeleton variant="text" sx={{ fontSize: '1rem' }} /> */}
        <Skeleton variant="circular" width={100} height={100} />
        <Skeleton variant="rectangular" width={300} height={60} />
        <Skeleton variant="rounded" width={210} height={60} />
      </Stack>
    ))}
  </Box>



  );
};

