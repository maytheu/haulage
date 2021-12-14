import { Typography } from "../../utilities";

const CardJournal = ({ highlight, image, title, date }) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  function formatDate(date) {
    var d = new Date(date),
      month = "" + d.getMonth(),
      day = "" + d.getDate(),
      year = d.getFullYear();
    if (day.length < 2) day = "0" + day;
    return `${months[month]} ${day}, ${year}`;
  }

  return (
    <div className="relative flex flex-col break-words bg-white w-full mb-8 shadow-sm mx-2.5 rounded-lg lg:w-72 border-2">
      <div className="pb-5 flex flex-col md:pb-0 md:flex-row lg:flex-col">
        <div className="w-full h-full md:w-2/3 lg:w-full lg:h-44">
          <img src={image} alt={`logo`} className="w-full h-full" />
        </div>
        <div className="flex flex-col pl-3 my-1  md:w-1/3 lg:w-full">
          <Typography color="black" variant="small" className="py-1">
            {formatDate(date)}
          </Typography>
          <hr className="border-b border-gray-700 w-3" />
          <Typography className=" font-semibold" capitalize>
            <span className="sr-only">{title}</span>
            {title}
          </Typography>
          <Typography variant="small" capitalize>
            {highlight.length > 75
              ? `${highlight.substring(0, 75)} ...`
              : highlight}
          </Typography>
        </div>
      </div>
    </div>
  );
};

CardJournal.defaultProps = {
  highlight: "",
};

export default CardJournal;
