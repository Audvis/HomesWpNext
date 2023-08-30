import { Heading } from 'components/Heading';
import { Cover } from '../Cover';
import { Paragraph } from '../Paragraph';
import { theme } from 'theme';

export const BlockRenderer = ({ blocks }) => {
    // console.log("bloks", blocks[0].innerBlocks)
    if (!blocks) return null;
    return blocks.map((block) => {
           switch (block.name) {  
            case "core/paragraph":
                return (
                    <Paragraph
                        key={block.id}
                        textAlign={block.attributes.align}
                        textColor={theme[block.attributes.textColor] || block.attributes?.style?.color?.text}
                        content={block.attributes.content}
                    />
                );  
            case "core/heading":
                return (
                    <Heading 
                        key={block.id} 
                        textAlign={block.attributes.textAlign} 
                        level={block.attributes.level} 
                        content={block.attributes.content} 
                    />
                );
                case "core/cover":
                    return (<Cover key={block.id} background={block?.attributes?.url}>
                         <BlockRenderer blocks={block.innerBlocks} />
                        </Cover>)
                    default:
                        return null;
            }
        });
    }