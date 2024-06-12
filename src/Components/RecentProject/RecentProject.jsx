import React from 'react';
import { useEffect } from 'react';
//import '.././Aos.css';
import newImage1 from './blog-1.jpg';
import newImage2 from './blog-2.jpg';
import newImage3 from './blog-3.jpg';

const RecentProject = ({ category, title, author, date, imageSrc }) => {
  return (
    
    <div  className="col-lg-4">
      <article>
        <a href="#">
          <div className="post-img">
            <img src={imageSrc} alt="" className="img-fluid" />
          </div>
          <p className="post-category">{category}</p>
          <h2 className="title">{title}</h2>
          <div className="d-flex align-items-center">
            <div className="post-meta">
              <p className="post-author">{author}</p>
              <p className="post-date">
                <time dateTime={date}>{date}</time>
              </p>
            </div>
          </div>
        </a>
      </article>
    </div>
  );
}

const RecentProjectSection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const recentPosts = [
    {
      category: "Domain & Hosting",
      title: "How to host website on any hosting provider?",
      author: "William Bla",
      date: "Feb 1, 2022",
      imageSrc: newImage1
    },
    {
      category: "Advertisement",
      title: "How to create add on google adwords?",
      author: "Jobi Rol",
      date: "Oct 5, 2022",
      imageSrc: newImage2
    },
    {
      category: "Marketing",
      title: "What is digital marketing and why is it important?",
      author: "Main Dow",
      date: "Dec 22, 2022",
      imageSrc: newImage3
    }
  ];

  return (
    <section id="news" className="recent-posts sections-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Recent Project </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div className="row gy-4">
          {recentPosts.map((post, index) => (
            <RecentProject
              key={index}
              category={post.category}
              title={post.title}
              author={post.author}
              date={post.date}
              imageSrc={post.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default RecentProjectSection;
