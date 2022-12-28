import { gql } from "@apollo/client";
import client from "client";
import { BlockRenderer } from "components/BlockRenderer";
// import { getPageStaticProps } from "utils/getPageStaticProps";
// import { Page } from "components/Page";
import { cleanAndTransformBlocks } from "utils/cleanAndTransformBlocks";


export default function page(props) {
    console.log("props", props?.blocks);
    return (
        <div>
            <BlockRenderer blocks={props?.blocks}/>
        </div>
    );
}

export const getStaticProps = async (context) => {
    console.log("context", context);
    const uri = `/${context.params.slug.join('/')}/`;
    console.log("uri", uri);
    const {data} = await client.query({
        query: gql` 
        query PageQuery($uri: String!) {
          nodeByUri(uri: $uri) {
            ... on Page {
              id
              title
              blocksJSON
            }
          }
        }
        `,
        variables: {
             uri

        }
      });
      const blocks = cleanAndTransformBlocks(data?.nodeByUri?.blocksJSON)
      return {
        props: {
            title: data.nodeByUri.title,
            blocks,
        },
      };
};

export const getStaticPaths = async ({ params }) => {
    const { data } = await client.query({
        query: gql`
            query AllPagesQuery {
                    pages {
                         nodes {
                            uri
                        }
                    }
                    properties {
                      nodes {
                        uri
                      }
                    }
                 }
            `,
    });

    return {
       paths: data.pages.nodes.map(page => ({
        params: {
            slug: page.uri.substring(1, page.uri.length - 1).split('/')
        }
       })),
         fallback: false,
    }
};
