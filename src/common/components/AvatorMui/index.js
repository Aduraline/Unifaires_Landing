import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

export default function ImageAvatars({ image, title }) {
  return (
    <Stack direction="row">
      <Avatar sx={{ width: 150, height: 150 }} alt={title} src={image} />
    </Stack>
  );
}
