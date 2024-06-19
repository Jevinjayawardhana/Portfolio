
import { gridItems } from '@/data'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'

const Grid = () => {
  return (
   <section id="about">
    <BentoGrid>
    {gridItems.map(({id, title, description,className, img, imgClassName, titleClassName,spareImg})=> (
        <BentoGridItem
            id = {id}
            key = {id}
            title = {title}
            description = {description}
            
            className = {className}
            img = {img}
            imgClassName = {imgClassName}
            titleClassName = {titleClassName}
            spareImg = {spareImg}

        
        />
            
    )) 
    
    }
    </BentoGrid>
   </section>
  )
}

export default Grid


/*
import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            // remove icon prop
            // remove original classname condition
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
*/