import { Link, Router } from '../routes';

const Post =  ({ query }) => (
  <div>
    <h1>{query.slug}</h1>
    <ul>
      <li><Link route="home"><a>Home</a></Link></li>
      <li><a onClick={() => Router.pushRoute('about')}>About</a></li>
      <li><Link route="posts" params={{ slug: 'best-post-ever'}}><a>Post</a></Link></li>
    </ul>
  </div>
);

/**
 * getInitialProps receives a context object with the following properties:
 * pathname - path section of URL
 * query - query string section of URL parsed as an object
 * asPath - String of the actual path (including the query) shows in the browser
 * req - HTTP request object (server only)
 * res - HTTP response object (server only)
 * jsonPageRes - Fetch Response object (client only)
 * err - Error object if any error is encountered during the rendering
 */

Post.getInitialProps = async ({ query }) => {
  return { query }
};


export default Post;