import { Typography, Box, Stack } from '@pankod/refine-mui';
import { propertyReferralsInfo } from 'constants/index';
import ProgressBar from './ProgressBar';



const PropertyReferrals = () => {
  return (
    <Box
      p={4}
      bgcolor="#FCFCFC"
      id="chart"
      minWidth={490}
      display="flex"
      flexDirection="column"
      borderRadius="15px"
    >
      <Typography fontSize={18} fontWeight={600} color="#11142D">
        Property Referrals
      </Typography>

      <Stack my="20px" direction="column" gap={4}>
        {propertyReferralsInfo.map((bar) => <ProgressBar key={bar.title} {...bar} />)}
      </Stack>
    </Box>
  )
}

export default PropertyReferrals