import { Checkbox, Typography } from "../../utilities";
const CategoryList = ({ filter }) => {
  return (
    <div className="pb-5">
      {filter.map(({ title, data }, i) => (
        <div key={i}>
          <Typography variant="subheader1" className="py-2">
            {title}
          </Typography>
          {data.map((item) => (
            <div key={item}>
              <Checkbox>
                <Typography>{item}</Typography>
              </Checkbox>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
