import React from 'react';

const RecentPost = ({ category, title, author, date, imageSrc }) => {
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

const RecentPostsSection = () => {
  const recentPosts = [
    {
      category: "Domain & Hosting",
      title: "How to host website on any hosting provider?",
      author: "William Bla",
      date: "Feb 1, 2022",
      imageSrc: "../src/assets/images/blog/blog-1.jpg"
    },
    {
      category: "Advertisement",
      title: "How to create add on google adwords?",
      author: "Jobi Rol",
      date: "Oct 5, 2022",
      imageSrc: "../src/assets/images/blog/blog-2.jpg"
    },
    {
      category: "Marketing",
      title: "What is digital marketing and why is it important?",
      author: "Main Dow",
      date: "Dec 22, 2022",
      imageSrc: "../src/assets/images/blog/blog-3.jpg"
    }
  ];

  return (
    <section id="news" className="recent-posts sections-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Recent Blog Posts</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div className="row gy-4">
          {recentPosts.map((post, index) => (
            <RecentPost
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

export default RecentPostsSection;
