import { Box, Typography } from "@mui/material";
import Avatar from "boring-avatars";

export const CenterComponent = () => {
  return (
    <Box>
      {/*タイトル*/}
      <Box className="text-center">
        <Typography variant="h4" className="font-semibold text-text">
          タイトル
        </Typography>
        <Typography variant="h5" className="text-text">
          2024/01/01に投稿
        </Typography>
      </Box>

      {/*トップ画像*/}
      <Box>
        <Box sx={{ height: "250px" }} className="bg-white"></Box>
      </Box>

      {/*本文*/}
      <Box className="mt-6">
        {/*ハンドルネーム*/}
        <Box className="flex items-center">
          <Box>
            <Avatar variant="beam" name="HandleName" />
          </Box>
          <Box className="ml-3">
            <Typography variant="h5" className="font-semibold text-text">
              HandleName
            </Typography>
          </Box>
        </Box>

        {/*本文*/}
        <Box className="mt-3">
          <Typography variant="body1" className="text-text">
            ここに本文が入ります。いい感じのところで折り返してくれると嬉しいな。
            ここに本文が入ります。いい感じのところで折り返してくれると嬉しいな。
            ここに本文が入ります。いい感じのところで折り返してくれると嬉しいな。
            ここに本文が入ります。いい感じのところで折り返してくれると嬉しいな。
            ここに本文が入ります。いい感じのところで折り返してくれると嬉しいな。
            ここに本文が入ります。いい感じのところで折り返してくれると嬉しいな。
            ここに本文が入ります。いい感じのところで折り返してくれると嬉しいな。
            ここに本文が入ります。いい感じのところで折り返してくれると嬉しいな。
            ここに本文が入ります。いい感じのところで折り返してくれると嬉しいな。
            ここに本文が入ります。いい感じのところで折り返してくれると嬉しいな。
            ここに本文が入ります。いい感じのところで折り返してくれると嬉しいな。
            ここに本文が入ります。いい感じのところで折り返してくれると嬉しいな。
            ここに本文が入ります。いい感じのところで折り返してくれると嬉しいな。
            ここに本文が入ります。いい感じのところで折り返してくれると嬉しいな。
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
