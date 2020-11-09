import React from 'react'

const FeaturesSliderItem = () => {
  const featuresData = [
    {id: 1, image: '1', text: 'Первое целевое преимущество'},
    {id: 2, image: '2', text: 'Второе целевое преимущество'},
    {id: 3, image: '3', text: 'Третье целевое преимущество'},
    {id: 4, image: '4', text: 'Четвертое целевое преимущество'}
  ];
  return (
      <>
        {
          featuresData.map(({image, text, id}) => (
          <div className="features-slider_item" key={id}>
            <div className="features-img" style={{backgroundImage: `url("./images/${image}.svg")`}}></div>
            <div className="features-feature">{text}</div>
          </div>
          ))
        }
      </>
  )
}

export default FeaturesSliderItem
