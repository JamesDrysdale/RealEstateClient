import { Typography, Box, Stack } from '@pankod/refine-mui';

interface ProgressBarProps {
    title: string,
    percentage: number,
    color: string
}

const ProgressBar = ({title, percentage, color}: ProgressBarProps) => (
    <Box width="100%">
        <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography fontSize={16} fontWeight={500} color="#11142D">
                {title}
            </Typography>
            <Typography fontSize={16} fontWeight={500} color="#11142D">
                {percentage}%
            </Typography>
        </Stack>
        <Box mt={2} position="relative" width="100%" height="8px" borderRadius={1} bgcolor="#E4E8EF">
            <Box 
                width={`${percentage}%`}
                bgcolor={color}
                position="absolute"
                height="100%"
                borderRadius={1}
            />
        </Box>
    </Box>
)

export default ProgressBar;