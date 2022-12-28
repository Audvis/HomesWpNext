import { relativeToAbsoluteUrls } from "utils/relativeToAbsoliteUrls";

export const Paragraph = ({ textAlign= "left", content, textColor }) => {
    return <p 
    className="max-w-5xl mx-auto text-lg"
    style={{textAlign: textAlign, color: textColor}}
    dangerouslySetInnerHTML={{__html: relativeToAbsoluteUrls(content)}}></p>;
    }
    