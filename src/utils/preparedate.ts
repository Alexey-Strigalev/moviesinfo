const prepareDate = (value: string) => {
  const year = new Date(value).getFullYear();
  return  year;
}

export default prepareDate;