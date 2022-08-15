import { shapeSubparameters } from "@domains/relic";
import { useQuery } from "@hooks/useQuery";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export const RelicList = (): JSX.Element => {
  const { relicList } = useQuery();

  return (
    <TableContainer sx={{ maxHeight: 600 }} component={Paper}>
      <Table stickyHeader={true}>
        <TableHead>
          <TableRow>
            <TableCell>聖遺物名</TableCell>
            <TableCell align={"right"}>種類</TableCell>
            <TableCell align={"right"}>サブパラメーター(1)</TableCell>
            <TableCell align={"right"}>サブパラメーター(2)</TableCell>
            <TableCell align={"right"}>サブパラメーター(3)</TableCell>
            <TableCell align={"right"}>サブパラメーター(4)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {relicList.map((item) => (
            <TableRow key={item.created_at.getTime()}>
              <TableCell>{item.name}</TableCell>
              <TableCell align={"right"}>{item.relicType}</TableCell>
              {shapeSubparameters(item.subParameters).map((subParameter) => (
                <TableCell
                  align={"right"}
                  key={String(item.created_at.getTime()) + subParameter}
                >
                  {subParameter}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
