import { queryRelics } from "@db/queryRelics";
import { convertToRelics } from "@utils/convertFromQueryOutput";

export const queryFetcher = ({ id }: { id: number }) =>
  queryRelics({ user_id: id }).then((res) => convertToRelics(res));
