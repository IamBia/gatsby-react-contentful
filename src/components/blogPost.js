// import React from "react"
// import { Link } from "gatsby"

// const blogPost = ({data}) => {

// const { title, author, image, subtitle } = data.contentfulBlogPost.edges;

//   return (
//     <div className="flex flex-wrap">
//       <div className="col">
//         <Link to={props.slug}>
//           <article>
//             <img src={props.image} alt=""></img>
//             <h2>{props.title}</h2>
//             <p>{props.subtitle}</p>
//             <p>{props.author}</p>
//             <div dangerouslySetInnerHTML={{__html: post.content.childContentfulRichtext.html}}></div>
//           </article>
//         </Link>
//       </div>
//     </div>
//   )
//   }


  
// export default blogPost
// export const pageQuery = graphql`
//     query ($slug: String!){
  
//     contentfulPost(slug: {eq:$slug }){
//       title
//       author
//       subtitle
//       content{
//         childContentfulRichText{
//           html
//         }
//       }
    
//     }
//   }
//   `
