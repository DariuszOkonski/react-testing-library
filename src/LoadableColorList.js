import { useEffect, useState } from 'react';

function FakeFetchColors() {
  return Promise.resolve(['red', 'green', 'blue']);
}

function LoadableColorList() {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    FakeFetchColors().then((c) => setColors(c));
  }, []);

  const renderedColors = colors.map((color) => <li key={color}>{color}</li>);

  return <ul>{renderedColors}</ul>;
}

export default LoadableColorList;
