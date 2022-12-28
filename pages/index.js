import { BlockRenderer } from "components/BlockRenderer";
import { MainMenu } from "components/MainMenu/index";
import { getPageStaticProps } from "utils/getPageStaticProps";

export default function Home(props) {
  // console.log("props", props);
  return <div>
    <MainMenu items={props?.mainMenuItems} callToActionLabel={props.callToActionLabel} callToActionDestination={props.callToActionDestination}/>
    <BlockRenderer blocks={props?.blocks}/>
    </div>;
}

export const getStaticProps = getPageStaticProps;