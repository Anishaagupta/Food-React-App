import React from 'react';
import HomePosts from '../HomePosts/Index';
import './style.scss';
import data from '../../data/data2.js';

const BlogPost = (props) => {
  return (
    <React.Fragment>
      <section className='blog-secc'>
        <div className='bt-divv'>
          <div className='blogss'>
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
    </React.Fragment>
  );
};

export default BlogPost;
