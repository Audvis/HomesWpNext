import { gql } from "@apollo/client";
import client from "client";
import { BlockRenderer } from "components/BlockRenderer";
import { getPageStaticProps } from "utils/getPageStaticProps";
// import { Page } from "components/Page";
import { cleanAndTransformBlocks } from "utils/cleanAndTransformBlocks";
import { MainMenu } from "components/MainMenu";


export default function page(props) {
    console.log("props", props?.blocks);
    return (
        <div>
          <MainMenu items={props?.mainMenuItems} callToActionLabel={props.callToActionLabel} callToActionDestination={props.callToActionDestination}/>
          <BlockRenderer blocks={props?.blocks}/>
        </div>
    );
}

export const getStaticProps = getPageStaticProps;

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
