import React, { useEffect, useState } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import Image from '@/resolvers/Image'

const Wrapper = styled.div`
  position: relative;
  /* width, height */
`

const Gradient = styled.div`
  position: absolute;
  inset: 1 0 0 0;
  padding: 4em 0;
  background-repeat: repeat;
`

const Text = styled.p`
  position: absolute;
  inset: 1 0; /* position */
`

function rotateTitles(titles, index, setIndex, isIncreased, setIsIncreased) {
  if (index == titles.length - 2) {
    setIsIncreased(false)
  }
  if (index == 1) {
    setIsIncreased(true)
  }
  if (isIncreased) {
    setIndex((prevIndex) => {
      return prevIndex + 2
    })
  }
  if (!isIncreased) {
    setIndex((prevIndex) => {
      return prevIndex - 2
    })
  }
}

function TopMenu({ data }) {
  console.log('top-menu : data ', data)
  const social = data?.social

  const [index, setIndex] = useState(() => {
    return 1
  })
  const [isIncreased, setIsIncreased] = useState(() => {
    return true
  })
  const titles = [
    'Mengantar Sampai Tujuan',
    'Aman dan Nyaman',
    'Keselamatan Paling Utama',
  ]

  const DELAY_IN_MILISECONDS = 2501

  setTimeout(
    () => rotateTitles(titles, index, setIndex, isIncreased, setIsIncreased),
    DELAY_IN_MILISECONDS,
  )
  const imageTemp = '/img/top-menu.jpeg'
  return (
    <div className="h-[40rem] md:h-[550px]">
      <Wrapper>
        <Image
          className="z1 h-[25rem]"
          src={data?.photo?.image}
          alt={data?.photo?.alt}
        />
        <Gradient className="bg-opacity-29 bg-black" />
        <div className="absolute left-0 top-1 z-10 h-[25rem] w-screen content-center">
          <div className="grid-cols0 mt-10rem grid">
            <div className="text-center">
              <p className="animate-slidein text-2xl">
                Sandy Travel Door to Door
              </p>
              <p className={`text-ms animate-slidein`}>
                {titles[index] !== undefined ? titles[index] : 'Amanah'}
              </p>
              <p className="animate-slidein ml-3 mr-2 text-sm">
                Jl. kp senen rt 2 rw 2 desa nyalindung kecamatan cugenang
                kabupaten cianjur
              </p>
            </div>
          </div>
        </div>
        <button
          className="absolute bottom-20 left-2 z-20"
          onClick={() => {
            rotateTitles(titles, index, setIndex, isIncreased, setIsIncreased)
          }}
        >
          <StaticImage
            className="z1 h-[40px] w-[40px] sm:h-[65px] sm:w-[65px]"
            src="../../static/img//arrr-left.webp"
            layout="constrained"
            formats={['auto', 'png', 'webp', 'jpeg']}
            quality={60}
            alt=""
          />
        </button>
        <button
          className="absolute bottom-20 right-2 z-20"
          onClick={() => {
            rotateTitles(titles, index, setIndex, isIncreased, setIsIncreased)
          }}
        >
          <StaticImage
            className="z1 h-[40px] w-[40px] sm:h-[65px] sm:w-[65px]"
            src="../../static/img/arrr-right.webp"
            layout="constrained"
            formats={['auto', 'png', 'webp', 'jpeg']}
            quality={60}
            alt=""
          />
        </button>
      </Wrapper>
      <div className="bg-gray-99 relative w-screen sm:h-[9rem]">
        <div className="top-15 absolute right-0 m-2 mt-5 text-xl text-black">
          <div className="grid-cols0 grid text-sm">
            <a className="mt1.5 flex flex-row p-1" href={''}>
              <i class="ri-smartphone-line"></i>{' '}
              <p className="ml-1">+62-812-1454-0566</p>
            </a>
            <a
              className="mt1.5 flex flex-row p-1 no-underline"
              href={social?.whatsapp2}
            >
              <i class="ri-smartphone-line"></i>{' '}
              <p className="ml-1">+62-895-3929-04728</p>
            </a>

            <a className="mt1.5 flex flex-row p-1" href={social?.location}>
              <i class="ri-map-pin-line"></i>
              <p className="ml-1">
                kp senen rt 2 rw 2 desa nyalindung kecamatan cugenang kabupaten
                cianjur
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopMenu
