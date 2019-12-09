import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogPost from '../components/blogPost'


const blogData = [
  {
    title: "This is a title",
    description: "this is a description",
    image: "https://unsplash.com/photos/B_x6zSxF2rw",
    id: "first-blog-post",
  },
  {
    title: "Second blog post",
    description: "this is a description too",
    image: "https://unsplash.com/photos/npxXWgQ33ZQ",
    id: "second-blog-post",
  }]


const IndexPage = () => (
  
  <Layout>
    <SEO title="Home" />
    <div className="intro flex flex-wrap">
      <div className="col w-12/12">
        <h1>Hellow World!</h1>
        <p>Hi, I am Bia, a fullstack developer living the life</p>
      </div>
    </div>
    <div className="about py-5">
      <div className="flex flex-wrap">
        <div className="col w-6/12">
          <h2>About me</h2>
          <p>
            Front-end developer, mother, Brazilian and always curious to learn
            more. I've always been passionate about technology and since 2016, I
            spend my time learning more and more code.
          </p>
        </div>
      </div>
    </div>

    <div className="Blog">
      <div className="flex-wrap flex">
        <div className="col w-12/12 ">
        <div className="text-center my-5">
        <h2>Latest Posts</h2>
        </div>
      
          <div className="flex flex-wrap">

          { blogData.map((info) => 
          <div className="col w-6/12">
            <BlogPost
              title={info.title}
              description={info.description}
              image={info.image}            
              key={info.id}
            /> 
          </div>
          )}
          </div>
        </div>
      </div>
    </div>

  </Layout>
)

export default IndexPage
