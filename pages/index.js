import { gql } from "@apollo/client";
import client from "client";
import { BlockRenderer } from "components/BlockRenderer";
import { MainMenu } from "components/MainMenu/index";
import { cleanAndTransformBlocks } from "utils/cleanAndTransformBlocks";
import { mapMainMenuItems } from "utils/mapMainMenuItems";

export default function Home(props) {
  // console.log("props", props);
  return <div>
    {/* <MainMenu items={props?.mainMenuItems}/> */}
    <BlockRenderer blocks={props?.blocks}/>
    </div>;
}

export const getStaticProps = async () => {
  const {data} = await client.query({
    query: gql` 
    query PageQuery {
      nodeByUri(uri: "/") {
        ... on Page {
          id
          title
          blocksJSON
        }
      }
      acfOptionsMainMenu {
        mainMenu {
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
    `
  });
  const blocks = cleanAndTransformBlocks(data?.nodeByUri?.blocksJSON)
  return {
    props: {
      blocks,
      mainMenuItems: mapMainMenuItems(
        data.acfOptionsMainMenu.mainMenu.menuItems
      ),    },
  };
}