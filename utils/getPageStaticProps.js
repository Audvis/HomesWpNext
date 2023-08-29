import client from "client";
import { gql } from "@apollo/client";
import { cleanAndTransformBlocks } from "utils/cleanAndTransformBlocks";
import { mapMainMenuItems } from "utils/mapMainMenuItems";

export const getPageStaticProps = async (context) => {
    console.log('context',context);
    const uri = context.params?.slug ? `/${context.params.slug.join('/')}/` : '/';
    // console.log("uri", uri);
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
          acfOptionsMainMenu {
            mainMenu {
              callToActionButton{
                label
                destination{
                  ... on Page{
                    uri
                  }
                }
              }
              menuItems {
                menuItem {
                  destination {
                    ... on Page {
                      uri
                    }
                  }
                  label
                }
                items {
                  destination {
                    ... on Page {
                      uri
                    }
                  }
                  label
                }
              }
            }
          }
        }
        `,
        variables: {
            uri,
        }
      });
      const blocks = cleanAndTransformBlocks(data?.nodeByUri?.blocksJSON)
      return {
        props: {
          blocks,
          mainMenuItems: mapMainMenuItems(
            data.acfOptionsMainMenu.mainMenu.menuItems
          ), 
          callToActionLabel: data.acfOptionsMainMenu.mainMenu.callToActionButton.label,
          callToActionDestination: data.acfOptionsMainMenu.mainMenu.callToActionButton.destination.uri,
        },
      };
};