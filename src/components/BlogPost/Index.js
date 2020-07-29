import React from 'react';
import HomePosts from '../HomePosts/Index';
import './style.scss';
import data from '../../data/data1.js';

const BlogPost = (props) => {
  return (
    <section className='blog-sec'>
      <div className='bt-div'>
        <div className='blogs'>
          {
            (data.map = (val) => {
              return (
                <HomePosts
                  key={val.id}
                  imgUrl={val.imgUrl}
                  heading={val.heading}
                  para={val.para}
                  date={val.date}
                />
              );
            })
          }
        </div>
      </div>
    </section>
  );
};

export default BlogPost;
