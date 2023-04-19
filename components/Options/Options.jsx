const Options = ({ options }) => {
  return (
    <>
      <ul className="flex p-0 ml-4 mr-4 mt-4 flex-col gap-2">
        {options.map(({ option }, index) => (
          <li
            className="p-2 grid h-10 text-center last-of-type:mb-4 border-white border rounded-xl"
            key={index}
          >
            {option}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Options;
