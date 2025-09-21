import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

const CategoryNews = () => {
  const { id } = useParams();
  const newsData = useLoaderData();
  //   console.log(newsData);
  const [categoryNews, setCategoryNews] = useState([]);
     console.log(categoryNews)
  // ! FILTER NEWS DATA BY CATEGORY;

  useEffect(() => {
    if (id === "0") {
      setCategoryNews(newsData);
      return;
    } else if (id === "1") {
      const filteredNews = newsData.filter(
        (news) => news.others.is_today_pick === true
      );
      setCategoryNews(filteredNews);
      return;
    } else {
      const filteredNews = newsData.filter(
        (news) => news.category_id === parseInt(id)
      );
      setCategoryNews(filteredNews);
      return;
    }
  }, [id, newsData]);

  return <div>News {categoryNews.length}</div>;
};

export default CategoryNews;
