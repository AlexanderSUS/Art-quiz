const isNull = (value) => value === null;

const getIndexesOfPlayedCategories = (results) => {
  return results.reduce((acc, res, index) => {
    if (!res.every(isNull)) {
      acc.push(index);
    }

    return acc;
  }, []);
};

export default getIndexesOfPlayedCategories;
