
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';



const items = [
  {
    src: 'https://robehotel.com.au/wp-content/uploads/2022/07/ROBE-FOOD137-1290x650.jpg',
    altText: '',
    caption: 'Delcious Food and Drinks',
    key: 1,
  },
  {
    src: 'https://blog.cetrain.isu.edu/hubfs/princeville-horseback-riding-825x525-1.jpg',
    altText: '',
    caption: 'Horse Riding',
    key: 2,
  },
  {
    src: 'https://www.colorado.edu/sportsclub/kayaking/sites/default/files/styles/slider/public/block/cu_kayaking_club.jpg?itok=X_T1t094',
    altText: '',
    caption: 'Kayaking',
    key: 3,
  },
  {
    src: 'https://static01.nyt.com/images/2014/08/15/sports/15minigolf1/15minigolf1-superJumbo.jpg',
    altText: '',
    caption: 'Mini Golf',
    key: 4,
  },
  {
    src: 'https://blog-assets.thedyrt.com/uploads/2018/07/southernriverfishing.jpg',
    altText: '',
    caption: 'Fishing',
    key: 5,
  },
];

function Slider(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default Slider;
