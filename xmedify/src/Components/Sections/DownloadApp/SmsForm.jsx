import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";

export default function SmsForm() {
  return (
    <Box mb={5}>
      <Typography fontWeight={600} mb={1}>
        Get the link to download the app
      </Typography>
      <Box
        component="form"
        sx={{
          display: "flex",
          gap: 2,
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <TextField
          sx={{
            border: "1px solid #F0F0F0",
            flex: 1,
            "& input[type=number]": {
              "-moz-appearance": "textfield",
              "-webkit-appearance": "none",
              margin: 0,
            },
            "& input[type=number]::-webkit-inner-spin-button": {
              "-webkit-appearance": "none",
            },
            "& input[type=number]::-webkit-outer-spin-button": {
              "-webkit-appearance": "none",
            },
          }}
          placeholder="Enter phone number"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">+91</InputAdornment>
            ),
          }}
          onInput={(e) => {
            e.target.value = e.target.value.slice(0, 10);
          }}
          type="number"
          required
        />
        <Button type="submit" size="large" variant="contained" disableElevation>
          Send SMS
        </Button>
      </Box>
    </Box>
  );
}
