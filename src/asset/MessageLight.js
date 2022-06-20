const MessageLight = ({ theme }) => {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.9976 4.25C25.8973 4.25 27.7248 5.00083 29.0692 6.34808C30.4151 7.6925 31.1673 9.50583 31.1673 11.4042V22.5958C31.1673 26.5483 27.9515 29.75 23.9976 29.75H10.0023C6.0484 29.75 2.83398 26.5483 2.83398 22.5958V11.4042C2.83398 7.45167 6.03423 4.25 10.0023 4.25H23.9976ZM25.5998 11.6167C25.3023 11.6011 25.019 11.7017 24.8051 11.9L18.4173 17C17.5957 17.6814 16.4184 17.6814 15.584 17L9.20898 11.9C8.7684 11.5742 8.15923 11.6167 7.79232 11.9992C7.40982 12.3817 7.36732 12.9908 7.69173 13.4158L7.87732 13.6L14.3232 18.6292C15.1165 19.2525 16.0784 19.5925 17.0857 19.5925C18.0901 19.5925 19.069 19.2525 19.8609 18.6292L26.2515 13.515L26.3648 13.4017C26.7034 12.9908 26.7034 12.3958 26.3492 11.985C26.1523 11.7739 25.8817 11.645 25.5998 11.6167Z"
        fill={theme === "dark" ? "#fff" : "#2C2C2C"}
      />
    </svg>
  );
};

export default MessageLight;
