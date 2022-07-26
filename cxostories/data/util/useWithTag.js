// @author Parth Patel
// @for converting array list to key value pair for tags input view
export default (list) => {
  // console.log(list);
  let data = [];
  if (list && list?.length > 0) {
    for (let i = 0; i < list.length; i++) {
      data[i] = [
        {
          label: list[i],
          value: list[i],
        },
      ];
    }
  }
  // console.log(data);
  return data;
};
