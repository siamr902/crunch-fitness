import React from "react";

const Weather = ({ data }: any) => {
  console.log(data)
  return <div>{data}</div>;
};

export default Weather;

export async function getServerSideProps() {
  const res = await fetch("www.themealdb.com/api/json/v1/1/random.php");
  const data = "Hi"

  return {
    props: {
      data,
    },
  };
}
