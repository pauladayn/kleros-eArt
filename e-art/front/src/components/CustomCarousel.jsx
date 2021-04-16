import React, {useState, useEffect} from 'react'

const CustomCarousel = () => {
    const [image, setImage] = useState('');

    const imgs = [
        'https://i.pinimg.com/originals/62/4d/8b/624d8b41ef0000965ccfd321903b6e20.jpg',
        'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2018/08/fondos-pantalla-full-hd-animales_4.jpg'
    ]  

    useEffect(() => {
        const interval = setInterval(() => {
            if(!image) {
                setImage(imgs[0])
            } else if (image === imgs[0]) {
                setImage(imgs[1])
            } else if (image === imgs[1]) {
                setImage(imgs[0])
            } 

        }, 1000);

        return () => clearInterval(interval);
    }, [image])

    return (
        <div className='h-auto mb-24 w-6/12 mx-auto flex flex-col items-center'>
            <p className='font-mono mb-5 text-center'>Nuestras mejores obras:</p>
            <hr className='mb-10 w-full'/>
            <img src={image} className='w-8/12 rounded-md shadow-xl'/>
        </div>
    )
}

export default CustomCarousel


