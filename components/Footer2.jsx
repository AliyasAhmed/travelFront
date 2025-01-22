import React from 'react'
import { footerLinks } from '../src/constants'

const Footer = () => {
    return (
        <footer className='py-5 sm:px-10 px-5'>
            <div className="screen-max-width">
                <div className="">
                    <p className='font-semibold text-xs text-gray'>
                        More ways to shop {' '}
                        <span className='underline  text-blue'>
                            Find Nearest Agent
                        </span>
                        {' '} or {' '}
                        <span className='underline  text-blue'>
                            Other Destinations
                        </span>
                        {' '} near you

                    </p>
                    <p className='font-semibold text-xs text-gray'>
                        or call 7889 402 820  {' '}
                    </p>
                </div>
                <div className='bg-neutral-700 my-5 h-[1px] w-full' />


                <div className="flex md:flex-row flex-col md:items-center justify-between">
                    <p className="font-semibold text-xs text-gray">Copyright @ 2024 WebInvolve Inc. All rights reserved</p>
                    <div className="flex">
                        {footerLinks.map((link, i) => (
                            <p key={i} className='font-semibold text-xs text-gray'>{link}{' '}
                                {i !== footerLinks.length - 1 && (
                                    <span className='mx-2'> | </span>
                                )} </p>
                        ))}
                    </div>
                </div>
            </div>

        </footer>

    )
}

export default Footer