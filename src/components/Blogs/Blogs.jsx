import React from 'react'
import Heading from '../Shared/Heading'
import Img1 from '../../assets/blogs/blog-1.jpg'
import Img2 from '../../assets/blogs/blog-2.jpg'
import Img3 from '../../assets/blogs/blog-3.jpg'

const BlogData = [
    {
        title: "How to choose perfect smartwatch",
        subtitle: "minima face fffr oiroihih jorkfji jhjhirf jhue u777eyr7 v hte7egp jhdfjpo jhdufmn jhierfbk.",
        published: "Jan 20, 2024 by Dildhad",
        image: Img1,
    },
    {
        title: "How to choose perfect smartwatch",
        subtitle: "minima face fffr oiroihih jorkfji jhjhirf jhue u777eyr7 v hte7egp jhdfjpo jhdufmn jhierfbk.",
        published: "Jan 20, 2024 by Dildhad",
        image: Img2,
    },
    {
        title: "How to choose perfect smartwatch",
        subtitle: "minima face fffr oiroihih jorkfji jhjhirf jhue u777eyr7 v hte7egp jhdfjpo jhdufmn jhierfbk.",
        published: "Jan 20, 2024 by Dildhad",
        image: Img3,
    },
]

const Blogs = () => {
    return (
        <div className='my-12 '>
            <div className="container">
                {/* Header sectin */}
                <Heading title="Recent News" subtitle={"Explore Our Blogs"} />

                {/* body section */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7'>
                    {/* blog cards */}
                    {
                        BlogData.map((data) => (
                            <div>
                                <div key={data.title} className='bg-white dark:bg-gray-900'>
                                    {/* image section */}
                                    <div className='overflow-hidden rounded-2xl mb-2 '>
                                        <img src={data.image} alt=""  
                                        className='w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500'
                                        />
                                    </div>
                                </div>
                                {/* content section */}
                                <div className='space-y-2 '>
                                    <p className='text-xs text-gray-500'>{data.published}</p>
                                    <p className='font-bold line-clamp-1 '>{data.title}</p>
                                    <p className='line-clamp-2 textsm text-gray-600 dark:text-gray-400 '>{data.subtitle}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default Blogs