import { Relic } from "@domains/relic";

interface RelicListProps {
  relicList: Array<Relic>;
}

export const RelicList = ({ relicList }: RelicListProps): JSX.Element => {
  return (
    <>
      {relicList.map((item) => (
        <div key={item.created_at.getUTCSeconds()}>
          <p>{item.name}</p>
          <p>{item.relicType}</p>
          {item.subParameters.map((subParameter) => (
            <p key={subParameter.name}>
              {subParameter.name}: {subParameter.value}
            </p>
          ))}
        </div>
      ))}
    </>
  );
};
