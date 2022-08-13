import { Relic } from "@domains/relic";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

interface RelicListProps {
  relicList: Array<Relic>;
}

export const RelicList = ({ relicList }: RelicListProps): JSX.Element => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>聖遺物名</TableCell>
            <TableCell>種類</TableCell>
            <TableCell>サブパラメーター(1)</TableCell>
            <TableCell>サブパラメーター(2)</TableCell>
            <TableCell>サブパラメーター(3)</TableCell>
            <TableCell>サブパラメーター(4)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {relicList.map((item) => (
            <TableRow key={item.created_at.getUTCSeconds()}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.relicType}</TableCell>
              {item.subParameters.map((subParameter) => (
                <TableCell key={subParameter.name}>
                  {subParameter.name}: {subParameter.value}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
